import type { Drug, Year, Source } from "@/lib/types";
import { YEARS, getDrugsForYear } from "@/lib/drugs";

export type TopicType =
  | "drug-class"
  | "condition"
  | "therapeutic-area"
  | "clinical-feature";

/** How a topic finds its matching formulary drugs. The central drug dataset
 * (drug.tags + drug.indications) stays the single source of truth — a topic
 * only declares *what to look for*, never a hard-coded drug list. */
export interface TopicMatch {
  /** exact matches against `drug.tags` */
  tags?: string[];
  /** case-insensitive substring matches against `drug.indications` entries */
  indicationIncludes?: string[];
  /** if any indication contains one of these, the indication match is rejected
   * (e.g. keep "hypertension" but drop "pulmonary arterial hypertension") */
  indicationExcludes?: string[];
}

export interface Topic {
  slug: string;
  name: string;
  type: TopicType;
  /** 2-4 paraphrased sentences. Empty string = no written summary yet. */
  summary: string;
  /** drug-class / therapeutic-area: the main conditions it is used in */
  commonUses?: string[];
  /** condition: the main drug groups used to treat it */
  drugApproach?: string[];
  match: TopicMatch;
  sources: Source[];
}

const TYPE_LABEL: Record<TopicType, string> = {
  "drug-class": "Drug class",
  condition: "Condition",
  "therapeutic-area": "Therapeutic area",
  "clinical-feature": "Clinical concept",
};

export function topicTypeLabel(t: TopicType): string {
  return TYPE_LABEL[t];
}

/** "Beta blocker" -> "beta-blocker" ; "ACE inhibitor" -> "ace-inhibitor" */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\+/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ================================================================== */
/*  Authored topics                                                     */
/*  Summaries are short, paraphrased revision notes drawn from standard  */
/*  UK references (BNF treatment summaries, NHS). They are deliberately  */
/*  not full articles.                                                   */
/* ================================================================== */

const BNF_NHS: Source[] = ["BNF", "NHS"];

