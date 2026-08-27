import { useState, useEffect } from "react";

/* ==================================================================
   NEET SYLLABUS TRACKER
   Code jaan-boojh kar simple rakha hai:
   - sirf useState aur useEffect (koi useMemo/useRef nahi)
   - chhote-chhote components, har ek ka ek hi kaam
   - har chapter ka apna stable id hai (p1, c1, b1, z1...) —
     isse Supabase me shift karna aasaan hoga
   ================================================================== */

/* ---- STEP 1: App ka accent colour -----------------------------------
   Marksbooster wali palette — white background + blue accent.
   Grey/black kahin nahi hai; headings bhi blue-tinted ink hain.
   Shade badalni ho to neeche "blue" ki jagah "sky"/"indigo" likh do.
-------------------------------------------------------------------- */
const ACCENT = {
  panel: "bg-blue-50",       // header block ka background
  head: "text-blue-900",     // headings
  body: "text-blue-800",     // normal text
  soft: "text-blue-600",     // supporting text
  faint: "text-blue-400",    // chhote counts, labels
  border: "border-blue-100", // card borders
  line: "bg-blue-100",       // divider lines
  active: "border-blue-500", // selected subject ka border
  track: "bg-blue-200",      // progress bar ka khaali hissa
  fill: "bg-blue-600",       // progress bar ka bhara hissa
  ring: "focus-visible:ring-blue-500",
};

