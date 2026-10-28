# PROJECT AWAKENING: Backend Schema

Source: [PRD.md](PRD.md), V2.0, 27 OCT 2026.

> Organization note: The requirement sections below are copied verbatim from PRD.md. Original section numbers are retained for traceability. This note and the navigation links are editorial, not additional client requirements. PRD.md remains the source of truth.

**Document scope:** The PRD’s minimum data entities, API endpoints, progress rules, economy, and data protection requirements. The PRD does not define database types, keys, indexes, relationships, or a database technology; those details are not added here.

**Related documents:** [APP_FLOW.md](APP_FLOW.md), [UI_UX_DESIGN.md](UI_UX_DESIGN.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md), [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md).

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

## 5. Profile completion, rank and fitness progress

Profile completeness = 100 × completed valid fields / 16. Initial score = 37.5%; 8/16 = 50%; 12/16 = 75%; 16/16 = 100%. Do not award XP for entering measurements. Safety-gate questions count as complete only when a valid response is recorded; “Prefer not to say” counts when explicitly supported. Profile completion is NOT a health, attractiveness or fitness score.

| Separate metric | How it changes |
| --- | --- |
| Profile completeness | Valid answers to the 16 fields |
| Player level / rank | XP from eligible quests and achievements |
| Physical progress | Repeated comparable performance, activity and measurement check-ins |
| Verification confidence | Self-report, device signals or validated pose-based check; never absolute proof |

## 9. RPG economy and long-term progression

All players start E Rank / Level 1. Proposed ranks: E, D, C, B, A, S, SS, Mythic. XP thresholds, daily caps and anti-farming rules are configurable and must be tuned in beta. High rank reflects sustained participation, not physical worth. Beyond Mythic: prestige, class mastery, seasons and cosmetic collections; preserve real training history on prestige.

Rewards: avatar skins, auras, titles, borders, animations, non-transferable in-game currency and achievement cards. Do NOT give away costly AI coaching by default. Avoid pay-to-win ranking and dangerous workout incentives.

## 15. Security, privacy and safety

- Treat measurements, health limitations and progress photos as sensitive personal data; minimize collection, encrypt, restrict access and enable export/deletion.

- Obtain clear consent for camera and health-related data processing; separate marketing consent. Provide retention/deletion policy and comply with applicable laws in launch markets.

- Require adult eligibility in initial beta; design a separate child-safety approach before expanding to minors.

- Support no-notification choice; never block app use if push permission is denied.

- Exercise screening is not a diagnosis. Show stop-exercise guidance for pain, dizziness or other concerning symptoms and recommend professional assessment where needed.

## Related requirements in PRD.md

- [3. First-run journey and exact questions](PRD.md#3-first-run-journey-and-exact-questions)
- [4. Remaining 10 profile questions](PRD.md#4-remaining-10-profile-questions)
- [6. Quest engine functional requirements](PRD.md#6-quest-engine-functional-requirements)
- [8. Verification strategy](PRD.md#8-verification-strategy)
- [10. Player profile, avatar and progress](PRD.md#10-player-profile-avatar-and-progress)
- [11. Paid AI coach](PRD.md#11-paid-ai-coach)
- [12. Boss battles and multiplayer](PRD.md#12-boss-battles-and-multiplayer)
- [16. Analytics and acceptance criteria](PRD.md#16-analytics-and-acceptance-criteria)
- [17. Phased build and launch gates](PRD.md#17-phased-build-and-launch-gates)
- [18. Open decisions before implementation](PRD.md#18-open-decisions-before-implementation)

**DOCUMENT STATUS:** Revised product specification for planning and implementation scoping. No claims of clinical validation, guaranteed outcomes or proven unit economics.
