# PROJECT AWAKENING

**MASTER PRODUCT REQUIREMENTS DOCUMENT | V2.0 | 27 OCT 2026**

Physical-body transformation RPG • Android-first beta • Original anime-inspired visual identity

## Executive decision

Build a game that converts safe, personalized physical training into quests, verifiable progress and visible character rewards. This revision removes ALL skincare, hair, fashion, clothing-styling and grooming features. It supersedes the prior PRD.

## 1. Product scope and constraints

| In scope | Out of scope |
| --- | --- |
| Strength, endurance, mobility, activity habits | Skin, hair, grooming, fashion and styling |
| 6-question first-run onboarding; 16-field profile | 50-question intake, forced photos, attractiveness ratings |
| Daily quests, XP, ranks, avatar cosmetics | Guaranteed transformations or medical diagnosis |
| Optional camera verification; paid AI coach later | Mandatory camera or video upload |
| Accessibility choice and notification preference | Forced operating-system notification permission |

## 2. Audience and positioning

Initial release: adults 18+, all genders, including beginners and experienced exercisers. The app is a progression game, not a clinical treatment or guaranteed body-change program. A user can start at E Rank regardless of fitness ability; exercise prescription must reflect ability and limitations, not rank.

## 3. First-run journey and exact questions

> Install → welcome and consent → 6 quick questions → basic player profile (37.5%) → generic avatar + E Rank / Level 1 → safety/accessibility/notification gate before first workout → first tailored quest → profile completion prompt.

Six mandatory initial fields, one question per screen. The goal prompt must say exactly “What’s Your Goal?”

| # | Question | Answer / behavior |
| --- | --- | --- |
| 01 | How old are you? | Age in years; adult eligibility gate |
| 02 | What’s your gender? | Male / Female / Non-binary / Prefer not to say; for avatar presentation only, not fitness capability |
| 03 | What’s your height? | cm or ft/in; numeric validation |
| 04 | What’s your weight? | kg or lb; numeric validation |
| 05 | What’s Your Goal? | Build Muscle / Lose Fat / Get Stronger / Improve Stamina / Build an Athletic Body / General Fitness |
| 06 | What’s your experience level? | Beginner / Intermediate / Advanced |

At completion: 6 of 16 profile fields = 37.5%. All players receive E Rank and Level 1; a neutral, generic anime avatar is created from a user-selected presentation, never inferred as an exact body replica. Height and weight are required in this agreed product design; provide clear privacy explanations and allow later correction.

## 4. Remaining 10 profile questions

| # | Question | Answer / behavior |
| --- | --- | --- |
| 07 | Where will you train? | Home / Gym / Both |
| 08 | What equipment can you use? | None / Basic / Full gym; conditional list |
| 09 | How many days per week can you train? | 1–7 |
| 10 | How much time per session? | 10 / 15 / 20 / 30 / 45 / 60+ minutes |
| 11 | Do you have injuries, pain or movement restrictions? | No / Yes / Unsure; details optional, safety triage |
| 12 | How active are you currently? | Mostly seated / Light / Moderate / Very active |
| 13 | What is your waist measurement? | cm/in; guided measuring instructions |
| 14 | What is your chest measurement? | cm/in; guided measuring instructions |
| 15 | Do you need accessibility accommodations? | None / Mobility / Vision / Hearing / Other / Prefer not to say |
| 16 | What reminder schedule do you prefer? | Time / No reminders; OS permission requested only if opted in |

Questions 11, 15 and 16 are mandatory selections before any exercise quest, even if the user does not complete the remaining profile fields. This preserves the six-question fast onboarding while enforcing a safety and preferences gate. The user can select “No”, “None”, or “No reminders”; notification permission itself is never compulsory. If injury status is Yes/Unsure, pause high-risk exercise assignment and offer safer, non-diagnostic guidance or referral as appropriate.

## 5. Profile completion, rank and fitness progress

Profile completeness = 100 × completed valid fields / 16. Initial score = 37.5%; 8/16 = 50%; 12/16 = 75%; 16/16 = 100%. Do not award XP for entering measurements. Safety-gate questions count as complete only when a valid response is recorded; “Prefer not to say” counts when explicitly supported. Profile completion is NOT a health, attractiveness or fitness score.

| Separate metric | How it changes |
| --- | --- |
| Profile completeness | Valid answers to the 16 fields |
| Player level / rank | XP from eligible quests and achievements |
| Physical progress | Repeated comparable performance, activity and measurement check-ins |
| Verification confidence | Self-report, device signals or validated pose-based check; never absolute proof |

