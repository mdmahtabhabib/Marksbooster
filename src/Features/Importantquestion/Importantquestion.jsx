import { useState } from "react";
import { useParams } from "react-router-dom";

// =====================================================
// IMPORTANT QUESTIONS — everything in one file
// =====================================================
// 0. DATA          the questions (later they come from Supabase)
// 1. SETTINGS      question types, section letters, ruled lines
// 2. HELPER        puts the questions into sections
// 3. ONE QUESTION
// 4. ONE SECTION
// 5. THE PAPER     draws everything
// 6. THE PAGE      picks this chapter's questions and shows the paper
//
// Only parts 0 and 6 know where the questions come from.
// When Supabase is connected, delete part 0 and change part 6.
// Parts 1–5 stay exactly the same.


// =====================================================
// 0. DATA
// =====================================================
// The shape copies what Supabase will send back for
//   .from("chapters").select("title, important_questions(*)")
//
// One object inside important_questions = one question = later one row
// in the important_questions table (see 09_important_questions.sql).
//
//   id       : unique number. In Supabase the database makes it, here we write it.
//   position : order inside its section. Starts at 1, no repeats.
//   type     : which section it goes in. Must be a key from QUESTION_TYPES
//              in part 1 below ("very-short", "short", "long", ...)
//   marks    : shown as [marks] next to the question
//   question : the question. Use a new line for (a), (b), (c) parts.
//   answer   : optional. null = no "View answer" button.
//   tag      : optional small label, e.g. "Most asked", "Diagram", "PYQ 2024"
//   image    : optional picture shown inside the answer (a diagram url)

