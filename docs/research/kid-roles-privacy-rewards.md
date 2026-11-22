# How other family apps handle kid roles, privacy and rewards

Research for #42, feeding map #39. Researched 2026-11-22 from help centers, product pages and App Store listings. Help-center pages change often, so each claim links the page it came from. Where I only had a review or a third-party page, the text says so.

## Short answer

- Most organizers have two roles at most. Cozi has one: everyone with a login can view, add, edit and delete everything. FamilyWall and Greenlight split admin from member, and kids land in the member bucket.
- Kids without email get in one of two ways. FamilyWall has a "Child account" for kids without an address. Skylight and Greenlight's Family Hub skip the login and put kids on a shared wall screen with a parent PIN in front of the risky actions. That matches our Kiosk.
- I found no general family organizer with notes parents keep from kids. The closest is MyStudyLife, a student planner whose parent app has private parent notes. Cozi reviewers ask for private lists, and Cozi says it has no restricted access at all. This is an open gap, and our Member notes would be new ground.
- Rewards work almost the same way everywhere. A parent sets a point value on a Chore, the kid marks it done, a parent approves, points pile up, and the kid spends them on a reward the parent defined. Money apps (Greenlight, Homey) swap points for real dollars and add save/spend/give jars.
- The complaints repeat across apps. Kids given parent rights can do everything. There's no approve step. Notifications go to kids who have no email. Points get stuck. Paywalls move basic features behind a subscription. And OurHome shut its servers down with no export.

## App by app

### Cozi

