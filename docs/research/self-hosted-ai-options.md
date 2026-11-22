# AI model options for Self-hosted instances and the Hosted service

Research for [#43](https://github.com/robskidmore/family/issues/43). Prices and versions were checked on 2026-11-22.

## Question

The AI Assistant answers questions like "can I watch TV?" from a Household's Agreements, Chores and notes. A Self-hosted instance must run with no third-party accounts (ADR 0003), and no feature can be held back for paying customers (ADR 0001). Self-hosters often run the Docker image on a Raspberry Pi or a home server. What are the realistic ways to give such an instance an AI Assistant, and what does each cost when the Hosted service pays?

## Short answer

Build one model setting with three values: off, a cloud provider with the Admin's own API key, or any OpenAI-compatible URL. Ship it off by default. The Vercel AI SDK covers all three with first-party, Apache-2.0 packages, so we need no community Ollama provider. The Hosted service can pay for a small cloud model. At about 2,000 tokens in and 150 out per question, Claude Haiku 5.5 costs about $0.0003 a question, or roughly 9 cents a month for a Household that asks ten questions a day. A local model works on a mini PC. On a Raspberry Pi 5 it is slow enough (around half a minute per answer) that I would call it supported but not recommended.

## Assumptions behind the cost numbers

The token counts below are my estimate, not a measurement. Measure them once the prompt exists.

| Part of the request | Estimated tokens |
| --- | --- |
| System prompt (rules for answering a Member, refusal wording) | 300 |
| A Household's Agreements, Chores and notes | 1,000 to 2,000 |
| The question | 20 |
| The answer | 80 to 150 |

I priced each question at 2,000 input tokens and 150 output tokens, which errs high. Claude 4.7 and later models use a tokenizer that produces about 30% more tokens for the same text ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)), so the Claude rows already sit at the top of that range. To re-check, log `usage.inputTokens` and `usage.outputTokens` from the AI SDK result for a sample Household and multiply by the rates below.

## Option 1. Bring your own API key

The Admin pastes a key from Anthropic, OpenAI, Google or an OpenAI-compatible service such as OpenRouter. The instance calls that provider directly.

**Setup burden.** Low. Create an account with the provider, add billing, copy a key into the Household settings or an env var. No extra container.

**Answer quality.** The small cloud models are good at this task. A rule lookup over a couple of thousand tokens is reading comprehension, not reasoning, and Anthropic's own guidance puts Haiku at "simple tasks" ([pricing page, cost optimization](https://platform.claude.com/docs/en/about-claude/pricing)). I have not run an evaluation. The risk worth testing is the case where no Agreement covers the question. The model should say "ask an Adult" instead of inventing a rule.

**Cost per question if the Hosted service pays** (standard tier, 2,000 in and 150 out):

