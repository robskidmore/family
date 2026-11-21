import { describe, expect, it } from "vitest";

import { getInstanceSettings } from "./instance-settings";
import { createTestDb } from "./testing";

describe("instance settings", () => {
  it("exist on a freshly migrated database, with no push keys yet", async () => {
    const db = await createTestDb();

    const settings = await getInstanceSettings(db);

    expect(settings.vapidPublicKey).toBeNull();
    expect(settings.vapidPrivateKey).toBeNull();
  });

  it("are the same row on every read", async () => {
    const db = await createTestDb();

    const first = await getInstanceSettings(db);
    const second = await getInstanceSettings(db);

    expect(second.createdAt).toEqual(first.createdAt);
  });
});
