const PlantGD = [
  // ─── GROWTH BASICS & MEASUREMENT ────────────────────────────────────────────
  {
    id: 1,
    question: "Define growth.",
    answer: "An irreversible permanent increase in size of an organ, part, or cell." /* */
  },
  {
    id: 2,
    question: "What unique growth feature do plants exhibit?",
    answer: "Indeterminate (unlimited) growth throughout life due to the presence of meristems." /* */
  },
  {
    id: 3,
    question: "What is open growth in plants?",
    answer: "New cells are constantly being added to the plant body by meristematic activity." /* */
  },
  {
    id: 4,
    question: "Name the five parameters used to measure growth.",
    answer: "Fresh weight, dry weight, length, area, volume, and cell number." /* */
  },
  {
    id: 5,
    question: "Which parameter measures growth in a maize root apical meristem?",
    answer: "Increase in cell number (>17,500 new cells per hour)." /* */
  },
  {
    id: 6,
    question: "Which parameter measures growth in a watermelon?",
    answer: "Increase in cell size (up to 3,50,000 times)." /* */
  },
  {
    id: 7,
    question: "Which parameter measures growth in a pollen tube?",
    answer: "Length." /* */
  },
  {
    id: 8,
    question: "Which parameter measures growth in a dorsiventral leaf?",
    answer: "Increase in surface area." /* */
  },

  // ─── PHASES OF GROWTH ───────────────────────────────────────────────────────
  {
    id: 9,
    question: "What are the three phases of growth?",
    answer: "Meristematic, elongation, and maturation." /* */
  },
  {
    id: 10,
    question: "What are the cellular characteristics of the meristematic phase?",
    answer: "Rich protoplasm, large nuclei, primary cellulosic walls, and abundant plasmodesmata." /* */
  },
  {
    id: 11,
    question: "What are the cellular characteristics of the elongation phase?",
    answer: "Increased vacuolation, cell enlargement, and new cell wall deposition." /* */
  },
  {
    id: 12,
    question: "What are the cellular characteristics of the maturation phase?",
    answer: "Maximal size, maximal wall thickening, and protoplasmic modifications." /* */
  },

  // ─── GROWTH RATES ───────────────────────────────────────────────────────────
  {
    id: 13,
    question: "What happens to daughter cells in arithmetic growth?",
    answer: "One continues to divide, the other differentiates and matures." /* */
  },
  {
    id: 14,
    question: "What type of curve represents arithmetic growth?",
    answer: "A linear curve." /* */
  },
  {
    id: 15,
    question: "What is the mathematical expression for arithmetic growth?",
    answer: "$L_t = L_0 + rt$" /* */
  },
  {
    id: 16,
    question: "What happens to daughter cells in geometric growth?",
    answer: "Both progeny cells retain the ability to divide." /* */
  },
  {
    id: 17,
    question: "What are the three phases of a sigmoid (geometric) growth curve?",
    answer: "Lag phase, exponential (log) phase, and stationary phase." /* */
  },
  {
    id: 18,
    question: "What is the mathematical expression for exponential (geometric) growth?",
    answer: "$W_1 = W_0 e^{rt}$" /* */
  },
  {
    id: 19,
    question: "What does 'r' represent in the geometric growth equation?",
    answer: "Relative growth rate (efficiency index)." /* */
  },
  {
    id: 20,
    question: "Define absolute growth rate.",
    answer: "Measurement and comparison of total growth per unit time." /* */
  },
  {
    id: 21,
    question: "Define relative growth rate.",
    answer: "Growth per unit time expressed on a common initial parameter." /* */
  },
  {
    id: 22,
    question: "In the NCERT example, why does leaf A have a higher relative growth rate than leaf B?",
    answer: "Because it has a smaller initial area, making its growth relative to initial size much higher." /* */
  },

  // ─── CONDITIONS FOR GROWTH ──────────────────────────────────────────────────
  {
    id: 23,
    question: "List the essential external and internal factors required for plant growth.",
    answer: "Water, oxygen, nutrients, optimum temperature, light, and gravity." /* */
  },
  {
    id: 24,
    question: "What are the two specific roles of water in plant growth?",
    answer: "Maintains cell turgidity (extension growth) and provides a medium for enzymatic activities." /* */
  },
  {
    id: 25,
    question: "What is the specific role of oxygen in plant growth?",
    answer: "Helps in releasing metabolic energy essential for growth activities." /* */
  },

  // ─── DIFFERENTIATION & DEVELOPMENT ──────────────────────────────────────────
  {
    id: 26,
    question: "Define differentiation.",
    answer: "The process where meristematic cells mature to perform specific functions." /* */
  },
  {
    id: 27,
    question: "Give an anatomical example of differentiation.",
    answer: "Tracheary elements losing protoplasm and developing strong, elastic lignocellulosic secondary walls." /* */
  },
  {
    id: 28,
    question: "Define dedifferentiation.",
    answer: "Living differentiated cells that lost the capacity to divide regain the ability of division." /* */
  },
  {
    id: 29,
    question: "Give two NCERT examples of dedifferentiated tissues.",
    answer: "Interfascicular cambium and cork cambium." /* */
  },
  {
    id: 30,
    question: "Define redifferentiation.",
    answer: "Dedifferentiated cells lose division capacity again and mature to perform specific functions." /* */
  },
  {
    id: 31,
    question: "What is open differentiation?",
    answer: "The final structure of a mature cell depends on its location within the plant." /* */
  },
  {
    id: 32,
    question: "Define development in plants.",
    answer: "Considered as the sum of growth and differentiation." /* */
  },
  {
    id: 33,
    question: "Define plasticity.",
    answer: "Plants following different developmental pathways in response to environment or phases of life." /* */
  },
  {
    id: 34,
    question: "Which three plants exhibit heterophylly due to different life phases (juvenile vs adult)?",
    answer: "Cotton, coriander, and larkspur." /* */
  },
  {
    id: 35,
    question: "Which plant exhibits heterophylly due to the environment (air vs water)?",
    answer: "Buttercup." /* */
  },
  {
    id: 36,
    question: "Which broad groups of factors control plant development?",
    answer: "Intrinsic (intracellular/genetic, intercellular/PGRs) and extrinsic (light, temperature, water, oxygen, nutrition) factors." /* */
  },

  // ─── PGR BASICS & DISCOVERY ─────────────────────────────────────────────────
  {
    id: 37,
    question: "What are Plant Growth Regulators (PGRs)?",
    answer: "Small, simple molecules of diverse chemical composition that control plant growth and development." /* */
  },
  {
    id: 38,
    question: "What other terms describe PGRs?",
    answer: "Plant growth substances, plant hormones, and phytohormones." /* */
  },
  {
    id: 39,
    question: "How do PGRs generally reach their sites of action?",
    answer: "Synthesized at one site and reach target sites via diffusion." /* */
  },
  {
    id: 40,
    question: "Group the five PGRs into promoters and inhibitors.",
    answer: "Promoters: Auxins, Gibberellins, Cytokinins. Inhibitor: ABA. Ethylene fits both but is largely an inhibitor." /* */
  },
  {
    id: 41,
    question: "State the chemical composition of auxins and cytokinins.",
    answer: "Auxins: Indole compounds. Cytokinins: Adenine derivatives." /* */
  },
  {
    id: 42,
    question: "State the chemical composition of ABA, gibberellins, and ethylene.",
    answer: "ABA: Carotenoid derivatives. Gibberellins: Terpenes. Ethylene: Gas." /* */
  },
  {
    id: 43,
    question: "Who discovered phototropism in canary grass coleoptiles, hinting at auxins?",
    answer: "Charles Darwin and his son Francis Darwin." /* */
  },
  {
    id: 44,
    question: "Who isolated auxin, and from where?",
    answer: "F.W. Went from tips of oat seedling coleoptiles." /* */
  },
  {
    id: 45,
    question: "Who discovered the cause of 'bakanae' (foolish seedling) disease in rice?",
    answer: "E. Kurosawa (1926)." /* */
  },
  {
    id: 46,
    question: "Which fungus caused 'bakanae' disease, leading to gibberellin discovery?",
    answer: "Gibberella fujikuroi." /* */
  },
  {
    id: 47,
    question: "What did Skoog and co-workers observe regarding tobacco callus?",
    answer: "It proliferated only if auxin was supplemented with vascular/yeast/DNA/coconut extracts." /* */
  },
  {
    id: 48,
    question: "Who isolated and crystallised kinetin?",
    answer: "Miller et al. (1955)." /* */
  },
  {
    id: 49,
    question: "From what specific source was kinetin discovered?",
    answer: "Autoclaved herring sperm DNA." /* */
  },
  {
    id: 50,
    question: "Which three identical inhibitors led to the discovery of ABA?",
    answer: "Inhibitor-B, abscission II, and dormin." /* */
  },
  {
    id: 51,
    question: "Who confirmed that a volatile substance from oranges ripened bananas?",
    answer: "H.H. Cousins (1910)." /* */
  },

  // ─── AUXINS ─────────────────────────────────────────────────────────────────
  {
    id: 52,
    question: "What does the term 'auxin' mean, and from where was it first isolated?",
    answer: "From Greek 'auxein' (to grow). First isolated from human urine." /* */
  },
  {
    id: 53,
    question: "Name the two natural and two synthetic auxins listed in NCERT.",
    answer: "Natural: IAA, IBA. Synthetic: NAA, 2,4-D." /* */
  },
  {
    id: 54,
    question: "Which PGR is widely used to initiate rooting in stem cuttings?",
    answer: "Auxins." /* */
  },
  {
    id: 55,
    question: "Which PGR promotes flowering in pineapples?",
    answer: "Auxins." /* */
  },
  {
    id: 56,
    question: "How do auxins affect abscission of leaves and fruits?",
    answer: "Prevent abscission of young ones; promote abscission of older, mature ones." /* */
  },
  {
    id: 57,
    question: "What is apical dominance?",
    answer: "Growing apical bud inhibits the growth of lateral (axillary) buds." /* */
  },
  {
    id: 58,
    question: "How is apical dominance overcome in tea plantations and hedge-making?",
    answer: "By decapitation (removal of shoot tips)." /* */
  },
  {
    id: 59,
    question: "Which PGR induces parthenocarpy in tomatoes?",
    answer: "Auxins." /* */
  },
  {
    id: 60,
    question: "Which auxin is used as a weedicide to kill dicotyledonous weeds?",
    answer: "2,4-D (does not affect mature monocots)." /* */
  },
  {
    id: 61,
    question: "What are two specific cellular functions of auxins?",
    answer: "Controls xylem differentiation and helps in cell division." /* */
  },

  // ─── GIBBERELLINS ───────────────────────────────────────────────────────────
  {
    id: 62,
    question: "How many gibberellins are known, and how are they designated?",
    answer: "More than 100. Designated as $GA_1$, $GA_2$, $GA_3$, etc." /* */
  },
  {
    id: 63,
    question: "What is the common chemical nature of all gibberellins?",
    answer: "They are all acidic." /* */
  },
  {
    id: 64,
    question: "Which PGR is used to increase the length of grape stalks and improve apple shape?",
    answer: "Gibberellins." /* */
  },
  {
    id: 65,
    question: "How do gibberellins help extend the market period of fruits?",
    answer: "By delaying senescence, allowing fruits to stay on the tree longer." /* */
  },
  {
    id: 66,
    question: "Which PGR speeds up the malting process in the brewing industry?",
    answer: "Gibberellic acid ($GA_3$)." /* */
  },
  {
    id: 67,
    question: "How much can gibberellins increase sugarcane yield per acre?",
    answer: "By as much as 20 tonnes per acre." /* */
  },
  {
    id: 68,
    question: "What is the effect of spraying juvenile conifers with GAs?",
    answer: "Hastens the maturity period, leading to early seed production." /* */
  },
  {
    id: 69,
    question: "What is bolting, and which PGR promotes it?",
    answer: "Internode elongation just prior to flowering. Promoted by gibberellins." /* */
  },
  {
    id: 70,
    question: "Name three plants where gibberellins promote bolting.",
    answer: "Beet, cabbages, and many plants with a rosette habit." /* */
  },

  // ─── CYTOKININS ─────────────────────────────────────────────────────────────
  {
    id: 71,
    question: "Does kinetin occur naturally in plants?",
    answer: "No, it does not occur naturally in plants." /* */
  },
  {
    id: 72,
    question: "What are the natural sources from which zeatin was isolated?",
    answer: "Corn-kernels and coconut milk." /* */
  },
  {
    id: 73,
    question: "In which specific plant regions are natural cytokinins synthesized?",
    answer: "Regions of rapid cell division (root apices, developing shoot buds, young fruits)." /* */
  },
  {
    id: 74,
    question: "Which PGR helps produce new leaves, chloroplasts, and lateral/adventitious shoots?",
    answer: "Cytokinins." /* */
  },
  {
    id: 75,
    question: "Which PGR specifically helps overcome apical dominance?",
    answer: "Cytokinins." /* */
  },
  {
    id: 76,
    question: "How do cytokinins help delay leaf senescence?",
    answer: "By promoting nutrient mobilization." /* */
  },

  // ─── ETHYLENE ───────────────────────────────────────────────────────────────
  {
    id: 77,
    question: "Which tissues synthesize large amounts of ethylene?",
    answer: "Tissues undergoing senescence and ripening fruits." /* */
  },
  {
    id: 78,
    question: "What is the respiratory climactic?",
    answer: "The rise in the rate of respiration during fruit ripening, induced by ethylene." /* */
  },
  {
    id: 79,
    question: "What three specific influences does ethylene have on dicot seedlings?",
    answer: "Horizontal growth, swelling of the axis, and apical hook formation." /* */
  },
  {
    id: 80,
    question: "Which PGR is highly effective in promoting senescence and abscission of leaves and flowers?",
    answer: "Ethylene." /* */
  },
  {
    id: 81,
    question: "Which PGR breaks seed and bud dormancy (e.g., peanut seeds, potato tubers)?",
    answer: "Ethylene." /* */
  },
  {
    id: 82,
    question: "What is the function of ethylene in deep-water rice plants?",
    answer: "Promotes rapid internode/petiole elongation to keep upper parts above water." /* */
  },
  {
    id: 83,
    question: "Which PGR promotes root growth and root hair formation to increase absorption?",
    answer: "Ethylene." /* */
  },
  {
    id: 84,
    question: "Which PGR is used to synchronize fruit-set in pineapples and induce flowering in mangoes?",
    answer: "Ethylene." /* */
  },
  {
    id: 85,
    question: "What is ethephon?",
    answer: "The most widely used aqueous, slow-releasing source of ethylene in agriculture." /* */
  },
  {
    id: 86,
    question: "How does ethephon affect tomatoes, apples, cotton, cherry, and walnut?",
    answer: "Hastens ripening in tomatoes/apples; accelerates flower/fruit abscission in cotton/cherry/walnut." /* */
  },
  {
    id: 87,
    question: "How does ethephon increase the yield of cucumbers?",
    answer: "By promoting female flowers." /* */
  },

  // ─── ABSCISIC ACID (ABA) ────────────────────────────────────────────────────
  {
    id: 88,
    question: "What are the primary functions of Abscisic acid (ABA)?",
    answer: "Acts as a general plant growth inhibitor and an inhibitor of plant metabolism." /* */
  },
  {
    id: 89,
    question: "How does ABA affect seeds?",
    answer: "Inhibits germination, plays an important role in seed development, maturation, and dormancy." /* */
  },
  {
    id: 90,
    question: "Why is ABA called the stress hormone?",
    answer: "It stimulates stomatal closure and increases tolerance to various kinds of stresses." /* */
  },
  {
    id: 91,
    question: "How does ABA-induced dormancy help seeds?",
    answer: "Helps seeds withstand desiccation and other factors unfavorable for growth." /* */
  },
  {
    id: 92,
    question: "Which PGR acts as a direct antagonist to gibberellins (GAs) in most situations?",
    answer: "Abscisic acid (ABA)." /* */
  }
];

export default PlantGD;