import { Drug } from "@/lib/types";

// Year 3 — study content written from standard UK pharmacology teaching and
// cross-checked against the NHS medicines pages (nhs.uk/medicines/...) in
// Sept 2026. BNF and DrugBank could not be reached programmatically, so
// `sources` lists only what was actually confirmed: "NHS" where a live NHS
// page corroborated the entry, and [] where no reachable source could be
// checked (verify these against the BNF before relying on them).
export const year3Drugs: Drug[] = [
  {
    slug: "aciclovir",
    reference: 1,
    name: "Aciclovir",
    tags: ["Antiviral", "Nucleoside analogue", "Herpesvirus"],
    drugClass: "Nucleoside analogue antiviral (guanosine analogue)",
    indications: [
      "Herpes simplex infections — genital herpes, cold sores, herpetic whitlow",
      "Varicella-zoster — chickenpox and shingles",
      "Prevention of herpes infections in the immunocompromised",
    ],
    mechanism:
      "A guanosine analogue that is selectively phosphorylated to its monophosphate by viral thymidine kinase, which is present only in infected cells, then to the triphosphate by host kinases. Aciclovir triphosphate inhibits viral DNA polymerase and, once incorporated, terminates the growing viral DNA chain. This selectivity gives a wide safety margin against herpes simplex and varicella-zoster viruses.",
    mechanismSummary:
      "Viral thymidine kinase phosphorylates it (only in infected cells) → aciclovir triphosphate inhibits viral DNA polymerase + chain termination → selective anti-herpesvirus effect",
    adrs: [
      "Nausea, vomiting and diarrhoea",
      "Headache and dizziness",
      "Rise in urea/creatinine and crystal nephropathy (especially with IV use or dehydration)",
      "Neurotoxicity — confusion, tremor — in renal impairment or with high doses",
    ],
    keyADRs: ["Renal impairment / crystal nephropathy (with IV use or dehydration)"],
    counselling: [
      "Start treatment as early as possible — it works best within 48–72 hours of symptoms appearing.",
      "Drink plenty of fluid, especially with higher oral doses or IV treatment, to protect the kidneys.",
      "It reduces symptoms and viral shedding but does not cure the infection, which can recur.",
      "For cold sore cream, apply five times a day for 5 days.",
    ],
    contraindications: [
      "Known hypersensitivity to aciclovir or valaciclovir.",
    ],
    cautions: [
      "Maintain adequate hydration, especially with high oral doses or IV use — risk of crystal nephropathy.",
      "Reduce the dose in renal impairment and in the elderly.",
      "Risk of neurotoxicity (confusion, hallucinations, tremor) in renal impairment or with high doses.",
      "Start as early as possible — most effective within 48–72 hours of symptom onset.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "amoxicillin",
    reference: 2,
    name: "Amoxicillin",
    tags: ["Antibiotic", "Penicillin", "Beta-lactam"],
    drugClass: "Broad-spectrum beta-lactam antibiotic (aminopenicillin)",
    indications: [
      "Community-acquired pneumonia and other respiratory infections",
      "Otitis media and sinusitis",
      "Dental abscess",
      "Helicobacter pylori eradication (in combination); UTI",
    ],
    mechanism:
      "Binds penicillin-binding proteins and inhibits transpeptidation cross-linking of the bacterial peptidoglycan cell wall, causing lysis of dividing bacteria. The amino side chain improves penetration through Gram-negative porin channels, broadening the spectrum compared with penicillin V, but it is still hydrolysed by beta-lactamases.",
    mechanismSummary:
      "Binds penicillin-binding proteins → inhibits peptidoglycan cross-linking → cell-wall lysis; amino side chain → better Gram-negative penetration than penicillin V; β-lactamase susceptible",
    adrs: [
      "Nausea and diarrhoea",
      "Hypersensitivity — rash, urticaria",
      "Anaphylaxis (rare)",
      "Maculopapular rash if given in glandular fever (infectious mononucleosis); antibiotic-associated colitis",
    ],
    keyADRs: ["Hypersensitivity / anaphylaxis"],
    counselling: [
      "It can be taken with or without food; complete the full course as prescribed.",
      "Stop and seek urgent help for a widespread rash, facial or throat swelling, or breathing difficulty, and tell future prescribers about any reaction.",
      "A non-allergic blotchy rash is common if it is taken during glandular fever — mention any current sore-throat illness.",
      "Seek advice for severe or bloody diarrhoea.",
    ],
    contraindications: [
      "History of immediate hypersensitivity (anaphylaxis, urticaria, angioedema) to a penicillin or other beta-lactam.",
    ],
    cautions: [
      "Avoid in glandular fever, acute lymphocytic leukaemia and CMV infection — high risk of a non-allergic maculopapular rash.",
      "History of allergy (non-immediate reactions or atopy); possible cross-reactivity with other beta-lactams.",
      "Reduce the dose in severe renal impairment.",
      "Can cause false-positive urinary glucose (copper-reduction tests).",
    ],
    sources: ["NHS"],
  },
  {
    slug: "beclometasone",
    reference: 3,
    name: "Beclometasone",
    tags: ["Inhaled corticosteroid", "Asthma", "Preventer"],
    drugClass: "Inhaled corticosteroid (glucocorticoid)",
    indications: [
      "Regular prevention (preventer) in asthma",
      "Maintenance treatment of COPD (in combination inhalers)",
      "Allergic rhinitis (nasal spray)",
    ],
    mechanism:
      "Binds airway glucocorticoid receptors and modulates gene transcription, reducing production of inflammatory cytokines and mediators and the recruitment of eosinophils and mast cells. This decreases airway inflammation and bronchial hyper-responsiveness over days to weeks. Topical airway delivery limits systemic exposure.",
    mechanismSummary:
      "Binds airway glucocorticoid receptors → ↓ inflammatory cytokines + ↓ eosinophil/mast-cell activity → ↓ airway inflammation and hyper-responsiveness (effect over days–weeks); inhaled route limits systemic effect",
    adrs: [
      "Oral candidiasis (thrush)",
      "Hoarse voice and throat irritation",
      "Cough on inhalation",
      "With high doses long-term: adrenal suppression, reduced bone density, and in children a small effect on growth",
    ],
    keyADRs: [
      "Oral candidiasis",
      "Hoarse voice",
    ],
    counselling: [
      "This is a preventer — use it every day as prescribed, even when you feel well; it does not relieve a sudden attack (use the reliever for that).",
      "Rinse your mouth and spit out, or brush your teeth, after each dose to reduce thrush and hoarseness.",
      "Use a spacer with a metered-dose inhaler to improve delivery and cut side effects.",
      "Do not stop it suddenly, and carry a steroid card if you are on a high dose.",
    ],
    contraindications: [
      "Not for the relief of an acute asthma attack or status asthmaticus.",
      "Hypersensitivity to the drug.",
    ],
    cautions: [
      "Active or quiescent pulmonary tuberculosis; untreated respiratory infection.",
      "High doses long-term — adrenal suppression, reduced bone density, growth restriction in children, glaucoma and cataract; monitor children's growth and issue a steroid card.",
      "Risk of paradoxical bronchospasm — stop if it occurs.",
      "Ensure a reliever inhaler is available for acute symptoms.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "ciprofloxacin",
    reference: 4,
    name: "Ciprofloxacin",
    tags: ["Antibiotic", "Fluoroquinolone", "Broad spectrum"],
    drugClass: "Fluoroquinolone antibiotic",
    indications: [
      "Complicated urinary tract and intra-abdominal infection",
      "Gram-negative respiratory infection, including in cystic fibrosis / Pseudomonas",
      "Gastroenteritis (e.g. severe traveller's diarrhoea, typhoid)",
      "Gonorrhoea and prostatitis (where sensitive)",
    ],
    mechanism:
      "Inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV, the enzymes that relieve DNA supercoiling and separate replicated DNA. This blocks DNA replication and is rapidly bactericidal, with strong activity against Gram-negative organisms including Pseudomonas.",
    mechanismSummary:
      "Inhibits bacterial DNA gyrase + topoisomerase IV → blocks DNA supercoiling/replication → rapidly bactericidal (strong Gram-negative cover, including Pseudomonas)",
    adrs: [
      "Nausea and diarrhoea, including C. difficile colitis",
      "Tendonitis and tendon rupture (especially Achilles; higher risk with steroids and in older people)",
      "QT prolongation and CNS effects — seizures, confusion, lowered seizure threshold",
      "Aortic aneurysm or dissection (rare), peripheral neuropathy; disabling and potentially long-lasting musculoskeletal and nervous system effects",
    ],
    keyADRs: [
      "Tendonitis / tendon rupture",
      "C. difficile colitis",
    ],
    counselling: [
      "Stop and seek advice at once for tendon pain or swelling (often at the back of the ankle) — rest the limb and avoid exercise.",
      "Report new numbness or tingling, severe headache, mood change, or palpitations.",
      "It is now reserved for when other antibiotics are unsuitable, because of the risk of long-lasting side effects.",
      "Take it 2 hours apart from milk, dairy, antacids, and iron or calcium supplements, which stop it being absorbed; avoid excess sun.",
    ],
    contraindications: [
      "History of tendon disorders related to quinolone use.",
      "Previous serious hypersensitivity to a quinolone.",
    ],
    cautions: [
      "Reserved for when other antibiotics are unsuitable — risk of disabling, potentially long-lasting or irreversible tendon, musculoskeletal and nervous-system effects; stop at the first sign of tendon pain (elderly, corticosteroids, transplant).",
      "Risk of aortic aneurysm and dissection; lowers the seizure threshold (epilepsy, brain disease).",
      "QT prolongation — correct electrolytes and avoid other QT-prolonging drugs; myasthenia gravis (may worsen); G6PD deficiency.",
      "Can cause C. difficile colitis; avoid excessive sunlight; raises theophylline and enhances warfarin; take 2 hours apart from divalent/trivalent cations.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "chloramphenicol",
    reference: 5,
    name: "Chloramphenicol",
    tags: ["Antibiotic", "Topical", "Eye infection"],
    drugClass: "Broad-spectrum antibiotic (topical ocular use)",
    indications: [
      "Bacterial conjunctivitis (eye drops or ointment)",
      "Bacterial otitis externa (ear drops)",
    ],
    mechanism:
      "Binds the 50S bacterial ribosomal subunit and inhibits peptidyl transferase, blocking peptide bond formation and protein synthesis. It is bacteriostatic against a broad range of organisms. It is used topically for bacterial conjunctivitis; systemic use is now rare because of bone marrow toxicity.",
    mechanismSummary:
      "Binds 50S ribosomal subunit → inhibits peptidyl transferase → ↓ bacterial protein synthesis → bacteriostatic, broad spectrum; topical eye use (systemic use limited by marrow toxicity)",
    adrs: [
      "Transient stinging, burning or blurred vision after application",
      "Local itching or hypersensitivity",
      "Idiosyncratic aplastic anaemia (extremely rare, even with eye drops)",
      "Grey baby syndrome in neonates (systemic use)",
    ],
    keyADRs: ["Local stinging / irritation"],
    counselling: [
      "Brief stinging and blurring after putting drops in is normal — wait before driving.",
      "Do not wear contact lenses during treatment or for 24 hours after finishing.",
      "Keep using it for about 48 hours after the eye looks better, then stop.",
      "Discard the bottle or tube after the recommended time (often 5 days after opening for drops); do not share it.",
    ],
    contraindications: [
      "Personal or family history of blood dyscrasia, especially bone marrow depression.",
      "Known hypersensitivity.",
      "Third trimester of pregnancy and near term, and breastfeeding — risk of grey baby syndrome.",
    ],
    cautions: [
      "Avoid prolonged or repeated courses.",
      "Stop if symptoms persist or worsen, or if a hypersensitivity reaction develops.",
      "Do not wear contact lenses during treatment or for 24 hours after.",
      "Refer for eye pain, marked redness, photophobia or visual disturbance; discard after the recommended in-use period.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "chlorphenamine",
    reference: 6,
    name: "Chlorphenamine",
    tags: ["Antihistamine", "Sedating", "H1 antagonist"],
    drugClass: "First-generation (sedating) H1 antihistamine",
    indications: [
      "Symptomatic relief of allergy — hay fever, urticaria, drug reactions",
      "Adjunct in the emergency treatment of anaphylaxis",
      "Pruritus, including at night",
    ],
    mechanism:
      "Competitively blocks peripheral histamine H1 receptors, reducing histamine-mediated itch, wheal, vasodilation and secretions. Being lipophilic it also crosses the blood–brain barrier, blocking central H1 receptors (causing sedation) and muscarinic receptors (antimuscarinic effects). It is useful for acute allergic reactions and as an adjunct in anaphylaxis.",
    mechanismSummary:
      "Blocks peripheral H1 receptors → ↓ histamine-mediated itch, wheal and secretions; crosses BBB → central H1 blockade (sedation) + antimuscarinic effects",
    adrs: [
      "Drowsiness and sedation",
      "Antimuscarinic effects — dry mouth, blurred vision, urinary retention, constipation",
      "Dizziness and impaired coordination",
      "Paradoxical excitation in children and older people",
    ],
    keyADRs: [
      "Sedation",
      "Antimuscarinic effects",
    ],
    counselling: [
      "It commonly causes drowsiness — do not drive or operate machinery if affected, and avoid alcohol.",
      "A non-drowsy antihistamine (e.g. cetirizine or loratadine) is usually preferred for everyday hay fever.",
      "Use with caution in older men with prostate problems and in glaucoma.",
      "Its sedating effect is sometimes used deliberately to help with itch at night.",
    ],
    contraindications: [
      "Neonates and premature infants.",
      "Known hypersensitivity to antihistamines.",
    ],
    cautions: [
      "Prostatic hypertrophy, urinary retention and bladder-outflow obstruction; angle-closure glaucoma.",
      "Significant hepatic disease; epilepsy; pyloroduodenal obstruction.",
      "Elderly (confusion, falls, antimuscarinic load) and young children (paradoxical stimulation).",
      "Marked sedation — avoid driving and alcohol; additive with other CNS depressants and antimuscarinics.",
    ],
    sources: [],
  },
  {
    slug: "cyclizine",
    reference: 7,
    name: "Cyclizine",
    tags: ["Antiemetic", "Antihistamine", "Antimuscarinic"],
    drugClass: "Histamine H1 receptor antagonist (antiemetic) with antimuscarinic activity",
    indications: [
      "Nausea and vomiting — post-operative, motion sickness, vertigo",
      "Nausea in palliative care",
      "Nausea associated with vestibular disorders (e.g. Meniere's disease)",
    ],
    mechanism:
      "Blocks H1 and muscarinic receptors in the vomiting centre and the vestibular pathways, reducing nausea and vomiting — particularly that related to motion, vertigo and vagally-mediated causes. It has little effect on the chemoreceptor trigger zone, so it is less useful for opioid- or chemotherapy-induced nausea than dopamine or 5-HT3 antagonists.",
    mechanismSummary:
      "Blocks H1 + muscarinic receptors in the vomiting centre and vestibular pathways → ↓ motion-, vertigo- and vagally-mediated nausea; little CTZ effect",
    adrs: [
      "Drowsiness",
      "Dry mouth and blurred vision (antimuscarinic)",
      "Constipation",
      "Urinary retention; tachycardia, and euphoria / misuse potential with IV use",
    ],
    keyADRs: [
      "Drowsiness",
      "Antimuscarinic effects",
    ],
    counselling: [
      "It can make you drowsy — avoid driving and alcohol if affected.",
      "Dry mouth is common — sugar-free gum or sips of water help.",
      "Use with caution in older people, in glaucoma, and in men with prostate problems.",
      "It is generally avoided in severe heart failure.",
    ],
    contraindications: [
      "No absolute contraindication other than hypersensitivity.",
    ],
    cautions: [
      "Severe heart failure — can reduce cardiac output.",
      "Prostatic hypertrophy, urinary retention and angle-closure glaucoma.",
      "Hepatic and severe renal impairment; epilepsy; elderly patients.",
      "Potential for misuse (euphoriant effect with IV use); can mask an underlying disorder such as raised intracranial pressure.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "clarithromycin",
    reference: 8,
    name: "Clarithromycin",
    tags: ["Antibiotic", "Macrolide", "Enzyme inhibitor"],
    drugClass: "Macrolide antibiotic",
    indications: [
      "Respiratory tract infection, including atypical pneumonia",
      "Skin and soft tissue infection",
      "Helicobacter pylori eradication (in combination)",
      "Alternative in penicillin allergy",
    ],
    mechanism:
      "Binds the 23S rRNA of the 50S bacterial ribosomal subunit, blocking translocation during protein synthesis. It is bacteriostatic against Gram-positive organisms and atypicals (Mycoplasma, Chlamydia, Legionella) and is used in Helicobacter pylori eradication. It inhibits CYP3A4 and prolongs the QT interval.",
    mechanismSummary:
      "Binds 23S rRNA of the 50S ribosomal subunit → blocks translocation → ↓ bacterial protein synthesis (bacteriostatic); covers atypicals; CYP3A4 inhibitor + QT prolongation",
    adrs: [
      "Nausea, vomiting, abdominal pain and diarrhoea (including C. difficile)",
      "Taste disturbance (metallic taste)",
      "QT prolongation and arrhythmia",
      "Hepatotoxicity (usually reversible); interaction-related toxicity — statins (myopathy), warfarin (raised INR)",
    ],
    keyADRs: [
      "QT prolongation",
      "Drug interactions (statins, warfarin)",
    ],
    counselling: [
      "Tell your prescriber what else you take — many statins should be paused during a course, and it can increase the effect of warfarin and some other drugs.",
      "Report palpitations or fainting.",
      "Take it with food if it upsets your stomach, and complete the course.",
      "Seek advice for severe or bloody diarrhoea, or yellowing of the eyes or skin.",
    ],
    contraindications: [
      "History of QT prolongation or ventricular arrhythmia, including torsades de pointes; hypokalaemia.",
      "Concomitant ergot alkaloids, simvastatin or lovastatin, or other QT-prolonging drugs.",
      "Concomitant colchicine in renal or hepatic impairment.",
      "Severe hepatic impairment together with renal impairment.",
    ],
    cautions: [
      "Potent CYP3A4 inhibitor — raises statins (myopathy), warfarin (raised INR), tacrolimus, ciclosporin, some DOACs and midazolam.",
      "QT prolongation, especially with cardiac disease or electrolyte disturbance; coronary artery disease.",
      "Reduce the dose in renal impairment.",
      "Hepatotoxicity (usually reversible); may worsen myasthenia gravis.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "fluconazole",
    reference: 9,
    name: "Fluconazole",
    tags: ["Antifungal", "Triazole", "Systemic"],
    drugClass: "Triazole antifungal",
    indications: [
      "Vaginal and oropharyngeal candidiasis",
      "Invasive candidiasis and candidaemia",
      "Cryptococcal meningitis",
      "Prophylaxis of fungal infection in the immunocompromised",
    ],
    mechanism:
      "Inhibits fungal cytochrome P450 14-alpha-demethylase, blocking conversion of lanosterol to ergosterol. Depletion of ergosterol and accumulation of toxic 14-alpha-methyl sterols disrupt the fungal cell membrane. It is well absorbed orally with good CSF penetration, and it moderately inhibits human CYP2C9 and CYP3A4.",
    mechanismSummary:
      "Inhibits fungal 14-α-demethylase → ↓ ergosterol + toxic sterol build-up → disrupted fungal membrane; good oral absorption and CSF penetration; inhibits CYP2C9/3A4",
    adrs: [
      "Nausea, abdominal pain and diarrhoea",
      "Headache",
      "Raised liver enzymes / hepatotoxicity",
      "QT prolongation; rash, rarely SJS/TEN; interaction-related effects (raises warfarin, phenytoin, some statins, tacrolimus)",
    ],
    keyADRs: [
      "Hepatotoxicity",
      "Drug interactions",
    ],
    counselling: [
      "A single dose is often enough for vaginal thrush; longer courses are used for other infections — complete them.",
      "Tell your prescriber about other medicines, as it can raise the levels of several, including warfarin.",
      "Report yellowing of the eyes or skin, dark urine, or severe abdominal pain.",
      "Avoid it in pregnancy unless essential — high-dose, prolonged use is linked with birth defects.",
    ],
    contraindications: [
      "Concomitant terfenadine (with multiple- or high-dose fluconazole).",
      "Concomitant astemizole, pimozide, quinidine or erythromycin — risk of QT prolongation and arrhythmia.",
    ],
    cautions: [
      "Hepatotoxicity — monitor liver function with prolonged or high-dose use and stop if signs of liver disease appear.",
      "QT prolongation and proarrhythmic conditions — correct electrolytes.",
      "Inhibits CYP2C9 and CYP3A4 — raises warfarin, phenytoin, sulfonylureas, ciclosporin, tacrolimus and some statins.",
      "Reduce the dose in renal impairment for multiple dosing; avoid in pregnancy unless essential and use effective contraception; risk of severe cutaneous reactions.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "gentamicin",
    reference: 10,
    name: "Gentamicin",
    tags: ["Antibiotic", "Aminoglycoside", "Narrow therapeutic index"],
    drugClass: "Aminoglycoside antibiotic",
    indications: [
      "Severe Gram-negative sepsis, including of unknown source",
      "Pyelonephritis and complicated UTI",
      "Biliary and intra-abdominal infection (with other agents)",
      "Infective endocarditis (synergy, with a beta-lactam)",
    ],
    mechanism:
      "Actively transported into bacteria by an oxygen-dependent process, then binds the 30S ribosomal subunit, causing misreading of mRNA and blocking protein synthesis. It is rapidly bactericidal with concentration-dependent killing and a post-antibiotic effect, with strong Gram-negative (including Pseudomonas) activity and poor activity in anaerobic conditions.",
    mechanismSummary:
      "Binds 30S ribosomal subunit → mRNA misreading + ↓ protein synthesis → rapidly bactericidal (concentration-dependent); strong Gram-negative cover; O₂-dependent uptake (inactive in anaerobes)",
    adrs: [
      "Nephrotoxicity (usually reversible acute tubular injury)",
      "Ototoxicity — vestibular (imbalance) and cochlear (hearing loss), which can be permanent",
      "Neuromuscular blockade with rapid IV administration or in myasthenia",
      "Hypomagnesaemia",
    ],
    keyADRs: [
      "Nephrotoxicity",
      "Ototoxicity",
    ],
    counselling: [
      "Blood levels and kidney function are checked during treatment so the dose can be adjusted — this is essential to avoid toxicity.",
      "Report any hearing loss, ringing in the ears, dizziness or unsteadiness immediately.",
      "It is given by injection or infusion in hospital, usually for a short course.",
      "The dose is based on your weight and kidney function.",
    ],
    contraindications: [
      "Myasthenia gravis.",
    ],
    cautions: [
      "Narrow therapeutic index — monitor serum concentrations (peak and trough) and renal function, and dose by weight and renal function.",
      "Nephrotoxic and ototoxic — avoid concurrent nephrotoxic or ototoxic drugs (loop diuretics, vancomycin, amphotericin, ciclosporin, platinum chemotherapy).",
      "Elderly patients; renal impairment (extend the dosing interval); pre-existing hearing or vestibular impairment — ototoxicity can be irreversible.",
      "Avoid prolonged courses; use ideal body weight for dosing in obesity; pregnancy — risk of auditory or vestibular nerve damage.",
    ],
    sources: [],
  },
  {
    slug: "ipratropium",
    reference: 11,
    name: "Ipratropium",
    tags: ["Bronchodilator", "Antimuscarinic", "SAMA"],
    drugClass: "Short-acting muscarinic antagonist (SAMA) bronchodilator",
    indications: [
      "Bronchospasm in COPD",
      "Add-on bronchodilation in acute severe asthma",
      "Rhinorrhoea in allergic and non-allergic rhinitis (nasal spray)",
    ],
    mechanism:
      "A quaternary ammonium antimuscarinic that blocks M3 (and M1, M2) receptors on airway smooth muscle, reducing acetylcholine-mediated bronchoconstriction and mucus secretion. Being quaternary it is minimally absorbed, so systemic antimuscarinic effects are limited. Its onset is slower than salbutamol; it is used in COPD and as an add-on in acute severe asthma.",
    mechanismSummary:
      "Blocks airway M3 muscarinic receptors → ↓ vagally-mediated bronchoconstriction and mucus secretion; quaternary structure → minimal systemic absorption; slower onset than salbutamol",
    adrs: [
      "Dry mouth",
      "Cough and throat irritation",
      "Headache",
      "Blurred vision or acute angle-closure glaucoma if sprayed in the eyes; urinary retention (rare)",
    ],
    keyADRs: ["Dry mouth"],
    counselling: [
      "Avoid getting the spray in your eyes (use a mouthpiece rather than a loose mask where possible) — it can blur vision and, rarely, trigger acute glaucoma.",
      "It works more slowly than a salbutamol reliever, so it is not the first choice for sudden breathlessness.",
      "Sips of water or sugar-free sweets help dry mouth.",
      "Rinse the mouthpiece and check your inhaler technique regularly.",
    ],
    contraindications: [
      "Hypersensitivity to ipratropium or to atropine and its derivatives.",
    ],
    cautions: [
      "Avoid spraying near the eyes — risk of blurred vision and acute angle-closure glaucoma; use a mouthpiece rather than a loose face mask, or protect the eyes.",
      "Susceptibility to angle-closure glaucoma.",
      "Prostatic hyperplasia, bladder-outflow obstruction and risk of urinary retention; cystic fibrosis (GI motility problems).",
      "Paradoxical bronchospasm — stop if it occurs; slower onset than salbutamol, so not for rapid symptom relief.",
    ],
    sources: [],
  },
  {
    slug: "ketoconazole",
    reference: 12,
    name: "Ketoconazole",
    tags: ["Antifungal", "Imidazole", "Topical / restricted oral"],
    drugClass: "Imidazole antifungal",
    indications: [
      "Seborrhoeic dermatitis and dandruff (shampoo)",
      "Dermatophyte and pityriasis versicolor skin infections (cream)",
      "Cushing's syndrome — control of cortisol excess (specialist oral use)",
    ],
    mechanism:
      "Inhibits fungal 14-alpha-demethylase (a cytochrome P450 enzyme), blocking ergosterol synthesis and disrupting the fungal cell membrane. At higher (systemic) concentrations it also inhibits human steroidogenic P450 enzymes, reducing cortisol and testosterone synthesis — one reason oral use is now heavily restricted. It is mainly used topically as a cream or shampoo.",
    mechanismSummary:
      "Inhibits fungal 14-α-demethylase → ↓ ergosterol → disrupted fungal membrane; at systemic doses also blocks human steroid synthesis (↓ cortisol/testosterone) → oral use restricted; mostly topical",
    adrs: [
      "Topical: local burning, irritation or dryness",
      "Oral (restricted): hepatotoxicity, which can be severe",
      "Oral: adrenal insufficiency and gynaecomastia",
      "QT prolongation; strong CYP3A4 inhibition with many interactions",
    ],
    keyADRs: [
      "Hepatotoxicity (oral)",
      "Local irritation (topical)",
    ],
    counselling: [
      "The shampoo is left on for 3–5 minutes before rinsing, used twice weekly for a few weeks, then less often for maintenance.",
      "Oral ketoconazole for fungal infection is no longer recommended in the UK because of the risk of liver damage.",
      "A short tingling or irritation on the skin is common — stop if a marked rash develops.",
    ],
    contraindications: [
      "Oral use: acute or chronic liver disease, or a history of hepatotoxicity with other drugs.",
      "Oral use: concomitant hepatotoxic drugs, or drugs that prolong the QT interval or are CYP3A4 substrates with a risk of arrhythmia.",
      "Pregnancy (oral).",
    ],
    cautions: [
      "Oral ketoconazole for fungal infection is no longer recommended in the UK — reserved for specialist endocrine use (e.g. Cushing's syndrome) with intensive liver monitoring.",
      "Potent CYP3A4 inhibitor with many interactions; risk of adrenal insufficiency and QT prolongation with systemic use.",
      "Topical use — local irritation or sensitisation; stop if a marked reaction develops.",
    ],
    sources: [],
  },
  {
    slug: "mebendazole",
    reference: 13,
    name: "Mebendazole",
    tags: ["Anthelmintic", "Threadworm"],
    drugClass: "Benzimidazole anthelmintic",
    indications: [
      "Threadworm (pinworm) infection",
      "Roundworm, whipworm and hookworm infection",
    ],
    mechanism:
      "Binds parasite beta-tubulin and inhibits its polymerisation into microtubules, blocking glucose uptake and depleting the worm's glycogen and ATP. The worm is immobilised and dies over a few days. It is very poorly absorbed from the gut, which limits systemic effects and confines action to intestinal worms.",
    mechanismSummary:
      "Binds helminth β-tubulin → blocks microtubule assembly → ↓ glucose uptake → glycogen/ATP depletion → worm death; minimal gut absorption → acts locally on intestinal worms",
    adrs: [
      "Abdominal pain and discomfort",
      "Flatulence",
      "Diarrhoea",
      "Rash, or (with high systemic doses for other indications) marrow suppression — both rare",
    ],
    keyADRs: ["Abdominal discomfort"],
    counselling: [
      "For threadworm, treat everyone in the household aged 2 and over at the same time, even if they have no symptoms.",
      "A second dose after 2 weeks is often advised, as eggs can survive.",
      "Alongside the medicine: wash hands and scrub nails first thing in the morning and after the toilet, wash nightwear and bed linen, and keep nails short for 2 weeks.",
      "Avoid it in pregnancy unless advised.",
    ],
    contraindications: [
      "First trimester of pregnancy (manufacturer advises avoid).",
      "Known hypersensitivity.",
    ],
    cautions: [
      "Pregnancy and breastfeeding — use only if clearly necessary.",
      "Children under 2 years — on specialist advice only.",
      "High systemic doses for tissue helminths carry a risk of marrow suppression and hepatitis (not with standard single doses).",
      "Treat the whole household for threadworm and repeat the dose after 2 weeks.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "methotrexate",
    reference: 14,
    name: "Methotrexate",
    tags: ["DMARD", "Antimetabolite", "Weekly dosing"],
    drugClass: "Folate antagonist (antimetabolite / disease-modifying antirheumatic drug)",
    indications: [
      "Rheumatoid arthritis and other inflammatory arthritides",
      "Moderate-to-severe psoriasis",
      "Crohn's disease (maintenance of remission)",
      "Some malignancies and ectopic pregnancy (high dose / specialist)",
    ],
    mechanism:
      "Competitively inhibits dihydrofolate reductase, reducing tetrahydrofolate and therefore purine and thymidylate synthesis, which is antiproliferative. At the low weekly doses used in inflammatory disease it also promotes adenosine release, giving an anti-inflammatory and immunomodulatory effect. It is used in rheumatoid arthritis, psoriasis and inflammatory bowel disease, and at high dose in some cancers.",
    mechanismSummary:
      "Inhibits dihydrofolate reductase → ↓ tetrahydrofolate → ↓ purine/thymidylate synthesis (antiproliferative); low weekly doses also ↑ adenosine → anti-inflammatory/immunomodulatory",
    adrs: [
      "Myelosuppression (can be life-threatening)",
      "Hepatotoxicity and hepatic fibrosis with long-term use",
      "Pneumonitis and pulmonary fibrosis",
      "Mucositis, nausea and diarrhoea; highly teratogenic",
    ],
    keyADRs: [
      "Myelosuppression",
      "Teratogenicity",
      "Pneumonitis",
    ],
    counselling: [
      "It is taken ONCE A WEEK on the same chosen day — taking it daily by mistake can be fatal, so always know your dose and your day.",
      "Take folic acid on a different day, as prescribed, to reduce side effects.",
      "Have the regular blood tests for full blood count and liver and kidney function.",
      "Report sore throat, fever, mouth ulcers, unusual bruising, or new breathlessness or a dry cough straight away; avoid pregnancy (both partners), limit alcohol, and check before taking trimethoprim or NSAIDs.",
    ],
    contraindications: [
      "Significant renal or hepatic impairment, active liver disease and alcohol dependence.",
      "Profound bone marrow depression; active infection; immunodeficiency.",
      "Active peptic ulceration.",
      "Pregnancy and breastfeeding, and conception by either partner (avoid for at least 3–6 months after stopping); concomitant live vaccines; significant pleural effusion or ascites.",
    ],
    cautions: [
      "Prescribe and dispense as a ONCE-WEEKLY dose — accidental daily dosing can be fatal; give folic acid on a different day.",
      "Monitor full blood count, renal and liver function (and consider a chest X-ray) at baseline and regularly.",
      "Toxicity increased by NSAIDs, trimethoprim/co-trimoxazole, penicillins, probenecid, ciclosporin and renal impairment.",
      "Extra caution in the elderly and where third-space fluid can accumulate; limit alcohol; report new dyspnoea or dry cough (pneumonitis).",
    ],
    sources: ["NHS"],
  },
  {
    slug: "metronidazole",
    reference: 15,
    name: "Metronidazole",
    tags: ["Antibiotic", "Antiprotozoal", "Nitroimidazole"],
    drugClass: "Nitroimidazole antimicrobial (anaerobic cover)",
    indications: [
      "Anaerobic bacterial infection, including intra-abdominal and dental infection",
      "Clostridioides difficile infection",
      "Bacterial vaginosis and pelvic inflammatory disease",
      "Protozoal infection — giardiasis, trichomoniasis, amoebiasis",
    ],
    mechanism:
      "In anaerobic bacteria and protozoa the nitro group is reduced by ferredoxin-type electron transport systems into reactive nitroso radicals that damage microbial DNA, causing strand breaks and cell death. Aerobic organisms lack this reducing capacity, so the effect is selective for anaerobes and protozoa such as Giardia, Trichomonas and amoebae.",
    mechanismSummary:
      "Nitro group reduced inside anaerobes/protozoa → reactive radicals → microbial DNA strand breaks → cell death; selective because aerobes cannot reduce the drug",
    adrs: [
      "Nausea, metallic taste, furred tongue",
      "Disulfiram-like reaction with alcohol — flushing, vomiting, tachycardia",
      "Peripheral neuropathy and CNS effects with prolonged or high-dose use",
      "Dark urine (harmless)",
    ],
    keyADRs: ["Disulfiram-like reaction with alcohol"],
    counselling: [
      "Do not drink any alcohol during the course and for 48 hours after — it can cause severe flushing, nausea, vomiting and a racing heartbeat (check mouthwashes and some medicine elixirs too).",
      "Take it with or after food to reduce nausea; a metallic taste is common and settles.",
      "Report numbness or tingling in the hands or feet, especially on a longer course.",
      "Complete the full course.",
    ],
    contraindications: [
      "Known hypersensitivity to nitroimidazoles.",
    ],
    cautions: [
      "Avoid alcohol during treatment and for 48 hours after (including in oral solutions and some IV preparations) — disulfiram-like reaction.",
      "Hepatic impairment — reduce the dose in severe impairment.",
      "Risk of peripheral and central neurotoxicity with high doses or prolonged courses — avoid prolonged use.",
      "Potentiates warfarin, lithium, phenytoin and fluorouracil; can darken the urine; avoid high single doses in pregnancy.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "nystatin",
    reference: 16,
    name: "Nystatin",
    tags: ["Antifungal", "Polyene", "Not absorbed"],
    drugClass: "Polyene antifungal",
    indications: [
      "Oral and oropharyngeal candidiasis",
      "Cutaneous and mucocutaneous candidiasis",
      "Prevention of candidiasis in at-risk patients",
    ],
    mechanism:
      "Binds ergosterol in the fungal cell membrane, forming pores that make the membrane leaky to potassium and other ions, killing the fungus (mainly Candida). It is not absorbed from the gut or skin, so it acts only where it is applied — used for oral, oropharyngeal and cutaneous candidiasis.",
    mechanismSummary:
      "Binds fungal membrane ergosterol → forms ion pores → K⁺/ion leak → fungal cell death (mainly Candida); not absorbed → acts only on contact (mouth, gut lumen, skin)",
    adrs: [
      "Nausea and vomiting (oral)",
      "Diarrhoea",
      "Oral irritation or a bad taste",
      "Rash or contact sensitisation (rare)",
    ],
    keyADRs: [
      "Nausea",
      "Local irritation",
    ],
    counselling: [
      "For oral thrush, use it after food and after any inhaler doses; hold or swish the suspension around the mouth, in contact with the affected areas, for as long as possible before swallowing.",
      "Keep going for at least 48 hours after the mouth looks and feels better, to stop it coming back.",
      "If you wear dentures, clean and soak them, as Candida lives on them.",
    ],
    contraindications: [
      "Hypersensitivity to nystatin.",
    ],
    cautions: [
      "Not absorbed — ineffective for systemic or deep fungal infection.",
      "Continue for at least 48 hours after clinical cure to prevent relapse.",
      "Treat dentures alongside oral infection.",
      "Local irritation or sensitisation — stop if a marked reaction develops.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "proguanil",
    reference: 17,
    name: "Proguanil",
    tags: ["Antimalarial", "Prophylaxis", "Antifolate"],
    drugClass: "Biguanide antimalarial (dihydrofolate reductase inhibitor via active metabolite)",
    indications: [
      "Malaria prophylaxis (with atovaquone)",
      "Treatment of uncomplicated falciparum malaria (with atovaquone)",
    ],
    mechanism:
      "Metabolised to cycloguanil, which inhibits plasmodial dihydrofolate reductase, blocking folate-dependent synthesis of parasite nucleic acids. Proguanil itself also potentiates atovaquone by collapsing the parasite mitochondrial membrane potential, which is why the two are combined (atovaquone–proguanil) for prophylaxis and treatment.",
    mechanismSummary:
      "Active metabolite (cycloguanil) inhibits plasmodial dihydrofolate reductase → ↓ parasite folate/nucleic acid synthesis; also potentiates atovaquone by collapsing parasite mitochondrial membrane potential",
    adrs: [
      "Nausea, diarrhoea and abdominal pain",
      "Mouth ulcers and stomatitis",
      "Headache",
      "Marrow suppression in severe renal impairment (rare)",
    ],
    keyADRs: [
      "GI upset",
      "Mouth ulcers",
    ],
    counselling: [
      "For travel, start the course before entering the malaria area, take it every day at the same time with food or a milky drink, and continue it for 7 days after leaving (for atovaquone–proguanil).",
      "No tablet is 100% effective — also use bite avoidance (repellent, nets, covering up) and seek urgent medical care for any fever during or up to a year after travel.",
      "Take it with food to reduce stomach upset.",
    ],
    contraindications: [
      "Known hypersensitivity to proguanil or atovaquone.",
    ],
    cautions: [
      "Reduce the dose, or avoid atovaquone–proguanil, in significant renal impairment (creatinine clearance below 30 mL/min) — risk of marrow suppression.",
      "Enhances the effect of warfarin.",
      "Separate from indigestion remedies and tetracyclines by at least 1 hour; take with food or a milky drink.",
      "No regimen is fully protective — combine with bite avoidance; folate supplementation is advised in pregnancy.",
    ],
    sources: [],
  },
  {
    slug: "cimetidine",
    reference: 18,
    name: "Cimetidine",
    tags: ["H2 receptor antagonist", "Acid suppression", "Enzyme inhibitor"],
    drugClass: "Histamine H2 receptor antagonist",
    indications: [
      "Gastric and duodenal ulcer",
      "Gastro-oesophageal reflux disease",
      "Reduction of gastric acid where indicated (e.g. Zollinger-Ellison syndrome)",
    ],
    mechanism:
      "Competitively blocks histamine H2 receptors on gastric parietal cells, reducing histamine-driven cyclic AMP generation and thereby basal and stimulated gastric acid secretion. Unlike newer H2 antagonists it inhibits several cytochrome P450 enzymes and has weak antiandrogenic activity (it binds androgen receptors and raises prolactin).",
    mechanismSummary:
      "Competitively blocks parietal-cell H2 receptors → ↓ histamine-driven cAMP → ↓ gastric acid secretion; also inhibits CYP450 enzymes and has antiandrogenic activity",
    adrs: [
      "Diarrhoea, dizziness and headache",
      "Gynaecomastia and, rarely, impotence (antiandrogenic effect)",
      "Confusion, especially in older people or renal impairment",
      "Interaction-related toxicity — raises levels of warfarin, phenytoin, theophylline and others",
    ],
    keyADRs: [
      "Drug interactions (CYP450 inhibition)",
      "Gynaecomastia",
    ],
    counselling: [
      "Tell your prescriber what else you take — it slows the breakdown of several drugs, including warfarin, phenytoin and theophylline.",
      "Report breast tenderness or swelling; this reverses on stopping.",
      "Newer alternatives (e.g. famotidine, or a proton pump inhibitor) are often preferred because they have fewer interactions.",
      "See a doctor rather than self-treating if you have difficulty or pain on swallowing, unintended weight loss, or black stools.",
    ],
    contraindications: [
      "No absolute contraindication other than hypersensitivity.",
    ],
    cautions: [
      "Can mask the symptoms of gastric cancer — exclude malignancy and investigate alarm features (weight loss, dysphagia, GI bleeding) in middle-aged or older patients with new dyspepsia.",
      "Inhibits several cytochrome P450 enzymes — raises levels of warfarin, phenytoin, theophylline and others.",
      "Reduce the dose in renal and hepatic impairment.",
      "Elderly or severely ill patients — risk of confusion; antiandrogenic effects (gynaecomastia) that reverse on stopping.",
    ],
    sources: [],
  },
  {
    slug: "rifampicin",
    reference: 19,
    name: "Rifampicin",
    tags: ["Antibiotic", "Antimycobacterial", "Enzyme inducer"],
    drugClass: "Rifamycin antibiotic (bactericidal antimycobacterial)",
    indications: [
      "Tuberculosis (in combination)",
      "Leprosy (in combination)",
      "Prophylaxis of meningococcal and Haemophilus influenzae type b contacts",
      "Serious staphylococcal infection, e.g. prosthetic material (in combination)",
    ],
    mechanism:
      "Binds the beta subunit of bacterial DNA-dependent RNA polymerase, inhibiting initiation of RNA synthesis. It is bactericidal against Mycobacterium tuberculosis and many other organisms and penetrates tissues and phagocytes well. It is one of the most potent inducers of hepatic cytochrome P450 enzymes and drug transporters.",
    mechanismSummary:
      "Binds β subunit of bacterial RNA polymerase → blocks RNA synthesis initiation → bactericidal (especially M. tuberculosis); very potent CYP450 inducer",
    adrs: [
      "Orange-red discoloration of urine, tears, sweat and other secretions (harmless; stains contact lenses)",
      "Hepatotoxicity — raised transaminases, hepatitis",
      "Gastrointestinal upset",
      "Flu-like syndrome, thrombocytopenia and (rarely) acute kidney injury, especially with intermittent dosing",
    ],
    keyADRs: [
      "Hepatotoxicity",
      "Enzyme induction (drug interactions)",
    ],
    counselling: [
      "Your urine, sweat and tears will turn orange-red — this is harmless, but it permanently stains soft contact lenses, so switch to glasses.",
      "It makes many drugs less effective, including hormonal contraceptives (use additional non-hormonal contraception), warfarin, and some HIV and transplant medicines — check every new medicine.",
      "Take it on an empty stomach, 30–60 minutes before food, and complete the full course.",
      "Report yellowing of the eyes, dark urine, nausea or abdominal pain.",
    ],
    contraindications: [
      "Jaundice.",
      "Known hypersensitivity to rifamycins.",
      "Concomitant use of certain HIV protease inhibitors.",
    ],
    cautions: [
      "Hepatotoxicity — check liver function before treatment and monitor, especially with pre-existing liver disease or alcohol dependence.",
      "One of the most potent enzyme inducers — reduces the effect of hormonal contraceptives (use additional non-hormonal contraception), warfarin, corticosteroids, ciclosporin, many antivirals and methadone.",
      "Colours urine, tears, sweat and saliva orange-red and permanently stains soft contact lenses.",
      "Intermittent (non-daily) therapy is linked with flu-like syndrome, thrombocytopenia and acute kidney injury; porphyria.",
    ],
    sources: [],
  },
  {
    slug: "sodium-cromoglicate",
    reference: 20,
    name: "Sodium cromoglicate",
    tags: ["Mast cell stabiliser", "Allergy prophylaxis"],
    drugClass: "Mast cell stabiliser (chromone)",
    indications: [
      "Prophylaxis of allergic conjunctivitis (eye drops)",
      "Prophylaxis of allergic rhinitis (nasal spray)",
      "Prophylaxis of asthma and food allergy (less commonly used)",
    ],
    mechanism:
      "Stabilises the mast cell membrane, inhibiting degranulation and the release of histamine and other inflammatory mediators in response to allergen. It is prophylactic, not a reliever, so it must be used regularly before allergen exposure. It is poorly absorbed, so it is applied topically (eye drops, inhaler, nasal spray) or acts locally in the gut.",
    mechanismSummary:
      "Stabilises mast cell membranes → ↓ allergen-triggered degranulation → ↓ histamine/mediator release; prophylactic only (regular use before exposure); poorly absorbed, used topically",
    adrs: [
      "Transient stinging or burning of the eyes on instillation",
      "Local irritation, unpleasant taste, cough or transient bronchospasm (inhaler)",
      "Nasal irritation or sneezing (nasal spray)",
      "Hypersensitivity (uncommon)",
    ],
    keyADRs: ["Local stinging / irritation"],
    counselling: [
      "It works by prevention, not by relieving symptoms that are already present — use it regularly (usually four times a day) and start before the allergy season or before contact with a known trigger.",
      "It can take days to weeks of regular use to reach full effect.",
      "For allergic conjunctivitis, do not wear soft contact lenses during treatment; a brief sting after the drops is normal.",
    ],
    contraindications: [
      "Hypersensitivity to sodium cromoglicate.",
    ],
    cautions: [
      "Prophylactic only — it will not relieve symptoms that are already present and must be used regularly.",
      "For asthma, do not stop it abruptly (symptoms may recur over days) and never rely on it for an acute attack.",
      "Inhaled powder or nebuliser solution can cause cough or transient bronchospasm — a prior bronchodilator may help.",
      "Eye drops — do not wear soft contact lenses during treatment.",
    ],
    sources: [],
  },
  {
    slug: "sodium-valproate",
    reference: 21,
    name: "Sodium valproate",
    tags: ["Antiepileptic", "Mood stabiliser", "Teratogen"],
    drugClass: "Broad-spectrum antiepileptic (and mood stabiliser)",
    indications: [
      "Generalised and focal epilepsy, including absence and myoclonic seizures",
      "Acute mania in bipolar disorder",
      "Migraine prophylaxis (off-label)",
    ],
    mechanism:
      "Increases brain GABA by promoting its synthesis and reducing its breakdown, blocks voltage-gated sodium channels, and modulates T-type calcium currents, together reducing neuronal excitability across many seizure types. It is also a weak histone deacetylase inhibitor, which is thought to contribute to its teratogenicity.",
    mechanismSummary:
      "↑ brain GABA + blocks voltage-gated Na⁺ channels + modulates T-type Ca²⁺ currents → ↓ neuronal excitability (broad-spectrum); HDAC inhibition contributes to teratogenicity",
    adrs: [
      "Hepatotoxicity (rare, can be fatal; highest risk in young children)",
      "Acute pancreatitis",
      "Highly teratogenic — neural tube defects and neurodevelopmental disorders",
      "Tremor, weight gain, hair thinning, thrombocytopenia, hyperammonaemia",
    ],
    keyADRs: [
      "Teratogenicity",
      "Hepatotoxicity",
      "Pancreatitis",
    ],
    counselling: [
      "It must not be used in anyone able to become pregnant unless the conditions of the Pregnancy Prevention Programme are met (highly effective contraception and annual specialist review) — it causes serious birth defects and developmental problems.",
      "Report persistent vomiting, abdominal pain, drowsiness, or spontaneous bruising or bleeding — signs of liver, pancreas or platelet problems — especially early in treatment.",
      "Do not stop it suddenly.",
      "Take it with food; weight gain and mild hair loss are common.",
    ],
    contraindications: [
      "Women and girls of childbearing potential unless the conditions of the Pregnancy Prevention Programme are met.",
      "Pregnancy — absolute for bipolar disorder; in epilepsy only if there is no other effective treatment.",
      "Personal or family history of severe hepatic dysfunction; acute porphyrias.",
      "Known urea cycle disorders; known POLG-related mitochondrial disorders (and children under 2 in whom one is suspected).",
    ],
    cautions: [
      "Hepatotoxicity risk is highest in the first 6 months and in children under 3 or with metabolic disorders — check liver function before and during early treatment.",
      "Risk of acute pancreatitis — stop if it occurs; risk of hyperammonaemic encephalopathy.",
      "Systemic lupus erythematosus; thrombocytopenia and impaired coagulation — check before surgery.",
      "Do not stop abruptly (status epilepticus); interacts with lamotrigine, phenobarbital and carbapenems.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "tamoxifen",
    reference: 22,
    name: "Tamoxifen",
    tags: ["SERM", "Breast cancer", "Anti-oestrogen"],
    drugClass: "Selective oestrogen receptor modulator (SERM)",
    indications: [
      "Adjuvant treatment of oestrogen-receptor-positive breast cancer",
      "Treatment of metastatic breast cancer",
      "Reduction of breast cancer risk in high-risk women",
    ],
    mechanism:
      "Competitively binds the oestrogen receptor, acting as an antagonist in breast tissue (blocking oestrogen-driven proliferation of ER-positive tumour cells) but as a partial agonist in the endometrium, bone and liver. Its active metabolite endoxifen, formed by CYP2D6, is the main effector.",
    mechanismSummary:
      "Binds oestrogen receptor → antagonist in breast (↓ ER-positive tumour cell proliferation) but partial agonist in endometrium/bone/liver; active metabolite endoxifen (CYP2D6) is the main effector",
    adrs: [
      "Menopausal symptoms — hot flushes, sweats, vaginal dryness or discharge",
      "Venous thromboembolism (increased risk)",
      "Endometrial hyperplasia and endometrial cancer (from partial agonism)",
      "Menstrual changes and mood changes; rarely visual or retinal changes",
    ],
    keyADRs: [
      "Venous thromboembolism",
      "Endometrial cancer",
    ],
    counselling: [
      "Report any abnormal vaginal bleeding, or new pelvic pain, promptly — it needs investigation because of a small increased risk of womb cancer.",
      "Seek urgent help for calf swelling or pain, chest pain or breathlessness (blood clot), and mention tamoxifen before surgery or a long period of immobility.",
      "It is usually taken for 5–10 years; hot flushes are common and often ease over time.",
      "Tell your prescriber about other medicines, as some antidepressants can reduce its activation.",
    ],
    contraindications: [
      "Pregnancy, and for 2 months after stopping — teratogenic.",
      "Breastfeeding.",
      "Breast cancer risk reduction in women with a history of venous thromboembolism or an inherited thrombophilia.",
    ],
    cautions: [
      "Increased risk of venous thromboembolism — stop before major elective surgery and consider stopping during prolonged immobilisation.",
      "Endometrial hyperplasia and cancer — investigate any abnormal vaginal bleeding promptly.",
      "Use non-hormonal contraception; avoid CYP2D6 inhibitors (paroxetine, fluoxetine, bupropion) which reduce activation to endoxifen.",
      "Rare visual or retinal changes; can cause an initial tumour flare in metastatic disease.",
    ],
    sources: [],
  },
  {
    slug: "terbinafine",
    reference: 23,
    name: "Terbinafine",
    tags: ["Antifungal", "Allylamine", "Dermatophyte"],
    drugClass: "Allylamine antifungal",
    indications: [
      "Fungal (dermatophyte) nail infection — oral",
      "Tinea corporis, cruris and pedis — oral or topical",
      "Pityriasis versicolor (topical)",
    ],
    mechanism:
      "Inhibits fungal squalene epoxidase, an early enzyme in ergosterol synthesis. This depletes ergosterol (fungistatic) and causes toxic intracellular accumulation of squalene (fungicidal). It is highly active against dermatophytes and concentrates in skin, nails and hair, making it first-line for fungal nail infection and tinea.",
    mechanismSummary:
      "Inhibits fungal squalene epoxidase → ↓ ergosterol (fungistatic) + toxic squalene accumulation (fungicidal); concentrates in skin/nails/hair → first-line for dermatophyte nail and skin infection",
    adrs: [
      "GI upset — nausea, diarrhoea, abdominal fullness",
      "Taste disturbance or loss (can be prolonged)",
      "Headache and rash",
      "Hepatotoxicity (rare, sometimes serious); rarely severe skin reactions and lupus-like reactions",
    ],
    keyADRs: [
      "Taste disturbance",
      "Hepatotoxicity (rare)",
    ],
    counselling: [
      "Oral courses are long — often about 6 weeks for fingernails and 3–6 months for toenails — and the nail keeps looking abnormal until it grows out.",
      "Report loss of taste or appetite, or yellowing of the eyes or skin, dark urine, nausea or abdominal pain, and stop the tablets.",
      "A blood test for liver function is usually done before and during treatment.",
      "The 1% cream for athlete's foot is used for 1–2 weeks.",
    ],
    contraindications: [
      "Chronic or active liver disease (oral use).",
    ],
    cautions: [
      "Assess liver function before oral treatment and if it lasts beyond 4–6 weeks or hepatic symptoms occur — stop if liver injury is suspected.",
      "Significant renal impairment (creatinine clearance below 50 mL/min) — halve the dose or avoid.",
      "Risk of severe cutaneous reactions and DRESS — stop for a progressive rash; may exacerbate or precipitate lupus erythematosus.",
      "Taste and smell disturbance, which can be prolonged; psoriasis may worsen; inhibits CYP2D6 (tricyclics, beta blockers, some antiarrhythmics and SSRIs).",
    ],
    sources: ["NHS"],
  },
  {
    slug: "theophylline",
    reference: 24,
    name: "Theophylline",
    tags: ["Bronchodilator", "Methylxanthine", "Narrow therapeutic index"],
    drugClass: "Methylxanthine bronchodilator",
    indications: [
      "Add-on bronchodilator in poorly controlled asthma",
      "Add-on bronchodilator in COPD",
      "Severe acute asthma (as IV aminophylline)",
    ],
    mechanism:
      "Non-selectively inhibits phosphodiesterases (raising cyclic AMP and GMP) and antagonises adenosine receptors, producing bronchodilation, some anti-inflammatory effect, and increased diaphragmatic contractility and respiratory drive. It has a narrow therapeutic index, is metabolised by CYP1A2, and its clearance is altered by smoking, infection, heart failure and many drugs.",
    mechanismSummary:
      "Inhibits phosphodiesterases (↑ cAMP) + blocks adenosine receptors → bronchodilation + ↑ respiratory drive; narrow therapeutic index; CYP1A2-metabolised (clearance changed by smoking, illness, interacting drugs)",
    adrs: [
      "Nausea, vomiting and GI upset",
      "Tachycardia, palpitations and arrhythmias",
      "Tremor, headache, insomnia and agitation",
      "In toxicity: seizures, marked arrhythmias and hypokalaemia",
    ],
    keyADRs: ["Narrow therapeutic index (toxicity: arrhythmia, seizures)"],
    counselling: [
      "Stay on the same brand — different brands are absorbed differently.",
      "Report nausea, vomiting, palpitations, tremor or feeling agitated — these can be signs the level is too high, and a blood level may be checked.",
      "Many things change the level: tell your prescriber if you start or stop smoking, get a significant infection, or start new medicines (e.g. ciprofloxacin, clarithromycin, cimetidine).",
      "Take the doses as prescribed and do not double up on a missed dose.",
    ],
    contraindications: [
      "Known hypersensitivity to theophylline or other xanthines.",
    ],
    cautions: [
      "Narrow therapeutic index — monitor plasma theophylline concentration (about 5 hours after a dose at steady state).",
      "Clearance falls (toxicity risk) in the elderly, heart failure, hepatic impairment, viral infection, fever, and with enzyme inhibitors (cimetidine, ciprofloxacin, clarithromycin, fluconazole).",
      "Clearance rises (reduced effect) with smoking and enzyme inducers (rifampicin, carbamazepine, phenytoin, St John's wort) — review the dose if smoking status changes.",
      "Cardiac arrhythmia, hyperthyroidism, peptic ulcer and epilepsy; risk of hypokalaemia with beta-2 agonists, corticosteroids and diuretics; maintain the same brand.",
    ],
    sources: [],
  },
  {
    slug: "trastuzumab",
    reference: 25,
    name: "Trastuzumab",
    tags: ["Monoclonal antibody", "HER2-positive cancer", "Targeted therapy"],
    drugClass: "Recombinant humanised anti-HER2 monoclonal antibody",
    indications: [
      "HER2-positive early and metastatic breast cancer",
      "HER2-positive metastatic gastric or gastro-oesophageal junction cancer",
    ],
    mechanism:
      "Binds the extracellular domain of the HER2 (ERBB2) receptor, which is overexpressed in some breast and gastric cancers. This blocks HER2 downstream growth signalling, promotes receptor internalisation, and flags the cell for antibody-dependent cell-mediated cytotoxicity by immune effector cells. It is only effective in HER2-positive tumours.",
    mechanismSummary:
      "Binds extracellular domain of overexpressed HER2 receptor → blocks HER2 growth signalling + triggers antibody-dependent immune cell killing; effective only in HER2-positive tumours",
    adrs: [
      "Infusion-related reactions — fever, chills — especially with the first dose",
      "Cardiotoxicity — reduced left ventricular ejection fraction and heart failure (more with anthracyclines)",
      "Diarrhoea and rash",
      "Increased infection risk",
    ],
    keyADRs: ["Cardiotoxicity (reduced ejection fraction / heart failure)"],
    counselling: [
      "Your heart function (an echocardiogram or MUGA scan) is checked before treatment and regularly during it — report breathlessness, ankle swelling, a persistent cough, or waking at night breathless.",
      "Infusion reactions such as chills and fever are commonest with the first dose and you will be monitored for them; tell staff if you feel unwell during the infusion.",
      "Tell your team if you might be pregnant — it must be avoided in pregnancy.",
    ],
    contraindications: [
      "Baseline resting left ventricular ejection fraction below about 50%.",
      "Severe dyspnoea at rest from complications of advanced malignancy.",
      "Known hypersensitivity to trastuzumab, murine proteins or excipients.",
    ],
    cautions: [
      "Cardiotoxicity — assess LVEF before treatment and roughly every 3 months during it, and withhold for a significant fall; risk is greater with or soon after anthracyclines.",
      "Pre-existing cardiac failure, uncontrolled hypertension or coronary artery disease.",
      "Infusion-related reactions — observe during and after the first infusion (fever, chills, bronchospasm).",
      "Pulmonary events / interstitial lung disease; avoid pregnancy during treatment and for 7 months after the last dose (oligohydramnios).",
    ],
    sources: [],
  },
];
