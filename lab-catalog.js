const LAB_CATALOG={
  "Endocrine Studies": [
    "Total TSH",
    "Free T4",
    "Free T3",
    "Cortisol",
    "Hemoglobin A1C",
    "C-peptide",
    "Random cortisol"
  ],
  "Cardiac Markers": [
    "Troponin T (high sensitivity)",
    "CPK",
    "BNP"
  ],
  "ID Studies": [
    "Lyme disease",
    "HIV",
    "Hepatitis panel",
    "FTA",
    "RPR"
  ],
  "CSF Studies": [
    "CSF protein",
    "CSF glucose",
    "CSF WBC count",
    "CSF neutrophils",
    "CSF lymphocytes",
    "CSF RBCs",
    "Other"
  ],
  "LFTs": [
    "AST",
    "ALT",
    "Total bilirubin",
    "Direct bilirubin",
    "Ammonia",
    "Alkaline phosphatase"
  ],
  "Pancreatic Enzymes": [
    "Lipase",
    "Amylase"
  ],
  "Proteins": [
    "Albumin",
    "Total protein"
  ],
  "Inflammatory Markers": [
    "CRP",
    "Sed Rate"
  ],
  "Tumor Markers": [
    "SPEP",
    "UPEP",
    "PSA",
    "CEA",
    "AFP",
    "CA 19-9",
    "CA 125",
    "CA 15-3/CA 27.29",
    "β-hCG",
    "LDH",
    "Chromogranin A",
    "Free light chain kappa",
    "Free light chain lambda",
    "Free light chain kappa/lambda ratio"
  ],
  "UA Analysis": [
    "Leukocyte esterase",
    "Nitrite",
    "Squamous epithelial cells",
    "WBC",
    "Blood",
    "Glucose",
    "Ketones",
    "Protein",
    "Bacteria"
  ],
  "Autoimmune Studies": [
    "ANA",
    "ANCA",
    "Encephalitis antibodies",
    "Other"
  ]
};
Object.entries(LAB_CATALOG).forEach(([group,names])=>names.forEach((name,index)=>LABS.push({id:group+":"+index,name,full:name,group,values:[]})));

LABS.push(...[
  {
    "id": "cbc-diff:0",
    "name": "Differential Type",
    "full": "Differential Type",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:1",
    "name": "Abs Baso",
    "full": "Absolute Basophils",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:2",
    "name": "Abs Eos",
    "full": "Absolute Eosinophils",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:3",
    "name": "Abs Immature Gran",
    "full": "Absolute Immature Granulocytes",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:4",
    "name": "Abs Lymphs",
    "full": "Absolute Lymphocytes",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:5",
    "name": "Abs Monos",
    "full": "Absolute Monocytes",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:6",
    "name": "Abs Neuts",
    "full": "Absolute Neutrophils",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:7",
    "name": "ABS NRBC",
    "full": "Absolute Nucleated Red Blood Cells",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:8",
    "name": "Baso",
    "full": "Basophils",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:9",
    "name": "Eosin",
    "full": "Eosinophils",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:10",
    "name": "Immature Gran %",
    "full": "Immature Granulocytes Percentage",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:11",
    "name": "Lymphs",
    "full": "Lymphocytes",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:12",
    "name": "Monos",
    "full": "Monocytes",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:13",
    "name": "Neuts",
    "full": "Neutrophils",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  },
  {
    "id": "cbc-diff:14",
    "name": "Nucleated RBC",
    "full": "Nucleated Red Blood Cells",
    "group": "CBC",
    "subgroup": "Diff",
    "values": []
  }
]);

LABS.push(...[
  {
    "id": "vitamins:0",
    "name": "25-hydroxyvitamin D",
    "full": "25-hydroxyvitamin D",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:1",
    "name": "B12",
    "full": "B12",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:2",
    "name": "Folate",
    "full": "Folate",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:3",
    "name": "Vitamin A",
    "full": "Vitamin A",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:4",
    "name": "Vitamin E",
    "full": "Vitamin E",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:5",
    "name": "Vitamin B1 whole blood",
    "full": "Vitamin B1 whole blood",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:6",
    "name": "Vitamin B1 plasma",
    "full": "Vitamin B1 plasma",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:7",
    "name": "Vitamin B6",
    "full": "Vitamin B6",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:8",
    "name": "Vitamin K",
    "full": "Vitamin K",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:9",
    "name": "Vitamin C",
    "full": "Vitamin C",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "vitamins:10",
    "name": "MMA",
    "full": "MMA",
    "group": "Vitamins",
    "values": []
  },
  {
    "id": "serum:0",
    "name": "Lactic acid",
    "full": "Lactic acid",
    "group": "Serum",
    "values": []
  },
  {
    "id": "serum:1",
    "name": "Procalcitonin",
    "full": "Procalcitonin",
    "group": "Serum",
    "values": []
  }
]);

LABS.push(...[
  {
    "id": "blood-gas:abg:0",
    "name": "pH",
    "full": "pH",
    "group": "Blood Gas",
    "subgroup": "ABG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:abg:1",
    "name": "PaCO₂",
    "full": "PaCO₂",
    "group": "Blood Gas",
    "subgroup": "ABG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:abg:2",
    "name": "PaO₂",
    "full": "PaO₂",
    "group": "Blood Gas",
    "subgroup": "ABG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:abg:3",
    "name": "HCO₃⁻ (bicarbonate)",
    "full": "HCO₃⁻ (bicarbonate)",
    "group": "Blood Gas",
    "subgroup": "ABG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:abg:4",
    "name": "Base excess",
    "full": "Base excess",
    "group": "Blood Gas",
    "subgroup": "ABG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:abg:5",
    "name": "SaO₂",
    "full": "SaO₂",
    "group": "Blood Gas",
    "subgroup": "ABG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:abg:6",
    "name": "Lactate",
    "full": "Lactate",
    "group": "Blood Gas",
    "subgroup": "ABG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:0",
    "name": "pH",
    "full": "pH",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:1",
    "name": "pCO₂",
    "full": "pCO₂",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:2",
    "name": "pO₂",
    "full": "pO₂",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:3",
    "name": "HCO₃⁻",
    "full": "HCO₃⁻",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:4",
    "name": "Base excess",
    "full": "Base excess",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:5",
    "name": "Lactate",
    "full": "Lactate",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:6",
    "name": "sO₂",
    "full": "sO₂",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:7",
    "name": "Ionized calcium",
    "full": "Ionized calcium",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": ""
  },
  {
    "id": "blood-gas:vbg:8",
    "name": "Sodium / potassium / chloride",
    "full": "Sodium / potassium / chloride",
    "group": "Blood Gas",
    "subgroup": "VBG",
    "values": [],
    "unit": "mmol/L"
  }
]);