const importantquestionsdata = {
  "cell-the-building-block-of-life": {
    title: "Cell: The Building Block of Life",

    important_questions: [
      // -----------------------------------------------
      // VERY SHORT ANSWER (1 mark)
      // -----------------------------------------------
      {
        id: 1,
        position: 1,
        type: "very-short",
        marks: 1,
        question: "Who discovered the cell, and in which year?",
        answer: "Robert Hooke, in 1665. He saw small box-like compartments in a thin slice of cork under his microscope and called them cells.",
        tag: "Most asked",
        image: null,
      },
      {
        id: 2,
        position: 2,
        type: "very-short",
        marks: 1,
        question: "Name the two scientists who proposed the cell theory.",
        answer: "Matthias Schleiden (1838) and Theodor Schwann (1839).",
        tag: null,
        image: null,
      },
      {
        id: 3,
        position: 3,
        type: "very-short",
        marks: 1,
        question: "Who stated that all cells arise from pre-existing cells?",
        answer: "Rudolf Virchow (1855).",
        tag: null,
        image: null,
      },
      {
        id: 4,
        position: 4,
        type: "very-short",
        marks: 1,
        question: "A microscope has a 10X eyepiece and a 40X objective lens. What is its total magnification?",
        answer: "Total magnification = eyepiece × objective = 10 × 40 = 400X.",
        tag: null,
        image: null,
      },
      {
        id: 5,
        position: 5,
        type: "very-short",
        marks: 1,
        question: "Why is the plasma membrane called a selectively permeable membrane?",
        answer: "Because it lets only some substances enter or leave the cell and stops others.",
        tag: null,
        image: null,
      },
      {
        id: 6,
        position: 6,
        type: "very-short",
        marks: 1,
        question: "Which cell organelle is known as the 'powerhouse of the cell'?",
        answer: "Mitochondria.",
        tag: "Most asked",
        image: null,
      },
      {
        id: 7,
        position: 7,
        type: "very-short",
        marks: 1,
        question: "Which organelle is called the 'kitchen of the cell'?",
        answer: "Chloroplast, because food is made in it by photosynthesis.",
        tag: null,
        image: null,
      },
      {
        id: 8,
        position: 8,
        type: "very-short",
        marks: 1,
        question: "Name a cell organelle that is not covered by any membrane.",
        answer: "Ribosome.",
        tag: null,
        image: null,
      },
      {
        id: 9,
        position: 9,
        type: "very-short",
        marks: 1,
        question: "What is the undefined nuclear region of a prokaryotic cell called?",
        answer: "Nucleoid.",
        tag: null,
        image: null,
      },
      {
        id: 10,
        position: 10,
        type: "very-short",
        marks: 1,
        question: "Name the two organelles of a plant cell, other than the nucleus, that have their own DNA and ribosomes.",
        answer: "Mitochondria and plastids.",
        tag: null,
        image: null,
      },
      {
        id: 11,
        position: 11,
        type: "very-short",
        marks: 1,
        question: "What is the cell wall of a plant cell mainly made of?",
        answer: "Cellulose.",
        tag: null,
        image: null,
      },
      {
        id: 12,
        position: 12,
        type: "very-short",
        marks: 1,
        question: "Which organelle helps to detoxify many poisons and drugs in the liver cells?",
        answer: "Smooth endoplasmic reticulum (SER).",
        tag: null,
        image: null,
      },
      {
        id: 13,
        position: 13,
        type: "very-short",
        marks: 1,
        question: "Name the process by which Amoeba takes in its food.",
        answer: "Endocytosis.",
        tag: null,
        image: null,
      },
      {
        id: 14,
        position: 14,
        type: "very-short",
        marks: 1,
        question: "What are chromosomes made up of?",
        answer: "DNA and protein.",
        tag: null,
        image: null,
      },

      // -----------------------------------------------
      // ASSERTION & REASON (1 mark)
      // -----------------------------------------------
      {
        id: 15,
        position: 1,
        type: "assertion-reason",
        marks: 1,
        question: `Assertion (A): Lysosomes are called the 'suicide bags' of the cell.
Reason (R): When the cell is damaged, lysosomes may burst and their enzymes digest the cell itself.`,
        answer: "(a) Both A and R are true, and R is the correct explanation of A.",
        tag: "Most asked",
        image: null,
      },
      {
        id: 16,
        position: 2,
        type: "assertion-reason",
        marks: 1,
        question: `Assertion (A): Plant cells do not burst when kept in a hypotonic solution.
Reason (R): The rigid cell wall lets plant cells withstand very dilute surroundings.`,
        answer: "(a) Both A and R are true, and R is the correct explanation of A.",
        tag: null,
        image: null,
      },
      {
        id: 17,
        position: 3,
        type: "assertion-reason",
        marks: 1,
        question: `Assertion (A): Mitochondria are called the powerhouse of the cell.
Reason (R): Mitochondria have their own DNA and ribosomes.`,
        answer: `(b) Both A and R are true, but R is not the correct explanation of A.
Mitochondria are the powerhouse because they release energy as ATP, not because they have their own DNA.`,
        tag: null,
        image: null,
      },
      {
        id: 18,
        position: 4,
        type: "assertion-reason",
        marks: 1,
        question: `Assertion (A): Smooth endoplasmic reticulum helps in making lipids.
Reason (R): Ribosomes are attached to the surface of smooth endoplasmic reticulum.`,
        answer: `(c) A is true, but R is false.
Ribosomes are attached to the rough ER, not the smooth ER.`,
        tag: null,
        image: null,
      },
      {
        id: 19,
        position: 5,
        type: "assertion-reason",
        marks: 1,
        question: `Assertion (A): Prokaryotic cells have a well-defined nucleus.
Reason (R): In prokaryotic cells, the nuclear material is not covered by a nuclear membrane.`,
        answer: `(d) A is false, but R is true.
Because there is no nuclear membrane, prokaryotes do NOT have a well-defined nucleus. They have a nucleoid.`,
        tag: null,
        image: null,
      },

      // -----------------------------------------------
      // SHORT ANSWER (2–3 marks)
      // -----------------------------------------------
      {
        id: 20,
        position: 1,
        type: "short",
        marks: 2,
        question: "Why are lysosomes known as the 'suicide bags' of the cell?",
        answer: `• Lysosomes contain powerful digestive enzymes that can break down almost any organic material.
• When the cell gets damaged, lysosomes may burst and their enzymes digest their own cell.
• Because they can destroy the cell they are in, they are called suicide bags.`,
        tag: "Most asked",
        image: null,
      },
      {
        id: 21,
        position: 2,
        type: "short",
        marks: 3,
        question: "Write three differences between prokaryotic and eukaryotic cells.",
        answer: `Prokaryotic cell → Eukaryotic cell
1. Nuclear region not covered by a nuclear membrane (nucleoid) → Well-defined nucleus with a nuclear membrane.
2. Membrane-bound organelles (mitochondria, plastids, Golgi) absent → Membrane-bound organelles present.
3. Usually small in size → Usually larger in size.
Example: bacteria → plant and animal cells.`,
        tag: "Most asked",
        image: null,
      },
      {
        id: 22,
        position: 3,
        type: "short",
        marks: 2,
        question: `What happens when a red blood cell (RBC) is kept in
(a) a concentrated salt solution?
(b) distilled water?`,
        answer: `(a) The salt solution is hypertonic, so water moves out of the RBC by osmosis. The cell shrinks.
(b) Distilled water is hypotonic, so water moves into the RBC by osmosis. The cell swells and may burst, as an animal cell has no cell wall.`,
        tag: null,
        image: null,
      },
      {
        id: 23,
        position: 4,
        type: "short",
        marks: 2,
        question: "When salt is added to vegetables during cooking, they release water. Which process is responsible? Explain.",
        answer: `• Osmosis.
• Salt makes the solution outside the vegetable cells more concentrated (hypertonic).
• So water moves out of the cells through the selectively permeable membrane, and the vegetables release water.`,
        tag: null,
        image: null,
      },
      {
        id: 24,
        position: 5,
        type: "short",
        marks: 3,
        question: "Distinguish between diffusion and osmosis.",
        answer: `Diffusion → Osmosis
1. Movement of any substance (gas, liquid or dissolved solid) → Movement of water only.
2. Can happen with or without a membrane → Always through a selectively permeable membrane.
3. Substance moves from its higher to lower concentration → Water moves from higher water concentration (dilute solution) to lower water concentration (concentrated solution).
Example: CO₂ and O₂ exchange → water entering root hair cells.`,
        tag: "Most asked",
        image: null,
      },
      {
        id: 25,
        position: 6,
        type: "short",
        marks: 3,
        question: "Write any three functions of the Golgi apparatus.",
        answer: `1. Stores, modifies and packages the materials made in the endoplasmic reticulum, and sends them inside and outside the cell.
2. Forms lysosomes.
3. Makes complex sugars from simple sugars.`,
        tag: null,
        image: null,
      },
      {
        id: 26,
        position: 7,
        type: "short",
        marks: 2,
        question: "How do carbon dioxide (CO₂) and water (H₂O) move in and out of the cell?",
        answer: `• CO₂ moves by diffusion — from the cell, where its concentration is high, to the outside, where it is low.
• Water moves by osmosis — through the selectively permeable plasma membrane, from higher to lower water concentration.`,
        tag: null,
        image: null,
      },
      {
        id: 27,
        position: 8,
        type: "short",
        marks: 2,
        question: "How does Amoeba obtain its food?",
        answer: `• Amoeba takes in food by endocytosis.
• Its flexible plasma membrane pushes out finger-like projections (pseudopodia) that surround the food particle.
• The food gets enclosed in a food vacuole, where it is digested.`,
        tag: null,
        image: null,
      },
      {
        id: 28,
        position: 9,
        type: "short",
        marks: 2,
        question: "Why do plant cells have a large vacuole?",
        answer: `• The vacuole is filled with cell sap. Its pressure gives the plant cell turgidity and rigidity.
• It stores substances important for the cell, such as amino acids, sugars and proteins, and some wastes.`,
        tag: null,
        image: null,
      },
      {
        id: 29,
        position: 10,
        type: "short",
        marks: 3,
        question: "Name the three types of plastids. Give one function of each and the plant part where it is found.",
        answer: `1. Chloroplast (green) — photosynthesis — leaves.
2. Chromoplast (coloured) — gives colour to flowers and fruits — petals and fruits.
3. Leucoplast (colourless) — stores starch, oils and proteins — roots and storage organs.`,
        tag: null,
        image: null,
      },
      {
        id: 30,
        position: 11,
        type: "short",
        marks: 3,
        question: "How are chromatin, chromatid and chromosome related to each other?",
        answer: `• Chromatin is the thread-like network of DNA and protein seen in the nucleus of a non-dividing cell.
• When the cell is about to divide, chromatin condenses into rod-shaped chromosomes.
• Each chromosome is made of two identical halves called chromatids, joined at one point.`,
        tag: null,
        image: null,
      },
      {
        id: 31,
        position: 12,
        type: "short",
        marks: 2,
        question: "State the cell theory.",
        answer: `1. All plants and animals are made up of cells.
2. The cell is the basic unit of life.
3. All cells arise from pre-existing cells (added by Virchow).`,
        tag: null,
        image: null,
      },
      {
        id: 32,
        position: 13,
        type: "short",
        marks: 2,
        question: "Why is the nucleus called the control centre of the cell?",
        answer: `• The nucleus contains chromosomes, whose DNA carries the information for making and running the cell.
• So it controls the cell's activities, its growth and development, and passes characters from parents to the next generation.`,
        tag: null,
        image: null,
      },

      // -----------------------------------------------
      // LONG ANSWER (5 marks)
      // -----------------------------------------------
      {
        id: 33,
        position: 1,
        type: "long",
        marks: 5,
        question: "Draw a neat, labelled diagram of an animal cell.",
        answer: `Draw a round / irregular cell (no cell wall) and label:
• Plasma membrane
• Cytoplasm
• Nucleus — nuclear membrane, nucleolus, chromatin
• Mitochondria
• Golgi apparatus
• Rough ER (with ribosomes) and smooth ER
• Lysosome
• Small vacuole
Tip: 1 mark goes for neatness — use a sharp pencil and draw label lines with a ruler.`,
        tag: "Diagram",
        image: null,
      },
      {
        id: 34,
        position: 2,
        type: "long",
        marks: 5,
        question: "Draw a labelled diagram of a plant cell. Write three differences between a plant cell and an animal cell.",
        answer: `Diagram labels: cell wall, plasma membrane, cytoplasm, nucleus (nucleolus, nuclear membrane), large central vacuole, chloroplast, mitochondria, Golgi apparatus, ER, ribosomes.

Plant cell → Animal cell
1. Has a cell wall made of cellulose → No cell wall.
2. Plastids (chloroplasts) present → Plastids absent.
3. One large central vacuole → Small vacuoles, or none.
4. Usually fixed, rectangular shape → Usually round or irregular shape.`,
        tag: "Diagram",
        image: null,
      },
      {
        id: 35,
        position: 3,
        type: "long",
        marks: 5,
        question: "Differentiate between rough and smooth endoplasmic reticulum. How is the endoplasmic reticulum important for membrane biogenesis?",
        answer: `Rough ER → Smooth ER
1. Ribosomes attached to its surface → No ribosomes attached.
2. Makes proteins → Makes lipids (fats).
3. Looks rough under the electron microscope → Looks smooth.

Membrane biogenesis:
• The cell membrane is made of proteins and lipids.
• Proteins made by the rough ER and lipids made by the smooth ER are used to build the cell membrane.
• This making of new membrane is called membrane biogenesis.`,
        tag: "Most asked",
        image: null,
      },
      {
        id: 36,
        position: 4,
        type: "long",
        marks: 5,
        question: "What is osmosis? Explain what happens to a cell placed in a (a) hypotonic, (b) isotonic and (c) hypertonic solution.",
        answer: `Osmosis is the movement of water molecules through a selectively permeable membrane, from a region of higher water concentration to a region of lower water concentration.

(a) Hypotonic solution (outside is more dilute): water enters the cell, so the cell swells.
(b) Isotonic solution (same concentration): water moves in and out equally, so the cell stays the same size.
(c) Hypertonic solution (outside is more concentrated): water leaves the cell, so the cell shrinks. In plant cells the contents pull away from the cell wall — this is plasmolysis.`,
        tag: "Most asked",
        image: null,
      },
      {
        id: 37,
        position: 5,
        type: "long",
        marks: 5,
        question: `In brief, state what happens when:
(a) dry raisins are left in water for some time, then put in a concentrated sugar solution.
(b) a red blood cell is kept in a concentrated salt solution.
(c) the plasma membrane of a cell breaks down.
(d) the Golgi apparatus is removed from the cell.
(e) Rhoeo leaves are boiled in water, then put in a concentrated sugar solution.`,
        answer: `(a) In water the raisins swell, as water enters by osmosis. In sugar solution they lose water and shrink again.
(b) Water leaves the RBC by osmosis, so it shrinks.
(c) The cell contents leak out, nothing controls what enters or leaves, and the cell dies.
(d) Materials made in the cell cannot be packaged and sent out, and lysosomes cannot be formed.
(e) No plasmolysis is seen. Boiling kills the cells, and a dead cell's membrane is no longer selectively permeable, so osmosis does not happen.`,
        tag: null,
        image: null,
      },
      {
        id: 38,
        position: 6,
        type: "long",
        marks: 5,
        question: "Describe the structure and functions of the nucleus. How is it different from a nucleoid?",
        answer: `Structure:
• Covered by a double-layered nuclear membrane with pores, which let materials move between the nucleus and cytoplasm.
• Contains chromatin (DNA + protein) and a nucleolus.

Functions:
• Controls all the activities of the cell.
• Chromosomes carry DNA, which passes characters from parents to offspring.
• Plays a central part in cell division.

Nucleus vs nucleoid:
• A nucleus has a nuclear membrane (eukaryotes); a nucleoid has none (prokaryotes).
• A nucleus has a nucleolus; a nucleoid has no nucleolus.`,
        tag: null,
        image: null,
      },
      {
        id: 39,
        position: 7,
        type: "long",
        marks: 5,
        question: "Describe how the cell was discovered and how the cell theory developed. Name the scientists involved.",
        answer: `• 1665 — Robert Hooke saw cells in a thin slice of cork using his microscope.
• 1674 — Leeuwenhoek first saw free-living cells in pond water with an improved microscope.
• 1831 — Robert Brown discovered the nucleus.
• 1839 — Purkinje named the fluid substance of the cell 'protoplasm'.
• 1838–39 — Schleiden and Schwann proposed the cell theory: all plants and animals are made of cells, and the cell is the basic unit of life.
• 1855 — Virchow added that all cells arise from pre-existing cells.`,
        tag: null,
        image: null,
      },
    ],
  },
};


