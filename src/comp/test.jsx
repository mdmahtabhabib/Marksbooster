import React from "react";

const cardCls = "break-inside-avoid mb-3 rounded-xl bg-white border border-[oklch(0.91_0.008_260)] p-4 shadow-[0_1px_4px_#1e293b0f] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_#1e293b21]";
const h3Cls = "font-['Archivo'] text-[16px] font-bold text-[oklch(0.25_0.02_260)] m-0 border-b border-[oklch(0.93_0.008_260)] pb-[7px] mb-2";
const ulCls = "m-0 list-disc pl-[19px] space-y-1 text-[15px] leading-[1.5]";
const tableCls = "w-full border-collapse font-['Archivo'] text-[12px]";
const thCls = "border border-[oklch(0.8_0.02_260)] px-[7px] py-[6px] text-left font-bold";
const tdCls = "border border-[oklch(0.8_0.02_260)] px-[7px] py-[6px] align-top";
const boxCls = "font-['Archivo'] text-[13px] leading-[1.55] bg-[var(--tint)] rounded-lg px-[11px] py-[9px] mt-2.5";
const metaYear = "text-[13px] font-medium text-[var(--accent)] ml-1.5";
const metaDesc = "text-[13px] font-medium italic text-[oklch(0.5_0.01_260)] ml-1.5";
const primLbl = "[column-span:all] break-inside-avoid font-['Archivo'] text-[12px] font-bold tracking-[0.08em] uppercase text-[var(--accent)] mt-5 mb-2.5 mx-0.5 flex items-center gap-2";
const subLbl = "[column-span:all] break-inside-avoid font-['Archivo'] text-[11px] font-bold tracking-[0.06em] uppercase text-[oklch(0.5_0.01_260)] mt-4 mb-2 mx-0.5";
const html = s => ({ dangerouslySetInnerHTML: { __html: s } });
const h = React.createElement;

function Card({ item }) {
  const m = item.m;
  return h("div", { className: cardCls },
    h("h3", { className: h3Cls }, item.t, m && h("span", { className: m[1] === "year" ? metaYear : metaDesc }, m[0])),
    item.i && h("ul", { className: ulCls + " mb-2.5" }, item.i.map((b, j) => h("li", { key: j, ...html(b) }))),
    item.b && h("ul", { className: ulCls + (item.box ? " mb-2.5" : "") }, item.b.map((b, j) => h("li", { key: j, ...html(b) }))),
    item.tbl && h("table", { className: tableCls },
      h("thead", null, h("tr", { className: "bg-[var(--tint)]" }, item.tbl.h.map((c, j) => h("th", { key: j, className: thCls, ...html(c) })))),
      h("tbody", null, item.tbl.rows.map((r, ri) => h("tr", { key: ri }, r.map((c, ci) => h("td", { key: ci, className: tdCls, ...html(c) })))))),
    item.box && h("div", { className: boxCls, ...html(item.box) })
  );
}

function Section({ sec }) {
  return h(React.Fragment, null,
    sec.variant === "sub"
      ? h("div", { className: subLbl }, sec.label)
      : h("div", { className: primLbl }, h("span", { className: "inline-block w-[22px] h-[3px] rounded-sm bg-[var(--accent)]" }), sec.label),
    sec.items.map((it, j) => h(Card, { key: j, item: it }))
  );
}