export const TOPICS: Topic[] = [
  /* -------------------- Therapeutic areas -------------------- */
  {
    slug: "cardiovascular",
    name: "Cardiovascular",
    type: "therapeutic-area",
    summary:
      "Drugs acting on the heart and circulation — to lower blood pressure, relieve or prevent angina, control heart rate and rhythm, treat heart failure, and reduce the risk of thrombosis. Most work by modifying autonomic tone, vascular smooth muscle, renal sodium handling, the renin-angiotensin system, or platelet and clotting function.",
    commonUses: [
      "Hypertension",
      "Angina and secondary prevention after MI",
      "Heart failure",
      "Atrial fibrillation and other arrhythmias",
      "Prevention of stroke and venous thromboembolism",
    ],
    match: { tags: ["Cardiovascular"] },
    sources: BNF_NHS,
  },
  {
    slug: "respiratory",
    name: "Respiratory",
    type: "therapeutic-area",
    summary:
      "Drugs for airways disease. Bronchodilators (beta-2 agonists, antimuscarinics, methylxanthines) relax airway smooth muscle for symptom relief, while inhaled corticosteroids and other agents reduce the underlying airway inflammation that drives asthma and COPD.",
    commonUses: ["Asthma", "COPD", "Allergic rhinitis", "Chronic productive cough"],
    match: { tags: ["Respiratory", "Bronchodilator", "Inhaled corticosteroid"] },
    sources: BNF_NHS,
  },
  {
    slug: "thyroid",
    name: "Thyroid",
    type: "therapeutic-area",
    summary:
      "Drugs that correct thyroid hormone imbalance. Levothyroxine replaces deficient hormone in hypothyroidism; antithyroid drugs such as carbimazole reduce hormone synthesis in hyperthyroidism.",
    commonUses: ["Hypothyroidism", "Hyperthyroidism (e.g. Graves' disease)"],
    match: { tags: ["Thyroid", "Thyroid hormone", "Antithyroid"] },
    sources: BNF_NHS,
  },

  /* -------------------- Cardiovascular drug classes -------------------- */
  {
    slug: "beta-blocker",
    name: "Beta blockers",
    type: "drug-class",
    summary:
      "Beta blockers reduce the effect of catecholamines at beta-adrenergic receptors. Blocking cardiac beta-1 receptors slows heart rate, reduces contractility and cardiac output, and suppresses renin release; effects vary with receptor selectivity and lipid solubility. Non-selective agents also block beta-2 receptors, which can cause bronchoconstriction.",
    commonUses: [
      "Hypertension",
      "Angina",
      "Rate control in arrhythmias such as atrial fibrillation",
      "Chronic heart failure (specific agents, started low)",
      "Secondary prevention after MI",
    ],
    match: { tags: ["Beta blocker"] },
    sources: BNF_NHS,
  },
  {
    slug: "ace-inhibitor",
    name: "ACE inhibitors",
    type: "drug-class",
    summary:
      "ACE inhibitors block conversion of angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone-driven sodium and water retention, which lowers blood pressure and cardiac afterload. Reduced breakdown of bradykinin causes the characteristic dry cough and, rarely, angioedema. They can raise potassium and creatinine and are avoided in pregnancy.",
    commonUses: [
      "Hypertension",
      "Chronic heart failure",
      "Secondary prevention after MI / high cardiovascular risk",
      "Diabetic and non-diabetic chronic kidney disease",
    ],
    match: { tags: ["ACE inhibitor"] },
    sources: BNF_NHS,
  },
  {
    slug: "arb",
    name: "Angiotensin receptor blockers (ARBs)",
    type: "drug-class",
    summary:
      "ARBs block the angiotensin II type 1 receptor, giving similar haemodynamic effects to ACE inhibitors without raising bradykinin — so they rarely cause cough. Like ACE inhibitors they can cause hyperkalaemia and renal impairment and are contraindicated in pregnancy.",
    commonUses: [
      "Hypertension",
      "Chronic heart failure (ACE-intolerant patients)",
      "Diabetic nephropathy",
    ],
    match: { tags: ["ARB"] },
    sources: BNF_NHS,
  },
  {
    slug: "calcium-channel-blocker",
    name: "Calcium-channel blockers",
    type: "drug-class",
    summary:
      "Calcium-channel blockers reduce calcium entry through L-type channels. Dihydropyridines (e.g. amlodipine, nifedipine) act mainly on vascular smooth muscle to cause arterial vasodilation, while non-dihydropyridines (verapamil, diltiazem) also slow AV node conduction and reduce contractility.",
    commonUses: [
      "Hypertension",
      "Angina, including vasospastic angina",
      "Rate control in supraventricular arrhythmias (non-dihydropyridines)",
      "Raynaud's phenomenon",
    ],
    match: { tags: ["Calcium-channel blocker"] },
    sources: BNF_NHS,
  },
  {
    slug: "nitrate",
    name: "Nitrates",
    type: "drug-class",
    summary:
      "Nitrates are converted to nitric oxide in vascular smooth muscle, raising cyclic GMP and causing vasodilation. Venodilation predominates, reducing preload and myocardial oxygen demand. Continuous exposure causes tolerance, so long-acting nitrates are dosed to leave a nitrate-free interval.",
    commonUses: [
      "Acute angina (sublingual GTN)",
      "Angina prophylaxis",
      "Acute heart failure / pulmonary oedema (IV)",
    ],
    match: { tags: ["Nitrate", "Angina prophylaxis"] },
    sources: BNF_NHS,
  },
  {
    slug: "thiazide-diuretic",
    name: "Thiazide and thiazide-like diuretics",
    type: "drug-class",
    summary:
      "Thiazides block the sodium-chloride co-transporter in the distal convoluted tubule, producing a modest diuresis and, with continued use, vasodilation. They commonly cause hypokalaemia, hyponatraemia and raised urate (which can precipitate gout), and can worsen glucose tolerance.",
    commonUses: ["Hypertension", "Mild oedema / fluid retention"],
    match: { tags: ["Thiazide diuretic"] },
    sources: BNF_NHS,
  },
  {
    slug: "loop-diuretic",
    name: "Loop diuretics",
    type: "drug-class",
    summary:
      "Loop diuretics inhibit the Na-K-2Cl co-transporter in the thick ascending limb of the loop of Henle, producing a powerful diuresis. Main adverse effects are hypokalaemia, dehydration and hypotension, and (with rapid high IV doses) ototoxicity.",
    commonUses: [
      "Pulmonary oedema (acute, IV)",
      "Chronic heart failure",
      "Oedema in renal or hepatic disease",
    ],
    match: { tags: ["Loop diuretic"] },
    sources: BNF_NHS,
  },
  {
    slug: "potassium-sparing-diuretic",
    name: "Potassium-sparing diuretics & aldosterone antagonists",
    type: "drug-class",
    summary:
      "These agents act on the distal nephron to retain potassium while promoting a mild sodium and water loss. Aldosterone antagonists such as spironolactone also block aldosterone receptors elsewhere, giving benefit in heart failure but causing hyperkalaemia and anti-androgenic effects such as gynaecomastia.",
    commonUses: [
      "Chronic heart failure with reduced ejection fraction",
      "Resistant hypertension",
      "Primary hyperaldosteronism",
      "Ascites in liver cirrhosis",
    ],
    match: { tags: ["Potassium-sparing diuretic", "Aldosterone antagonist"] },
    sources: BNF_NHS,
  },
  {
    slug: "cardiac-glycoside",
    name: "Cardiac glycosides",
    type: "drug-class",
    summary:
      "Digoxin inhibits the myocardial Na/K-ATPase, indirectly raising intracellular calcium to increase contractility, and enhances vagal tone to slow AV node conduction. It has a narrow therapeutic index; toxicity (nausea, visual disturbance, arrhythmia) is worsened by hypokalaemia and renal impairment.",
    commonUses: [
      "Rate control in persistent atrial fibrillation",
      "Chronic heart failure with reduced ejection fraction (add-on)",
    ],
    match: { tags: ["Cardiac glycoside"] },
    sources: BNF_NHS,
  },
  {
    slug: "antiarrhythmic",
    name: "Antiarrhythmics",
    type: "drug-class",
    summary:
      "Antiarrhythmics modify cardiac ion currents and conduction to suppress abnormal rhythms; they are grouped by their dominant action (sodium, beta, potassium or calcium channel). Amiodarone (class III) blocks potassium channels to prolong the action potential and has broad activity but significant thyroid, pulmonary, hepatic and ocular toxicity.",
    commonUses: [
      "Atrial fibrillation and flutter",
      "Supraventricular tachycardia",
      "Life-threatening ventricular arrhythmias",
    ],
    match: { tags: ["Antiarrhythmic", "Class III"] },
    sources: BNF_NHS,
  },
  {
    slug: "alpha-blocker",
    name: "Alpha blockers",
    type: "drug-class",
    summary:
      "Alpha-1 adrenoceptor antagonists relax vascular smooth muscle (lowering blood pressure) and prostatic and bladder-neck smooth muscle (improving urinary flow). First-dose and postural hypotension are characteristic, and they can cause intra-operative floppy iris syndrome.",
    commonUses: [
      "Benign prostatic hyperplasia",
      "Add-on or resistant hypertension",
    ],
    match: { tags: ["Alpha blocker"] },
    sources: BNF_NHS,
  },
  {
    slug: "statin",
    name: "Statins",
    type: "drug-class",
    summary:
      "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme of hepatic cholesterol synthesis. Falling intracellular cholesterol upregulates hepatic LDL receptors, increasing clearance of LDL cholesterol from the blood. Muscle aches are common; myopathy and rhabdomyolysis are rare, and transaminases can rise.",
    commonUses: [
      "Primary prevention of cardiovascular disease in people at high risk",
      "Secondary prevention after a cardiovascular event",
      "Primary hypercholesterolaemia and mixed dyslipidaemia",
    ],
    match: { tags: ["Statin"] },
    sources: BNF_NHS,
  },
  {
    slug: "antiplatelet",
    name: "Antiplatelets",
    type: "drug-class",
    summary:
      "Antiplatelets reduce platelet aggregation by different routes — aspirin irreversibly inhibits COX-1 (blocking thromboxane A2), while clopidogrel irreversibly blocks the platelet P2Y12 ADP receptor. The main risk is bleeding, particularly gastrointestinal.",
    commonUses: [
      "Secondary prevention of MI, ischaemic stroke and TIA",
      "Acute coronary syndrome",
      "Prevention of stent thrombosis after PCI",
    ],
    match: { tags: ["Antiplatelet"] },
    sources: BNF_NHS,
  },
  {
    slug: "anticoagulant",
    name: "Anticoagulants",
    type: "drug-class",
    summary:
      "Anticoagulants reduce fibrin clot formation by inhibiting the coagulation cascade — warfarin lowers vitamin K-dependent factors, DOACs directly inhibit factor Xa or thrombin, and heparins potentiate antithrombin. All increase bleeding risk; warfarin needs INR monitoring whereas DOACs do not.",
    commonUses: [
      "Atrial fibrillation — stroke prevention",
      "Treatment and prevention of venous thromboembolism",
      "Mechanical heart valves (warfarin)",
    ],
    match: {
      tags: [
        "Anticoagulant",
        "DOAC",
        "Factor Xa inhibitor",
        "Vitamin K antagonist",
        "Low molecular weight heparin",
      ],
    },
    sources: BNF_NHS,
  },

  /* -------------------- Analgesia -------------------- */
  {
    slug: "nsaid",
    name: "NSAIDs",
    type: "drug-class",
    summary:
      "NSAIDs inhibit cyclo-oxygenase (COX-1 and COX-2), reducing prostaglandin synthesis to give analgesic, anti-inflammatory and antipyretic effects. Loss of protective prostaglandins underlies their main harms: gastrointestinal ulceration and bleeding, renal impairment and fluid retention, and cardiovascular risk. They can trigger bronchospasm in NSAID-sensitive asthma.",
    commonUses: [
      "Musculoskeletal and inflammatory pain",
      "Osteoarthritis and rheumatoid arthritis",
      "Dysmenorrhoea",
      "Fever",
    ],
    match: { tags: ["NSAID"] },
    sources: BNF_NHS,
  },
  {
    slug: "opioid",
    name: "Opioids",
    type: "drug-class",
    summary:
      "Opioids are agonists at mu-opioid receptors, reducing pain transmission and perception. Class effects include constipation (which does not wane), nausea, sedation, respiratory depression in overdose, and tolerance and dependence with prolonged use. Potency, onset and route vary widely between agents.",
    commonUses: [
      "Moderate-to-severe acute pain",
      "Cancer and palliative pain",
      "Breathlessness in palliative care",
      "Opioid substitution therapy (methadone, buprenorphine)",
    ],
    match: { tags: ["Opioid", "Opioid substitution", "Opioid receptor agonist"] },
    sources: BNF_NHS,
  },
  {
    slug: "analgesic",
    name: "Analgesics",
    type: "drug-class",
    summary:
      "Analgesics relieve pain by different mechanisms and are usually escalated in steps: paracetamol and NSAIDs for mild-to-moderate pain, weak then strong opioids added for more severe pain, and adjuvants such as amitriptyline or gabapentin for neuropathic pain.",
    commonUses: [
      "Acute pain",
      "Chronic musculoskeletal pain",
      "Cancer pain",
      "Neuropathic pain (adjuvants)",
    ],
    match: { tags: ["Analgesic"] },
    sources: BNF_NHS,
  },

  /* -------------------- Steroids & respiratory -------------------- */
  {
    slug: "corticosteroid",
    name: "Corticosteroids",
    type: "drug-class",
    summary:
      "Corticosteroids bind the glucocorticoid receptor to alter gene transcription, broadly suppressing inflammatory mediators and immune cell activity. Systemic use causes infection risk, hyperglycaemia, mood change, weight gain, osteoporosis and, after prolonged use, adrenal suppression — so courses are tapered, not stopped abruptly.",
    commonUses: [
      "Inflammatory and autoimmune disease flares (asthma/COPD, IBD, arthritis)",
      "Allergic states",
      "Immunosuppression",
      "Cerebral oedema and some malignancies",
    ],
    match: {
      tags: ["Corticosteroid", "Glucocorticoid", "Inhaled corticosteroid"],
    },
    sources: BNF_NHS,
  },
  {
    slug: "inhaled-corticosteroid",
    name: "Inhaled corticosteroids",
    type: "drug-class",
    summary:
      "Inhaled corticosteroids deliver an anti-inflammatory steroid directly to the airways, reducing bronchial inflammation and hyper-responsiveness over days to weeks. Local side effects are oral candidiasis and hoarse voice; high doses carry a small systemic steroid risk. They are preventers, not relievers.",
    commonUses: [
      "Regular prevention in asthma",
      "Maintenance of COPD (in combination inhalers)",
    ],
    match: { tags: ["Inhaled corticosteroid", "Preventer"] },
    sources: BNF_NHS,
  },
  {
    slug: "bronchodilator",
    name: "Bronchodilators",
    type: "drug-class",
    summary:
      "Bronchodilators relax airway smooth muscle to relieve airflow obstruction. Beta-2 agonists act via cyclic AMP, antimuscarinics block vagal bronchoconstriction, and methylxanthines inhibit phosphodiesterase. They are grouped by duration into short-acting relievers and long-acting maintenance agents.",
    commonUses: ["Asthma", "COPD"],
    match: {
      tags: ["Bronchodilator", "Beta-2 agonist", "SAMA", "Methylxanthine"],
    },
    sources: BNF_NHS,
  },
  {
    slug: "beta-2-agonist",
    name: "Beta-2 agonists",
    type: "drug-class",
    summary:
      "Beta-2 agonists stimulate airway beta-2 receptors, raising cyclic AMP and relaxing bronchial smooth muscle. Short-acting agents (salbutamol) give rapid symptom relief; predictable dose-related effects are tremor, tachycardia and, at high dose, hypokalaemia.",
    commonUses: [
      "Acute asthma and bronchospasm (reliever)",
      "Exercise-induced asthma",
      "COPD with reversible airflow limitation",
    ],
    match: { tags: ["Beta-2 agonist"] },
    sources: BNF_NHS,
  },
  {
    slug: "antimuscarinic",
    name: "Antimuscarinics",
    type: "drug-class",
    summary:
      "Antimuscarinics competitively block acetylcholine at muscarinic receptors. Depending on the target tissue they relax airway or gut smooth muscle, reduce secretions, or increase heart rate. Typical unwanted effects are dry mouth, blurred vision, constipation, urinary retention and confusion in older people.",
    commonUses: [
      "COPD and acute severe asthma (inhaled)",
      "Smooth muscle spasm — GI and urinary tract",
      "Secretions in palliative care",
    ],
    match: { tags: ["Antimuscarinic", "SAMA", "Antispasmodic"] },
    sources: BNF_NHS,
  },
  {
    slug: "mucolytic",
    name: "Mucolytics",
    type: "drug-class",
    summary:
      "Mucolytics reduce the viscosity of respiratory secretions, making sputum easier to clear and potentially reducing infective exacerbations in chronic productive cough. They are reviewed after a trial period and stopped if there is no benefit.",
    commonUses: ["Chronic productive cough in COPD and bronchiectasis"],
    match: { tags: ["Mucolytic"] },
    sources: BNF_NHS,
  },
  {
    slug: "antihistamine",
    name: "Antihistamines",
    type: "drug-class",
    summary:
      "H1 antihistamines block peripheral histamine H1 receptors, reducing itch, wheal, vasodilation and secretions in allergic conditions. Second-generation agents (e.g. loratadine, cetirizine) are minimally sedating; first-generation agents (e.g. chlorphenamine) cross into the brain and cause sedation and antimuscarinic effects.",
    commonUses: [
      "Allergic rhinitis (hay fever)",
      "Urticaria and allergic skin reactions",
      "Adjunct in anaphylaxis (first-generation)",
    ],
    match: { tags: ["Antihistamine", "H1 antagonist"] },
    sources: BNF_NHS,
  },

  /* -------------------- CNS -------------------- */
  {
    slug: "ssri",
    name: "SSRIs",
    type: "drug-class",
    summary:
      "SSRIs selectively block the presynaptic serotonin transporter, raising synaptic serotonin; benefit builds over 2-4 weeks. Common effects are nausea, headache, sexual dysfunction and early anxiety; less common but important are hyponatraemia, increased bleeding risk, QT prolongation (citalopram) and serotonin syndrome. Doses are tapered to avoid discontinuation symptoms.",
    commonUses: ["Depression", "Anxiety disorders", "OCD", "Bulimia nervosa (fluoxetine)"],
    match: { tags: ["SSRI"] },
    sources: BNF_NHS,
  },
  {
    slug: "tricyclic-antidepressant",
    name: "Tricyclic antidepressants",
    type: "drug-class",
    summary:
      "Tricyclics block reuptake of noradrenaline and serotonin, and also antagonise muscarinic, histamine and alpha-1 receptors — which drives dry mouth, constipation, sedation and postural hypotension. They are dangerous in overdose (arrhythmia, seizures), so at antidepressant doses they are largely second-line; low doses are widely used for neuropathic pain.",
    commonUses: ["Neuropathic pain", "Migraine prophylaxis", "Depression (second-line)"],
    match: { tags: ["Tricyclic antidepressant"] },
    sources: BNF_NHS,
  },
  {
    slug: "antidepressant",
    name: "Antidepressants",
    type: "drug-class",
    summary:
      "Antidepressants increase monoamine (serotonin and/or noradrenaline) neurotransmission and take several weeks to work. Classes differ mainly in side-effect and safety profile: SSRIs are usually first-line, tricyclics are toxic in overdose, and all should be tapered rather than stopped abruptly.",
    commonUses: ["Depression", "Anxiety disorders", "Neuropathic pain (some agents)"],
    match: { tags: ["Antidepressant", "SSRI", "Tricyclic antidepressant"] },
    sources: BNF_NHS,
  },
  {
    slug: "antipsychotic",
    name: "Antipsychotics",
    type: "drug-class",
    summary:
      "Antipsychotics block dopamine D2 receptors (and, for second-generation agents, serotonin 5-HT2A). D2 blockade reduces positive psychotic symptoms but causes extrapyramidal effects and raised prolactin; second-generation agents cause fewer movement effects but more metabolic harm (weight gain, diabetes, dyslipidaemia). Rare but serious: QT prolongation and neuroleptic malignant syndrome.",
    commonUses: [
      "Schizophrenia and other psychoses",
      "Acute mania and bipolar maintenance",
      "Severe agitation and delirium",
      "Nausea in palliative care (low-dose haloperidol)",
    ],
    match: { tags: ["Antipsychotic"] },
    sources: BNF_NHS,
  },
  {
    slug: "benzodiazepine",
    name: "Benzodiazepines",
    type: "drug-class",
    summary:
      "Benzodiazepines enhance GABA-A receptor activity, increasing chloride channel opening frequency to produce anxiolytic, sedative, muscle-relaxant and anticonvulsant effects. Tolerance and dependence develop quickly, so use is short-term; withdrawal can cause anxiety, tremor and seizures. Effects are additive with alcohol and opioids.",
    commonUses: [
      "Short-term severe anxiety or insomnia",
      "Alcohol withdrawal",
      "Status epilepticus",
      "Muscle spasm",
    ],
    match: { tags: ["Benzodiazepine"] },
    sources: BNF_NHS,
  },
  {
    slug: "z-drug",
    name: "Z-drugs",
    type: "drug-class",
    summary:
      "Z-drugs (e.g. zopiclone) act at the benzodiazepine site of the GABA-A receptor to promote sleep. Despite a different structure they share benzodiazepine-like tolerance and dependence, so they are prescribed short-term at the lowest effective dose; next-day drowsiness and a metallic taste are common.",
    commonUses: ["Short-term management of severe insomnia"],
    match: { tags: ["Z-drug", "Hypnotic"] },
    sources: BNF_NHS,
  },
  {
    slug: "antiepileptic",
    name: "Antiepileptics",
    type: "drug-class",
    summary:
      "Antiepileptics dampen abnormal neuronal firing by blocking voltage-gated sodium channels, enhancing GABA, or modulating calcium currents. Many are enzyme inducers with important interactions (including with contraception), several are teratogenic (notably valproate), and abrupt withdrawal risks seizures.",
    commonUses: [
      "Focal and generalised epilepsy",
      "Neuropathic pain and trigeminal neuralgia",
      "Bipolar disorder (some agents)",
      "Migraine prophylaxis (some agents)",
    ],
    match: { tags: ["Antiepileptic", "Sodium-channel blocker"] },
    sources: BNF_NHS,
  },
  {
    slug: "antiemetic",
    name: "Antiemetics",
    type: "drug-class",
    summary:
      "Antiemetics block the receptors that drive nausea and vomiting — dopamine D2 (in the chemoreceptor trigger zone), histamine H1 and muscarinic (vestibular pathways), or serotonin 5-HT3. Choice is guided by the cause of the nausea. Dopamine antagonists can cause extrapyramidal effects; domperidone and others can prolong the QT interval.",
    commonUses: [
      "Post-operative and drug-induced nausea",
      "Motion sickness and vertigo",
      "Nausea in migraine, chemotherapy and palliative care",
    ],
    match: {
      tags: ["Antiemetic", "Dopamine antagonist", "Prokinetic"],
    },
    sources: BNF_NHS,
  },

  /* -------------------- GI -------------------- */
  {
    slug: "laxative",
    name: "Laxatives",
    type: "drug-class",
    summary:
      "Laxatives relieve constipation by different routes: bulk-forming agents add fibre, osmotic agents (lactulose, macrogol) draw water into the bowel, stimulants (senna) increase motility, and softeners lubricate stool. Osmotic agents can take up to 48 hours; stimulants act overnight and are for short-term use.",
    commonUses: [
      "Constipation",
      "Opioid-induced constipation",
      "Bowel preparation",
      "Hepatic encephalopathy (lactulose)",
    ],
    match: { tags: ["Laxative", "Osmotic", "Stimulant"] },
    sources: BNF_NHS,
  },
  {
    slug: "antimotility",
    name: "Antimotility agents",
    type: "drug-class",
    summary:
      "Antimotility drugs such as loperamide act on gut opioid receptors to slow intestinal transit and increase water reabsorption, without meaningful central opioid effects at normal doses. They are avoided where slowing the bowel is harmful — for example bloody diarrhoea or suspected colitis.",
    commonUses: ["Acute diarrhoea", "Chronic diarrhoea (e.g. IBS)", "High stoma output"],
    match: { tags: ["Antimotility"] },
    sources: BNF_NHS,
  },
  {
    slug: "h2-receptor-antagonist",
    name: "H2 receptor antagonists",
    type: "drug-class",
    summary:
      "H2 antagonists competitively block histamine H2 receptors on gastric parietal cells, reducing acid secretion. They are generally well tolerated; cimetidine is now little used because it inhibits several cytochrome P450 enzymes and has anti-androgenic effects.",
    commonUses: ["Gastro-oesophageal reflux", "Peptic ulcer disease", "Dyspepsia"],
    match: { tags: ["H2 receptor antagonist", "Acid suppression"] },
    sources: BNF_NHS,
  },
  {
    slug: "proton-pump-inhibitor",
    name: "Proton pump inhibitors (PPIs)",
    type: "drug-class",
    summary:
      "PPIs irreversibly inhibit the H+/K+-ATPase (proton pump) on gastric parietal cells, blocking the final step of acid secretion. Because inhibition is irreversible, acid suppression outlasts the drug's plasma half-life until new pump molecules are synthesised. Long-term use is linked to hypomagnesaemia, vitamin B12 deficiency, fracture risk and GI infection, and PPIs can mask the symptoms of gastric cancer.",
    commonUses: [
      "Gastro-oesophageal reflux disease (GORD) and heartburn",
      "Peptic ulcer disease, including NSAID-associated ulcers",
      "Helicobacter pylori eradication (with antibiotics)",
      "Prophylaxis of NSAID- or corticosteroid-induced gastric ulceration",
    ],
    match: { tags: ["Proton pump inhibitor", "Antisecretory"] },
    sources: BNF_NHS,
  },

  /* -------------------- Endocrine / metabolic -------------------- */
  {
    slug: "biguanide",
    name: "Biguanides (metformin)",
    type: "drug-class",
    summary:
      "Metformin reduces hepatic glucose output and improves peripheral insulin sensitivity without stimulating insulin secretion, so it does not cause hypoglycaemia alone and is weight-neutral. Gastrointestinal upset is common initially; lactic acidosis is rare and mainly a risk in renal impairment or acute illness.",
    commonUses: ["Type 2 diabetes (first-line)", "Polycystic ovary syndrome (off-label)"],
    match: { tags: ["Biguanide"] },
    sources: BNF_NHS,
  },
  {
    slug: "sulfonylurea",
    name: "Sulfonylureas",
    type: "drug-class",
    summary:
      "Sulfonylureas close the ATP-sensitive potassium channel on pancreatic beta cells, stimulating insulin release independently of blood glucose. They therefore can cause hypoglycaemia and weight gain, and are taken with food.",
    commonUses: ["Type 2 diabetes, when metformin is insufficient or not tolerated"],
    match: { tags: ["Sulfonylurea"] },
    sources: BNF_NHS,
  },
  {
    slug: "sglt2-inhibitor",
    name: "SGLT2 inhibitors",
    type: "drug-class",
    summary:
      "SGLT2 inhibitors block glucose reabsorption in the proximal renal tubule, increasing urinary glucose loss and producing a mild osmotic diuresis. They lower glucose without hypoglycaemia and have cardiovascular and renal benefits. Watch for genital thrush, volume depletion, and ketoacidosis that can occur with near-normal glucose.",
    commonUses: ["Type 2 diabetes", "Chronic heart failure", "Chronic kidney disease"],
    match: { tags: ["SGLT2 inhibitor"] },
    sources: BNF_NHS,
  },
  {
    slug: "thyroid-hormone",
    name: "Thyroid hormone (levothyroxine)",
    type: "drug-class",
    summary:
      "Levothyroxine is synthetic T4, converted peripherally to active T3, which restores a euthyroid state in hypothyroidism. It is taken on an empty stomach away from calcium and iron, adjusted by TSH, and usually lifelong. Over-replacement causes palpitations, tremor and, long-term, reduced bone density.",
    commonUses: ["Hypothyroidism", "After thyroidectomy or radioiodine"],
    match: { tags: ["Thyroid hormone", "Hypothyroidism"] },
    sources: BNF_NHS,
  },
  {
    slug: "antithyroid",
    name: "Antithyroid drugs",
    type: "drug-class",
    summary:
      "Antithyroid drugs such as carbimazole inhibit thyroid peroxidase, reducing synthesis of new thyroid hormone; because stored hormone is unaffected, the response takes several weeks. The key warning is agranulocytosis — a sore throat or fever needs an urgent full blood count.",
    commonUses: ["Hyperthyroidism, including Graves' disease", "Preparation for thyroid surgery or radioiodine"],
    match: { tags: ["Antithyroid"] },
    sources: BNF_NHS,
  },
  {
    slug: "bisphosphonate",
    name: "Bisphosphonates",
    type: "drug-class",
    summary:
      "Bisphosphonates bind bone mineral and are taken up by osteoclasts, inhibiting bone resorption and increasing bone density. Oral tablets are taken on an empty stomach with water, sitting upright for 30 minutes, to prevent oesophageal irritation. Rare long-term effects include osteonecrosis of the jaw and atypical femoral fractures.",
    commonUses: ["Treatment and prevention of osteoporosis", "Corticosteroid-induced osteoporosis"],
    match: { tags: ["Bisphosphonate"] },
    sources: BNF_NHS,
  },
  {
    slug: "xanthine-oxidase-inhibitor",
    name: "Xanthine oxidase inhibitors (allopurinol)",
    type: "drug-class",
    summary:
      "Allopurinol inhibits xanthine oxidase, lowering uric acid production so that urate crystal deposits gradually dissolve. It is started after an acute attack settles, under NSAID or colchicine cover, and continued through any flare. A rash may herald a severe hypersensitivity reaction.",
    commonUses: ["Long-term prevention of gout", "Prevention of uric acid stones and tumour lysis"],
    match: { tags: ["Xanthine oxidase inhibitor"] },
    sources: BNF_NHS,
  },
  {
    slug: "pde5-inhibitor",
    name: "PDE5 inhibitors",
    type: "drug-class",
    summary:
      "PDE5 inhibitors block the breakdown of cyclic GMP in vascular smooth muscle, enhancing nitric-oxide-mediated vasodilation. In erectile dysfunction this increases penile blood flow with sexual stimulation. They must not be combined with nitrates or nicorandil because of the risk of severe hypotension.",
    commonUses: ["Erectile dysfunction", "Pulmonary arterial hypertension"],
    match: { tags: ["PDE5 inhibitor"] },
    sources: BNF_NHS,
  },
  {
    slug: "5-alpha-reductase-inhibitor",
    name: "5-alpha reductase inhibitors",
    type: "drug-class",
    summary:
      "These drugs block conversion of testosterone to the more potent dihydrotestosterone, slowly shrinking the prostate over months and slowing male-pattern hair loss. They roughly halve PSA, and pregnant women should not handle crushed tablets.",
    commonUses: ["Benign prostatic hyperplasia", "Male-pattern hair loss"],
    match: { tags: ["5-alpha reductase inhibitor"] },
    sources: BNF_NHS,
  },

  /* -------------------- Anti-infectives -------------------- */
  {
    slug: "antibiotic",
    name: "Antibiotics",
    type: "drug-class",
    summary:
      "Antibiotics kill or inhibit bacteria by targeting the cell wall, protein synthesis, DNA replication or folate metabolism. Choice depends on the likely organism, local resistance and patient factors; courses should be completed. Common class hazards are hypersensitivity, Clostridioides difficile colitis and, for some, specific organ toxicity.",
    commonUses: [
      "Respiratory tract infection",
      "Urinary tract infection",
      "Skin and soft tissue infection",
      "Dental and intra-abdominal infection",
    ],
    match: {
      tags: [
        "Antibiotic",
        "Penicillin",
        "Beta-lactam",
        "Macrolide",
        "Fluoroquinolone",
        "Aminoglycoside",
        "Nitroimidazole",
        "Folate synthesis inhibitor",
        "Antimycobacterial",
      ],
    },
    sources: BNF_NHS,
  },
  {
    slug: "penicillin",
    name: "Penicillins",
    type: "drug-class",
    summary:
      "Penicillins are beta-lactams that bind penicillin-binding proteins and block bacterial cell-wall cross-linking, causing lysis of dividing organisms. Spectrum varies with the side chain; many are destroyed by beta-lactamases. Hypersensitivity is the key concern, ranging from rash to anaphylaxis.",
    commonUses: [
      "Streptococcal throat and skin infection",
      "Community-acquired pneumonia (amoxicillin)",
      "Dental abscess",
    ],
    match: { tags: ["Penicillin", "Beta-lactam"] },
    sources: BNF_NHS,
  },
  {
    slug: "macrolide",
    name: "Macrolides",
    type: "drug-class",
    summary:
      "Macrolides bind the 50S bacterial ribosomal subunit and block protein synthesis. They cover Gram-positive organisms and atypicals and are a common alternative in penicillin allergy. They inhibit CYP3A4 (interactions with statins, warfarin and others) and can prolong the QT interval.",
    commonUses: [
      "Respiratory tract infection, including atypical pneumonia",
      "Skin and soft tissue infection",
      "Helicobacter pylori eradication",
    ],
    match: { tags: ["Macrolide"] },
    sources: BNF_NHS,
  },
  {
    slug: "fluoroquinolone",
    name: "Fluoroquinolones",
    type: "drug-class",
    summary:
      "Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV and are rapidly bactericidal with strong Gram-negative cover. Because of disabling and potentially long-lasting effects — tendon rupture, aortic aneurysm, neuropathy and CNS effects — they are reserved for when other antibiotics are unsuitable.",
    commonUses: [
      "Complicated urinary and intra-abdominal infection",
      "Pseudomonal respiratory infection",
      "Severe gastroenteritis",
    ],
    match: { tags: ["Fluoroquinolone"] },
    sources: BNF_NHS,
  },
  {
    slug: "aminoglycoside",
    name: "Aminoglycosides",
    type: "drug-class",
    summary:
      "Aminoglycosides such as gentamicin bind the 30S ribosomal subunit and are rapidly bactericidal against Gram-negative organisms, with concentration-dependent killing. They are nephrotoxic and ototoxic (vestibular and cochlear, sometimes permanent), so levels and renal function are monitored closely.",
    commonUses: [
      "Severe Gram-negative sepsis",
      "Pyelonephritis and complicated UTI",
      "Endocarditis (synergy)",
    ],
    match: { tags: ["Aminoglycoside"] },
    sources: BNF_NHS,
  },
  {
    slug: "nitroimidazole",
    name: "Nitroimidazoles (metronidazole)",
    type: "drug-class",
    summary:
      "Nitroimidazoles are reduced inside anaerobic bacteria and protozoa to reactive species that damage microbial DNA. Metronidazole causes a disulfiram-like reaction with alcohol (avoid alcohol during and for 48 hours after), and prolonged courses risk peripheral neuropathy.",
    commonUses: [
      "Anaerobic and dental infection",
      "Clostridioides difficile infection",
      "Bacterial vaginosis and pelvic inflammatory disease",
      "Protozoal infection (giardiasis, trichomoniasis)",
    ],
    match: { tags: ["Nitroimidazole", "Antiprotozoal"] },
    sources: BNF_NHS,
  },
  {
    slug: "folate-synthesis-inhibitor",
    name: "Folate synthesis inhibitors (trimethoprim)",
    type: "drug-class",
    summary:
      "Trimethoprim inhibits bacterial dihydrofolate reductase, blocking folate-dependent DNA synthesis. It concentrates in urine, making it useful for UTI. It raises potassium and creatinine, and is a folate antagonist to be avoided in the first trimester of pregnancy.",
    commonUses: ["Uncomplicated urinary tract infection", "Prophylaxis of recurrent UTI"],
    match: { tags: ["Folate synthesis inhibitor", "Antifolate"] },
    sources: BNF_NHS,
  },
  {
    slug: "antifungal",
    name: "Antifungals",
    type: "drug-class",
    summary:
      "Most antifungals target the fungal cell membrane: azoles (triazoles, imidazoles) inhibit ergosterol synthesis via 14-alpha-demethylase, allylamines (terbinafine) inhibit squalene epoxidase, and polyenes (nystatin) bind ergosterol directly. Systemic azoles cause hepatotoxicity and many CYP-mediated interactions; topical agents are usually well tolerated.",
    commonUses: [
      "Candidiasis — vaginal, oral and invasive",
      "Dermatophyte skin and nail infection",
      "Fungal prophylaxis in immunocompromised patients",
    ],
    match: {
      tags: ["Antifungal", "Triazole", "Imidazole", "Polyene", "Allylamine"],
    },
    sources: BNF_NHS,
  },
  {
    slug: "antiviral",
    name: "Antivirals",
    type: "drug-class",
    summary:
      "Antivirals interrupt a specific step of viral replication. Aciclovir is a nucleoside analogue selectively activated by viral thymidine kinase, so it acts mainly in infected cells and has a wide safety margin; it can crystallise in the kidney if the patient is dehydrated. Antivirals reduce symptoms and shedding but do not eradicate latent virus.",
    commonUses: [
      "Herpes simplex infections",
      "Varicella-zoster (chickenpox, shingles)",
      "Prophylaxis in immunocompromised patients",
    ],
    match: { tags: ["Antiviral", "Nucleoside analogue", "Herpesvirus"] },
    sources: BNF_NHS,
  },
  {
    slug: "antimalarial",
    name: "Antimalarials",
    type: "drug-class",
    summary:
      "Antimalarials prevent or treat malaria by killing plasmodium parasites at the blood (and sometimes liver) stage. For prophylaxis they are started before travel, taken throughout, and continued for a period after leaving; no regimen is fully protective, so bite avoidance remains essential.",
    commonUses: ["Malaria prophylaxis", "Treatment of uncomplicated malaria"],
    match: { tags: ["Antimalarial", "Antifolate"] },
    sources: BNF_NHS,
  },
  {
    slug: "anthelmintic",
    name: "Anthelmintics",
    type: "drug-class",
    summary:
      "Anthelmintics such as mebendazole bind parasite beta-tubulin, disrupting the worm's glucose uptake and energy supply. It is barely absorbed from the gut, so it acts locally on intestinal worms. For threadworm, the whole household is treated together with strict hygiene measures.",
    commonUses: ["Threadworm (pinworm)", "Roundworm, whipworm and hookworm"],
    match: { tags: ["Anthelmintic", "Threadworm"] },
    sources: BNF_NHS,
  },

  /* -------------------- Specialist -------------------- */
  {
    slug: "monoclonal-antibody",
    name: "Monoclonal antibodies",
    type: "drug-class",
    summary:
      "Monoclonal antibodies bind a specific target — a receptor, cytokine or cell-surface antigen — to block signalling or flag the cell for immune destruction. Trastuzumab targets the HER2 receptor overexpressed in some breast and gastric cancers; a key toxicity is a fall in cardiac ejection fraction, so heart function is monitored.",
    commonUses: ["HER2-positive breast and gastric cancer", "Targeted cancer therapy"],
    match: { tags: ["Monoclonal antibody", "Targeted therapy", "HER2-positive cancer"] },
    sources: BNF_NHS,
  },
  {
    slug: "serm",
    name: "SERMs (tamoxifen)",
    type: "drug-class",
    summary:
      "Selective oestrogen receptor modulators act as oestrogen antagonists in some tissues and partial agonists in others. Tamoxifen blocks oestrogen-driven growth in breast tissue but has partial agonist activity in the endometrium (raising endometrial cancer risk) and increases venous thromboembolism risk.",
    commonUses: [
      "Oestrogen-receptor-positive breast cancer (adjuvant and metastatic)",
      "Breast cancer risk reduction in high-risk women",
    ],
    match: { tags: ["SERM", "Anti-oestrogen", "Breast cancer"] },
    sources: BNF_NHS,
  },
  {
    slug: "dmard",
    name: "DMARDs & antimetabolites (methotrexate)",
    type: "drug-class",
    summary:
      "Disease-modifying antirheumatic drugs suppress the immune process behind inflammatory disease. Methotrexate, a folate antagonist, is taken once weekly (daily dosing can be fatal) with folic acid on another day and regular blood monitoring for marrow, liver and lung toxicity; it is teratogenic.",
    commonUses: [
      "Rheumatoid and other inflammatory arthritis",
      "Moderate-to-severe psoriasis",
      "Crohn's disease (maintenance)",
    ],
    match: { tags: ["DMARD", "Antimetabolite"] },
    sources: BNF_NHS,
  },
  {
    slug: "cns-stimulant",
    name: "CNS stimulants",
    type: "drug-class",
    summary:
      "Stimulants such as methylphenidate block dopamine and noradrenaline reuptake, increasing catecholamine signalling in the prefrontal cortex to improve attention and impulse control. They suppress appetite, disturb sleep, and raise heart rate and blood pressure, so growth and cardiovascular parameters are monitored.",
    commonUses: ["Attention deficit hyperactivity disorder (ADHD)", "Narcolepsy"],
    match: { tags: ["CNS stimulant", "ADHD"] },
    sources: BNF_NHS,
  },
  {
    slug: "sympathomimetic",
    name: "Sympathomimetics",
    type: "drug-class",
    summary:
      "Sympathomimetics mimic the actions of adrenaline and noradrenaline at adrenergic receptors. Effects depend on the receptors engaged: alpha stimulation causes vasoconstriction (used for nasal decongestion and in anaphylaxis), beta-1 increases heart rate and contractility, and beta-2 causes bronchodilation.",
    commonUses: [
      "Anaphylaxis and cardiac arrest (adrenaline)",
      "Nasal congestion (decongestants)",
    ],
    match: { tags: ["Sympathomimetic", "Decongestant"] },
    sources: BNF_NHS,
  },

  /* -------------------- Conditions -------------------- */
  {
    slug: "hypertension",
    name: "Hypertension",
    type: "condition",
    summary:
      "Hypertension is persistently raised arterial blood pressure. It is usually asymptomatic, but sustained elevation increases the long-term risk of stroke, coronary and other cardiovascular disease, heart failure, chronic kidney disease and retinopathy. Treatment targets are individualised, and lifestyle measures accompany drug therapy.",
    drugApproach: [
      "ACE inhibitors or ARBs",
      "Calcium-channel blockers",
      "Thiazide-like diuretics",
      "Further options: spironolactone, beta blockers, alpha blockers",
    ],
    match: {
      indicationIncludes: ["hypertension"],
      indicationExcludes: ["pulmonary"],
      tags: ["Hypertension"],
    },
    sources: BNF_NHS,
  },
  {
    slug: "angina",
    name: "Angina",
    type: "condition",
    summary:
      "Angina is chest pain from myocardial ischaemia, usually due to coronary atherosclerosis, when oxygen demand outstrips supply. Management combines drugs that abort or prevent attacks, drugs that reduce cardiac workload, and secondary prevention to lower cardiovascular risk.",
    drugApproach: [
      "Short-acting nitrate (GTN) for attacks",
      "Beta blocker or calcium-channel blocker first-line",
      "Long-acting nitrate or other anti-anginals as add-on",
      "Secondary prevention: aspirin and a statin",
    ],
    match: { indicationIncludes: ["angina"], tags: ["Angina", "Angina prophylaxis"] },
    sources: BNF_NHS,
  },
  {
    slug: "heart-failure",
    name: "Heart failure",
    type: "condition",
    summary:
      "Heart failure is a clinical syndrome of breathlessness, fatigue and fluid retention caused by impaired cardiac output or filling. In heart failure with reduced ejection fraction, drugs that block the renin-angiotensin and sympathetic systems improve survival, while diuretics control congestion.",
    drugApproach: [
      "ACE inhibitor (or ARB) plus beta blocker",
      "Mineralocorticoid receptor antagonist (spironolactone)",
      "SGLT2 inhibitor",
      "Loop diuretic for symptom and fluid control",
    ],
    match: { indicationIncludes: ["heart failure"], tags: ["Heart failure"] },
    sources: BNF_NHS,
  },
  {
    slug: "diabetes",
    name: "Diabetes mellitus",
    type: "condition",
    summary:
      "Diabetes is chronic hyperglycaemia from absolute insulin deficiency (type 1) or insulin resistance with relative deficiency (type 2). Poor control causes microvascular (retinopathy, nephropathy, neuropathy) and macrovascular complications. Type 1 always needs insulin; type 2 is managed by lifestyle plus oral and injectable agents, with cardiovascular risk reduction.",
    drugApproach: [
      "Insulin (all type 1; type 2 when needed)",
      "Metformin — first-line in type 2",
      "SGLT2 inhibitors and GLP-1 agonists (cardiorenal benefit)",
      "Sulfonylureas and other agents as add-on",
    ],
    match: {
      indicationIncludes: ["diabetes"],
      tags: ["Diabetes", "Antidiabetic"],
    },
    sources: BNF_NHS,
  },
  {
    slug: "asthma",
    name: "Asthma",
    type: "condition",
    summary:
      "Asthma is a chronic inflammatory airway disease causing variable, reversible airflow obstruction with wheeze, cough and breathlessness. Management is stepwise: an inhaled corticosteroid controls the underlying inflammation, with a short-acting beta-2 agonist (and later long-acting bronchodilators) for symptom relief.",
    drugApproach: [
      "Inhaled corticosteroid (preventer)",
      "Short-acting beta-2 agonist (reliever)",
      "Add-on long-acting beta-2 agonist / other controllers",
      "Oral corticosteroid for acute exacerbations",
    ],
    match: { indicationIncludes: ["asthma"], tags: ["Asthma"] },
    sources: BNF_NHS,
  },
  {
    slug: "gout",
    name: "Gout",
    type: "condition",
    summary:
      "Gout is inflammatory arthritis caused by deposition of monosodium urate crystals when serum urate is persistently high. Acute attacks are treated with anti-inflammatories; long-term urate lowering prevents recurrence and dissolves tophi.",
    drugApproach: [
      "Acute attack: NSAID, colchicine or a short corticosteroid course",
      "Long-term: allopurinol (xanthine oxidase inhibitor) to target urate",
      "Flare prophylaxis when starting urate-lowering therapy",
    ],
    match: { indicationIncludes: ["gout"], tags: ["Gout"] },
    sources: BNF_NHS,
  },
  {
    slug: "hypothyroidism",
    name: "Hypothyroidism",
    type: "condition",
    summary:
      "Hypothyroidism is deficient thyroid hormone production, most often autoimmune, causing tiredness, weight gain, cold intolerance and low mood. It is treated with lifelong levothyroxine replacement, titrated against TSH.",
    drugApproach: ["Levothyroxine (synthetic T4), dose guided by TSH"],
    match: { indicationIncludes: ["hypothyroidism"], tags: ["Hypothyroidism"] },
    sources: BNF_NHS,
  },
  {
    slug: "bph",
    name: "Benign prostatic hyperplasia",
    type: "condition",
    summary:
      "Benign prostatic hyperplasia is non-malignant prostate enlargement causing bladder outflow symptoms — hesitancy, weak stream, frequency and nocturia. Drugs relax prostatic smooth muscle for rapid symptom relief or shrink the gland over months.",
    drugApproach: [
      "Alpha blocker (e.g. tamsulosin, doxazosin) for symptom relief",
      "5-alpha reductase inhibitor (e.g. finasteride) to shrink the prostate",
      "Combination therapy in larger glands",
    ],
    match: {
      indicationIncludes: [
        "benign prostat",
        "prostatic hyperplasia",
        "bladder outflow",
        "enlarged prostate",
      ],
      tags: ["BPH"],
    },
    sources: BNF_NHS,
  },
  {
    slug: "uti",
    name: "Urinary tract infection",
    type: "condition",
    summary:
      "Urinary tract infection is bacterial infection of the bladder (cystitis) or kidney (pyelonephritis), usually with coliforms such as E. coli. Uncomplicated lower UTI in women is treated with a short antibiotic course guided by local resistance; upper UTI and complicated infection need longer or broader treatment.",
    drugApproach: [
      "Nitrofurantoin or trimethoprim for uncomplicated lower UTI",
      "Broader / longer courses for pyelonephritis and complicated UTI",
      "Prophylactic antibiotics for recurrent UTI",
    ],
    match: {
      indicationIncludes: ["urinary tract infection", "recurrent uti"],
      tags: ["UTI"],
    },
    sources: BNF_NHS,
  },
  {
    slug: "anaemia",
    name: "Iron-deficiency anaemia",
    type: "condition",
    summary:
      "Iron-deficiency anaemia is low haemoglobin from depleted iron stores, due to blood loss, poor intake or malabsorption. Oral iron replaces stores over months; the underlying cause must always be sought, particularly unexplained iron deficiency in older adults.",
    drugApproach: [
      "Oral iron salts (e.g. ferrous sulfate), taken with vitamin C",
      "Parenteral iron if oral is not tolerated or ineffective",
    ],
    match: { indicationIncludes: ["anaemia", "iron defic"], tags: ["Anaemia"] },
    sources: BNF_NHS,
  },
  {
    slug: "neuropathic-pain",
    name: "Neuropathic pain",
    type: "condition",
    summary:
      "Neuropathic pain arises from damage or disease of the somatosensory nervous system, producing burning, shooting or electric-shock pain, often with altered sensation. It responds poorly to standard analgesics; specific adjuvant drugs are used, tried in sequence and titrated to effect.",
    drugApproach: [
      "First-line: amitriptyline, duloxetine, gabapentin or pregabalin",
      "Carbamazepine for trigeminal neuralgia",
      "Topical or opioid options in specialist settings",
    ],
    match: { indicationIncludes: ["neuropathic pain", "trigeminal neuralgia"], tags: ["Neuropathic pain"] },
    sources: BNF_NHS,
  },
  {
    slug: "erectile-dysfunction",
    name: "Erectile dysfunction",
    type: "condition",
    summary:
      "Erectile dysfunction is the persistent inability to achieve or maintain an erection. It is often an early marker of cardiovascular disease, so risk factors are assessed. First-line drug treatment is a PDE5 inhibitor, which is contraindicated with nitrates.",
    drugApproach: ["PDE5 inhibitor (e.g. sildenafil)", "Address cardiovascular risk factors"],
    match: { indicationIncludes: ["erectile"], tags: ["Erectile dysfunction"] },
    sources: BNF_NHS,
  },
  {
    slug: "contraceptive",
    name: "Contraception",
    type: "condition",
    summary:
      "Hormonal contraception prevents pregnancy mainly by suppressing ovulation, thickening cervical mucus and thinning the endometrium. Combined (oestrogen plus progestogen) methods carry a small increased risk of venous thromboembolism and are avoided in certain groups; progestogen-only and emergency options have different profiles.",
    drugApproach: [
      "Combined hormonal contraceptives (pill, patch, ring)",
      "Progestogen-only pill and long-acting progestogen methods",
      "Emergency contraception (levonorgestrel, ulipristal, copper IUD)",
    ],
    match: {
      indicationIncludes: ["contracepti"],
      tags: [
        "Contraceptive",
        "Oestrogen + progestogen",
        "Emergency contraception",
        "Progestogen",
      ],
    },
    sources: BNF_NHS,
  },
  {
    slug: "bone-health",
    name: "Osteoporosis & bone health",
    type: "condition",
    summary:
      "Osteoporosis is reduced bone mass and microarchitectural deterioration that increases fracture risk, often silent until a fragility fracture occurs. Antiresorptive drugs (mainly bisphosphonates) reduce bone turnover, alongside adequate calcium and vitamin D and falls prevention.",
    drugApproach: [
      "Bisphosphonates (first-line antiresorptive)",
      "Calcium and vitamin D supplementation",
      "Other agents (e.g. denosumab, teriparatide) in specialist care",
    ],
    match: { indicationIncludes: ["osteoporosis"], tags: ["Bone health"] },
    sources: BNF_NHS,
  },

  /* -------------------- Clinical concepts -------------------- */
  {
    slug: "narrow-therapeutic-index",
    name: "Narrow therapeutic index",
    type: "clinical-feature",
    summary:
      "A narrow therapeutic index means the effective dose is close to the toxic dose, so small changes in level — from dose changes, interactions, brand switches, renal function or illness — can cause toxicity or loss of effect. These drugs need careful dosing, consistent formulation and, for several, plasma level monitoring.",
    match: { tags: ["Narrow therapeutic index"] },
    sources: BNF_NHS,
  },
  {
    slug: "enzyme-inducer",
    name: "Enzyme inducers",
    type: "clinical-feature",
    summary:
      "Enzyme inducers increase the synthesis of hepatic cytochrome P450 enzymes over days to weeks, speeding the metabolism of many co-prescribed drugs and lowering their levels — a classic cause of hormonal contraceptive failure and reduced anticoagulant effect. The effect also wanes gradually after stopping.",
    match: { tags: ["Enzyme inducer"] },
    sources: BNF_NHS,
  },
  {
    slug: "enzyme-inhibitor",
    name: "Enzyme inhibitors",
    type: "clinical-feature",
    summary:
      "Enzyme inhibitors block hepatic cytochrome P450 metabolism, often within hours, raising the levels of co-prescribed substrate drugs and their risk of toxicity. Common culprits include macrolides, azole antifungals and cimetidine.",
    match: { tags: ["Enzyme inhibitor"] },
    sources: BNF_NHS,
  },
  {
    slug: "controlled-drug",
    name: "Controlled drugs",
    type: "clinical-feature",
    summary:
      "Controlled drugs are subject to extra legal controls on prescribing, storage and record-keeping because of their potential for misuse and dependence — most opioids, benzodiazepines, Z-drugs, gabapentinoids and stimulants. Prescriptions have specific requirements and quantities are often limited.",
    match: { tags: ["Controlled drug"] },
    sources: BNF_NHS,
  },
  {
    slug: "teratogen",
    name: "Teratogenic drugs",
    type: "clinical-feature",
    summary:
      "Teratogens can cause structural malformations or developmental harm to a fetus, with risk varying by drug, dose and timing in pregnancy. Notable examples in the formulary are sodium valproate, methotrexate, retinoids, warfarin and ACE inhibitors/ARBs; effective contraception and pre-pregnancy review are essential.",
    match: { tags: ["Teratogen"] },
    sources: BNF_NHS,
  },
];

