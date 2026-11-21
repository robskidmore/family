# Family

A household organizer that families run on their own server or on our hosted service. People in a Household share a calendar, lists and chores.

## Language

### People

**Household**:
A group of people who share one calendar, one set of lists and one set of chores. Usually the people under one roof.
_Avoid_: family, home, group, organization, tenant

**Member**:
A person in a Household. A Member can exist without a login, which is how young kids are added.
_Avoid_: profile, person, child, kid (as a type)

**Archived Member**:
A Member removed from a Household. Past Chores and events still show their name.
_Avoid_: deleted member, former member

**User**:
Someone who can sign in. A User is linked to one Member in each Household they belong to, and can belong to more than one Household.
_Avoid_: account, login

**Admin**:
A User who manages a Household's Members, invites and settings. Every Household has at least one.

**Adult**:
A User who can use every module in a Household but cannot manage it.
_Avoid_: parent, standard user

**Claim**:
When a User takes over a Member that an adult created without a login, so that person can now sign in.
_Avoid_: activate, convert

**Kiosk**:
A shared screen, such as a wall tablet, that shows one Household and lets Members without a login use it.
_Avoid_: display mode, tablet view

**Pairing**:
Linking a device to one Household as a Kiosk, using a one-time code an Admin creates.
_Avoid_: kiosk login, device registration

### Modules

**Calendar**:
The Household's shared schedule of events, in the Household's time zone.

**Calendar feed**:
A read-only subscription URL that lets a phone's calendar app show the Household's Calendar.
_Avoid_: ICS link, sync

**List**:
A shared checklist, such as groceries or packing.
_Avoid_: shopping list (as a type), to-do

**Chore**:
A task assigned to a Member, often recurring.
_Avoid_: task, job

**Rotation**:
A Chore's list of Members who take turns being assigned it.
_Avoid_: round robin, schedule

**Notification**:
A message the worker sends to a Member's device or inbox, such as a Chore reminder or an upcoming event. It goes out by Web Push, or by email when SMTP is set.
_Avoid_: alert, ping

### Running the app

**Self-hosted instance**:
A copy of the app that someone runs on their own hardware from our Docker image.
_Avoid_: on-prem, local install

**Hosted service**:
The paid copy of the app that we run. Same code and image as a Self-hosted instance.
_Avoid_: cloud version, SaaS, pro
