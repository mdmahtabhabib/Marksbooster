/*
  chapter02Cell  = the content.  PART 1 — later this comes from Supabase.
  ChapterNotes   = the renderer. PART 2 — knows nothing about any chapter.
  To split later: cut PART 1 into its own file and import it.

  Data shape:
  section = { label , variant?: "sub" , items }
  item    = { t: title,
              m: [text , "accent" | "muted"],
              i: intro bullets shown above a table,
              b: main bullets,
              tbl: { h: [headers] , rows: [[cells]] },
              box: highlighted note at the bottom }

  Only t is required. Text is plain — no HTML. It can hold four markers:

    **bold**    _italic_    %muted%    \n line break

  Nothing else is allowed, which is the point: this data is going into Supabase,
  and a row must never be able to inject HTML into the page. See RichText below.

  Styling is Tailwind. The design uses exact pixel values, so almost every class
  is an arbitrary value — text-[15px], columns-[320px] — instead of Tailwind's
  rem scale. That is on purpose: rem utilities move if the root font-size ever
  changes, px arbitrary values do not.

  The two fonts come from the <link> in index.html and are named in index.css
  under @theme, which is what gives us font-newsreader and font-archivo.
*/

/* ========================= PART 1 — CHAPTER DATA ========================= */

export const chapter02Cell = {
  kicker: "NCERT · Class 9 Science · Ch 2",
  title: "Cell: The Building Block of Life test",
  subtitle: "Quick revision · point-wise notes",
  footer: "End of Chapter 2 · Cell notes",

  sections: [
    { label: "Introduction", items: [
      { t: "Origin of Life", b: [
        "Life is believed to have **originated in water**, possibly in small water pools such as **hot springs**.",
        "_Eg:_ hot springs of **Puga Valley, Ladakh** — near boiling even in cold climate; like early Earth ~**3.5 billion years ago**.",
        "Home to **thermophiles** — heat-loving **unicellular** bacteria.",
        "**Birbal Sahni Institute** (Lucknow): calcium carbonate deposits protected early molecules & may have formed the **first protective membrane** — the barrier that defines a cell.",
      ]},
      { t: "Cell", b: [
        "Basic **structural & functional unit** of all living organisms.",
        "**Unicellular** = one cell (bacteria, yeast).",
        "**Multicellular** = many cells together (plants, humans).",
      ]},
      { t: "Levels of Organisation", b: [
        "Cells → tissues → organs → organ systems.",
        "_Eg:_ nasal cavity, trachea & lungs → respiratory system.",
        "Cell stays the fundamental unit throughout.",
      ]},
    ]},

    { label: "2.1 · How to Study Cells", items: [
      { t: "Limit of Resolution", b: [
        "Ability to see two close points as **separate & distinct**.",
        "Human eye = **0.1 mm** (at near point, ~25 cm); cells are smaller → need microscopes.",
      ]},
      { t: "Magnification", b: [
        "Lens makes an object appear larger.",
        "**Total magnification = eyepiece × objective** (eg 10X × 10X = 100X).",
      ]},
      { t: "Robert Hooke", m: ["(1665)", "accent"], b: [
        "First to observe cells.",
        "Saw box-like compartments in cork; named them **‘cells’**.",
      ]},
      { t: "Microscopes & Cell Size", b: [
        "**Light microscope:** uses visible light + objective lenses.",
        "**Electron microscope:** uses electron beam; detail at nanometre scale (1 nm = one-billionth of a metre).",
        "Cell size = field diameter ÷ number of cells across. **1 mm = 1000 μm.**",
        "3 key features improved: **resolution, contrast, magnification.**",
      ]},
    ]},

    { label: "2.2 · Structure of a Cell", items: [
      { t: "Cell Membrane (Plasma Membrane)", b: [
        "Thin outer boundary that **defines the cell's individuality**.",
        "**Selectively permeable** — allows some substances, blocks others.",
        "About **7–10 nm** thick; made of lipids + proteins.",
      ]},
      { t: "Diffusion & Osmosis", b: [
        "**Diffusion:** net movement of particles from higher → lower concentration. Occurs even without a membrane.",
        "**Osmosis:** diffusion of water across a selectively permeable membrane, dilute → concentrated side.",
        "_Eg:_ plant roots absorb water from soil by osmosis.",
      ]},
      { t: "Cell in Different Solutions", tbl: { h: ["Solution", "Effect on cell"], rows: [
        ["**Isotonic**\n%solute = inside%", "No net change"],
        ["**Hypotonic**\n%solute < inside%", "Water enters → cell **swells**"],
        ["**Hypertonic**\n%solute > inside%", "Water leaves → cell **shrinks**"],
      ]}},
      { t: "Fluid-Mosaic Model", b: [
        "Explains membrane structure: a **lipid bilayer** (water-attracting heads out, water-repelling tails in) with embedded proteins.",
        "Molecules move sideways → **fluid**; arranged like tiles → **mosaic**.",
        "Proteins act as **gatekeepers**.",
      ]},
      { t: "Cell Wall", b: [
        "Rigid, **permeable** covering outside the membrane.",
        "Present in **plants, fungi, bacteria**; made of **cellulose**.",
        "Gives shape & support; keeps plants upright.",
        "_Exception:_ animal cells have **no** cell wall. Dietary cellulose = roughage.",
      ]},
    ]},

    { label: "2.3 · The Cell Interior", items: [
      { t: "Three Basic Parts", b: [
        "**Plasma membrane** — outer boundary.",
        "**Cytoplasm** — semi-fluid jelly-like substance holding organelles.",
        "**Nucleus** — prominent control body.",
      ]},
      { t: "Prokaryotic vs Eukaryotic",
        i: [
          "**Prokaryotic** = no true nucleus, no membrane-bound organelles (_pro_ = primitive).",
          "**Eukaryotic** = true nucleus + membrane-bound organelles (_eu_ = true).",
        ],
        tbl: { h: ["Feature", "Prokaryotic", "Eukaryotic"], rows: [
          ["Diameter", "1–10 μm", "10–100 μm"],
          ["True nucleus", "Absent", "Present"],
          ["Membrane-bound organelles", "Absent", "Present"],
          ["Cells", "Usually unicellular", "Uni/multicellular"],
        ]}},
      { t: "Cytoskeleton & Cell Inclusions", b: [
        "**Cytoskeleton:** network of fine fibres in eukaryotes; gives support, shape, movement & internal transport.",
        "**Cell inclusions:** stored starch, or crystals of calcium oxalate / silica in some plant cells.",
      ]},
      { t: "Acellular Agents", b: [
        "No cells; infectious.",
        "**Viruses:** genetic material + protein coat.",
        "**Viroids:** genetic material, no protein coat.",
        "**Prions:** misfolded proteins, no genetic material.",
      ]},
    ]},

    { label: "Cell Organelles", variant: "sub", items: [
      { t: "Nucleus", m: ["— control centre", "muted"], b: [
        "Controls all cell activities.",
        "Double-layered **nuclear membrane** with pores.",
        "**Nucleolus** makes ribosomal subunits.",
        "Holds **chromosomes** (DNA + proteins); **genes** = functional DNA segments.",
        "**Chromatin:** in a non-dividing cell DNA is thread-like chromatin; before division it coils into rod-shaped **chromosomes**.",
        "_Prokaryotes:_ DNA lies free in a region called **nucleoid**.",
        "_Eg:_ mature **RBCs** lack a nucleus (enucleate) → more room for haemoglobin; live ~120 days.",
      ]},
      { t: "Ribosomes", m: ["— protein factories", "muted"], b: [
        "Tiny structures; free in cytoplasm or attached to ER.",
        "Site of **protein synthesis**.",
      ]},
      { t: "Endoplasmic Reticulum (ER)",
        i: ["Network of membranes; synthesises & transports proteins, fats, some hormones."],
        tbl: { h: ["Rough ER (RER)", "Smooth ER (SER)"], rows: [
          ["Has ribosomes", "No ribosomes"],
          ["Protein synthesis & secretion", "Fat & hormone synthesis/storage"],
        ]}},
      { t: "Golgi Apparatus", m: ["— packaging centre", "muted"], b: [
        "Stacks of flattened sacs.",
        "Modifies, sorts & packages proteins/lipids into vesicles for transport, secretion or lysosome formation.",
        "_Discovered by_ **Camillo Golgi (1898)**.",
      ]},
      { t: "Lysosomes", m: ["— clean-up system", "muted"], b: [
        "Single membrane-bound sacs filled with enzymes.",
        "Break down waste, worn-out organelles, proteins, carbs & fats.",
        "_Eg:_ sperm lysosomal enzymes break the egg's outer layer during **fertilisation**.",
      ]},
      { t: "Mitochondria", m: ["— powerhouse", "muted"], b: [
        "Double-membraned; inner membrane folds into **cristae** (↑ surface area).",
        "Release energy from glucose via **cellular respiration**, stored as **ATP** (energy currency).",
        "Have their own DNA & ribosomes → mitochondria & plastids share an **evolutionary link with bacteria**.",
      ]},
      { t: "Plastids", m: ["— plant cells only", "muted"],
        i: ["Double-membraned; food synthesis & storage; own DNA & ribosomes."],
        tbl: { h: ["Type", "Role"], rows: [
          ["**Chloroplast**", "Green (chlorophyll); photosynthesis; has **stroma** inside."],
          ["**Chromoplast**", "Yellow/orange/red pigments; colour flowers & fruits → **attract pollinators** (pollination) & fruit-eaters (seed dispersal)."],
          ["**Leucoplast**", "Colourless; stores starch, oils, proteins. _Eg:_ potato & taro (Colocasia) store starch."],
        ]}},
      { t: "Vacuoles", m: ["— storage & support", "muted"], b: [
        "Plant cells: one **large central vacuole** with **cell sap**.",
        "Stores water, minerals, sugars, waste; keeps cell firm (water loss → wilting).",
        "Animal cells: small vacuoles, if present.",
      ]},
    ]},

    { label: "2.4 · Cell Growth & Division", items: [
      { t: "Cell Division", b: [
        "Forming new cells from **pre-existing cells**.",
        "Enables growth, repair & reproduction.",
        "Two types: **mitosis** & **meiosis**. Eukaryotes divide via the **cell cycle**.",
      ]},
      { t: "Mitosis vs Meiosis", tbl: { h: ["Mitosis", "Meiosis"], rows: [
        ["2 identical daughter cells", "4 daughter cells"],
        ["Same chromosome no.", "Half chromosome no."],
        ["Growth, repair, asexual reprod.", "Sexual reprod.; makes gametes"],
        ["All body cells", "Only reproductive cells"],
      ]}},
      { t: "Errors in Division", b: [
        "**Mitosis errors** → uncontrolled division → tumours, abnormal chromosome number.",
        "**Meiosis errors** → genetic disorders, reduced fertility, pregnancy loss.",
      ]},
      { t: "Arun Kumar Sharma", m: ["— Indian scientist", "muted"], b: [
        "Famous for his work on **chromosomes**; a botanist known for plant taxonomy, evolution & development.",
        "Invented many lab methods to study chromosomes in plants.",
        "Honours: **Shanti Swarup Bhatnagar** award & **Padma Bhushan**.",
      ]},
      { t: "Cell Culture & Synthetic Cell", b: [
        "**Cell culture:** growing plant/animal cells outside the body in a nutrient-rich medium under sterile conditions (right temperature, pH, moisture).",
        "Used to study cells & to produce biochemicals, food, medicines & vaccines.",
        "**Synthetic cell (J. Craig Venter, 2010):** lab-made DNA inserted into a cell → it grew & divided → showed **DNA controls a cell's structure & activities**.",
      ]},
    ]},

    { label: "2.5 · Cell Theory", items: [
      { t: "Cell Theory",
        b: [
          "All living organisms are made of one or more cells.",
          "Cell is the basic unit of structure & function.",
          "All cells arise from pre-existing cells.",
        ],
        box: "**Schleiden (1838)** — all plants are cells\n**Schwann (1839)** — all animals are cells\n**Virchow (1855)** — cells arise from pre-existing cells" },
      { t: "Contact Inhibition & Cancer", b: [
        "Every cell has a definite life span.",
        "**Contact inhibition:** animal cell division stops on touching neighbours.",
        "**Cancer cells** lose this control → divide uncontrollably → tumours (**benign** or **malignant**; malignant invade & spread to other parts).",
        "Plant cells (rigid walls) show no contact inhibition.",
      ]},
      { t: "Programmed Cell Death (PCD)", b: [
        "Genetically regulated, organised destruction of selected cells.",
        "Essential for normal development.",
        "_Eg:_ forms fingers by removing cells between digits (else webbed hands).",
      ]},
      { t: "Totipotency", m: ["— Haberlandt (1902)", "accent"], b: [
        "Ability of any living plant cell to grow into a complete plant under suitable conditions.",
        "Basis of **Plant Tissue Culture**.",
      ]},
    ]},
  ],
};