/* ================================================================== */
/*  Lookups                                                             */
/* ================================================================== */

const BY_SLUG = new Map(TOPICS.map((t) => [t.slug, t]));

/** every distinct tag string used anywhere in the drug dataset */
export function allTags(): string[] {
  const set = new Set<string>();
  for (const y of YEARS) for (const d of getDrugsForYear(y)) d.tags.forEach((t) => set.add(t));
  return [...set].sort((a, b) => a.localeCompare(b));
}

const TAG_BY_SLUG = new Map<string, string>();
for (const tag of allTags()) TAG_BY_SLUG.set(slugifyTag(tag), tag);

function inferType(tag: string): TopicType {
  if (["Cardiovascular", "Respiratory", "Thyroid"].includes(tag)) return "therapeutic-area";
  if (
    [
      "Narrow therapeutic index",
      "Enzyme inducer",
      "Enzyme inhibitor",
      "Controlled drug",
      "Teratogen",
    ].includes(tag)
  )
    return "clinical-feature";
  return "drug-class";
}

/** Resolve a URL slug to a topic — an authored one, or a lightweight
 * auto-topic synthesised from a real tag. Returns null for unknown slugs. */
export function getTopic(slug: string): Topic | null {
  const authored = BY_SLUG.get(slug);
  if (authored) return authored;

  const tag = TAG_BY_SLUG.get(slug);
  if (!tag) return null;
  return {
    slug,
    name: tag,
    type: inferType(tag),
    summary: "",
    match: { tags: [tag] },
    sources: [],
  };
}

