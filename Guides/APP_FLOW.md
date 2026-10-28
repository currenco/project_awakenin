# PROJECT AWAKENING: App Flow

Source: [PRD.md](PRD.md), V2.0, 27 OCT 2026.

> Organization note: The requirement sections below are copied verbatim from PRD.md. Original section numbers are retained for traceability. This note and the navigation links are editorial, not additional client requirements. PRD.md remains the source of truth.

**Document scope:** First-run journey, exact profile questions, profile behavior, and later multiplayer requirements.

**Related documents:** [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md), [UI_UX_DESIGN.md](UI_UX_DESIGN.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md), [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md).

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

## 10. Player profile, avatar and progress

- Profile shows completion percent, missing questions, player level, rank, quest streak, earned cosmetics, and fitness milestones.

- Avatar is generic on day one; visual evolution is cosmetic and earned, not a scientifically accurate body simulation.

- Track weight and waist/chest at optional recurring check-ins; show measurement trends separately from strength/endurance changes.

- Photos optional and private; never required to level up. Provide standardized photo guidance only if enabled.

## 12. Boss battles and multiplayer

Not MVP. Later: solo weekly bosses, matched PvP consistency battles, guild missions and seasonal events. Match by capability, available time and goal as well as rank; score adherence to personalized goals rather than maximum reps or weight lifted. Include anti-cheat, moderation, opt-out and accessibility parity.

## Related requirements in PRD.md

- [1. Product scope and constraints](PRD.md#1-product-scope-and-constraints)
- [6. Quest engine functional requirements](PRD.md#6-quest-engine-functional-requirements)
- [7. Quest example and progression](PRD.md#7-quest-example-and-progression)
- [8. Verification strategy](PRD.md#8-verification-strategy)
- [9. RPG economy and long-term progression](PRD.md#9-rpg-economy-and-long-term-progression)
- [11. Paid AI coach](PRD.md#11-paid-ai-coach)
- [13. UX and visual direction](PRD.md#13-ux-and-visual-direction)
- [15. Security, privacy and safety](PRD.md#15-security-privacy-and-safety)
- [16. Analytics and acceptance criteria](PRD.md#16-analytics-and-acceptance-criteria)
- [17. Phased build and launch gates](PRD.md#17-phased-build-and-launch-gates)
- [18. Open decisions before implementation](PRD.md#18-open-decisions-before-implementation)

**DOCUMENT STATUS:** Revised product specification for planning and implementation scoping. No claims of clinical validation, guaranteed outcomes or proven unit economics.
