import { Drug } from "@/lib/types";

// Content checked against the NHS medicines pages (nhs.uk/medicines/...) in
// Sept 2026. BNF and DrugBank could not be reached programmatically, so only
// sources actually confirmed are listed in each `sources` array.
export const year1Drugs: Drug[] = [
  {
    slug: "adrenaline",
    reference: 1,
    name: "Adrenaline",
    tags: ["Sympathomimetic", "Emergency"],
    drugClass: "Sympathomimetic (non-selective adrenergic agonist)",
    indications: [
      "Anaphylaxis (first-line)",
      "Cardiac arrest",
      "Severe croup (nebulised)",
      "Life-threatening asthma / bronchospasm",
    ],
    mechanism:
      "Stimulates alpha-1, beta-1 and beta-2 adrenergic receptors. Alpha-1 activation causes vasoconstriction (reduces mucosal oedema and raises blood pressure); beta-1 activation increases heart rate and contractility; beta-2 activation relaxes bronchial smooth muscle. This combination reverses the airway, breathing and circulation problems seen in anaphylaxis.",
    mechanismSummary:
      "α1 → vasoconstriction (↓ mucosal oedema, ↑ BP); β1 → ↑ heart rate + contractility; β2 → bronchodilation → reverses airway/breathing/circulation collapse in anaphylaxis",
    adrs: [
      "Tachycardia and palpitations",
      "Anxiety and tremor",
      "Headache",
      "Cold peripheries (vasoconstriction)",
    ],
    keyADRs: ["Tachycardia and palpitations"],
    counselling: [
      "For an auto-injector: administer into the outer mid-thigh, hold in place for the time stated by the device, and call emergency services immediately after use.",
      "Always carry two auto-injectors in case a second dose is needed.",
      "Check the expiry date regularly and replace before it lapses.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "amlodipine",
    reference: 2,
    name: "Amlodipine",
    tags: ["Calcium-channel blocker", "Cardiovascular"],
    drugClass: "Dihydropyridine calcium-channel blocker",
    indications: [
      "Hypertension",
      "Chronic stable and vasospastic angina",
    ],
    mechanism:
      "Blocks L-type calcium channels in vascular smooth muscle, reducing calcium influx and causing arterial vasodilation. This lowers peripheral resistance and blood pressure, with relatively little effect on cardiac conduction compared with non-dihydropyridine calcium-channel blockers.",
    mechanismSummary:
      "Blocks L-type Ca²⁺ channels in vascular smooth muscle → ↓ Ca²⁺ influx → arterial vasodilation → ↓ peripheral resistance + BP (little effect on cardiac conduction)",
    adrs: [
      "Ankle oedema",
      "Flushing and headache",
      "Palpitations",
      "Dizziness",
    ],
    keyADRs: ["Ankle oedema"],
    counselling: [
      "Ankle swelling is a recognised effect and usually improves by taking the dose in the evening or by raising the legs; it is not usually a reason to stop treatment without advice.",
      "Avoid grapefruit juice, as it can increase amlodipine levels.",
      "Rise slowly from sitting or lying to reduce dizziness.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "aspirin",
    reference: 3,
    name: "Aspirin",
    tags: ["Antiplatelet", "NSAID", "Cardiovascular"],
    drugClass: "Antiplatelet (salicylate, irreversible COX inhibitor)",
    indications: [
      "Secondary prevention of MI, stroke and TIA (low-dose antiplatelet)",
      "Acute coronary syndrome",
      "Mild-to-moderate pain and fever (analgesic dose)",
    ],
    mechanism:
      "Irreversibly inhibits cyclo-oxygenase-1 (COX-1) in platelets, preventing thromboxane A2 synthesis and thereby reducing platelet aggregation for the lifetime of the platelet (about 7–10 days). At higher analgesic doses it also inhibits COX-2 to reduce prostaglandin-mediated pain and inflammation.",
    mechanismSummary:
      "Irreversibly acetylates COX-1 in platelets → ↓ thromboxane A₂ → ↓ platelet aggregation for platelet lifespan (~7–10 days); higher doses also inhibit COX-2 → ↓ pain/inflammation",
    adrs: [
      "Gastrointestinal irritation and bleeding",
      "Bruising or increased bleeding tendency",
      "Bronchospasm in susceptible (aspirin-sensitive) patients",
      "Tinnitus in overdose/high dose",
    ],
    keyADRs: ["Gastrointestinal irritation and bleeding"],
    counselling: [
      "Take with or after food to reduce stomach upset.",
      "Report black/tarry stools or unusual bruising promptly.",
      "Do not use for pain relief in children under 16 years because of the risk of Reye's syndrome.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "atenolol",
    reference: 4,
    name: "Atenolol",
    tags: ["Beta blocker", "Cardiovascular"],
    drugClass: "Cardioselective beta-1 adrenergic blocker",
    indications: [
      "Hypertension",
      "Angina",
      "Rate control in arrhythmias such as atrial fibrillation",
      "Secondary prevention after MI",
    ],
    mechanism:
      "Selectively blocks beta-1 receptors in the heart, reducing heart rate, myocardial contractility and cardiac output, and suppressing renin release. This lowers blood pressure and myocardial oxygen demand, useful in hypertension, angina and rate control.",
    mechanismSummary:
      "Selective β1 blockade → ↓ heart rate, contractility, cardiac output + ↓ renin release → ↓ BP and myocardial O₂ demand",
    adrs: [
      "Fatigue and cold extremities",
      "Bradycardia",
      "Bronchospasm (caution in asthma/COPD)",
      "Sleep disturbance",
    ],
    keyADRs: ["Bradycardia"],
    counselling: [
      "Do not stop abruptly — sudden withdrawal can precipitate rebound angina or hypertension; doses should be tapered.",
      "Report a resting pulse that feels unusually slow or symptoms of dizziness/fainting.",
      "Tell your prescriber if you have asthma, as beta blockers can worsen bronchospasm.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "bendroflumethiazide",
    reference: 5,
    name: "Bendroflumethiazide",
    tags: ["Thiazide diuretic", "Cardiovascular"],
    drugClass: "Thiazide diuretic",
    indications: [
      "Hypertension",
      "Mild heart failure and fluid retention (oedema)",
    ],
    mechanism:
      "Inhibits the sodium-chloride co-transporter in the distal convoluted tubule, reducing sodium (and consequently water) reabsorption. This produces a diuretic effect and, with chronic use, a vasodilatory antihypertensive effect.",
    mechanismSummary:
      "Blocks Na⁺/Cl⁻ co-transporter in distal convoluted tubule → ↓ Na⁺ and water reabsorption → diuresis; chronic use → vasodilation → ↓ BP",
    adrs: [
      "Hypokalaemia",
      "Hyponatraemia",
      "Increased urination",
      "Postural hypotension and dizziness",
    ],
    keyADRs: ["Hypokalaemia"],
    counselling: [
      "Take in the morning to avoid needing to urinate overnight.",
      "Report muscle cramps or weakness, which can suggest low potassium.",
      "Routine blood tests are used to monitor electrolytes, particularly at the start of treatment.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "clopidogrel",
    reference: 6,
    name: "Clopidogrel",
    tags: ["Antiplatelet", "Cardiovascular"],
    drugClass: "Antiplatelet (P2Y12 receptor antagonist, thienopyridine)",
    indications: [
      "Secondary prevention of MI, ischaemic stroke and peripheral arterial disease",
      "Acute coronary syndrome (with aspirin)",
      "Prevention of stent thrombosis after PCI",
    ],
    mechanism:
      "A prodrug converted by hepatic CYP enzymes (mainly CYP2C19) to an active metabolite that irreversibly binds the P2Y12 ADP receptor on platelets, preventing ADP-mediated platelet activation and aggregation for the platelet's lifespan.",
    mechanismSummary:
      "Prodrug (CYP2C19) → active metabolite irreversibly blocks platelet P2Y12 ADP receptor → ↓ ADP-mediated platelet activation/aggregation for platelet lifespan",
    adrs: [
      "Increased bleeding risk and bruising",
      "Gastrointestinal upset",
      "Dyspepsia",
      "Rash",
    ],
    keyADRs: ["Increased bleeding risk and bruising"],
    counselling: [
      "Report unusual or prolonged bleeding, or blood in stool/urine, to a healthcare professional.",
      "Tell any prescriber or dentist that you are taking clopidogrel before a procedure.",
      "Effectiveness can be reduced by some other medicines (e.g. omeprazole) — check before starting new medicines.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "codeine",
    reference: 7,
    name: "Codeine",
    tags: ["Opioid", "Analgesic"],
    drugClass: "Weak opioid analgesic",
    indications: [
      "Mild-to-moderate pain, often combined with paracetamol",
      "Dry cough (short-term)",
      "Acute diarrhoea",
    ],
    mechanism:
      "Acts mainly as a prodrug, partially metabolised by CYP2D6 to morphine, which binds mu-opioid receptors in the central nervous system to reduce pain perception. Codeine itself also has some direct weak opioid agonist activity and suppresses the cough reflex centrally.",
    mechanismSummary:
      "Prodrug → CYP2D6 → morphine → µ-opioid receptor agonism in CNS → ↓ pain perception; central action also ↓ cough reflex",
    adrs: [
      "Constipation",
      "Drowsiness and sedation",
      "Nausea",
      "Risk of dependence with prolonged use",
    ],
    keyADRs: ["Constipation"],
    counselling: [
      "Take with food if it causes nausea; a high-fibre diet, fluids and gentle exercise can help prevent constipation.",
      "Avoid driving or operating machinery until you know how it affects you, as it can cause drowsiness.",
      "Avoid alcohol, which increases sedative effects.",
      "Use for the shortest time needed at the lowest effective dose because of dependence risk.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "furosemide",
    reference: 8,
    name: "Furosemide",
    tags: ["Loop diuretic", "Cardiovascular"],
    drugClass: "Loop diuretic",
    indications: [
      "Acute pulmonary oedema (IV)",
      "Chronic heart failure",
      "Oedema in renal or hepatic disease",
      "Resistant hypertension",
    ],
    mechanism:
      "Inhibits the Na-K-2Cl co-transporter (NKCC2) in the thick ascending limb of the loop of Henle, causing a potent diuresis by preventing reabsorption of sodium, potassium and chloride. Used for fluid overload in heart failure, oedema and some cases of hypertension.",
    mechanismSummary:
      "Inhibits Na⁺-K⁺-2Cl⁻ co-transporter (NKCC2) in thick ascending limb → potent ↓ Na⁺/K⁺/Cl⁻ reabsorption → strong diuresis → ↓ fluid overload",
    adrs: [
      "Hypokalaemia",
      "Dehydration and hypotension",
      "Increased urination",
      "Ototoxicity with rapid IV administration/high doses",
    ],
    keyADRs: ["Hypokalaemia"],
    counselling: [
      "Take in the morning (or as directed) to avoid disturbed sleep from increased urination.",
      "Report dizziness, muscle cramps or unusual thirst, which can indicate dehydration or electrolyte imbalance.",
      "Weigh yourself regularly if advised, as this helps track fluid status.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "gliclazide",
    reference: 9,
    name: "Gliclazide",
    tags: ["Sulfonylurea", "Diabetes"],
    drugClass: "Sulfonylurea (oral antidiabetic)",
    indications: [
      "Type 2 diabetes mellitus, when metformin is insufficient or not tolerated",
    ],
    mechanism:
      "Binds sulfonylurea receptors (SUR1) on pancreatic beta-cell ATP-sensitive potassium channels, causing channel closure, cell depolarisation, calcium influx and stimulation of insulin release independent of blood glucose level.",
    mechanismSummary:
      "Closes β-cell KATP channels (SUR1) → depolarisation → Ca²⁺ influx → ↑ insulin secretion (glucose-independent) → ↓ blood glucose",
    adrs: [
      "Hypoglycaemia",
      "Weight gain",
      "Gastrointestinal upset",
      "Headache",
    ],
    keyADRs: ["Hypoglycaemia"],
    counselling: [
      "Take with or shortly before food to reduce the risk of low blood sugar.",
      "Recognise and treat hypoglycaemia promptly (sweating, shaking, confusion) with a fast-acting sugar source.",
      "Do not skip meals after taking a dose.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "glyceryl-trinitrate",
    reference: 10,
    name: "Glyceryl trinitrate",
    tags: ["Nitrate", "Angina"],
    drugClass: "Organic nitrate vasodilator",
    indications: [
      "Acute angina — sublingual, to abort or prevent an attack",
      "Angina prophylaxis before exertion",
      "Acute heart failure / pulmonary oedema (IV)",
      "Anal fissure (topical)",
    ],
    mechanism:
      "Metabolised to release nitric oxide, which activates guanylate cyclase to increase cyclic GMP in vascular smooth muscle, causing relaxation. Predominantly venodilates at lower doses, reducing preload and myocardial oxygen demand, providing rapid relief of angina.",
    mechanismSummary:
      "Releases NO → ↑ guanylate cyclase → ↑ cGMP in vascular smooth muscle → venodilation → ↓ preload → ↓ myocardial O₂ demand → rapid angina relief",
    adrs: [
      "Headache (often pulsating)",
      "Flushing",
      "Postural hypotension and dizziness",
      "Reflex tachycardia",
    ],
    keyADRs: ["Headache (often pulsating)"],
    counselling: [
      "For sublingual spray/tablets: sit down before use, as it can cause dizziness or fainting; repeat after 5 minutes if pain persists and seek emergency help if it has not resolved after a second dose.",
      "Headache is common and usually settles with continued use; simple analgesia can help.",
      "Do not take with medicines for erectile dysfunction (e.g. sildenafil) because of the risk of severe hypotension.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "hyoscine-butylbromide",
    reference: 11,
    name: "Hyoscine butylbromide",
    tags: ["Antimuscarinic", "Antispasmodic"],
    drugClass: "Antimuscarinic antispasmodic",
    indications: [
      "Abdominal cramps in irritable bowel syndrome",
      "Smooth muscle spasm of the GI or genitourinary tract",
      "Colicky pain and secretions in palliative care",
    ],
    mechanism:
      "Antagonises muscarinic acetylcholine receptors on smooth muscle of the gastrointestinal (and genitourinary) tract, reducing smooth muscle spasm and motility. It is quaternary in structure so it penetrates the blood-brain barrier poorly, limiting central antimuscarinic effects.",
    mechanismSummary:
      "Blocks muscarinic (M3) receptors on GI/GU smooth muscle → ↓ spasm and motility; quaternary amine → poor CNS penetration → few central effects",
    adrs: [
      "Dry mouth",
      "Constipation",
      "Blurred vision",
      "Tachycardia",
    ],
    keyADRs: ["Dry mouth"],
    counselling: [
      "Sugar-free sweets or sips of water can help relieve dry mouth.",
      "Caution in glaucoma, as antimuscarinic effects can raise intraocular pressure.",
      "Seek advice if abdominal pain is severe, persistent, or associated with other concerning symptoms.",
    ],
    sources: [],
  },
  {
    slug: "ibuprofen",
    reference: 12,
    name: "Ibuprofen",
    tags: ["NSAID", "Analgesic"],
    drugClass: "Non-steroidal anti-inflammatory drug (NSAID)",
    indications: [
      "Mild-to-moderate pain — musculoskeletal, dental, period, headache",
      "Inflammatory conditions such as osteoarthritis and rheumatoid arthritis",
      "Fever",
    ],
    mechanism:
      "Non-selectively inhibits cyclo-oxygenase (COX-1 and COX-2), reducing prostaglandin synthesis. This produces analgesic, anti-inflammatory and antipyretic effects, while reduced COX-1 activity in the gastric mucosa and kidney accounts for its main adverse effects.",
    mechanismSummary:
      "Non-selectively inhibits COX-1 and COX-2 → ↓ prostaglandins → analgesic/anti-inflammatory/antipyretic; ↓ COX-1 in gastric mucosa + kidney → GI and renal ADRs",
    adrs: [
      "Gastrointestinal irritation, ulceration or bleeding",
      "Renal impairment with prolonged use or in susceptible patients",
      "Fluid retention and raised blood pressure",
      "Bronchospasm in aspirin/NSAID-sensitive patients",
    ],
    keyADRs: ["Gastrointestinal irritation, ulceration or bleeding"],
    counselling: [
      "Take with or after food to reduce stomach upset.",
      "Use the lowest effective dose for the shortest time needed.",
      "Avoid if you have a history of stomach ulcers or significant kidney disease unless advised otherwise by a prescriber.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "loperamide",
    reference: 13,
    name: "Loperamide",
    tags: ["Antimotility", "Opioid receptor agonist"],
    drugClass: "Opioid-receptor agonist (peripherally acting antidiarrhoeal)",
    indications: [
      "Acute diarrhoea",
      "Chronic diarrhoea, e.g. in IBS",
      "Reduction of high ileostomy or colostomy output",
    ],
    mechanism:
      "Acts on mu-opioid receptors in the gut wall to reduce intestinal motility and increase transit time, allowing greater water reabsorption. It does not readily cross the blood-brain barrier at normal doses, so it produces little to no central opioid effect.",
    mechanismSummary:
      "µ-opioid receptor agonist in gut wall → ↓ intestinal motility → ↑ transit time → ↑ water reabsorption; minimal CNS entry → no central opioid effect at normal doses",
    adrs: [
      "Constipation",
      "Abdominal cramps",
      "Dizziness",
      "Nausea",
    ],
    keyADRs: ["Constipation"],
    counselling: [
      "Stop taking if diarrhoea persists beyond 48 hours, or if fever or blood in stool occurs — seek medical advice.",
      "Maintain adequate fluid intake to prevent dehydration while unwell.",
      "Not generally recommended for young children without medical advice.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "losartan",
    reference: 14,
    name: "Losartan",
    tags: ["ARB", "Cardiovascular"],
    drugClass: "Angiotensin II receptor blocker (ARB)",
    indications: [
      "Hypertension",
      "Diabetic nephropathy",
      "Chronic heart failure when an ACE inhibitor is not tolerated",
    ],
    mechanism:
      "Selectively blocks the angiotensin II type 1 (AT1) receptor, preventing the vasoconstrictive and aldosterone-stimulating effects of angiotensin II. This lowers peripheral resistance and blood pressure without the bradykinin accumulation seen with ACE inhibitors, which is why ARBs typically do not cause a dry cough.",
    mechanismSummary:
      "Blocks angiotensin II AT1 receptor → ↓ vasoconstriction + ↓ aldosterone → ↓ BP; no bradykinin build-up → no dry cough (unlike ACE inhibitors)",
    adrs: [
      "Dizziness",
      "Hyperkalaemia",
      "Hypotension",
      "Renal function changes",
    ],
    keyADRs: ["Hyperkalaemia"],
    counselling: [
      "Often used as an alternative for patients who cannot tolerate the dry cough associated with ACE inhibitors.",
      "Report swelling of the face, lips or tongue, or difficulty breathing, immediately.",
      "Routine blood tests may be used to monitor kidney function and potassium levels.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "metformin",
    reference: 15,
    name: "Metformin",
    tags: ["Biguanide", "Diabetes"],
    drugClass: "Biguanide (oral antidiabetic)",
    indications: [
      "Type 2 diabetes mellitus (first-line)",
      "Polycystic ovary syndrome (off-label)",
    ],
    mechanism:
      "Reduces hepatic gluconeogenesis and glucose output from the liver, and increases peripheral insulin sensitivity, improving glucose uptake in muscle. It does not stimulate insulin secretion, so it carries a low risk of causing hypoglycaemia when used alone.",
    mechanismSummary:
      "↓ hepatic gluconeogenesis + ↑ peripheral insulin sensitivity → ↓ blood glucose; does not stimulate insulin secretion → low hypoglycaemia risk alone",
    adrs: [
      "Gastrointestinal upset (nausea, diarrhoea)",
      "Metallic taste",
      "Vitamin B12 deficiency with long-term use",
      "Lactic acidosis (rare, mainly in renal impairment)",
    ],
    keyADRs: ["Gastrointestinal upset (nausea, diarrhoea)"],
    counselling: [
      "Take with or after food to reduce gastrointestinal side effects.",
      "GI upset is common when starting treatment and often settles; a modified-release form can also help.",
      "Report symptoms of lactic acidosis such as unusual muscle pain, breathlessness or feeling very unwell, particularly if kidney function is impaired.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "nifedipine",
    reference: 16,
    name: "Nifedipine",
    tags: ["Calcium-channel blocker", "Cardiovascular"],
    drugClass: "Dihydropyridine calcium-channel blocker",
    indications: [
      "Hypertension",
      "Chronic stable and vasospastic (Prinzmetal) angina",
      "Raynaud's phenomenon",
    ],
    mechanism:
      "Blocks L-type calcium channels in vascular smooth muscle, producing potent arterial vasodilation with minimal direct effect on cardiac conduction. Modified-release formulations are generally used in chronic hypertension/angina to avoid rapid blood pressure swings from short-acting preparations.",
    mechanismSummary:
      "Blocks L-type Ca²⁺ channels in vascular smooth muscle → arterial vasodilation → ↓ BP (minimal effect on cardiac conduction); modified-release avoids reflex tachycardia",
    adrs: [
      "Flushing and headache",
      "Ankle oedema",
      "Reflex tachycardia (especially with short-acting forms)",
      "Dizziness",
    ],
    keyADRs: ["Ankle oedema"],
    counselling: [
      "Swallow modified-release tablets whole; do not chew or crush.",
      "Avoid grapefruit juice, which can increase drug levels.",
      "Immediate-release capsules are generally avoided for chronic use because of blood pressure fluctuations — check which formulation has been prescribed.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "paracetamol",
    reference: 17,
    name: "Paracetamol",
    tags: ["Analgesic", "Antipyretic"],
    drugClass: "Analgesic and antipyretic (mechanism not fully established)",
    indications: [
      "Mild-to-moderate pain",
      "Fever",
      "Adjunct to opioids in moderate-to-severe pain",
    ],
    mechanism:
      "The precise mechanism is not completely understood but is thought to involve central inhibition of prostaglandin synthesis (possibly via a COX variant) and modulation of the descending serotonergic pain pathway, producing analgesic and antipyretic effects with minimal peripheral anti-inflammatory action.",
    mechanismSummary:
      "Not fully established: central ↓ prostaglandin synthesis + modulation of descending serotonergic pain pathway → analgesia/antipyresis, minimal peripheral anti-inflammatory effect",
    adrs: [
      "Generally well tolerated at recommended doses",
      "Hepatotoxicity in overdose",
      "Rare hypersensitivity reactions",
    ],
    keyADRs: ["Hepatotoxicity in overdose"],
    counselling: [
      "Do not exceed the maximum daily dose, and check other products (e.g. cold and flu remedies) for hidden paracetamol content to avoid accidental overdose.",
      "Seek urgent medical help if an overdose is taken or suspected, even if you feel well — liver damage can occur before symptoms appear.",
      "Considered safe for regular use at standard doses, including in pregnancy, when taken as directed.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "prednisolone",
    reference: 18,
    name: "Prednisolone",
    tags: ["Corticosteroid", "Anti-inflammatory"],
    drugClass: "Glucocorticoid (systemic corticosteroid)",
    indications: [
      "Inflammatory and autoimmune disease — asthma/COPD exacerbations, IBD, rheumatoid arthritis",
      "Allergic states",
      "Immunosuppression, e.g. after transplant",
      "Croup and some malignancies such as lymphoma",
    ],
    mechanism:
      "Binds intracellular glucocorticoid receptors, altering gene transcription to reduce production of inflammatory mediators (e.g. cytokines, prostaglandins) and suppress immune cell activity, producing broad anti-inflammatory and immunosuppressive effects.",
    mechanismSummary:
      "Binds glucocorticoid receptor → altered gene transcription → ↓ cytokines/prostaglandins + ↓ immune cell activity → broad anti-inflammatory + immunosuppressive effect",
    adrs: [
      "Increased infection risk (immunosuppression)",
      "Weight gain and increased appetite",
      "Mood changes and sleep disturbance",
      "Adrenal suppression with long-term use",
    ],
    keyADRs: ["Adrenal suppression with long-term use"],
    counselling: [
      "Do not stop abruptly after prolonged use — the dose must usually be tapered gradually to allow the adrenal glands to recover.",
      "Carry a steroid treatment card if on long-term therapy, and mention steroid use to any healthcare professional, including dentists.",
      "Take in the morning with food to reduce stomach irritation and mimic the body's natural cortisol rhythm.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "propranolol",
    reference: 19,
    name: "Propranolol",
    tags: ["Beta blocker", "Non-selective"],
    drugClass: "Non-selective beta adrenergic blocker",
    indications: [
      "Angina and hypertension",
      "Rate control in arrhythmias and thyrotoxicosis",
      "Migraine prophylaxis",
      "Somatic symptoms of anxiety and essential tremor",
    ],
    mechanism:
      "Blocks both beta-1 (cardiac) and beta-2 (vascular/bronchial) adrenergic receptors, reducing heart rate and contractility while also causing peripheral vasoconstriction and bronchoconstriction. It is lipophilic and crosses the blood-brain barrier, which contributes to its use in anxiety-related tremor and migraine prophylaxis.",
    mechanismSummary:
      "Non-selective β1 + β2 blockade → ↓ heart rate/contractility, peripheral vasoconstriction, bronchoconstriction; lipophilic → crosses BBB → useful in tremor and migraine prophylaxis",
    adrs: [
      "Bradycardia",
      "Fatigue and cold extremities",
      "Bronchospasm (contraindicated in asthma)",
      "Sleep disturbance and vivid dreams",
    ],
    keyADRs: ["Bronchospasm (contraindicated in asthma)"],
    counselling: [
      "Should be avoided in people with asthma or a history of bronchospasm because it is non-selective and can trigger airway narrowing.",
      "Do not stop abruptly; the dose should be reduced gradually to avoid rebound symptoms.",
      "May be used for anxiety-related physical symptoms (e.g. tremor, palpitations) as it does not treat the psychological symptoms of anxiety.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "pseudoephedrine",
    reference: 20,
    name: "Pseudoephedrine",
    tags: ["Sympathomimetic", "Decongestant"],
    drugClass: "Sympathomimetic decongestant",
    indications: [
      "Nasal congestion in colds, sinusitis and allergic rhinitis",
    ],
    mechanism:
      "Stimulates alpha-adrenergic receptors in the nasal mucosa, causing vasoconstriction that reduces blood flow, swelling and congestion in the nasal passages. It also has some beta-adrenergic activity, which can contribute to its stimulant side effects.",
    mechanismSummary:
      "Stimulates α-adrenergic receptors in nasal mucosa → vasoconstriction → ↓ mucosal blood flow, swelling and congestion; some β activity → stimulant ADRs",
    adrs: [
      "Insomnia and restlessness",
      "Increased heart rate and blood pressure",
      "Headache",
      "Dry mouth",
    ],
    keyADRs: ["Increased heart rate and blood pressure"],
    counselling: [
      "Avoid taking in the evening where possible, as it can cause difficulty sleeping.",
      "Use with caution or avoid in people with high blood pressure or heart problems.",
      "Sale is restricted in some countries/pharmacies due to potential misuse in illicit drug manufacture — a pharmacist may ask questions before supply.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "ramipril",
    reference: 21,
    name: "Ramipril",
    tags: ["ACE inhibitor", "Cardiovascular"],
    drugClass: "Angiotensin-converting enzyme (ACE) inhibitor",
    indications: [
      "Hypertension",
      "Chronic heart failure",
      "Secondary prevention after MI and in high cardiovascular risk",
      "Diabetic and non-diabetic nephropathy",
    ],
    mechanism:
      "Inhibits ACE, reducing conversion of angiotensin I to angiotensin II. This lowers vasoconstriction and aldosterone-driven sodium/water retention, reducing blood pressure. Reduced breakdown of bradykinin (normally degraded by ACE) contributes to the characteristic dry cough.",
    mechanismSummary:
      "Inhibits ACE → ↓ angiotensin II → ↓ vasoconstriction + ↓ aldosterone (↓ Na⁺/water retention) → ↓ BP; ↓ bradykinin breakdown → dry cough",
    adrs: [
      "Dry, persistent cough",
      "Hyperkalaemia",
      "Hypotension, especially after the first dose",
      "Angioedema (rare but serious)",
    ],
    keyADRs: ["Dry, persistent cough"],
    counselling: [
      "A persistent dry cough is a recognised class effect; if troublesome, discuss switching to an angiotensin receptor blocker (ARB) rather than stopping abruptly.",
      "Report facial, lip or throat swelling immediately, as this can indicate angioedema, a medical emergency.",
      "The first dose can cause a marked drop in blood pressure — this is often taken at bedtime initially.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "salbutamol",
    reference: 22,
    name: "Salbutamol",
    tags: ["Beta-2 agonist", "Bronchodilator"],
    drugClass: "Short-acting beta-2 adrenergic agonist (SABA)",
    indications: [
      "Acute asthma and bronchospasm (reliever)",
      "Exercise-induced asthma, taken before exertion",
      "COPD with reversible airflow limitation",
    ],
    mechanism:
      "Selectively stimulates beta-2 adrenergic receptors on bronchial smooth muscle, activating adenylate cyclase and increasing cyclic AMP, which relaxes smooth muscle and dilates the airways. Onset is rapid, making it useful for quick relief of bronchospasm in asthma and COPD.",
    mechanismSummary:
      "Selective β2 agonism on bronchial smooth muscle → ↑ adenylate cyclase → ↑ cAMP → smooth muscle relaxation → rapid bronchodilation",
    adrs: [
      "Fine tremor",
      "Tachycardia and palpitations",
      "Headache",
      "Muscle cramps",
    ],
    keyADRs: ["Fine tremor"],
    counselling: [
      "Use a spacer device with a metered-dose inhaler where possible to improve drug delivery to the lungs.",
      "Carry a reliever inhaler at all times and seek urgent medical help if it needs to be used more often than usual or does not relieve symptoms.",
      "Rinse the mouth is not typically needed for salbutamol (unlike inhaled steroids), but check inhaler technique regularly with a healthcare professional.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "simvastatin",
    reference: 23,
    name: "Simvastatin",
    tags: ["Statin", "Cardiovascular"],
    drugClass: "HMG-CoA reductase inhibitor (statin)",
    indications: [
      "Primary prevention of cardiovascular disease in people at high risk",
      "Secondary prevention after a cardiovascular event",
      "Primary hypercholesterolaemia and mixed dyslipidaemia",
    ],
    mechanism:
      "Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. This lowers intracellular cholesterol, upregulating LDL receptor expression on hepatocytes and increasing clearance of LDL cholesterol from the blood.",
    mechanismSummary:
      "Competitively inhibits HMG-CoA reductase (rate-limiting step of hepatic cholesterol synthesis) → ↓ intracellular cholesterol → ↑ hepatic LDL receptors → ↑ LDL clearance from blood",
    adrs: [
      "Muscle aches (myalgia)",
      "Headache",
      "Gastrointestinal disturbance",
      "Rare risk of myopathy/rhabdomyolysis",
    ],
    keyADRs: ["Muscle aches (myalgia)"],
    counselling: [
      "Take in the evening, as cholesterol synthesis is highest overnight.",
      "Report unexplained muscle pain, tenderness or weakness promptly, as this can rarely indicate a more serious muscle problem.",
      "Avoid grapefruit juice, which can increase simvastatin levels and the risk of side effects.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "spironolactone",
    reference: 24,
    name: "Spironolactone",
    tags: ["Potassium-sparing diuretic", "Aldosterone antagonist"],
    drugClass: "Aldosterone receptor antagonist (potassium-sparing diuretic)",
    indications: [
      "Chronic heart failure with reduced ejection fraction",
      "Resistant hypertension",
      "Primary hyperaldosteronism (Conn's syndrome)",
      "Ascites and oedema in liver cirrhosis",
    ],
    mechanism:
      "Competitively antagonises aldosterone receptors in the distal nephron, reducing sodium reabsorption and potassium/hydrogen excretion. This produces a mild diuretic effect while conserving potassium, and is also used for its aldosterone-blocking benefit in heart failure.",
    mechanismSummary:
      "Competitively blocks aldosterone receptors in distal nephron → ↓ Na⁺ reabsorption + ↓ K⁺/H⁺ excretion → mild diuresis with K⁺ retention; aldosterone blockade also benefits heart failure",
    adrs: [
      "Hyperkalaemia",
      "Gynaecomastia (with long-term use)",
      "Gastrointestinal upset",
      "Menstrual irregularities",
    ],
    keyADRs: ["Hyperkalaemia"],
    counselling: [
      "Avoid potassium supplements and salt substitutes containing potassium unless advised, because of the risk of hyperkalaemia.",
      "Routine blood tests are used to monitor potassium and kidney function.",
      "Report breast tenderness or enlargement, which is a recognised effect, particularly with long-term use.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "warfarin",
    reference: 25,
    name: "Warfarin",
    tags: ["Anticoagulant", "Vitamin K antagonist"],
    drugClass: "Vitamin K antagonist (anticoagulant)",
    indications: [
      "Atrial fibrillation — stroke prevention",
      "Venous thromboembolism — treatment and prevention",
      "Mechanical prosthetic heart valves",
    ],
    mechanism:
      "Inhibits vitamin K epoxide reductase, preventing regeneration of active vitamin K needed to gamma-carboxylate clotting factors II, VII, IX and X. This reduces the production of functional clotting factors, prolonging clotting time and reducing thrombus formation.",
    mechanismSummary:
      "Inhibits vitamin K epoxide reductase → ↓ active vitamin K → ↓ γ-carboxylation of factors II, VII, IX, X → ↓ functional clotting factors → prolonged clotting time",
    adrs: [
      "Bleeding and bruising",
      "Requires regular INR monitoring",
      "Interacts with many foods and medicines",
      "Rare skin necrosis (early in treatment)",
    ],
    keyADRs: ["Bleeding and bruising"],
    counselling: [
      "Attend all scheduled blood tests (INR) so the dose can be adjusted to keep clotting within the target range.",
      "Keep vitamin K intake (e.g. leafy green vegetables) fairly consistent day to day, as large changes can affect INR.",
      "Report unusual bleeding or bruising, and always mention warfarin use before any new medicine, supplement, dental work or surgery.",
      "Carry an anticoagulant alert card at all times.",
    ],
    sources: ["NHS"],
  },
  // The official Year 1 list is #1-25 above. Bisoprolol and atorvastatin
  // are also covered in Year 1 teaching, so they're included here as
  // extras (not part of the official 25-drug count).
  {
    slug: "bisoprolol",
    reference: 26,
    name: "Bisoprolol",
    tags: ["Beta blocker", "Cardiovascular"],
    drugClass: "Highly cardioselective beta-1 adrenergic blocker",
    indications: [
      "Chronic heart failure with reduced ejection fraction",
      "Hypertension",
      "Angina",
      "Rate control in atrial fibrillation",
    ],
    mechanism:
      "Selectively blocks beta-1 receptors in the heart, reducing heart rate, myocardial contractility and cardiac output, and suppressing renin release. It is highly beta-1 selective, which is why it is also used (started at a very low dose) in stable heart failure with reduced ejection fraction, alongside hypertension and angina.",
    mechanismSummary:
      "Highly selective β1 blockade → ↓ heart rate, contractility, cardiac output + ↓ renin; 'start low, go slow' in HFrEF, also hypertension/angina",
    adrs: [
      "Fatigue and cold extremities",
      "Bradycardia",
      "Bronchospasm (caution in asthma/COPD)",
      "Sleep disturbance",
    ],
    keyADRs: ["Bradycardia"],
    counselling: [
      "Do not stop abruptly — sudden withdrawal can precipitate rebound angina or hypertension; doses should be tapered.",
      "Report a resting pulse that feels unusually slow or symptoms of dizziness/fainting.",
      "Tell your prescriber if you have asthma, as beta blockers can worsen bronchospasm.",
      "If started for heart failure, doses are increased gradually ('start low, go slow') under medical supervision.",
    ],
    sources: ["NHS"],
  },
  {
    slug: "atorvastatin",
    reference: 27,
    name: "Atorvastatin",
    tags: ["Statin", "Cardiovascular"],
    drugClass: "HMG-CoA reductase inhibitor (statin)",
    indications: [
      "Primary prevention of cardiovascular disease in people at high risk",
      "Secondary prevention after a cardiovascular event",
      "Primary hypercholesterolaemia and mixed dyslipidaemia",
    ],
    mechanism:
      "Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis. This lowers intracellular cholesterol, upregulating LDL receptor expression on hepatocytes and increasing clearance of LDL cholesterol from the blood. It has a longer half-life than simvastatin, so timing of the dose is less critical.",
    mechanismSummary:
      "Competitively inhibits HMG-CoA reductase → ↓ hepatic cholesterol synthesis → ↑ hepatic LDL receptors → ↑ LDL clearance; long half-life → dose timing not critical",
    adrs: [
      "Muscle aches (myalgia)",
      "Headache",
      "Gastrointestinal disturbance",
      "Rare risk of myopathy/rhabdomyolysis",
    ],
    keyADRs: ["Muscle aches (myalgia)"],
    counselling: [
      "Can be taken at any time of day, unlike some other statins, because of its longer half-life — pick a consistent time that's easy to remember.",
      "Report unexplained muscle pain, tenderness or weakness promptly, as this can rarely indicate a more serious muscle problem.",
      "Avoid grapefruit juice, which can increase atorvastatin levels and the risk of side effects.",
    ],
    sources: ["NHS"],
  },
];