/** slug for a tag: an authored topic wins, else the slugified tag */
export function slugForTag(tag: string): string {
  const authored = TOPICS.find((t) => t.match.tags?.includes(tag));
  return authored ? authored.slug : slugifyTag(tag);
}

function drugMatches(d: Drug, m: TopicMatch): boolean {
  if (m.tags && m.tags.some((t) => d.tags.includes(t))) return true;
  if (m.indicationIncludes) {
    const excludes = (m.indicationExcludes ?? []).map((x) => x.toLowerCase());
    const hit = d.indications.some((raw) => {
      const i = raw.toLowerCase();
      if (excludes.some((x) => i.includes(x))) return false;
      return m.indicationIncludes!.some((k) => i.includes(k.toLowerCase()));
    });
    if (hit) return true;
  }
  return false;
}

/** Does a drug belong to the topic identified by this URL slug?
 * An unknown / empty slug matches everything (no filter). */
export function drugMatchesTopicSlug(
  d: Drug,
  slug: string | null | undefined
): boolean {
  if (!slug) return true;
  const topic = getTopic(slug);
  if (!topic) return true;
  return drugMatches(d, topic.match);
}

/** Ordered candidate quick-filters for the Library. Each is kept for a given
 * year only if it actually matches a drug in that year. */
export const LIBRARY_QUICK_FILTERS = [
  "cardiovascular",
  "respiratory",
  "diabetes",
  "analgesic",
  "opioid",
  "antibiotic",
  "antifungal",
  "antiepileptic",
  "antipsychotic",
  "anticoagulant",
];

