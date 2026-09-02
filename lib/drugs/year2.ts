import { Drug } from "@/lib/types";

// Year 2 — study content written from standard UK pharmacology teaching and
// cross-checked against the NHS medicines pages (nhs.uk/medicines/...) in
// Sept 2026. BNF and DrugBank could not be reached programmatically, so
// `sources` lists only what was actually confirmed: "NHS" where a live NHS
// page corroborated the entry, and [] where no reachable source could be
// checked (verify these against the BNF before relying on them).
export const year2Drugs: Drug[] = [
  {
    slug: "alendronic-acid",
    reference: 1,
    name: "Alendronic acid",
    tags: ["Bisphosphonate", "Bone health"],
    drugClass: "Nitrogen-containing bisphosphonate",
    indications: [
      "Treatment and prevention of osteoporosis",
      "Corticosteroid-induced osteoporosis",
      "Osteoporosis in men",
    ],
    mechanism:
      "Binds avidly to hydroxyapatite at sites of active bone remodelling and is taken up by osteoclasts, where it inhibits farnesyl pyrophosphate synthase in the mevalonate pathway. This disrupts the osteoclast cytoskeleton and ruffled border, reducing bone resorption and increasing bone mineral density.",
    mechanismSummary:
      "Binds bone hydroxyapatite → taken up by osteoclasts → inhibits farnesyl pyrophosphate synthase (mevalonate pathway) → ↓ osteoclast resorption → ↑ bone mineral density",
    adrs: [
      "Oesophagitis and oesophageal ulceration",
      "Dyspepsia and abdominal pain",
      "Musculoskeletal (bone, joint or muscle) pain",
      "Osteonecrosis of the jaw and atypical femoral fractures (rare, long-term use)",
    ],
    keyADRs: ["Oesophagitis and oesophageal ulceration"],
    counselling: [
      "Take on an empty stomach first thing in the morning, swallowed whole with a full glass of plain water.",
      "Stay sitting or standing upright for at least 30 minutes afterwards, and do not eat, drink anything else or take other medicines in that time.",
      "Stop and seek advice if you develop new heartburn, or pain or difficulty on swallowing.",
      "Keep up good dental hygiene and tell your dentist you take it before any invasive dental work; ensure enough calcium and vitamin D.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "allopurinol",
    reference: 2,
    name: "Allopurinol",
    tags: ["Xanthine oxidase inhibitor", "Gout"],
    drugClass: "Xanthine oxidase inhibitor (urate-lowering)",
    indications: [
      "Long-term prevention of gout",
      "Prevention of uric acid renal stones",
      "Prevention of tumour lysis syndrome hyperuricaemia",
    ],
    mechanism:
      "Allopurinol and its active metabolite oxypurinol inhibit xanthine oxidase, the enzyme that converts hypoxanthine to xanthine and xanthine to uric acid. This lowers serum and urinary urate, allowing existing urate crystal deposits to dissolve over time and preventing new ones from forming.",
    mechanismSummary:
      "Inhibits xanthine oxidase (via active metabolite oxypurinol) → ↓ conversion of hypoxanthine/xanthine to uric acid → ↓ serum urate → prevents and slowly dissolves urate crystal deposits",
    adrs: [
      "Skin rash (may herald severe cutaneous reactions — SJS/TEN/DRESS)",
      "Acute gout flare on initiation",
      "Nausea and diarrhoea",
      "Deranged liver enzymes",
    ],
    keyADRs: ["Skin rash (risk of severe cutaneous reaction)"],
    counselling: [
      "Do not start it during an acute attack — wait until the flare has settled.",
      "Flares are common in the first weeks; keep taking allopurinol through a flare and use the NSAID or colchicine cover you have been prescribed.",
      "Stop and seek urgent advice if a rash develops, especially with fever, blistering or mouth ulcers.",
      "Take it after food with plenty of fluid.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "dapagliflozin",
    reference: 3,
    name: "Dapagliflozin",
    tags: ["SGLT2 inhibitor", "Diabetes", "Cardiovascular"],
    drugClass: "Sodium-glucose co-transporter 2 (SGLT2) inhibitor",
    indications: [
      "Type 2 diabetes mellitus",
      "Chronic heart failure",
      "Chronic kidney disease",
    ],
    mechanism:
      "Blocks SGLT2 in the proximal renal tubule, reducing glucose reabsorption and increasing urinary glucose excretion. This lowers blood glucose independently of insulin and produces a mild osmotic diuresis and natriuresis, which underlies its benefit in heart failure and chronic kidney disease.",
    mechanismSummary:
      "Blocks SGLT2 in proximal tubule → ↓ glucose reabsorption → ↑ urinary glucose excretion (insulin-independent) + osmotic diuresis/natriuresis → ↓ glucose, BP and cardiac/renal load",
    adrs: [
      "Genital fungal infection (thrush)",
      "Urinary tract infection",
      "Volume depletion and hypotension",
      "Diabetic ketoacidosis (can occur with near-normal blood glucose)",
    ],
    keyADRs: ["Diabetic ketoacidosis (may be euglycaemic)"],
    counselling: [
      "Keep the genital area clean and dry; a bout of thrush is usually easily treated — seek advice if it keeps coming back.",
      "Follow sick-day rules: stop it temporarily if you are acutely unwell, dehydrated or not eating and drinking normally.",
      "Seek urgent help for nausea, vomiting, abdominal pain, deep breathing or a sweet/fruity breath smell, even if your glucose is not high.",
      "Report severe pain, swelling or redness of the genitals or perineum urgently.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "amiodarone",
    reference: 4,
    name: "Amiodarone",
    tags: ["Antiarrhythmic", "Class III", "Cardiovascular"],
    drugClass: "Class III antiarrhythmic (predominantly potassium-channel blocker)",
    indications: [
      "Atrial fibrillation and atrial flutter",
      "Paroxysmal supraventricular tachycardia",
      "Life-threatening ventricular arrhythmias (VT, VF)",
    ],
    mechanism:
      "Predominantly blocks potassium channels to prolong the cardiac action potential and refractory period, but also blocks sodium and calcium channels and has non-competitive beta-blocking activity. This broad effect suppresses a wide range of atrial and ventricular arrhythmias. It is highly lipophilic with a very long half-life of weeks to months.",
    mechanismSummary:
      "Blocks K⁺ channels (plus Na⁺, Ca²⁺ and β activity) → ↑ action potential duration and refractory period → suppresses atrial and ventricular arrhythmias; very long half-life (weeks–months)",
    adrs: [
      "Thyroid dysfunction — hypo- or hyperthyroidism (high iodine content)",
      "Pulmonary toxicity and fibrosis",
      "Hepatotoxicity",
      "Corneal microdeposits, photosensitivity and slate-grey skin discoloration",
    ],
    keyADRs: [
      "Pulmonary toxicity and fibrosis",
      "Thyroid dysfunction",
    ],
    counselling: [
      "Use a high-factor sunblock and cover exposed skin — light sensitivity can persist for months after stopping.",
      "Report new or worsening breathlessness or a dry cough promptly, as this can indicate lung toxicity.",
      "Attend regular thyroid and liver function blood tests.",
      "See an optician if you develop visual haloes or blurring; interactions (e.g. with warfarin and digoxin) persist for a long time after stopping.",
    ],
    sources: [],
  },
  {
    slug: "amitriptyline",
    reference: 5,
    name: "Amitriptyline",
    tags: ["Tricyclic antidepressant", "Neuropathic pain"],
    drugClass: "Tricyclic antidepressant (TCA)",
    indications: [
      "Neuropathic pain",
      "Migraine prophylaxis",
      "Depression (less commonly, given toxicity in overdose)",
    ],
    mechanism:
      "Inhibits reuptake of noradrenaline and serotonin at the synapse, increasing monoamine availability. It also antagonises muscarinic, histamine H1 and alpha-1 adrenergic receptors, which accounts for most of its side effects. At the low doses used for neuropathic pain it modulates descending pain pathways.",
    mechanismSummary:
      "Blocks noradrenaline + serotonin reuptake → ↑ synaptic monoamines; also blocks muscarinic/H1/α1 receptors → antimuscarinic, sedative and postural-hypotension effects",
    adrs: [
      "Antimuscarinic effects — dry mouth, constipation, blurred vision, urinary retention",
      "Drowsiness",
      "Postural hypotension and dizziness",
      "QT prolongation and arrhythmia; dangerous in overdose",
    ],
    keyADRs: ["Antimuscarinic effects (dry mouth, constipation, urinary retention)"],
    counselling: [
      "Take it in the evening because it causes drowsiness; this can carry over to the next morning, so take care driving.",
      "For nerve pain it works at lower doses than for depression and can take a few weeks to help.",
      "Rise slowly from sitting or lying to reduce dizziness.",
      "Do not stop suddenly — the dose should be reduced gradually.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "buprenorphine",
    reference: 6,
    name: "Buprenorphine",
    tags: ["Opioid", "Partial agonist", "Controlled drug"],
    drugClass: "Partial mu-opioid receptor agonist",
    indications: [
      "Moderate-to-severe chronic pain",
      "Opioid dependence — substitution therapy",
    ],
    mechanism:
      "Binds with high affinity to mu-opioid receptors and acts as a partial agonist, producing analgesia. Its high receptor affinity combined with partial activity gives a ceiling effect on respiratory depression and lets it displace or block full agonists, which is why it is used both for pain and in opioid dependence.",
    mechanismSummary:
      "High-affinity partial µ-opioid agonist → analgesia with a ceiling on respiratory depression; high affinity can displace full agonists (used in pain and opioid dependence)",
    adrs: [
      "Nausea and vomiting",
      "Constipation",
      "Drowsiness and dizziness",
      "Application-site reactions (patches); respiratory depression (less than with full agonists)",
    ],
    keyADRs: ["Constipation"],
    counselling: [
      "For patches: apply to clean, dry, non-hairy skin on the upper body, rotate the site, and keep the patch away from direct heat (hot baths, electric blankets) which increases absorption.",
      "Fold used patches sticky-side together and dispose of them safely — they still contain active drug.",
      "Do not drink alcohol, and take care with driving until you know how it affects you.",
      "Use laxatives as advised to prevent constipation.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "carbamazepine",
    reference: 7,
    name: "Carbamazepine",
    tags: ["Antiepileptic", "Sodium-channel blocker", "Enzyme inducer"],
    drugClass: "Antiepileptic (voltage-gated sodium-channel blocker)",
    indications: [
      "Focal and generalised tonic-clonic seizures",
      "Trigeminal neuralgia",
      "Bipolar disorder unresponsive to lithium",
    ],
    mechanism:
      "Stabilises the inactivated state of voltage-gated sodium channels, reducing repetitive neuronal firing and the spread of seizure activity. It is also a potent inducer of hepatic cytochrome P450 enzymes, including induction of its own metabolism (autoinduction).",
    mechanismSummary:
      "Stabilises inactivated voltage-gated Na⁺ channels → ↓ repetitive neuronal firing → ↓ seizure spread; strong CYP450 inducer (including autoinduction)",
    adrs: [
      "Dizziness, drowsiness, diplopia and ataxia (dose-related)",
      "Hyponatraemia (SIADH-like effect)",
      "Blood dyscrasias — leucopenia, thrombocytopenia, aplastic anaemia",
      "Serious skin reactions — SJS/TEN (higher risk with HLA-B*1502)",
    ],
    keyADRs: [
      "Serious skin reactions (SJS/TEN)",
      "Hyponatraemia",
    ],
    counselling: [
      "Report fever, sore throat, mouth ulcers, bruising or bleeding, or any rash promptly — these can signal blood or skin problems.",
      "It speeds up the breakdown of many drugs, including hormonal contraceptives, which can become unreliable — discuss contraception.",
      "Do not stop it suddenly because of the risk of seizures.",
      "Blood tests monitor sodium, blood counts and liver function.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "carbimazole",
    reference: 8,
    name: "Carbimazole",
    tags: ["Antithyroid", "Thyroid"],
    drugClass: "Antithyroid drug (thionamide)",
    indications: [
      "Hyperthyroidism, including Graves' disease",
      "Preparation for thyroidectomy or radioiodine",
    ],
    mechanism:
      "Converted to its active metabolite methimazole, which inhibits thyroid peroxidase, blocking iodination of tyrosine residues and their coupling to form T3 and T4. It reduces synthesis of new thyroid hormone but has no effect on hormone already stored, so the clinical response takes several weeks.",
    mechanismSummary:
      "Active metabolite (methimazole) inhibits thyroid peroxidase → ↓ iodination and coupling → ↓ new T3/T4 synthesis; no effect on stored hormone → response takes weeks",
    adrs: [
      "Bone marrow suppression and agranulocytosis",
      "Rash and pruritus",
      "Nausea, headache and arthralgia",
      "Hepatic disorders; congenital malformations if used in early pregnancy",
    ],
    keyADRs: ["Agranulocytosis"],
    counselling: [
      "Report a sore throat, mouth ulcers, fever, bruising or feeling generally unwell straight away and ask for an urgent full blood count — stop the drug until told otherwise.",
      "It can take 4–8 weeks to feel the full benefit; a beta blocker may be used for symptom relief in the meantime.",
      "Use effective contraception and tell your doctor promptly if you might be pregnant.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "carbocisteine",
    reference: 9,
    name: "Carbocisteine",
    tags: ["Mucolytic", "Respiratory"],
    drugClass: "Mucolytic",
    indications: [
      "Reduction of sputum viscosity in chronic productive cough (e.g. COPD, bronchiectasis)",
    ],
    mechanism:
      "Alters the composition of bronchial mucus by affecting sialyltransferase activity in goblet cells, reducing the viscosity of sputum and making it easier to cough up. This can reduce the frequency and severity of infective exacerbations in chronic respiratory disease.",
    mechanismSummary:
      "Alters goblet-cell sialyltransferase activity → changes mucus glycoprotein composition → ↓ sputum viscosity → easier expectoration",
    adrs: [
      "Gastrointestinal upset (nausea, diarrhoea)",
      "Gastrointestinal bleeding (rare)",
      "Skin rash",
      "Nausea",
    ],
    keyADRs: ["Gastrointestinal bleeding (rare)"],
    counselling: [
      "Stop and seek advice if you vomit blood or pass black, tarry stools.",
      "It is usually reviewed after about 4 weeks and stopped if there is no clear benefit.",
      "It is not a reliever inhaler and does not treat sudden breathlessness.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "oxycodone",
    reference: 10,
    name: "Oxycodone",
    tags: ["Opioid", "Analgesic", "Controlled drug"],
    drugClass: "Strong opioid analgesic (mu-opioid receptor agonist)",
    indications: [
      "Moderate-to-severe pain, including cancer pain",
      "Post-operative pain",
    ],
    mechanism:
      "A full agonist at mu-opioid receptors in the central nervous system, reducing pain transmission and altering pain perception. It is roughly twice as potent as oral morphine and has an active metabolite, oxymorphone, that contributes to analgesia.",
    mechanismSummary:
      "Full µ-opioid receptor agonist in the CNS → ↓ pain transmission and altered perception; roughly twice the potency of oral morphine",
    adrs: [
      "Constipation",
      "Nausea and vomiting",
      "Drowsiness and confusion",
      "Respiratory depression; tolerance and dependence",
    ],
    keyADRs: [
      "Constipation",
      "Respiratory depression",
    ],
    counselling: [
      "Constipation is almost universal — take a regular laxative from the start.",
      "Nausea often settles after the first week; an antiemetic can help.",
      "Do not drink alcohol and do not drive until you know how it affects you, including after any dose change.",
      "Do not stop abruptly after regular use — the dose is tapered to avoid withdrawal.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "citalopram",
    reference: 11,
    name: "Citalopram",
    tags: ["SSRI", "Antidepressant"],
    drugClass: "Selective serotonin reuptake inhibitor (SSRI)",
    indications: [
      "Major depression",
      "Panic disorder",
    ],
    mechanism:
      "Selectively inhibits the presynaptic serotonin transporter (SERT), increasing serotonin availability in the synaptic cleft. Downstream receptor adaptation over 2–4 weeks is thought to underlie the antidepressant effect.",
    mechanismSummary:
      "Selectively blocks presynaptic serotonin transporter (SERT) → ↑ synaptic serotonin → receptor adaptation over weeks → antidepressant/anxiolytic effect",
    adrs: [
      "Nausea, diarrhoea and dry mouth",
      "Headache, and insomnia or drowsiness",
      "Sexual dysfunction",
      "QT-interval prolongation (dose-related); hyponatraemia; increased bleeding risk",
    ],
    keyADRs: ["QT prolongation (dose-related)"],
    counselling: [
      "It usually takes 2–4 weeks to work, and early side effects such as nausea often ease within a week or two.",
      "Anxiety, agitation or worsening mood can occur early, especially in people under 25 — seek advice urgently if this happens.",
      "There is a maximum dose (lower in older people and in liver impairment) because of its effect on heart rhythm.",
      "Do not stop abruptly — taper to avoid discontinuation symptoms such as dizziness, 'electric shock' sensations and flu-like feelings.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "clotrimazole",
    reference: 12,
    name: "Clotrimazole",
    tags: ["Antifungal", "Imidazole", "Topical"],
    drugClass: "Imidazole antifungal (topical)",
    indications: [
      "Vaginal and vulval candidiasis (thrush)",
      "Dermatophyte skin infections — athlete's foot, ringworm",
      "Fungal nappy rash and intertrigo",
    ],
    mechanism:
      "Inhibits the fungal cytochrome P450 enzyme 14-alpha-demethylase, blocking conversion of lanosterol to ergosterol. Ergosterol depletion and accumulation of toxic sterol precursors disrupt the fungal cell membrane, giving a fungistatic (and at higher concentration fungicidal) effect.",
    mechanismSummary:
      "Inhibits fungal 14-α-demethylase → ↓ ergosterol synthesis + toxic sterol build-up → disrupted fungal cell membrane → fungistatic/fungicidal",
    adrs: [
      "Local burning, stinging or irritation",
      "Erythema",
      "Contact dermatitis (uncommon)",
      "Hypersensitivity (rare)",
    ],
    keyADRs: ["Local burning or irritation"],
    counselling: [
      "Keep using it for the full course, including a few days after symptoms clear, to prevent recurrence.",
      "It can weaken latex condoms and diaphragms — use additional or alternative contraception during treatment and for a few days after.",
      "For vaginal thrush the pessary or internal cream is used at night; see a clinician if there is no improvement in 7 days or symptoms keep recurring.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "clozapine",
    reference: 13,
    name: "Clozapine",
    tags: ["Antipsychotic", "Atypical", "Treatment-resistant schizophrenia"],
    drugClass: "Atypical (second-generation) antipsychotic",
    indications: [
      "Treatment-resistant schizophrenia",
      "Psychosis in Parkinson's disease",
      "Reduction of suicidal behaviour in schizophrenia",
    ],
    mechanism:
      "Antagonises multiple receptors, with relatively low dopamine D2 and high serotonin 5-HT2A affinity, plus antagonism at muscarinic, histaminergic and adrenergic receptors. This profile gives efficacy in treatment-resistant schizophrenia with a low risk of extrapyramidal effects, at the cost of significant metabolic and haematological toxicity.",
    mechanismSummary:
      "Broad receptor antagonism (low D2 / high 5-HT2A, plus muscarinic/H1/α) → effective in treatment-resistant schizophrenia with minimal EPS, but marked metabolic and haematological risk",
    adrs: [
      "Agranulocytosis and neutropenia (mandatory blood monitoring)",
      "Myocarditis and cardiomyopathy",
      "Weight gain, dyslipidaemia and diabetes",
      "Constipation (can progress to ileus), hypersalivation, sedation, dose-related seizures",
    ],
    keyADRs: [
      "Agranulocytosis and neutropenia",
      "Myocarditis",
    ],
    counselling: [
      "You must have regular blood tests (weekly at first) and clozapine is dispensed only when the count is satisfactory — do not miss appointments.",
      "Report fever, sore throat or flu-like illness (infection risk) and any chest pain, breathlessness or palpitations (heart inflammation), especially in the first two months.",
      "Report constipation early — it can become serious.",
      "Do not miss more than about 48 hours of doses without medical advice, as the dose then has to be re-titrated; tell your team if you start or stop smoking, as this changes blood levels.",
    ],
    sources: [],
  },
  {
    slug: "combined-hormonal-contraceptives",
    reference: 14,
    name: "Combined hormonal contraceptives",
    tags: ["Contraceptive", "Oestrogen + progestogen"],
    drugClass: "Combined hormonal contraceptive (oestrogen plus progestogen)",
    indications: [
      "Contraception",
      "Menstrual cycle control — heavy, painful or irregular periods",
      "Management of acne and premenstrual symptoms",
    ],
    mechanism:
      "A synthetic oestrogen (usually ethinylestradiol) and a progestogen suppress the hypothalamic–pituitary axis, inhibiting the LH surge and preventing ovulation. The progestogen also thickens cervical mucus and thins the endometrium, providing additional contraceptive effect.",
    mechanismSummary:
      "Oestrogen + progestogen suppress the hypothalamic–pituitary axis → no LH surge → ovulation inhibited; progestogen also thickens cervical mucus + thins endometrium",
    adrs: [
      "Venous thromboembolism (increased risk)",
      "Small increase in risk of breast and cervical cancer",
      "Raised blood pressure",
      "Breakthrough bleeding, breast tenderness, nausea and mood change (often settle over ~3 months); rare arterial events (MI, stroke)",
    ],
    keyADRs: ["Venous thromboembolism"],
    counselling: [
      "Seek urgent help for calf swelling or pain, chest pain, breathlessness, a sudden severe headache, or visual or speech disturbance.",
      "Effectiveness is reduced by missed pills, vomiting or severe diarrhoea, and enzyme-inducing drugs — follow the missed-pill rules and use condoms as back-up.",
      "It is not suitable if you smoke and are over 35, have migraine with aura, or have certain cardiovascular risk factors.",
      "Take it at roughly the same time each day.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "dexamethasone",
    reference: 15,
    name: "Dexamethasone",
    tags: ["Corticosteroid", "Glucocorticoid"],
    drugClass: "Long-acting glucocorticoid",
    indications: [
      "Cerebral oedema from malignancy",
      "Suppression of inflammatory and allergic disorders",
      "Antiemetic in chemotherapy",
      "Croup; some COVID-19 and cancer indications",
    ],
    mechanism:
      "Binds the intracellular glucocorticoid receptor and modulates gene transcription to suppress pro-inflammatory mediators (cytokines, prostaglandins, leukotrienes) and immune cell function. It is a potent, long-acting glucocorticoid with negligible mineralocorticoid activity, so it causes little sodium and water retention.",
    mechanismSummary:
      "Binds glucocorticoid receptor → altered transcription → ↓ cytokines/prostaglandins + ↓ immune cell activity; potent and long-acting with minimal mineralocorticoid effect (little Na⁺/water retention)",
    adrs: [
      "Hyperglycaemia",
      "Mood disturbance, agitation or insomnia",
      "Increased infection risk and immunosuppression",
      "Gastric irritation; with prolonged use, adrenal suppression, osteoporosis and Cushingoid features",
    ],
    keyADRs: ["Adrenal suppression with prolonged use"],
    counselling: [
      "Take it in the morning with food.",
      "Do not stop abruptly after more than a few weeks — the dose must be tapered to let the adrenal glands recover.",
      "Carry a steroid emergency card and tell any healthcare professional you are taking it.",
      "Avoid contact with chickenpox or measles if you are not immune, and seek advice if you are exposed.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "diazepam",
    reference: 16,
    name: "Diazepam",
    tags: ["Benzodiazepine", "Anxiolytic", "Controlled drug"],
    drugClass: "Benzodiazepine (long-acting)",
    indications: [
      "Short-term severe anxiety or insomnia",
      "Acute alcohol withdrawal",
      "Status epilepticus and febrile seizures",
      "Muscle spasm and spasticity",
    ],
    mechanism:
      "Binds an allosteric site on the GABA-A receptor, increasing the frequency of chloride channel opening in response to GABA. The resulting neuronal hyperpolarisation produces anxiolytic, sedative, muscle-relaxant and anticonvulsant effects. It has a long half-life with active metabolites.",
    mechanismSummary:
      "Allosteric GABA-A modulator → ↑ frequency of Cl⁻ channel opening → neuronal hyperpolarisation → anxiolytic, sedative, muscle-relaxant, anticonvulsant; long half-life with active metabolites",
    adrs: [
      "Drowsiness, sedation and impaired concentration",
      "Tolerance and dependence with regular use",
      "Ataxia and falls (especially in older people)",
      "Respiratory depression (dose-related, worse with alcohol or opioids); paradoxical agitation",
    ],
    keyADRs: [
      "Dependence",
      "Respiratory depression",
    ],
    counselling: [
      "It is intended for short-term use only (usually no more than 2–4 weeks) because dependence develops quickly.",
      "Do not stop suddenly after regular use — withdrawal can cause anxiety, tremor and seizures, so the dose is reduced gradually.",
      "Avoid alcohol and take care with driving and machinery — it impairs reactions, sometimes into the next day.",
      "Its effects are additive with opioids and other sedatives.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "naproxen",
    reference: 17,
    name: "Naproxen",
    tags: ["NSAID", "Analgesic", "Anti-inflammatory"],
    drugClass: "Non-steroidal anti-inflammatory drug (NSAID)",
    indications: [
      "Pain and inflammation in rheumatoid arthritis, osteoarthritis and gout",
      "Musculoskeletal pain",
      "Dysmenorrhoea",
    ],
    mechanism:
      "Non-selectively and reversibly inhibits cyclo-oxygenase (COX-1 and COX-2), reducing prostaglandin synthesis to give analgesic, anti-inflammatory and antipyretic effects. Reduced gastric and renal prostaglandins account for its main adverse effects; it has a relatively favourable cardiovascular risk profile among NSAIDs.",
    mechanismSummary:
      "Non-selectively inhibits COX-1 and COX-2 → ↓ prostaglandins → analgesic/anti-inflammatory/antipyretic; ↓ gastroprotective + renal prostaglandins → GI and renal ADRs",
    adrs: [
      "Dyspepsia, gastric ulceration and GI bleeding",
      "Renal impairment and fluid retention",
      "Raised blood pressure",
      "Bronchospasm in NSAID-sensitive asthma",
    ],
    keyADRs: ["Gastric ulceration and GI bleeding"],
    counselling: [
      "Take it with or after food, at the lowest effective dose for the shortest time.",
      "Report black tarry stools, vomiting blood, or severe indigestion.",
      "A stomach-protecting medicine (PPI) may be co-prescribed if you are at higher risk.",
      "Avoid taking it with other NSAIDs including aspirin, and use with caution if you have kidney disease, heart failure or asthma.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "digoxin",
    reference: 18,
    name: "Digoxin",
    tags: ["Cardiac glycoside", "Heart failure", "Rate control"],
    drugClass: "Cardiac glycoside",
    indications: [
      "Rate control in persistent or permanent atrial fibrillation",
      "Chronic heart failure with reduced ejection fraction (as add-on)",
    ],
    mechanism:
      "Inhibits the myocardial Na+/K+-ATPase, raising intracellular sodium and, via the sodium–calcium exchanger, intracellular calcium — increasing the force of contraction. It also enhances vagal tone, slowing atrioventricular node conduction and ventricular rate in atrial fibrillation. It has a narrow therapeutic index and is renally excreted.",
    mechanismSummary:
      "Inhibits myocardial Na⁺/K⁺-ATPase → ↑ intracellular Na⁺ → ↑ intracellular Ca²⁺ (via Na⁺/Ca²⁺ exchange) → ↑ contractility; ↑ vagal tone → ↓ AV conduction/ventricular rate; narrow therapeutic index",
    adrs: [
      "Digoxin toxicity — nausea, vomiting, anorexia",
      "Visual disturbance (blurred or yellow-green vision)",
      "Bradycardia and arrhythmias",
      "Confusion; toxicity is worsened by hypokalaemia, hypomagnesaemia and renal impairment",
    ],
    keyADRs: ["Digoxin toxicity (nausea, visual disturbance, arrhythmia)"],
    counselling: [
      "Report nausea, loss of appetite, visual changes, palpitations or feeling faint — these can mean the level is too high.",
      "Have the blood tests arranged for kidney function and potassium; low potassium makes toxicity more likely.",
      "Take it at the same time each day and do not double up on a missed dose.",
      "Tell prescribers before starting new medicines (e.g. amiodarone, verapamil, diuretics) as many interact.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "rivaroxaban",
    reference: 19,
    name: "Rivaroxaban",
    tags: ["Anticoagulant", "DOAC", "Factor Xa inhibitor"],
    drugClass: "Direct oral anticoagulant (direct factor Xa inhibitor)",
    indications: [
      "Prevention of stroke in non-valvular atrial fibrillation",
      "Treatment and secondary prevention of DVT and pulmonary embolism",
      "VTE prophylaxis after hip or knee replacement",
    ],
    mechanism:
      "Directly and reversibly inhibits activated factor X (Xa), the point where the intrinsic and extrinsic clotting pathways converge, reducing thrombin generation and clot formation. Its predictable pharmacokinetics mean routine anticoagulation monitoring is not required, and it has a shorter half-life than warfarin.",
    mechanismSummary:
      "Directly and reversibly inhibits factor Xa → ↓ thrombin generation → ↓ clot formation; predictable kinetics → no routine INR monitoring; shorter half-life than warfarin",
    adrs: [
      "Bleeding — GI, urinary, nosebleeds, bruising",
      "Anaemia",
      "Raised liver enzymes",
      "Nausea",
    ],
    keyADRs: ["Bleeding"],
    counselling: [
      "Take the 15 mg and 20 mg doses with food so it is properly absorbed.",
      "Do not miss doses — the anticoagulant effect wears off within a day, unlike warfarin.",
      "Report unusual bleeding or bruising, black stools, or any fall or head injury.",
      "Carry an anticoagulant alert card and tell dentists and surgeons before procedures; a specific reversal agent exists for emergencies.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "domperidone",
    reference: 20,
    name: "Domperidone",
    tags: ["Antiemetic", "Prokinetic", "Dopamine antagonist"],
    drugClass: "Peripheral dopamine D2 receptor antagonist (prokinetic antiemetic)",
    indications: [
      "Nausea and vomiting (short-term)",
      "Gastroparesis-type upper GI motility symptoms",
    ],
    mechanism:
      "Blocks D2 receptors in the chemoreceptor trigger zone (which sits outside the blood–brain barrier) and in the gut, reducing nausea and increasing gastric emptying and antroduodenal coordination. Because it poorly crosses the blood–brain barrier, extrapyramidal effects are uncommon, but it blocks cardiac potassium channels and can prolong the QT interval.",
    mechanismSummary:
      "Blocks D2 receptors in the CTZ and gut (poor CNS penetration) → ↓ nausea + ↑ gastric emptying; few extrapyramidal effects, but cardiac K⁺-channel block → QT prolongation",
    adrs: [
      "QT-interval prolongation and serious ventricular arrhythmia",
      "Dry mouth",
      "Abdominal cramps",
      "Headache; raised prolactin (galactorrhoea)",
    ],
    keyADRs: ["QT prolongation and arrhythmia"],
    counselling: [
      "Use the lowest dose for the shortest time (usually up to 1 week) because of the small risk of serious heart rhythm problems.",
      "Stop and seek medical advice if you have palpitations, fainting or dizziness.",
      "It is not suitable if you have heart disease, certain electrolyte problems, or take other medicines that affect heart rhythm — check before starting.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "doxazosin",
    reference: 21,
    name: "Doxazosin",
    tags: ["Alpha blocker", "Hypertension", "BPH"],
    drugClass: "Selective alpha-1 adrenoceptor antagonist",
    indications: [
      "Benign prostatic hyperplasia — bladder outflow symptoms",
      "Hypertension (add-on, or resistant hypertension)",
    ],
    mechanism:
      "Blocks post-synaptic alpha-1 adrenoceptors on vascular smooth muscle, causing vasodilation and lowering blood pressure. It also relaxes smooth muscle in the prostate and bladder neck, improving urinary flow in benign prostatic hyperplasia.",
    mechanismSummary:
      "Blocks post-synaptic α1 adrenoceptors → vascular smooth muscle relaxation → ↓ BP; also relaxes prostate/bladder-neck smooth muscle → ↑ urinary flow in BPH",
    adrs: [
      "First-dose and postural hypotension, dizziness",
      "Headache",
      "Ankle oedema",
      "Fatigue; rarely priapism",
    ],
    keyADRs: ["First-dose and postural hypotension"],
    counselling: [
      "Take the first dose at bedtime and rise slowly afterwards, as it can cause marked dizziness or fainting when starting or increasing the dose.",
      "If you feel dizzy, sit or lie down until it passes; take care with driving initially.",
      "Tell your eye surgeon you take it before cataract surgery, because it can cause 'floppy iris syndrome'.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "enoxaparin",
    reference: 22,
    name: "Enoxaparin",
    tags: ["Anticoagulant", "Low molecular weight heparin"],
    drugClass: "Low molecular weight heparin (LMWH)",
    indications: [
      "Treatment of DVT and pulmonary embolism",
      "VTE prophylaxis in medical and surgical patients",
      "Acute coronary syndrome",
    ],
    mechanism:
      "Binds antithrombin and greatly accelerates its inactivation of factor Xa (and, less than unfractionated heparin, thrombin). The predominant anti-Xa activity gives a predictable dose response, allowing weight-based dosing without routine monitoring in most patients.",
    mechanismSummary:
      "Binds antithrombin → accelerates inactivation of factor Xa (≫ thrombin) → ↓ clot formation; predictable response → weight-based dosing, no routine monitoring",
    adrs: [
      "Bleeding and bruising",
      "Injection-site haematoma or pain",
      "Heparin-induced thrombocytopenia (less common than with unfractionated heparin)",
      "Hyperkalaemia (aldosterone suppression); raised liver enzymes",
    ],
    keyADRs: [
      "Bleeding",
      "Heparin-induced thrombocytopenia",
    ],
    counselling: [
      "For self-injection: use the abdomen (a hand's width from the navel), pinch up a skin fold, inject at 90°, and do not rub the site afterwards.",
      "Rotate injection sites left and right to reduce bruising.",
      "Do not expel the small air bubble in a pre-filled syringe.",
      "Report unusual bleeding, or new limb swelling or pain despite treatment; the dose is reduced in significant kidney impairment.",
    ],
    sources: [],
  },
  {
    slug: "fentanyl",
    reference: 23,
    name: "Fentanyl",
    tags: ["Opioid", "Analgesic", "Controlled drug"],
    drugClass: "Strong synthetic opioid (mu-opioid receptor agonist)",
    indications: [
      "Severe chronic pain, e.g. cancer pain (transdermal patch)",
      "Breakthrough cancer pain (transmucosal)",
      "Intra-operative and procedural analgesia",
    ],
    mechanism:
      "A highly potent, lipophilic full agonist at mu-opioid receptors, roughly 100 times more potent than morphine. Its lipophilicity allows transdermal and transmucosal delivery. It does not rely on renal clearance of active metabolites, so it is sometimes preferred in renal impairment.",
    mechanismSummary:
      "Highly potent, lipophilic full µ-opioid agonist (~100× morphine) → analgesia; lipophilicity enables transdermal/transmucosal use; no active renally-cleared metabolites",
    adrs: [
      "Respiratory depression",
      "Constipation",
      "Nausea, drowsiness and confusion",
      "Dependence and tolerance; skin reaction under the patch",
    ],
    keyADRs: ["Respiratory depression"],
    counselling: [
      "Patches are for stable, ongoing pain — not for sudden or new pain — and take about 12–24 hours to reach full effect.",
      "Apply to clean, dry, hairless skin on the upper body, press for 30 seconds, rotate sites, and avoid heat (hot baths, heat pads, saunas, fever) which can cause a dangerous overdose.",
      "Fold used patches in half and dispose of them safely — they still contain enough drug to harm a child or pet.",
      "Take regular laxatives and avoid alcohol.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "ferrous-sulphate",
    reference: 24,
    name: "Ferrous sulphate",
    tags: ["Iron supplement", "Anaemia"],
    drugClass: "Oral iron salt",
    indications: [
      "Treatment of iron-deficiency anaemia",
      "Prevention of iron deficiency where dietary intake is inadequate (e.g. pregnancy)",
    ],
    mechanism:
      "Provides elemental iron (about 65 mg per 200 mg tablet) to replenish depleted iron stores, supporting haemoglobin synthesis in iron-deficiency anaemia. It is absorbed in the duodenum; absorption is enhanced by an acidic environment and reduced by food, tea and certain drugs.",
    mechanismSummary:
      "Supplies elemental iron → replenishes stores → supports haemoglobin synthesis in iron-deficiency anaemia; duodenal absorption ↑ by acid/vitamin C, ↓ by food, tea, antacids",
    adrs: [
      "Constipation",
      "Black stools",
      "Nausea and epigastric discomfort",
      "Diarrhoea; dark staining of teeth with liquid preparations",
    ],
    keyADRs: ["Constipation and GI upset"],
    counselling: [
      "Black stools are expected and harmless, but do not assume they are always the tablets — seek advice if you also feel unwell.",
      "Taking it with orange juice or another vitamin C source improves absorption; separate it from tea, coffee, milk, antacids and some antibiotics or levothyroxine by about 2 hours.",
      "If GI upset is troublesome, taking it with food or switching to alternate days can help.",
      "Keep it well away from children — iron overdose is dangerous.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "finasteride",
    reference: 25,
    name: "Finasteride",
    tags: ["5-alpha reductase inhibitor", "BPH", "Hair loss"],
    drugClass: "5-alpha reductase inhibitor",
    indications: [
      "Benign prostatic hyperplasia",
      "Male-pattern hair loss (androgenetic alopecia)",
    ],
    mechanism:
      "Inhibits type 2 5-alpha reductase, reducing conversion of testosterone to the more potent dihydrotestosterone (DHT). Lower DHT shrinks prostate volume over months and slows androgenetic hair loss.",
    mechanismSummary:
      "Inhibits type 2 5-α reductase → ↓ conversion of testosterone to DHT → ↓ prostate volume (over months) and slows androgenetic alopecia",
    adrs: [
      "Reduced libido",
      "Erectile dysfunction",
      "Ejaculation disorders",
      "Gynaecomastia and breast tenderness; mood changes or depression; rare male breast cancer",
    ],
    keyADRs: ["Sexual dysfunction (reduced libido, erectile or ejaculatory problems)"],
    counselling: [
      "It can take 3–6 months to see a benefit for prostate symptoms, and hair loss returns if you stop.",
      "It roughly halves PSA — tell any doctor arranging a prostate cancer blood test that you take it.",
      "Women who are or may become pregnant should not handle crushed or broken tablets, because of the risk to a male fetus (the tablets are film-coated for this reason).",
      "Report low mood, or any breast lump, pain or nipple discharge.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "fluoxetine",
    reference: 26,
    name: "Fluoxetine",
    tags: ["SSRI", "Antidepressant"],
    drugClass: "Selective serotonin reuptake inhibitor (SSRI)",
    indications: [
      "Major depression",
      "Obsessive-compulsive disorder",
      "Bulimia nervosa",
    ],
    mechanism:
      "Selectively inhibits the presynaptic serotonin transporter, increasing synaptic serotonin. It has a long half-life and an active metabolite (norfluoxetine), so it effectively self-tapers and causes fewer discontinuation symptoms than shorter-acting SSRIs. It also inhibits CYP2D6.",
    mechanismSummary:
      "Selectively blocks serotonin reuptake (SERT) → ↑ synaptic serotonin; long half-life + active metabolite → self-tapering, fewer discontinuation symptoms; CYP2D6 inhibitor",
    adrs: [
      "Nausea, diarrhoea and appetite loss",
      "Insomnia, anxiety or agitation early in treatment",
      "Sexual dysfunction",
      "Hyponatraemia and increased bleeding risk; serotonin syndrome with other serotonergic drugs",
    ],
    keyADRs: [
      "Early anxiety or agitation",
      "Sexual dysfunction",
    ],
    counselling: [
      "It usually takes a few weeks to work; anxiety, restlessness or sleep problems can occur early and often settle.",
      "Seek advice urgently if your mood worsens or you have thoughts of self-harm, particularly in the first weeks and in people under 25.",
      "Because it stays in the body a long time, an occasional missed dose matters less, but still do not stop without advice.",
      "Avoid other serotonergic medicines (including St John's wort, tramadol and triptans) unless advised.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "gabapentin",
    reference: 27,
    name: "Gabapentin",
    tags: ["Antiepileptic", "Neuropathic pain", "Controlled drug"],
    drugClass: "Gabapentinoid (alpha-2-delta calcium-channel ligand)",
    indications: [
      "Peripheral neuropathic pain",
      "Focal seizures with or without secondary generalisation",
      "Migraine prophylaxis (off-label)",
    ],
    mechanism:
      "Binds the alpha-2-delta subunit of presynaptic voltage-gated calcium channels, reducing calcium influx and the release of excitatory neurotransmitters such as glutamate, noradrenaline and substance P. Despite its name it does not act directly on GABA receptors. It is used for neuropathic pain and focal seizures.",
    mechanismSummary:
      "Binds α2δ subunit of presynaptic voltage-gated Ca²⁺ channels → ↓ Ca²⁺ influx → ↓ excitatory neurotransmitter release; no direct GABA-receptor action",
    adrs: [
      "Drowsiness, dizziness and ataxia",
      "Weight gain and peripheral oedema",
      "Mood changes",
      "Respiratory depression (with opioids, in the elderly, or in respiratory disease); misuse and dependence",
    ],
    keyADRs: [
      "Sedation and dizziness",
      "Respiratory depression with opioids",
    ],
    counselling: [
      "The dose is started low and built up gradually; drowsiness and dizziness often ease — take care with driving and alcohol.",
      "Do not stop suddenly — taper over at least a week to avoid withdrawal and, if it is used for epilepsy, seizures.",
      "It is a controlled drug because it can be misused.",
      "Tell your prescriber about any opioid use, as the combination can dangerously depress breathing.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "haloperidol",
    reference: 28,
    name: "Haloperidol",
    tags: ["Antipsychotic", "First-generation", "Butyrophenone"],
    drugClass: "First-generation (typical) antipsychotic (butyrophenone)",
    indications: [
      "Schizophrenia and other psychoses",
      "Acute agitation, mania and delirium",
      "Nausea and vomiting in palliative care",
      "Tourette syndrome and severe tics",
    ],
    mechanism:
      "A high-affinity antagonist at dopamine D2 receptors. Blockade in the mesolimbic pathway reduces positive psychotic symptoms, while D2 blockade in the nigrostriatal and tuberoinfundibular pathways produces extrapyramidal effects and hyperprolactinaemia. It is also used for acute agitation, delirium and (at low dose) nausea.",
    mechanismSummary:
      "High-affinity dopamine D2 antagonist → ↓ mesolimbic dopamine → ↓ positive psychotic symptoms; D2 blockade elsewhere → extrapyramidal effects + hyperprolactinaemia",
    adrs: [
      "Extrapyramidal symptoms — dystonia, parkinsonism, akathisia, tardive dyskinesia",
      "QT-interval prolongation",
      "Hyperprolactinaemia (galactorrhoea, menstrual disturbance)",
      "Neuroleptic malignant syndrome (rare, life-threatening); sedation",
    ],
    keyADRs: [
      "Extrapyramidal symptoms",
      "QT prolongation",
    ],
    counselling: [
      "Report muscle stiffness, tremor, restlessness, or abnormal movements of the face or tongue — these may need treatment or a dose change.",
      "Seek emergency help for high fever with muscle rigidity, confusion and sweating (neuroleptic malignant syndrome).",
      "An ECG is often done because it can affect heart rhythm.",
      "Take care with driving until you know how it affects you.",
    ],
    sources: [],
  },
  {
    slug: "hypromellose",
    reference: 29,
    name: "Hypromellose",
    tags: ["Ocular lubricant", "Artificial tears"],
    drugClass: "Ocular lubricant (artificial tears)",
    indications: [
      "Dry eye conditions and tear deficiency",
      "Ocular lubrication during eye examinations or contact lens discomfort",
    ],
    mechanism:
      "A cellulose-derived polymer that increases the viscosity of the tear film, prolonging contact time on the ocular surface and supplementing deficient natural tears. This lubricates and protects the cornea and conjunctiva in dry eye conditions.",
    mechanismSummary:
      "Viscous cellulose polymer → thickens and supplements the tear film → prolongs ocular surface wetting → relief of dry, gritty eyes",
    adrs: [
      "Transient blurred vision after instillation",
      "Mild stinging or irritation",
      "Eyelid stickiness",
      "Hypersensitivity to preservative (rare)",
    ],
    keyADRs: ["Transient blurred vision"],
    counselling: [
      "Vision may blur briefly after putting the drops in — wait before driving.",
      "It can be used as often as needed; for frequent use choose a preservative-free preparation.",
      "Remove soft contact lenses before use unless the product says otherwise, and wait about 15 minutes before reinserting them.",
      "Discard a multi-use bottle 28 days after opening.",
    ],
    sources: [],
  },
  {
    slug: "insulin",
    reference: 30,
    name: "Insulin",
    tags: ["Antidiabetic", "Hormone", "Injectable"],
    drugClass: "Insulin (hormone replacement / analogue)",
    indications: [
      "Type 1 diabetes mellitus",
      "Type 2 diabetes when other agents are inadequate",
      "Diabetic ketoacidosis and hyperosmolar hyperglycaemic state",
      "Gestational diabetes",
    ],
    mechanism:
      "Activates the insulin receptor tyrosine kinase, promoting glucose uptake into skeletal muscle and fat (via GLUT4), suppressing hepatic gluconeogenesis and glycogenolysis, and promoting glycogen, lipid and protein synthesis. Formulations differ in onset and duration to mimic basal and mealtime needs.",
    mechanismSummary:
      "Activates insulin receptor → ↑ GLUT4-mediated glucose uptake (muscle/fat) + ↓ hepatic glucose output → ↓ blood glucose; also anabolic (glycogen, fat, protein synthesis)",
    adrs: [
      "Hypoglycaemia",
      "Weight gain",
      "Lipohypertrophy or lipoatrophy at injection sites",
      "Injection-site reactions; rarely hypokalaemia with large IV doses",
    ],
    keyADRs: ["Hypoglycaemia"],
    counselling: [
      "Learn to recognise and treat hypos (sweating, shaking, hunger, confusion) with fast-acting carbohydrate followed by a longer-acting snack.",
      "Rotate injection sites within an area and use a new needle each time to prevent lumpy skin, which makes absorption unreliable.",
      "Never stop insulin if you are unwell or not eating — follow sick-day rules and check glucose and ketones more often.",
      "Check glucose and follow DVLA rules before driving; carry ID and a sugar source.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "isosorbide-mononitrate",
    reference: 31,
    name: "Isosorbide mononitrate",
    tags: ["Nitrate", "Angina prophylaxis"],
    drugClass: "Organic nitrate (long-acting)",
    indications: [
      "Prophylaxis of angina",
      "Adjunct in chronic heart failure",
    ],
    mechanism:
      "Denitrated in vascular smooth muscle to release nitric oxide, which activates guanylate cyclase to raise cyclic GMP and cause vasodilation. Venodilation predominates, reducing preload and myocardial oxygen demand; it is used to prevent, not abort, angina. Unlike GTN it has near-complete oral bioavailability.",
    mechanismSummary:
      "Releases NO in vascular smooth muscle → ↑ cGMP → venodilation → ↓ preload → ↓ myocardial O₂ demand; angina prophylaxis; needs a nitrate-free interval to avoid tolerance",
    adrs: [
      "Headache (especially on initiation)",
      "Flushing",
      "Postural hypotension and dizziness",
      "Reflex tachycardia; tolerance with continuous exposure",
    ],
    keyADRs: ["Headache"],
    counselling: [
      "Headache is common when starting and usually wears off after a few days — simple painkillers help, and you should not stop the drug for it.",
      "Take the doses as prescribed so there is a nitrate-free period each day (e.g. asymmetric twice-daily dosing), otherwise the drug stops working.",
      "Sit down if you feel dizzy, and rise slowly.",
      "Do not use it with erectile dysfunction drugs (sildenafil, tadalafil) — the combination can cause a dangerous fall in blood pressure.",
    ],
    sources: [],
  },
  {
    slug: "lactulose",
    reference: 32,
    name: "Lactulose",
    tags: ["Laxative", "Osmotic"],
    drugClass: "Osmotic laxative (semi-synthetic disaccharide)",
    indications: [
      "Constipation",
      "Hepatic encephalopathy — treatment and prevention",
    ],
    mechanism:
      "A non-absorbed disaccharide that is fermented by colonic bacteria into short-chain organic acids. These draw water into the bowel lumen by osmosis, softening stool and increasing peristalsis. The acidification also converts absorbable ammonia to non-absorbable ammonium, which is why it is used in hepatic encephalopathy.",
    mechanismSummary:
      "Non-absorbed disaccharide fermented by colonic bacteria → osmotic water retention in lumen → softer stool + ↑ peristalsis; colonic acidification traps ammonia as NH4⁺ (used in hepatic encephalopathy)",
    adrs: [
      "Flatulence and bloating (especially initially)",
      "Abdominal cramps",
      "Nausea",
      "Diarrhoea and electrolyte disturbance with excessive doses",
    ],
    keyADRs: ["Flatulence and cramps"],
    counselling: [
      "It can take up to 48 hours to work, so it is not for immediate relief.",
      "Wind and bloating often settle after the first few days.",
      "Drink plenty of fluid.",
      "In liver disease the dose is adjusted to produce 2–3 soft stools a day.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "levonorgestrel",
    reference: 33,
    name: "Levonorgestrel",
    tags: ["Progestogen", "Emergency contraception"],
    drugClass: "Synthetic progestogen",
    indications: [
      "Emergency contraception (within 72 hours)",
      "Regular hormonal contraception (progestogen-only pill and intrauterine system)",
    ],
    mechanism:
      "As emergency contraception a single dose mainly delays or inhibits ovulation by blunting the LH surge; it may also affect the endometrium and cervical mucus. It is ineffective once ovulation has occurred and does not disrupt an established pregnancy. The same progestogen is used in regular pills and intrauterine systems.",
    mechanismSummary:
      "Progestogen → blunts the LH surge → delays/inhibits ovulation (± cervical mucus and endometrial effects); ineffective after ovulation, does not disrupt an established pregnancy",
    adrs: [
      "Nausea and vomiting",
      "Menstrual irregularity (earlier, later or heavier next period)",
      "Headache and dizziness",
      "Breast tenderness, fatigue, abdominal pain",
    ],
    keyADRs: [
      "Nausea and vomiting",
      "Menstrual disturbance",
    ],
    counselling: [
      "Take it as soon as possible — effectiveness falls with time and it is licensed up to 72 hours after unprotected sex (a copper coil is more effective and works later).",
      "If you vomit within 3 hours, take another dose.",
      "It is not as reliable as regular contraception and does not protect for the rest of the cycle — use condoms until your next period.",
      "Do a pregnancy test if your period is more than 5–7 days late.",
    ],
    sources: [],
  },
  {
    slug: "levothyroxine-sodium",
    reference: 34,
    name: "Levothyroxine sodium",
    tags: ["Thyroid hormone", "Hypothyroidism"],
    drugClass: "Synthetic thyroid hormone (T4)",
    indications: [
      "Primary hypothyroidism",
      "Congenital hypothyroidism",
      "After thyroidectomy or radioiodine; TSH suppression in thyroid cancer",
    ],
    mechanism:
      "A synthetic form of thyroxine (T4) that is deiodinated peripherally to the active hormone T3. T3 binds nuclear thyroid hormone receptors to regulate transcription of genes controlling metabolic rate, cardiac function, growth and CNS activity, restoring a euthyroid state in hypothyroidism.",
    mechanismSummary:
      "Synthetic T4 → peripherally converted to active T3 → binds nuclear thyroid receptors → normalises metabolic rate, cardiac and CNS function in hypothyroidism",
    adrs: [
      "Over-replacement effects — palpitations, tremor, heat intolerance, weight loss, diarrhoea, anxiety, insomnia",
      "Angina or atrial fibrillation in susceptible patients",
      "Reduced bone density with long-term over-treatment",
      "Transient hair loss early in treatment",
    ],
    keyADRs: ["Over-replacement effects (palpitations, tremor, weight loss)"],
    counselling: [
      "Take it on an empty stomach, ideally 30–60 minutes before breakfast (or at bedtime, well after food), at the same time each day.",
      "Separate it from calcium, iron, indigestion remedies and some other drugs by about 4 hours.",
      "It is usually lifelong — do not stop when you feel well; have periodic TSH blood tests so the dose can be fine-tuned.",
      "Report palpitations or chest pain, and tell your doctor if you become pregnant, as the dose often needs to increase.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "loratadine",
    reference: 35,
    name: "Loratadine",
    tags: ["Antihistamine", "Non-sedating", "H1 antagonist"],
    drugClass: "Second-generation (non-sedating) H1 antihistamine",
    indications: [
      "Allergic rhinitis (hay fever)",
      "Chronic urticaria",
      "Symptom relief in other allergic reactions",
    ],
    mechanism:
      "Selectively and competitively blocks peripheral histamine H1 receptors, preventing histamine-mediated vasodilation, increased vascular permeability, itch and secretions in allergic conditions. It is minimally lipophilic and a poor substrate for entry into the CNS, so it causes little sedation at standard doses.",
    mechanismSummary:
      "Selectively blocks peripheral H1 receptors → ↓ histamine-mediated itch, vasodilation and secretions; poor CNS penetration → minimal sedation at standard doses",
    adrs: [
      "Headache",
      "Drowsiness (uncommon) or fatigue",
      "Dry mouth",
      "Tachycardia or GI upset (rare)",
    ],
    keyADRs: ["Headache"],
    counselling: [
      "Take it once daily; it works within 1–3 hours and is suitable for regular use in hay fever and chronic urticaria.",
      "It is much less sedating than older antihistamines, but a few people still feel drowsy — see how it affects you before driving.",
      "If symptoms are not controlled, a clinician may advise a different or higher-dose antihistamine.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "methadone",
    reference: 36,
    name: "Methadone",
    tags: ["Opioid", "Opioid substitution", "Controlled drug"],
    drugClass: "Synthetic long-acting mu-opioid receptor agonist",
    indications: [
      "Opioid dependence — substitution and withdrawal management",
      "Severe chronic pain unresponsive to other opioids",
    ],
    mechanism:
      "A full agonist at mu-opioid receptors with a long and variable half-life, giving prolonged suppression of withdrawal and craving in opioid dependence without the peaks and troughs of shorter-acting opioids. It is also an NMDA receptor antagonist, which may add to analgesia, and it blocks the cardiac hERG potassium channel.",
    mechanismSummary:
      "Long-acting full µ-opioid agonist (plus NMDA antagonism) → sustained suppression of withdrawal/craving; long, variable half-life → accumulation risk; hERG blockade → QT prolongation",
    adrs: [
      "Respiratory depression (accumulation during titration)",
      "Constipation",
      "Sedation and sweating",
      "QT prolongation and arrhythmia; dependence",
    ],
    keyADRs: [
      "Respiratory depression during titration",
      "QT prolongation",
    ],
    counselling: [
      "The dose builds up over the first few days because it is long-acting — do not take extra 'on top', and do not combine it with alcohol, benzodiazepines or other opioids (risk of fatal overdose).",
      "It is usually a supervised daily dose, often as a green liquid.",
      "Store it locked away and out of reach of children — a small amount can be fatal to a child.",
      "An ECG may be done to check heart rhythm.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "metoclopramide",
    reference: 37,
    name: "Metoclopramide",
    tags: ["Antiemetic", "Prokinetic", "Dopamine antagonist"],
    drugClass: "Dopamine D2 receptor antagonist with prokinetic action",
    indications: [
      "Nausea and vomiting, including in migraine and after chemotherapy or radiotherapy",
      "Gastro-oesophageal reflux and gastroparesis (short-term)",
    ],
    mechanism:
      "Blocks D2 receptors in the chemoreceptor trigger zone to reduce nausea, and in the gut (together with 5-HT4 agonism) it increases gastric emptying and lower oesophageal sphincter tone. It crosses the blood–brain barrier, so it can cause extrapyramidal effects.",
    mechanismSummary:
      "Blocks D2 in the CTZ → ↓ nausea; gut D2 blockade + 5-HT4 agonism → ↑ gastric emptying; crosses BBB → risk of extrapyramidal effects",
    adrs: [
      "Acute dystonic reactions (especially young women and children)",
      "Akathisia and parkinsonism",
      "Tardive dyskinesia with prolonged use",
      "Drowsiness, diarrhoea, raised prolactin",
    ],
    keyADRs: ["Acute dystonic / extrapyramidal reactions"],
    counselling: [
      "It is normally used for no more than 5 days because of the risk of movement disorders.",
      "Seek urgent help for muscle spasms of the face, neck or eyes, restlessness, or abnormal movements — these usually settle when the drug is stopped.",
      "Take care with driving as it can cause drowsiness.",
      "It should be avoided in Parkinson's disease.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "morphine",
    reference: 38,
    name: "Morphine",
    tags: ["Opioid", "Analgesic", "Controlled drug"],
    drugClass: "Strong opioid analgesic (mu-opioid receptor agonist)",
    indications: [
      "Severe acute pain (e.g. after surgery or MI)",
      "Chronic cancer pain",
      "Breathlessness in palliative care",
      "Acute pulmonary oedema (adjunct)",
    ],
    mechanism:
      "A full agonist at mu-opioid receptors in the CNS and periphery, inhibiting ascending pain transmission and altering the emotional response to pain. It is the reference strong opioid. Its active metabolite morphine-6-glucuronide is renally cleared and accumulates in renal impairment.",
    mechanismSummary:
      "Full µ-opioid receptor agonist → ↓ ascending pain transmission + altered pain perception; active metabolite (M6G) accumulates in renal impairment",
    adrs: [
      "Constipation",
      "Nausea and vomiting",
      "Drowsiness and confusion",
      "Respiratory depression; dependence and tolerance; pruritus",
    ],
    keyADRs: [
      "Constipation",
      "Respiratory depression",
    ],
    counselling: [
      "Start a regular laxative at the same time — constipation does not wear off.",
      "Nausea and drowsiness usually improve over the first few days; take care with driving and avoid alcohol.",
      "Report slow or shallow breathing, marked drowsiness or confusion.",
      "Do not stop abruptly after regular use, and store it securely away from others, especially children.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "olanzapine",
    reference: 39,
    name: "Olanzapine",
    tags: ["Antipsychotic", "Atypical", "Second-generation"],
    drugClass: "Atypical (second-generation) antipsychotic",
    indications: [
      "Schizophrenia",
      "Moderate-to-severe manic episodes and bipolar maintenance",
      "Chemotherapy-induced nausea and vomiting (off-label)",
    ],
    mechanism:
      "An antagonist at dopamine D2 and serotonin 5-HT2A receptors, with additional antagonism at muscarinic, histamine H1 and alpha-1 receptors. The 5-HT2A:D2 balance gives antipsychotic efficacy with fewer extrapyramidal effects than typical agents, while strong H1 and metabolic effects drive weight gain and sedation.",
    mechanismSummary:
      "Blocks D2 + 5-HT2A (plus muscarinic/H1/α1) → antipsychotic effect with fewer EPS than typicals; strong H1/metabolic action → weight gain, sedation, dyslipidaemia",
    adrs: [
      "Weight gain and increased appetite",
      "Dyslipidaemia and type 2 diabetes / hyperglycaemia",
      "Sedation and dizziness",
      "Extrapyramidal effects (less common), raised prolactin, postural hypotension",
    ],
    keyADRs: ["Metabolic effects (weight gain, hyperglycaemia, dyslipidaemia)"],
    counselling: [
      "Weight, blood glucose and lipids are checked before and during treatment — attend monitoring and get support with diet and activity.",
      "It is often sedating; take it in the evening and take care with driving until you know how it affects you.",
      "Rise slowly from lying or sitting.",
      "Do not stop it suddenly, and report excessive thirst, passing a lot of urine, or symptoms of infection.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "phenoxymethylpenicillin",
    reference: 40,
    name: "Phenoxymethylpenicillin",
    tags: ["Antibiotic", "Penicillin", "Beta-lactam"],
    drugClass: "Narrow-spectrum beta-lactam antibiotic (penicillin V)",
    indications: [
      "Streptococcal tonsillitis and pharyngitis",
      "Prevention of rheumatic fever and pneumococcal infection in asplenia",
      "Cellulitis and erysipelas (with or after IV penicillin)",
    ],
    mechanism:
      "Binds penicillin-binding proteins to inhibit cross-linking (transpeptidation) of the bacterial peptidoglycan cell wall, causing lysis of dividing organisms. It is active mainly against streptococci and is acid-stable so suitable for oral use, but it is destroyed by beta-lactamases.",
    mechanismSummary:
      "Binds penicillin-binding proteins → inhibits peptidoglycan cross-linking → bacterial cell-wall lysis; narrow spectrum (mainly streptococci); β-lactamase susceptible",
    adrs: [
      "Nausea and diarrhoea",
      "Hypersensitivity — rash, urticaria",
      "Anaphylaxis (rare but serious)",
      "Oral or vaginal candidiasis; antibiotic-associated colitis",
    ],
    keyADRs: ["Hypersensitivity / anaphylaxis"],
    counselling: [
      "Take it on an empty stomach — 30–60 minutes before food or 2 hours after — because food reduces absorption.",
      "Space the doses evenly (usually four times a day) and complete the full course.",
      "Stop and seek urgent help for a widespread rash, facial or throat swelling, or breathing difficulty, and tell future prescribers if you react.",
      "Seek advice for severe or bloody diarrhoea.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "phenytoin",
    reference: 41,
    name: "Phenytoin",
    tags: ["Antiepileptic", "Sodium-channel blocker", "Narrow therapeutic index"],
    drugClass: "Antiepileptic (voltage-gated sodium-channel blocker)",
    indications: [
      "Focal and generalised tonic-clonic seizures",
      "Status epilepticus (IV, after benzodiazepine)",
      "Trigeminal neuralgia (second-line)",
    ],
    mechanism:
      "Binds and prolongs the inactivated state of neuronal voltage-gated sodium channels, limiting sustained high-frequency firing and seizure propagation. It shows saturable (zero-order) kinetics near the therapeutic range, so small dose changes can cause large, unpredictable changes in plasma level. It is a potent enzyme inducer.",
    mechanismSummary:
      "Prolongs the inactivated state of neuronal Na⁺ channels → ↓ high-frequency firing → ↓ seizure spread; saturable zero-order kinetics → narrow therapeutic index; strong CYP450 inducer",
    adrs: [
      "Dose-related nystagmus, ataxia, diplopia, slurred speech and confusion",
      "Gingival hyperplasia, hirsutism, coarsening of facial features, acne",
      "Rash including SJS/TEN (higher risk with HLA-B*1502)",
      "Blood dyscrasias, hepatotoxicity, folate deficiency, osteomalacia; fetal malformations",
    ],
    keyADRs: [
      "Narrow therapeutic index (dose-related neurotoxicity)",
      "Gingival hyperplasia",
    ],
    counselling: [
      "Keep to the same brand and take doses consistently — small changes can tip you into toxicity (unsteadiness, double vision, slurred speech) or loss of seizure control.",
      "Keep up good oral hygiene and regular dental care to limit gum overgrowth.",
      "Report any rash promptly, especially with fever or mouth ulcers.",
      "It interacts with many drugs, including hormonal contraceptives — discuss contraception, and do not stop it suddenly.",
    ],
    sources: [],
  },
  {
    slug: "methylphenidate",
    reference: 42,
    name: "Methylphenidate",
    tags: ["CNS stimulant", "ADHD", "Controlled drug"],
    drugClass: "CNS stimulant (dopamine and noradrenaline reuptake inhibitor)",
    indications: [
      "Attention deficit hyperactivity disorder (ADHD)",
      "Narcolepsy",
    ],
    mechanism:
      "Blocks the dopamine and noradrenaline transporters in the prefrontal cortex and striatum, increasing synaptic catecholamine concentrations. This enhances attention and impulse control in ADHD. Onset and duration depend on whether an immediate- or modified-release formulation is used.",
    mechanismSummary:
      "Blocks dopamine + noradrenaline transporters → ↑ synaptic catecholamines in prefrontal cortex/striatum → improved attention and impulse control in ADHD",
    adrs: [
      "Reduced appetite and weight loss",
      "Insomnia",
      "Raised heart rate and blood pressure",
      "Headache, anxiety, irritability; growth retardation in children with long-term use; rarely tics",
    ],
    keyADRs: [
      "Appetite suppression and growth effects",
      "Raised blood pressure and heart rate",
    ],
    counselling: [
      "Take modified-release doses in the morning to limit sleep disturbance, and give immediate-release doses well before the evening.",
      "Height, weight, pulse and blood pressure are monitored, with planned treatment breaks in children to reassess the need for it.",
      "Report chest pain, fainting, palpitations, or new or worsening mood, aggression or tics.",
      "It is a controlled drug — store it securely and do not share it.",
    ],
    sources: [],
  },
  {
    slug: "senna",
    reference: 43,
    name: "Senna",
    tags: ["Laxative", "Stimulant"],
    drugClass: "Stimulant laxative (anthraquinone)",
    indications: [
      "Short-term treatment of constipation",
      "Bowel clearance before procedures",
      "Opioid-induced constipation (with a stool softener)",
    ],
    mechanism:
      "Sennosides are hydrolysed by colonic bacteria to active anthrone compounds that stimulate the myenteric plexus, increasing colonic motility and propulsive contractions, and reduce net water absorption from the lumen. The effect is usually seen 8–12 hours after an oral dose.",
    mechanismSummary:
      "Colonic bacteria convert sennosides to active anthrones → stimulate myenteric plexus → ↑ colonic motility + ↓ water absorption → bowel movement in 8–12 h",
    adrs: [
      "Abdominal cramps and griping",
      "Diarrhoea",
      "Electrolyte disturbance (e.g. hypokalaemia) with prolonged overuse",
      "Harmless yellow-brown or reddish discoloration of urine",
    ],
    keyADRs: ["Abdominal cramps"],
    counselling: [
      "Take it at bedtime so it works the next morning.",
      "It is generally for short-term use — prolonged daily use can worsen bowel function and lower potassium.",
      "Increase fluid and fibre intake and stay active; seek advice if constipation persists or your bowel habit changes.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "sildenafil",
    reference: 44,
    name: "Sildenafil",
    tags: ["PDE5 inhibitor", "Erectile dysfunction", "Pulmonary hypertension"],
    drugClass: "Phosphodiesterase type 5 (PDE5) inhibitor",
    indications: [
      "Erectile dysfunction",
      "Pulmonary arterial hypertension",
    ],
    mechanism:
      "Inhibits PDE5, the enzyme that breaks down cyclic GMP in vascular smooth muscle. With sexual stimulation and nitric oxide release, cGMP accumulates in the corpus cavernosum, enhancing smooth muscle relaxation and penile blood inflow. It also relaxes pulmonary vasculature, hence its use in pulmonary arterial hypertension.",
    mechanismSummary:
      "Inhibits PDE5 → ↓ breakdown of cGMP in vascular smooth muscle → ↑ cGMP with NO/sexual stimulation → corpus cavernosum relaxation + penile inflow; also pulmonary vasodilation",
    adrs: [
      "Headache, flushing and nasal congestion",
      "Dyspepsia",
      "Dizziness and hypotension",
      "Visual disturbance (blue tint, blurring); rarely priapism, sudden hearing loss, NAION",
    ],
    keyADRs: ["Hypotension (especially with nitrates)"],
    counselling: [
      "Do not take it with nitrates or nicorandil — the combination can cause a dangerous drop in blood pressure.",
      "Take it about 1 hour before sex; a heavy or high-fat meal slows the effect, and it only works with sexual arousal.",
      "Seek urgent help for an erection lasting over 4 hours, sudden vision or hearing loss, or chest pain during sex.",
      "If bought without a prescription, still have a medical review, as erectile dysfunction can signal underlying disease.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "tamsulosin",
    reference: 45,
    name: "Tamsulosin",
    tags: ["Alpha blocker", "BPH", "Uroselective"],
    drugClass: "Uroselective alpha-1A adrenoceptor antagonist",
    indications: [
      "Benign prostatic hyperplasia — bladder outflow symptoms",
      "Medical expulsive therapy for distal ureteric stones (off-label)",
    ],
    mechanism:
      "Preferentially blocks alpha-1A adrenoceptors, which predominate in prostatic and bladder-neck smooth muscle, relaxing them to relieve bladder outflow obstruction in benign prostatic hyperplasia. Its relative uroselectivity means less effect on blood pressure than non-selective alpha blockers, though postural symptoms still occur.",
    mechanismSummary:
      "Preferentially blocks α1A adrenoceptors (prostate/bladder neck) → smooth muscle relaxation → ↓ bladder outflow obstruction in BPH; relatively uroselective → less BP effect than non-selective α blockers",
    adrs: [
      "Dizziness and postural hypotension",
      "Abnormal ejaculation (retrograde or reduced volume)",
      "Headache",
      "Nasal congestion; rarely priapism",
    ],
    keyADRs: [
      "Postural hypotension and dizziness",
      "Abnormal ejaculation",
    ],
    counselling: [
      "Take it after the same meal each day; take the first dose when you can sit or lie down if you feel dizzy.",
      "Reduced or 'dry' ejaculation is common and harmless, and reverses on stopping.",
      "Tell your eye surgeon you take, or have taken, it before cataract surgery, as it can cause 'floppy iris syndrome'.",
      "It treats the symptoms, not the underlying enlargement.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "temazepam",
    reference: 46,
    name: "Temazepam",
    tags: ["Benzodiazepine", "Hypnotic", "Controlled drug"],
    drugClass: "Short-to-intermediate-acting benzodiazepine hypnotic",
    indications: [
      "Short-term management of severe insomnia",
      "Premedication before surgery or procedures",
    ],
    mechanism:
      "Enhances GABA-A receptor activity by increasing the frequency of chloride channel opening, causing CNS depression. Its relatively short half-life and lack of active metabolites make it suitable as a hypnotic, with less morning hangover than long-acting benzodiazepines.",
    mechanismSummary:
      "Enhances GABA-A activity → ↑ Cl⁻ channel opening frequency → CNS depression → sedation and sleep onset; short half-life, no active metabolites → less morning hangover",
    adrs: [
      "Daytime drowsiness and impaired coordination",
      "Tolerance and dependence with continued use",
      "Rebound insomnia and withdrawal on stopping",
      "Falls and confusion in older people; respiratory depression with alcohol or opioids",
    ],
    keyADRs: [
      "Dependence",
      "Next-day sedation",
    ],
    counselling: [
      "Use it for a short course only (ideally a few days, up to 2–4 weeks) — it stops working and becomes habit-forming with regular use.",
      "Take it only when you can get a full night's sleep, and do not drive the next day if you still feel drowsy.",
      "Avoid alcohol and other sedatives.",
      "Do not stop abruptly after regular use — the dose is reduced gradually.",
    ],
    sources: [],
  },
  {
    slug: "tramadol",
    reference: 47,
    name: "Tramadol",
    tags: ["Opioid", "Analgesic", "Controlled drug"],
    drugClass: "Atypical opioid analgesic (weak mu-opioid agonist plus monoamine reuptake inhibition)",
    indications: [
      "Moderate-to-severe pain",
      "Pain not responding to non-opioid analgesia",
    ],
    mechanism:
      "A weak agonist at mu-opioid receptors (its O-desmethyl metabolite, formed by CYP2D6, is more potent) that also inhibits reuptake of serotonin and noradrenaline, enhancing descending inhibitory pain pathways. The dual action gives analgesia even in some opioid-resistant pain, but adds serotonergic and seizure risk.",
    mechanismSummary:
      "Weak µ-opioid agonist (active CYP2D6 metabolite) + serotonin/noradrenaline reuptake inhibition → dual analgesic action via descending pain inhibition; adds serotonin-syndrome and seizure risk",
    adrs: [
      "Nausea, vomiting and dizziness",
      "Constipation and drowsiness",
      "Lowered seizure threshold",
      "Serotonin syndrome (with other serotonergic drugs); dependence",
    ],
    keyADRs: [
      "Seizure risk",
      "Serotonin syndrome",
    ],
    counselling: [
      "Report agitation, sweating, shivering, tremor or diarrhoea, especially if you also take antidepressants or triptans (serotonin syndrome).",
      "Tell your prescriber if you have epilepsy or take medicines that lower the seizure threshold.",
      "Take care with driving and avoid alcohol.",
      "Do not stop suddenly after regular use — taper to avoid withdrawal.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "trimethoprim",
    reference: 48,
    name: "Trimethoprim",
    tags: ["Antibiotic", "Folate synthesis inhibitor", "UTI"],
    drugClass: "Antibacterial (dihydrofolate reductase inhibitor)",
    indications: [
      "Uncomplicated urinary tract infection",
      "Prophylaxis of recurrent UTI",
      "Acute exacerbations of chronic bronchitis",
    ],
    mechanism:
      "Selectively inhibits bacterial dihydrofolate reductase, blocking reduction of dihydrofolate to tetrahydrofolate and therefore the synthesis of purines, thymidine and bacterial DNA. It is bacteriostatic and concentrates in the urine, making it useful for uncomplicated urinary tract infection.",
    mechanismSummary:
      "Inhibits bacterial dihydrofolate reductase → ↓ tetrahydrofolate → ↓ purine/thymidine/DNA synthesis → bacteriostatic; concentrates in urine → used for uncomplicated UTI",
    adrs: [
      "Nausea, vomiting and diarrhoea",
      "Pruritus and rash",
      "Hyperkalaemia (blocks distal tubular potassium excretion)",
      "Raised creatinine; folate-related marrow suppression on prolonged use; rarely severe skin reactions",
    ],
    keyADRs: [
      "Hyperkalaemia",
      "Rash",
    ],
    counselling: [
      "A short course (usually 3 days for an uncomplicated UTI in women) is typical — complete it as prescribed.",
      "Avoid it in pregnancy, especially the first trimester (it is a folate antagonist and risks neural tube defects).",
      "It can raise potassium — extra caution if you take an ACE inhibitor or ARB, spironolactone or potassium supplements.",
      "Seek advice for a spreading rash, mouth ulcers or blistering.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "verapamil",
    reference: 49,
    name: "Verapamil",
    tags: ["Calcium-channel blocker", "Non-dihydropyridine", "Rate control"],
    drugClass: "Non-dihydropyridine (phenylalkylamine) calcium-channel blocker",
    indications: [
      "Supraventricular arrhythmias — rate control and termination of SVT",
      "Angina, including vasospastic angina",
      "Hypertension",
    ],
    mechanism:
      "Blocks L-type calcium channels in cardiac tissue and vascular smooth muscle, with cardiac effects predominating: it slows sinoatrial and atrioventricular node conduction (rate control, termination of SVT) and reduces contractility, with some vasodilation. It is negatively inotropic and chronotropic.",
    mechanismSummary:
      "Blocks L-type Ca²⁺ channels in heart > vessels → ↓ SA/AV node conduction (rate control) + ↓ contractility + mild vasodilation; negatively inotropic and chronotropic",
    adrs: [
      "Constipation (common)",
      "Bradycardia and heart block",
      "Worsening of heart failure (negative inotropy)",
      "Ankle oedema, flushing, headache, dizziness",
    ],
    keyADRs: [
      "Constipation",
      "Bradycardia / heart block",
    ],
    counselling: [
      "Constipation is the most common problem — increase fluid, fibre and activity, and use a laxative if needed.",
      "It must not usually be combined with a beta blocker (risk of severe bradycardia, heart block or heart failure) — check with your prescriber.",
      "Avoid grapefruit juice, which raises drug levels.",
      "Report a very slow pulse, breathlessness, or swelling of the ankles.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "zopiclone",
    reference: 50,
    name: "Zopiclone",
    tags: ["Z-drug", "Hypnotic", "Controlled drug"],
    drugClass: "Non-benzodiazepine hypnotic ('Z-drug', cyclopyrrolone)",
    indications: [
      "Short-term management of severe insomnia",
    ],
    mechanism:
      "Acts at the benzodiazepine binding site of the GABA-A receptor, enhancing GABA-mediated chloride conductance to produce sedation and sleep. It is structurally unrelated to benzodiazepines but shares their dependence and tolerance liability, and has a relatively short half-life.",
    mechanismSummary:
      "Binds the benzodiazepine site of GABA-A → ↑ GABA-mediated Cl⁻ conductance → sedation and sleep; short half-life; benzodiazepine-like dependence and tolerance liability",
    adrs: [
      "Bitter or metallic taste",
      "Daytime drowsiness and impaired coordination",
      "Tolerance and dependence; rebound insomnia",
      "Falls and confusion in older people; rarely parasomnias (sleep-walking, sleep-driving)",
    ],
    keyADRs: [
      "Dependence",
      "Next-day sedation",
    ],
    counselling: [
      "Use it for the shortest time possible — a few days up to 2 weeks — because it stops working and becomes habit-forming.",
      "A metallic taste is common and harmless.",
      "Do not drink alcohol, and do not drive if you feel drowsy or 'hungover' the next day (you may be over the drug-driving limit).",
      "Take it immediately before bed only when you can allow 7–8 hours for sleep, and do not stop abruptly after regular use.",
    ],
    sources: ["NHS"],
  },
];
