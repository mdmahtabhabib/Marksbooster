const Excretoryproduct = [
  // ─── MODES OF EXCRETION ──────────────────────────────────────────────────────
  {
    id: 1,
    question: "List three examples of ammonotelic animals.",
    answer: "Many bony fishes, aquatic amphibians, and aquatic insects." 
  },
  {
    id: 2,
    question: "List three examples of ureotelic animals.",
    answer: "Mammals, many terrestrial amphibians, and marine fishes." 
  },
  {
    id: 3,
    question: "List four examples of uricotelic animals.",
    answer: "Reptiles, birds, land snails, and insects." 
  },
  {
    id: 4,
    question: "Rank ammonia, urea, and uric acid by toxicity and water required for elimination.",
    answer: "Ammonia (most toxic/most water) > Urea > Uric acid (least toxic/least water)." 
  },

  // ─── EXCRETORY ORGANS IN ANIMALS ─────────────────────────────────────────────
  {
    id: 5,
    question: "Which animals possess protonephridia (flame cells)?",
    answer: "Platyhelminthes (Flatworms), rotifers, some annelids, and the cephalochordate Amphioxus." 
  },
  {
    id: 6,
    question: "What is the primary function of protonephridia?",
    answer: "Osmoregulation (ionic and fluid volume regulation)." 
  },
  {
    id: 7,
    question: "Which animals possess nephridia?",
    answer: "Earthworms and other annelids." 
  },
  {
    id: 8,
    question: "Which animals use Malpighian tubules for excretion?",
    answer: "Most of the insects, including cockroaches." 
  },
  {
    id: 9,
    question: "Which animals possess antennal glands or green glands?",
    answer: "Crustaceans like prawns." 
  },

  // ─── HUMAN EXCRETORY SYSTEM ANATOMY ──────────────────────────────────────────
  {
    id: 10,
    question: "What are the four components of the human excretory system?",
    answer: "A pair of kidneys, one pair of ureters, a urinary bladder, and a urethra." 
  },
  {
    id: 11,
    question: "Which kidney is situated slightly lower?",
    answer: "The right kidney is positioned slightly lower than the left." 
  },
  {
    id: 12,
    question: "What are the exact dimensions of an adult human kidney?",
    answer: "10-12 cm length, 5-7 cm width, 2-3 cm thickness." 
  },
  {
    id: 13,
    question: "What is the average weight of an adult human kidney?",
    answer: "120-170 grams." 
  },
  {
    id: 14,
    question: "What is the specific anatomical location of the kidneys?",
    answer: "Between the levels of the last thoracic and third lumbar vertebra." 
  },
  {
    id: 15,
    question: "How is the kidney tissue internally differentiated?",
    answer: "Into an outer cortex and an inner medulla." 
  },
  {
    id: 16,
    question: "Define the hilum of the kidney.",
    answer: "A notch on the inner concave surface through which the ureter, blood vessels, and nerves enter." 
  },
  {
    id: 17,
    question: "What are the renal pelvis and calyces?",
    answer: "The broad funnel-shaped space inner to the hilum, containing projections called calyces." 
  },
  {
    id: 18,
    question: "What are renal (medullary) pyramids?",
    answer: "Cone-shaped masses of medullary tissue projecting into the calyces." 
  },
  {
    id: 19,
    question: "What are the Columns of Bertin?",
    answer: "Extensions of the renal cortex located between the medullary pyramids." 
  },

  // ─── NEPHRON STRUCTURE ───────────────────────────────────────────────────────
  {
    id: 20,
    question: "Approximately how many nephrons are present in each human kidney?",
    answer: "About one million complex tubular structures." 
  },
  {
    id: 21,
    question: "What are the two major parts of a nephron?",
    answer: "The glomerulus and the renal tubule." 
  },
  {
    id: 22,
    question: "What constitutes the Malpighian body (renal corpuscle)?",
    answer: "The glomerulus enclosed by the Bowman's capsule." 
  },
  {
    id: 23,
    question: "State the sequence of parts in the renal tubule.",
    answer: "Bowman's capsule -> Proximal Convoluted Tubule (PCT) -> Henle's loop -> Distal Convoluted Tubule (DCT)." 
  },
  {
    id: 24,
    question: "What is the vasa recta?",
    answer: "A minute U-shaped vessel of the peritubular capillary network running parallel to Henle's loop." 
  },
  {
    id: 25,
    question: "Contrast Cortical and Juxtamedullary nephrons based on their loop of Henle.",
    answer: "Cortical: short loop extending very little into medulla. Juxtamedullary: very long loop running deep into medulla." 
  },
  {
    id: 26,
    question: "What is the status of the vasa recta in cortical nephrons?",
    answer: "It is either absent or highly reduced." 
  },
  {
    id: 27,
    question: "Which parts of the nephron are situated strictly in the cortical region?",
    answer: "Malpighian corpuscle, PCT, and DCT." 
  },

  // ─── URINE FORMATION: GLOMERULAR FILTRATION ──────────────────────────────────
  {
    id: 28,
    question: "What are the three main processes involved in urine formation?",
    answer: "Glomerular filtration, reabsorption, and secretion." 
  },
  {
    id: 29,
    question: "How much blood is filtered by the kidneys per minute?",
    answer: "1100-1200 ml (roughly 1/5th of the cardiac output)." 
  },
  {
    id: 30,
    question: "What are the three layers comprising the glomerular filtration membrane?",
    answer: "Endothelium of glomerular blood vessels, epithelium of Bowman's capsule, and the basement membrane between them." 
  },
  {
    id: 31,
    question: "What are podocytes and filtration slits?",
    answer: "Podocytes are Bowman's epithelial cells arranged intricately to leave minute spaces called filtration slits (slit pores)." 
  },
  {
    id: 32,
    question: "State the average Glomerular Filtration Rate (GFR) in a healthy individual.",
    answer: "125 ml/minute or 180 litres per day." 
  },
  {
    id: 33,
    question: "How is the Juxtaglomerular Apparatus (JGA) formed?",
    answer: "By cellular modifications in the DCT and the afferent arteriole at their location of contact." 
  },

  // ─── URINE FORMATION: REABSORPTION & SECRETION ───────────────────────────────
  {
    id: 34,
    question: "What percentage of the glomerular filtrate is reabsorbed by the renal tubules?",
    answer: "Nearly 99 per cent." 
  },
  {
    id: 35,
    question: "Which specific substances are reabsorbed actively in the tubules?",
    answer: "Glucose, amino acids, and Na+." 
  },
  {
    id: 36,
    question: "Which substances are passively reabsorbed in the tubules?",
    answer: "Nitrogenous wastes and water (in initial segments)." 
  },
  {
    id: 37,
    question: "Which specific ions undergo tubular secretion to maintain acid-base balance?",
    answer: "H+, K+, and ammonia." 
  },

  // ─── FUNCTIONS OF THE TUBULES ────────────────────────────────────────────────
  {
    id: 38,
    question: "What epithelium lines the PCT and what is its purpose?",
    answer: "Simple cuboidal brush border epithelium; it increases the surface area for reabsorption." 
  },
  {
    id: 39,
    question: "What specific substances are heavily reabsorbed in the PCT?",
    answer: "70-80% of electrolytes and water, and all essential nutrients." 
  },
  {
    id: 40,
    question: "What specific ions does the PCT secrete to maintain pH and ionic balance?",
    answer: "Hydrogen ions (H+), ammonia (NH3), and potassium ions (K+)." 
  },
  {
    id: 41,
    question: "Contrast the permeability of the descending and ascending limbs of Henle's loop.",
    answer: "Descending: permeable to water, almost impermeable to electrolytes. Ascending: impermeable to water, permeable to electrolytes." 
  },
  {
    id: 42,
    question: "What is the primary specific function of the DCT?",
    answer: "Conditional reabsorption of Na+ and water." 
  },
  {
    id: 43,
    question: "How does the collecting duct concentrate urine and maintain medullary osmolarity?",
    answer: "By reabsorbing large amounts of water and allowing small amounts of urea into the medullary interstitium." 
  },

  // ─── COUNTER CURRENT MECHANISM ───────────────────────────────────────────────
  {
    id: 44,
    question: "Which two structural components primarily form the counter-current mechanism?",
    answer: "Henle's loop and vasa recta." 
  },
  {
    id: 45,
    question: "State the specific osmolarity values of the renal cortex and inner medulla.",
    answer: "Cortex: 300 mOsmolL-1. Inner medulla: 1200 mOsmolL-1." 
  },
  {
    id: 46,
    question: "Which two specific molecules primarily maintain the medullary osmolarity gradient?",
    answer: "NaCl and urea." 
  },
  {
    id: 47,
    question: "Trace the transport and exchange of NaCl in the counter-current mechanism.",
    answer: "Transported by ascending Henle, exchanged with descending vasa recta, and returned to interstitium by ascending vasa recta." 
  },
  {
    id: 48,
    question: "Trace the recycling path of urea in the renal medulla.",
    answer: "Enters the thin segment of ascending Henle's loop and is transported back to the interstitium by the collecting tubule." 
  },

  // ─── REGULATION OF KIDNEY FUNCTION ───────────────────────────────────────────
  {
    id: 49,
    question: "How does ADH (Vasopressin) directly prevent diuresis?",
    answer: "It facilitates water reabsorption from latter parts of the tubule." 
  },
  {
    id: 50,
    question: "What secondary effect does ADH have on blood vessels and GFR?",
    answer: "It causes vasoconstriction, which increases blood pressure and consequently increases glomerular blood flow and GFR." 
  },
  {
    id: 51,
    question: "What specific physiological changes trigger the release of Renin?",
    answer: "A fall in glomerular blood flow, glomerular blood pressure, or GFR." 
  },
  {
    id: 52,
    question: "What is the exact chemical action of Renin in the blood?",
    answer: "It converts angiotensinogen in blood to angiotensin I, and further to angiotensin II." 
  },
  {
    id: 53,
    question: "What are the two major effects of Angiotensin II?",
    answer: "Acts as a powerful vasoconstrictor (raising BP/GFR) and activates the adrenal cortex to release Aldosterone." 
  },
  {
    id: 54,
    question: "What is the specific action of Aldosterone on the renal tubule?",
    answer: "Causes reabsorption of Na+ and water from the distal parts of the tubule." 
  },
  {
    id: 55,
    question: "What triggers ANF release and what is its action?",
    answer: "An increase in blood flow to heart atria triggers ANF; it causes vasodilation, decreasing blood pressure." 
  },
  {
    id: 56,
    question: "ANF acts as a physiological check on which specific mechanism?",
    answer: "The renin-angiotensin mechanism." 
  },

  // ─── MICTURITION & URINE CHARACTERISTICS ─────────────────────────────────────
  {
    id: 57,
    question: "What initiates the micturition reflex?",
    answer: "The stretching of the urinary bladder as it gets filled with urine." 
  },
  {
    id: 58,
    question: "Define micturition in terms of muscle action.",
    answer: "Release of urine caused by contraction of smooth bladder muscles and simultaneous relaxation of the urethral sphincter." 
  },
  {
    id: 59,
    question: "State the normal daily volume and average pH of human urine.",
    answer: "1 to 1.5 litres per day; slightly acidic with a pH of 6.0." 
  },
  {
    id: 60,
    question: "How much urea is excreted per day by a normal adult?",
    answer: "25-30 grams of urea." 
  },
  {
    id: 61,
    question: "What clinical condition is indicated by glycosuria and ketonuria?",
    answer: "Diabetes mellitus." 
  },

  // ─── EXCRETORY ROLE OF OTHER ORGANS ──────────────────────────────────────────
  {
    id: 62,
    question: "What is the exact excretory rate of CO2 by human lungs?",
    answer: "Approximately 200mL/minute of CO2." 
  },
  {
    id: 63,
    question: "List the substances excreted by the liver into the digestive tract.",
    answer: "Bilirubin, biliverdin, cholesterol, degraded steroid hormones, vitamins, and drugs." 
  },
  {
    id: 64,
    question: "What substances are eliminated by sweat glands?",
    answer: "Watery fluid containing NaCl, small amounts of urea, and lactic acid." 
  },
  {
    id: 65,
    question: "What substances are eliminated by sebaceous glands via sebum?",
    answer: "Sterols, hydrocarbons, and waxes." 
  },

  // ─── DISORDERS OF EXCRETORY SYSTEM ───────────────────────────────────────────
  {
    id: 66,
    question: "What is uremia?",
    answer: "Accumulation of urea in blood due to kidney malfunction, which is highly harmful." 
  },
  {
    id: 67,
    question: "What is the exact composition of the dialysing fluid used in hemodialysis?",
    answer: "Same composition as plasma, except it lacks the nitrogenous wastes." 
  },
  {
    id: 68,
    question: "Which anticoagulant is added to blood before it is pumped into the dialyser?",
    answer: "Heparin." 
  },
  {
    id: 69,
    question: "What is added to the cleared blood before returning it to the patient's veins?",
    answer: "Anti-heparin." 
  },
  {
    id: 70,
    question: "What is the ultimate medical method for correcting acute renal failures?",
    answer: "Kidney transplantation." 
  },
  {
    id: 71,
    question: "What are renal calculi?",
    answer: "Stone or insoluble mass of crystallised salts (like oxalates) formed within the kidney." 
  },
  {
    id: 72,
    question: "What is glomerulonephritis?",
    answer: "Inflammation of the glomeruli of the kidney." 
  },

  // ─── DIAGRAM-BASED SPECIFICS ─────────────────────────────────────────────────
  {
    id: 73,
    question: "In the NCERT kidney diagram, what endocrine structure sits directly on top of the kidney?",
    answer: "The adrenal gland." 
  },
  {
    id: 74,
    question: "According to the NCERT Malpighian body diagram, which arteriole has a wider lumen?",
    answer: "The afferent arteriole is wider than the efferent arteriole." 
  },
  {
    id: 75,
    question: "In the NCERT counter-current diagram, what is the osmolarity of blood leaving the vasa recta near the cortex?",
    answer: "300 mOsmolL-1." 
  },
  {
    id: 76,
    question: "In the NCERT diagram, what is the highest osmolarity reached deep in the inner medulla?",
    answer: "1200 mOsmolL-1." 
  },
  {
    id: 77,
    question: "In the NCERT nephron diagram, which specific limb of Henle's loop is shown as thicker at the top?",
    answer: "The ascending limb." 
  },
  {
    id: 78,
    question: "In the NCERT diagram of a Malpighian body, which network is directly connected to the efferent arteriole?",
    answer: "The vasa recta / peritubular capillaries." 
  },
  {
    id: 79,
    question: "In the NCERT counter-current diagram, which direction does filtrate flow in the descending limb of Henle's loop?",
    answer: "Downwards (towards the inner medulla)." 
  },
  {
    id: 80,
    question: "In the NCERT diagram showing reabsorption, where is HCO3- explicitly shown being reabsorbed?",
    answer: "From the PCT and the DCT." 
  }
];

export default Excretoryproduct;