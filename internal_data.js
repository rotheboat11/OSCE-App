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
            pearl: "An orthostatic BP drop supports orthostatic hypotension; a marked compensatory tachycardia can point toward volume depletion, but interpret it with the whole clinical picture."
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
              "Rhonchi = reactive airway disease",
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
              "**Extra:** Subcutaneous emphysema may be present"
            ],
            pearl: "Think decreased breath sounds, reduced fremitus, and hyperresonance first; tracheal shift points more toward tension physiology."
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
    title: "Gastroenterology Module",
    description: "Abdominal and GI examination stations structured from the GI clinical exam PDF for OSCE prep.",
    exams: {
      general_abdominal_exam: {
        name: "General Abdominal Exam",
        description: "Systematic abdominal exam covering inspection, palpation, percussion, auscultation, and Murphy's sign.",
        steps: [
          {
            title: "Inspection",
            how: [
              "**Abdomen:** masses, scars, lesions, hernias, bulging flanks",
              "**Skin:** striae, Grey Turner’s Sign, Cullen’s Sign"
            ],
            pearl: "Keep inspection broad at first, then narrow in on scars, contour changes, and skin clues."
          },
          {
            title: "Palpation",
            groups: [
              {
                heading: "General Abdomen",
                how: [
                  "Divide abdomen into **4 equal quadrants**",
                  "Palpate lightly and deeply in each region, observe for pain or discomfort",
                  "If patient reports abdominal pain in a specific area, palpate that area last",
                  "Observe for tenderness or guarding in each region"
                ]
              },
              {
                heading: "Gallbladder (Murphy’s Sign)",
                how: [
                  "Firmly palpate the point of intersection between the **right costal margin** and **right midclavicular line**",
                  "While maintaining palpation, ask patient for a **deep breath**",
                  "**Positive sign:** patient stops breath due to tenderness suggesting **cholecystitis**"
                ]
              }
            ],
            pearl: "Palpate the painful area last, otherwise the rest of the abdominal exam becomes much harder to interpret."
          },
          {
            title: "Percussion",
            how: [
              "Percuss around the **umbilicus** and **central abdomen**",
              "**Resonance:** possible bowel obstruction",
              "**Dullness:** possible solid mass"
            ],
            pearl: "The PDF keeps percussion simple here: central percussion first, then interpret resonance versus dullness."
          },
          {
            title: "Auscultation",
            how: [
              "**Bruit:** abdominal aorta, renal artery, iliac artery",
              "**Bowel sounds:**",
              "**Absent sounds:** paralytic ileus, late obstruction, peritonitis",
              "**Hyperactive sounds:** inflammation, diarrhea, early obstruction"
            ],
            pearl: "Name the vascular bruits explicitly. It makes the auscultation piece sound much more deliberate."
          }
        ],
        focus_points: [
          "Masses, scars, lesions, hernias, and bulging flanks",
          "Tenderness and guarding",
          "Murphy’s sign",
          "Central percussion findings",
          "Bruits and bowel sound patterns"
        ]
      },
      liver_exam: {
        name: "Liver Exam",
        description: "Focused liver exam using inspection, liver span percussion, palpation, and special maneuvers for ascites.",
        steps: [
          {
            title: "Inspection",
            how: [
              "**Head:** jaundice, parotid/lacrimal gland enlargement, temporal muscle wasting",
              "**Abdomen:** masses, scars, bulging flanks, hepatosplenomegaly, ascites",
              "**Hand:** asterixis, palmar erythema, thenar atrophy, clubbing, Dupuytren’s contractures",
              "**Nails:** Terry’s nails, leukonychia, half/half nail",
              "**Other:** edema, caput medusae, spider nevi, gynecomastia, testicular atrophy"
            ],
            pearl: "This station is really about recognizing chronic liver disease stigmata as much as feeling the liver itself."
          },
          {
            title: "Percussion (Liver Span)",
            how: [
              "Through the **midclavicular line**, percuss downwards from the chest then percuss upwards from the abdomen",
              "Note the **upper and lower borders** where dullness begins, representing the **liver span**",
              "**Normal:** 6-12 cm"
            ],
            pearl: "Say the upper and lower borders out loud so the examiner hears that you are measuring span rather than just tapping."
          },
          {
            title: "Palpation",
            how: [
              "Starting in the **right lower quadrant**, palpate upwards along the **midclavicular line**",
              "Ask patient to **inspire deeply**",
              "Feel for an organ edge as it descends with inspiration"
            ],
            pearl: "The PDF sequence is RLQ upward palpation with deep inspiration, which keeps your liver palpation method consistent."
          }
        ],
        special_tests_title: "Special Maneuvers for Ascites",
        special_tests: [
          {
            title: "Bulging Flanks",
            how: [
              "Position patient **supine**, observe flanks from the **foot of the bed**",
              "**Positive:** presence of bulging flanks"
            ],
            pearl: "Look from the foot of the bed so the contour change is easier to appreciate."
          },
          {
            title: "Fluid Wave Test",
            how: [
              "While supine, ask patient to firmly press down the **midline of the centre abdomen** using the edge of their hand",
              "Place one hand on each flank",
              "Tap one side while feeling the **opposite flank** with the other hand",
              "**Positive:** vibration is felt on opposite side"
            ],
            pearl: "The midline hand helps stop the wave from simply transmitting through the abdominal wall."
          },
          {
            title: "Shifting Dullness",
            how: [
              "While supine, percuss from **umbilicus outwards to right flank** and note point of transition from **tympany to dullness**",
              "Position patient in **right lateral decubitus**, repeat percussion from umbilicus to right flank and note point of transition",
              "**Positive:** area of dullness shifts towards midline due to fluid displacing organs"
            ],
            pearl: "Marking the transition mentally before turning the patient makes the shift much easier to judge."
          }
        ],
        focus_points: [
          "Liver disease stigmata on inspection",
          "Liver span in the midclavicular line",
          "RLQ-to-RUQ palpation technique",
          "Bulging flanks",
          "Fluid wave and shifting dullness"
        ]
      },
      spleen_exam: {
        name: "Spleen Exam",
        description: "Focused splenic exam built around Castell’s sign, Traube’s space percussion, and palpation for splenomegaly.",
        steps: [
          {
            title: "Percussion",
            groups: [
              {
                heading: "Castell’s Sign",
                how: [
                  "At the **left anterior axillary line**, percuss the **lowest intercostal space** during exhalation",
                  "Ask patient to **deeply inhale**, then percuss the same space",
                  "**Positive:** dullness during full inspiration suggests **splenomegaly**"
                ]
              },
              {
                heading: "Traube’s Space",
                how: [
                  "**Boundaries of Traube’s space**",
                  "**Superior:** 6th rib",
                  "**Inferior:** left costal margin",
                  "**Lateral:** anterior axillary line",
                  "Percuss in **Traube’s space**",
                  "**Positive:** dullness suggests **splenomegaly**"
                ]
              }
            ],
            pearl: "These percussion maneuvers are both really screening for splenic dullness, just from two slightly different approaches."
          },
          {
            title: "Palpation",
            how: [
              "Slowly palpate from **RLQ to LUQ** while patient **inhales and exhales deeply**",
              "Attempt to feel the **spleen edge during inspiration**",
              "**Positive:** spleen is palpable suggesting **splenomegaly**"
            ],
            pearl: "The diagonal RLQ-to-LUQ sweep gives you the best chance of catching a descending spleen edge."
          }
        ],
        focus_points: [
          "Castell’s sign",
          "Traube’s space boundaries",
          "Dullness suggesting splenomegaly",
          "RLQ-to-LUQ palpation",
          "Spleen edge on inspiration"
        ]
      },
      gi_causes_of_pain: {
        name: "Special - GI Causes of Pain",
        description: "Disease-focused GI pain patterns with one expandable section per condition, following the GI PDF.",
        steps: [
          {
            title: "Approach",
            how: [
              "Use the general abdominal exam framework first, then add condition-specific provocation maneuvers",
              "Look for whether the patient appears generally **unwell**, has **guarding/rigidity**, or localizes pain to a specific region"
            ],
            pearl: "This page works best after you have already anchored yourself with the basic abdominal exam."
          }
        ],
        case_patterns_title: "GI Causes of Pain",
        case_patterns: [
          {
            title: "Peritonitis",
            how: [
              "Patients are generally **unwell** and in visible discomfort",
              "**Tenderness:** light percussion or palpation of abdomen causes pain",
              "**Rebound Tenderness:** firmly palpating abdomen then quickly releasing causes extreme pain",
              "**Shake Tenderness:** shaking bed or stretcher causes pain"
            ],
            pearl: "Peritonitis is a whole-abdomen irritation pattern, so even very light provocation may hurt."
          },
          {
            title: "Appendicitis",
            how: [
              "**Guarding and rigidity** in abdomen",
              "**McBurney’s point** (1/3 from ASIS to umbilicus) is tender to palpation and when patient is asked to **cough**",
              "**Rovsing’s Sign:** palpating in the **LLQ** causes pain in the **RLQ**",
              "**Psoas Sign:** position patient in **left lateral decubitus**; extending right hip causes pain",
              "**Obturator Sign:** position patient **supine**, flex both **right hip** and **right knee**; internally rotating at the hip causes pain"
            ],
            pearl: "This is the classic localized-peritonism bundle: McBurney’s plus Rovsing’s, psoas, and obturator."
          }
        ],
        focus_points: [
          "Unwell appearance",
          "Diffuse versus localized tenderness",
          "Rebound and shake tenderness",
          "McBurney’s point",
          "Rovsing’s, psoas, and obturator signs"
        ]
      },
      non_gi_causes_of_pain: {
        name: "Special - Non-GI Causes of Pain",
        description: "Non-GI causes of abdominal pain presented as disease-specific dropdowns, matching the PDF structure.",
        steps: [
          {
            title: "Approach",
            how: [
              "When abdominal pain does not fit a primary GI source, widen the exam to **renal, pelvic, and genital** causes",
              "Use focused extension exams when suspicion is high"
            ],
            pearl: "This module is about remembering when the pain source is outside the gut, even if the complaint sounds abdominal."
          }
        ],
        case_patterns_title: "Non-GI Causes of Pain",
        case_patterns: [
          {
            title: "Pyelonephritis",
            how: [
              "**Costovertebral Angle (CVA) Tenderness:** at the CVA angle on either side, create a fist and firmly percuss the area",
              "Pain suggests **pyelonephritis**, and can also suggest **perinephric abscess, nephrolithiasis, or muscle pain**"
            ],
            pearl: "CVA tenderness is fast to test and immediately shifts your thinking toward renal causes."
          },
          {
            title: "Pelvic Inflammatory Disease",
            how: [
              "Perform **speculum/bimanual exam** when suspected"
            ],
            pearl: "The key move here is knowing when to extend beyond the abdominal exam."
          },
          {
            title: "Testicular Torsion / STD",
            how: [
              "Perform **genital exam** when suspected"
            ],
            pearl: "Abdominal pain can still be a genital emergency, so keep torsion on the table when the story fits."
          }
        ],
        focus_points: [
          "CVA tenderness",
          "Renal versus pelvic versus genital source",
          "Speculum and bimanual extension when needed",
          "Genital exam when suspected",
          "Remember torsion in abdominal pain presentations"
        ]
      }
    }
  },
  neurology: {
    title: "Neurology Module",
    description: "General neuro screening, cranial nerves, and cerebellar coordination for OSCE prep.",
    display_order: ["submodule:general_neuro_exam", "exam:cranial_nerve_exam", "exam:cerebellar_exam"],
    exams: {
      cranial_nerve_exam: {
        name: "Cranial Nerve Exam",
        description: "CN I-XII exam with visual, ocular, facial, hearing, palate, shoulder, and tongue testing.",
        full_width_steps: true,
        steps: [
          {
            title: "Opening and Setup",
            how: [
              "Introduce yourself and sanitize your hands",
              "Explain the components of the exam: examining **CN I-XII** individually except **CN III, IV, and VI** which are examined together",
              "Vitals: **BP, HR, RR, O2 sat, temperature**",
              "Ensure the patient is draped appropriately and completely gowned"
            ],
            pearl: "For cranial nerves, a tidy setup buys you a lot of credibility before you even start testing."
          },
          {
            title: "CN I: Olfactory",
            how: [
              "Not often conducted in PSD sessions",
              "Inspect for **nose deformities**, **septum alignment**, and **rhinorrhea**",
              "Ask patient to close their eyes and **occlude one nostril**",
              "Ask patient to identify a common scent such as **cinnamon** or **coffee beans**",
              "Repeat with the other nostril"
            ],
            pearl: "This one is rarely emphasized, so a concise but correct method is enough."
          },
          {
            title: "CN II: Optic",
            groups: [
              {
                heading: "Initial Inspection",
                how: [
                  "Inspect **pupil size, shape, and symmetry**"
                ]
              },
              {
                heading: "Visual Acuity",
                how: [
                  "Use a **Rosenbaum chart** at **35 cm** or a **Snellen chart** at **6 m**",
                  "Test one eye at a time and record **OD** and **OS**",
                  "Patient can wear **corrective lenses**",
                  "**20/200 = legally blind**"
                ]
              },
              {
                heading: "Visual Fields by Confrontation",
                how: [
                  "Test each eye separately in all **4 quadrants**",
                  "Stand about **1 m** in front of the patient",
                  "Both you and the patient cover matching eyes",
                  "Hold up **1, 2, or 5 fingers** in each quadrant and ask the patient to state the number",
                  "You can bring fingers in from the outermost edge to test peripheral limits"
                ]
              },
              {
                heading: "Pupillary Light Reflex and RAPD",
                how: [
                  "Afferent limb = **CN II**, efferent limb = **CN III**",
                  "Shine a penlight to assess each pupil’s reaction",
                  "Test **RAPD** using the **swinging flashlight test**",
                  "Pupils slightly dilate or constrict less when the light swings from the unaffected eye to the affected eye in a **CN II lesion**"
                ]
              },
              {
                heading: "Accommodation and Fundoscopy",
                how: [
                  "Ask the patient to focus on your finger as you move it from distance towards the nose",
                  "Pupils should follow and constrict as the finger comes closer",
                  "For fundoscopy: dim the room, find the **red reflex**, follow it to the **optic disc**, and inspect the **disc, macula, fovea, and retinal vessels**"
                ]
              }
            ],
            pearl: "CN II is big. If time is tight, stay organized rather than rushing every subcomponent."
          },
          {
            title: "CN III, IV, VI: Oculomotor, Trochlear, Abducens",
            how: [
              "Tested **together**",
              "Inspect **pupil size, shape, symmetry, ptosis, eye position**, and **primary-position nystagmus**",
              "Ask patient to keep their head still and to report **diplopia**",
              "Test extraocular movements by drawing an **H pattern** and assess **smooth pursuit** and **range of motion**",
              "Pause at the end of lateral and vertical movements to observe for **nystagmus**",
              "For **saccades**, ask the patient to look quickly from your finger to your nose and back"
            ],
            pearl: "Move your finger slowly enough to test pursuit, then switch deliberately if you want saccades."
          },
          {
            title: "CN V: Trigeminal",
            how: [
              "Inspect for **atrophy**",
              "Test **light touch** in the **V1, V2, and V3** dermatomal areas and ask if both sides feel the same",
              "You can also test **pain** with the sharp end of a tongue depressor or pin, and **temperature** with a cold tuning fork",
              "For temporalis and masseter, ask the patient to **clench their teeth** while you palpate",
              "For pterygoids, ask the patient to open the mouth and move the jaw side to side against resistance",
              "**Corneal reflex** is not normally done in a conscious cooperative patient",
              "**Jaw jerk:** finger on chin, tap lightly with reflex hammer; jaw elevation should be minimal or absent"
            ],
            pearl: "Sensory V and motor V are both fair game, so it helps to state clearly when you are switching between them."
          },
          {
            title: "CN VII: Facial",
            how: [
              "Inspect facial expression, weakness, lacrimation, and salivation",
              "Look for widened palpebral fissures, flattened nasolabial folds, drooping mouth, or involuntary movements",
              "Ask the patient to **raise eyebrows**",
              "Ask them to **close eyes tightly** and not let you open them",
              "Ask them to **show teeth** or **bottom teeth**",
              "Ask them to **close mouth tightly** and resist opening",
              "Ask them to **puff out cheeks** and resist you popping them",
              "Taste testing exists but is unlikely to be done on OSCE"
            ],
            pearl: "You are really judging symmetry as much as strength here."
          },
          {
            title: "CN VIII: Vestibulocochlear",
            groups: [
              {
                heading: "Hearing",
                how: [
                  "For gross hearing, **whisper** or rub fingers near each ear and ask if it sounds similar on both sides",
                  "**Weber:** strike tuning fork and place it on the middle of the forehead",
                  "Normal Weber = equally loud on both sides",
                  "Conductive loss lateralizes to the **affected** ear",
                  "Sensorineural loss lateralizes to the **unaffected** ear",
                  "**Rinne:** place tuning fork on the **mastoid** until the patient can no longer hear it, then move it in front of the ipsilateral ear",
                  "Normal Rinne = **air conduction > bone conduction**",
                  "Conductive loss = **bone conduction > air conduction**"
                ]
              },
              {
                heading: "Vestibular Function",
                how: [
                  "Comment on whether you observed **nystagmus** during eye movement testing"
                ]
              }
            ],
            pearl: "Keep Weber and Rinne interpretation crisp. That is usually the part people stumble on."
          },
          {
            title: "CN IX and X: Glossopharyngeal and Vagus",
            how: [
              "Tested **together**",
              "Inspect the **uvula** for deviation; it deviates toward the **non-lesioned side**",
              "**Gag reflex** is usually only tested in unconscious patients",
              "Observe **swallowing** with a sip of water",
              "For articulation, ask the patient to say **Ka, Ka, Ka**, **Ga, Ga, Ga**, **Pa, Pa, Pa**, and **La, La, La**"
            ],
            pearl: "Speech and swallow often tell you more than a token gag reflex ever would."
          },
          {
            title: "CN XI: Spinal Accessory",
            how: [
              "Inspect **SCM** and **trapezius** for atrophy, hypertrophy, and fasciculations",
              "Ask the patient to **shrug shoulders against resistance**",
              "Ask the patient to **turn head side to side against resistance**"
            ],
            pearl: "Remember the SCM turns the head away from the side being tested."
          },
          {
            title: "CN XII: Hypoglossal",
            how: [
              "Ask the patient to **stick out their tongue** and inspect for atrophy, hypertrophy, and fasciculations",
              "Assess for **tongue deviation**; it deviates **towards the lesion**",
              "Ask the patient to press the tongue laterally against a **tongue depressor**"
            ],
            pearl: "Tongue deviation is a classic easy mark if you remember which way it goes."
          }
        ],
        focus_points: [
          "Orderly CN I-XII flow",
          "CN II visual testing",
          "Eye movements and nystagmus",
          "Facial symmetry and hearing tests",
          "Palate, shoulder, and tongue findings"
        ]
      },
      cerebellar_exam: {
        name: "Cerebellar (Coordination) Exam",
        description: "Focused cerebellar exam covering nystagmus, speech, truncal ataxia, dysdiadochokinesis, dysmetria, ataxic gait, and Romberg.",
        steps: [
          {
            title: "Nystagmus",
            how: [
              "Look for involuntary rhythmic eye movements in **horizontal, vertical, or torsional** directions",
              "Have the patient look straight ahead and inspect for nystagmus",
              "Have the patient look laterally and vertically **without fixating on a target**",
              "**Nystagmus in all directions** suggests a cerebellar issue",
              "**Vertical nystagmus** suggests a **midbrain lesion**"
            ],
            pearl: "Direction matters here. Horizontal alone is different from vertical or multi-directional nystagmus."
          },
          {
            title: "Speech and Truncal Ataxia",
            how: [
              "Listen for **staccato speech**",
              "Inspect for **swaying while sitting up** with no back support"
            ],
            pearl: "Even before limb testing, the voice and trunk can point you toward cerebellar disease."
          },
          {
            title: "Dysdiadochokinesis",
            how: [
              "Ask patient to quickly **supinate and pronate** one hand on the palm of the other hand",
              "Look for **speed, amplitude, and frequency**"
            ],
            pearl: "You are not just checking whether they can do it, but whether the rhythm stays smooth."
          },
          {
            title: "Finger to Nose (Dysmetria)",
            how: [
              "Hold your index finger far enough that the patient must fully outstretch their arm",
              "Ask patient to alternate touching your finger and their nose while you move your finger around in the same plane",
              "Assess for **tremor**: resting, action, and intention",
              "**Intention tremor** worsens as they approach your finger",
              "Assess for **accuracy**",
              "**Overshooting** your finger is classic for cerebellar ataxia"
            ],
            pearl: "This is one of the cleanest places to show intention tremor and dysmetria together."
          },
          {
            title: "Heel to Shin (Dysmetria)",
            how: [
              "Ask the patient to place their heel on the opposite knee and move it in a straight line down to the ankle",
              "Assess for **tremor**",
              "Assess for **accuracy**",
              "Assess for ability to **keep the heel on the shin**"
            ],
            pearl: "Heel-to-shin is the lower limb equivalent of finger-to-nose: smoothness and accuracy both matter."
          },
          {
            title: "Ataxic Gait and Romberg",
            how: [
              "Assess for **wide-based stance**, irregular and uncoordinated gait",
              "In cerebellar gait there is **no change when eyes are closed**",
              "For **Romberg**, ask patient to stand with feet together for at least 20 seconds with eyes open, then closed",
              "Look for unsteadiness, stepping to regain balance, or falling",
              "**Sensory (proprioceptive) ataxia** worsens only with **eyes closed**",
              "**Cerebellar ataxia** is present with **eyes open and closed**"
            ],
            pearl: "Romberg is really a proprioception test, which is why interpretation depends on what happens when the eyes close."
          }
        ],
        focus_points: [
          "Nystagmus pattern",
          "Staccato speech and truncal sway",
          "Dysdiadochokinesis",
          "Finger-to-nose and heel-to-shin",
          "Romberg interpretation"
        ]
      }
    },
    submodules: {
      general_neuro_exam: {
        title: "General Neuro Exam",
        description: "Core general neuro exam categories organized into focused study pages.",
        exams: {
          level_of_consciousness_gcs: {
            name: "Level of Consciousness (GCS)",
            description: "Focused Glasgow Coma Scale review with scoring domains and pain stimulus options.",
            steps: [
              {
                title: "Glasgow Coma Scale",
                how: [
                  "**3 domains:** eye, verbal, and motor response",
                  "Comment on **eye opening:** 1-4 points",
                  "Comment on **verbal response:** 1-5 points",
                  "Comment on **motor response:** 1-6 points",
                  "**Lowest = 3**, **highest = 15**",
                  "**Pain stimulus:** sternal rub or supraorbital pressure"
                ],
                pearl: "Keep GCS mechanical and explicit. Examiners mainly want to hear the three domains and that you can score them."
              }
            ],
            focus_points: [
              "Eye opening",
              "Verbal response",
              "Motor response",
              "Total score range",
              "Pain stimulus options"
            ]
          },
          gait_exam: {
            name: "Gait",
            description: "General gait assessment with pattern recognition for common neurologic gait abnormalities.",
            steps: [
              {
                title: "Gait Assessment",
                how: [
                  "Gait is typically the **first exam** done after laying eyes on the patient and taking the history",
                  "Have patient walk from one point to another, visualizing gait from the **front** and **behind**",
                  "Assess for **antalgia** (avoidance of a painful area), **ataxia** (incoordination), and **Trendelenburg gait** (hip drop)",
                  "Comment on **gait initiation** (hesitation or freezing), **gait speed**, **stride length**, **stride height** (high-steppage vs normal vs foot drop/drag), **leg swing** (circumduction), **wide/small-based stance**, **arm swing**, **posture** (stooped vs upright), and **turning** (steadiness, speed, turn en bloc?)",
                  "Comment on whether the patient relies on an **assistive device**"
                ],
                pearl: "A strong gait description sounds like a checklist: initiation, speed, stride, swing, base, arm swing, posture, and turning."
              }
            ],
            case_patterns_title: "Gait Patterns",
            case_patterns: [
              {
                title: "Spastic Gait",
                how: [
                  "**Scissoring gait** with thighs adducted, often hitting knees and thighs together",
                  "**Circumduction** may be present"
                ],
                pearl: "Think bilateral upper motor neuron pattern."
              },
              {
                title: "Hemiplegic Gait",
                how: [
                  "Lack of **knee flexion**",
                  "**Foot drop** leading to hip hiking and/or circumduction",
                  "Asymmetry of posture and arm swing"
                ],
                pearl: "This one reads like a one-sided spastic pattern."
              },
              {
                title: "Parkinsonian Gait",
                how: [
                  "**Shuffling** gait",
                  "**Reduced arm swing**",
                  "**Festination**",
                  "**Stooped posture**",
                  "Possible **hesitations or interruptions**",
                  "**Turn en bloc** may be present"
                ],
                pearl: "Small, fast, stooped, and stiff is the picture to keep in mind."
              },
              {
                title: "Cerebellar Ataxic Gait",
                how: [
                  "**Wide-based stance**",
                  "Irregular and uncoordinated gait"
                ],
                pearl: "This is unsteady even with eyes open."
              },
              {
                title: "Sensory Ataxic Gait",
                how: [
                  "**High-stepping** gait",
                  "Difficulty walking with **eyes closed**",
                  "Can perform **Romberg test**"
                ],
                pearl: "If closing the eyes makes it much worse, think proprioception."
              },
              {
                title: "Antalgic Gait",
                how: [
                  "Reduced **stance phase** on the side with pain"
                ],
                pearl: "This is the pain-avoidance gait."
              },
              {
                title: "Trendelenburg Gait",
                how: [
                  "**Pelvic drop** while walking"
                ],
                pearl: "Look at the pelvis, not just the feet."
              },
              {
                title: "Steppage Gait",
                how: [
                  "**High knee lift** with **foot drop**"
                ],
                pearl: "This is the classic compensation for a dragging foot."
              }
            ],
            focus_points: [
              "Initiation and speed",
              "Stride length and height",
              "Base, swing, and posture",
              "Turning",
              "Pattern recognition"
            ]
          },
          tone_exam: {
            name: "Tone",
            description: "Tone exam covering rigidity, spasticity, clonus, flaccidity, Ashworth grading, and usual spastic patterns.",
            steps: [
              {
                title: "Tone Assessment",
                how: [
                  "Have the patient fully **relax**",
                  "Pearl: move and/or shake their limb gently to assist relaxation",
                  "Bring the limb through its **range of motion (ROM)** to test **rigidity**",
                  "**Cog-wheeling:** stiffness starts and stops like a clock second hand",
                  "**Lead pipe:** stiffness through the entire ROM",
                  "**Spasticity:** stiffness invoked by **fast movements** (velocity-dependent)",
                  "Perform quick high-velocity movements and feel for a **spastic catch**",
                  "Feel for **clonus** in the dorsiflexors and count the beats",
                  "**Flaccidity:** complete loss of muscle tone, feels like dead weight and provides no resistance"
                ],
                pearl: "Move slowly first for rigidity, then quickly for spasticity. That contrast is what makes the tone exam useful."
              },
              {
                title: "Modified Ashworth Scale",
                how: [
                  "**0:** No increase in muscle tone",
                  "**1:** Slight increase with catch and release or minimal resistance at end range",
                  "**1+:** Slight increase with catch, followed by minimal resistance through less than half the range",
                  "**2:** More marked increase through most of range, but easily moved",
                  "**3:** Considerable increase; passive movement difficult",
                  "**4:** Rigid in flexion or extension"
                ],
                pearl: "If you mention Ashworth, keep it brief and practical rather than trying to sound encyclopedic."
              }
            ],
            special_tests_title: "Usual Spastic Pattern",
            special_tests: [
              {
                title: "Upper Extremity",
                how: [
                  "**Shoulder:** adductors",
                  "**Elbow:** flexors",
                  "**Forearm:** pronators",
                  "**Wrist:** flexors",
                  "**Fingers:** flexors"
                ],
                pearl: "These are the usual upper-limb muscle groups that tighten in a spastic pattern."
              },
              {
                title: "Lower Extremity",
                how: [
                  "**Hip:** extensors",
                  "**Knee:** extensors",
                  "**Ankle:** plantar flexors",
                  "**Toes:** flexors"
                ],
                pearl: "Knowing the usual lower-limb spastic pattern helps you target tone testing quickly."
              }
            ],
            focus_points: [
              "Rigidity versus spasticity",
              "Cog-wheeling and lead pipe",
              "Clonus",
              "Flaccidity",
              "Ashworth grading"
            ]
          },
          power_exam: {
            name: "Power",
            description: "Strength testing with joint stabilization and standard 0-to-5 grading.",
            steps: [
              {
                title: "Power Assessment",
                how: [
                  "When testing power, **stabilize the joint** with one hand while using the other to test strength",
                  "Test **one limb at a time**",
                  "**0:** No muscle activation",
                  "**1:** Trace muscle activation, such as a twitch, without achieving full range of motion",
                  "**2:** Muscle activation with gravity eliminated, achieving full range of motion",
                  "**3:** Muscle activation against gravity, full range of motion",
                  "**4:** Muscle activation against some resistance, full range of motion",
                  "**4+:** almost normal",
                  "**4-:** can only offer slight resistance",
                  "**5:** Muscle activation against examiner’s full resistance, full range of motion"
                ],
                pearl: "Joint stabilization matters. Without it, power grading gets noisy fast."
              }
            ],
            focus_points: [
              "Joint stabilization",
              "One limb at a time",
              "0 to 5 grading",
              "Interpreting 4+ and 4-"
            ]
          },
          reflexes_exam: {
            name: "Reflexes",
            description: "Deep tendon reflexes, tendon landmarks, clonus, and classic upper motor neuron signs.",
            steps: [
              {
                title: "Reflex Technique and Landmarks",
                how: [
                  "Test on **both sides**",
                  "Consider placing **2 fingers** over the tendon you will be hitting for patient comfort",
                  "Palpate landmarks first:",
                  "**Biceps:** biceps tendon above antecubital fossa",
                  "**Triceps:** tendon at the back of the elbow above the olecranon",
                  "**Brachioradialis:** tendon on the lateral edge of the radial forearm",
                  "**Medial Hamstring:** tendon on the medial side of the quadriceps just above the popliteal fossa",
                  "**Patellar:** between the patella and tibial tuberosity",
                  "**Achilles:** tendon at the back of the heel above the calcaneus",
                  "For Achilles, hold the sole of the foot to feel the reflex and any **clonus**"
                ],
                pearl: "Landmarking the tendon first makes the reflex exam look much more controlled."
              },
              {
                title: "Reflex Grading",
                how: [
                  "**0:** no response; always abnormal",
                  "**1+:** a slight but definitely present response; may or may not be normal",
                  "**2+:** a brisk response; normal",
                  "**3+:** a very brisk response; may or may not be normal",
                  "**4+:** a tap elicits a repeating reflex (**clonus**); always abnormal"
                ],
                pearl: "If you’re unsure, the important anchor is that **2+ is normal**."
              }
            ],
            special_tests_title: "Upper Motor Neuron Signs",
            special_tests: [
              {
                title: "Hoffman’s Sign",
                how: [
                  "Flick the **middle finger** of the patient",
                  "Look for **flexion of the other digits**",
                  "That is a **positive sign**"
                ],
                pearl: "Keep it subtle. You are looking for a reflex release sign, not forcing the hand to move."
              },
              {
                title: "Babinski Reflex",
                how: [
                  "Stroke the **sole of the foot** starting from the lateral side of the heel up towards the big toe in an upside-down **L** fashion",
                  "Look for **extension of the big toe** and **fanning out of the other toes**",
                  "A **negative test** = no movement or downward curling of the toes"
                ],
                pearl: "Be slow and deliberate. Babinski is easiest to see when the stimulus is controlled."
              }
            ],
            focus_points: [
              "Biceps, triceps, brachioradialis",
              "Hamstring, patellar, Achilles",
              "2+ as normal",
              "Clonus",
              "Hoffman and Babinski"
            ]
          },
          sensory_exam: {
            name: "Sensory",
            description: "Sensory testing for pain, vibration, proprioception, and light touch.",
            steps: [
              {
                title: "Pain (Spinothalamic Tract - STT)",
                how: [
                  "Using a **pinprick device**, show patient what **sharp** and **dull** sensation feels like",
                  "Counsel them that this will hurt but **won’t break the skin**",
                  "Use the pinprick device to test pain sensation, having the patient say **yes** when they feel the prick",
                  "Compare multiple **dermatomes** or **nerve distributions** of interest",
                  "Compare to the **opposite side**"
                ],
                pearl: "Pre-demonstrating sharp and dull saves a lot of confusion once the patient closes their eyes."
              },
              {
                title: "Vibration (Dorsal Column-Medial Lemniscal Pathway - DCML)",
                how: [
                  "Place a **128 Hz tuning fork** over the most distal joint (**DIP of hand or toe**)",
                  "Ask patient to tell you when they no longer feel the vibration",
                  "If you feel the vibration when the patient cannot, that suggests **diminished vibration sense**",
                  "Move to the next most **proximal joint** and test again until vibration sense is normal"
                ],
                pearl: "Always start distally. It gives you somewhere to move proximally if the finding is abnormal."
              },
              {
                title: "Proprioception (DCML)",
                how: [
                  "Place your fingers on either side of the patient’s most distal joint (**DIP of hand or toe**)",
                  "Show the patient you moving the joint **upwards** and **downwards**",
                  "Have patient **close their eyes**, move their joint up or down, and have patient identify the direction",
                  "**2 or fewer errors out of 10 = normal**"
                ],
                pearl: "Hold the sides of the digit, not the top and bottom, so you do not accidentally cue the direction."
              },
              {
                title: "Light Touch",
                how: [
                  "Use a **cotton ball**",
                  "Show patient what light touch feels like",
                  "Have the patient close their eyes and say **yes** when they feel the cotton ball",
                  "Compare multiple **dermatomes** or **nerve distributions** of interest",
                  "Compare to the **opposite side**"
                ],
                pearl: "Light touch seems simple, but symmetrical side-to-side comparison is the whole point."
              }
            ],
            focus_points: [
              "Pain / STT",
              "Vibration / DCML",
              "Proprioception",
              "Light touch",
              "Side-to-side comparison"
            ]
          }
        }
      }
    }
  },
  psychiatry: {
    title: "Psychiatry Module",
    description: "Core psychiatry history, mental status examination, suicide risk assessment, and diagnosis-focused screening pages.",
    exams: {
      psychiatry_history: {
        name: "Psychiatry History",
        description: "Core structure for a psychiatric history station, including safety, background history, substance use, and formulation.",
        steps: [
          {
            title: "Key Parts of the Psych History",
            how: [
              "**ID**",
              "**Chief complaint**",
              "**Hx of present illness**",
              "**Safety assessment** (SI/HI, access to weapons, at-risk minors etc.)",
              "**Past psych hx**",
              "**Past medical/surgical hx**",
              "**Review of meds and allergies**",
              "**Review of systems/symptoms**",
              "**Substance use hx**",
              "**Fam hx**",
              "**Psychosocial hx**",
              "**MSE**",
              "**P/E**",
              "**Ddx**",
              "**Treatment/management plan**"
            ],
            pearl: "A good psych history is broad, but it still needs a clear internal order so you do not miss safety or function."
          },
          {
            title: "Opening, Chief Concern, and HPI",
            how: [
              "Identify the patient and clarify the **chief complaint** in their own words.",
              "Build out the **history of present illness** with symptom onset, duration, progression, triggers, and functional impact.",
              "Clarify whether the concern sounds primarily mood-related, psychotic, anxiety-related, cognitive, substance-related, or mixed."
            ],
            pearl: "In psych OSCEs, the history of present illness usually carries the diagnosis if you structure it well."
          },
          {
            title: "Safety, Background, and Systems Review",
            how: [
              "Ask directly about **SI/HI**, access to weapons, and any concerns about vulnerable dependents.",
              "Review **past psychiatric history**, admissions, self-harm, previous diagnoses, and prior treatments.",
              "Cover **medical/surgical history**, medications, allergies, family history, and a focused symptom review."
            ],
            pearl: "Even when the station feels mood-focused, examiners usually expect direct risk screening."
          },
          {
            title: "Substance Use, Psychosocial Context, and Close",
            how: [
              "Always ask about **substance use history**.",
              "Clarify **psychosocial history** including relationships, housing, work/school, and supports.",
              "State that you would complete the **MSE**, perform a relevant **physical exam**, give a **differential diagnosis**, and outline a **treatment/management plan**."
            ],
            pearl: "Psychiatry stations often separate strong candidates by how well they explore supports, function, and context."
          }
        ],
        focus_points: [
          "Chief complaint and HPI",
          "Direct safety assessment",
          "Past psychiatric and medical history",
          "Substance use and psychosocial context",
          "MSE, differential, and management framing"
        ]
      },
      mental_status_exam: {
        name: "Mental Status Examination",
        description: "Structured psychiatric assessment covering appearance, behaviour, speech, emotion, perception, thought, cognition, and insight.",
        steps: [
          {
            title: "Appearance and Behaviour (A)",
            how: [
              "**Gender**",
              "**Cultural background**",
              "**Staged age** (do they appear older or younger?)",
              "**Attire** (appropriate or not etc.)",
              "**Hygiene/grooming** (neat vs. unkept vs. disheveled etc.)",
              "**Other characteristics** (cosmetic use, style, etc.)",
              "**Motor:** tics, tremors, EPS, psychomotor retardation, hyperactive etc.",
              "**Activity level:** normal vs. increased vs. decreased",
              "**Eye contact:** absent vs. inconsistent vs. consistent"
            ],
            pearl: "The MSE starts the moment you meet the patient, not after formal questions begin."
          },
          {
            title: "Speech (S)",
            how: [
              "**Accent/dialect**",
              "**Speech amount**",
              "**Articulation:** slurring, mechanical problems, tardive dyskinesia, etc.",
              "**Modulation:** loud, soft-spoken, normal etc.",
              "**Pitch:** within normal range, monotone, etc.",
              "**Rate:** within normal vs. fast vs. slow"
            ],
            pearl: "Speech gives you a lot of diagnostic information quickly, especially in mood and psychotic disorders."
          },
          {
            title: "Emotion (E)",
            how: [
              "**Mood** = patient-endorsed emotional state",
              "**Affect** = observed by interviewer",
              "**Quality:** bright, sad, anxious, angry/irritable, etc.",
              "**Range:** full, labile, flat, restricted, blunted, etc.",
              "**Intensity:** low vs. normal vs. high",
              "**Congruence** between affect and mood, physical appearance, and behaviours"
            ],
            pearl: "Separating mood from affect is classic psych OSCE territory."
          },
          {
            title: "Perceptions (P)",
            how: [
              "**Hallucinations** (auditory, visual, olfactory, tactile, gustatory) vs **illusions**",
              "Remember that **auditory command hallucinations** are high risk for SI/HI/harm",
              "**Disturbances of self and environment:** depersonalization, derealization",
              "**Disturbances of experience:** deja vu / jamais vu"
            ],
            pearl: "Always explore the content of perceptual disturbances, not just whether they are present."
          },
          {
            title: "Thought Form and Content (T)",
            how: [
              "**Form:** circumstantiality, flight of ideas, rambling, loose associations, thought blocking, jargon, word salad, etc.",
              "**Content:** delusions, overvalued ideas, obsessions, phobias",
              "Ask directly about **thoughts of harm to self/others**",
              "Delusions may include paranoid, persecutory, grandiose, jealous, erotomanic, somatic, control, religious, reference, thought broadcasting/insertion/withdrawal"
            ],
            pearl: "Thought form is how thoughts are organized; thought content is what the thoughts are about."
          },
          {
            title: "Insight and Judgment (I)",
            how: [
              "**Insight:** full vs. partial vs. impaired vs. absent",
              "**Judgment:** good vs. fair vs. poor",
              "Remember that insight and judgment are **not always congruent**"
            ],
            pearl: "It is often stronger to describe why insight or judgment seems impaired than to label it alone."
          },
          {
            title: "Cognitive Function (C)",
            how: [
              "May be assessed through interview or more formally with **MMSE** (score <25 = further investigation) or **MoCA** (score <26 = further investigation, adjusted for education)",
              "**Orientation:** person, place, time",
              "**Attention**",
              "**Memory**",
              "**Language functions**",
              "**Abstract/concrete thinking**",
              "**Visuospatial functions**",
              "**Executive functions**",
              "**Capacity to read/write**"
            ],
            pearl: "Only test cognition formally when it fits the station, but always know what domains you are sampling."
          }
        ],
        focus_points: [
          "Appearance and behaviour",
          "Speech",
          "Emotion: mood vs affect",
          "Perception",
          "Thought form and content",
          "Insight/judgment and cognition"
        ]
      },
      suicide_risk_assessment: {
        name: "Suicide Risk Assessment",
        description: "Focused suicide risk screening with direct questioning, risk stratification, and safety planning.",
        steps: [
          {
            title: "When to Assess and How to Start",
            how: [
              "Applicable to: patients who present with signs of psych illness and/or distress; patients whose family/friends raise concerns; patients who express suicidal ideation",
              "Always **explicitly ask about suicide**",
              "Open-ended start: “Have things gotten bad to the point that you have thought about hurting yourself or ending your life?”"
            ],
            pearl: "In psych OSCEs, direct and calm wording is safer than trying to sound delicate."
          },
          {
            title: "If Suicidal Ideation Is Endorsed",
            how: [
              "Ask focused follow-up questions such as: **How often are the thoughts happening? Is there a plan in place? Do you have any firearms or other weapons?**",
              "Clarify immediacy, intent, planning, means, and past attempts",
              "Support the patient throughout: “Thank you for trusting me and sharing this with me.”"
            ],
            pearl: "Supportive language matters, but it should not replace direct risk questions."
          },
          {
            title: "Risk, Warning, and Protective Factors",
            how: [
              "Assess **risk factors** (longer-term factors that predispose the patient to suicide)",
              "Assess **warning signs** (short-term factors that may set the suicide process in motion)",
              "Assess **protective factors** that mitigate suicide risk"
            ],
            pearl: "A good suicide assessment does not stop at ideation; it also estimates how close the person is to acting."
          },
          {
            title: "Safety Planning and Close",
            how: [
              "Always develop, implement, and document a **patient safety plan**",
              "Focus on imminent risks and urgent actions to take if needed",
              "Summarize the patient’s risk level, immediate supports, and next steps clearly"
            ],
            pearl: "The assessment is incomplete if you identify risk but do not state what happens next."
          }
        ],
        focus_points: [
          "Ask directly about suicide",
          "Clarify plan, means, and intent",
          "Identify risk, warning, and protective factors",
          "Make a safety plan"
        ]
      }
    },
    submodules: {
      psychiatric_conditions: {
        title: "Psychiatric Conditions",
        description: "Diagnosis-focused psychiatry screens for common OSCE presentations and symptom clusters.",
        exams: {
          major_depressive_disorder: {
            name: "Major Depressive Disorder",
            description: "Core depressive symptom screen using a SIGECAPS-style structure plus impairment and rule-outs.",
            steps: [
              {
                title: "Diagnostic Threshold",
                how: [
                  "Need **5+ symptoms**, with at least 1 of **M** or **I**, for **2 weeks** in adults or **1 week** in children",
                  "Symptoms must cause **clinically significant distress or impairment**"
                ],
                pearl: "In an OSCE, it helps to state both the symptom threshold and the need for functional impairment."
              },
              {
                title: "MDD Symptom Review",
                groups: [
                  {
                    heading: "**M**ood decreased / depressed",
                    how: [
                      "Example: “How has your mood been? How long have you felt down?”"
                    ]
                  },
                  {
                    heading: "**S**leep disturbances / changes",
                    how: [
                      "Example: “How have you been sleeping?”"
                    ]
                  },
                  {
                    heading: "**I**nterest decreased / anhedonia",
                    how: [
                      "Example: “Have you been feeling less interested in activities you normally enjoy?”"
                    ]
                  },
                  {
                    heading: "**G**uilt / worthlessness",
                    how: [
                      "Example: “What has your self-esteem been like?”"
                    ]
                  },
                  {
                    heading: "**E**nergy decreased / fatigue",
                    how: [
                      "Example: “Can you describe your energy levels recently?”"
                    ]
                  },
                  {
                    heading: "**C**oncentration decreased",
                    how: [
                      "Example: “Have you found it challenging to think or concentrate?”"
                    ]
                  },
                  {
                    heading: "**A**ppetite changes",
                    how: [
                      "Example: “Have you noticed any changes in appetite?”"
                    ]
                  },
                  {
                    heading: "**P**sychomotor changes",
                    how: [
                      "Agitation or retardation",
                      "Example: “Have you felt slowed down, as though you are stuck in mud? Have you had difficulties sitting still?”"
                    ]
                  },
                  {
                    heading: "**S**uicidal ideation / thoughts of death",
                    how: [
                      "Example: “Sometimes when people feel depressed, they may have thoughts of dying. Have you ever had thoughts like this?”"
                    ]
                  }
                ],
                pearl: "If you sound conversational rather than robotic, the mnemonic still works well in an OSCE."
              },
              {
                title: "Impairment and Rule-Outs",
                how: [
                  "Ask about **impairment:** “How have the feelings that you have been experiencing impacted your daily routines?”",
                  "Need to rule out other disorders including **bipolar disorder, psychotic disorders/features, other mood disorders, and bereavement**"
                ],
                pearl: "Always mention bipolar rule-out when discussing depressive presentations."
              }
            ],
            focus_points: [
              "5 symptoms, including mood or anhedonia",
              "SIGECAPS-style review",
              "Impairment",
              "Rule out bipolar and psychosis"
            ]
          },
          bipolar_disorder: {
            name: "Bipolar Disorder",
            description: "Screen for manic or hypomanic episodes using DIGFAST-style prompts and functional impact.",
            steps: [
              {
                title: "Core Diagnostic Frame",
                how: [
                  "**Bipolar I (mania):** euphoria + ≥3 symptoms or irritability + ≥4 symptoms for **1 week** and causes significant impairment / necessitates hospitalization",
                  "**Bipolar II (hypomania):** same symptom pattern for **4 days** and **not impaired**"
                ],
                pearl: "The duration and degree of impairment help separate mania from hypomania."
              },
              {
                title: "DIGFAST Symptom Review",
                groups: [
                  {
                    heading: "**D**istractibility",
                    how: [
                      "Example: “Do you find yourself easily distracted or off task?”"
                    ]
                  },
                  {
                    heading: "**I**mpulsivity / increased risk-taking",
                    how: [
                      "Example: “Sometimes when individuals are in a manic mood, they may engage in activities that are harmful to themselves or their families. Has this been the case for you?”",
                      "Ask about speeding, gambling, unusual sexual behaviours, etc."
                    ]
                  },
                  {
                    heading: "**G**randiosity",
                    how: [
                      "Example: “Do you ever feel like you have special abilities, or powers?”"
                    ]
                  },
                  {
                    heading: "**F**light of ideas",
                    how: [
                      "Example: “Have you felt like your thoughts have been racing through your mind?”"
                    ]
                  },
                  {
                    heading: "**A**ctivity increase",
                    how: [
                      "Example: “Have you been more active than usual?”"
                    ]
                  },
                  {
                    heading: "**S**leep decrease / deficit",
                    how: [
                      "Example: “Do you feel rested with less hours of sleep compared to your usual?”"
                    ]
                  },
                  {
                    heading: "**T**alkative / pressured speech",
                    how: [
                      "Example: “Is it often difficult for others to share their thoughts or interrupt you?”"
                    ]
                  }
                ],
                pearl: "A manic history sounds most convincing when you ask about behaviour change and real-world consequences."
              },
              {
                title: "Differentiate and Rule Out",
                how: [
                  "Need to differentiate **Bipolar I vs Bipolar II**",
                  "Rule out **psychotic disorders/features** and other competing diagnoses",
                  "Ask about **impairment:** “How have these episodes impacted different areas of your life?”"
                ],
                pearl: "If the symptoms sound dramatic but there is no real impairment or duration, be careful before calling it mania."
              }
            ],
            focus_points: [
              "Mania vs hypomania",
              "DIGFAST",
              "Risky behaviour and sleep change",
              "Functional impairment"
            ]
          },
          schizophrenia_psychotic_disorders: {
            name: "Schizophrenia and Psychotic Disorders",
            description: "Psychosis-focused screen covering core diagnoses, delusions, hallucinations, and positive/negative symptoms.",
            steps: [
              {
                title: "Psychosis and Core Diagnostic Categories",
                how: [
                  "Psychosis is a symptom where an individual has difficulty telling apart what is real or not",
                  "**Schizophrenia:** need 2+ symptoms for 1+ month (1/2 must be delusions, hallucinations, or disorganized speech)",
                  "**Brief Psychotic Disorder:** need 1+ symptom (cannot be a negative symptom) with sudden onset and return to baseline after resolution",
                  "**Schizophreniform Disorder:** 1+ month but less than 6 months of positive symptoms of schizophrenia and brief/no mood symptoms",
                  "**Schizoaffective Disorder:** must meet criteria for both schizophrenia and MDD",
                  "**Delusional Disorder:** 1+ month of 1+ delusions with brief or no hallucinations, brief or no mood symptoms, and not significantly impaired"
                ],
                pearl: "Naming the differential categories helps show that you can think beyond just 'psychosis yes/no.'"
              },
              {
                title: "Delusions and Thought Content",
                groups: [
                  {
                    heading: "Reference",
                    how: ["Example: “Have you felt like the TV/radio has referred to you?”"]
                  },
                  {
                    heading: "Persecution",
                    how: ["Example: “Do you feel like people are out to get you?”"]
                  },
                  {
                    heading: "Thought broadcasting / withdrawal / insertion",
                    how: [
                      "“Do you believe others can have heard your thoughts before?”",
                      "“Has someone ever taken your thoughts out of your own head?”",
                      "“Have your thoughts ever been placed there by someone else?”"
                    ]
                  },
                  {
                    heading: "Guilt / grandiosity / control / somatic",
                    how: [
                      "“Do you blame yourself for bad things happening in this world?”",
                      "“Do you believe you have any special talents or powers?”",
                      "“Do you believe outside forces are in control of your actions?”",
                      "“Are you worried you have a serious illness that hasn’t been diagnosed by a doctor?”"
                    ]
                  }
                ],
                pearl: "It is often better to ask about delusions concretely than to use abstract psychiatric terms with patients."
              },
              {
                title: "Hallucinations and Other Positive Symptoms",
                how: [
                  "Always explore the **content** of hallucinations",
                  "**Visual:** “Do you ever see things that others cannot?”",
                  "**Auditory:** “Do you ever hear sounds or voices that others do not?”",
                  "**Tactile:** “Do you ever feel odd sensations on your body?”",
                  "**Olfactory:** “Have you ever smelled something that others cannot?”",
                  "**Gustatory:** “Have you noticed strange tastes in your mouth?”",
                  "Also ask about **disorganized speech** and **grossly disorganized or catatonic behaviour**"
                ],
                pearl: "Command auditory hallucinations are especially important because of the safety implications."
              },
              {
                title: "Negative and Cognitive Symptoms",
                how: [
                  "**Negative symptoms (5 A’s):** apathy, alogia, anhedonia, avolition, affective flattening",
                  "Can also have cognitive symptoms including **attention** and **executive function** impairment"
                ],
                pearl: "Negative symptoms are easy to underscreen because they are quieter than positive symptoms."
              }
            ],
            focus_points: [
              "Psychosis differential",
              "Delusions",
              "Hallucinations",
              "Disorganization",
              "Negative symptoms"
            ]
          },
          anxiety_disorders: {
            name: "Anxiety Disorders",
            description: "Anxiety-focused screening page covering GAD, panic, OCD, and PTSD-style symptom clusters.",
            steps: [
              {
                title: "Generalized Anxiety Disorder",
                how: [
                  "Need **3+ symptoms for 6+ months** and causes impairment",
                  "Excessive anxiety/worry about a number of different events/activities",
                  "Difficulty controlling worry",
                  "Need 3/6 symptoms more days than not: restless/on edge, tired easily, difficulty concentrating, irritable, muscle tension, difficulty falling or staying asleep",
                  "Rule out other medical conditions, substance use, or mental disorders"
                ],
                pearl: "For GAD, the hard part is often proving that the worry is both excessive and hard to control."
              },
              {
                title: "Social Anxiety, Panic, OCD, and PTSD",
                groups: [
                  {
                    heading: "Social Anxiety Disorder",
                    how: [
                      "Anxieties focused on social situations"
                    ]
                  },
                  {
                    heading: "Panic Attack / Panic Disorder",
                    how: [
                      "Panic attack: 4+ symptoms such as sweating, trembling, dizziness, depersonalization/derealization, increased HR, chest pain, chills, nausea, tingling, choking, SOB, fear of dying/losing control/going crazy",
                      "Panic disorder if recurrent, unprovoked panic attacks with 1+ month of worry about another attack and behaviour changes"
                    ]
                  },
                  {
                    heading: "OCD",
                    how: [
                      "6+ months of obsessions, compulsions, or both",
                      "Obsessions = recurrent, persistent, intrusive, unwanted thoughts/urges/images causing distress",
                      "Compulsions = repetitive behaviours or mental acts done to reduce anxiety/distress"
                    ]
                  },
                  {
                    heading: "PTSD",
                    how: [
                      "9+ symptoms for 1+ month",
                      "Exposure to actual/threatened death, serious injury, or sexual violence",
                      "Intrusive symptoms, avoidance, negative mood/cognition changes, and arousal/reactivity changes"
                    ]
                  }
                ],
                pearl: "Anxiety presentations can overlap a lot, so naming the dominant pattern usually matters more than listing every possibility."
              }
            ],
            focus_points: [
              "Excessive worry and control",
              "Panic symptoms",
              "Obsessions and compulsions",
              "Trauma-related intrusion, avoidance, and arousal"
            ]
          },
          adhd: {
            name: "ADHD",
            description: "Core ADHD symptom review organized into inattentive and hyperactive-impulsive clusters.",
            steps: [
              {
                title: "Diagnostic Frame",
                how: [
                  "ADHD: need **6+ inattentive and/or hyperactivity/impulsivity symptoms** for **6 months**"
                ],
                pearl: "In practice, the station often becomes a symptom-cluster screen plus functional impact."
              },
              {
                title: "Inattentive Symptoms",
                how: [
                  "Inattention to details / careless mistakes",
                  "Not sustaining attention",
                  "Not seeming to listen when spoken to directly",
                  "Not following through on instructions / finishing",
                  "Difficulty organizing tasks/activities",
                  "Difficulty with sustained mental effort",
                  "Losing things",
                  "Easily distracted",
                  "Forgetful"
                ],
                pearl: "If it sounds like ordinary distractibility, bring it back to duration, setting, and impairment."
              },
              {
                title: "Hyperactive-Impulsive Symptoms",
                how: [
                  "Fidgets",
                  "Leaves seat / situation versus expectations",
                  "Runs about or climbs excessively",
                  "Not quiet during leisure activities",
                  "“On the go” / “driven by a motor”",
                  "Talks excessively",
                  "Blurts out answers",
                  "Difficulty awaiting turn",
                  "Interrupts or intrudes on others"
                ],
                pearl: "The behavioural examples make ADHD screening feel much more concrete than asking only general questions."
              }
            ],
            focus_points: [
              "6 symptoms for 6 months",
              "Inattention cluster",
              "Hyperactivity / impulsivity cluster",
              "Functional impairment"
            ]
          },
          personality_disorders: {
            name: "Personality Disorders",
            description: "Preliminary personality-disorder review including cluster framing and high-yield screens for avoidant, narcissistic, and borderline patterns.",
            steps: [
              {
                title: "Clusters",
                how: [
                  "**Cluster A:** schizoid / schizotypal / paranoid",
                  "**Cluster B:** histrionic / narcissistic / borderline / antisocial",
                  "**Cluster C:** obsessive compulsive / avoidant / dependent"
                ],
                pearl: "The cluster framing helps you organize personality pathology, but the OSCE usually wants a specific pattern screen."
              },
              {
                title: "High-Yield Personality Disorder Screens",
                groups: [
                  {
                    heading: "Avoidant personality disorder (need 4+ symptoms)",
                    how: [
                      "**C** – Certainty of being liked before getting involved with people",
                      "**R** – Rejection preoccupies thoughts in social situations",
                      "**I** – Limited intimate relationships due to fear of rejection",
                      "**N** – Inhibited in new interpersonal relationships",
                      "**G** – Gets around occupational activities involving significant interpersonal contact",
                      "**E** – Embarrassment prevents activity engagement",
                      "**S** – Poor self-view"
                    ]
                  },
                  {
                    heading: "Narcissistic personality disorder (need 5+ symptoms)",
                    how: [
                      "**S** – Special",
                      "**P** – Preoccupied with fantasies",
                      "**E** – Envious",
                      "**E** – Entitlement",
                      "**E** – Excess admiration",
                      "**C** – Conceited / grandiose",
                      "**I** – Interpersonal exploitation",
                      "**A** – Arrogant",
                      "**L** – Lacks empathy"
                    ]
                  },
                  {
                    heading: "Borderline personality disorder (need 5+ symptoms)",
                    how: [
                      "**A** – Abandonment",
                      "**M** – Mood instability",
                      "**S** – Suicidal / self-harm behaviours",
                      "**U** – Unstable and intense relationships",
                      "**I** – Impulsivity",
                      "**C** – Control of anger",
                      "**I** – Identity disturbance",
                      "**D** – Dissociative or paranoid symptoms that are stress-related / transient",
                      "**E** – Chronic emptiness"
                    ]
                  }
                ],
                pearl: "Personality stations are often easier when you ask for patterns across time rather than isolated episodes."
              },
              {
                title: "Key History Areas for Maladaptive Behaviour Patterns",
                how: [
                  "**Childhood:** “Did you ever witness violence in the home?”",
                  "**School:** “When did you start school, and how long did you attend?”",
                  "**Interpersonal relationships:** “Do you have close friends?”",
                  "**Employment:** “What do you do for work and for how long?”",
                  "**Housing:** “What is your living situation right now?”",
                  "**Substance use:** “Do you drink, smoke, or use illicit drugs?”",
                  "**Forensic:** “Have you ever been in legal trouble?”"
                ],
                pearl: "These stations usually reward developmental and relational context, not just symptom labels."
              }
            ],
            focus_points: [
              "Cluster A/B/C framing",
              "Avoidant, narcissistic, and borderline screens",
              "Patterns across time",
              "Developmental / relational context"
            ]
          },
          major_neurocognitive_disorder: {
            name: "Major Neurocognitive Disorder",
            description: "Screen for major neurocognitive disorder while differentiating delirium from dementia and assessing function.",
            steps: [
              {
                title: "Delirium vs Dementia",
                groups: [
                  {
                    heading: "Delirium",
                    how: [
                      "Acute onset, fluctuating course, short duration (hours to weeks)",
                      "Attention impacted",
                      "Impaired orientation and memory",
                      "Disorganized thinking",
                      "Perception changes (delusions/hallucinations)",
                      "Disrupted sleep-wake cycles",
                      "Due to an underlying cause such as acute illness or medication"
                    ]
                  },
                  {
                    heading: "Dementia",
                    how: [
                      "Insidious onset, stable/slow course, long duration (months to years)",
                      "Impaired orientation and memory",
                      "Impoverished thinking",
                      "Not due to an acute underlying cause",
                      "Perceptions and sleep-wake cycles may or may not be impacted"
                    ]
                  }
                ],
                pearl: "The quickest clinical separator is usually acute/fluctuating attention change versus slower progressive decline."
              },
              {
                title: "Major Neurocognitive Disorder Criteria",
                how: [
                  "Significant cognitive decline in 1+ of 6 domains: **complex attention, executive function, learning and memory, language, perceptual-motor, social cognition**",
                  "Concern may be expressed by patient, informant, or physician and identified on appropriate clinical assessment/testing",
                  "Interferes with independence",
                  "Not explained by delirium or another mental disorder"
                ],
                pearl: "In psych OSCEs, naming the domains and the effect on independence sounds much stronger than saying 'memory issues.'"
              },
              {
                title: "Type, Behavioural Symptoms, and Function",
                how: [
                  "Assess the most likely dementia type: **AD vs vascular vs LBD vs FTD vs mixed** etc., or whether it may be caused by TBI, substance/medication use, or another medical/neuro condition",
                  "Ask about **BPSD** (behavioural and psychological symptoms of dementia)",
                  "Ask about function: mild = **IADL** issues; moderate = **ADL** issues; severe = fully dependent",
                  "**ADLs = D.E.A.T.H:** dressing, eating, ambulating, toileting, hygiene"
                ],
                pearl: "Functional decline is often what turns cognitive symptoms into a major neurocognitive disorder diagnosis."
              }
            ],
            focus_points: [
              "Delirium vs dementia",
              "Cognitive domains",
              "Independence / function",
              "Behavioural symptoms and likely subtype"
            ]
          }
        }
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