/* ========================= PART 2 — RENDERER ========================= */

/* The only two class strings used on more than one element. Everything else
   sits inline on the element it styles. */
const ulBase = "pl-[19px] list-disc text-[15px] leading-[1.5] [&_li+li]:mt-[4px]";
const cellBase = "px-[7px] py-[6px] border border-[oklch(0.8_0.02_260)] align-top";

/* Turns our small markup into React elements.

     **bold**    _italic_    %muted%    \n = line break

   The only tags this can ever produce are the four written below, so content
   coming from the database can never inject HTML of its own — there is no
   dangerouslySetInnerHTML anywhere in this file.

   The trick is split() with a CAPTURING group: the parentheses make JS keep
   the separators in the result, so we get alternating plain / marked chunks
   and only have to look at each chunk's first character.

     "a **b** c".split(/(\*\*[^*]+\*\*)/)  ->  ["a ", "**b**", " c"]

   No nesting is supported and none is needed — an unclosed ** simply stays
   as literal text instead of breaking the page. */
const MARKUP = /(\*\*[^*]+\*\*|_[^_]+_|%[^%]+%|\n)/;

function RichText({ text }){
    return text.split(MARKUP).map((part , i) => {
        if (part === "\n")         return <br key={i} />;
        if (part.startsWith("**")) return <strong key={i} >{part.slice(2 , -2)}</strong>;
        if (part.startsWith("_"))  return <em key={i} >{part.slice(1 , -1)}</em>;
        if (part.startsWith("%"))  return <span key={i} className="text-[color:oklch(0.5_0.01_260)]" >{part.slice(1 , -1)}</span>;
        return part;
    });
}