- Up to 12 people share one account. Each person signs in with their own email and the one shared family password. ([Cozi FAQ](https://cozi.com/faq))
- Cozi says it "does not offer a restricted access option," and everyone added with an email gets "full access to view/add/edit/delete any data in your account." ([Cozi FAQ](https://cozi.com/faq))
- Kids need an email to join. "Kid profiles are just like adult profiles." Kids can add events, add to shared lists, make their own lists and change their own settings. ([Get your kids on Cozi](https://www.cozi.com/?p=37828))
- There's no chore or reward feature. Cozi suggests a recurring list and the "Uncheck all" button to reset it each day. ([Get your kids on Cozi](https://www.cozi.com/?p=37828))
- Complaints from the [App Store listing](https://apps.apple.com/us/app/id407108860):
  - A 2019 parent had to uncheck kids' names in "notify" on every event because the kids have no email.
  - A 2024 reviewer asked to make their own lists private.
  - A 2024 reviewer said the redesigned month view shows two events per day and Cozi Gold is no longer worth the price.
  - The listing's privacy label says Cozi shows ads and may use identifiers to track users across other apps.

### OurHome (discontinued)

- OurHome was the best-known free points-and-rewards chore app. AlternativeTo lists it as discontinued with the mobile apps gone. ([AlternativeTo](https://alternativeto.net/software/ourhome/about/)) A competitor's blog dates the last update to October 2020 and the server shutdown to late 2023. That's marketing from a rival, so treat the dates as unverified. ([Kunba blog](https://kunba-website.pages.dev/blog/ourhome-shut-down-best-alternatives-2026))
- Its model, from user reviews only, since the official site no longer resolves ([Justuseapp reviews](https://justuseapp.com/en/app/879717020/ourhome-chores-and-rewards/reviews)):
  - Several admins could approve and assign tasks.
  - Kids saw their own chores on their own devices. One parent checked that the child view could not take points from siblings.
  - Parents set point values per chore, with deductions for bad behavior. Points rolled over. Rewards unlocked at point levels, and some families used them for outings or screen time.
  - Kids could attach a photo as proof of a finished chore.
- One reviewer said the server "completely shuts down without warning" and logged everyone out. Others said setup was "overly complicated" and manual chore sorting reset every day.
- The lesson for a self-hosted app is the shutdown itself. Families lost their points history with no export.

### FamilyWall

- A family founder or any administrator can invite members by email, SMS or link. A parent can "create a Child account if your child doesn't have an email address." ([How can I invite members?](https://support.familywall.com/en/support/solutions/articles/47001013699-how-can-i-invite-members-))
- Admins hand out and revoke admin rights. A third-party forum answer says some shared lists, such as the shopping list, are editable by admins only. That isn't official, so I haven't confirmed it. ([Justuseapp forum](https://forums.justuseapp.com/en/post/PQCDL6I19K/the-app-is-not-letting-me-update-or-edit-shopping-list))
- Lists can be private or shared, including "a private or shared to-do list, wish list or chore checklist for kids." ([App Store listing](https://apps.apple.com/us/app/id496889629))
- Location sharing is set per member with four choices: Never, Always, Temporary (one hour by default) and Places only. ([Share your location](https://support.familywall.com/en/support/solutions/articles/47001239510-share-your-location-with-one-or-several-members)) It's the most granular visibility control I found in any of these apps.
- FamilyWall has no rewards or points system. Location and calendar sync are Premium, at $7.99 a month or $44.99 a year. ([App Store listing](https://apps.apple.com/us/app/id496889629))

### Greenlight

- Greenlight is a debit card and banking app for kids that has grown into a family organizer it calls Family Hub. Kids sign in to the Greenlight app with a username or phone number and see their chore list, a Progress page and an All view. ([How can my children see their chores?](https://help.greenlight.com/hc/en-us/articles/360019317134-How-can-my-children-see-their-chores-and-jobs))
- When a kid checks off a chore, the parent gets a notification. A pay-per-chore payment waits for parent approval before it reaches the kid's account. Kids can suggest their own chores. ([Can my child suggest a chore?](https://help.greenlight.com/hc/en-us/articles/47733548954523-Can-my-child-suggest-a-chore-in-the-Greenlight-app)) Parents can also pay allowance weekly, biweekly or monthly without tying it to chores.
- On the Family Hub wall screen, anyone can view chores and mark them done without a PIN. A single 4-digit admin PIN, shared by both parents, guards creating, editing and deleting chores and calendar events and connecting calendars. Approval happens in the parent's phone app, not on the Hub. ([How does the PIN work?](https://help.greenlight.com/hc/en-us/articles/52145295812763-How-does-the-PIN-work-on-Greenlight-Family-Hub), [How do Chores work on Family Hub?](https://help.greenlight.com/hc/en-us/articles/52141594156571-How-do-Chores-work-on-Greenlight-Family-Hub)) The help center blocked direct fetches, so the PIN details come from search-indexed text of those pages.
- Teens can "claim up-for-grabs chores" to earn more. ([Chores and allowance page](https://greenlight.com/chores-and-allowance-app-for-kids))
- Each investment trade a kid makes needs parent approval. ([App Store listing](https://apps.apple.com/us/app/greenlight-for-families/id1049340702))
- Reviewers say the chore list can't be put in time order, which makes it hard for neurodiverse kids. Kids also want time-based reminders. Plans run $5.99 to $24.98 a month. ([App Store listing](https://apps.apple.com/us/app/greenlight-for-families/id1049340702))

### S'moresUp

- Each family member has a profile. Parents guide younger kids, and older kids run their own tasks. Kids earn "S'mores" points for chores and spend them on rewards the family sets up. ([App Store listing](https://apps.apple.com/us/app/id1287367596))
- Reward Approval and Penalty Management (taking points away) are Premium features, at $9.99 a month or $99.99 a year after a 45-day trial. ([App Store listing](https://apps.apple.com/us/app/id1287367596))
- A "Family Circle" lets a family share posts with trusted families outside the household. ([S'moresUp help](https://smoresup.zendesk.com/hc/en-us/articles/28454670612759-Have-Something-to-Share-with-Your-Connected-Families-Create-a-Post-with-Visibility-as-Family-Circle))
- Reviews from 2019 to 2022 complain about slow loading, a layout that doesn't fit tablets, and "If my kid puts their s'mores into a reward to save, it doesn't allow me to move them back to the bank." The developer says it fixed the last one. ([App Store listing](https://apps.apple.com/us/app/id1287367596))

### Homey

- Parents set recurring or one-time chores and keep unpaid responsibilities apart from paid jobs. Allowance goes to a bank account (US only) or gets marked as paid in cash. The app also tracks IOUs. ([App Store listing](https://apps.apple.com/us/app/id1033286805))
- Money sits in jars tied to savings goals, and kids can use save, spend and donate jars. Multiple jars per child, unlimited members and bank links need a subscription. ([App Store listing](https://apps.apple.com/us/app/id1033286805), [FF News](https://ffnews.com/newsarticle/homeylabs-launches-a-new-saving-and-banking-app-for-kids/))
- Parents set permissions for other members. The listing doesn't describe the role options.
- Complaints ([App Store listing](https://apps.apple.com/us/app/id1033286805)):
  - "lack of ability to approve or disapprove completed chores. This is pretty basic."
  - A parent who set kids up as parents found they could do everything.
  - Loads were slow and often errored out.

### Skylight (notable other)

- Skylight is a wall calendar device plus a phone app. Each person is a profile on the device and needs no login.
- Kids earn stars for chores and routines. A reward costs 1 to 500 stars, and redeemed stars leave the profile. Recurring rewards come back right away if the profile has enough stars. ([Stars, Tasks, and Rewards](https://skylight.zendesk.com/hc/en-us/articles/36846200077723-Stars-Tasks-and-Rewards))
- Rewards and stars are created and managed only in the phone app. The device shows progress and a Redeem button once a profile can afford a reward. ([App vs device](https://skylight.zendesk.com/hc/en-us/articles/30453280620187-What-can-I-manage-in-the-Skylight-App-vs-on-the-device))
- Parental Lock is a device-only 4-digit PIN. A parent chooses whether it guards adding, modifying, or both, and it engages after 1 to 10 minutes idle. ([Parental Lock](https://skylight.zendesk.com/hc/en-us/articles/35089525796251-Parental-Lock))
- Stars and rewards need the paid Calendar Plus plan. ([Is Rewards part of Calendar Plus?](https://skylight.zendesk.com/hc/en-us/articles/30450768494235-Is-Rewards-part-of-Calendar-Plus))

### Private notes from parents (MyStudyLife)

- No family organizer above has notes that parents keep from kids. MyStudyLife's parent app, a student planner, has private parent notes and keeps the child's own private notes hidden from the parent. ([MyStudyLife for parents](https://mystudylife.com/parent/)) That two-way privacy is worth copying.
- Life Sorted and Cally hide private events from people not attending. ([Life Sorted](https://apps.apple.com/au/app/life-sorted/id1218792354), [Cally](https://apps.apple.com/ca/app/cally/id6680186520))

### Reading rewards (Beanstack)

- Beanstack runs reading challenges for schools and libraries. One parent login covers the whole family, and a parent can log for several kids at once. ([Beanstack reading logs](https://beanstack.com/solutions/simplify-reading-logs))
- Logs count days, minutes, books or pages, depending on the challenge. Kids earn virtual badges at milestones. ([Beanstack glossary](https://help.beanstack.com/hc/en-us/articles/360012163993-beanstack-glossary))
- The badge is the reward. Prizes are up to the school or library, outside the app.

## Patterns across apps

| | Kid login | Kid permissions | Parent approval | Reward currency | Spend |
|---|---|---|---|---|---|
| Cozi | Email + shared password | Same as adults | None | None | None |
| OurHome | Own device | Own chores, can't touch siblings' points | Yes, by admins | Points | Parent-set rewards |
| FamilyWall | Child account, no email | Member, not admin | n/a | None | None |
| Greenlight | Username or phone, or none on the Hub | Mark done, suggest chores | Yes, for pay | Dollars | Card, jars, investing with approval |
| S'moresUp | Profile | Own tasks (older kids) | Premium only | Points | Parent-set rewards |
| Homey | Shared or own device | Set by parent | None (complaint) | Dollars | Jars, bank, cash |
| Skylight | None, profile on device | PIN guards add or modify | None stated | Stars | Redeem on device |

## What this means for us

These are inputs for #39, not decisions.

- Our Admin and Adult split already covers what parents complain about. The missing piece is a third, narrower role for a kid who signs in, or Member-level limits on a User. Homey's "set kids up as parents" complaint shows what happens without one.
- Kiosk plus a PIN for edits is the pattern Skylight and Greenlight both landed on for kids too young to sign in. Our Kiosk should ask for a PIN before creating, editing or deleting, and let anyone mark a Chore done.
- Notes about a Member should hide from that Member by default, and from any Member who isn't an Admin or Adult. No competitor does this, so there's no prior art to follow for the edge cases. When a kid Claims their Member, do they see old notes? I'd say no.
- Rewards should take a "done, then approved" step and a balance that only goes down when a reward is redeemed. Parents need to move points back by hand (the S'moresUp complaint) and to take points away (OurHome, S'moresUp).
- Reading List rewards can reuse the Chore points. Beanstack's units (minutes, pages, books) are what a reading log needs.
- Export matters. OurHome families lost years of points history when its servers went dark. A Self-hosted instance answers most of that risk, but an export still helps people moving off the Hosted service.