export interface TopicDrugYear {
  year: Year;
  drugs: Drug[];
}

/** Matching formulary drugs for a topic, grouped by year, years with no
 * matches omitted. Always derived from the live drug dataset. */
export function drugsForTopic(topic: Topic): TopicDrugYear[] {
  const groups: TopicDrugYear[] = [];
  for (const year of YEARS) {
    const drugs = getDrugsForYear(year)
      .filter((d) => drugMatches(d, topic.match))
      .sort((a, b) => a.reference - b.reference);
    if (drugs.length) groups.push({ year, drugs });
  }
  return groups;
}

export function topicDrugCount(topic: Topic): number {
  return drugsForTopic(topic).reduce((n, g) => n + g.drugs.length, 0);
}

/** first academic year that has a matching drug (for "View drugs" links) */
export function firstYearForTopic(topic: Topic): Year | null {
  return drugsForTopic(topic)[0]?.year ?? null;
}

const BROWSE_ORDER: TopicType[] = [
  "drug-class",
  "condition",
  "therapeutic-area",
  "clinical-feature",
];

const BROWSE_HEADINGS: Record<TopicType, string> = {
  "drug-class": "Drug classes",
  condition: "Conditions",
  "therapeutic-area": "Therapeutic areas",
  "clinical-feature": "Clinical concepts",
};

export interface BrowseGroup {
  type: TopicType;
  heading: string;
  topics: Topic[];
}

/** Authored topics grouped for the /topics page. */
export function browseGroups(): BrowseGroup[] {
  return BROWSE_ORDER.map((type) => ({
    type,
    heading: BROWSE_HEADINGS[type],
    topics: TOPICS.filter((t) => t.type === type).sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
  })).filter((g) => g.topics.length);
}

/** Tags with no authored topic — shown small under an "Other tags" section
 * so every tag is still browsable without cluttering the page. */
export function unauthoredTags(): string[] {
  const authoredTags = new Set(TOPICS.flatMap((t) => t.match.tags ?? []));
  return allTags().filter((tag) => !authoredTags.has(tag));
}

/** All slugs that need a static page: authored + every tag. */
export function allTopicSlugs(): string[] {
  const set = new Set<string>(TOPICS.map((t) => t.slug));
  for (const tag of allTags()) set.add(slugifyTag(tag));
  return [...set];
}