| Model | Input $/MTok | Output $/MTok | Per question | Source |
| --- | --- | --- | --- | --- |
| Claude Haiku 5.5 (prompts up to 100k) | 0.10 | 0.50 | $0.000275 | [Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) |
| Claude Haiku 4.5 | 1.00 | 5.00 | $0.00275 | [Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) |
| Claude Sonnet 5 | 2.00 | 10.00 | $0.0055 | [Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) |
| gpt-5-nano | 0.05 | 0.40 | $0.00016 | [OpenAI](https://developers.openai.com/api/docs/pricing) |
| gpt-6-luna | 0.10 | 0.50 | $0.000275 | [OpenAI](https://developers.openai.com/api/docs/pricing) |
| gpt-5-mini | 0.25 | 2.00 | $0.0008 | [OpenAI](https://developers.openai.com/api/docs/pricing) |
| gemini-2.5-flash-lite | 0.10 | 0.40 | $0.00026 | [Google](https://aistudio.google.com/docs/pricing) |
| gemini-3.1-flash-lite | 0.25 | 1.50 | $0.000725 | [Google](https://aistudio.google.com/docs/pricing) |

Notes on the table:

- The Agreements block is the same on every question from a Household, so prompt caching applies. On Haiku 5.5 a cache hit costs $0.01/MTok, a tenth of the base rate. A 5-minute cache write costs 1.25x, so caching pays off only when Members ask more than one question within five minutes. Don't build for it at first.
- gpt-5-nano is a reasoning model. OpenAI bills reasoning tokens as output, so its real cost depends on the reasoning effort setting. Set it to the lowest value or the 150-token estimate is wrong.
- Gemini's free tier uses submitted content to improve Google products. The paid tier does not ([Google pricing](https://aistudio.google.com/docs/pricing)). A Household's notes about its Members should not go to a free tier, and our setup docs should say so.
- Google lists gemini-2.5-flash as deprecated, rerouting on 2026-12-01. Pick a model ID that is not on a deprecation list.

At $0.000275 a question, 300 questions a month costs a Household about $0.08. That is small next to the email delivery and backups the Hosted service already pays for.

**Vercel AI SDK support.** First-party. `ai` 7.0.179, `@ai-sdk/anthropic` 4.0.107, `@ai-sdk/openai` 4.0.122 and `@ai-sdk/google` 4.0.124, all Apache-2.0 (npm registry, 2026-11-22). Each provider reads its key from an env var such as `ANTHROPIC_API_KEY` and accepts a `baseURL` override ([AI SDK Anthropic provider](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic)). The docs also suggest Vercel AI Gateway with one `AI_GATEWAY_API_KEY`. That is a fine choice for the Hosted service. It is a poor default for self-hosters, because it adds a Vercel account on top of the model provider's.

## Option 2. A local model through Ollama or another OpenAI-compatible server

The self-hoster runs Ollama, LM Studio, llama.cpp's server or vLLM, and points the instance at its URL.

**Setup burden.** Medium. One more container (`ollama/ollama` ships amd64 and arm64 images, 3.4 GB and 2.9 GB, checked on Docker Hub 2026-11-22), a model pull of 1 to 5 GB, and enough RAM to hold the model next to Postgres, the app and the worker. Some details the setup docs must cover:

- Ollama's default context window is 4,096 tokens ([Ollama FAQ](https://docs.ollama.com/faq)). A Household with long notes will overflow it silently. Set `OLLAMA_CONTEXT_LENGTH` or pass `num_ctx`.
- Ollama unloads a model after 5 minutes idle ([Ollama FAQ](https://docs.ollama.com/faq)). The first question after that pays a reload. `OLLAMA_KEEP_ALIVE` changes it, at the cost of holding the RAM.
- Ollama binds to 127.0.0.1 by default. In Compose the app reaches it by service name, so `OLLAMA_HOST=0.0.0.0` is needed inside the Ollama container.
- GPU acceleration in Docker needs nvidia-container-toolkit on Linux, and does not work in Docker Desktop on macOS ([Ollama FAQ](https://docs.ollama.com/faq)).

**Which small models.** From the [Ollama library](https://ollama.com/library), checked 2026-11-22:

| Model | Download | Context | Notes |
| --- | --- | --- | --- |
| llama3.2:1b | 1.3 GB | 128K | Old but well benchmarked on a Pi |
| llama3.2:3b | 2.0 GB | 128K | The model in most Pi benchmarks |
| qwen3.5:2b | 2.7 to 3.1 GB | 256K | Thinking model. Turn thinking off or answers slow down a lot |
| qwen3.5:4b | 3.3 to 4.0 GB | 256K | Same |
| gemma4:e2b | 4.6 GB (q4_K_M) | 128K | Bundles image input, so it is larger than its parameter count suggests |
| phi4-mini | 3.8B params | | |

On an 8 GB Pi 5, llama3.2:3b or qwen3.5:2b fits next to the rest of the stack. gemma4:e2b is tight.

**Speed.** These are tokens generated per second, CPU only, from [Jeff Geerling's ai-benchmarks](https://github.com/geerlingguy/ai-benchmarks) with llama3.2:3b:

| Hardware | Tokens/s | Time for a 150-token answer |
| --- | --- | --- |
| Raspberry Pi 5, 8 GB | 4.61 | about 33 s |
| Raspberry Pi 5, 16 GB | 4.88 | about 31 s |
| GMKtec G3 Plus, Intel N150, 16 GB | 9.06 | about 17 s |
| Minisforum MS-R1 | 12.12 | about 12 s |
| M4 Mac mini, 32 GB (GPU) | 41.31 | about 4 s |

A paper testing 25 quantized models on a Pi 5 with Ollama reports 5 to 15 tokens/s for models up to 1.5B and 2 to 5 tokens/s for 3B models ([arXiv 2511.07425](https://arxiv.org/html/2511.07425v1)). Neither source reports prompt processing speed on a Pi 5, and it matters here, because the instance sends 2,000 tokens of Agreements before the model writes a word. The times above leave that out, so real waits are longer. Measure it with `ollama run --verbose` on a Pi before promising anything. Streaming the answer helps a child at a Kiosk see something happen.

**Answer quality.** Weaker than the cloud models, and I have not measured how much. 1B to 4B models are more likely to invent a rule that isn't in the Agreements, or to drift from a strict "only answer from these rules" instruction. That failure is worse here than in most apps, because a Member who is a child will act on a made-up "yes". Before we recommend any local model, write a small set of Household fixtures with known answers, including questions no Agreement covers, and score each candidate model on it.

**Cost to the Hosted service.** None directly. We would not run local models for Hosted Households. A GPU server costs more than the cloud API at this volume.

**Vercel AI SDK support.** Use the first-party `@ai-sdk/openai-compatible` 3.0.94 (Apache-2.0) with `baseURL: "http://ollama:11434/v1"` ([AI SDK OpenAI-compatible providers](https://ai-sdk.dev/providers/openai-compatible-providers)). Ollama serves `/v1/chat/completions` with streaming and tools, and ignores the API key ([Ollama OpenAI compatibility](https://docs.ollama.com/api/openai-compatibility)). The same provider reaches LM Studio, vLLM and OpenRouter. The AI SDK docs list two Ollama-specific providers, `ollama-ai-provider-v2` and `ai-sdk-ollama`, and both are community packages ([AI SDK Ollama](https://ai-sdk.dev/providers/community-providers/ollama)). We don't need either. One caveat from the same docs: if we pass a `guarded-fetch` transport to block untrusted URLs, it also rejects a local `baseURL` until that origin is in `trustedOrigins`.

## Option 3. Feature off

**Setup burden.** None. **Quality.** No answers. Members read the Agreements themselves. **Cost.** None. **AI SDK.** Not loaded.

This has to be the default for a fresh Self-hosted instance, because both other options need something the instance doesn't have on first start: an account, or a second server. Every screen must work with the AI Assistant off.

## Tension with the ADRs

- **ADR 0003 (no third-party accounts).** Option 1 needs an account with a model provider, so it can only be opt-in. The instance must start and run fully with the AI Assistant off. Nothing else in the app may come to depend on it.
- **ADR 0005 (no extra containers by default).** That ADR rejected Redis because it added a container to every Self-hosted instance. Ollama would do the same. Ship it as an optional Compose profile (`docker compose --profile ai up`), not as a fourth default service.
- **ADR 0001 (no closed features).** The code is the same everywhere, so there is no closed feature. There is a practical gap, though. A Hosted Household gets a fast, accurate Haiku answer, while a Pi owner with no API key gets a 30-second answer from a 3B model, or nothing. That fits the ADR's framing (the Hosted service sells running the app, and here that includes paying the model bill), but the docs should state it plainly. The license side is clean: the AI SDK packages are Apache-2.0 and `ai-sdk-ollama` is MIT, all compatible with AGPL-3.0.
- **Privacy.** Options 1 and the Hosted service send a Household's Agreements and notes about its Members to a model provider. Self-hosters who chose self-hosting for privacy may care. The setting screen should name the provider the text goes to.

## Recommendation

1. One server-side config: `AI_PROVIDER` (`off`, `anthropic`, `openai`, `google`, `openai-compatible`), `AI_MODEL`, `AI_API_KEY`, `AI_BASE_URL`. Default `off`.
2. Use only first-party AI SDK packages: `@ai-sdk/anthropic`, `@ai-sdk/openai`, `@ai-sdk/google`, `@ai-sdk/openai-compatible`.
3. Hosted service: Claude Haiku 5.5 or gpt-6-luna. Both cost about $0.0003 a question at the estimate above.
4. Self-hosted docs: recommend bring-your-own key for Pi owners, and a local model on an N150-class mini PC or better. Ship an optional `ai` Compose profile with Ollama and a pinned small model.
5. Before choosing a default local model, build a fixture set of Household Agreements with expected answers, including unanswerable questions, and score the candidates.

## Open questions

- Prompt processing speed for 2,000 tokens on a Pi 5. No primary source found.
- Real token counts once the prompt exists.
- Should the AI Assistant answer a Member who has no login at a Kiosk, or only signed-in Users?
- `GLOSSARY.md` has no entry for Agreement or AI Assistant yet.