/* ---- STEP 2: Syllabus data ----------------------------------------
   Har chapter ek object hai: { id, cls, title }
   cls = 11 ya 12 — isi se list class-wise group hoti hai.
-------------------------------------------------------------------- */
const SUBJECTS = [
  {
    id: "physics",
    name: "Physics",
    bar: "bg-violet-500",
    soft: "bg-violet-50",
    edge: "border-violet-500",
    text: "text-violet-700",
    chapters: [
      { id: "p1", cls: 11, title: "Units and Measurements" },
      { id: "p2", cls: 11, title: "Motion in a Straight Line" },
      { id: "p3", cls: 11, title: "Motion in a Plane" },
      { id: "p4", cls: 11, title: "Laws of Motion" },
      { id: "p5", cls: 11, title: "Work, Energy and Power" },
      { id: "p6", cls: 11, title: "System of Particles and Rotational Motion" },
      { id: "p7", cls: 11, title: "Gravitation" },
      { id: "p8", cls: 11, title: "Mechanical Properties of Solids" },
      { id: "p9", cls: 11, title: "Mechanical Properties of Fluids" },
      { id: "p10", cls: 11, title: "Thermal Properties of Matter" },
      { id: "p11", cls: 11, title: "Thermodynamics" },
      { id: "p12", cls: 11, title: "Kinetic Theory" },
      { id: "p13", cls: 11, title: "Oscillations" },
      { id: "p14", cls: 11, title: "Waves" },
      { id: "p15", cls: 12, title: "Electric Charges and Fields" },
      { id: "p16", cls: 12, title: "Electrostatic Potential and Capacitance" },
      { id: "p17", cls: 12, title: "Current Electricity" },
      { id: "p18", cls: 12, title: "Moving Charges and Magnetism" },
      { id: "p19", cls: 12, title: "Magnetism and Matter" },
      { id: "p20", cls: 12, title: "Electromagnetic Induction" },
      { id: "p21", cls: 12, title: "Alternating Current" },
      { id: "p22", cls: 12, title: "Electromagnetic Waves" },
      { id: "p23", cls: 12, title: "Ray Optics and Optical Instruments" },
      { id: "p24", cls: 12, title: "Wave Optics" },
      { id: "p25", cls: 12, title: "Dual Nature of Radiation and Matter" },
      { id: "p26", cls: 12, title: "Atoms" },
      { id: "p27", cls: 12, title: "Nuclei" },
      { id: "p28", cls: 12, title: "Semiconductor Electronics" },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    bar: "bg-amber-500",
    soft: "bg-amber-50",
    edge: "border-amber-500",
    text: "text-amber-700",
    chapters: [
      { id: "c1", cls: 11, title: "Some Basic Concepts of Chemistry" },
      { id: "c2", cls: 11, title: "Structure of Atom" },
      { id: "c3", cls: 11, title: "Classification of Elements and Periodicity" },
      { id: "c4", cls: 11, title: "Chemical Bonding and Molecular Structure" },
      { id: "c5", cls: 11, title: "Thermodynamics" },
      { id: "c6", cls: 11, title: "Equilibrium" },
      { id: "c7", cls: 11, title: "Redox Reactions" },
      { id: "c8", cls: 11, title: "Organic Chemistry: Basic Principles and Techniques" },
      { id: "c9", cls: 11, title: "Hydrocarbons" },
      { id: "c10", cls: 12, title: "Solutions" },
      { id: "c11", cls: 12, title: "Electrochemistry" },
      { id: "c12", cls: 12, title: "Chemical Kinetics" },
      { id: "c13", cls: 12, title: "p-Block Elements" },
      { id: "c14", cls: 12, title: "d- and f-Block Elements" },
      { id: "c15", cls: 12, title: "Coordination Compounds" },
      { id: "c16", cls: 12, title: "Haloalkanes and Haloarenes" },
      { id: "c17", cls: 12, title: "Alcohols, Phenols and Ethers" },
      { id: "c18", cls: 12, title: "Aldehydes, Ketones and Carboxylic Acids" },
      { id: "c19", cls: 12, title: "Amines" },
      { id: "c20", cls: 12, title: "Biomolecules" },
    ],
  },
  {
    id: "botany",
    name: "Botany",
    bar: "bg-emerald-500",
    soft: "bg-emerald-50",
    edge: "border-emerald-500",
    text: "text-emerald-700",
    chapters: [
      { id: "b1", cls: 11, title: "The Living World" },
      { id: "b2", cls: 11, title: "Biological Classification" },
      { id: "b3", cls: 11, title: "Plant Kingdom" },
      { id: "b4", cls: 11, title: "Morphology of Flowering Plants" },
      { id: "b5", cls: 11, title: "Anatomy of Flowering Plants" },
      { id: "b6", cls: 11, title: "Cell: The Unit of Life" },
      { id: "b7", cls: 11, title: "Cell Cycle and Cell Division" },
      { id: "b8", cls: 11, title: "Photosynthesis in Higher Plants" },
      { id: "b9", cls: 11, title: "Respiration in Plants" },
      { id: "b10", cls: 11, title: "Plant Growth and Development" },
      { id: "b11", cls: 12, title: "Sexual Reproduction in Flowering Plants" },
      { id: "b12", cls: 12, title: "Principles of Inheritance and Variation" },
      { id: "b13", cls: 12, title: "Molecular Basis of Inheritance" },
      { id: "b14", cls: 12, title: "Microbes in Human Welfare" },
      { id: "b15", cls: 12, title: "Organisms and Populations" },
      { id: "b16", cls: 12, title: "Ecosystem" },
      { id: "b17", cls: 12, title: "Biodiversity and Conservation" },
    ],
  },
  {
    id: "zoology",
    name: "Zoology",
    bar: "bg-rose-500",
    soft: "bg-rose-50",
    edge: "border-rose-500",
    text: "text-rose-700",
    chapters: [
      { id: "z1", cls: 11, title: "Animal Kingdom" },
      { id: "z2", cls: 11, title: "Structural Organisation in Animals" },
      { id: "z3", cls: 11, title: "Biomolecules" },
      { id: "z4", cls: 11, title: "Breathing and Exchange of Gases" },
      { id: "z5", cls: 11, title: "Body Fluids and Circulation" },
      { id: "z6", cls: 11, title: "Excretory Products and their Elimination" },
      { id: "z7", cls: 11, title: "Locomotion and Movement" },
      { id: "z8", cls: 11, title: "Neural Control and Coordination" },
      { id: "z9", cls: 11, title: "Chemical Coordination and Integration" },
      { id: "z10", cls: 12, title: "Human Reproduction" },
      { id: "z11", cls: 12, title: "Reproductive Health" },
      { id: "z12", cls: 12, title: "Evolution" },
      { id: "z13", cls: 12, title: "Human Health and Disease" },
      { id: "z14", cls: 12, title: "Biotechnology: Principles and Processes" },
      { id: "z15", cls: 12, title: "Biotechnology and its Applications" },
    ],
  },
];

const STORAGE_KEY = "neet-tracker:v1";

function loadSavedProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}