const SECTIONS = [
  { label: "Introduction", items: [
    { t: "Origin of Life", b: [
      "Life is believed to have <b>originated in water</b>, possibly in small water pools such as <b>hot springs</b>.",
      "<i>Eg:</i> hot springs of <b>Puga Valley, Ladakh</b> — near boiling even in cold climate; like early Earth ~<b>3.5 billion years ago</b>.",
      "Home to <b>thermophiles</b> — heat-loving <b>unicellular</b> bacteria.",
      "<b>Birbal Sahni Institute</b> (Lucknow): calcium carbonate deposits protected early molecules &amp; may have formed the <b>first protective membrane</b> — the barrier that defines a cell.",
    ]},
    { t: "Cell", b: [
      "Basic <b>structural &amp; functional unit</b> of all living organisms.",
      "<b>Unicellular</b> = one cell (bacteria, yeast).",
      "<b>Multicellular</b> = many cells together (plants, humans).",
    ]},
    { t: "Levels of Organisation", b: [
      "Cells → tissues → organs → organ systems.",
      "<i>Eg:</i> nasal cavity, trachea &amp; lungs → respiratory system.",
      "Cell stays the fundamental unit throughout.",
    ]},
  ]},
  { label: "2.1 · How to Study Cells", items: [
    { t: "Limit of Resolution", b: [
      "Ability to see two close points as <b>separate &amp; distinct</b>.",
      "Human eye = <b>0.1 mm</b> (at near point, ~25 cm); cells are smaller → need microscopes.",
    ]},
    { t: "Magnification", b: [
      "Lens makes an object appear larger.",
      "<b>Total magnification = eyepiece × objective</b> (eg 10X × 10X = 100X).",
    ]},
    { t: "Robert Hooke", m: ["(1665)", "year"], b: [
      "First to observe cells.",
      "Saw box-like compartments in cork; named them <b>‘cells’</b>.",
    ]},
    { t: "Microscopes & Cell Size", b: [
      "<b>Light microscope:</b> uses visible light + objective lenses.",
      "<b>Electron microscope:</b> uses electron beam; detail at nanometre scale (1 nm = one-billionth of a metre).",
      "Cell size = field diameter ÷ number of cells across. <b>1 mm = 1000 μm.</b>",
      "3 key features improved: <b>resolution, contrast, magnification.</b>",
    ]},
  ]},
  { label: "2.2 · Structure of a Cell", items: [
    { t: "Cell Membrane (Plasma Membrane)", b: [
      "Thin outer boundary that <b>defines the cell's individuality</b>.",
      "<b>Selectively permeable</b> — allows some substances, blocks others.",
      "About <b>7–10 nm</b> thick; made of lipids + proteins.",
    ]},
    { t: "Diffusion & Osmosis", b: [
      "<b>Diffusion:</b> net movement of particles from higher → lower concentration. Occurs even without a membrane.",
      "<b>Osmosis:</b> diffusion of water across a selectively permeable membrane, dilute → concentrated side.",
      "<i>Eg:</i> plant roots absorb water from soil by osmosis.",
    ]},
    { t: "Cell in Different Solutions", tbl: { h: ["Solution", "Effect on cell"], rows: [
      ["<b>Isotonic</b><br><span class=\"text-[oklch(0.5_0.01_260)]\">solute = inside</span>", "No net change"],
      ["<b>Hypotonic</b><br><span class=\"text-[oklch(0.5_0.01_260)]\">solute &lt; inside</span>", "Water enters → cell <b>swells</b>"],
      ["<b>Hypertonic</b><br><span class=\"text-[oklch(0.5_0.01_260)]\">solute &gt; inside</span>", "Water leaves → cell <b>shrinks</b>"],
    ]}},
    { t: "Fluid-Mosaic Model", b: [
      "Explains membrane structure: a <b>lipid bilayer</b> (water-attracting heads out, water-repelling tails in) with embedded proteins.",
      "Molecules move sideways → <b>fluid</b>; arranged like tiles → <b>mosaic</b>.",
      "Proteins act as <b>gatekeepers</b>.",
    ]},
    { t: "Cell Wall", b: [
      "Rigid, <b>permeable</b> covering outside the membrane.",
      "Present in <b>plants, fungi, bacteria</b>; made of <b>cellulose</b>.",
      "Gives shape &amp; support; keeps plants upright.",
      "<i>Exception:</i> animal cells have <b>no</b> cell wall. Dietary cellulose = roughage.",
    ]},
  ]},
  { label: "2.3 · The Cell Interior", items: [
    { t: "Three Basic Parts", b: [
      "<b>Plasma membrane</b> — outer boundary.",
      "<b>Cytoplasm</b> — semi-fluid jelly-like substance holding organelles.",
      "<b>Nucleus</b> — prominent control body.",
    ]},
    { t: "Prokaryotic vs Eukaryotic",
      i: [
        "<b>Prokaryotic</b> = no true nucleus, no membrane-bound organelles (<i>pro</i> = primitive).",
        "<b>Eukaryotic</b> = true nucleus + membrane-bound organelles (<i>eu</i> = true).",
      ],
      tbl: { h: ["Feature", "Prokaryotic", "Eukaryotic"], rows: [
        ["Diameter", "1–10 μm", "10–100 μm"],
        ["True nucleus", "Absent", "Present"],
        ["Membrane-bound organelles", "Absent", "Present"],
        ["Cells", "Usually unicellular", "Uni/multicellular"],
      ]}},
    { t: "Cytoskeleton & Cell Inclusions", b: [
      "<b>Cytoskeleton:</b> network of fine fibres in eukaryotes; gives support, shape, movement &amp; internal transport.",
      "<b>Cell inclusions:</b> stored starch, or crystals of calcium oxalate / silica in some plant cells.",
    ]},
    { t: "Acellular Agents", b: [
      "No cells; infectious.",
      "<b>Viruses:</b> genetic material + protein coat.",
      "<b>Viroids:</b> genetic material, no protein coat.",
      "<b>Prions:</b> misfolded proteins, no genetic material.",
    ]},
  ]},
  { label: "Cell Organelles", variant: "sub", items: [
    { t: "Nucleus", m: ["— control centre", "desc"], b: [
      "Controls all cell activities.",
      "Double-layered <b>nuclear membrane</b> with pores.",
      "<b>Nucleolus</b> makes ribosomal subunits.",
      "Holds <b>chromosomes</b> (DNA + proteins); <b>genes</b> = functional DNA segments.",
      "<b>Chromatin:</b> in a non-dividing cell DNA is thread-like chromatin; before division it coils into rod-shaped <b>chromosomes</b>.",
      "<i>Prokaryotes:</i> DNA lies free in a region called <b>nucleoid</b>.",
      "<i>Eg:</i> mature <b>RBCs</b> lack a nucleus (enucleate) → more room for haemoglobin; live ~120 days.",
    ]},
    { t: "Ribosomes", m: ["— protein factories", "desc"], b: [
      "Tiny structures; free in cytoplasm or attached to ER.",
      "Site of <b>protein synthesis</b>.",
    ]},
    { t: "Endoplasmic Reticulum (ER)",
      i: ["Network of membranes; synthesises &amp; transports proteins, fats, some hormones."],
      tbl: { h: ["Rough ER (RER)", "Smooth ER (SER)"], rows: [
        ["Has ribosomes", "No ribosomes"],
        ["Protein synthesis &amp; secretion", "Fat &amp; hormone synthesis/storage"],
      ]}},
    { t: "Golgi Apparatus", m: ["— packaging centre", "desc"], b: [
      "Stacks of flattened sacs.",
      "Modifies, sorts &amp; packages proteins/lipids into vesicles for transport, secretion or lysosome formation.",
      "<i>Discovered by</i> <b>Camillo Golgi (1898)</b>.",
    ]},
    { t: "Lysosomes", m: ["— clean-up system", "desc"], b: [
      "Single membrane-bound sacs filled with enzymes.",
      "Break down waste, worn-out organelles, proteins, carbs &amp; fats.",
      "<i>Eg:</i> sperm lysosomal enzymes break the egg's outer layer during <b>fertilisation</b>.",
    ]},
    { t: "Mitochondria", m: ["— powerhouse", "desc"], b: [
      "Double-membraned; inner membrane folds into <b>cristae</b> (↑ surface area).",
      "Release energy from glucose via <b>cellular respiration</b>, stored as <b>ATP</b> (energy currency).",
      "Have their own DNA &amp; ribosomes → mitochondria &amp; plastids share an <b>evolutionary link with bacteria</b>.",
    ]},
    { t: "Plastids", m: ["— plant cells only", "desc"],
      i: ["Double-membraned; food synthesis &amp; storage; own DNA &amp; ribosomes."],
      tbl: { h: ["Type", "Role"], rows: [
        ["<b>Chloroplast</b>", "Green (chlorophyll); photosynthesis; has <b>stroma</b> inside."],
        ["<b>Chromoplast</b>", "Yellow/orange/red pigments; colour flowers &amp; fruits → <b>attract pollinators</b> (pollination) &amp; fruit-eaters (seed dispersal)."],
        ["<b>Leucoplast</b>", "Colourless; stores starch, oils, proteins. <i>Eg:</i> potato &amp; taro (Colocasia) store starch."],
      ]}},
    { t: "Vacuoles", m: ["— storage & support", "desc"], b: [
      "Plant cells: one <b>large central vacuole</b> with <b>cell sap</b>.",
      "Stores water, minerals, sugars, waste; keeps cell firm (water loss → wilting).",
      "Animal cells: small vacuoles, if present.",
    ]},
  ]},
  { label: "2.4 · Cell Growth & Division", items: [
    { t: "Cell Division", b: [
      "Forming new cells from <b>pre-existing cells</b>.",
      "Enables growth, repair &amp; reproduction.",
      "Two types: <b>mitosis</b> &amp; <b>meiosis</b>. Eukaryotes divide via the <b>cell cycle</b>.",
    ]},
    { t: "Mitosis vs Meiosis", tbl: { h: ["Mitosis", "Meiosis"], rows: [
      ["2 identical daughter cells", "4 daughter cells"],
      ["Same chromosome no.", "Half chromosome no."],
      ["Growth, repair, asexual reprod.", "Sexual reprod.; makes gametes"],
      ["All body cells", "Only reproductive cells"],
    ]}},
    { t: "Errors in Division", b: [
      "<b>Mitosis errors</b> → uncontrolled division → tumours, abnormal chromosome number.",
      "<b>Meiosis errors</b> → genetic disorders, reduced fertility, pregnancy loss.",
    ]},
    { t: "Arun Kumar Sharma", m: ["— Indian scientist", "year"], b: [
      "Famous for his work on <b>chromosomes</b>; a botanist known for plant taxonomy, evolution &amp; development.",
      "Invented many lab methods to study chromosomes in plants.",
      "Honours: <b>Shanti Swarup Bhatnagar</b> award &amp; <b>Padma Bhushan</b>.",
    ]},
    { t: "Cell Culture & Synthetic Cell", b: [
      "<b>Cell culture:</b> growing plant/animal cells outside the body in a nutrient-rich medium under sterile conditions (right temperature, pH, moisture).",
      "Used to study cells &amp; to produce biochemicals, food, medicines &amp; vaccines.",
      "<b>Synthetic cell (J. Craig Venter, 2010):</b> lab-made DNA inserted into a cell → it grew &amp; divided → showed <b>DNA controls a cell's structure &amp; activities</b>.",
    ]},
  ]},
  { label: "2.5 · Cell Theory", items: [
    { t: "Cell Theory",
      b: [
        "All living organisms are made of one or more cells.",
        "Cell is the basic unit of structure &amp; function.",
        "All cells arise from pre-existing cells.",
      ],
      box: "<b>Schleiden (1838)</b> — all plants are cells<br><b>Schwann (1839)</b> — all animals are cells<br><b>Virchow (1855)</b> — cells arise from pre-existing cells" },
    { t: "Contact Inhibition & Cancer", b: [
      "Every cell has a definite life span.",
      "<b>Contact inhibition:</b> animal cell division stops on touching neighbours.",
      "<b>Cancer cells</b> lose this control → divide uncontrollably → tumours (<b>benign</b> or <b>malignant</b>; malignant invade &amp; spread to other parts).",
      "Plant cells (rigid walls) show no contact inhibition.",
    ]},
    { t: "Programmed Cell Death (PCD)", b: [
      "Genetically regulated, organised destruction of selected cells.",
      "Essential for normal development.",
      "<i>Eg:</i> forms fingers by removing cells between digits (else webbed hands).",
    ]},
    { t: "Totipotency", m: ["— Haberlandt (1902)", "year"], b: [
      "Ability of any living plant cell to grow into a complete plant under suitable conditions.",
      "Basis of <b>Plant Tissue Culture</b>.",
    ]},
  ]},
];

