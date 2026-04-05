window.INTERNAL_MODULES = {
  cardiovascular: {
    title: "Cardiovascular Module",
    description: "Core bedside cardiac and peripheral vascular examination flows.",
    exams: {
      cardiovascular_exam: {
        name: "Cardiovascular Examination",
        description: "Systematic bedside cardiac exam from general inspection through auscultation and peripheral findings.",
        steps: [
          {
            title: "General Inspection and Hands",
            how: [
              "Assess overall comfort, work of breathing, and skin colour from the end of the bed.",
              "Inspect the hands for clubbing, splinter haemorrhages, nicotine staining, and peripheral cyanosis.",
              "Palpate radial pulse rate and rhythm before moving on."
            ],
            pearl: "Starting at the end of the bed helps you spot sick patients before you get lost in details."
          },
          {
            title: "Arms, Face, and Neck",
            how: [
              "Measure blood pressure if relevant and compare sides when indicated.",
              "Look for xanthelasma, corneal arcus, central cyanosis, and conjunctival pallor.",
              "Assess the JVP with the patient at 45 degrees."
            ],
            pearl: "JVP is often the highest-yield 'extra' finding in heart failure or volume overload."
          },
          {
            title: "Precordium Inspection and Palpation",
            how: [
              "Inspect the chest for scars, pacemakers, and visible pulsations.",
              "Palpate the apex beat and note location or displacement.",
              "Check for heaves and thrills over the valve areas."
            ],
            pearl: "A displaced apex beat is a classic clue to ventricular enlargement."
          },
          {
            title: "Auscultation",
            how: [
              "Auscultate systematically at the aortic, pulmonary, tricuspid, and mitral areas.",
              "Listen for rate, rhythm, added sounds, and murmurs with diaphragm then bell when needed.",
              "Use maneuvers such as left lateral position or sitting forward if indicated."
            ],
            pearl: "Follow the same sequence every time so you do not skip a valve area under pressure."
          },
          {
            title: "Peripheral Completion",
            how: [
              "Look for ankle oedema and palpate sacrum if the patient is bed-bound.",
              "Auscultate the lung bases for crackles if heart failure is suspected.",
              "Always finish by thanking the patient and summarizing key positive findings."
            ],
            pearl: "OSCE examiners like a clean finish: completion steps matter."
          }
        ],
        focus_points: [
          "Pulse character and rhythm",
          "JVP height and waveform",
          "Apex beat location",
          "Murmur timing and radiation",
          "Peripheral oedema and lung-base findings"
        ]
      },
      peripheral_vascular_exam: {
        name: "Peripheral Vascular Examination",
        description: "Focused arterial and venous limb assessment for vascular disease and perfusion.",
        steps: [
          {
            title: "Inspection",
            how: [
              "Expose both lower limbs and compare colour, swelling, ulcers, and trophic skin changes.",
              "Look for scars, varicosities, amputations, or dependent rubor."
            ],
            pearl: "Compare side-to-side early because asymmetry is often the clue."
          },
          {
            title: "Palpation",
            how: [
              "Assess temperature from thigh to foot using the dorsum of your hand.",
              "Palpate femoral, popliteal, posterior tibial, and dorsalis pedis pulses.",
              "Check capillary refill if relevant."
            ],
            pearl: "If a pulse feels absent, say you would compare with the other side and use Doppler if available."
          },
          {
            title: "Special Maneuvers and Completion",
            how: [
              "Assess for pitting oedema and calf tenderness where appropriate.",
              "Offer Buerger testing or ankle-brachial pressure index if clinically relevant.",
              "State you would complete with auscultation for bruits and vascular risk assessment."
            ],
            pearl: "Completion statements help show clinical maturity even in a short station."
          }
        ],
        focus_points: [
          "Temperature gradient",
          "Pulse presence and symmetry",
          "Skin trophic change",
          "Ulcers, scars, and oedema"
        ]
      }
    }
  },
  respiratory: {
    title: "Respiratory Module",
    description: "Inspection, chest expansion, percussion, and auscultation for common OSCE stations.",
    exams: {
      respiratory_exam: {
        name: "Respiratory Examination",
        description: "Standard respiratory exam including inspection, palpation, percussion, and auscultation.",
        steps: [
          {
            title: "General Inspection",
            how: [
              "Observe respiratory rate, work of breathing, accessory muscle use, and ability to speak.",
              "Look for oxygen, inhalers, sputum pots, and surrounding clinical clues."
            ],
            pearl: "Even before touching the patient, you can often tell if they are in respiratory distress."
          },
          {
            title: "Hands and Face",
            how: [
              "Inspect for clubbing, nicotine staining, tar staining, and peripheral cyanosis.",
              "Look at the face for central cyanosis, pursed-lip breathing, or Horner syndrome if relevant."
            ],
            pearl: "Clubbing changes your differential dramatically, so look carefully."
          },
          {
            title: "Chest Inspection and Palpation",
            how: [
              "Inspect chest shape, scars, symmetry, and deformity.",
              "Assess tracheal position and chest expansion.",
              "Check tactile vocal fremitus if indicated."
            ],
            pearl: "Tracheal deviation is a high-stakes finding, so say what direction you think it moves."
          },
          {
            title: "Percussion and Auscultation",
            how: [
              "Percuss symmetrically over anterior and posterior lung fields.",
              "Auscultate systematically comparing side-to-side.",
              "Assess vocal resonance where abnormality is suspected."
            ],
            pearl: "Side-to-side comparison keeps you oriented and makes subtle asymmetry easier to pick up."
          },
          {
            title: "Completion",
            how: [
              "State you would check calves, sputum, peak flow, and review imaging if appropriate.",
              "Thank the patient and summarize your findings."
            ],
            pearl: "Completion marks often come from naming the sensible next steps."
          }
        ],
        focus_points: [
          "Respiratory distress signs",
          "Tracheal position",
          "Chest expansion symmetry",
          "Percussion note changes",
          "Breath sounds and added sounds"
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