// =====================================================
// 1. SETTINGS
// =====================================================

// One line = one section on the paper, in this order.
//   key   : must be the same as "type" in the data
//   label : the section heading
//   marks : the small text under the heading
//   hint  : (optional) a box shown before the questions
const QUESTION_TYPES = [
  { key: "very-short", label: "Very Short Answer Questions", marks: "1 mark each" },
  {
    key: "assertion-reason",
    label: "Assertion & Reason Questions",
    marks: "1 mark each",
    hint: `(a) Both A and R are true, and R is the correct explanation of A.
(b) Both A and R are true, but R is not the correct explanation of A.
(c) A is true, but R is false.
(d) A is false, but R is true.`,
  },
  { key: "short", label: "Short Answer Questions", marks: "2–3 marks" },
  { key: "long", label: "Long Answer Questions", marks: "5 marks each" },
];

// Section A, Section B, Section C ...
const LETTERS = "ABCDEFGH";

// The lines behind an answer, like a notebook: a thin blue line every 28px.
// The answer text is also 28px high per line, so every line of text sits on a ruled line.
const ruledLines = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, transparent 0px, transparent 27px, #dbe7f3 27px, #dbe7f3 28px)",
};


// =====================================================
// 2. HELPER — put the questions into sections
// =====================================================
// Gets : all the questions, all types mixed
// Gives: [ { key, label, marks, hint, questions: [...] }, ... ]
//
// Every question also gets a "number" (1, 2, 3 ...). The number keeps counting
// from one section to the next, like a real question paper.

