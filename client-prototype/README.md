# Project Awakening: Client review prototype

A standalone clickable web prototype based on PRD V2.0 (27 OCT 2026). The original PRD and root planning documents are unchanged.

## Open the prototype

Open `dist/index.html` in a browser. No installation or build is required. All assets are local.

## Client walkthrough

1. Choose **Reset demo** or **Start full walkthrough**.
2. Follow welcome, consent, the six exact onboarding questions, avatar selection, and E Rank / Level 1.
3. Complete the mandatory limitations, accessibility and reminder selections.
4. Review training details, quest guidance, verification choice and simulated completion.
5. Explore Player, Progress, Rewards, Settings and Privacy.
6. Use **View flow** for the journey overview or select any of the 50 screens/states from the index.
7. Review later-phase AI coach and social concepts separately.

The screen index and Previous/Next controls deliberately allow previewing states without completing the journey. Actual quest completion still checks the required demo answers.

## Requirements and proposals

- The 16 question labels and their requirement text are extracted from PRD.md in `dist/questions.js`.
- Each screen includes PRD references and review notes.
- Layout, navigation, avatar presentation choices, cosmetics and non-PRD interface copy are proposals for discussion.
- Exercise content uses the PRD's example. Reviewed demos, instructions, intensity and rest are placeholders, not individualized training guidance.
- No real camera capture, AI inference, subscription purchase, backend, user account or video upload is implemented.
- Profile answers exist only in page memory and reset on reload. Export downloads only the demo profile; deletion clears the demo state.
- Example history is clearly marked. No actual XP, ranks or rewards are granted. Cosmetic equip is a preview.

## Decisions for the client

| Topic | Source | Decision still needed |
| --- | --- | --- |
| Starter quest | Sections 6 and 18 | Minimum training information and safe starter policy. The prototype demonstrates the information-prompt option. |
| Avatar presentation | Sections 3 and 18 | Confirm independent presentation selection and its relationship to gender. |
| Exercise library | Sections 6 and 18 | Professional review of movements, instructions, stop conditions and adaptations. |
| Camera timing | Sections 8 and 17 | Section 8 describes optional pose assistance in MVP; section 17 lists verification in Phase 3. |
| AI-coach timing | Sections 11 and 17 | Section 11 says Phase 2+; section 17 places monetization in Phase 4. |
| Economy and price | Sections 9 and 18 | XP thresholds, caps, pricing and inference budgets. |
| Consent and launch | Sections 15 and 18 | Launch markets, final consent language, retention rules and referral content. |

## Verification

- JavaScript syntax checks passed.
- Headless Chrome rendered all 50 screens with no uncaught JavaScript exceptions.
- Checked all rendered navigation targets.
- Exercised under-18 exclusion, consent selection, 37.5% and 100% completion, injury/uncertainty hold, missing training details, session completion, notification denial, large text, deletion and flow navigation.
- Inspected desktop and mobile screenshots. Mobile viewport had no horizontal page overflow at 390 pixels.
- This is a design-review prototype, not a production accessibility or security certification.

## Hosting

The Sites project identity and static directory are recorded in `.openai/hosting.json`. The new Site uses private access. Client access has not been enabled; use a screen-share or separately arrange sharing.
