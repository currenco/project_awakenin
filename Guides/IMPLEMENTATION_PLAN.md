# PROJECT AWAKENING: Implementation Plan

Source: [PRD.md](PRD.md), V2.0, 27 OCT 2026.

> Organization note: The requirement sections below are copied verbatim from PRD.md. Original section numbers are retained for traceability. This note and the navigation links are editorial, not additional client requirements. PRD.md remains the source of truth.

**Document scope:** The client’s product scope, build phases, launch gates, release criteria, and open decisions. Phase labels and timing statements are retained as written; no estimates, deadlines, or resolved decisions are added.

**Related documents:** [APP_FLOW.md](APP_FLOW.md), [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md), [UI_UX_DESIGN.md](UI_UX_DESIGN.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md).

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

## 17. Phased build and launch gates

| Phase | Deliverable | Gate |
| --- | --- | --- |
| 0 • Specification | Final 16 fields, safety logic, quest data schema | No ambiguous mandatory fields |
| 1 • Core MVP | Onboarding, profile, E-rank, avatar, basic quests, XP | End-to-end functional and safe |
| 2 • Progression | Adaptive scheduling, progress logs, cosmetics | Beta users complete repeat sessions |
| 3 • Verification | On-device motion detection for limited exercises | Measured error rates and fallback |
| 4 • Monetization | Paid AI coach, entitlement and usage controls | Positive contribution margin hypothesis tested |
| 5 • Social | Boss battles, guilds, seasons | Moderation and fairness validated |

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

## 11. Paid AI coach

Phase 2+ paid subscription: personalized explanations, workout adaptation proposals, progress summaries and question answering. Coach must use approved exercise catalog and safety constraints; no medical diagnosis, crash diets or guaranteed results. Free tier retains basic quests and safe progression. Meter usage and enforce per-user inference budgets.

## 18. Open decisions before implementation

- Confirm adult-only launch markets and applicable privacy rules.

- Decide if “gender” is used only for avatar presentation and whether avatar selection should be independent.

- Define safe starter quest behavior when profile is 37.5% but training time/equipment are unknown.

- Have a qualified exercise professional review catalog, limitations and progression rules.

- Validate that requiring height/weight does not create excessive onboarding abandonment.

- Define exact XP economy and subscription price using beta evidence.

## Related requirements in PRD.md

- [2. Audience and positioning](PRD.md#2-audience-and-positioning)
- [3. First-run journey and exact questions](PRD.md#3-first-run-journey-and-exact-questions)
- [4. Remaining 10 profile questions](PRD.md#4-remaining-10-profile-questions)
- [5. Profile completion, rank and fitness progress](PRD.md#5-profile-completion-rank-and-fitness-progress)
- [6. Quest engine functional requirements](PRD.md#6-quest-engine-functional-requirements)
- [7. Quest example and progression](PRD.md#7-quest-example-and-progression)
- [8. Verification strategy](PRD.md#8-verification-strategy)
- [9. RPG economy and long-term progression](PRD.md#9-rpg-economy-and-long-term-progression)
- [10. Player profile, avatar and progress](PRD.md#10-player-profile-avatar-and-progress)
- [12. Boss battles and multiplayer](PRD.md#12-boss-battles-and-multiplayer)
- [13. UX and visual direction](PRD.md#13-ux-and-visual-direction)
- [14. Data model and APIs](PRD.md#14-data-model-and-apis)
- [15. Security, privacy and safety](PRD.md#15-security-privacy-and-safety)

## Requirement coverage

Organization index only. Each numbered PRD section is reproduced in at least one document below.

| PRD section | Documents containing the original requirements |
| --- | --- |
| [1. Product scope and constraints](PRD.md#1-product-scope-and-constraints) | [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) |
| [2. Audience and positioning](PRD.md#2-audience-and-positioning) | [APP_FLOW.md](APP_FLOW.md) |
| [3. First-run journey and exact questions](PRD.md#3-first-run-journey-and-exact-questions) | [APP_FLOW.md](APP_FLOW.md) |
| [4. Remaining 10 profile questions](PRD.md#4-remaining-10-profile-questions) | [APP_FLOW.md](APP_FLOW.md) |
| [5. Profile completion, rank and fitness progress](PRD.md#5-profile-completion-rank-and-fitness-progress) | [APP_FLOW.md](APP_FLOW.md), [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md) |
| [6. Quest engine functional requirements](PRD.md#6-quest-engine-functional-requirements) | [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md) |
| [7. Quest example and progression](PRD.md#7-quest-example-and-progression) | [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md) |
| [8. Verification strategy](PRD.md#8-verification-strategy) | [UI_UX_DESIGN.md](UI_UX_DESIGN.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md) |
| [9. RPG economy and long-term progression](PRD.md#9-rpg-economy-and-long-term-progression) | [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md) |
| [10. Player profile, avatar and progress](PRD.md#10-player-profile-avatar-and-progress) | [APP_FLOW.md](APP_FLOW.md), [UI_UX_DESIGN.md](UI_UX_DESIGN.md) |
| [11. Paid AI coach](PRD.md#11-paid-ai-coach) | [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md), [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) |
| [12. Boss battles and multiplayer](PRD.md#12-boss-battles-and-multiplayer) | [APP_FLOW.md](APP_FLOW.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md) |
| [13. UX and visual direction](PRD.md#13-ux-and-visual-direction) | [UI_UX_DESIGN.md](UI_UX_DESIGN.md) |
| [14. Data model and APIs](PRD.md#14-data-model-and-apis) | [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md) |
| [15. Security, privacy and safety](PRD.md#15-security-privacy-and-safety) | [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md), [UI_UX_DESIGN.md](UI_UX_DESIGN.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md) |
| [16. Analytics and acceptance criteria](PRD.md#16-analytics-and-acceptance-criteria) | [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md), [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) |
| [17. Phased build and launch gates](PRD.md#17-phased-build-and-launch-gates) | [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) |
| [18. Open decisions before implementation](PRD.md#18-open-decisions-before-implementation) | [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) |


**DOCUMENT STATUS:** Revised product specification for planning and implementation scoping. No claims of clinical validation, guaranteed outcomes or proven unit economics.
