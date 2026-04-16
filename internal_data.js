window.INTERNAL_MODULES = {
  cardiovascular: {
    title: "Cardiovascular Module",
    description: "Core bedside cardiac and peripheral vascular examination flows.",
    exams: {
      cardiovascular_exam: {
        name: "Cardiovascular Examination",
        description: "General cardiovascular OSCE exam including inspection, volume clues, precordial findings, and bedside auscultation.",
        steps: [
          {
            title: "Inspection",
            how: [
              "Examine patient for fitness or frailty",
              "Look for any signs of **distress** including cardiac/respiratory distress, pain, anxiety",
              "**Eyes:** xanthomata, bacterial conjunctival petechiae, sunken appearance",
              "**Oral cavity:** central and peripheral cyanosis, dry/moist mucous membranes, tongue furrowing",
              "**Fingers/nails:** splinter hemorrhages, Osler nodes",
              "**Chest:** surgical scars, pacemaker, ICD",
              "**Leg:** edema, signs of **peripheral vascular disease** (see: [[Peripheral Vascular Examination|peripheral_vascular_exam]])",
              "Measure the **Jugular Venous Pressure** (see: [[JVP|jvp_exam]])"
            ],
            pearl: "A strong cardiovascular inspection is really a whole-patient scan, not just a chest exam."
          },
          {
            title: "Palpation",
            how: [
              "Assess **skin turgor** by pinching skin over sternum, forearm or hand and observing recoil",
              "Check **capillary refill** by pressing fingertip for 5 seconds and timing return of colour",
              "Assess the **apex beat** for location, amplitude, duration, and size (LADS)",
              "Palpate across the precordium for **thrills** and parasternally for **heaves**"
            ],
            pearl: "LADS is a nice compact way to force yourself to fully describe the apex beat."
          },
          {
            title: "Auscultation",
            how: [
              "Use the diaphragm of stethoscope over the **aortic, pulmonic, tricuspid, mitral** areas",
              "Identify S1, S2, extra heart sounds and murmurs (see: [[Precordial Examination|precordial_exam]])",
              "Auscultate for aortic and renal bruits (see: [[Peripheral Vascular Examination|peripheral_vascular_exam]])"
            ],
            pearl: "Keeping the valve areas in the same order every time makes heart sound interpretation much easier under pressure."
          }
        ],
        focus_points: [
          "Fitness or frailty and visible distress",
          "JVP and volume clues",
          "Apex beat using LADS",
          "Thrills, heaves, and valve auscultation",
          "Aortic and renal bruits"
        ]
      },
      peripheral_vascular_exam: {
        name: "Peripheral Vascular Examination",
        description: "Focused arterial and venous limb assessment including pulses, bruits, edema, and classic vascular maneuvers.",
        steps: [
          {
            title: "Inspection",
            how: [
              "Expose both lower limbs and compare for **symmetry, swelling**",
              "Inspect for changes in **colour** (pallor, cyanosis, erythema)",
              "Look for ulcers, scars, varicosities",
              "Assess for trophic skin changes"
            ],
            pearl: "Side-to-side comparison is the fastest way to spot vascular asymmetry."
          },
          {
            title: "Palpation",
            how: [
              "Assess for **coolness** in temperature from thigh to foot using dorsal side of hand/fingers",
              "Palpate the following **pulses** bilaterally: **femoral, popliteal, posterior tibial, dorsalis pedis**",
              "Check **capillary refill** by pressing and releasing on the hallux/big toe nail, noting the time of return in colour",
              "Press thumb into patient’s shin for at least 10 seconds then release, checking for thumb-print impression (pitting edema)"
            ],
            pearl: "Temperature gradient, pulses, refill, and pitting edema together tell a much better vascular story than any one finding alone."
          },
          {
            title: "Auscultation",
            how: [
              "**Aortic bruit:** Just above the umbilicus in the midline",
              "**Renal bruit:** A few cm above the umbilicus and slightly left/right",
              "**Femoral bruit:** Mid-inguinal area (between ASIS and pubic symphysis)"
            ],
            pearl: "Naming the exact bruit locations makes the exam feel much more deliberate."
          },
          {
            title: "Special Maneuvers",
            groups: [
              {
                heading: "Pallor on elevation (part 1)",
                how: [
                  "Position patient supine, elevate patient’s legs and hold for 20 seconds",
                  "**Finding:** Significant pallor suggests arterial insufficiency"
                ]
              },
              {
                heading: "Rubor on dependency (part 2)",
                how: [
                  "After elevation, swing leg to the side of the bed and leave to hang",
                  "Without insufficiency, expect colour to return in <10 seconds and superficial veins in 15 seconds",
                  "**Finding:** Significant redness suggests severe arterial insufficiency"
                ]
              },
              {
                heading: "Trendelenburg Test",
                how: [
                  "Elevate the leg and apply a tourniquet to the upper thigh",
                  "Ask the patient to stand and observe venous filling",
                  "Release the tourniquet then again assess filling",
                  "**Finding:** Rapid filling of leg suggests incompetent venous valves"
                ]
              },
              {
                heading: "Allen’s Test",
                how: [
                  "Ask patient to voluntarily clench their fist",
                  "Occlude both the radial and ulnar artery using one hand each",
                  "Ask patient to unclench fist, then release the ulnar artery",
                  "Observe time for return of colour",
                  "**Finding:** Return of colour >15 seconds suggests poor arterial flow"
                ]
              }
            ],
            pearl: "These special maneuvers are all about provoking a visual response, so take your time and actually watch the colour change."
          }
        ],
        focus_points: [
          "Colour and trophic skin changes",
          "Temperature and pulse symmetry",
          "Bruits and edema",
          "Pallor on elevation / rubor on dependency",
          "Trendelenburg and Allen’s maneuvers"
        ]
      },
      volume_status_exam: {
        name: "Volume Status Examination",
        description: "Focused bedside volume assessment using inspection, orthostatics, turgor, pulses, and JVP.",
        steps: [
          {
            title: "Inspection",
            how: [
              "Inspect **eyes** for sunken appearance",
              "Assess **mucous membranes** (dry vs moist)",
              "Inspect **oral cavity** for central cyanosis and furrowing of tongue",
              "Measure the **Jugular Venous Pressure** (see: [[JVP|jvp_exam]])"
            ],
            pearl: "Volume status often declares itself in the face and mouth before it does anywhere else."
          },
          {
            title: "Vitals",
            how: [
              "Perform **orthostatic vitals** (BP and HR)",
              "Measure supine, wait 1 minute, then measure standing"
            ],
            pearl: "sBP change of ≥20, HR change of ≥30, and severe dizziness are indicative of low volume status."
          },
          {
            title: "Palpation",
            how: [
              "Assess **skin turgor** by pinching skin over sternum, forearm or hand (ineffective for elderly) and observing recoil",
              "Check **capillary refill**  by applying pressure to fingertip for 5 seconds and timing return of colour",
              "Palpate the **peripheral pulses** at the **carotid, radial, dorsalis pedis, posterior tibial arteries**",
              "Lightly feel the axilla to assess dryness"
            ],
            pearl: "No single sign wins on its own; the exam is strongest when several low-volume clues line up together."
          }
        ],
        focus_points: [
          "Sunken appearance and dry mucous membranes",
          "Orthostatic vitals",
          "Skin turgor and capillary refill",
          "Peripheral pulses",
          "JVP as a volume clue"
        ]
      },
      precordial_exam: {
        name: "Precordial Examination",
        description: "Focused inspection, palpation, and auscultation of the precordium with core murmur and extra heart sound patterns.",
        steps: [
          {
            title: "Inspection",
            how: [
              "Expose the **chest** and inspect for scars (sternotomy, pacemaker/ICD)",
              "Observe for **visible pulsations** above the areas corresponding to each valve or point of maximal impulse/apex beat"
            ],
            pearl: "Visible pulsations or a displaced apex beat suggest underlying pathology."
          },
          {
            title: "Palpation",
            how: [
              "Locate the **apex beat** at the 5th intercostal space, midclavicular line using finger pads",
              "Assess the apex beat for location, amplitude, duration, and size (LADS)",
              "Palpate across the precordium for **thrills/vibrations**",
              "Palpate along the left sternal border for **parasternal heaves**"
            ],
            pearl: "A displaced or sustained apex beat suggests ventricular enlargement or hypertrophy."
          },
          {
            title: "Auscultation",
            how: [
              "Use the diaphragm of stethoscope over the **aortic, pulmonic, tricuspid, mitral areas**",
              "Identify **S1** (louder over tricuspid/mitral valves) and **S2** (louder over aortic/pulmonic valves) noting intensity and splitting",
              "Position patient in **left lateral decubitus** and use bell to listen for **S3 and S4 at the apex**"
            ],
            pearl: "A left lateral position makes low-pitched apical sounds much easier to appreciate."
          },
          {
            title: "Murmurs and Extra Heart Sounds",
            how: [
              "**Aortic Stenosis:** Crescendo-decrescendo systolic murmur at right upper sternal border radiating to carotids, pulsus parvus et tardus",
              "**Aortic Regurgitation:** Early diastolic decrescendo murmur best heard at left sternal border, water-hammer pulse",
              "**Mitral Stenosis:** Diastolic rumbling murmur best heard at apex, opening snap after S2",
              "**Mitral Regurgitation:** Pansystolic murmur best heard at apex radiating to axilla",
              "**S3** Early diastolic sound associated with volume overload or heart failure",
              "**S4** Late diastolic sound associated with a stiff, non-compliant ventricle"
            ],
            pearl: "The simplest way to remember these is by timing first, then location, then radiation."
          }
        ],
        focus_points: [
          "Scars and visible pulsations",
          "Apex beat using LADS",
          "Thrills and parasternal heaves",
          "S1, S2, S3, and S4",
          "Classic valve murmur patterns"
        ]
      },
      jvp_exam: {
        name: "JVP",
        description: "Focused jugular venous pressure assessment with abdominojugular reflux.",
        steps: [
          {
            title: "Jugular Venous Pressure",
            how: [
              "Position patient supine at **35-40 degrees incline**",
              "Stand on the **right** side of the patient, **turn patient’s head slightly left**",
              "Use **tangential lighting** (i.e. flash light parallel to neck surface) and identify the **internal jugular vein** between the two sternocleidomastoid heads",
              "Measure the JVP at end-expiration",
              "**Normal JVP is 2-4 cm above the sternal angle**"
            ],
            pearl: "JVP is easier when you deliberately use tangential light and take a second to distinguish the internal jugular from the carotid."
          },
          {
            title: "Special Maneuver: Abdominojugular Reflux",
            how: [
              "Apply firm pressure using hands over the **right upper quadrant of abdomen** for 15-30 seconds",
              "Observe the **rise in JVP** due to increased venous return",
              "Note the **time taken** for JVP to fall back to baseline, if any",
              "Normal JVP will fall within **10 seconds** of pressure, abnormal JVP will remain elevated until pressure is released"
            ],
            pearl: "If the column stays up while you hold pressure, that is the clinically important abnormal part."
          }
        ],
        focus_points: [
          "Patient angle and lighting",
          "Internal jugular identification",
          "End-expiratory measurement",
          "Normal height above sternal angle",
          "Abdominojugular reflux response"
        ]
      }
    }
  },
  respiratory: {
    title: "Respiratory Module",
    description: "Background anatomy, the core respiratory exam, and special OSCE case patterns.",
    exams: {
      respiratory_background: {
        name: "Background",
        description: "High-yield respiratory anatomy and landmark review for exam localization.",
        anatomy_landmarks: [
          {
            title: "Lung Lobes, Apex, and Base",
            how: [
              "**RIGHT LUNG:** 3 Lobes – RUL, RML, RLL vs. **LEFT LUNG:** 2 Lobes – LUL, LLL",
              "**Lung apex:** 2.5 cm superior to clavicle vs. **Lung base:** Rests on diaphragm"
            ],
            pearl: "Use these landmarks to map exam findings to the correct lobe instead of keeping them generic."
          },
          {
            title: "Oblique Fissure",
            how: [
              "**Oblique fissure:** Starts at T3 on posterior and divides the ULs and LLs",
              "Travels to 5th rib mid-axillary line (along scapula border) and then travels along the 6th rib mid-clavicular line"
            ],
            pearl: "This is the key fissure to picture when you are localizing posterior findings."
          },
          {
            title: "Horizontal Fissure and Right Middle Lobe",
            how: [
              "**Horizontal fissure:** Divides RUL and RML on anterior",
              "Horizontal fissure intersects with Oblique fissure at R 5th rib mid-axillary line",
              "**RML:** approximated anteriorly between the 4th and 6th intercostals (medial to the mid clavicular line)"
            ],
            pearl: "The right middle lobe is mostly an anterior exam problem, so do not rely only on posterior auscultation."
          }
        ],
        focus_points: [
          "Right versus left lung lobe count",
          "Apex and base landmarks",
          "Oblique fissure surface course",
          "Horizontal fissure on the right",
          "Anterior approximation of the right middle lobe"
        ]
      },
      respiratory_exam: {
        name: "Respiratory Examination",
        description: "Core respiratory OSCE sequence using inspection, palpation, percussion, and auscultation.",
        steps: [
          {
            title: "Vitals",
            how: [
              "Blood pressure",
              "Heart rate",
              "Respiratory rate",
              "Oxygen saturation",
              "Temperature"
            ],
            pearl: "Always start the respiratory exam with the vitals first so you know how sick the patient is."
          },
          {
            title: "Inspection",
            how: [
              "**General appearance:** LOC, speech, posture, diaphoresis, muscle wasting and body habitus",
              "**Respiratory status:** rate (tachy/bradypnea), rhythm (Apneas, Cheyne-Stokes, Kussmaul’s), accessory muscle use (SCM, scalenes), intercostal indrawing, and paradoxical ('see-saw') breathing",
              "**Cyanosis:** Peripheral (lips) vs central (buccal mucosa)",
              "**Head and neck:** Tracheal deviations, lymph nodes, allergic rhinitis signs etc.",
              "**Deformities:** Chest wall (scars, pectus excavatum/carinatum, barrel chest) and spine (scoliosis or kyphosis)",
              "**Clubbing of Digits:** Loss of diamond-shape window (Schamroth) when fingers opposed"
            ],
            pearl: "Do not rush inspection. A lot of the respiratory differential is visible before you even touch the patient."
          },
          {
            title: "Palpation",
            how: [
              "**Trachea:** assess for midline deviations",
              "**Lymphadenopathy**",
              "**Chest expansion:** palms placed at 10th rib level, patient takes deep breath in and looking for 'equal and bilateral chest expansion'",
              "**Tactile fremitus (TF):** palpate vibrations as patient says '99'",
              "↑TF = consolidation vs ↓TF = pleural effusion or pneumothorax",
              "Compare both sides (R vs L) back and forth",
              "Assess 4 areas posteriorly and 3 anteriorly"
            ],
            pearl: "Fremitus is most useful when you compare both sides in the same sequence."
          },
          {
            title: "Percussion",
            how: [
              "Place hyperextended middle finger of one hand firmly on patient’s body surface and tap the distal phalanx with the other middle finger (oscillate wrist to generate tap force)",
              "**Resonance** = normal lungs (filled w/ air)",
              "**Hyperresonance** = Pneumothorax or emphysema",
              "**Dullness** = Consolidation or pleural effusion",
              "Compare both sides (R vs L) back and forth",
              "Percuss 4 – 5 levels, in the intercostal spaces (don’t percuss the ribs themselves)",
              "**Special Percussion Test - Diaphragmatic Excursion:** W/ patient in upright sitting position, percuss chest downward until resonance becomes dullness (~ T10, diaphragm); Ask patient to exhale then inhale – percuss to diaphragm in each case",
              "**Normal finding:** On end-inspiration, diaphragm moves down 1-2 intercostal spaces (5-6 cm)"
            ],
            pearl: "Percuss the intercostal spaces, not the ribs, and keep the right-vs-left comparison rhythm consistent."
          },
          {
            title: "Auscultation",
            how: [
              "**Appropriate position:** upright sitting position (also can lean forward slightly)",
              "**Appropriate draping:** Gown open to expose back",
              "**Technique:** Listen w/ stethoscope diaphragm on patient’s chest, as patient takes deep breath in and out through MOUTH",
              "Vesicular breath sounds = normal",
              "Bronchial breath sounds = consolidation (note: normal at larger airways)",
              "Decreased air entry = pleural effusion or pneumothorax",
              "Fine crackles (pneumonia or pul. edema or pul. fibrosis) vs Course crackles (pneumonia)",
              "Expiatory wheeze (COPD or asthma) vs inspiratory stridor (Upper airway obstruction)",
              "Ronchi = reactive airway disease",
              "Compare both sides (R vs L) back and forth",
              "**Auscultate 5 levels (posteriorly AND anteriorly)**",
              "**Special tests for consolidation – Egophony:** Auscultate as patient says 'EEE'; sounds like 'AAA' = may indicate consolidation"
            ],
            pearl: "Your auscultation only becomes high-yield if you compare side to side and relate it back to percussion and palpation."
          }
        ],
        focus_points: [
          "Respiratory distress signs",
          "Tracheal position",
          "Chest expansion symmetry",
          "Tactile fremitus changes",
          "Percussion note changes",
          "Breath sounds and added sounds"
        ]
      },
      respiratory_case_patterns: {
        name: "Special Respiratory OSCE Cases",
        description: "High-yield disease pattern review based directly on Hannah’s respiratory OSCE notes.",
        case_patterns: [
          {
            title: "COPD",
            how: [
              "**Vitals:** ↓O2 sat (hypoxic), ↑HR/RR (tachycardia/pnea) +/- fever",
              "**Inspection:** May observe signs of resp distress (nasal flaring, tripoding, intercostal indrawing, SCM and scalene use etc.) muscle wasting, cyanosis, and increased AP diameter of chest (barrel chest)",
              "**Palpation:** -",
              "**Percussion:** Hyperresonance",
              "**Auscultation:** decreased breath sounds, wheeze, crackles, rhonchi"
            ],
            pearl: "Think hyperinflation plus wheeze and reduced air entry."
          },
          {
            title: "Tuberculosis",
            how: [
              "**Vitals:** Fever!!!",
              "**Inspection:** May observe signs of resp distress (nasal flaring, tripoding, intercostal indrawing, SCM and scalene use etc.) muscle wasting",
              "**Palpation:** lymphadenopathy (cervical and axillary nodes)",
              "**Percussion:** Apices, chest (may be pleural effusions)",
              "**Auscultation:** -",
              "**Extra:** Skin (erythema nodosum)"
            ],
            pearl: "The pattern is fever plus apical disease and lymph nodes."
          },
          {
            title: "Pneumothorax",
            how: [
              "**Vitals:** ↓O2 sat (hypoxic), ↑HR/RR (tachycardia/pnea) ↓BP (tension pneumo)",
              "**Inspection:** May observe signs of resp distress (nasal flaring, tripoding, intercostal indrawing, SCM and scalene use etc.), cyanosis",
              "**Palpation:** Tracheal deviation (away from tension pneumo), ↓TF",
              "**Percussion:** Hyperresonance (on impacted side)",
              "**Auscultation:** decreased breath sounds on impacted side",
              "**Extra:** Skin (erythema nodosum)"
            ],
            pearl: "This is the classic high-yield pattern of tracheal shift, reduced fremitus, hyperresonance, and decreased air entry."
          },
          {
            title: "Pancoast Tumour",
            how: [
              "**Vitals:** +/- fever",
              "**Inspection:** Horner’s syndrome (unilateral anhidrosis, miosis, ptosis), cachexia, clubbing",
              "**Palpation:** lymphadenopathy (cervical)",
              "**Percussion:** Apex (near clavicle), chest, diaphragmatic movement (assess phrenic nerve func.)",
              "**Auscultation:** -",
              "**Extra:** Chest wall erythema"
            ],
            pearl: "Apex findings plus Horner syndrome should make you think Pancoast early."
          }
        ],
        focus_points: [
          "Pattern recognition after the general exam",
          "Vitals + inspection + palpation + percussion + auscultation",
          "Match the signs to the diagnosis quickly",
          "Look for high-yield clues like Horner syndrome, lymphadenopathy, or erythema nodosum"
        ]
      }
    }
  },
  gastrointestinal: {
    title: "GI Module",
    description: "Abdominal and gastrointestinal examination stations for internal medicine and OSCE prep.",
    exams: {
      abdominal_exam: {
        name: "Abdominal Examination",
        description: "Systematic abdominal exam emphasizing inspection, palpation, percussion, and organomegaly.",
        steps: [
          {
            title: "Inspection",
            how: [
              "Inspect from the end of the bed for pain, distension, scars, drains, or jaundice.",
              "Look closely at the abdomen for contour, movement, dilated veins, and visible pulsations."
            ],
            pearl: "A quiet inspection phase makes the rest of the exam safer and more accurate."
          },
          {
            title: "Light and Deep Palpation",
            how: [
              "Ask about pain and palpate away from the painful area first.",
              "Perform light then deep palpation in all quadrants.",
              "Assess for guarding, masses, or tenderness."
            ],
            pearl: "Talking the patient through palpation can reduce guarding and help you distinguish true peritonism."
          },
          {
            title: "Organ Palpation",
            how: [
              "Palpate for liver edge and splenic enlargement with inspiration.",
              "Ballot the kidneys if appropriate and check for aortic expansion."
            ],
            pearl: "Say clearly what you are looking for: organomegaly, ascites, or mass."
          },
          {
            title: "Percussion and Auscultation",
            how: [
              "Percuss for liver span and splenic dullness where relevant.",
              "Assess shifting dullness if ascites is suspected.",
              "Auscultate for bowel sounds and bruits if indicated."
            ],
            pearl: "Ascites maneuvers are worth mentioning even if you would not perform every one in a short station."
          },
          {
            title: "Completion",
            how: [
              "State that you would examine the hands, eyes, lymph nodes, and legs for GI stigmata.",
              "Offer a rectal exam or urine dip only if clinically indicated."
            ],
            pearl: "The strongest OSCE finish is a concise summary plus sensible completion steps."
          }
        ],
        focus_points: [
          "Abdominal distension and scars",
          "Tenderness and guarding",
          "Hepatomegaly or splenomegaly",
          "Ascites signs",
          "GI stigmata to complete"
        ]
      }
    }
  },
  neurology: {
    title: "Neurology Module",
    description: "High-yield bedside neurologic screening and focused motor exam content.",
    exams: {
      motor_exam: {
        name: "Upper and Lower Limb Motor Examination",
        description: "Motor-focused neurologic exam covering bulk, tone, power, reflexes, and coordination.",
        steps: [
          {
            title: "Inspection and Bulk",
            how: [
              "Inspect posture, asymmetry, fasciculations, tremor, and muscle wasting.",
              "Compare both sides before touching the patient."
            ],
            pearl: "The diagnosis often starts before you ask the patient to move."
          },
          {
            title: "Tone",
            how: [
              "Explain that you are checking relaxation, then move each joint passively.",
              "Assess for spasticity, rigidity, or flaccidity."
            ],
            pearl: "Tone is easiest to judge when the patient is relaxed and not anticipating your movement."
          },
          {
            title: "Power",
            how: [
              "Test key muscle groups systematically and compare sides.",
              "Grade strength clearly and mention pain-limited effort if present."
            ],
            pearl: "Consistency matters more than fancy maneuvers under OSCE timing."
          },
          {
            title: "Reflexes and Coordination",
            how: [
              "Check relevant tendon reflexes and plantar response when indicated.",
              "Assess finger-nose or heel-shin depending on the station."
            ],
            pearl: "Reflexes tell the examiner you can localize, not just list findings."
          },
          {
            title: "Gait and Completion",
            how: [
              "State that you would assess gait, sensation, and cranial nerves as needed.",
              "Summarize whether the pattern looks upper motor neuron, lower motor neuron, cerebellar, or normal."
            ],
            pearl: "A brief localization statement can elevate the whole performance."
          }
        ],
        focus_points: [
          "Bulk and fasciculations",
          "Tone pattern",
          "Power grading",
          "Reflexes and plantar response",
          "Localization summary"
        ]
      }
    }
  },
  psychiatry: {
    title: "Psychiatry Module",
    description: "Foundational psychiatric interview and mental status examination stations.",
    exams: {
      mental_status_exam: {
        name: "Mental Status Examination",
        description: "Structured psychiatric assessment covering appearance, behaviour, speech, mood, thought, perception, cognition, and insight.",
        steps: [
          {
            title: "Appearance and Behaviour",
            how: [
              "Observe grooming, dress, eye contact, psychomotor activity, and rapport from the start.",
              "Comment on agitation, withdrawal, guardedness, or unusual mannerisms."
            ],
            pearl: "The MSE starts the moment you meet the patient, not after formal questions begin."
          },
          {
            title: "Speech and Mood",
            how: [
              "Assess rate, volume, fluency, and coherence of speech.",
              "Ask directly about mood and compare it with observed affect."
            ],
            pearl: "Separating subjective mood from objective affect is classic OSCE territory."
          },
          {
            title: "Thought Form and Content",
            how: [
              "Explore whether thoughts are logical, goal-directed, slowed, or tangential.",
              "Ask about delusions, guilt, hopelessness, suicidal ideation, and obsessional thoughts."
            ],
            pearl: "Use calm, direct language for sensitive risk questions."
          },
          {
            title: "Perception, Cognition, and Insight",
            how: [
              "Screen for hallucinations or perceptual disturbance.",
              "Assess orientation, attention, memory, and concentration where relevant.",
              "Ask whether the patient feels unwell and understands the need for help."
            ],
            pearl: "Insight is often nuanced; describe it rather than forcing it into all-or-none language."
          }
        ],
        focus_points: [
          "Appearance and psychomotor state",
          "Speech pattern",
          "Mood vs affect",
          "Thought form and content",
          "Perception, cognition, and insight"
        ]
      },
      mood_history: {
        name: "Focused Mood History",
        description: "Targeted psychiatry history station for depression, mania, and risk screening.",
        steps: [
          {
            title: "Presenting Symptoms",
            how: [
              "Start with the patient's main concern and timeline of mood change.",
              "Clarify low mood, anhedonia, sleep, appetite, energy, concentration, and guilt."
            ],
            pearl: "A good focused history feels conversational, but still covers the core symptom clusters."
          },
          {
            title: "Risk Assessment",
            how: [
              "Ask directly about self-harm thoughts, suicidal ideation, plans, and protective factors.",
              "Assess risk to others if clinically relevant."
            ],
            pearl: "Clear and nonjudgmental phrasing is more important than sounding elegant."
          },
          {
            title: "Context and Supports",
            how: [
              "Explore stressors, psychiatric history, medications, substance use, and social supports.",
              "Summarize your sense of risk and what help the patient has around them."
            ],
            pearl: "OSCE stations often distinguish strong candidates by how well they explore supports and safety."
          }
        ],
        focus_points: [
          "Depressive symptom review",
          "Mania/psychosis screen if relevant",
          "Direct suicide risk questions",
          "Supports, substances, and function"
        ]
      }
    }
  },
  history_taking: {
    title: "History Taking Module",
    description: "Core structure for OSCE history stations and communication-heavy encounters.",
    exams: {
      general_history: {
        name: "General History Taking",
        description: "Framework for a complete adult medical history in an OSCE station.",
        steps: [
          {
            title: "Opening and Presenting Complaint",
            how: [
              "Introduce yourself, confirm patient identity, and gain consent to take a history.",
              "Start open-ended, then clarify the presenting complaint in the patient's own words."
            ],
            pearl: "A calm and confident opening sets the tone for the whole station."
          },
          {
            title: "History of Present Illness",
            how: [
              "Use a structured symptom framework such as SOCRATES or onset-course-impact.",
              "Clarify associated symptoms, red flags, and functional effect."
            ],
            pearl: "Examiners reward structure, but patients still need space to tell their story."
          },
          {
            title: "Background History",
            how: [
              "Ask about past medical history, medications, allergies, and relevant family history.",
              "Screen social history, occupation, smoking, alcohol, and baseline supports."
            ],
            pearl: "Social context is often where the OSCE station gets its nuance."
          },
          {
            title: "Systems Review and Close",
            how: [
              "Perform a focused review of systems based on the complaint.",
              "Summarize the history back to the patient and check for missing concerns."
            ],
            pearl: "A brief summary shows you listened and helps you catch missing details."
          }
        ],
        focus_points: [
          "Open-ended start",
          "Clear HPI structure",
          "Relevant background history",
          "Focused systems review",
          "Strong closing summary"
        ]
      },
      chest_pain_history: {
        name: "Focused Chest Pain History",
        description: "High-yield focused history for chest pain OSCE stations with safety-netting and red flags.",
        steps: [
          {
            title: "Symptom Analysis",
            how: [
              "Characterize chest pain using onset, provocation, quality, radiation, severity, and timing.",
              "Ask about exertional pattern and associated symptoms such as dyspnea, diaphoresis, nausea, or palpitations."
            ],
            pearl: "This is where structure really helps you avoid missing dangerous causes."
          },
          {
            title: "Risk and Context",
            how: [
              "Explore cardiovascular risk factors, previous episodes, medications, and family history.",
              "Ask about PE and reflux/musculoskeletal clues when relevant."
            ],
            pearl: "A focused differential comes from pairing symptom character with risk context."
          },
          {
            title: "Close and Summarize",
            how: [
              "Summarize back the key features and mention immediate concerns if the story sounds high risk.",
              "Check for the patient's ideas, concerns, and expectations before closing."
            ],
            pearl: "Strong summaries make examiners trust your clinical reasoning."
          }
        ],
        focus_points: [
          "SOCRATES-style structure",
          "Associated red-flag symptoms",
          "Cardiac risk factors",
          "Clear summary and next-step framing"
        ]
      }
    }
  }
};