## 6. Quest engine functional requirements

- Rules-first engine selects exercise from reviewed movement library using goal, experience, equipment, time, current activity, limitations, recent workload and recovery.

- No full exercise prescription until safety gate is complete. Missing equipment/time fields trigger safe starter quests or a prompt for minimum information, never fabricated personalization.

- Every quest has: movement ID, instructions, demo, intensity, sets/reps or duration, rest, adaptation, stop conditions, verification mode, XP cap and completion event.

- Include strength, endurance, mobility and recovery days. Scale training gradually based on actual performance and perceived exertion; do not increase intensity automatically when game level rises.

- Exercise catalog must contain muscle groups, pattern, equipment, difficulty, progressions/regressions, common errors, exclusion flags and evidence review date.

- First beta: limited professionally reviewed beginner and intermediate movements, not an unvalidated 200-exercise dump.

## 7. Quest example and progression

| Player | Example quest | Adaptation |
| --- | --- | --- |
| Beginner, home, 15 min | Supported squat 2×8; wall push-up 2×8; short walk | Lower volume or replace if painful |
| Experienced, gym, 45 min | Squat pattern; press; row; hinge; cooldown | Sets/load based on recent performance |
| Recovery day | Comfortable walk + gentle mobility | Rest or low-impact alternatives |

These are product examples, not individualized medical prescriptions. Weekly quest variety, rest and training balance take priority over dramatic daily difficulty spikes.

## 8. Verification strategy

MVP: self-report for low-stakes quests; optional camera-based rep detection for 3–5 supported exercises (e.g., squat, wall/standard push-up, jumping jack) after calibration. Prefer on-device pose estimation. Do not require uploads or store raw video by default. Tracking is fallible: angle, occlusion, lighting and atypical movement create false positives/negatives.

| Mode | Use | Reward policy |
| --- | --- | --- |
| Self-report | Walks, recovery, untracked exercise | Base XP; anti-spam caps |
| Pose-assisted | Supported exercises | Additional verified badge/XP within caps |
| Wearable/device | Steps or activity where permission exists | Evidence marker; spoofing protections |
| Competitive | Matched challenges | Eligibility and audit rules; never claim perfect proof |

Provide manual correction/appeal, accessible alternatives to camera verification, explicit camera consent and a delete-data control. Never tie essential progression solely to camera availability.

## 9. RPG economy and long-term progression

All players start E Rank / Level 1. Proposed ranks: E, D, C, B, A, S, SS, Mythic. XP thresholds, daily caps and anti-farming rules are configurable and must be tuned in beta. High rank reflects sustained participation, not physical worth. Beyond Mythic: prestige, class mastery, seasons and cosmetic collections; preserve real training history on prestige.

Rewards: avatar skins, auras, titles, borders, animations, non-transferable in-game currency and achievement cards. Do NOT give away costly AI coaching by default. Avoid pay-to-win ranking and dangerous workout incentives.

## 10. Player profile, avatar and progress

- Profile shows completion percent, missing questions, player level, rank, quest streak, earned cosmetics, and fitness milestones.

- Avatar is generic on day one; visual evolution is cosmetic and earned, not a scientifically accurate body simulation.

- Track weight and waist/chest at optional recurring check-ins; show measurement trends separately from strength/endurance changes.

- Photos optional and private; never required to level up. Provide standardized photo guidance only if enabled.

## 11. Paid AI coach

Phase 2+ paid subscription: personalized explanations, workout adaptation proposals, progress summaries and question answering. Coach must use approved exercise catalog and safety constraints; no medical diagnosis, crash diets or guaranteed results. Free tier retains basic quests and safe progression. Meter usage and enforce per-user inference budgets.

## 12. Boss battles and multiplayer

Not MVP. Later: solo weekly bosses, matched PvP consistency battles, guild missions and seasonal events. Match by capability, available time and goal as well as rank; score adherence to personalized goals rather than maximum reps or weight lifted. Include anti-cheat, moderation, opt-out and accessibility parity.

## 13. UX and visual direction

Original dark-fantasy anime-inspired interface with system alerts, status panels, quest cards, subtle motion and celebratory level-ups. Do not copy Solo Leveling art, characters, trademarks or distinctive UI assets. Support reduced motion, screen readers, large text, contrast, and audio-off play.

## 14. Data model and APIs