/* ---- STEP 3: Chhote helper functions -------------------------------
   Yeh sab plain JavaScript hain — React ka koi lena-dena nahi.
-------------------------------------------------------------------- */

// Progress ke hisaab se ek encouraging line
function getMilestone(percent) {
  if (percent === 0) return "Chalo shuru karte hain — pehla chapter tick karo";
  if (percent === 100) return "Poora syllabus complete 🎉";
  if (percent < 25) return "Shuruaat ho gayi — aise hi chalte raho";
  if (percent < 50) return "Ek chauthai paar, rhythm ban raha hai";
  if (percent < 75) return "Aadhe raste se aage nikal gaye 👏";
  return "Bas thoda aur bacha hai";
}

// Ek subject ke kitne chapter done hain
function countDone(subject, done) {
  return subject.chapters.filter((ch) => done[ch.id]).length;
}

// Percent nikalne ka safe tareeka (0 se divide na ho)
function toPercent(part, whole) {
  if (whole === 0) return 0;
  return Math.round((part / whole) * 100);
}

// Saare subjects ka total
function getTotals(done) {
  let total = 0;
  let finished = 0;
  for (const subject of SUBJECTS) {
    total = total + subject.chapters.length;
    finished = finished + countDone(subject, done);
  }
  return { total, finished };
}

/* ---- STEP 4: Chhote components -------------------------------------
   Har component sirf props leta hai aur JSX return karta hai.
-------------------------------------------------------------------- */