function Card({ item }){
    return(
        <div className="break-inside-avoid mb-[12px] p-[16px] bg-white border border-[oklch(0.91_0.008_260)] rounded-[12px] shadow-[0_1px_4px_#1e293b0f] transition-[transform,box-shadow] duration-200 ease-[ease] hover:[transform:translateY(-2px)] hover:shadow-[0_8px_22px_#1e293b21]" >
            <h3 className="mb-[8px] pb-[7px] border-b border-b-[oklch(0.93_0.008_260)] font-archivo text-[16px] font-bold text-[color:oklch(0.25_0.02_260)]" >
                {item.t}
                {item.m && (
                    <span className={item.m[1] === "accent"
                        ? "ml-[6px] text-[13px] font-medium text-[color:var(--accent)]"
                        : "ml-[6px] text-[13px] font-medium italic text-[color:oklch(0.5_0.01_260)]"} >{item.m[0]}</span>
                )}
            </h3>

            {/* intro bullets — only used above a table */}
            {item.i && (
                <ul className={`${ulBase} mb-[10px]`} >
                    {item.i.map((text , j) => <li key={j} ><RichText text={text} /></li>)}
                </ul>
            )}

            {/* main bullets — need bottom margin only if a table or box follows */}
            {item.b && (
                <ul className={item.tbl || item.box ? `${ulBase} mb-[10px]` : ulBase} >
                    {item.b.map((text , j) => <li key={j} ><RichText text={text} /></li>)}
                </ul>
            )}

            {item.tbl && (
                <table className="w-full border-collapse font-archivo text-[12px]" >
                    <thead>
                        <tr>
                            {item.tbl.h.map((cell , j) => (
                                <th key={j} className={`${cellBase} bg-[var(--tint)] text-left font-bold`} ><RichText text={cell} /></th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {item.tbl.rows.map((row , ri) => (
                            <tr key={ri} >
                                {row.map((cell , ci) => <td key={ci} className={cellBase} ><RichText text={cell} /></td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {item.box && (
                <div className="mt-[10px] px-[11px] py-[9px] bg-[var(--tint)] rounded-[8px] font-archivo text-[13px] leading-[1.55]" ><RichText text={item.box} /></div>
            )}
        </div>
    );
}

function Section({ sec }){
    return(
        <>
            {sec.variant === "sub"
                ? <div className="[column-span:all] break-inside-avoid font-archivo font-bold uppercase mt-[16px] mx-[2px] mb-[8px] text-[11px] tracking-[0.06em] text-[color:oklch(0.5_0.01_260)]" >{sec.label}</div>
                : <div className="[column-span:all] break-inside-avoid font-archivo font-bold uppercase flex items-center gap-[8px] mt-[20px] mx-[2px] mb-[10px] text-[12px] tracking-[0.08em] text-[color:var(--accent)]" >
                      <span className="inline-block w-[22px] h-[3px] rounded-[2px] bg-[var(--accent)]" ></span>{sec.label}
                  </div>}

            {sec.items.map((item , j) => <Card key={j} item={item} />)}
        </>
    );
}

/*
  <ChapterNotes chapter={chapter02Cell} />
  <ChapterNotes chapter={chapter03Tissues} accent="oklch(0.45 0.13 20)" />
*/
export function ChapterNotes({ chapter , accent = "oklch(0.45 0.13 250)" , tint = "oklch(0.95 0.02 155)" }){
    if(!chapter) return null;   // nothing to draw yet — matters once data is fetched

    return(
        <div className="min-h-screen pb-[40px] bg-[oklch(0.955_0.008_255)] text-[color:oklch(0.23_0.015_260)] font-newsreader"
             style={{ "--accent": accent , "--tint": tint }} >

            <div className="max-w-[1080px] mx-auto" >
                <header className="sticky top-0 z-10 px-[22px] pt-[22px] pb-[20px] text-white font-archivo shadow-[0_2px_10px_#1e293b26]"
                        style={{ background: `linear-gradient(180deg,oklch(1 0 0/0.10),oklch(0 0 0/0.07)),${accent}` }} >
                    {chapter.kicker && <div className="text-[11px] font-bold tracking-[0.16em] uppercase opacity-[0.85]" >{chapter.kicker}</div>}
                    <div className="mt-[3px] font-newsreader text-[26px] font-bold leading-[1.15] tracking-[-0.01em]" >{chapter.title}</div>
                    {chapter.subtitle && <div className="mt-[5px] text-[12px] font-medium opacity-[0.8]" >{chapter.subtitle}</div>}
                </header>

                {/* the masonry flow: browser fits as many 320px columns as it can */}
                <div className="px-[22px] pt-[24px] columns-[320px] gap-x-[30px] [column-rule:1px_solid_oklch(0.9_0.01_260)]" >
                    {chapter.sections.map((sec , i) => <Section key={i} sec={sec} />)}
                    {chapter.footer && (
                        <div className="[column-span:all] pt-[22px] pb-[6px] text-center font-archivo text-[11px] text-[color:oklch(0.6_0.01_260)]" >{chapter.footer}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ========================= PART 3 — WIRING ========================= */

function Chapter02Page(){
    return <ChapterNotes chapter={chapter02Cell} />;
}
export default Chapter02Page;
