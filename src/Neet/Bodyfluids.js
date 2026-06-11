const Bodyfluids = [
  // ─── BLOOD COMPOSITION & PLASMA ─────────────────────────────────────────────
  {
    id: 1,
    question: "What constitutes the matrix of blood?",
    answer: "A fluid matrix, plasma, and formed elements." /* */
  },
  {
    id: 2,
    question: "What percentage of blood is plasma, and what percentage of plasma is water?",
    answer: "Plasma is 55% of blood. 90-92% of plasma is water." /* */
  },
  {
    id: 3,
    question: "Name the three major proteins found in blood plasma.",
    answer: "Fibrinogen, globulins, and albumins (constituting 6-8% of plasma)." /* */
  },
  {
    id: 4,
    question: "What is the specific function of fibrinogen in blood?",
    answer: "Needed for clotting or coagulation of blood." /* */
  },
  {
    id: 5,
    question: "What is the primary function of plasma globulins?",
    answer: "Primarily involved in defense mechanisms of the body." /* */
  },
  {
    id: 6,
    question: "What is the specific function of plasma albumins?",
    answer: "Help in maintaining osmotic balance." /* */
  },
  {
    id: 7,
    question: "Besides proteins, what other substances are present in blood plasma?",
    answer: "Minerals (Na+, Ca++, Mg++, HCO3-, Cl-), glucose, amino acids, lipids, and hormones." /* */
  },
  {
    id: 8,
    question: "Define serum.",
    answer: "Plasma without the clotting factors." /* */
  },

  // ─── FORMED ELEMENTS (ERYTHROCYTES) ─────────────────────────────────────────
  {
    id: 9,
    question: "What are the three formed elements, and what % of blood do they constitute?",
    answer: "Erythrocytes, leucocytes, and platelets. They constitute nearly 45% of the blood." /* */
  },
  {
    id: 10,
    question: "What is the normal RBC count in a healthy adult man?",
    answer: "5 million to 5.5 million RBCs per $mm^3$ of blood." /* */
  },
  {
    id: 11,
    question: "Where are RBCs formed in adults?",
    answer: "In the red bone marrow." /* */
  },
  {
    id: 12,
    question: "What is the shape of human RBCs and what organelle do they lack?",
    answer: "Biconcave in shape; devoid of a nucleus in most mammals." /* */
  },
  {
    id: 13,
    question: "What is the normal amount and specific function of haemoglobin in a healthy human?",
    answer: "12-16 gms per 100 ml of blood. It plays a significant role in transporting respiratory gases." /* */
  },
  {
    id: 14,
    question: "What is the average lifespan of RBCs and where are they destroyed?",
    answer: "120 days; destroyed in the spleen (graveyard of RBCs)." /* */
  },

  // ─── FORMED ELEMENTS (LEUCOCYTES) ───────────────────────────────────────────
  {
    id: 15,
    question: "Why are leucocytes colourless?",
    answer: "Due to the lack of haemoglobin." /* */
  },
  {
    id: 16,
    question: "What is the normal WBC count in a healthy human?",
    answer: "6000-8000 per $mm^3$ of blood." /* */
  },
  {
    id: 17,
    question: "Which WBCs are classified as granulocytes?",
    answer: "Neutrophils, eosinophils, and basophils." /* */
  },
  {
    id: 18,
    question: "Which WBCs are classified as agranulocytes?",
    answer: "Lymphocytes and monocytes." /* */
  },
  {
    id: 19,
    question: "Which is the most abundant and least abundant WBC?",
    answer: "Most: Neutrophils (60-65%). Least: Basophils (0.5-1%)." /* */
  },
  {
    id: 20,
    question: "Which two WBC types are strictly phagocytic cells?",
    answer: "Neutrophils and monocytes (6-8%)." /* */
  },
  {
    id: 21,
    question: "What substances do basophils secrete, and what is their role?",
    answer: "Histamine, serotonin, heparin; involved in inflammatory reactions." /* */
  },
  {
    id: 22,
    question: "What is the percentage and specific function of eosinophils?",
    answer: "2-3%; resist infections and are associated with allergic reactions." /* */
  },
  {
    id: 23,
    question: "Name the two types of lymphocytes and their general function.",
    answer: "B and T forms; responsible for immune responses of the body (20-25%)." /* */
  },

  // ─── FORMED ELEMENTS (PLATELETS) ────────────────────────────────────────────
  {
    id: 24,
    question: "What is another name for platelets and what cells produce them?",
    answer: "Thrombocytes; cell fragments produced from megakaryocytes in the bone marrow." /* */
  },
  {
    id: 25,
    question: "What is the normal platelet count in human blood?",
    answer: "1,50,000-3,50,000 per $mm^3$." /* */
  },
  {
    id: 26,
    question: "What is the consequence of a significant reduction in platelet number?",
    answer: "Clotting disorders leading to excessive blood loss from the body." /* */
  },

  // ─── BLOOD GROUPS (ABO & Rh) ────────────────────────────────────────────────
  {
    id: 27,
    question: "On what basis is ABO blood grouping determined?",
    answer: "Presence or absence of two surface antigens (A and B) on RBCs." /* */
  },
  {
    id: 28,
    question: "What antigens and antibodies are present in blood groups A, B, AB, and O respectively?",
    answer: "A: Ag-A, Anti-B. B: Ag-B, Anti-A. AB: Ag-A & B, No antibodies. O: No antigens, Anti-A & Anti-B." /* */
  },
  {
    id: 29,
    question: "Why is blood group O considered the universal donor?",
    answer: "RBCs lack both A and B antigens, preventing immune reactions in recipients." /* */
  },
  {
    id: 30,
    question: "Why is blood group AB considered the universal recipient?",
    answer: "Plasma lacks both anti-A and anti-B antibodies, accepting blood from all groups." /* */
  },
  {
    id: 31,
    question: "What percentage of humans are Rh positive?",
    answer: "Nearly 80 per cent." /* */
  },
  {
    id: 32,
    question: "What causes erythroblastosis foetalis?",
    answer: "Destruction of Rh+ foetal RBCs by Rh- mother's antibodies in a subsequent pregnancy." /* */
  },
  {
    id: 33,
    question: "How is erythroblastosis foetalis medically prevented?",
    answer: "Administering anti-Rh antibodies to the mother immediately after delivery of the first child." /* */
  },

  // ─── COAGULATION OF BLOOD ───────────────────────────────────────────────────
  {
    id: 34,
    question: "What forms the dark reddish brown scum at a wound site?",
    answer: "A clot or coagulum formed mainly of a network of fibrin threads." /* */
  },
  {
    id: 35,
    question: "Outline the specific sequence of the blood clotting enzyme cascade starting from tissue damage.",
    answer: "Thrombokinase converts inactive prothrombin to active thrombin. Thrombin then converts soluble fibrinogen into insoluble fibrin threads." /* */
  },
  {
    id: 36,
    question: "Which specific mineral ion plays a very important role in blood clotting?",
    answer: "Calcium ions ($Ca^{++}$)." /* */
  },

  // ─── LYMPH (TISSUE FLUID) ───────────────────────────────────────────────────
  {
    id: 37,
    question: "What is tissue fluid or interstitial fluid?",
    answer: "Fluid squeezed out of capillaries into intercellular spaces, sharing plasma's composition (minus large proteins/formed elements)." /* */
  },
  {
    id: 38,
    question: "What is the ultimate destination of the tissue fluid collected by the lymphatic system?",
    answer: "It is drained back into the major veins." /* */
  },
  {
    id: 39,
    question: "What is the fluid present in the lymphatic system called?",
    answer: "Lymph (a colourless fluid containing specialised lymphocytes)." /* */
  },
  {
    id: 40,
    question: "What are the major functions of lymph?",
    answer: "Carries lymphocytes for immune responses, transports absorbed fats from the intestine, and serves as a carrier for nutrients and hormones." /* */
  },
  {
    id: 41,
    question: "What is the specific role of lacteals in intestinal villi?",
    answer: "They absorb and transport fats into the lymphatic system." /* */
  },

  // ─── CIRCULATORY PATHWAYS ───────────────────────────────────────────────────
  {
    id: 42,
    question: "Which animal groups exhibit an open circulatory system?",
    answer: "Arthropods and molluscs." /* */
  },
  {
    id: 43,
    question: "Which animal groups exhibit a closed circulatory system?",
    answer: "Annelids and chordates." /* */
  },
  {
    id: 44,
    question: "Describe the heart structure of fishes and their type of circulation.",
    answer: "2-chambered heart (1 atrium, 1 ventricle); single circulation." /* */
  },
  {
    id: 45,
    question: "Describe the heart structure of amphibians and reptiles (except crocodiles).",
    answer: "3-chambered heart (2 atria, 1 ventricle); incomplete double circulation." /* */
  },
  {
    id: 46,
    question: "Which animals possess a complete 4-chambered heart and double circulation?",
    answer: "Crocodiles, birds, and mammals." /* */
  },

  // ─── HUMAN HEART ANATOMY ────────────────────────────────────────────────────
  {
    id: 47,
    question: "Where is the human heart located and what is its size?",
    answer: "In the thoracic cavity between the two lungs, tilted slightly left. Size of a clenched fist." /* */
  },
  {
    id: 48,
    question: "Name the double-walled membranous bag protecting the heart.",
    answer: "Pericardium, enclosing the pericardial fluid." /* */
  },
  {
    id: 49,
    question: "Which structure separates the right and left atria?",
    answer: "A thin, muscular inter-atrial septum." /* */
  },
  {
    id: 50,
    question: "Which structure separates the right and left ventricles?",
    answer: "A thick-walled inter-ventricular septum." /* */
  },
  {
    id: 51,
    question: "What separates the atrium and ventricle on the same side?",
    answer: "A thick fibrous tissue called the atrio-ventricular septum." /* */
  },
  {
    id: 52,
    question: "Which valve guards the opening between the right atrium and right ventricle?",
    answer: "The tricuspid valve (three muscular flaps/cusps)." /* */
  },
  {
    id: 53,
    question: "Which valve guards the opening between the left atrium and left ventricle?",
    answer: "The bicuspid or mitral valve." /* */
  },
  {
    id: 54,
    question: "Where are the semilunar valves located?",
    answer: "At the openings of the right/left ventricles into the pulmonary artery and aorta." /* */
  },
  {
    id: 55,
    question: "What is the function of all valves in the heart?",
    answer: "They allow the flow of blood only in one direction, preventing backflow." /* */
  },

  // ─── NODAL TISSUE ───────────────────────────────────────────────────────────
  {
    id: 56,
    question: "Where is the Sino-atrial node (SAN) located?",
    answer: "In the right upper corner of the right atrium." /* */
  },
  {
    id: 57,
    question: "Where is the Atrio-ventricular node (AVN) located?",
    answer: "In the lower left corner of the right atrium close to the atrio-ventricular septum." /* */
  },
  {
    id: 58,
    question: "What are Purkinje fibres?",
    answer: "Minute branches of the bundle of His spreading throughout the ventricular musculature." /* */
  },
  {
    id: 59,
    question: "Why is the human heart called myogenic?",
    answer: "Nodal tissue is autoexcitable (generates action potentials without external stimuli)." /* */
  },
  {
    id: 60,
    question: "Why is the SAN called the pacemaker of the heart?",
    answer: "It generates the maximum number of action potentials (70-75/min) and initiates rhythmic contractions." /* */
  },

  // ─── CARDIAC CYCLE ──────────────────────────────────────────────────────────
  {
    id: 61,
    question: "What is joint diastole?",
    answer: "The relaxed state of all four chambers of the heart." /* */
  },
  {
    id: 62,
    question: "What specific anatomical feature allows joint diastole to function?",
    answer: "The tricuspid and bicuspid valves are open, allowing blood from veins to flow freely into the ventricles." /* */
  },
  {
    id: 63,
    question: "How much does atrial systole increase the flow of blood into the ventricles?",
    answer: "By about 30 per cent." /* */
  },
  {
    id: 64,
    question: "During ventricular systole, what forces the closure of the tricuspid and bicuspid valves?",
    answer: "Increased ventricular pressure." /* */
  },
  {
    id: 65,
    question: "What initiates the closure of the semilunar valves?",
    answer: "Ventricular diastole (relaxation) causes ventricular pressure to fall, forcing semilunar valves to close to prevent backflow." /* */
  },
  {
    id: 66,
    question: "What is the duration of one complete cardiac cycle?",
    answer: "0.8 seconds." /* */
  },
  {
    id: 67,
    question: "Define Stroke Volume and state its normal value.",
    answer: "Volume of blood pumped out by each ventricle during a cardiac cycle; approx 70 mL." /* */
  },
  {
    id: 68,
    question: "Define Cardiac Output and state its average value.",
    answer: "Volume of blood pumped by each ventricle per minute; average 5000 mL (5 litres)." /* */
  },
  {
    id: 69,
    question: "Name the two prominent heart sounds and what causes them.",
    answer: "'Lub' (closure of tricuspid/bicuspid valves) and 'Dub' (closure of semilunar valves)." /* */
  },

  // ─── ECG ────────────────────────────────────────────────────────────────────
  {
    id: 70,
    question: "What is an electrocardiogram (ECG)?",
    answer: "A graphical representation of the electrical activity of the heart during a cardiac cycle." /* */
  },
  {
    id: 71,
    question: "To obtain a standard ECG, where are the three electrical leads connected?",
    answer: "One to each wrist and one to the left ankle." /* */
  },
  {
    id: 72,
    question: "What does the P-wave in a standard ECG represent?",
    answer: "Electrical excitation (depolarisation) of the atria, causing atrial systole." /* */
  },
  {
    id: 73,
    question: "What does the QRS complex represent in an ECG?",
    answer: "Depolarisation of the ventricles, initiating ventricular contraction." /* */
  },
  {
    id: 74,
    question: "What does the T-wave represent, and what does its end mark?",
    answer: "Repolarisation of ventricles (return to normal state). Its end marks the end of systole." /* */
  },
  {
    id: 75,
    question: "How can a physician determine a patient's heart rate from an ECG?",
    answer: "By counting the number of QRS complexes in a given time period." /* */
  },

  // ─── DOUBLE CIRCULATION ─────────────────────────────────────────────────────
  {
    id: 76,
    question: "What are the three layers of blood vessels?",
    answer: "Tunica intima (squamous endothelium), tunica media (smooth muscle/elastic fibres), tunica externa (fibrous connective tissue)." /* */
  },
  {
    id: 77,
    question: "Trace the exact pathway of pulmonary circulation.",
    answer: "Right ventricle $\\rightarrow$ pulmonary artery $\\rightarrow$ lungs $\\rightarrow$ pulmonary veins $\\rightarrow$ left atrium." /* */
  },
  {
    id: 78,
    question: "Trace the exact pathway of systemic circulation.",
    answer: "Left ventricle $\\rightarrow$ aorta $\\rightarrow$ tissues (capillaries) $\\rightarrow$ venules/veins/vena cava $\\rightarrow$ right atrium." /* */
  },
  {
    id: 79,
    question: "What unique vascular connection exists between the digestive tract and liver?",
    answer: "The hepatic portal system (hepatic portal vein carries blood from intestine to liver)." /* */
  },
  {
    id: 80,
    question: "What is the function of the coronary system?",
    answer: "A special system of blood vessels exclusively for the circulation of blood to and from cardiac musculature." /* */
  },

  // ─── REGULATION OF CARDIAC ACTIVITY ─────────────────────────────────────────
  {
    id: 81,
    question: "Which specific brain structure moderates cardiac function via the ANS?",
    answer: "The neural centre in the medulla oblongata." /* */
  },
  {
    id: 82,
    question: "How do sympathetic and parasympathetic nerves affect heart rate?",
    answer: "Sympathetic increases heart rate and contraction strength; parasympathetic decreases them." /* */
  },
  {
    id: 83,
    question: "Which hormonal secretions can also increase cardiac output?",
    answer: "Adrenal medullary hormones." /* */
  },

  // ─── DISORDERS ──────────────────────────────────────────────────────────────
  {
    id: 84,
    question: "What blood pressure reading indicates clinical hypertension?",
    answer: "Repeated checks showing 140/90 or higher." /* */
  },
  {
    id: 85,
    question: "What vital organs are affected by hypertension?",
    answer: "Brain and kidney." /* */
  },
  {
    id: 86,
    question: "What is Coronary Artery Disease (CAD) more commonly called, and what causes it?",
    answer: "Atherosclerosis; caused by calcium, fat, cholesterol, and fibrous tissue deposits narrowing arteries." /* */
  },
  {
    id: 87,
    question: "What is Angina Pectoris and its primary symptom?",
    answer: "Acute chest pain appearing when not enough oxygen is reaching the heart muscle." /* */
  },
  {
    id: 88,
    question: "Differentiate Heart Failure from Cardiac Arrest.",
    answer: "Heart failure: inadequate pumping to meet body needs. Cardiac arrest: heart stops beating entirely." /* */
  },
  {
    id: 89,
    question: "What is a Heart Attack (myocardial infarction)?",
    answer: "The heart muscle is suddenly damaged by an inadequate blood supply." /* */
  }
];

export default Bodyfluids;