| Entity | Minimum fields |
| --- | --- |
| User | id, auth, age eligibility, consent versions, locale, timezone |
| Profile | 16 answers, units, timestamps, completion score, accessibility |
| Avatar | base template, selected presentation, cosmetics |
| Exercise | id, movement pattern, contraindication flags, adaptations, review status |
| Quest | id, user, date, exercise ids, target, state, safety version |
| QuestEvent | completion mode, timestamps, device signal, XP decision |
| ProgressLog | date, metric, value, unit, source |
| Wallet | XP, level, rank, currency ledger, unlocked cosmetics |
| Subscription | plan, entitlement, renewal, AI usage limits |

Core endpoints: `POST /onboarding`, `PATCH /profile`, `GET /profile/completion`, `GET /quests/today`, `POST /quests/{id}/start`, `POST /quests/{id}/complete`, `GET /progress`, `GET /rewards`, `POST /consents`. Server owns XP, verification decisions, rank and entitlements; clients cannot directly set these values.

## 15. Security, privacy and safety

- Treat measurements, health limitations and progress photos as sensitive personal data; minimize collection, encrypt, restrict access and enable export/deletion.

- Obtain clear consent for camera and health-related data processing; separate marketing consent. Provide retention/deletion policy and comply with applicable laws in launch markets.

- Require adult eligibility in initial beta; design a separate child-safety approach before expanding to minors.

- Support no-notification choice; never block app use if push permission is denied.

- Exercise screening is not a diagnosis. Show stop-exercise guidance for pain, dizziness or other concerning symptoms and recommend professional assessment where needed.

## 16. Analytics and acceptance criteria

| Area | Release acceptance |
| --- | --- |
| Onboarding | 6 questions create a profile and display 37.5% accurately |
| Profile | 10 additional questions produce 100%; updates recompute immediately |
| Safety | No workout begins before limitations, accessibility and reminders selections |
| Quest personalization | Distinct profiles yield appropriate different plans; unsafe options filtered |
| Progression | Only server-validated events grant XP; idempotent completion |
| Accessibility | Reduced-motion, screen-reader and camera-free completion paths |
| Privacy | User can review/edit/delete measurements and revoke optional permissions |

Track onboarding completion, first-quest activation, D1/D7/D30 retention, quest adherence, weekly active players, camera verification errors, injury-related reports, conversion, AI cost per subscriber and churn. Proposed go/no-go targets must be set after a pilot baseline, not presented as proven benchmarks.

## 17. Phased build and launch gates

| Phase | Deliverable | Gate |
| --- | --- | --- |
| 0 • Specification | Final 16 fields, safety logic, quest data schema | No ambiguous mandatory fields |
| 1 • Core MVP | Onboarding, profile, E-rank, avatar, basic quests, XP | End-to-end functional and safe |
| 2 • Progression | Adaptive scheduling, progress logs, cosmetics | Beta users complete repeat sessions |
| 3 • Verification | On-device motion detection for limited exercises | Measured error rates and fallback |
| 4 • Monetization | Paid AI coach, entitlement and usage controls | Positive contribution margin hypothesis tested |
| 5 • Social | Boss battles, guilds, seasons | Moderation and fairness validated |

## 18. Open decisions before implementation

- Confirm adult-only launch markets and applicable privacy rules.

- Decide if “gender” is used only for avatar presentation and whether avatar selection should be independent.

- Define safe starter quest behavior when profile is 37.5% but training time/equipment are unknown.

- Have a qualified exercise professional review catalog, limitations and progression rules.

- Validate that requiring height/weight does not create excessive onboarding abandonment.

- Define exact XP economy and subscription price using beta evidence.

**DOCUMENT STATUS:** Revised product specification for planning and implementation scoping. No claims of clinical validation, guaranteed outcomes or proven unit economics.

<!--
PROJECT AWAKENING • PRD V2.0 • INTERNAL PRODUCT SPECIFICATION
PROJECT AWAKENING • PRD V2.0 • INTERNAL PRODUCT SPECIFICATION
PROJECT AWAKENING • PRD V2.0 • INTERNAL PRODUCT SPECIFICATION
PROJECT AWAKENING • PRD V2.0 • INTERNAL PRODUCT SPECIFICATION
PROJECT AWAKENING • PRD V2.0 • INTERNAL PRODUCT SPECIFICATION
PROJECT AWAKENING • PRD V2.0 • INTERNAL PRODUCT SPECIFICATION
-->