function makeSections(questions) {
  const sections = [];
  let number = 0;

  QUESTION_TYPES.forEach((type) => {
    // only the questions of this type
    const list = questions.filter((q) => q.type === type.key);

    // no questions of this type → no section
    if (list.length === 0) return;

    // put them in order: position 1, 2, 3 ...
    list.sort((a, b) => a.position - b.position);

    // copy each question and add its number
    const numbered = [];
    list.forEach((q) => {
      number = number + 1;
      numbered.push({ ...q, number: number });
    });

    sections.push({ ...type, questions: numbered });
  });

  return sections;
}


// =====================================================
// 3. ONE QUESTION
// =====================================================

function Question({ q, isOpen, onToggle }) {
  return (
    // last:border-b-0 = no dotted line under the last question
    <li className="border-b border-dashed border-stone-300 py-[16px] last:border-b-0">

      {/* Row 1:  number | question | [marks] */}
      <div className="flex gap-[8px]">
        <span className="w-[34px] shrink-0 font-newsreader text-[17px] font-bold text-stone-900">
          {q.number}.
        </span>

        {/* whitespace-pre-line makes a new line in the data show as a new line */}
        <p className="flex-1 whitespace-pre-line font-newsreader text-[17px] leading-[1.6] text-stone-900">
          {q.question}
        </p>

        <span className="shrink-0 pt-[2px] font-newsreader text-[15px] text-stone-500">
          [{q.marks}]
        </span>
      </div>

      {/* Row 2:  tag, answer button, answer
          pl-[42px] = number width (34px) + gap (8px), so this row starts under the question */}
      <div className="pl-[42px]">
        {q.tag && (
          <div className="mt-[2px] font-newsreader text-[14px] italic text-red-700">
            ★ {q.tag}
          </div>
        )}

        {q.answer && (
          // aria-expanded tells screen readers if the answer is open
          <button
            onClick={onToggle}
            aria-expanded={isOpen}
            className="mt-[8px] font-archivo text-[12px] font-bold uppercase tracking-[0.12em] text-[#0e5490] hover:underline"
          >
            {isOpen ? "Hide answer" : "View answer →"}
          </button>
        )}

        {isOpen && (
          <div
            style={ruledLines}
            className="mt-[12px] rounded-[4px] border border-sky-200 border-l-[3px] border-l-red-300 bg-[#f8fbff] px-[14px]"
          >
            <p className="whitespace-pre-line font-archivo text-[15px] leading-[28px] text-[#1d3f8f]">
              <span className="font-bold text-red-700">Ans. </span>
              {q.answer}
            </p>

            {/* Diagram, only if the answer has one */}
            {q.image && (
              <img
                src={q.image}
                alt="Diagram"
                className="mx-auto my-[10px] max-h-[320px] rounded-[4px] bg-white p-[8px]"
              />
            )}
          </div>
        )}
      </div>
    </li>
  );
}