// Poore syllabus ki ek hi progress bar
function OverallBar({ percent }) {
  return (
    <div className={`mt-5 h-2.5 w-full overflow-hidden rounded-full ${ACCENT.track}`}>
      <div
        className={`h-full rounded-full ${ACCENT.fill} transition-all duration-500 motion-reduce:transition-none`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

// Sidebar / top scroll me ek subject ka button
function SubjectTab({ subject, done, isOpen, onClick }) {
  const count = countDone(subject, done);
  const pct = toPercent(count, subject.chapters.length);

  return (
    <button
      onClick={onClick}
      aria-pressed={isOpen}
      className={`w-40 flex-shrink-0 rounded-xl border bg-white p-3 text-left transition focus:outline-none focus-visible:ring-2 ${ACCENT.ring} motion-reduce:transition-none md:w-full ${
        isOpen ? `${ACCENT.active} shadow-sm` : `${ACCENT.border} hover:${ACCENT.active}`
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${subject.bar}`} />
          <span className={`text-sm font-semibold ${ACCENT.head}`}>{subject.name}</span>
        </span>
        <span className={`text-xs font-semibold tabular-nums ${ACCENT.faint}`}>{pct}%</span>
      </div>

      <div className={`mt-2.5 h-1 overflow-hidden rounded-full ${ACCENT.line}`}>
        <div
          className={`h-full rounded-full ${subject.bar} transition-all duration-500 motion-reduce:transition-none`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className={`mt-2 text-xs tabular-nums ${ACCENT.faint}`}>
        {count} / {subject.chapters.length} chapters
      </p>
    </button>
  );
}

// Ek chapter ki row. Done hone par highlighter jaisa colour aa jaata hai.
function ChapterRow({ chapter, number, subject, isDone, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={isDone}
      className={`flex w-full items-center gap-3 rounded-xl border border-l-4 p-3 text-left transition active:scale-95 focus:outline-none focus-visible:ring-2 ${ACCENT.ring} motion-reduce:transition-none motion-reduce:active:scale-100 ${
        isDone
          ? `${subject.soft} ${subject.edge} border-y-transparent border-r-transparent`
          : `bg-white ${ACCENT.border} hover:${ACCENT.active}`
      }`}
    >
      <span
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition motion-reduce:transition-none ${
          isDone
            ? `${subject.bar} border-transparent text-white`
            : `border-blue-200 text-transparent`
        }`}
      >
        ✓
      </span>

      <span className={`w-5 flex-shrink-0 text-xs font-semibold tabular-nums ${ACCENT.faint}`}>
        {number}
      </span>

      <span
        className={`text-sm leading-snug ${
          isDone ? `font-semibold ${subject.text}` : ACCENT.body
        }`}
      >
        {chapter.title}
      </span>
    </button>
  );
}

// Ek class ka poora block (heading + uske chapters)
function ClassGroup({ subject, cls, done, onToggle }) {
  const list = subject.chapters.filter((ch) => ch.cls === cls);
  const count = list.filter((ch) => done[ch.id]).length;

  return (
    <div className="mt-6 first:mt-0">
      <div className="mb-3 flex items-center gap-3">
        <p className={`text-xs font-semibold uppercase tracking-widest ${ACCENT.faint}`}>
          Class {cls}
        </p>
        <div className={`h-px flex-1 ${ACCENT.line}`} />
        <p className={`text-xs tabular-nums ${ACCENT.faint}`}>
          {count}/{list.length}
        </p>
      </div>

      <div className="space-y-2">
        {list.map((chapter, index) => (
          <ChapterRow
            key={chapter.id}
            chapter={chapter}
            number={index + 1}
            subject={subject}
            isDone={Boolean(done[chapter.id])}
            onToggle={() => onToggle(chapter.id)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---- STEP 5: Main component ----------------------------------------
   Sirf do state variables hain: done aur openId.
-------------------------------------------------------------------- */
export default function SyllabusTracker() {
  const [done, setDone] = useState({});
  const [openId, setOpenId] = useState("physics");

  // Page khulte hi purana progress load karo
  useEffect(() => {
    setDone(loadSavedProgress());
  }, []);

  // Chapter tap hone par: state update karo + save karo
  // Supabase me shift karna ho to sirf yeh function aur upar wala
  // useEffect badalna hai — neeche ka poora UI same rahega.
  function toggleChapter(chapterId) {
    const next = { ...done, [chapterId]: !done[chapterId] };
    setDone(next);
    saveProgress(next);
  }

  const { total, finished } = getTotals(done);
  const overallPct = toPercent(finished, total);

  const openSubject = SUBJECTS.find((s) => s.id === openId);
  const openDone = countDone(openSubject, done);
  const left = openSubject.chapters.length - openDone;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        {/* ---------- Header ---------- */}
        <div className={`rounded-2xl ${ACCENT.panel} p-5 sm:p-7`}>
          <p className={`text-xs font-semibold uppercase tracking-widest ${ACCENT.soft}`}>
            NEET 2027 · Syllabus Tracker
          </p>

          <div className="mt-4">
            <p className={`text-5xl font-bold leading-none tabular-nums ${ACCENT.head}`}>
              {overallPct}%
            </p>
            <p className={`mt-2 text-xs uppercase tracking-widest ${ACCENT.soft}`}>
              {finished} of {total} chapters done
            </p>
          </div>

          <OverallBar percent={overallPct} />

          <p className={`mt-4 text-sm ${ACCENT.body}`}>{getMilestone(overallPct)}</p>
        </div>

        {/* ---------- Subjects + chapters ---------- */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {/* Phone pe side-scroll, laptop pe left column */}
          <div className="flex gap-2 overflow-x-auto pb-1 md:col-span-1 md:flex-col md:overflow-visible md:pb-0">
            {SUBJECTS.map((subject) => (
              <SubjectTab
                key={subject.id}
                subject={subject}
                done={done}
                isOpen={subject.id === openId}
                onClick={() => setOpenId(subject.id)}
              />
            ))}
          </div>

          <div className={`rounded-2xl border bg-white ${ACCENT.border} p-4 sm:p-6 md:col-span-3`}>
            <div className={`flex items-baseline justify-between gap-3 border-b ${ACCENT.border} pb-4`}>
              <h2 className={`text-xl font-bold ${ACCENT.head}`}>{openSubject.name}</h2>
              <span className={`whitespace-nowrap text-sm font-semibold ${openSubject.text}`}>
                {left === 0 ? "Poora ho gaya 🎉" : `${left} chapters baaki`}
              </span>
            </div>

            <div className="mt-2">
              <ClassGroup subject={openSubject} cls={11} done={done} onToggle={toggleChapter} />
              <ClassGroup subject={openSubject} cls={12} done={done} onToggle={toggleChapter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
