# PROJECT AWAKENING: Technical Requirements Document

Source: [PRD.md](PRD.md), V2.0, 27 OCT 2026.

> Organization note: The requirement sections below are copied verbatim from PRD.md. Original section numbers are retained for traceability. This note and the navigation links are editorial, not additional client requirements. PRD.md remains the source of truth.

**Document scope:** Quest behavior, progression, verification, paid coaching, multiplayer, safety, and release acceptance. The PRD does not select a framework, hosting provider, database technology, or AI model; those choices are not added here.

**Related documents:** [APP_FLOW.md](APP_FLOW.md), [BACKEND_SCHEMA.md](BACKEND_SCHEMA.md), [UI_UX_DESIGN.md](UI_UX_DESIGN.md), [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md).

## Product positioning from the PRD

Physical-body transformation RPG • Android-first beta • Original anime-inspired visual identity

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

## 11. Paid AI coach

Phase 2+ paid subscription: personalized explanations, workout adaptation proposals, progress summaries and question answering. Coach must use approved exercise catalog and safety constraints; no medical diagnosis, crash diets or guaranteed results. Free tier retains basic quests and safe progression. Meter usage and enforce per-user inference budgets.

## 12. Boss battles and multiplayer

Not MVP. Later: solo weekly bosses, matched PvP consistency battles, guild missions and seasonal events. Match by capability, available time and goal as well as rank; score adherence to personalized goals rather than maximum reps or weight lifted. Include anti-cheat, moderation, opt-out and accessibility parity.

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

## Related requirements in PRD.md

- [1. Product scope and constraints](PRD.md#1-product-scope-and-constraints)
- [2. Audience and positioning](PRD.md#2-audience-and-positioning)
- [3. First-run journey and exact questions](PRD.md#3-first-run-journey-and-exact-questions)
- [4. Remaining 10 profile questions](PRD.md#4-remaining-10-profile-questions)
- [5. Profile completion, rank and fitness progress](PRD.md#5-profile-completion-rank-and-fitness-progress)
- [10. Player profile, avatar and progress](PRD.md#10-player-profile-avatar-and-progress)
- [13. UX and visual direction](PRD.md#13-ux-and-visual-direction)
- [14. Data model and APIs](PRD.md#14-data-model-and-apis)
- [17. Phased build and launch gates](PRD.md#17-phased-build-and-launch-gates)
- [18. Open decisions before implementation](PRD.md#18-open-decisions-before-implementation)

**DOCUMENT STATUS:** Revised product specification for planning and implementation scoping. No claims of clinical validation, guaranteed outcomes or proven unit economics.