// =====================================================
// 4. ONE SECTION (Section A, Section B ...)
// =====================================================

function Section({ section, letter, openIds, onToggle }) {
  const count = section.questions.length;

  return (
    <section className="mt-[36px]">
      {/* Heading */}
      <div className="border-b border-stone-800 pb-[10px] text-center">
        <div className="font-archivo text-[11px] font-bold uppercase tracking-[0.3em] text-[#0e5490]">
          Section {letter}
        </div>

        <h2 className="mt-[4px] font-newsreader text-[21px] font-bold text-stone-900">
          {section.label}
        </h2>

        <div className="mt-[2px] font-archivo text-[12px] text-stone-500">
          {count} {count === 1 ? "question" : "questions"} · {section.marks}
        </div>
      </div>

      {/* Hint box, only if this type has one */}
      {section.hint && (
        <div className="mt-[14px] border border-stone-300 px-[12px] py-[9px] font-newsreader text-[15px] leading-[1.55] text-stone-700">
          <div className="italic">Choose the correct option:</div>
          <div className="whitespace-pre-line">{section.hint}</div>
        </div>
      )}

      {/* Questions */}
      <ol>
        {section.questions.map((q) => (
          <Question
            key={q.id}
            q={q}
            isOpen={openIds.includes(q.id)}
            onToggle={() => onToggle(q.id)}
          />
        ))}
      </ol>
    </section>
  );
}


