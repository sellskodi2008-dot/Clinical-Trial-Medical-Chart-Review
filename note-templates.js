(function(root){const templates=[
  {
    "id": "consultation",
    "title": "Consultation — hospital or office",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "chief",
        "label": "Chief complaint / reason",
        "fields": [
          {
            "id": "chief_0",
            "label": "Chief complaint",
            "aliases": [
              "Chief complaint",
              "Chief concern",
              "Identification / chief complaint",
              "Reason for visit",
              "CC"
            ]
          },
          {
            "id": "chief_1",
            "label": "Reason for consultation",
            "aliases": [
              "Reason for consultation",
              "Reason for ICU admission / consultation"
            ]
          },
          {
            "id": "chief_2",
            "label": "Requesting / referring provider",
            "aliases": [
              "Requesting / referring provider",
              "Requesting provider/service",
              "Referring provider"
            ]
          },
          {
            "id": "chief_3",
            "label": "Historian",
            "aliases": [
              "Historian",
              "Source of history"
            ]
          },
          {
            "id": "chief_4",
            "label": "Reliability",
            "aliases": [
              "Reliability"
            ]
          }
        ]
      },
      {
        "id": "hpi",
        "label": "History of present illness",
        "fields": [
          {
            "id": "hpi_0",
            "label": "History of present illness",
            "aliases": [
              "History of present illness",
              "HPI",
              "History",
              "History of presenting illness"
            ]
          },
          {
            "id": "hpi_1",
            "label": "Interval history",
            "aliases": [
              "Interval history",
              "Subjective",
              "Interval history since last note"
            ]
          },
          {
            "id": "hpi_2",
            "label": "Baseline function / cognition",
            "aliases": [
              "Baseline function / cognition",
              "Baseline functional status",
              "Baseline cognition"
            ]
          }
        ]
      },
      {
        "id": "pmh",
        "label": "Past medical and surgical history",
        "fields": [
          {
            "id": "pmh_0",
            "label": "Past medical history",
            "aliases": [
              "Past medical history",
              "PMH"
            ]
          },
          {
            "id": "pmh_1",
            "label": "Past surgical history",
            "aliases": [
              "Past surgical history",
              "PSH",
              "Surgical history"
            ]
          }
        ]
      },
      {
        "id": "meds",
        "label": "Medications and allergies",
        "fields": [
          {
            "id": "meds_0",
            "label": "Home medications",
            "aliases": [
              "Home medications",
              "Medications (home)",
              "Home meds"
            ]
          },
          {
            "id": "meds_1",
            "label": "Encounter medication list",
            "aliases": [
              "Encounter medication list",
              "Medications",
              "Current medication list"
            ]
          },
          {
            "id": "meds_2",
            "label": "Administered medications",
            "aliases": [
              "Administered medications",
              "ED medications"
            ]
          },
          {
            "id": "meds_3",
            "label": "Medication changes / held / discontinued",
            "aliases": [
              "Medication changes / held / discontinued"
            ]
          },
          {
            "id": "meds_4",
            "label": "Allergies / reactions",
            "aliases": [
              "Allergies / reactions",
              "Allergies",
              "Allergies/adverse reactions"
            ]
          }
        ]
      },
      {
        "id": "family",
        "label": "Family and social history",
        "fields": [
          {
            "id": "family_0",
            "label": "Family history",
            "aliases": [
              "Family history"
            ]
          },
          {
            "id": "family_1",
            "label": "Social history",
            "aliases": [
              "Social history"
            ]
          },
          {
            "id": "family_2",
            "label": "Tobacco",
            "aliases": [
              "Tobacco"
            ]
          },
          {
            "id": "family_3",
            "label": "Alcohol",
            "aliases": [
              "Alcohol"
            ]
          },
          {
            "id": "family_4",
            "label": "Substance use",
            "aliases": [
              "Substance use",
              "Substances"
            ]
          },
          {
            "id": "family_5",
            "label": "Living situation / support",
            "aliases": [
              "Living situation / support"
            ]
          },
          {
            "id": "family_6",
            "label": "Occupation / functional status",
            "aliases": [
              "Occupation / functional status"
            ]
          },
          {
            "id": "family_7",
            "label": "Exposures / travel",
            "aliases": [
              "Exposures / travel"
            ]
          }
        ]
      },
      {
        "id": "ros",
        "label": "Review of systems",
        "fields": [
          {
            "id": "ros_0",
            "label": "Review of systems",
            "aliases": [
              "Review of systems",
              "ROS",
              "Pertinent review of systems"
            ]
          },
          {
            "id": "ros_1",
            "label": "Constitutional",
            "aliases": [
              "Constitutional"
            ]
          },
          {
            "id": "ros_2",
            "label": "HEENT",
            "aliases": [
              "HEENT"
            ]
          },
          {
            "id": "ros_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular"
            ]
          },
          {
            "id": "ros_4",
            "label": "Respiratory",
            "aliases": [
              "Respiratory"
            ]
          },
          {
            "id": "ros_5",
            "label": "GI",
            "aliases": [
              "GI"
            ]
          },
          {
            "id": "ros_6",
            "label": "GU",
            "aliases": [
              "GU"
            ]
          },
          {
            "id": "ros_7",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal"
            ]
          },
          {
            "id": "ros_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic"
            ]
          },
          {
            "id": "ros_9",
            "label": "Skin",
            "aliases": [
              "Skin"
            ]
          },
          {
            "id": "ros_10",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ]
          },
          {
            "id": "ros_11",
            "label": "Endocrine / heme / immunologic",
            "aliases": [
              "Endocrine / heme / immunologic",
              "Heme/Endo"
            ]
          },
          {
            "id": "ros_12",
            "label": "Limitations / unable to obtain",
            "aliases": [
              "Limitations / unable to obtain"
            ]
          }
        ]
      },
      {
        "id": "vitals",
        "label": "Vitals and measurements",
        "fields": [
          {
            "id": "vitals_0",
            "label": "Vitals",
            "aliases": [
              "Vitals",
              "Vital signs",
              "Objective"
            ]
          },
          {
            "id": "vitals_1",
            "label": "Measurement time / reporting window",
            "aliases": [
              "Measurement time / reporting window"
            ]
          },
          {
            "id": "vitals_2",
            "label": "Temperature / Tmax",
            "aliases": [
              "Temperature / Tmax"
            ]
          },
          {
            "id": "vitals_3",
            "label": "Heart rate",
            "aliases": [
              "Heart rate",
              "HR",
              "Pulse"
            ]
          },
          {
            "id": "vitals_4",
            "label": "Blood pressure",
            "aliases": [
              "Blood pressure",
              "BP"
            ]
          },
          {
            "id": "vitals_5",
            "label": "MAP",
            "aliases": [
              "MAP"
            ]
          },
          {
            "id": "vitals_6",
            "label": "Respiratory rate",
            "aliases": [
              "Respiratory rate",
              "RR"
            ]
          },
          {
            "id": "vitals_7",
            "label": "SpO₂",
            "aliases": [
              "SpO₂",
              "SpO2",
              "Oxygen saturation"
            ]
          },
          {
            "id": "vitals_8",
            "label": "Oxygen device / flow / FiO₂",
            "aliases": [
              "Oxygen device / flow / FiO₂"
            ]
          },
          {
            "id": "vitals_9",
            "label": "Weight / BMI",
            "aliases": [
              "Weight / BMI",
              "Weight"
            ]
          },
          {
            "id": "vitals_10",
            "label": "Pain score",
            "aliases": [
              "Pain score"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_0",
            "label": "Laboratory results",
            "aliases": [
              "Laboratory results",
              "Laboratory",
              "Labs",
              "Labs (today, with pertinent trends)",
              "Labs/Micro"
            ]
          },
          {
            "id": "data_1",
            "label": "CBC",
            "aliases": [
              "CBC"
            ]
          },
          {
            "id": "data_2",
            "label": "BMP / CMP",
            "aliases": [
              "BMP / CMP",
              "BMP",
              "CMP"
            ]
          },
          {
            "id": "data_3",
            "label": "LFTs",
            "aliases": [
              "LFTs"
            ]
          },
          {
            "id": "data_4",
            "label": "Coagulation",
            "aliases": [
              "Coagulation"
            ]
          },
          {
            "id": "data_5",
            "label": "ABG",
            "aliases": [
              "ABG"
            ]
          },
          {
            "id": "data_6",
            "label": "VBG",
            "aliases": [
              "VBG"
            ]
          },
          {
            "id": "data_7",
            "label": "Other laboratory results",
            "aliases": [
              "Other laboratory results"
            ]
          },
          {
            "id": "data_8",
            "label": "Microbiology / cultures",
            "aliases": [
              "Microbiology / cultures",
              "Microbiology",
              "Micro",
              "Cultures"
            ]
          },
          {
            "id": "data_9",
            "label": "Imaging",
            "aliases": [
              "Imaging",
              "Imaging / diagnostics",
              "Imaging / studies",
              "Imaging/Studies"
            ]
          },
          {
            "id": "data_10",
            "label": "ECG",
            "aliases": [
              "ECG"
            ]
          },
          {
            "id": "data_11",
            "label": "Other diagnostics",
            "aliases": [
              "Other diagnostics",
              "Diagnostics",
              "Other studies"
            ]
          },
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          },
          {
            "id": "data_13",
            "label": "Pending studies",
            "aliases": [
              "Pending studies"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Summary statement",
            "aliases": [
              "Summary statement",
              "Assessment",
              "One-liner"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Clinical reasoning / differential",
            "aliases": [
              "Clinical reasoning / differential",
              "Differential diagnosis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Documented trajectory",
            "aliases": [
              "Documented trajectory"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Problem list / diagnoses",
            "aliases": [
              "Problem list / diagnoses",
              "Clinical impression / ED diagnoses",
              "Clinical impression",
              "Diagnoses"
            ]
          }
        ]
      },
      {
        "id": "plan",
        "label": "Recommendations / plan",
        "fields": [
          {
            "id": "plan_0",
            "label": "Problem-based assessment and plan",
            "aliases": [
              "Problem-based assessment and plan",
              "Assessment and plan",
              "Problem list / plan",
              "Plan (by problem)",
              "Plan"
            ]
          },
          {
            "id": "plan_1",
            "label": "Recommendations / plan",
            "aliases": [
              "Recommendations / plan",
              "Recommendations"
            ]
          },
          {
            "id": "plan_2",
            "label": "Diagnostics",
            "aliases": [
              "Diagnostics"
            ]
          },
          {
            "id": "plan_3",
            "label": "Therapeutics",
            "aliases": [
              "Therapeutics"
            ]
          },
          {
            "id": "plan_4",
            "label": "Monitoring / targets",
            "aliases": [
              "Monitoring / targets"
            ]
          },
          {
            "id": "plan_5",
            "label": "Consults / referrals",
            "aliases": [
              "Consults / referrals"
            ]
          },
          {
            "id": "plan_6",
            "label": "Ongoing / chronic issues",
            "aliases": [
              "Ongoing / chronic issues"
            ]
          },
          {
            "id": "plan_7",
            "label": "Disposition",
            "aliases": [
              "Disposition"
            ]
          },
          {
            "id": "plan_8",
            "label": "Follow-up",
            "aliases": [
              "Follow-up",
              "Next visit"
            ]
          },
          {
            "id": "plan_9",
            "label": "Return precautions",
            "aliases": [
              "Return precautions"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "admission-hp",
    "title": "Admission history and physical",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "admission",
        "label": "Admission details",
        "fields": [
          {
            "id": "admission_0",
            "label": "Date/time of admission",
            "aliases": [
              "Date/time of admission"
            ]
          },
          {
            "id": "admission_1",
            "label": "Date/time of exam",
            "aliases": [
              "Date/time of exam"
            ]
          }
        ]
      },
      {
        "id": "chief",
        "label": "Chief complaint / reason",
        "fields": [
          {
            "id": "chief_0",
            "label": "Chief complaint",
            "aliases": [
              "Chief complaint",
              "Chief concern",
              "Identification / chief complaint",
              "Reason for visit",
              "CC"
            ]
          },
          {
            "id": "chief_1",
            "label": "Reason for consultation",
            "aliases": [
              "Reason for consultation",
              "Reason for ICU admission / consultation"
            ]
          },
          {
            "id": "chief_2",
            "label": "Requesting / referring provider",
            "aliases": [
              "Requesting / referring provider",
              "Requesting provider/service",
              "Referring provider"
            ]
          },
          {
            "id": "chief_3",
            "label": "Historian",
            "aliases": [
              "Historian",
              "Source of history"
            ]
          },
          {
            "id": "chief_4",
            "label": "Reliability",
            "aliases": [
              "Reliability"
            ]
          }
        ]
      },
      {
        "id": "hpi",
        "label": "History of present illness",
        "fields": [
          {
            "id": "hpi_0",
            "label": "History of present illness",
            "aliases": [
              "History of present illness",
              "HPI",
              "History",
              "History of presenting illness"
            ]
          },
          {
            "id": "hpi_1",
            "label": "Interval history",
            "aliases": [
              "Interval history",
              "Subjective",
              "Interval history since last note"
            ]
          },
          {
            "id": "hpi_2",
            "label": "Baseline function / cognition",
            "aliases": [
              "Baseline function / cognition",
              "Baseline functional status",
              "Baseline cognition"
            ]
          }
        ]
      },
      {
        "id": "pmh",
        "label": "Past medical and surgical history",
        "fields": [
          {
            "id": "pmh_0",
            "label": "Past medical history",
            "aliases": [
              "Past medical history",
              "PMH"
            ]
          },
          {
            "id": "pmh_1",
            "label": "Past surgical history",
            "aliases": [
              "Past surgical history",
              "PSH",
              "Surgical history"
            ]
          }
        ]
      },
      {
        "id": "meds",
        "label": "Medications and allergies",
        "fields": [
          {
            "id": "meds_0",
            "label": "Home medications",
            "aliases": [
              "Home medications",
              "Medications (home)",
              "Home meds"
            ]
          },
          {
            "id": "meds_1",
            "label": "Encounter medication list",
            "aliases": [
              "Encounter medication list",
              "Medications",
              "Current medication list"
            ]
          },
          {
            "id": "meds_2",
            "label": "Administered medications",
            "aliases": [
              "Administered medications",
              "ED medications"
            ]
          },
          {
            "id": "meds_3",
            "label": "Medication changes / held / discontinued",
            "aliases": [
              "Medication changes / held / discontinued"
            ]
          },
          {
            "id": "meds_4",
            "label": "Allergies / reactions",
            "aliases": [
              "Allergies / reactions",
              "Allergies",
              "Allergies/adverse reactions"
            ]
          }
        ]
      },
      {
        "id": "family",
        "label": "Family and social history",
        "fields": [
          {
            "id": "family_0",
            "label": "Family history",
            "aliases": [
              "Family history"
            ]
          },
          {
            "id": "family_1",
            "label": "Social history",
            "aliases": [
              "Social history"
            ]
          },
          {
            "id": "family_2",
            "label": "Tobacco",
            "aliases": [
              "Tobacco"
            ]
          },
          {
            "id": "family_3",
            "label": "Alcohol",
            "aliases": [
              "Alcohol"
            ]
          },
          {
            "id": "family_4",
            "label": "Substance use",
            "aliases": [
              "Substance use",
              "Substances"
            ]
          },
          {
            "id": "family_5",
            "label": "Living situation / support",
            "aliases": [
              "Living situation / support"
            ]
          },
          {
            "id": "family_6",
            "label": "Occupation / functional status",
            "aliases": [
              "Occupation / functional status"
            ]
          },
          {
            "id": "family_7",
            "label": "Exposures / travel",
            "aliases": [
              "Exposures / travel"
            ]
          }
        ]
      },
      {
        "id": "goc",
        "label": "Code status / goals / communication",
        "fields": [
          {
            "id": "goc_0",
            "label": "Code status",
            "aliases": [
              "Code status"
            ]
          },
          {
            "id": "goc_1",
            "label": "Goals of care",
            "aliases": [
              "Goals of care"
            ]
          },
          {
            "id": "goc_2",
            "label": "Healthcare proxy / surrogate",
            "aliases": [
              "Healthcare proxy / surrogate"
            ]
          },
          {
            "id": "goc_3",
            "label": "Advance directive / POLST on file",
            "aliases": [
              "Advance directive / POLST on file"
            ]
          },
          {
            "id": "goc_4",
            "label": "Goals-of-care discussion held",
            "aliases": [
              "Goals-of-care discussion held"
            ]
          },
          {
            "id": "goc_5",
            "label": "Patient / family communication",
            "aliases": [
              "Patient / family communication",
              "Family / patient communication"
            ]
          },
          {
            "id": "goc_6",
            "label": "Isolation / precautions",
            "aliases": [
              "Isolation / precautions",
              "Isolation"
            ]
          }
        ]
      },
      {
        "id": "ros",
        "label": "Review of systems",
        "fields": [
          {
            "id": "ros_0",
            "label": "Review of systems",
            "aliases": [
              "Review of systems",
              "ROS",
              "Pertinent review of systems"
            ]
          },
          {
            "id": "ros_1",
            "label": "Constitutional",
            "aliases": [
              "Constitutional"
            ]
          },
          {
            "id": "ros_2",
            "label": "HEENT",
            "aliases": [
              "HEENT"
            ]
          },
          {
            "id": "ros_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular"
            ]
          },
          {
            "id": "ros_4",
            "label": "Respiratory",
            "aliases": [
              "Respiratory"
            ]
          },
          {
            "id": "ros_5",
            "label": "GI",
            "aliases": [
              "GI"
            ]
          },
          {
            "id": "ros_6",
            "label": "GU",
            "aliases": [
              "GU"
            ]
          },
          {
            "id": "ros_7",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal"
            ]
          },
          {
            "id": "ros_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic"
            ]
          },
          {
            "id": "ros_9",
            "label": "Skin",
            "aliases": [
              "Skin"
            ]
          },
          {
            "id": "ros_10",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ]
          },
          {
            "id": "ros_11",
            "label": "Endocrine / heme / immunologic",
            "aliases": [
              "Endocrine / heme / immunologic",
              "Heme/Endo"
            ]
          },
          {
            "id": "ros_12",
            "label": "Limitations / unable to obtain",
            "aliases": [
              "Limitations / unable to obtain"
            ]
          }
        ]
      },
      {
        "id": "vitals",
        "label": "Vitals and measurements",
        "fields": [
          {
            "id": "vitals_0",
            "label": "Vitals",
            "aliases": [
              "Vitals",
              "Vital signs",
              "Objective"
            ]
          },
          {
            "id": "vitals_1",
            "label": "Measurement time / reporting window",
            "aliases": [
              "Measurement time / reporting window"
            ]
          },
          {
            "id": "vitals_2",
            "label": "Temperature / Tmax",
            "aliases": [
              "Temperature / Tmax"
            ]
          },
          {
            "id": "vitals_3",
            "label": "Heart rate",
            "aliases": [
              "Heart rate",
              "HR",
              "Pulse"
            ]
          },
          {
            "id": "vitals_4",
            "label": "Blood pressure",
            "aliases": [
              "Blood pressure",
              "BP"
            ]
          },
          {
            "id": "vitals_5",
            "label": "MAP",
            "aliases": [
              "MAP"
            ]
          },
          {
            "id": "vitals_6",
            "label": "Respiratory rate",
            "aliases": [
              "Respiratory rate",
              "RR"
            ]
          },
          {
            "id": "vitals_7",
            "label": "SpO₂",
            "aliases": [
              "SpO₂",
              "SpO2",
              "Oxygen saturation"
            ]
          },
          {
            "id": "vitals_8",
            "label": "Oxygen device / flow / FiO₂",
            "aliases": [
              "Oxygen device / flow / FiO₂"
            ]
          },
          {
            "id": "vitals_9",
            "label": "Weight / BMI",
            "aliases": [
              "Weight / BMI",
              "Weight"
            ]
          },
          {
            "id": "vitals_10",
            "label": "Pain score",
            "aliases": [
              "Pain score"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_0",
            "label": "Laboratory results",
            "aliases": [
              "Laboratory results",
              "Laboratory",
              "Labs",
              "Labs (today, with pertinent trends)",
              "Labs/Micro"
            ]
          },
          {
            "id": "data_1",
            "label": "CBC",
            "aliases": [
              "CBC"
            ]
          },
          {
            "id": "data_2",
            "label": "BMP / CMP",
            "aliases": [
              "BMP / CMP",
              "BMP",
              "CMP"
            ]
          },
          {
            "id": "data_3",
            "label": "LFTs",
            "aliases": [
              "LFTs"
            ]
          },
          {
            "id": "data_4",
            "label": "Coagulation",
            "aliases": [
              "Coagulation"
            ]
          },
          {
            "id": "data_5",
            "label": "ABG",
            "aliases": [
              "ABG"
            ]
          },
          {
            "id": "data_6",
            "label": "VBG",
            "aliases": [
              "VBG"
            ]
          },
          {
            "id": "data_7",
            "label": "Other laboratory results",
            "aliases": [
              "Other laboratory results"
            ]
          },
          {
            "id": "data_8",
            "label": "Microbiology / cultures",
            "aliases": [
              "Microbiology / cultures",
              "Microbiology",
              "Micro",
              "Cultures"
            ]
          },
          {
            "id": "data_9",
            "label": "Imaging",
            "aliases": [
              "Imaging",
              "Imaging / diagnostics",
              "Imaging / studies",
              "Imaging/Studies"
            ]
          },
          {
            "id": "data_10",
            "label": "ECG",
            "aliases": [
              "ECG"
            ]
          },
          {
            "id": "data_11",
            "label": "Other diagnostics",
            "aliases": [
              "Other diagnostics",
              "Diagnostics",
              "Other studies"
            ]
          },
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          },
          {
            "id": "data_13",
            "label": "Pending studies",
            "aliases": [
              "Pending studies"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Summary statement",
            "aliases": [
              "Summary statement",
              "Assessment",
              "One-liner"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Clinical reasoning / differential",
            "aliases": [
              "Clinical reasoning / differential",
              "Differential diagnosis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Documented trajectory",
            "aliases": [
              "Documented trajectory"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Problem list / diagnoses",
            "aliases": [
              "Problem list / diagnoses",
              "Clinical impression / ED diagnoses",
              "Clinical impression",
              "Diagnoses"
            ]
          }
        ]
      },
      {
        "id": "plan",
        "label": "Recommendations / plan",
        "fields": [
          {
            "id": "plan_0",
            "label": "Problem-based assessment and plan",
            "aliases": [
              "Problem-based assessment and plan",
              "Assessment and plan",
              "Problem list / plan",
              "Plan (by problem)",
              "Plan"
            ]
          },
          {
            "id": "plan_1",
            "label": "Recommendations / plan",
            "aliases": [
              "Recommendations / plan",
              "Recommendations"
            ]
          },
          {
            "id": "plan_2",
            "label": "Diagnostics",
            "aliases": [
              "Diagnostics"
            ]
          },
          {
            "id": "plan_3",
            "label": "Therapeutics",
            "aliases": [
              "Therapeutics"
            ]
          },
          {
            "id": "plan_4",
            "label": "Monitoring / targets",
            "aliases": [
              "Monitoring / targets"
            ]
          },
          {
            "id": "plan_5",
            "label": "Consults / referrals",
            "aliases": [
              "Consults / referrals"
            ]
          },
          {
            "id": "plan_6",
            "label": "Ongoing / chronic issues",
            "aliases": [
              "Ongoing / chronic issues"
            ]
          },
          {
            "id": "plan_7",
            "label": "Disposition",
            "aliases": [
              "Disposition"
            ]
          },
          {
            "id": "plan_8",
            "label": "Follow-up",
            "aliases": [
              "Follow-up",
              "Next visit"
            ]
          },
          {
            "id": "plan_9",
            "label": "Return precautions",
            "aliases": [
              "Return precautions"
            ]
          }
        ]
      },
      {
        "id": "management",
        "label": "Documented orders / management plan",
        "fields": [
          {
            "id": "management_0",
            "label": "VTE prophylaxis",
            "aliases": [
              "VTE prophylaxis"
            ]
          },
          {
            "id": "management_1",
            "label": "GI / stress-ulcer prophylaxis",
            "aliases": [
              "GI / stress-ulcer prophylaxis",
              "GI prophylaxis"
            ]
          },
          {
            "id": "management_2",
            "label": "Diet / nutrition",
            "aliases": [
              "Diet / nutrition",
              "Diet"
            ]
          },
          {
            "id": "management_3",
            "label": "Activity",
            "aliases": [
              "Activity"
            ]
          },
          {
            "id": "management_4",
            "label": "Fluids / electrolytes",
            "aliases": [
              "Fluids / electrolytes"
            ]
          },
          {
            "id": "management_5",
            "label": "Lines / tubes / removal plan",
            "aliases": [
              "Lines / tubes / removal plan",
              "Lines/tubes"
            ]
          },
          {
            "id": "management_6",
            "label": "Pending",
            "aliases": [
              "Pending"
            ]
          },
          {
            "id": "management_7",
            "label": "Discharge barriers / milestones",
            "aliases": [
              "Discharge barriers / milestones"
            ]
          },
          {
            "id": "management_8",
            "label": "Anticipated discharge date",
            "aliases": [
              "Anticipated discharge date"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "hospital-progress",
    "title": "Hospital progress note",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "days",
        "label": "Hospital course identifiers",
        "fields": [
          {
            "id": "days_0",
            "label": "Hospital day",
            "aliases": [
              "Hospital day"
            ]
          },
          {
            "id": "days_1",
            "label": "Post-op / post-procedure day",
            "aliases": [
              "Post-op / post-procedure day"
            ]
          }
        ]
      },
      {
        "id": "goc",
        "label": "Code status / goals / communication",
        "fields": [
          {
            "id": "goc_0",
            "label": "Code status",
            "aliases": [
              "Code status"
            ]
          },
          {
            "id": "goc_1",
            "label": "Goals of care",
            "aliases": [
              "Goals of care"
            ]
          },
          {
            "id": "goc_2",
            "label": "Healthcare proxy / surrogate",
            "aliases": [
              "Healthcare proxy / surrogate"
            ]
          },
          {
            "id": "goc_3",
            "label": "Advance directive / POLST on file",
            "aliases": [
              "Advance directive / POLST on file"
            ]
          },
          {
            "id": "goc_4",
            "label": "Goals-of-care discussion held",
            "aliases": [
              "Goals-of-care discussion held"
            ]
          },
          {
            "id": "goc_5",
            "label": "Patient / family communication",
            "aliases": [
              "Patient / family communication",
              "Family / patient communication"
            ]
          },
          {
            "id": "goc_6",
            "label": "Isolation / precautions",
            "aliases": [
              "Isolation / precautions",
              "Isolation"
            ]
          }
        ]
      },
      {
        "id": "interval",
        "label": "Subjective / interval events",
        "fields": [
          {
            "id": "interval_0",
            "label": "Interval history",
            "aliases": [
              "Interval history",
              "Subjective"
            ]
          },
          {
            "id": "interval_1",
            "label": "Overnight / interval events",
            "aliases": [
              "Overnight / interval events",
              "Overnight events"
            ]
          },
          {
            "id": "interval_2",
            "label": "Patient / nursing / caregiver report",
            "aliases": [
              "Patient / nursing / caregiver report"
            ]
          },
          {
            "id": "interval_3",
            "label": "Pertinent review of systems",
            "aliases": [
              "Pertinent review of systems"
            ]
          },
          {
            "id": "interval_4",
            "label": "Nursing / cross-cover information referenced",
            "aliases": [
              "Nursing / cross-cover information referenced"
            ]
          }
        ]
      },
      {
        "id": "vitals",
        "label": "Vitals and measurements",
        "fields": [
          {
            "id": "vitals_0",
            "label": "Vitals",
            "aliases": [
              "Vitals",
              "Vital signs",
              "Objective"
            ]
          },
          {
            "id": "vitals_1",
            "label": "Measurement time / reporting window",
            "aliases": [
              "Measurement time / reporting window"
            ]
          },
          {
            "id": "vitals_2",
            "label": "Temperature / Tmax",
            "aliases": [
              "Temperature / Tmax"
            ]
          },
          {
            "id": "vitals_3",
            "label": "Heart rate",
            "aliases": [
              "Heart rate",
              "HR",
              "Pulse"
            ]
          },
          {
            "id": "vitals_4",
            "label": "Blood pressure",
            "aliases": [
              "Blood pressure",
              "BP"
            ]
          },
          {
            "id": "vitals_5",
            "label": "MAP",
            "aliases": [
              "MAP"
            ]
          },
          {
            "id": "vitals_6",
            "label": "Respiratory rate",
            "aliases": [
              "Respiratory rate",
              "RR"
            ]
          },
          {
            "id": "vitals_7",
            "label": "SpO₂",
            "aliases": [
              "SpO₂",
              "SpO2",
              "Oxygen saturation"
            ]
          },
          {
            "id": "vitals_8",
            "label": "Oxygen device / flow / FiO₂",
            "aliases": [
              "Oxygen device / flow / FiO₂"
            ]
          },
          {
            "id": "vitals_9",
            "label": "Weight / BMI",
            "aliases": [
              "Weight / BMI",
              "Weight"
            ]
          },
          {
            "id": "vitals_10",
            "label": "Pain score",
            "aliases": [
              "Pain score"
            ]
          }
        ]
      },
      {
        "id": "balance",
        "label": "Fluid balance / monitoring",
        "fields": [
          {
            "id": "balance_0",
            "label": "Intake & output",
            "aliases": [
              "Intake & output",
              "Intake & output (24 hr)",
              "I/O (24 h)"
            ]
          },
          {
            "id": "balance_1",
            "label": "Reporting window",
            "aliases": [
              "Reporting window"
            ]
          },
          {
            "id": "balance_2",
            "label": "Intake",
            "aliases": [
              "Intake"
            ]
          },
          {
            "id": "balance_3",
            "label": "Output",
            "aliases": [
              "Output"
            ]
          },
          {
            "id": "balance_4",
            "label": "Daily net balance",
            "aliases": [
              "Daily net balance"
            ]
          },
          {
            "id": "balance_5",
            "label": "Cumulative net balance",
            "aliases": [
              "Cumulative net balance"
            ]
          },
          {
            "id": "balance_6",
            "label": "Urine output",
            "aliases": [
              "Urine output",
              "UOP"
            ]
          },
          {
            "id": "balance_7",
            "label": "Weight change",
            "aliases": [
              "Weight change"
            ]
          },
          {
            "id": "balance_8",
            "label": "Fingerstick glucose / telemetry",
            "aliases": [
              "Fingerstick glucose / telemetry"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_0",
            "label": "Laboratory results",
            "aliases": [
              "Laboratory results",
              "Laboratory",
              "Labs",
              "Labs (today, with pertinent trends)",
              "Labs/Micro"
            ]
          },
          {
            "id": "data_1",
            "label": "CBC",
            "aliases": [
              "CBC"
            ]
          },
          {
            "id": "data_2",
            "label": "BMP / CMP",
            "aliases": [
              "BMP / CMP",
              "BMP",
              "CMP"
            ]
          },
          {
            "id": "data_3",
            "label": "LFTs",
            "aliases": [
              "LFTs"
            ]
          },
          {
            "id": "data_4",
            "label": "Coagulation",
            "aliases": [
              "Coagulation"
            ]
          },
          {
            "id": "data_5",
            "label": "ABG",
            "aliases": [
              "ABG"
            ]
          },
          {
            "id": "data_6",
            "label": "VBG",
            "aliases": [
              "VBG"
            ]
          },
          {
            "id": "data_7",
            "label": "Other laboratory results",
            "aliases": [
              "Other laboratory results"
            ]
          },
          {
            "id": "data_8",
            "label": "Microbiology / cultures",
            "aliases": [
              "Microbiology / cultures",
              "Microbiology",
              "Micro",
              "Cultures"
            ]
          },
          {
            "id": "data_9",
            "label": "Imaging",
            "aliases": [
              "Imaging",
              "Imaging / diagnostics",
              "Imaging / studies",
              "Imaging/Studies"
            ]
          },
          {
            "id": "data_10",
            "label": "ECG",
            "aliases": [
              "ECG"
            ]
          },
          {
            "id": "data_11",
            "label": "Other diagnostics",
            "aliases": [
              "Other diagnostics",
              "Diagnostics",
              "Other studies"
            ]
          },
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          },
          {
            "id": "data_13",
            "label": "Pending studies",
            "aliases": [
              "Pending studies"
            ]
          }
        ]
      },
      {
        "id": "meds",
        "label": "Medications and allergies",
        "fields": [
          {
            "id": "meds_0",
            "label": "Home medications",
            "aliases": [
              "Home medications",
              "Medications (home)",
              "Home meds"
            ]
          },
          {
            "id": "meds_1",
            "label": "Encounter medication list",
            "aliases": [
              "Encounter medication list",
              "Medications",
              "Current medication list"
            ]
          },
          {
            "id": "meds_2",
            "label": "Administered medications",
            "aliases": [
              "Administered medications",
              "ED medications"
            ]
          },
          {
            "id": "meds_3",
            "label": "Medication changes / held / discontinued",
            "aliases": [
              "Medication changes / held / discontinued"
            ]
          },
          {
            "id": "meds_4",
            "label": "Allergies / reactions",
            "aliases": [
              "Allergies / reactions",
              "Allergies",
              "Allergies/adverse reactions"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Summary statement",
            "aliases": [
              "Summary statement",
              "Assessment",
              "One-liner"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Clinical reasoning / differential",
            "aliases": [
              "Clinical reasoning / differential",
              "Differential diagnosis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Documented trajectory",
            "aliases": [
              "Documented trajectory"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Problem list / diagnoses",
            "aliases": [
              "Problem list / diagnoses",
              "Clinical impression / ED diagnoses",
              "Clinical impression",
              "Diagnoses"
            ]
          }
        ]
      },
      {
        "id": "plan",
        "label": "Recommendations / plan",
        "fields": [
          {
            "id": "plan_0",
            "label": "Problem-based assessment and plan",
            "aliases": [
              "Problem-based assessment and plan",
              "Assessment and plan",
              "Problem list / plan",
              "Plan (by problem)",
              "Plan"
            ]
          },
          {
            "id": "plan_1",
            "label": "Recommendations / plan",
            "aliases": [
              "Recommendations / plan",
              "Recommendations"
            ]
          },
          {
            "id": "plan_2",
            "label": "Diagnostics",
            "aliases": [
              "Diagnostics"
            ]
          },
          {
            "id": "plan_3",
            "label": "Therapeutics",
            "aliases": [
              "Therapeutics"
            ]
          },
          {
            "id": "plan_4",
            "label": "Monitoring / targets",
            "aliases": [
              "Monitoring / targets"
            ]
          },
          {
            "id": "plan_5",
            "label": "Consults / referrals",
            "aliases": [
              "Consults / referrals"
            ]
          },
          {
            "id": "plan_6",
            "label": "Ongoing / chronic issues",
            "aliases": [
              "Ongoing / chronic issues"
            ]
          },
          {
            "id": "plan_7",
            "label": "Disposition",
            "aliases": [
              "Disposition"
            ]
          },
          {
            "id": "plan_8",
            "label": "Follow-up",
            "aliases": [
              "Follow-up",
              "Next visit"
            ]
          },
          {
            "id": "plan_9",
            "label": "Return precautions",
            "aliases": [
              "Return precautions"
            ]
          }
        ]
      },
      {
        "id": "management",
        "label": "Documented orders / management plan",
        "fields": [
          {
            "id": "management_0",
            "label": "VTE prophylaxis",
            "aliases": [
              "VTE prophylaxis"
            ]
          },
          {
            "id": "management_1",
            "label": "GI / stress-ulcer prophylaxis",
            "aliases": [
              "GI / stress-ulcer prophylaxis",
              "GI prophylaxis"
            ]
          },
          {
            "id": "management_2",
            "label": "Diet / nutrition",
            "aliases": [
              "Diet / nutrition",
              "Diet"
            ]
          },
          {
            "id": "management_3",
            "label": "Activity",
            "aliases": [
              "Activity"
            ]
          },
          {
            "id": "management_4",
            "label": "Fluids / electrolytes",
            "aliases": [
              "Fluids / electrolytes"
            ]
          },
          {
            "id": "management_5",
            "label": "Lines / tubes / removal plan",
            "aliases": [
              "Lines / tubes / removal plan",
              "Lines/tubes"
            ]
          },
          {
            "id": "management_6",
            "label": "Pending",
            "aliases": [
              "Pending"
            ]
          },
          {
            "id": "management_7",
            "label": "Discharge barriers / milestones",
            "aliases": [
              "Discharge barriers / milestones"
            ]
          },
          {
            "id": "management_8",
            "label": "Anticipated discharge date",
            "aliases": [
              "Anticipated discharge date"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "office-progress",
    "title": "Office visit progress note",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "chief",
        "label": "Chief complaint / reason",
        "fields": [
          {
            "id": "chief_0",
            "label": "Chief complaint",
            "aliases": [
              "Chief complaint",
              "Chief concern",
              "Identification / chief complaint",
              "Reason for visit",
              "CC"
            ]
          },
          {
            "id": "chief_1",
            "label": "Reason for consultation",
            "aliases": [
              "Reason for consultation",
              "Reason for ICU admission / consultation"
            ]
          },
          {
            "id": "chief_2",
            "label": "Requesting / referring provider",
            "aliases": [
              "Requesting / referring provider",
              "Requesting provider/service",
              "Referring provider"
            ]
          },
          {
            "id": "chief_3",
            "label": "Historian",
            "aliases": [
              "Historian",
              "Source of history"
            ]
          },
          {
            "id": "chief_4",
            "label": "Reliability",
            "aliases": [
              "Reliability"
            ]
          }
        ]
      },
      {
        "id": "interval",
        "label": "Subjective / interval history",
        "fields": [
          {
            "id": "interval_0",
            "label": "Interval history since last office visit",
            "aliases": [
              "Interval history since last office visit",
              "Interval history",
              "Subjective"
            ]
          },
          {
            "id": "interval_1",
            "label": "Intervening ED visits / hospitalizations",
            "aliases": [
              "Intervening ED visits / hospitalizations"
            ]
          },
          {
            "id": "interval_2",
            "label": "Patient / caregiver report",
            "aliases": [
              "Patient / caregiver report"
            ]
          },
          {
            "id": "interval_3",
            "label": "Pertinent review of systems",
            "aliases": [
              "Pertinent review of systems"
            ]
          }
        ]
      },
      {
        "id": "meds",
        "label": "Medications and allergies",
        "fields": [
          {
            "id": "meds_0",
            "label": "Home medications",
            "aliases": [
              "Home medications",
              "Medications (home)",
              "Home meds"
            ]
          },
          {
            "id": "meds_1",
            "label": "Encounter medication list",
            "aliases": [
              "Encounter medication list",
              "Medications",
              "Current medication list"
            ]
          },
          {
            "id": "meds_2",
            "label": "Administered medications",
            "aliases": [
              "Administered medications",
              "ED medications"
            ]
          },
          {
            "id": "meds_3",
            "label": "Medication changes / held / discontinued",
            "aliases": [
              "Medication changes / held / discontinued"
            ]
          },
          {
            "id": "meds_4",
            "label": "Allergies / reactions",
            "aliases": [
              "Allergies / reactions",
              "Allergies",
              "Allergies/adverse reactions"
            ]
          }
        ]
      },
      {
        "id": "vitals",
        "label": "Vitals and measurements",
        "fields": [
          {
            "id": "vitals_0",
            "label": "Vitals",
            "aliases": [
              "Vitals",
              "Vital signs",
              "Objective"
            ]
          },
          {
            "id": "vitals_1",
            "label": "Measurement time / reporting window",
            "aliases": [
              "Measurement time / reporting window"
            ]
          },
          {
            "id": "vitals_2",
            "label": "Temperature / Tmax",
            "aliases": [
              "Temperature / Tmax"
            ]
          },
          {
            "id": "vitals_3",
            "label": "Heart rate",
            "aliases": [
              "Heart rate",
              "HR",
              "Pulse"
            ]
          },
          {
            "id": "vitals_4",
            "label": "Blood pressure",
            "aliases": [
              "Blood pressure",
              "BP"
            ]
          },
          {
            "id": "vitals_5",
            "label": "MAP",
            "aliases": [
              "MAP"
            ]
          },
          {
            "id": "vitals_6",
            "label": "Respiratory rate",
            "aliases": [
              "Respiratory rate",
              "RR"
            ]
          },
          {
            "id": "vitals_7",
            "label": "SpO₂",
            "aliases": [
              "SpO₂",
              "SpO2",
              "Oxygen saturation"
            ]
          },
          {
            "id": "vitals_8",
            "label": "Oxygen device / flow / FiO₂",
            "aliases": [
              "Oxygen device / flow / FiO₂"
            ]
          },
          {
            "id": "vitals_9",
            "label": "Weight / BMI",
            "aliases": [
              "Weight / BMI",
              "Weight"
            ]
          },
          {
            "id": "vitals_10",
            "label": "Pain score",
            "aliases": [
              "Pain score"
            ]
          }
        ]
      },
      {
        "id": "home",
        "label": "Home measurements",
        "fields": [
          {
            "id": "home_0",
            "label": "Home readings",
            "aliases": [
              "Home readings"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_0",
            "label": "Laboratory results",
            "aliases": [
              "Laboratory results",
              "Laboratory",
              "Labs",
              "Labs (today, with pertinent trends)",
              "Labs/Micro"
            ]
          },
          {
            "id": "data_1",
            "label": "CBC",
            "aliases": [
              "CBC"
            ]
          },
          {
            "id": "data_2",
            "label": "BMP / CMP",
            "aliases": [
              "BMP / CMP",
              "BMP",
              "CMP"
            ]
          },
          {
            "id": "data_3",
            "label": "LFTs",
            "aliases": [
              "LFTs"
            ]
          },
          {
            "id": "data_4",
            "label": "Coagulation",
            "aliases": [
              "Coagulation"
            ]
          },
          {
            "id": "data_5",
            "label": "ABG",
            "aliases": [
              "ABG"
            ]
          },
          {
            "id": "data_6",
            "label": "VBG",
            "aliases": [
              "VBG"
            ]
          },
          {
            "id": "data_7",
            "label": "Other laboratory results",
            "aliases": [
              "Other laboratory results"
            ]
          },
          {
            "id": "data_8",
            "label": "Microbiology / cultures",
            "aliases": [
              "Microbiology / cultures",
              "Microbiology",
              "Micro",
              "Cultures"
            ]
          },
          {
            "id": "data_9",
            "label": "Imaging",
            "aliases": [
              "Imaging",
              "Imaging / diagnostics",
              "Imaging / studies",
              "Imaging/Studies"
            ]
          },
          {
            "id": "data_10",
            "label": "ECG",
            "aliases": [
              "ECG"
            ]
          },
          {
            "id": "data_11",
            "label": "Other diagnostics",
            "aliases": [
              "Other diagnostics",
              "Diagnostics",
              "Other studies"
            ]
          },
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          },
          {
            "id": "data_13",
            "label": "Pending studies",
            "aliases": [
              "Pending studies"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Summary statement",
            "aliases": [
              "Summary statement",
              "Assessment",
              "One-liner"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Clinical reasoning / differential",
            "aliases": [
              "Clinical reasoning / differential",
              "Differential diagnosis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Documented trajectory",
            "aliases": [
              "Documented trajectory"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Problem list / diagnoses",
            "aliases": [
              "Problem list / diagnoses",
              "Clinical impression / ED diagnoses",
              "Clinical impression",
              "Diagnoses"
            ]
          }
        ]
      },
      {
        "id": "plan",
        "label": "Recommendations / plan",
        "fields": [
          {
            "id": "plan_0",
            "label": "Problem-based assessment and plan",
            "aliases": [
              "Problem-based assessment and plan",
              "Assessment and plan",
              "Problem list / plan",
              "Plan (by problem)",
              "Plan"
            ]
          },
          {
            "id": "plan_1",
            "label": "Recommendations / plan",
            "aliases": [
              "Recommendations / plan",
              "Recommendations"
            ]
          },
          {
            "id": "plan_2",
            "label": "Diagnostics",
            "aliases": [
              "Diagnostics"
            ]
          },
          {
            "id": "plan_3",
            "label": "Therapeutics",
            "aliases": [
              "Therapeutics"
            ]
          },
          {
            "id": "plan_4",
            "label": "Monitoring / targets",
            "aliases": [
              "Monitoring / targets"
            ]
          },
          {
            "id": "plan_5",
            "label": "Consults / referrals",
            "aliases": [
              "Consults / referrals"
            ]
          },
          {
            "id": "plan_6",
            "label": "Ongoing / chronic issues",
            "aliases": [
              "Ongoing / chronic issues"
            ]
          },
          {
            "id": "plan_7",
            "label": "Disposition",
            "aliases": [
              "Disposition"
            ]
          },
          {
            "id": "plan_8",
            "label": "Follow-up",
            "aliases": [
              "Follow-up",
              "Next visit"
            ]
          },
          {
            "id": "plan_9",
            "label": "Return precautions",
            "aliases": [
              "Return precautions"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "icu-admission",
    "title": "ICU admission / consultation",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "admission",
        "label": "ICU admission / transfer",
        "fields": [
          {
            "id": "admission_0",
            "label": "Admission / transfer time",
            "aliases": [
              "Admission / transfer time"
            ]
          },
          {
            "id": "admission_1",
            "label": "Examination time",
            "aliases": [
              "Examination time"
            ]
          },
          {
            "id": "admission_2",
            "label": "Transfer origin",
            "aliases": [
              "Transfer origin"
            ]
          },
          {
            "id": "admission_3",
            "label": "Events immediately preceding ICU transfer",
            "aliases": [
              "Events immediately preceding ICU transfer"
            ]
          }
        ]
      },
      {
        "id": "chief",
        "label": "Chief complaint / reason",
        "fields": [
          {
            "id": "chief_0",
            "label": "Chief complaint",
            "aliases": [
              "Chief complaint",
              "Chief concern",
              "Identification / chief complaint",
              "Reason for visit",
              "CC"
            ]
          },
          {
            "id": "chief_1",
            "label": "Reason for consultation",
            "aliases": [
              "Reason for consultation",
              "Reason for ICU admission / consultation"
            ]
          },
          {
            "id": "chief_2",
            "label": "Requesting / referring provider",
            "aliases": [
              "Requesting / referring provider",
              "Requesting provider/service",
              "Referring provider"
            ]
          },
          {
            "id": "chief_3",
            "label": "Historian",
            "aliases": [
              "Historian",
              "Source of history"
            ]
          },
          {
            "id": "chief_4",
            "label": "Reliability",
            "aliases": [
              "Reliability"
            ]
          }
        ]
      },
      {
        "id": "hpi",
        "label": "History of present illness",
        "fields": [
          {
            "id": "hpi_0",
            "label": "History of present illness",
            "aliases": [
              "History of present illness",
              "HPI",
              "History",
              "History of presenting illness"
            ]
          },
          {
            "id": "hpi_1",
            "label": "Interval history",
            "aliases": [
              "Interval history",
              "Subjective",
              "Interval history since last note"
            ]
          },
          {
            "id": "hpi_2",
            "label": "Baseline function / cognition",
            "aliases": [
              "Baseline function / cognition",
              "Baseline functional status",
              "Baseline cognition"
            ]
          }
        ]
      },
      {
        "id": "pmh",
        "label": "Past medical and surgical history",
        "fields": [
          {
            "id": "pmh_0",
            "label": "Past medical history",
            "aliases": [
              "Past medical history",
              "PMH"
            ]
          },
          {
            "id": "pmh_1",
            "label": "Past surgical history",
            "aliases": [
              "Past surgical history",
              "PSH",
              "Surgical history"
            ]
          }
        ]
      },
      {
        "id": "meds",
        "label": "Medications and allergies",
        "fields": [
          {
            "id": "meds_0",
            "label": "Home medications",
            "aliases": [
              "Home medications",
              "Medications (home)",
              "Home meds"
            ]
          },
          {
            "id": "meds_1",
            "label": "Encounter medication list",
            "aliases": [
              "Encounter medication list",
              "Medications",
              "Current medication list"
            ]
          },
          {
            "id": "meds_2",
            "label": "Administered medications",
            "aliases": [
              "Administered medications",
              "ED medications"
            ]
          },
          {
            "id": "meds_3",
            "label": "Medication changes / held / discontinued",
            "aliases": [
              "Medication changes / held / discontinued"
            ]
          },
          {
            "id": "meds_4",
            "label": "Allergies / reactions",
            "aliases": [
              "Allergies / reactions",
              "Allergies",
              "Allergies/adverse reactions"
            ]
          }
        ]
      },
      {
        "id": "family",
        "label": "Family and social history",
        "fields": [
          {
            "id": "family_0",
            "label": "Family history",
            "aliases": [
              "Family history"
            ]
          },
          {
            "id": "family_1",
            "label": "Social history",
            "aliases": [
              "Social history"
            ]
          },
          {
            "id": "family_2",
            "label": "Tobacco",
            "aliases": [
              "Tobacco"
            ]
          },
          {
            "id": "family_3",
            "label": "Alcohol",
            "aliases": [
              "Alcohol"
            ]
          },
          {
            "id": "family_4",
            "label": "Substance use",
            "aliases": [
              "Substance use",
              "Substances"
            ]
          },
          {
            "id": "family_5",
            "label": "Living situation / support",
            "aliases": [
              "Living situation / support"
            ]
          },
          {
            "id": "family_6",
            "label": "Occupation / functional status",
            "aliases": [
              "Occupation / functional status"
            ]
          },
          {
            "id": "family_7",
            "label": "Exposures / travel",
            "aliases": [
              "Exposures / travel"
            ]
          }
        ]
      },
      {
        "id": "goc",
        "label": "Code status / goals / communication",
        "fields": [
          {
            "id": "goc_0",
            "label": "Code status",
            "aliases": [
              "Code status"
            ]
          },
          {
            "id": "goc_1",
            "label": "Goals of care",
            "aliases": [
              "Goals of care"
            ]
          },
          {
            "id": "goc_2",
            "label": "Healthcare proxy / surrogate",
            "aliases": [
              "Healthcare proxy / surrogate"
            ]
          },
          {
            "id": "goc_3",
            "label": "Advance directive / POLST on file",
            "aliases": [
              "Advance directive / POLST on file"
            ]
          },
          {
            "id": "goc_4",
            "label": "Goals-of-care discussion held",
            "aliases": [
              "Goals-of-care discussion held"
            ]
          },
          {
            "id": "goc_5",
            "label": "Patient / family communication",
            "aliases": [
              "Patient / family communication",
              "Family / patient communication"
            ]
          },
          {
            "id": "goc_6",
            "label": "Isolation / precautions",
            "aliases": [
              "Isolation / precautions",
              "Isolation"
            ]
          }
        ]
      },
      {
        "id": "ros",
        "label": "Review of systems",
        "fields": [
          {
            "id": "ros_0",
            "label": "Review of systems",
            "aliases": [
              "Review of systems",
              "ROS",
              "Pertinent review of systems"
            ]
          },
          {
            "id": "ros_1",
            "label": "Constitutional",
            "aliases": [
              "Constitutional"
            ]
          },
          {
            "id": "ros_2",
            "label": "HEENT",
            "aliases": [
              "HEENT"
            ]
          },
          {
            "id": "ros_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular"
            ]
          },
          {
            "id": "ros_4",
            "label": "Respiratory",
            "aliases": [
              "Respiratory"
            ]
          },
          {
            "id": "ros_5",
            "label": "GI",
            "aliases": [
              "GI"
            ]
          },
          {
            "id": "ros_6",
            "label": "GU",
            "aliases": [
              "GU"
            ]
          },
          {
            "id": "ros_7",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal"
            ]
          },
          {
            "id": "ros_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic"
            ]
          },
          {
            "id": "ros_9",
            "label": "Skin",
            "aliases": [
              "Skin"
            ]
          },
          {
            "id": "ros_10",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ]
          },
          {
            "id": "ros_11",
            "label": "Endocrine / heme / immunologic",
            "aliases": [
              "Endocrine / heme / immunologic",
              "Heme/Endo"
            ]
          },
          {
            "id": "ros_12",
            "label": "Limitations / unable to obtain",
            "aliases": [
              "Limitations / unable to obtain"
            ]
          }
        ]
      },
      {
        "id": "vitals",
        "label": "Vitals and measurements",
        "fields": [
          {
            "id": "vitals_0",
            "label": "Vitals",
            "aliases": [
              "Vitals",
              "Vital signs",
              "Objective"
            ]
          },
          {
            "id": "vitals_1",
            "label": "Measurement time / reporting window",
            "aliases": [
              "Measurement time / reporting window"
            ]
          },
          {
            "id": "vitals_2",
            "label": "Temperature / Tmax",
            "aliases": [
              "Temperature / Tmax"
            ]
          },
          {
            "id": "vitals_3",
            "label": "Heart rate",
            "aliases": [
              "Heart rate",
              "HR",
              "Pulse"
            ]
          },
          {
            "id": "vitals_4",
            "label": "Blood pressure",
            "aliases": [
              "Blood pressure",
              "BP"
            ]
          },
          {
            "id": "vitals_5",
            "label": "MAP",
            "aliases": [
              "MAP"
            ]
          },
          {
            "id": "vitals_6",
            "label": "Respiratory rate",
            "aliases": [
              "Respiratory rate",
              "RR"
            ]
          },
          {
            "id": "vitals_7",
            "label": "SpO₂",
            "aliases": [
              "SpO₂",
              "SpO2",
              "Oxygen saturation"
            ]
          },
          {
            "id": "vitals_8",
            "label": "Oxygen device / flow / FiO₂",
            "aliases": [
              "Oxygen device / flow / FiO₂"
            ]
          },
          {
            "id": "vitals_9",
            "label": "Weight / BMI",
            "aliases": [
              "Weight / BMI",
              "Weight"
            ]
          },
          {
            "id": "vitals_10",
            "label": "Pain score",
            "aliases": [
              "Pain score"
            ]
          }
        ]
      },
      {
        "id": "support",
        "label": "Organ support and hemodynamics",
        "fields": [
          {
            "id": "support_0",
            "label": "Current support at time of note",
            "aliases": [
              "Current support at time of note"
            ]
          },
          {
            "id": "support_1",
            "label": "Vasoactives / inotropes",
            "aliases": [
              "Vasoactives / inotropes",
              "Vasoactives/inotropes"
            ]
          },
          {
            "id": "support_2",
            "label": "Current infusions/drips",
            "aliases": [
              "Current infusions/drips"
            ]
          },
          {
            "id": "support_3",
            "label": "Airway / ventilation",
            "aliases": [
              "Airway / ventilation",
              "Airway/ventilation",
              "Ventilator/Respiratory support"
            ]
          },
          {
            "id": "support_4",
            "label": "Ventilator mode",
            "aliases": [
              "Ventilator mode"
            ]
          },
          {
            "id": "support_5",
            "label": "FiO₂",
            "aliases": [
              "FiO₂",
              "FiO2"
            ]
          },
          {
            "id": "support_6",
            "label": "PEEP",
            "aliases": [
              "PEEP"
            ]
          },
          {
            "id": "support_7",
            "label": "Tidal volume",
            "aliases": [
              "Tidal volume",
              "Vt"
            ]
          },
          {
            "id": "support_8",
            "label": "Respiratory rate — set / total",
            "aliases": [
              "Respiratory rate — set / total"
            ]
          },
          {
            "id": "support_9",
            "label": "P/F ratio",
            "aliases": [
              "P/F ratio"
            ]
          },
          {
            "id": "support_10",
            "label": "Plateau / driving pressure",
            "aliases": [
              "Plateau / driving pressure"
            ]
          },
          {
            "id": "support_11",
            "label": "Hemodynamics",
            "aliases": [
              "Hemodynamics",
              "Vitals / hemodynamics"
            ]
          },
          {
            "id": "support_12",
            "label": "CVP / cardiac output / SvO₂",
            "aliases": [
              "CVP / cardiac output / SvO₂"
            ]
          },
          {
            "id": "support_13",
            "label": "Access",
            "aliases": [
              "Access"
            ]
          },
          {
            "id": "support_14",
            "label": "Other devices",
            "aliases": [
              "Other devices"
            ]
          },
          {
            "id": "support_15",
            "label": "Lines / tubes / devices",
            "aliases": [
              "Lines / tubes / devices",
              "Lines/Tubes/Devices (with day #)"
            ]
          },
          {
            "id": "support_16",
            "label": "RRT / dialysis / mechanical support",
            "aliases": [
              "RRT / dialysis / mechanical support"
            ]
          },
          {
            "id": "support_17",
            "label": "Scores",
            "aliases": [
              "Scores",
              "Severity of illness",
              "GCS",
              "RASS",
              "SOFA",
              "APACHE II",
              "qSOFA"
            ]
          },
          {
            "id": "support_18",
            "label": "Ideal body weight",
            "aliases": [
              "Ideal body weight"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_0",
            "label": "Laboratory results",
            "aliases": [
              "Laboratory results",
              "Laboratory",
              "Labs",
              "Labs (today, with pertinent trends)",
              "Labs/Micro"
            ]
          },
          {
            "id": "data_1",
            "label": "CBC",
            "aliases": [
              "CBC"
            ]
          },
          {
            "id": "data_2",
            "label": "BMP / CMP",
            "aliases": [
              "BMP / CMP",
              "BMP",
              "CMP"
            ]
          },
          {
            "id": "data_3",
            "label": "LFTs",
            "aliases": [
              "LFTs"
            ]
          },
          {
            "id": "data_4",
            "label": "Coagulation",
            "aliases": [
              "Coagulation"
            ]
          },
          {
            "id": "data_5",
            "label": "ABG",
            "aliases": [
              "ABG"
            ]
          },
          {
            "id": "data_6",
            "label": "VBG",
            "aliases": [
              "VBG"
            ]
          },
          {
            "id": "data_7",
            "label": "Other laboratory results",
            "aliases": [
              "Other laboratory results"
            ]
          },
          {
            "id": "data_8",
            "label": "Microbiology / cultures",
            "aliases": [
              "Microbiology / cultures",
              "Microbiology",
              "Micro",
              "Cultures"
            ]
          },
          {
            "id": "data_9",
            "label": "Imaging",
            "aliases": [
              "Imaging",
              "Imaging / diagnostics",
              "Imaging / studies",
              "Imaging/Studies"
            ]
          },
          {
            "id": "data_10",
            "label": "ECG",
            "aliases": [
              "ECG"
            ]
          },
          {
            "id": "data_11",
            "label": "Other diagnostics",
            "aliases": [
              "Other diagnostics",
              "Diagnostics",
              "Other studies"
            ]
          },
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          },
          {
            "id": "data_13",
            "label": "Pending studies",
            "aliases": [
              "Pending studies"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Summary statement",
            "aliases": [
              "Summary statement",
              "Assessment",
              "One-liner"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Clinical reasoning / differential",
            "aliases": [
              "Clinical reasoning / differential",
              "Differential diagnosis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Documented trajectory",
            "aliases": [
              "Documented trajectory"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Problem list / diagnoses",
            "aliases": [
              "Problem list / diagnoses",
              "Clinical impression / ED diagnoses",
              "Clinical impression",
              "Diagnoses"
            ]
          }
        ]
      },
      {
        "id": "organ",
        "label": "Assessment & plan — by organ system",
        "fields": [
          {
            "id": "organ_0",
            "label": "Neurologic",
            "aliases": [
              "Neurologic"
            ]
          },
          {
            "id": "organ_1",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular"
            ]
          },
          {
            "id": "organ_2",
            "label": "Respiratory",
            "aliases": [
              "Respiratory",
              "Pulmonary"
            ]
          },
          {
            "id": "organ_3",
            "label": "Renal / fluids / electrolytes",
            "aliases": [
              "Renal / fluids / electrolytes",
              "Renal / metabolic / fluids-electrolytes",
              "Renal/Fluids/Electrolytes"
            ]
          },
          {
            "id": "organ_4",
            "label": "Gastrointestinal / nutrition",
            "aliases": [
              "Gastrointestinal / nutrition",
              "Gastrointestinal/Nutrition"
            ]
          },
          {
            "id": "organ_5",
            "label": "Infectious disease",
            "aliases": [
              "Infectious disease"
            ]
          },
          {
            "id": "organ_6",
            "label": "Hematology",
            "aliases": [
              "Hematology"
            ]
          },
          {
            "id": "organ_7",
            "label": "Endocrine",
            "aliases": [
              "Endocrine"
            ]
          },
          {
            "id": "organ_8",
            "label": "Skin / wounds / prophylaxis",
            "aliases": [
              "Skin / wounds / prophylaxis",
              "Skin/Wounds/Prophylaxis"
            ]
          },
          {
            "id": "organ_9",
            "label": "Prophylaxis",
            "aliases": [
              "Prophylaxis"
            ]
          },
          {
            "id": "organ_10",
            "label": "Lines / devices / drains",
            "aliases": [
              "Lines / devices / drains"
            ]
          },
          {
            "id": "organ_11",
            "label": "Disposition / goals",
            "aliases": [
              "Disposition / goals"
            ]
          }
        ]
      },
      {
        "id": "critical",
        "label": "Documented critical-care time",
        "fields": [
          {
            "id": "critical_0",
            "label": "Critical care time",
            "aliases": [
              "Critical care time",
              "Time spent / critical care time (if applicable)",
              "Critical care / time documentation (if applicable)"
            ]
          },
          {
            "id": "critical_1",
            "label": "Provider attribution",
            "aliases": [
              "Provider attribution"
            ]
          },
          {
            "id": "critical_2",
            "label": "Exclusions / activities / original time statement",
            "aliases": [
              "Exclusions / activities / original time statement"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "icu-daily",
    "title": "ICU daily progress note",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "days",
        "label": "Daily identifiers",
        "fields": [
          {
            "id": "days_0",
            "label": "ICU day",
            "aliases": [
              "ICU day"
            ]
          },
          {
            "id": "days_1",
            "label": "Hospital day",
            "aliases": [
              "Hospital day"
            ]
          }
        ]
      },
      {
        "id": "goc",
        "label": "Code status / goals / communication",
        "fields": [
          {
            "id": "goc_0",
            "label": "Code status",
            "aliases": [
              "Code status"
            ]
          },
          {
            "id": "goc_1",
            "label": "Goals of care",
            "aliases": [
              "Goals of care"
            ]
          },
          {
            "id": "goc_2",
            "label": "Healthcare proxy / surrogate",
            "aliases": [
              "Healthcare proxy / surrogate"
            ]
          },
          {
            "id": "goc_3",
            "label": "Advance directive / POLST on file",
            "aliases": [
              "Advance directive / POLST on file"
            ]
          },
          {
            "id": "goc_4",
            "label": "Goals-of-care discussion held",
            "aliases": [
              "Goals-of-care discussion held"
            ]
          },
          {
            "id": "goc_5",
            "label": "Patient / family communication",
            "aliases": [
              "Patient / family communication",
              "Family / patient communication"
            ]
          },
          {
            "id": "goc_6",
            "label": "Isolation / precautions",
            "aliases": [
              "Isolation / precautions",
              "Isolation"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Summary statement",
            "aliases": [
              "Summary statement",
              "Assessment",
              "One-liner"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Clinical reasoning / differential",
            "aliases": [
              "Clinical reasoning / differential",
              "Differential diagnosis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Documented trajectory",
            "aliases": [
              "Documented trajectory"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Problem list / diagnoses",
            "aliases": [
              "Problem list / diagnoses",
              "Clinical impression / ED diagnoses",
              "Clinical impression",
              "Diagnoses"
            ]
          }
        ]
      },
      {
        "id": "interval",
        "label": "Subjective / interval events",
        "fields": [
          {
            "id": "interval_0",
            "label": "Interval history",
            "aliases": [
              "Interval history",
              "Subjective"
            ]
          },
          {
            "id": "interval_1",
            "label": "Overnight / interval events",
            "aliases": [
              "Overnight / interval events",
              "Overnight events"
            ]
          },
          {
            "id": "interval_2",
            "label": "Patient / nursing / caregiver report",
            "aliases": [
              "Patient / nursing / caregiver report"
            ]
          },
          {
            "id": "interval_3",
            "label": "Pertinent review of systems",
            "aliases": [
              "Pertinent review of systems"
            ]
          },
          {
            "id": "interval_4",
            "label": "Nursing / cross-cover information referenced",
            "aliases": [
              "Nursing / cross-cover information referenced"
            ]
          }
        ]
      },
      {
        "id": "vitals",
        "label": "Vitals and measurements",
        "fields": [
          {
            "id": "vitals_0",
            "label": "Vitals",
            "aliases": [
              "Vitals",
              "Vital signs",
              "Objective"
            ]
          },
          {
            "id": "vitals_1",
            "label": "Measurement time / reporting window",
            "aliases": [
              "Measurement time / reporting window"
            ]
          },
          {
            "id": "vitals_2",
            "label": "Temperature / Tmax",
            "aliases": [
              "Temperature / Tmax"
            ]
          },
          {
            "id": "vitals_3",
            "label": "Heart rate",
            "aliases": [
              "Heart rate",
              "HR",
              "Pulse"
            ]
          },
          {
            "id": "vitals_4",
            "label": "Blood pressure",
            "aliases": [
              "Blood pressure",
              "BP"
            ]
          },
          {
            "id": "vitals_5",
            "label": "MAP",
            "aliases": [
              "MAP"
            ]
          },
          {
            "id": "vitals_6",
            "label": "Respiratory rate",
            "aliases": [
              "Respiratory rate",
              "RR"
            ]
          },
          {
            "id": "vitals_7",
            "label": "SpO₂",
            "aliases": [
              "SpO₂",
              "SpO2",
              "Oxygen saturation"
            ]
          },
          {
            "id": "vitals_8",
            "label": "Oxygen device / flow / FiO₂",
            "aliases": [
              "Oxygen device / flow / FiO₂"
            ]
          },
          {
            "id": "vitals_9",
            "label": "Weight / BMI",
            "aliases": [
              "Weight / BMI",
              "Weight"
            ]
          },
          {
            "id": "vitals_10",
            "label": "Pain score",
            "aliases": [
              "Pain score"
            ]
          }
        ]
      },
      {
        "id": "support",
        "label": "Organ support and hemodynamics",
        "fields": [
          {
            "id": "support_0",
            "label": "Current support at time of note",
            "aliases": [
              "Current support at time of note"
            ]
          },
          {
            "id": "support_1",
            "label": "Vasoactives / inotropes",
            "aliases": [
              "Vasoactives / inotropes",
              "Vasoactives/inotropes"
            ]
          },
          {
            "id": "support_2",
            "label": "Current infusions/drips",
            "aliases": [
              "Current infusions/drips"
            ]
          },
          {
            "id": "support_3",
            "label": "Airway / ventilation",
            "aliases": [
              "Airway / ventilation",
              "Airway/ventilation",
              "Ventilator/Respiratory support"
            ]
          },
          {
            "id": "support_4",
            "label": "Ventilator mode",
            "aliases": [
              "Ventilator mode"
            ]
          },
          {
            "id": "support_5",
            "label": "FiO₂",
            "aliases": [
              "FiO₂",
              "FiO2"
            ]
          },
          {
            "id": "support_6",
            "label": "PEEP",
            "aliases": [
              "PEEP"
            ]
          },
          {
            "id": "support_7",
            "label": "Tidal volume",
            "aliases": [
              "Tidal volume",
              "Vt"
            ]
          },
          {
            "id": "support_8",
            "label": "Respiratory rate — set / total",
            "aliases": [
              "Respiratory rate — set / total"
            ]
          },
          {
            "id": "support_9",
            "label": "P/F ratio",
            "aliases": [
              "P/F ratio"
            ]
          },
          {
            "id": "support_10",
            "label": "Plateau / driving pressure",
            "aliases": [
              "Plateau / driving pressure"
            ]
          },
          {
            "id": "support_11",
            "label": "Hemodynamics",
            "aliases": [
              "Hemodynamics",
              "Vitals / hemodynamics"
            ]
          },
          {
            "id": "support_12",
            "label": "CVP / cardiac output / SvO₂",
            "aliases": [
              "CVP / cardiac output / SvO₂"
            ]
          },
          {
            "id": "support_13",
            "label": "Access",
            "aliases": [
              "Access"
            ]
          },
          {
            "id": "support_14",
            "label": "Other devices",
            "aliases": [
              "Other devices"
            ]
          },
          {
            "id": "support_15",
            "label": "Lines / tubes / devices",
            "aliases": [
              "Lines / tubes / devices",
              "Lines/Tubes/Devices (with day #)"
            ]
          },
          {
            "id": "support_16",
            "label": "RRT / dialysis / mechanical support",
            "aliases": [
              "RRT / dialysis / mechanical support"
            ]
          },
          {
            "id": "support_17",
            "label": "Scores",
            "aliases": [
              "Scores",
              "Severity of illness",
              "GCS",
              "RASS",
              "SOFA",
              "APACHE II",
              "qSOFA"
            ]
          },
          {
            "id": "support_18",
            "label": "Ideal body weight",
            "aliases": [
              "Ideal body weight"
            ]
          }
        ]
      },
      {
        "id": "balance",
        "label": "Fluid balance / monitoring",
        "fields": [
          {
            "id": "balance_0",
            "label": "Intake & output",
            "aliases": [
              "Intake & output",
              "Intake & output (24 hr)",
              "I/O (24 h)"
            ]
          },
          {
            "id": "balance_1",
            "label": "Reporting window",
            "aliases": [
              "Reporting window"
            ]
          },
          {
            "id": "balance_2",
            "label": "Intake",
            "aliases": [
              "Intake"
            ]
          },
          {
            "id": "balance_3",
            "label": "Output",
            "aliases": [
              "Output"
            ]
          },
          {
            "id": "balance_4",
            "label": "Daily net balance",
            "aliases": [
              "Daily net balance"
            ]
          },
          {
            "id": "balance_5",
            "label": "Cumulative net balance",
            "aliases": [
              "Cumulative net balance"
            ]
          },
          {
            "id": "balance_6",
            "label": "Urine output",
            "aliases": [
              "Urine output",
              "UOP"
            ]
          },
          {
            "id": "balance_7",
            "label": "Weight change",
            "aliases": [
              "Weight change"
            ]
          },
          {
            "id": "balance_8",
            "label": "Fingerstick glucose / telemetry",
            "aliases": [
              "Fingerstick glucose / telemetry"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_0",
            "label": "Laboratory results",
            "aliases": [
              "Laboratory results",
              "Laboratory",
              "Labs",
              "Labs (today, with pertinent trends)",
              "Labs/Micro"
            ]
          },
          {
            "id": "data_1",
            "label": "CBC",
            "aliases": [
              "CBC"
            ]
          },
          {
            "id": "data_2",
            "label": "BMP / CMP",
            "aliases": [
              "BMP / CMP",
              "BMP",
              "CMP"
            ]
          },
          {
            "id": "data_3",
            "label": "LFTs",
            "aliases": [
              "LFTs"
            ]
          },
          {
            "id": "data_4",
            "label": "Coagulation",
            "aliases": [
              "Coagulation"
            ]
          },
          {
            "id": "data_5",
            "label": "ABG",
            "aliases": [
              "ABG"
            ]
          },
          {
            "id": "data_6",
            "label": "VBG",
            "aliases": [
              "VBG"
            ]
          },
          {
            "id": "data_7",
            "label": "Other laboratory results",
            "aliases": [
              "Other laboratory results"
            ]
          },
          {
            "id": "data_8",
            "label": "Microbiology / cultures",
            "aliases": [
              "Microbiology / cultures",
              "Microbiology",
              "Micro",
              "Cultures"
            ]
          },
          {
            "id": "data_9",
            "label": "Imaging",
            "aliases": [
              "Imaging",
              "Imaging / diagnostics",
              "Imaging / studies",
              "Imaging/Studies"
            ]
          },
          {
            "id": "data_10",
            "label": "ECG",
            "aliases": [
              "ECG"
            ]
          },
          {
            "id": "data_11",
            "label": "Other diagnostics",
            "aliases": [
              "Other diagnostics",
              "Diagnostics",
              "Other studies"
            ]
          },
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          },
          {
            "id": "data_13",
            "label": "Pending studies",
            "aliases": [
              "Pending studies"
            ]
          }
        ]
      },
      {
        "id": "organ",
        "label": "Assessment & plan — by organ system",
        "fields": [
          {
            "id": "organ_0",
            "label": "Neurologic",
            "aliases": [
              "Neurologic"
            ]
          },
          {
            "id": "organ_1",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular"
            ]
          },
          {
            "id": "organ_2",
            "label": "Respiratory",
            "aliases": [
              "Respiratory",
              "Pulmonary"
            ]
          },
          {
            "id": "organ_3",
            "label": "Renal / fluids / electrolytes",
            "aliases": [
              "Renal / fluids / electrolytes",
              "Renal / metabolic / fluids-electrolytes",
              "Renal/Fluids/Electrolytes"
            ]
          },
          {
            "id": "organ_4",
            "label": "Gastrointestinal / nutrition",
            "aliases": [
              "Gastrointestinal / nutrition",
              "Gastrointestinal/Nutrition"
            ]
          },
          {
            "id": "organ_5",
            "label": "Infectious disease",
            "aliases": [
              "Infectious disease"
            ]
          },
          {
            "id": "organ_6",
            "label": "Hematology",
            "aliases": [
              "Hematology"
            ]
          },
          {
            "id": "organ_7",
            "label": "Endocrine",
            "aliases": [
              "Endocrine"
            ]
          },
          {
            "id": "organ_8",
            "label": "Skin / wounds / prophylaxis",
            "aliases": [
              "Skin / wounds / prophylaxis",
              "Skin/Wounds/Prophylaxis"
            ]
          },
          {
            "id": "organ_9",
            "label": "Prophylaxis",
            "aliases": [
              "Prophylaxis"
            ]
          },
          {
            "id": "organ_10",
            "label": "Lines / devices / drains",
            "aliases": [
              "Lines / devices / drains"
            ]
          },
          {
            "id": "organ_11",
            "label": "Disposition / goals",
            "aliases": [
              "Disposition / goals"
            ]
          }
        ]
      },
      {
        "id": "check",
        "label": "Daily ICU checklist — documented status",
        "fields": [
          {
            "id": "check_0",
            "label": "Feeding",
            "aliases": [
              "Feeding"
            ]
          },
          {
            "id": "check_1",
            "label": "Analgesia",
            "aliases": [
              "Analgesia"
            ]
          },
          {
            "id": "check_2",
            "label": "Sedation",
            "aliases": [
              "Sedation"
            ]
          },
          {
            "id": "check_3",
            "label": "Thromboembolic prophylaxis",
            "aliases": [
              "Thromboembolic prophylaxis"
            ]
          },
          {
            "id": "check_4",
            "label": "Head-of-bed elevation",
            "aliases": [
              "Head-of-bed elevation"
            ]
          },
          {
            "id": "check_5",
            "label": "Ulcer prophylaxis",
            "aliases": [
              "Ulcer prophylaxis"
            ]
          },
          {
            "id": "check_6",
            "label": "Glucose control",
            "aliases": [
              "Glucose control"
            ]
          },
          {
            "id": "check_7",
            "label": "Bowel regimen",
            "aliases": [
              "Bowel regimen"
            ]
          },
          {
            "id": "check_8",
            "label": "Indwelling catheter / line necessity review",
            "aliases": [
              "Indwelling catheter / line necessity review"
            ]
          },
          {
            "id": "check_9",
            "label": "De-escalation of antibiotics",
            "aliases": [
              "De-escalation of antibiotics"
            ]
          },
          {
            "id": "check_10",
            "label": "Spontaneous awakening / breathing trials",
            "aliases": [
              "Spontaneous awakening / breathing trials"
            ]
          },
          {
            "id": "check_11",
            "label": "Family / goals-of-care communication",
            "aliases": [
              "Family / goals-of-care communication"
            ]
          }
        ]
      },
      {
        "id": "plan",
        "label": "Recommendations / plan",
        "fields": [
          {
            "id": "plan_0",
            "label": "Problem-based assessment and plan",
            "aliases": [
              "Problem-based assessment and plan",
              "Assessment and plan",
              "Problem list / plan",
              "Plan (by problem)",
              "Plan"
            ]
          },
          {
            "id": "plan_1",
            "label": "Recommendations / plan",
            "aliases": [
              "Recommendations / plan",
              "Recommendations"
            ]
          },
          {
            "id": "plan_2",
            "label": "Diagnostics",
            "aliases": [
              "Diagnostics"
            ]
          },
          {
            "id": "plan_3",
            "label": "Therapeutics",
            "aliases": [
              "Therapeutics"
            ]
          },
          {
            "id": "plan_4",
            "label": "Monitoring / targets",
            "aliases": [
              "Monitoring / targets"
            ]
          },
          {
            "id": "plan_5",
            "label": "Consults / referrals",
            "aliases": [
              "Consults / referrals"
            ]
          },
          {
            "id": "plan_6",
            "label": "Ongoing / chronic issues",
            "aliases": [
              "Ongoing / chronic issues"
            ]
          },
          {
            "id": "plan_7",
            "label": "Disposition",
            "aliases": [
              "Disposition"
            ]
          },
          {
            "id": "plan_8",
            "label": "Follow-up",
            "aliases": [
              "Follow-up",
              "Next visit"
            ]
          },
          {
            "id": "plan_9",
            "label": "Return precautions",
            "aliases": [
              "Return precautions"
            ]
          }
        ]
      },
      {
        "id": "critical",
        "label": "Documented critical-care time",
        "fields": [
          {
            "id": "critical_0",
            "label": "Critical care time",
            "aliases": [
              "Critical care time",
              "Time spent / critical care time (if applicable)",
              "Critical care / time documentation (if applicable)"
            ]
          },
          {
            "id": "critical_1",
            "label": "Provider attribution",
            "aliases": [
              "Provider attribution"
            ]
          },
          {
            "id": "critical_2",
            "label": "Exclusions / activities / original time statement",
            "aliases": [
              "Exclusions / activities / original time statement"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ed",
    "title": "Emergency department physician note",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "ed",
        "label": "ED encounter details",
        "fields": [
          {
            "id": "ed_0",
            "label": "Date/time of arrival",
            "aliases": [
              "Date/time of arrival"
            ]
          },
          {
            "id": "ed_1",
            "label": "Time seen by provider",
            "aliases": [
              "Time seen by provider"
            ]
          },
          {
            "id": "ed_2",
            "label": "Mode of arrival",
            "aliases": [
              "Mode of arrival"
            ]
          },
          {
            "id": "ed_3",
            "label": "Triage acuity (ESI)",
            "aliases": [
              "Triage acuity (ESI)"
            ]
          },
          {
            "id": "ed_4",
            "label": "Immunizations",
            "aliases": [
              "Immunizations"
            ]
          },
          {
            "id": "ed_5",
            "label": "Last menstrual period / pregnancy status",
            "aliases": [
              "Last menstrual period / pregnancy status"
            ]
          }
        ]
      },
      {
        "id": "chief",
        "label": "Chief complaint / reason",
        "fields": [
          {
            "id": "chief_0",
            "label": "Chief complaint",
            "aliases": [
              "Chief complaint",
              "Chief concern",
              "Identification / chief complaint",
              "Reason for visit",
              "CC"
            ]
          },
          {
            "id": "chief_1",
            "label": "Reason for consultation",
            "aliases": [
              "Reason for consultation",
              "Reason for ICU admission / consultation"
            ]
          },
          {
            "id": "chief_2",
            "label": "Requesting / referring provider",
            "aliases": [
              "Requesting / referring provider",
              "Requesting provider/service",
              "Referring provider"
            ]
          },
          {
            "id": "chief_3",
            "label": "Historian",
            "aliases": [
              "Historian",
              "Source of history"
            ]
          },
          {
            "id": "chief_4",
            "label": "Reliability",
            "aliases": [
              "Reliability"
            ]
          }
        ]
      },
      {
        "id": "hpi",
        "label": "History of present illness",
        "fields": [
          {
            "id": "hpi_0",
            "label": "History of present illness",
            "aliases": [
              "History of present illness",
              "HPI",
              "History",
              "History of presenting illness"
            ]
          },
          {
            "id": "hpi_1",
            "label": "Interval history",
            "aliases": [
              "Interval history",
              "Subjective",
              "Interval history since last note"
            ]
          },
          {
            "id": "hpi_2",
            "label": "Baseline function / cognition",
            "aliases": [
              "Baseline function / cognition",
              "Baseline functional status",
              "Baseline cognition"
            ]
          }
        ]
      },
      {
        "id": "pmh",
        "label": "Past medical and surgical history",
        "fields": [
          {
            "id": "pmh_0",
            "label": "Past medical history",
            "aliases": [
              "Past medical history",
              "PMH"
            ]
          },
          {
            "id": "pmh_1",
            "label": "Past surgical history",
            "aliases": [
              "Past surgical history",
              "PSH",
              "Surgical history"
            ]
          }
        ]
      },
      {
        "id": "meds",
        "label": "Medications and allergies",
        "fields": [
          {
            "id": "meds_0",
            "label": "Home medications",
            "aliases": [
              "Home medications",
              "Medications (home)",
              "Home meds"
            ]
          },
          {
            "id": "meds_1",
            "label": "Encounter medication list",
            "aliases": [
              "Encounter medication list",
              "Medications",
              "Current medication list"
            ]
          },
          {
            "id": "meds_2",
            "label": "Administered medications",
            "aliases": [
              "Administered medications",
              "ED medications"
            ]
          },
          {
            "id": "meds_3",
            "label": "Medication changes / held / discontinued",
            "aliases": [
              "Medication changes / held / discontinued"
            ]
          },
          {
            "id": "meds_4",
            "label": "Allergies / reactions",
            "aliases": [
              "Allergies / reactions",
              "Allergies",
              "Allergies/adverse reactions"
            ]
          }
        ]
      },
      {
        "id": "family",
        "label": "Family and social history",
        "fields": [
          {
            "id": "family_0",
            "label": "Family history",
            "aliases": [
              "Family history"
            ]
          },
          {
            "id": "family_1",
            "label": "Social history",
            "aliases": [
              "Social history"
            ]
          },
          {
            "id": "family_2",
            "label": "Tobacco",
            "aliases": [
              "Tobacco"
            ]
          },
          {
            "id": "family_3",
            "label": "Alcohol",
            "aliases": [
              "Alcohol"
            ]
          },
          {
            "id": "family_4",
            "label": "Substance use",
            "aliases": [
              "Substance use",
              "Substances"
            ]
          },
          {
            "id": "family_5",
            "label": "Living situation / support",
            "aliases": [
              "Living situation / support"
            ]
          },
          {
            "id": "family_6",
            "label": "Occupation / functional status",
            "aliases": [
              "Occupation / functional status"
            ]
          },
          {
            "id": "family_7",
            "label": "Exposures / travel",
            "aliases": [
              "Exposures / travel"
            ]
          }
        ]
      },
      {
        "id": "ros",
        "label": "Review of systems",
        "fields": [
          {
            "id": "ros_0",
            "label": "Review of systems",
            "aliases": [
              "Review of systems",
              "ROS",
              "Pertinent review of systems"
            ]
          },
          {
            "id": "ros_1",
            "label": "Constitutional",
            "aliases": [
              "Constitutional"
            ]
          },
          {
            "id": "ros_2",
            "label": "HEENT",
            "aliases": [
              "HEENT"
            ]
          },
          {
            "id": "ros_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular"
            ]
          },
          {
            "id": "ros_4",
            "label": "Respiratory",
            "aliases": [
              "Respiratory"
            ]
          },
          {
            "id": "ros_5",
            "label": "GI",
            "aliases": [
              "GI"
            ]
          },
          {
            "id": "ros_6",
            "label": "GU",
            "aliases": [
              "GU"
            ]
          },
          {
            "id": "ros_7",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal"
            ]
          },
          {
            "id": "ros_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic"
            ]
          },
          {
            "id": "ros_9",
            "label": "Skin",
            "aliases": [
              "Skin"
            ]
          },
          {
            "id": "ros_10",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ]
          },
          {
            "id": "ros_11",
            "label": "Endocrine / heme / immunologic",
            "aliases": [
              "Endocrine / heme / immunologic",
              "Heme/Endo"
            ]
          },
          {
            "id": "ros_12",
            "label": "Limitations / unable to obtain",
            "aliases": [
              "Limitations / unable to obtain"
            ]
          }
        ]
      },
      {
        "id": "vitals",
        "label": "Vitals and measurements",
        "fields": [
          {
            "id": "vitals_0",
            "label": "Vitals",
            "aliases": [
              "Vitals",
              "Vital signs",
              "Objective"
            ]
          },
          {
            "id": "vitals_1",
            "label": "Measurement time / reporting window",
            "aliases": [
              "Measurement time / reporting window"
            ]
          },
          {
            "id": "vitals_2",
            "label": "Temperature / Tmax",
            "aliases": [
              "Temperature / Tmax"
            ]
          },
          {
            "id": "vitals_3",
            "label": "Heart rate",
            "aliases": [
              "Heart rate",
              "HR",
              "Pulse"
            ]
          },
          {
            "id": "vitals_4",
            "label": "Blood pressure",
            "aliases": [
              "Blood pressure",
              "BP"
            ]
          },
          {
            "id": "vitals_5",
            "label": "MAP",
            "aliases": [
              "MAP"
            ]
          },
          {
            "id": "vitals_6",
            "label": "Respiratory rate",
            "aliases": [
              "Respiratory rate",
              "RR"
            ]
          },
          {
            "id": "vitals_7",
            "label": "SpO₂",
            "aliases": [
              "SpO₂",
              "SpO2",
              "Oxygen saturation"
            ]
          },
          {
            "id": "vitals_8",
            "label": "Oxygen device / flow / FiO₂",
            "aliases": [
              "Oxygen device / flow / FiO₂"
            ]
          },
          {
            "id": "vitals_9",
            "label": "Weight / BMI",
            "aliases": [
              "Weight / BMI",
              "Weight"
            ]
          },
          {
            "id": "vitals_10",
            "label": "Pain score",
            "aliases": [
              "Pain score"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_0",
            "label": "Laboratory results",
            "aliases": [
              "Laboratory results",
              "Laboratory",
              "Labs",
              "Labs (today, with pertinent trends)",
              "Labs/Micro"
            ]
          },
          {
            "id": "data_1",
            "label": "CBC",
            "aliases": [
              "CBC"
            ]
          },
          {
            "id": "data_2",
            "label": "BMP / CMP",
            "aliases": [
              "BMP / CMP",
              "BMP",
              "CMP"
            ]
          },
          {
            "id": "data_3",
            "label": "LFTs",
            "aliases": [
              "LFTs"
            ]
          },
          {
            "id": "data_4",
            "label": "Coagulation",
            "aliases": [
              "Coagulation"
            ]
          },
          {
            "id": "data_5",
            "label": "ABG",
            "aliases": [
              "ABG"
            ]
          },
          {
            "id": "data_6",
            "label": "VBG",
            "aliases": [
              "VBG"
            ]
          },
          {
            "id": "data_7",
            "label": "Other laboratory results",
            "aliases": [
              "Other laboratory results"
            ]
          },
          {
            "id": "data_8",
            "label": "Microbiology / cultures",
            "aliases": [
              "Microbiology / cultures",
              "Microbiology",
              "Micro",
              "Cultures"
            ]
          },
          {
            "id": "data_9",
            "label": "Imaging",
            "aliases": [
              "Imaging",
              "Imaging / diagnostics",
              "Imaging / studies",
              "Imaging/Studies"
            ]
          },
          {
            "id": "data_10",
            "label": "ECG",
            "aliases": [
              "ECG"
            ]
          },
          {
            "id": "data_11",
            "label": "Other diagnostics",
            "aliases": [
              "Other diagnostics",
              "Diagnostics",
              "Other studies"
            ]
          },
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          },
          {
            "id": "data_13",
            "label": "Pending studies",
            "aliases": [
              "Pending studies"
            ]
          }
        ]
      },
      {
        "id": "edcourse",
        "label": "ED course / orders / reassessments",
        "fields": [
          {
            "id": "edcourse_0",
            "label": "ED course",
            "aliases": [
              "ED course",
              "Emergency department course",
              "ED course, orders & reassessments"
            ]
          },
          {
            "id": "edcourse_1",
            "label": "Diagnostics ordered/reviewed",
            "aliases": [
              "Diagnostics ordered/reviewed"
            ]
          },
          {
            "id": "edcourse_2",
            "label": "Procedures performed",
            "aliases": [
              "Procedures performed"
            ]
          },
          {
            "id": "edcourse_3",
            "label": "Consultations",
            "aliases": [
              "Consultations"
            ]
          },
          {
            "id": "edcourse_4",
            "label": "Reassessment prior to disposition",
            "aliases": [
              "Reassessment prior to disposition"
            ]
          }
        ]
      },
      {
        "id": "mdm",
        "label": "Medical decision-making",
        "fields": [
          {
            "id": "mdm_0",
            "label": "Number/complexity of problems addressed",
            "aliases": [
              "Number/complexity of problems addressed"
            ]
          },
          {
            "id": "mdm_1",
            "label": "Differential diagnosis",
            "aliases": [
              "Differential diagnosis"
            ]
          },
          {
            "id": "mdm_2",
            "label": "Data reviewed/analyzed",
            "aliases": [
              "Data reviewed/analyzed"
            ]
          },
          {
            "id": "mdm_3",
            "label": "Risk of complications/morbidity",
            "aliases": [
              "Risk of complications/morbidity"
            ]
          },
          {
            "id": "mdm_4",
            "label": "Clinical reasoning summary",
            "aliases": [
              "Clinical reasoning summary"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Summary statement",
            "aliases": [
              "Summary statement",
              "Assessment",
              "One-liner"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Clinical reasoning / differential",
            "aliases": [
              "Clinical reasoning / differential",
              "Differential diagnosis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Documented trajectory",
            "aliases": [
              "Documented trajectory"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Problem list / diagnoses",
            "aliases": [
              "Problem list / diagnoses",
              "Clinical impression / ED diagnoses",
              "Clinical impression",
              "Diagnoses"
            ]
          }
        ]
      },
      {
        "id": "disposition",
        "label": "Disposition and discharge / transfer",
        "fields": [
          {
            "id": "disposition_0",
            "label": "Planned disposition",
            "aliases": [
              "Planned disposition"
            ]
          },
          {
            "id": "disposition_1",
            "label": "Actual disposition",
            "aliases": [
              "Actual disposition",
              "Disposition"
            ]
          },
          {
            "id": "disposition_2",
            "label": "Condition at disposition",
            "aliases": [
              "Condition at disposition"
            ]
          },
          {
            "id": "disposition_3",
            "label": "Admitting/accepting provider",
            "aliases": [
              "Admitting/accepting provider"
            ]
          },
          {
            "id": "disposition_4",
            "label": "Discharge diagnoses",
            "aliases": [
              "Discharge diagnoses"
            ]
          },
          {
            "id": "disposition_5",
            "label": "Prescriptions",
            "aliases": [
              "Prescriptions"
            ]
          },
          {
            "id": "disposition_6",
            "label": "Return precautions given",
            "aliases": [
              "Return precautions given"
            ]
          },
          {
            "id": "disposition_7",
            "label": "Follow-up",
            "aliases": [
              "Follow-up"
            ]
          },
          {
            "id": "disposition_8",
            "label": "Patient/caregiver understanding",
            "aliases": [
              "Patient/caregiver understanding"
            ]
          },
          {
            "id": "disposition_9",
            "label": "Transfer documentation",
            "aliases": [
              "Transfer documentation"
            ]
          },
          {
            "id": "disposition_10",
            "label": "Disposition time",
            "aliases": [
              "Disposition time"
            ]
          }
        ]
      },
      {
        "id": "critical",
        "label": "Documented critical-care time",
        "fields": [
          {
            "id": "critical_0",
            "label": "Critical care time",
            "aliases": [
              "Critical care time",
              "Time spent / critical care time (if applicable)",
              "Critical care / time documentation (if applicable)"
            ]
          },
          {
            "id": "critical_1",
            "label": "Provider attribution",
            "aliases": [
              "Provider attribution"
            ]
          },
          {
            "id": "critical_2",
            "label": "Exclusions / activities / original time statement",
            "aliases": [
              "Exclusions / activities / original time statement"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pt",
    "title": "Physical therapy note",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "therapy",
        "label": "Therapy encounter",
        "fields": [
          {
            "id": "therapy_0",
            "label": "Referring provider",
            "aliases": [
              "Referring provider"
            ]
          },
          {
            "id": "therapy_1",
            "label": "Referral diagnosis / ICD-10",
            "aliases": [
              "Referral diagnosis / ICD-10",
              "Referral Dx / ICD-10",
              "Primary diagnosis (ICD-10)"
            ]
          },
          {
            "id": "therapy_2",
            "label": "Treating diagnosis",
            "aliases": [
              "Treating diagnosis",
              "Treating diagnosis / SLP Dx"
            ]
          },
          {
            "id": "therapy_3",
            "label": "Clinician / credentials / license",
            "aliases": [
              "Clinician / credentials / license",
              "PT / License #"
            ]
          },
          {
            "id": "therapy_4",
            "label": "Treatment time",
            "aliases": [
              "Treatment time",
              "Time In/Out"
            ]
          },
          {
            "id": "therapy_5",
            "label": "Total treatment time",
            "aliases": [
              "Total treatment time"
            ]
          },
          {
            "id": "therapy_6",
            "label": "Timed-code minutes",
            "aliases": [
              "Timed-code minutes"
            ]
          },
          {
            "id": "therapy_7",
            "label": "Documented codes / billed units",
            "aliases": [
              "Documented codes / billed units"
            ]
          },
          {
            "id": "therapy_8",
            "label": "Precautions / weight-bearing status",
            "aliases": [
              "Precautions / weight-bearing status"
            ]
          }
        ]
      },
      {
        "id": "subjective",
        "label": "Subjective",
        "fields": [
          {
            "id": "subjective_0",
            "label": "Chief complaint / reason for visit",
            "aliases": [
              "Chief complaint / reason for visit",
              "CC"
            ]
          },
          {
            "id": "subjective_1",
            "label": "Pain — location / current / best / worst / quality / factors",
            "aliases": [
              "Pain — location / current / best / worst / quality / factors",
              "Pain"
            ]
          },
          {
            "id": "subjective_2",
            "label": "Interval history / changes since last visit",
            "aliases": [
              "Interval history / changes since last visit"
            ]
          },
          {
            "id": "subjective_3",
            "label": "Functional/activity limitations reported",
            "aliases": [
              "Functional/activity limitations reported"
            ]
          },
          {
            "id": "subjective_4",
            "label": "Patient goals / response to prior treatment",
            "aliases": [
              "Patient goals / response to prior treatment"
            ]
          },
          {
            "id": "subjective_5",
            "label": "Home exercise program adherence",
            "aliases": [
              "Home exercise program adherence",
              "HEP adherence"
            ]
          }
        ]
      },
      {
        "id": "objective",
        "label": "Objective / function",
        "fields": [
          {
            "id": "objective_0",
            "label": "Observation / posture / gait",
            "aliases": [
              "Observation / posture / gait"
            ]
          },
          {
            "id": "objective_1",
            "label": "Prior baseline function",
            "aliases": [
              "Prior baseline function"
            ]
          },
          {
            "id": "objective_2",
            "label": "Observed function / assistance / devices / distance",
            "aliases": [
              "Observed function / assistance / devices / distance"
            ]
          },
          {
            "id": "objective_3",
            "label": "Range of motion (AROM/PROM)",
            "aliases": [
              "Range of motion (AROM/PROM)",
              "Range of motion"
            ],
            "columns": [
              "Joint / motion",
              "AROM or PROM",
              "Left",
              "Right",
              "Units",
              "Documented norm",
              "Notes"
            ]
          },
          {
            "id": "objective_4",
            "label": "Strength (MMT 0–5)",
            "aliases": [
              "Strength (MMT 0–5)",
              "Strength"
            ],
            "columns": [
              "Muscle / group",
              "Left",
              "Right",
              "Scale / units",
              "Notes"
            ]
          },
          {
            "id": "objective_5",
            "label": "Special / functional tests & outcome measures",
            "aliases": [
              "Special / functional tests & outcome measures"
            ]
          },
          {
            "id": "objective_6",
            "label": "Palpation / joint mobility / neuro / girth / balance",
            "aliases": [
              "Palpation / joint mobility / neuro / girth / balance"
            ]
          },
          {
            "id": "objective_7",
            "label": "Activity tolerance",
            "aliases": [
              "Activity tolerance"
            ]
          }
        ]
      },
      {
        "id": "interventions",
        "label": "Interventions provided this visit",
        "fields": [
          {
            "id": "interventions_0",
            "label": "Therapeutic exercise",
            "aliases": [
              "Therapeutic exercise"
            ]
          },
          {
            "id": "interventions_1",
            "label": "Manual therapy",
            "aliases": [
              "Manual therapy"
            ]
          },
          {
            "id": "interventions_2",
            "label": "Neuromuscular re-education / balance / gait training",
            "aliases": [
              "Neuromuscular re-education / balance / gait training"
            ]
          },
          {
            "id": "interventions_3",
            "label": "Modalities (with parameters)",
            "aliases": [
              "Modalities (with parameters)"
            ]
          },
          {
            "id": "interventions_4",
            "label": "Patient education / HEP updates",
            "aliases": [
              "Patient education / HEP updates"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment and goals",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Clinical impression / PT diagnosis",
            "aliases": [
              "Clinical impression / PT diagnosis",
              "Clinical interpretation of performance and progress toward goals"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Response to treatment today",
            "aliases": [
              "Response to treatment today",
              "Response to cueing/interventions and skilled analysis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Progress toward goals",
            "aliases": [
              "Progress toward goals",
              "Progress"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Justification for skilled care / continued need",
            "aliases": [
              "Justification for skilled care / continued need",
              "Justification of skilled SLP service / medical necessity"
            ]
          },
          {
            "id": "assessment_4",
            "label": "Rehab potential / prognosis",
            "aliases": [
              "Rehab potential / prognosis"
            ]
          },
          {
            "id": "assessment_5",
            "label": "Goals",
            "aliases": [
              "Goals"
            ],
            "columns": [
              "Goal",
              "Baseline",
              "Current",
              "Target",
              "Target date",
              "Status"
            ]
          }
        ]
      },
      {
        "id": "plan",
        "label": "Plan",
        "fields": [
          {
            "id": "plan_0",
            "label": "Frequency & duration",
            "aliases": [
              "Frequency & duration",
              "Frequency / duration"
            ]
          },
          {
            "id": "plan_1",
            "label": "Planned interventions / progression",
            "aliases": [
              "Planned interventions / progression",
              "Planned interventions / focus next session"
            ]
          },
          {
            "id": "plan_2",
            "label": "HEP issued/updated",
            "aliases": [
              "HEP issued/updated",
              "Home program / caregiver training provided"
            ]
          },
          {
            "id": "plan_3",
            "label": "Referrals / communication with provider",
            "aliases": [
              "Referrals / communication with provider",
              "Referrals / provider communication"
            ]
          },
          {
            "id": "plan_4",
            "label": "Anticipated discharge plan",
            "aliases": [
              "Anticipated discharge plan"
            ]
          },
          {
            "id": "plan_5",
            "label": "Next visit",
            "aliases": [
              "Next visit"
            ]
          },
          {
            "id": "plan_6",
            "label": "Plan-of-care status",
            "aliases": [
              "Plan-of-care status"
            ]
          },
          {
            "id": "plan_7",
            "label": "Final function / goal status / reason for discharge / equipment / follow-up",
            "aliases": [
              "Final function / goal status / reason for discharge / equipment / follow-up"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "slp",
    "title": "Speech-language pathology note",
    "sections": [
      {
        "id": "identity",
        "label": "Patient and encounter",
        "fields": [
          {
            "id": "identity_0",
            "label": "Patient name",
            "aliases": [
              "Patient name",
              "Patient"
            ]
          },
          {
            "id": "identity_1",
            "label": "MRN",
            "aliases": [
              "MRN"
            ]
          },
          {
            "id": "identity_2",
            "label": "DOB",
            "aliases": [
              "DOB"
            ]
          },
          {
            "id": "identity_3",
            "label": "Age / sex",
            "aliases": [
              "Age / sex",
              "Age/Sex"
            ]
          },
          {
            "id": "identity_4",
            "label": "Encounter date/time",
            "aliases": [
              "Encounter date/time",
              "Date of service",
              "Date/time of consult",
              "Date/time",
              "Date"
            ]
          },
          {
            "id": "identity_5",
            "label": "Setting",
            "aliases": [
              "Setting"
            ]
          },
          {
            "id": "identity_6",
            "label": "Specialty / service",
            "aliases": [
              "Specialty / service",
              "Consulting service/specialty",
              "Service/team",
              "Service",
              "Clinic"
            ]
          },
          {
            "id": "identity_7",
            "label": "Visit / note type",
            "aliases": [
              "Visit / note type",
              "Visit type",
              "Note type"
            ]
          },
          {
            "id": "identity_facility",
            "label": "Facility / location",
            "aliases": [
              "Facility / location",
              "Facility",
              "Location"
            ]
          },
          {
            "id": "identity_header",
            "label": "Original encounter header",
            "aliases": [
              "Original encounter header"
            ]
          }
        ]
      },
      {
        "id": "therapy",
        "label": "Therapy encounter",
        "fields": [
          {
            "id": "therapy_0",
            "label": "Referring provider",
            "aliases": [
              "Referring provider"
            ]
          },
          {
            "id": "therapy_1",
            "label": "Referral diagnosis / ICD-10",
            "aliases": [
              "Referral diagnosis / ICD-10",
              "Referral Dx / ICD-10",
              "Primary diagnosis (ICD-10)"
            ]
          },
          {
            "id": "therapy_2",
            "label": "Treating diagnosis",
            "aliases": [
              "Treating diagnosis",
              "Treating diagnosis / SLP Dx"
            ]
          },
          {
            "id": "therapy_3",
            "label": "Clinician / credentials / license",
            "aliases": [
              "Clinician / credentials / license",
              "PT / License #"
            ]
          },
          {
            "id": "therapy_4",
            "label": "Treatment time",
            "aliases": [
              "Treatment time",
              "Time In/Out"
            ]
          },
          {
            "id": "therapy_5",
            "label": "Total treatment time",
            "aliases": [
              "Total treatment time"
            ]
          },
          {
            "id": "therapy_6",
            "label": "Timed-code minutes",
            "aliases": [
              "Timed-code minutes"
            ]
          },
          {
            "id": "therapy_7",
            "label": "Documented codes / billed units",
            "aliases": [
              "Documented codes / billed units"
            ]
          },
          {
            "id": "therapy_8",
            "label": "Precautions / weight-bearing status",
            "aliases": [
              "Precautions / weight-bearing status"
            ]
          }
        ]
      },
      {
        "id": "subjective",
        "label": "Subjective",
        "fields": [
          {
            "id": "subjective_0",
            "label": "Patient/caregiver report",
            "aliases": [
              "Patient/caregiver report"
            ]
          },
          {
            "id": "subjective_1",
            "label": "Reported changes in communication/swallowing function",
            "aliases": [
              "Reported changes in communication/swallowing function"
            ]
          },
          {
            "id": "subjective_2",
            "label": "Patient/family concerns, priorities, goals",
            "aliases": [
              "Patient/family concerns, priorities, goals"
            ]
          },
          {
            "id": "subjective_3",
            "label": "Carryover / home program adherence",
            "aliases": [
              "Carryover / home program adherence"
            ]
          },
          {
            "id": "subjective_4",
            "label": "Barriers",
            "aliases": [
              "Barriers"
            ]
          }
        ]
      },
      {
        "id": "objective",
        "label": "Objective",
        "fields": [
          {
            "id": "objective_0",
            "label": "Cognitive-communication status",
            "aliases": [
              "Cognitive-communication status"
            ]
          },
          {
            "id": "objective_1",
            "label": "Areas addressed this session",
            "aliases": [
              "Areas addressed this session"
            ]
          },
          {
            "id": "objective_2",
            "label": "Performance data by target",
            "aliases": [
              "Performance data by target"
            ],
            "columns": [
              "Goal / target",
              "Task / stimulus",
              "Cue level",
              "Cue type",
              "Accuracy",
              "Trials"
            ]
          },
          {
            "id": "objective_3",
            "label": "Standardized / outcome measures",
            "aliases": [
              "Standardized / outcome measures"
            ]
          },
          {
            "id": "objective_4",
            "label": "Skilled interventions provided (CPT)",
            "aliases": [
              "Skilled interventions provided (CPT)"
            ]
          }
        ]
      },
      {
        "id": "swallow",
        "label": "Dysphagia / swallowing",
        "fields": [
          {
            "id": "swallow_0",
            "label": "Assessment method — bedside / MBSS / VFSS / FEES",
            "aliases": [
              "Assessment method — bedside / MBSS / VFSS / FEES"
            ]
          },
          {
            "id": "swallow_1",
            "label": "Current diet / IDDSI",
            "aliases": [
              "Current diet / IDDSI"
            ]
          },
          {
            "id": "swallow_2",
            "label": "Consistencies trialed",
            "aliases": [
              "Consistencies trialed"
            ]
          },
          {
            "id": "swallow_3",
            "label": "Recommended diet / IDDSI",
            "aliases": [
              "Recommended diet / IDDSI"
            ]
          },
          {
            "id": "swallow_4",
            "label": "Strategies/compensations used",
            "aliases": [
              "Strategies/compensations used"
            ]
          },
          {
            "id": "swallow_5",
            "label": "Response to strategies",
            "aliases": [
              "Response to strategies"
            ]
          },
          {
            "id": "swallow_6",
            "label": "Observed symptoms",
            "aliases": [
              "Observed symptoms"
            ]
          },
          {
            "id": "swallow_7",
            "label": "Clinician interpretation",
            "aliases": [
              "Clinician interpretation"
            ]
          },
          {
            "id": "swallow_8",
            "label": "Instrumental penetration / aspiration findings",
            "aliases": [
              "Instrumental penetration / aspiration findings"
            ]
          },
          {
            "id": "swallow_9",
            "label": "Source wording requiring review",
            "aliases": [
              "Source wording requiring review",
              "Signs of aspiration/penetration observed"
            ]
          }
        ]
      },
      {
        "id": "assessment",
        "label": "Assessment and goals",
        "fields": [
          {
            "id": "assessment_0",
            "label": "Clinical impression / PT diagnosis",
            "aliases": [
              "Clinical impression / PT diagnosis",
              "Clinical interpretation of performance and progress toward goals"
            ]
          },
          {
            "id": "assessment_1",
            "label": "Response to treatment today",
            "aliases": [
              "Response to treatment today",
              "Response to cueing/interventions and skilled analysis"
            ]
          },
          {
            "id": "assessment_2",
            "label": "Progress toward goals",
            "aliases": [
              "Progress toward goals",
              "Progress"
            ]
          },
          {
            "id": "assessment_3",
            "label": "Justification for skilled care / continued need",
            "aliases": [
              "Justification for skilled care / continued need",
              "Justification of skilled SLP service / medical necessity"
            ]
          },
          {
            "id": "assessment_4",
            "label": "Rehab potential / prognosis",
            "aliases": [
              "Rehab potential / prognosis"
            ]
          },
          {
            "id": "assessment_5",
            "label": "Goals",
            "aliases": [
              "Goals"
            ],
            "columns": [
              "Goal",
              "Baseline",
              "Current",
              "Target",
              "Target date",
              "Status"
            ]
          }
        ]
      },
      {
        "id": "plan",
        "label": "Plan",
        "fields": [
          {
            "id": "plan_0",
            "label": "Frequency & duration",
            "aliases": [
              "Frequency & duration",
              "Frequency / duration"
            ]
          },
          {
            "id": "plan_1",
            "label": "Planned interventions / progression",
            "aliases": [
              "Planned interventions / progression",
              "Planned interventions / focus next session"
            ]
          },
          {
            "id": "plan_2",
            "label": "HEP issued/updated",
            "aliases": [
              "HEP issued/updated",
              "Home program / caregiver training provided"
            ]
          },
          {
            "id": "plan_3",
            "label": "Referrals / communication with provider",
            "aliases": [
              "Referrals / communication with provider",
              "Referrals / provider communication"
            ]
          },
          {
            "id": "plan_4",
            "label": "Anticipated discharge plan",
            "aliases": [
              "Anticipated discharge plan"
            ]
          },
          {
            "id": "plan_5",
            "label": "Next visit",
            "aliases": [
              "Next visit"
            ]
          },
          {
            "id": "plan_6",
            "label": "Plan-of-care status",
            "aliases": [
              "Plan-of-care status"
            ]
          },
          {
            "id": "plan_7",
            "label": "Final function / goal status / reason for discharge / equipment / follow-up",
            "aliases": [
              "Final function / goal status / reason for discharge / equipment / follow-up"
            ]
          }
        ]
      },
      {
        "id": "exam",
        "label": "Physical examination",
        "fields": [
          {
            "id": "exam_0",
            "label": "Physical examination",
            "aliases": [
              "Physical examination",
              "Physical exam",
              "Focused exam",
              "Examination",
              "Today's Physical Exam",
              "Todays Physical Exam",
              "Focused physical exam",
              "Physical exam findings"
            ]
          },
          {
            "id": "exam_1",
            "label": "General",
            "aliases": [
              "General",
              "General appearance"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_2",
            "label": "HEENT / neck",
            "aliases": [
              "HEENT / neck",
              "HEENT"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_3",
            "label": "Cardiovascular",
            "aliases": [
              "Cardiovascular",
              "CV"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_4",
            "label": "Pulmonary",
            "aliases": [
              "Pulmonary",
              "Pulm",
              "Respiratory",
              "Chest / Respiratory",
              "Respiratory examination",
              "Lungs",
              "Chest"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_5",
            "label": "Abdomen",
            "aliases": [
              "Abdomen",
              "Abd"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_6",
            "label": "Extremities",
            "aliases": [
              "Extremities"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_7",
            "label": "Skin / wounds / incisions",
            "aliases": [
              "Skin / wounds / incisions",
              "Skin",
              "Wounds",
              "Skin, Hair, and Nails",
              "Skin hair and nails"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_8",
            "label": "Neurologic",
            "aliases": [
              "Neurologic",
              "Neuro",
              "General/neuro",
              "Neurological examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_9",
            "label": "Psychiatric",
            "aliases": [
              "Psychiatric"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_10",
            "label": "Specialty-focused examination",
            "aliases": [
              "Specialty-focused examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_head",
            "label": "Head",
            "aliases": [
              "Head"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_eyes",
            "label": "Eyes",
            "aliases": [
              "Eyes",
              "Eye exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_ears",
            "label": "Ears",
            "aliases": [
              "Ears"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_nose",
            "label": "Nose and sinuses",
            "aliases": [
              "Nose",
              "Sinuses",
              "Nose and sinuses"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mouth",
            "label": "Mouth and throat",
            "aliases": [
              "Mouth",
              "Throat",
              "Mouth and throat",
              "Oropharynx"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neck",
            "label": "Neck",
            "aliases": [
              "Neck"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_lymph",
            "label": "Lymphatic",
            "aliases": [
              "Lymphatic",
              "Lymph nodes"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_breast",
            "label": "Breast",
            "aliases": [
              "Breast",
              "Breasts"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gu",
            "label": "Genitourinary",
            "aliases": [
              "Genitourinary",
              "GU",
              "Male genital exam",
              "Female genital exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_rectal",
            "label": "Rectal",
            "aliases": [
              "Rectal",
              "Rectal exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_msk",
            "label": "Musculoskeletal",
            "aliases": [
              "Musculoskeletal",
              "MSK"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_mental",
            "label": "Neurologic — mental status",
            "aliases": [
              "Mental status",
              "Mental status exam"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_memory",
            "label": "Neurologic — memory",
            "aliases": [
              "Memory"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_attention",
            "label": "Neurologic — attention",
            "aliases": [
              "Attention",
              "Concentration",
              "Attention/concentration"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_knowledge",
            "label": "Neurologic — knowledge",
            "aliases": [
              "Knowledge",
              "Fund of knowledge"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_language",
            "label": "Neurologic — language and speech",
            "aliases": [
              "Language and speech",
              "Language",
              "Speech"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_cn",
            "label": "Neurologic — cranial nerves",
            "aliases": [
              "Cranial nerves",
              "CN",
              "Cranial nerves (I–XII)"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_motor",
            "label": "Neurologic — motor strength",
            "aliases": [
              "Motor",
              "Motor strength",
              "Strength",
              "Motor examination",
              "Strength (MRC scale 0–5)"
            ],
            "examContextOnly": true,
            "columns": [
              "Muscle group",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_tone",
            "label": "Neurologic — muscle tone",
            "aliases": [
              "Muscle tone",
              "Tone"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_bulk",
            "label": "Neurologic — muscle bulk",
            "aliases": [
              "Muscle bulk",
              "Bulk"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_sensory",
            "label": "Neurologic — sensory",
            "aliases": [
              "Sensory",
              "Sensation",
              "Sensory examination"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_reflexes",
            "label": "Neurologic — reflexes",
            "aliases": [
              "Reflexes",
              "DTRs",
              "Deep tendon reflexes",
              "Deep tendon reflexes (0–4+ scale)"
            ],
            "examContextOnly": true,
            "columns": [
              "Reflex",
              "Right",
              "Left"
            ]
          },
          {
            "id": "exam_coordination",
            "label": "Neurologic — coordination",
            "aliases": [
              "Coordination",
              "Coordination / cerebellar"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_gait",
            "label": "Neurologic — gait and balance",
            "aliases": [
              "Gait",
              "Gait and station"
            ],
            "examContextOnly": true
          },
          {
            "id": "exam_neuro_special",
            "label": "Meningeal / special signs",
            "aliases": [
              "Meningeal / special signs",
              "Meningeal / special signs (when indicated)"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_consciousness",
            "label": "Level of consciousness",
            "aliases": [
              "Level of consciousness",
              "Consciousness",
              "Arousal",
              "Level of arousal"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_orientation",
            "label": "Orientation",
            "aliases": [
              "Orientation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_fluency",
            "label": "Language — fluency",
            "aliases": [
              "Fluency"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_naming",
            "label": "Language — naming",
            "aliases": [
              "Naming"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_repetition",
            "label": "Language — repetition",
            "aliases": [
              "Repetition"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_comprehension",
            "label": "Language — comprehension",
            "aliases": [
              "Comprehension"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading",
            "label": "Language — reading",
            "aliases": [
              "Reading"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_writing",
            "label": "Language — writing",
            "aliases": [
              "Writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_reading_writing",
            "label": "Language — reading / writing",
            "aliases": [
              "Reading / writing"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_calculation",
            "label": "Calculation",
            "aliases": [
              "Calculation"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_praxis",
            "label": "Praxis",
            "aliases": [
              "Praxis",
              "Apraxia"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_neglect",
            "label": "Neglect / extinction",
            "aliases": [
              "Neglect / extinction",
              "Neglect",
              "Extinction"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_affect",
            "label": "Thought content / affect",
            "aliases": [
              "Thought content / affect",
              "Affect",
              "Mood and affect"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_screen",
            "label": "Cognitive screen",
            "aliases": [
              "Cognitive screen",
              "Cognitive screen (if performed)"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_moca",
            "label": "MoCA — documented score",
            "aliases": [
              "MoCA"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_mmse",
            "label": "MMSE — documented score",
            "aliases": [
              "MMSE"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_immediate",
            "label": "Memory — immediate recall",
            "aliases": [
              "Immediate recall",
              "Registration"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_delayed",
            "label": "Memory — delayed recall",
            "aliases": [
              "Delayed recall",
              "Short-term recall"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_remote",
            "label": "Memory — remote",
            "aliases": [
              "Remote memory"
            ],
            "examContextOnly": true,
            "neuroScope": "mental"
          },
          {
            "id": "exam_neuro_movements",
            "label": "Involuntary movements",
            "aliases": [
              "Involuntary movements",
              "Abnormal movements"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_drift",
            "label": "Pronator drift",
            "aliases": [
              "Pronator drift",
              "Drift"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_light_touch",
            "label": "Light touch",
            "aliases": [
              "Light touch"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_pinprick",
            "label": "Pinprick",
            "aliases": [
              "Pinprick",
              "Pin prick"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_temperature",
            "label": "Temperature sensation",
            "aliases": [
              "Temperature",
              "Temperature sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_vibration",
            "label": "Vibration",
            "aliases": [
              "Vibration"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_position",
            "label": "Proprioception",
            "aliases": [
              "Proprioception",
              "Joint position sense",
              "Proprioception (joint position sense)"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_cortical",
            "label": "Cortical sensation",
            "aliases": [
              "Cortical sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_graphesthesia",
            "label": "Graphesthesia",
            "aliases": [
              "Graphesthesia"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_stereognosis",
            "label": "Stereognosis",
            "aliases": [
              "Stereognosis"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_two_point",
            "label": "Two-point discrimination",
            "aliases": [
              "Two-point discrimination"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_level",
            "label": "Sensory level",
            "aliases": [
              "Sensory level"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_distribution",
            "label": "Sensory distribution / laterality",
            "aliases": [
              "Sensory distribution",
              "Sensory location",
              "Sensory laterality"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_romberg",
            "label": "Romberg",
            "aliases": [
              "Romberg"
            ],
            "examContextOnly": true,
            "neuroScope": "sensory"
          },
          {
            "id": "exam_neuro_plantar",
            "label": "Plantar response",
            "aliases": [
              "Plantar response",
              "Plantar responses",
              "Babinski"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_clonus",
            "label": "Clonus",
            "aliases": [
              "Clonus"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_pathologic",
            "label": "Primitive / pathologic reflexes",
            "aliases": [
              "Primitive/pathologic reflexes",
              "Pathologic reflexes",
              "Primitive reflexes"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_hoffman",
            "label": "Hoffman sign",
            "aliases": [
              "Hoffman",
              "Hoffmann",
              "Hoffman sign"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_grasp",
            "label": "Grasp reflex",
            "aliases": [
              "Grasp reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_snout",
            "label": "Snout reflex",
            "aliases": [
              "Snout reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_palmomental",
            "label": "Palmomental reflex",
            "aliases": [
              "Palmomental reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_finger_nose",
            "label": "Finger-to-nose",
            "aliases": [
              "Finger-to-nose",
              "Finger to nose"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_heel_shin",
            "label": "Heel-to-shin",
            "aliases": [
              "Heel-to-shin",
              "Heel to shin"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_ram",
            "label": "Rapid alternating movements",
            "aliases": [
              "Rapid alternating movements",
              "RAM"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_rebound",
            "label": "Rebound",
            "aliases": [
              "Rebound"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_intention",
            "label": "Intention tremor",
            "aliases": [
              "Intention tremor"
            ],
            "examContextOnly": true,
            "neuroScope": "coordination"
          },
          {
            "id": "exam_neuro_casual",
            "label": "Casual gait",
            "aliases": [
              "Casual gait"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel_toe",
            "label": "Heel / toe walking",
            "aliases": [
              "Heel walk / toe walk",
              "Heel/toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_heel",
            "label": "Heel walking",
            "aliases": [
              "Heel walk",
              "Heel walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_toe",
            "label": "Toe walking",
            "aliases": [
              "Toe walk",
              "Toe walking"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_tandem",
            "label": "Tandem gait",
            "aliases": [
              "Tandem gait",
              "Tandem"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_station",
            "label": "Station",
            "aliases": [
              "Station"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_assistance",
            "label": "Assistance required",
            "aliases": [
              "Assistance required",
              "Gait assistance",
              "Assistive device"
            ],
            "examContextOnly": true,
            "neuroScope": "gait"
          },
          {
            "id": "exam_neuro_nuchal",
            "label": "Nuchal rigidity",
            "aliases": [
              "Nuchal rigidity"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_kernig",
            "label": "Kernig sign",
            "aliases": [
              "Kernig sign",
              "Kernig"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_brudzinski",
            "label": "Brudzinski sign",
            "aliases": [
              "Brudzinski sign",
              "Brudzinski"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_slr",
            "label": "Straight leg raise",
            "aliases": [
              "Straight leg raise",
              "SLR"
            ],
            "examContextOnly": true,
            "neuroScope": "special"
          },
          {
            "id": "exam_neuro_handedness",
            "label": "Handedness",
            "aliases": [
              "Handedness"
            ],
            "examContextOnly": true,
            "neuroScope": ""
          },
          {
            "id": "exam_neuro_cn_i",
            "label": "CN I — olfactory",
            "aliases": [
              "CN I",
              "CN I (Olfactory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ii",
            "label": "CN II — optic",
            "aliases": [
              "CN II",
              "CN II (Optic)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii_iv_vi",
            "label": "CN III, IV, VI",
            "aliases": [
              "CN III, IV, VI",
              "CN III, IV, VI (Oculomotor, Trochlear, Abducens)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_v",
            "label": "CN V — trigeminal",
            "aliases": [
              "CN V",
              "CN V (Trigeminal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vii",
            "label": "CN VII — facial",
            "aliases": [
              "CN VII",
              "CN VII (Facial)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_viii",
            "label": "CN VIII — vestibulocochlear",
            "aliases": [
              "CN VIII",
              "CN VIII (Vestibulocochlear)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix_x",
            "label": "CN IX, X",
            "aliases": [
              "CN IX, X",
              "CN IX, X (Glossopharyngeal, Vagus)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xi",
            "label": "CN XI — accessory",
            "aliases": [
              "CN XI",
              "CN XI (Accessory)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_xii",
            "label": "CN XII — hypoglossal",
            "aliases": [
              "CN XII",
              "CN XII (Hypoglossal)"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iii",
            "label": "CN III",
            "aliases": [
              "CN III"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_iv",
            "label": "CN IV",
            "aliases": [
              "CN IV"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_vi",
            "label": "CN VI",
            "aliases": [
              "CN VI"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ix",
            "label": "CN IX",
            "aliases": [
              "CN IX"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_x",
            "label": "CN X",
            "aliases": [
              "CN X"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_acuity",
            "label": "Visual acuity",
            "aliases": [
              "Visual acuity"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_visual_fields",
            "label": "Visual fields",
            "aliases": [
              "Visual fields"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_pupils",
            "label": "Pupils",
            "aliases": [
              "Pupils"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_fundoscopy",
            "label": "Fundoscopy",
            "aliases": [
              "Fundoscopy"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_extraocular_movements",
            "label": "Extraocular movements",
            "aliases": [
              "Extraocular movements"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_nystagmus",
            "label": "Nystagmus",
            "aliases": [
              "Nystagmus"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_diplopia",
            "label": "Diplopia",
            "aliases": [
              "Diplopia"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_ptosis",
            "label": "Ptosis",
            "aliases": [
              "Ptosis"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_saccades",
            "label": "Saccades",
            "aliases": [
              "Saccades"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_smooth_pursuit",
            "label": "Smooth pursuit",
            "aliases": [
              "Smooth pursuit"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_sensation",
            "label": "Facial sensation",
            "aliases": [
              "Facial sensation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_corneal_reflex",
            "label": "Corneal reflex",
            "aliases": [
              "Corneal reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_facial_symmetry",
            "label": "Facial symmetry",
            "aliases": [
              "Facial symmetry"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_hearing",
            "label": "Hearing",
            "aliases": [
              "Hearing"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_weber",
            "label": "Weber",
            "aliases": [
              "Weber"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_rinne",
            "label": "Rinne",
            "aliases": [
              "Rinne"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_palate",
            "label": "Palate",
            "aliases": [
              "Palate"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_gag_reflex",
            "label": "Gag reflex",
            "aliases": [
              "Gag reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_swallow",
            "label": "Swallow",
            "aliases": [
              "Swallow"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_phonation",
            "label": "Phonation",
            "aliases": [
              "Phonation"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_shoulder_shrug",
            "label": "Shoulder shrug",
            "aliases": [
              "Shoulder shrug"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_head_turn",
            "label": "Head turn",
            "aliases": [
              "Head turn"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_cn_tongue",
            "label": "Tongue",
            "aliases": [
              "Tongue"
            ],
            "examContextOnly": true,
            "neuroScope": "cn"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction",
            "label": "Shoulder abduction — source strength",
            "aliases": [
              "Shoulder abduction",
              "Shoulder abduction (deltoid)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_right",
            "label": "Shoulder abduction — Right",
            "aliases": [
              "Right Shoulder abduction",
              "Shoulder abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_shoulder_abduction_left",
            "label": "Shoulder abduction — Left",
            "aliases": [
              "Left Shoulder abduction",
              "Shoulder abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion",
            "label": "Elbow flexion — source strength",
            "aliases": [
              "Elbow flexion",
              "Elbow flexion (biceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_right",
            "label": "Elbow flexion — Right",
            "aliases": [
              "Right Elbow flexion",
              "Elbow flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_flexion_left",
            "label": "Elbow flexion — Left",
            "aliases": [
              "Left Elbow flexion",
              "Elbow flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension",
            "label": "Elbow extension — source strength",
            "aliases": [
              "Elbow extension",
              "Elbow extension (triceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_right",
            "label": "Elbow extension — Right",
            "aliases": [
              "Right Elbow extension",
              "Elbow extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_elbow_extension_left",
            "label": "Elbow extension — Left",
            "aliases": [
              "Left Elbow extension",
              "Elbow extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension",
            "label": "Wrist extension — source strength",
            "aliases": [
              "Wrist extension"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_right",
            "label": "Wrist extension — Right",
            "aliases": [
              "Right Wrist extension",
              "Wrist extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_wrist_extension_left",
            "label": "Wrist extension — Left",
            "aliases": [
              "Left Wrist extension",
              "Wrist extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction",
            "label": "Finger abduction — source strength",
            "aliases": [
              "Finger abduction"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_right",
            "label": "Finger abduction — Right",
            "aliases": [
              "Right Finger abduction",
              "Finger abduction Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_left",
            "label": "Finger abduction — Left",
            "aliases": [
              "Left Finger abduction",
              "Finger abduction Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip",
            "label": "Grip — source strength",
            "aliases": [
              "Grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_right",
            "label": "Grip — Right",
            "aliases": [
              "Right Grip",
              "Grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_grip_left",
            "label": "Grip — Left",
            "aliases": [
              "Left Grip",
              "Grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip",
            "label": "Finger abduction / grip — source strength",
            "aliases": [
              "Finger abduction / grip"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_right",
            "label": "Finger abduction / grip — Right",
            "aliases": [
              "Right Finger abduction / grip",
              "Finger abduction / grip Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_finger_abduction_grip_left",
            "label": "Finger abduction / grip — Left",
            "aliases": [
              "Left Finger abduction / grip",
              "Finger abduction / grip Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion",
            "label": "Hip flexion — source strength",
            "aliases": [
              "Hip flexion",
              "Hip flexion (iliopsoas)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_right",
            "label": "Hip flexion — Right",
            "aliases": [
              "Right Hip flexion",
              "Hip flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_hip_flexion_left",
            "label": "Hip flexion — Left",
            "aliases": [
              "Left Hip flexion",
              "Hip flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension",
            "label": "Knee extension — source strength",
            "aliases": [
              "Knee extension",
              "Knee extension (quadriceps)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_right",
            "label": "Knee extension — Right",
            "aliases": [
              "Right Knee extension",
              "Knee extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_extension_left",
            "label": "Knee extension — Left",
            "aliases": [
              "Left Knee extension",
              "Knee extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion",
            "label": "Knee flexion — source strength",
            "aliases": [
              "Knee flexion",
              "Knee flexion (hamstrings)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_right",
            "label": "Knee flexion — Right",
            "aliases": [
              "Right Knee flexion",
              "Knee flexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_knee_flexion_left",
            "label": "Knee flexion — Left",
            "aliases": [
              "Left Knee flexion",
              "Knee flexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion",
            "label": "Ankle dorsiflexion — source strength",
            "aliases": [
              "Ankle dorsiflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_right",
            "label": "Ankle dorsiflexion — Right",
            "aliases": [
              "Right Ankle dorsiflexion",
              "Ankle dorsiflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_dorsiflexion_left",
            "label": "Ankle dorsiflexion — Left",
            "aliases": [
              "Left Ankle dorsiflexion",
              "Ankle dorsiflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion",
            "label": "Ankle plantarflexion — source strength",
            "aliases": [
              "Ankle plantarflexion"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_right",
            "label": "Ankle plantarflexion — Right",
            "aliases": [
              "Right Ankle plantarflexion",
              "Ankle plantarflexion Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_ankle_plantarflexion_left",
            "label": "Ankle plantarflexion — Left",
            "aliases": [
              "Left Ankle plantarflexion",
              "Ankle plantarflexion Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension",
            "label": "Great toe extension — source strength",
            "aliases": [
              "Great toe extension",
              "Great toe extension (EHL)"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_right",
            "label": "Great toe extension — Right",
            "aliases": [
              "Right Great toe extension",
              "Great toe extension Right"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_muscle_great_toe_extension_left",
            "label": "Great toe extension — Left",
            "aliases": [
              "Left Great toe extension",
              "Great toe extension Left"
            ],
            "examContextOnly": true,
            "neuroScope": "motor"
          },
          {
            "id": "exam_neuro_reflex_biceps",
            "label": "Biceps reflex",
            "aliases": [
              "Biceps",
              "Biceps reflex",
              "Biceps (C5–C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_right",
            "label": "Biceps reflex — Right",
            "aliases": [
              "Right Biceps",
              "Right Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_biceps_left",
            "label": "Biceps reflex — Left",
            "aliases": [
              "Left Biceps",
              "Left Biceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis",
            "label": "Brachioradialis reflex",
            "aliases": [
              "Brachioradialis",
              "Brachioradialis reflex",
              "Brachioradialis (C6)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_right",
            "label": "Brachioradialis reflex — Right",
            "aliases": [
              "Right Brachioradialis",
              "Right Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_brachioradialis_left",
            "label": "Brachioradialis reflex — Left",
            "aliases": [
              "Left Brachioradialis",
              "Left Brachioradialis reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps",
            "label": "Triceps reflex",
            "aliases": [
              "Triceps",
              "Triceps reflex",
              "Triceps (C7)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_right",
            "label": "Triceps reflex — Right",
            "aliases": [
              "Right Triceps",
              "Right Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_triceps_left",
            "label": "Triceps reflex — Left",
            "aliases": [
              "Left Triceps",
              "Left Triceps reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar",
            "label": "Patellar reflex",
            "aliases": [
              "Patellar",
              "Patellar reflex",
              "Patellar (L3–L4)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_right",
            "label": "Patellar reflex — Right",
            "aliases": [
              "Right Patellar",
              "Right Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_patellar_left",
            "label": "Patellar reflex — Left",
            "aliases": [
              "Left Patellar",
              "Left Patellar reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles",
            "label": "Achilles reflex",
            "aliases": [
              "Achilles",
              "Achilles reflex",
              "Achilles (S1)"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_right",
            "label": "Achilles reflex — Right",
            "aliases": [
              "Right Achilles",
              "Right Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          },
          {
            "id": "exam_neuro_reflex_achilles_left",
            "label": "Achilles reflex — Left",
            "aliases": [
              "Left Achilles",
              "Left Achilles reflex"
            ],
            "examContextOnly": true,
            "neuroScope": "reflexes"
          }
        ]
      },
      {
        "id": "data",
        "label": "Pertinent data",
        "fields": [
          {
            "id": "data_12",
            "label": "Prior records reviewed",
            "aliases": [
              "Prior records reviewed",
              "Data reviewed",
              "I have reviewed the following"
            ]
          }
        ]
      },
      {
        "id": "auth",
        "label": "Original authors / signatures / addenda",
        "fields": [
          {
            "id": "auth_0",
            "label": "Original signature information",
            "aliases": [
              "Original signature information"
            ]
          },
          {
            "id": "auth_1",
            "label": "Additional author information",
            "aliases": [
              "Additional author information"
            ]
          }
        ]
      }
    ]
  }
];root.NoteTemplates=templates;if(typeof module!=="undefined")module.exports=templates;})(typeof globalThis!=="undefined"?globalThis:this);