# Quranic Nahw RPG — _The City of Language_
> **Branching Storyline & Design Document**
>
> A learning-first interactive narrative that teaches Quranic nahw (Arabic grammar) through respectful, scholarly scenarios. No combat, no magic — only study, humility, and the love of ilm.
---
## Overview
> **Note:** has been removed from the content and data model per author request. Exercises and UI will use Arabic (with tashkeel) and translations (English/Malayalam).
**Core idea.** The player—"The Seeker"—arrives at an ancient academic city dedicated to the study of Arabic grammar (nahw). Progress is driven by correctly identifying and applying grammatical features found in real Qur'anic phrases and short ayahs. Every challenge is pedagogically scaffolded: mistakes become learning moments, not punishment.
**Audience.** Intermediate and advanced Arabic learners, students of Quranic Arabic, madrasa learners, teachers wanting an interactive supplement. Difficulty is adjustable.
**Learning goals.**
- Identify sentence types: _jumla ismiyyah_ vs _jumla fi’liyyah_.
- Correctly mark iʿrāb: marfūʿ (رفع), mansūb (نصب), majrūr (جر), jarr with prepositions, tanwīn and definiteness.
- Recognize and place particles (_ḥurūf_) and their syntactic effects.
- Analyze and vocalize short Qur'anic phrases (add diacritics / case endings).
- Build confidence in close reading and tafsir-informed grammatical analysis.
**Tone & Ethics.** Respectful, scholarly, reverent to the Qur'an. Characters are modeled as real scholars and students; avoid parody. All Qur'anic content used must be authentic and sources cited in a references appendix.
---
## Structure & Flow (High Level)
1. **Prologue — The Seeker’s Arrival**
2. **Chapter 1: The Paths of Intention** (Foundational iʿrāb)
3. **Chapter 2: The Scholar’s Courtyard** (Mentored practice across core domains)
4. **Chapter 3: The Garden of Wisdom** (Specialized paths: Ism / Harf / Fi‘l)
5. **Chapter 4: The Library of Iʿrāb** (Final assessment + collaborative tafsir option)
6. **Epilogue — The Seeker’s Counsel**
Each chapter is modular and repeats with increasing difficulty. The player may re-enter previous paths for revision; learning is cyclical.
---
## Prologue: The Seeker’s Arrival
**Scene.** A dusty road, ornate gates, calligraphy above the entrance. An elder (the Gatekeeper) greets the player with warm hospitality and a simple diagnostic: a short set of 3–5 items that check basic iʿrāb recognition.
**Mechanic.** Multiple choice + short fill-in (endings only). Example: present a phrase with a missing ending, choose صحيح/خطأ for whether the noun is marfūʿ or mansūb.
**Outcomes.** Sets difficulty and gives the player a kind message and recommended mentor.
---
## Chapter 1 — The Paths of Intention
**Theme.** Distinguishing subject (mubtadaʾ) and predicate (khabar) and their correct case markings.
**Choice (Gate of Sincerity).** The player must recite (type/select) a phrase where the mubtadaʾ is marfūʿ and the khabar matches in structure. The input can be: choose endings, or mark words as مُبْتَدَأ / خَبَر.
**Branching outcomes:**
- **Success:** Enter the scholars' circle (positive feedback, small reflective duʿā).
- **Mistake:** Gentle remedial path: short interactive lesson on subject/predicate with guided exercises; retry until confidence is shown.
**Sample exercises:**
1. Present a nominal sentence with missing ḥaraka; option list includes ـُ , ـَ , ـِ , ـْ .
2. Students pick which word is mubtadaʾ and which is khabar and justify in one short sentence (teacher-mode feedback).
**Pedagogical notes.** Use immediate feedback: show the correct iʿrāb and a one-line explanation referencing a classical rule (e.g., "المبتدأ مرفوع لأنه... ").
---
## Chapter 2 — The Scholar’s Courtyard
**Scene.** A shaded courtyard with three mentor circles. Each mentor offers specialized micro-lessons and short assessment tasks.
### Mentor A — _The Nominal Way_ (Jumla Ismiyyah)
**Focus:** Identifying topics, definiteness, adjectival agreement, and iʿrāb in nominal sentences.
**Exercises:**
- Mark each noun as definite/indefinite; explain how definiteness affects syntax.
- Example item: _الْقَوْمُ صالِحُونَ_ (identify case endings).
**Mini-Quest reward:** A reflective commentary from Mentor A: a short classical quote and practical tip.
### Mentor B — _The Verbal Path_ (Jumla Fiʿliyyah)
**Focus:** Verb-subject order, verb forms, subject agreement, dropped subjects (implicit subject recognition), and the effect of verb on object case.
**Exercises:**
- Given a verb and a short phrase, choose whether the sentence is fiʿliyyah and identify the subject and object with correct endings.
- Identify when the subject is ضمير مستتر (implied) and mark its person/number/gender.
### Mentor C — _Cases in the Quran_ (Marfūʿ / Mansūb / Majrūr)
**Focus:** Case endings in Quranic context, particles that force cases, and how different grammatical roles are realized in the Qur'an.
**Exercises:**
- Short ayah excerpts with missing endings; player adds the correct endings.
- The mentor gives historical/classical commentary: how Ibn ʿAshur / Sibawayh treat the structure (brief, paraphrased).
**Branching:**
- **All correct across mentors:** Advanced Challenge unlocked (Chapter 3 early access).
- **Some errors:** Directed to targeted drills with spaced repetition.
**Scaffolding:** Each mentor includes hints: highlight the particle or morphological cue that indicates the case.
---
## Chapter 3 — The Garden of Wisdom (Three Specialized Paths)
**Scene.** A tranquil garden with three branching paths. Players choose one path at a time; completing all three is required to access the final library.
### Path 1 — _The Path of Ism_ (Nouns & Definiteness)
**Learning outcomes:** Identify definite _(al-)_, construct phrases, recognize nisbah and broken plurals, and understand how definiteness affects case endings.
**Sample tasks:**
- Underline all definite nouns in a short Qur'anic phrase and explain their syntactic role.
- Transform indefinite to definite and show effect on the sentence’s meaning (minimal pairs).
**Rewards:** Short reflective passages (beautiful duʿā or aphorism) and a "lexical reflection" — a short note showing root + derivation.
### Path 2 — _The Path of Harf_ (Particles & Their Effects)
**Learning outcomes:** Place particles to alter meaning, identify particles that govern cases (e.g., إنّ, أنّ, أن, لِـ), and understand subordinating vs coordinating particles.
**Puzzle mechanic:** Drag-and-drop or multiple choice to place particles into slots to create grammatically and semantically correct versions of a verse. Player must justify the case change caused by the particle.
**Example:** Show a phrase where adding **إنّ** makes the following noun منصوب and require the player to change endings accordingly.
**Notes:** Include special modules for prepositions (_ḥurūf al-jarr_) and relative particles.
### Path 3 — _The Path of Fi‘l_ (Verbs & Roots)
**Learning outcomes:** Identify triliteral roots, determine verb forms (I–XII), and trace how derived forms affect meaning.
**Task examples:**
- Given a Qur'anic verb, extract its root and state the likely derived form and translation.
- Distinguish between passive and active forms and how they affect subject/object marking.
**Branching rewards:** Each path grants a contextual reward — a short tafsir excerpt, a classical rule explained, or an insightful dua.
---
## Chapter 4 — The Library of Iʿrāb (Final Assessment)
**Scene.** A vaulted library, scrolls and manuscripts. The chief scholar presents the final assessment: a longer Qur'anic passage (selectable difficulty) with missing harakat and endings.
**Task:** Analyze the passage, add the correct diacritics and iʿrāb, and write a concise justification for each major decision (one or two sentences each).
**Assessment modes:**
- **Solo:** Work independently and receive detailed automatic feedback plus a classical reference for each major point.
- **Collaborative:** Join a small study group (1–4 players) for a tafsir-style review. Participants can propose analyses; the group votes and a compiled instructor response is produced.
**Grading rubric:**
- **Full Mastery:** Correct endings + sound justifications referencing grammatical rule = "Student of Nahw".
- **Partial Mastery:** Some errors; player is given targeted notes and specific drills to retake.
- **Incomplete:** Too many errors; recommended to repeat Chapter 2 and Chapter 3 micro-lessons.
**Feedback style:** Kindly, scholarly, with references (e.g., short notes like "See Sibawayh, Kitāb..." or classical commentaries).
---
## Epilogue — The Seeker’s Counsel
Independent of the outcome, the epilogue closes with a reflective message: study is beloved, humility is praised, and the seeker is encouraged to continue. If full mastery is achieved, the player receives a written counsel from the chief scholar (a short, timeless letter of encouragement and direction). No supernatural or gamified power-ups.
---
## Examples & Sample Items (Playable)
> These sample items are *playable* exercises to include in the engine. Answers and short rationales are included.
### Example 1 — Prologue diagnostic
**Prompt:** أَهْلٌ طَيِّبُونَ (missing vowel markers). Choose the correct ending for أَهْلٌ.
- **Correct:** أَهْلٌ (nominative tanwīn / marfūʿ) — because it is the subject of an implicit nominal sentence.
- **Rationale:** If the sentence is taken as جملة اسمية (the people are good), the subject is marfūʿ.
### Example 2 — Chapter 1 exercise
**Prompt:** Mark mubtadaʾ and khabar in: _الطالِبُ مجتهدٌ_.
- **Answer:** مُبْتَدَأ: الطالِبُ (marfūʿ: ـُ) — خَبَر: مجتهدٌ (marfūʿ: ـٌ).
- **Rationale:** A nominal sentence where both subject and predicate are marfūʿ.
### Example 3 — Path of Harf (challenge)
**Prompt:** Insert إنّ or لِـ to change meaning: choose which particle and show the iʿrāb change for the following phrase: _الْخَبَرُ صَحِيحٌ_.
- **Solution:** Add **إنّ**: **إِنّ الْخَبَرَ صَحِيحًا** — now الْخَبَرَ becomes منصوب because إنّ governs the following noun.
### Example 4 — Final assessment excerpt (short)
**Prompt (short ayah fragment):** [Provide a short 6–10 word Qur'anic phrase with numbers omitted for implementation; example for design team: use _إِنّ اللّهَ مَعَ الصّابِرِينَ_ — require player to place correct endings and mark majrūr after preposition].
- **Expected answer:** إِنّ اللّهَ مَعَ الصّابِرِينَ (explain that مَعَ takes majrūr and الصّابِرِينَ is majrūr: ـِينَ).
- **Rationale:** Prepositional object after مَعَ is majrūr.
> **Note to implementers:** Select ayahs carefully (short verses are best). Always include a reference (surah and ayah number) and consult authorized Qur'anic text for correct tashkeel.
---
## UX / Pedagogy Details
- **Hints & scaffolding:** Each question has 0–2 hints. Hints explain single grammatical cue (e.g., "the particle إنّ makes the following noun منصوبا").
- **Mistakes:** Show the correct answer with a short explanation. No negative language.
- **Progression:** Mastery-based unlocking. Show competence badges that are educational (e.g., "Understudy of Harf") — textual, not collectible or commerce-based.
- **Timing:** No hard timers; optional speed mode for review only.
- **Accessibility:** Screen-reader friendly prompts, Arabic text with Unicode tashkeel support toggle, and English/Malayalam annotations for the user (Ahmed lives in Kerala — consider Malay/English localization).
- **Citation:** For every Qur'anic excerpt used, store metadata: (Surah, Ayah, edition/print, source of tashkeel). Include a bibliography page in the game settings.
---
## Implementation Notes (for developers & teachers)
- **Content pipeline:** Teachers upload small sets of ayahs (6–12 words each) in a CMS with fields: Arabic (tashkeel optional), translation, ayah reference, difficulty tag, and explanation.
- **Automatic checks:** Use a morphological engine or rule-based validator to pre-check player inputs for likely correct iʿrāb (fall back to manual review for ambiguous classical iʿrāb cases).
- **Collaborative mode:** Implement a lightweight forum thread per assessment where players can post justifications; teacher/moderator pins the canonical analysis.
- **Data privacy & ethics:** No personal data beyond usernames; encourage respectful interaction.
---
## Assessment Rubric (Instructor Version)
- **Accuracy (60%):** Correct endings and morphological identification.
- **Explanation (30%):** Short justifications referencing grammatical rules.
- **Elegance & Source (10%):** Correct citation of ayah and whether the student used appropriate tafsir or classical reference if queried.
**Passing threshold:** ≥ 85% for "Full Mastery"; 60–85% for "Partial Mastery" with directed remediation.
---
## Content Sourcing & Scholarly Vetting
- Partner with qualified Arabic grammar scholars, or reference classical works: *Sibawayh*, *Alfiyya Ibn Malik* (explanatory notes), and standard tafsir works for contextual meaning.
- All Qur'anic excerpts should be cross-checked against a trusted Qur'anic text (Uthmani script) and an approved tashkeel source.
---
## Sample Narrative Beats & Character Sketches
- **The Gatekeeper (Elder):** Warm, patient; sets tone.
- **Mentor A — Umm al-Lughah:** A calm teacher specializing in ismiyyah.
- **Mentor B — Shaykh al-Faʿl:** Energetic, focuses on verbs and morphology.
- **Mentor C — Al-Murshid:** The case specialist — gentle and exacting.
- **Chief Scholar:** Solemn, wise; delivers final counsel.
Each character shares short aphorisms and duʿā; none parody religious figures.
---
## Localization & Customization
- Provide language toggles for UI and supporting notes (English, Arabic, Malayalam, Urdu).
- Allow teachers to load custom lesson packs (beginner → classical → advanced tafsir-linked packs).
---
## Sample Roadmap & MVP Scope
**MVP (3 months):**
1. Prologue diagnostics + Chapter 1 lessons (nominal vs predicate).
2. Mentor A micro-lessons and 50 vetted short Qur'anic items.
3. Basic scoring and feedback engine.
**Phase 2 (3–6 months):**
- Add Mentor B and C, Garden of Wisdom paths, collaborative mode, and content CMS.
**Phase 3:**
- Final assessment, scholarly vetting panel, advanced packs, teacher dashboards.
---
## Appendices
### A. Example Dataset Schema (for CMS)
- id, arabic_text, tashkeel (true/false), translation_en, translation_ml, surah_no, ayah_no, difficulty, tags, explanation, source_reference
### B. Example Short Reference (Quick Grammar Tips)
- **مبتدأ — مرفوع**: the subject of a nominal sentence.
- **خبر — مرفوع**: the predicate of a nominal sentence.
- **إنّ — تنصب الاسم بعدها**: particle that makes the following noun mansūb.
- **مَعَ — جرّ**: preposition that makes its object majrūr.
---
## Respect & Safeguards (important)
- Avoid placing full-length tafsir excerpts that could mislead without context.
- Make sure every Qur'anic excerpt is presented reverently, with clear reference.
- Provide disclaimers: this tool is pedagogical and not a substitute for a qualified teacher in matters of creed or law.
---
## Closing
This document is a complete design blueprint for an educational, respectful, and scholarly *Quranic Nahw RPG*. It intentionally avoids gamified trinkets and instead rewards learning with knowledge, counsel, and spiritual reflection.
*Prepared as: "Quranic Nahw RPG — The City of Language | Branching Storyline & Design Document"*