// =====================================================
// 5. THE PAPER (draws everything)
// =====================================================

function ImportantquestionsPaper({ title, questions }) {
  // ids of the questions whose answer is open, e.g. [3, 15, 21]
  const [openIds, setOpenIds] = useState([]);

  // No questions yet → show a message instead of the paper
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <p className="text-slate-400 text-center">No important questions for this chapter yet, check back soon.</p>
      </div>
    );
  }

  // Put the questions into sections
  const sections = makeSections(questions);

  // Count the questions and marks for the header,
  // and keep the ids of the questions that have an answer (for "Show answers")
  let totalQuestions = 0;
  let totalMarks = 0;
  const answerIds = [];

  sections.forEach((section) => {
    section.questions.forEach((q) => {
      totalQuestions = totalQuestions + 1;
      totalMarks = totalMarks + q.marks;

      if (q.answer) {
        answerIds.push(q.id);
      }
    });
  });

  // true when every answer is open
  const allOpen = answerIds.length > 0 && answerIds.every((id) => openIds.includes(id));

  // ---------- Handlers ----------

  // Open or close one answer
  function toggleAnswer(id) {
    setOpenIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((openId) => openId !== id) // open → close it
        : [...previousIds, id]                          // closed → open it
    );
  }

  function showAllAnswers() {
    setOpenIds(answerIds);
  }

  function hideAllAnswers() {
    setOpenIds([]);
  }

  // The Hide / Show switch: the dark half is the one that is "on"
  const switchOn = "rounded-full px-[12px] py-[5px] bg-stone-900 text-white transition-colors";
  const switchOff = "rounded-full px-[12px] py-[5px] text-stone-600 hover:text-stone-900 transition-colors";

  // ---------- UI ----------

  return (
    <div className="min-h-screen bg-stone-200 sm:px-[16px] sm:py-[28px]">

      {/* THE PAPER */}
      <div className="mx-auto max-w-[820px] bg-[#fffdf8] px-[18px] pb-[36px] pt-[26px] shadow-[0_1px_3px_rgba(0,0,0,0.12),0_12px_32px_-12px_rgba(0,0,0,0.25)] sm:rounded-[4px] sm:px-[44px] sm:pt-[36px]">

        {/* HEADER */}
        <header className="border-b-[4px] border-double border-stone-800 pb-[14px] text-center">
          <div className="font-archivo text-[11px] font-bold uppercase tracking-[0.25em] text-[#0e5490]">
            MarksBooster · Important Questions
          </div>

          <h1 className="mt-[8px] font-newsreader text-[28px] font-bold leading-[1.15] text-stone-900 sm:text-[34px]">
            {title}
          </h1>

          <div className="mt-[14px] flex justify-between font-archivo text-[12px] font-medium text-stone-600">
            <span>Questions: {totalQuestions}</span>
            <span>Total marks: {totalMarks}</span>
          </div>
        </header>

        {/* INSTRUCTIONS + HIDE / SHOW SWITCH */}
        <div className="mt-[14px] flex flex-col gap-[12px] sm:flex-row sm:items-start sm:justify-between">
          <div className="font-newsreader text-[14px] leading-[1.5] text-stone-600">
            <span className="font-bold text-stone-800">General instructions: </span>
            <span className="italic">
              Write each answer yourself first, then open it to check. Questions marked ★ are asked most often.
            </span>
          </div>

          <div className="inline-flex shrink-0 self-start rounded-full border border-stone-300 bg-white p-[3px] font-archivo text-[12px] font-bold">
            <button onClick={hideAllAnswers} className={allOpen ? switchOff : switchOn}>
              Hide answers
            </button>
            <button onClick={showAllAnswers} className={allOpen ? switchOn : switchOff}>
              Show answers
            </button>
          </div>
        </div>

        {/* SECTIONS */}
        {sections.map((section, index) => (
          <Section
            key={section.key}
            section={section}
            letter={LETTERS[index]}
            openIds={openIds}
            onToggle={toggleAnswer}
          />
        ))}

        {/* FOOTER */}
        <footer className="mt-[30px] text-center font-archivo text-[11px] font-bold uppercase tracking-[0.3em] text-stone-400">
          — End of questions —
        </footer>
      </div>
    </div>
  );
}


// =====================================================
// 6. THE PAGE (the one you import in ToolLeaf)
// =====================================================
// Now  : takes the questions from part 0 (DATA) above.
// Later: make this like ConceptchecklistPage — useState + useEffect + the query
//          .from("chapters")
//          .select("title, important_questions(*)")
//          .eq("slug", chapterSlug)
//          .single();
//        and delete part 0. The return line at the bottom stays the same.

export default function ImportantquestionsPage() {
  const { chapterSlug } = useParams();

  // find this chapter in the data
  const chapter = importantquestionsdata[chapterSlug];

  if (!chapter) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <p className="text-slate-400 text-center">No important questions for this chapter yet, check back soon.</p>
      </div>
    );
  }

  return <ImportantquestionsPaper title={chapter.title} questions={chapter.important_questions} />;
}
