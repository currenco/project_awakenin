# PROJECT AWAKENING: UI/UX Design

Source: [PRD.md](PRD.md), V2.0, 27 OCT 2026.

> Organization note: The requirement sections below are copied verbatim from PRD.md. Original section numbers are retained for traceability. This note and the navigation links are editorial, not additional client requirements. PRD.md remains the source of truth.

**Document scope:** Visual direction, player profile presentation, verification experience, and safety/privacy behavior. Exact onboarding questions remain available in APP_FLOW.md and the linked PRD sections.

**Related documents:** [APP_FLOW.md](APP_FLOW.md), [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md), [TECHNICAL_REQUIREMENTS_DOC.md](TECHNICAL_REQUIREMENTS_DOC.md), [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md).

## 13. UX and visual direction

Original dark-fantasy anime-inspired interface with system alerts, status panels, quest cards, subtle motion and celebratory level-ups. Do not copy Solo Leveling art, characters, trademarks or distinctive UI assets. Support reduced motion, screen readers, large text, contrast, and audio-off play.

## 10. Player profile, avatar and progress

- Profile shows completion percent, missing questions, player level, rank, quest streak, earned cosmetics, and fitness milestones.

- Avatar is generic on day one; visual evolution is cosmetic and earned, not a scientifically accurate body simulation.

- Track weight and waist/chest at optional recurring check-ins; show measurement trends separately from strength/endurance changes.

- Photos optional and private; never required to level up. Provide standardized photo guidance only if enabled.

## 8. Verification strategy

MVP: self-report for low-stakes quests; optional camera-based rep detection for 3–5 supported exercises (e.g., squat, wall/standard push-up, jumping jack) after calibration. Prefer on-device pose estimation. Do not require uploads or store raw video by default. Tracking is fallible: angle, occlusion, lighting and atypical movement create false positives/negatives.

| Mode | Use | Reward policy |
| --- | --- | --- |
| Self-report | Walks, recovery, untracked exercise | Base XP; anti-spam caps |
| Pose-assisted | Supported exercises | Additional verified badge/XP within caps |
| Wearable/device | Steps or activity where permission exists | Evidence marker; spoofing protections |
| Competitive | Matched challenges | Eligibility and audit rules; never claim perfect proof |

Provide manual correction/appeal, accessible alternatives to camera verification, explicit camera consent and a delete-data control. Never tie essential progression solely to camera availability.

## 15. Security, privacy and safety

- Treat measurements, health limitations and progress photos as sensitive personal data; minimize collection, encrypt, restrict access and enable export/deletion.

- Obtain clear consent for camera and health-related data processing; separate marketing consent. Provide retention/deletion policy and comply with applicable laws in launch markets.

- Require adult eligibility in initial beta; design a separate child-safety approach before expanding to minors.

- Support no-notification choice; never block app use if push permission is denied.

- Exercise screening is not a diagnosis. Show stop-exercise guidance for pain, dizziness or other concerning symptoms and recommend professional assessment where needed.

## Related requirements in PRD.md

- [1. Product scope and constraints](PRD.md#1-product-scope-and-constraints)
- [2. Audience and positioning](PRD.md#2-audience-and-positioning)
- [3. First-run journey and exact questions](PRD.md#3-first-run-journey-and-exact-questions)
- [4. Remaining 10 profile questions](PRD.md#4-remaining-10-profile-questions)
- [5. Profile completion, rank and fitness progress](PRD.md#5-profile-completion-rank-and-fitness-progress)
- [7. Quest example and progression](PRD.md#7-quest-example-and-progression)
- [9. RPG economy and long-term progression](PRD.md#9-rpg-economy-and-long-term-progression)
- [11. Paid AI coach](PRD.md#11-paid-ai-coach)
- [12. Boss battles and multiplayer](PRD.md#12-boss-battles-and-multiplayer)
- [16. Analytics and acceptance criteria](PRD.md#16-analytics-and-acceptance-criteria)
- [18. Open decisions before implementation](PRD.md#18-open-decisions-before-implementation)

**DOCUMENT STATUS:** Revised product specification for planning and implementation scoping. No claims of clinical validation, guaranteed outcomes or proven unit economics.