function Test({ accent = "oklch(0.45 0.13 250)", tint = "oklch(0.95 0.02 155)" }) {
  return h("div", {
    className: "min-h-screen pb-10 font-['Newsreader'] text-[oklch(0.23_0.015_260)] bg-[oklch(0.955_0.008_255)]",
    style: { "--accent": accent, "--tint": tint },
  },
    h("div", { className: "max-w-[1080px] mx-auto" },
      h("header", {
        className: "font-['Archivo'] text-white px-[22px] pt-[22px] pb-5 sticky top-0 z-10",
        style: { background: "linear-gradient(180deg,oklch(1 0 0/0.10),oklch(0 0 0/0.07))," + accent, boxShadow: "0 2px 10px #1e293b26" },
      },
        h("div", { className: "text-[11px] tracking-[0.16em] uppercase font-bold opacity-85" }, "NCERT · Class 9 Science · Ch 2"),
        h("div", { className: "font-['Newsreader'] font-bold text-[26px] leading-[1.15] mt-[3px] -tracking-[0.01em]" }, "Cell: The Building Block of Life"),
        h("div", { className: "text-[12px] font-medium opacity-80 mt-[5px]" }, "Quick revision · point-wise notes")),
      h("div", { className: "pt-6 px-[22px] columns-[320px] gap-x-[30px] [column-rule:1px_solid_oklch(0.9_0.01_260)]" },
        SECTIONS.map((sec, i) => h(Section, { key: i, sec })),
        h("div", { className: "[column-span:all] text-center font-['Archivo'] text-[11px] text-[oklch(0.6_0.01_260)] pt-[22px] pb-1.5" }, "End of Chapter 2 · Cell notes"))));
}

export default Test;
