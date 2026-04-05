window.MSK_EXAMS = {
  "general_msk": {
    "name": "General MSK Examination",
    "description": "Quick musculoskeletal screen to identify abnormal joints/regions needing focused exam.",
    "steps": [
      {
        "title": "General Inspection",
        "how": [
          "Observe posture, gait, symmetry, and obvious deformities.",
          "Scan for swelling, erythema, or muscle wasting."
        ],
        "pearl": "A quick gait watch often reveals the most important clue—don’t skip it."
      },
      {
        "title": "Look",
        "how": [
          "Inspect key regions (hands, elbows, shoulders, spine, hips, knees, ankles/feet).",
          "Compare sides and note deformity or swelling."
        ],
        "pearl": "Hands are high-yield for inflammatory arthritis signs—look carefully."
      },
      {
        "title": "Feel",
        "how": [
          "Palpate where symptomatic and check for warmth or tenderness.",
          "If swelling present, characterize whether it’s joint vs soft tissue."
        ],
        "pearl": "Warmth + swelling shifts you toward inflammatory/infectious causes—take it seriously."
      },
      {
        "title": "Move",
        "how": [
          "Assess active ROM first, then passive ROM if needed.",
          "Note pain, restriction, and functional limitation."
        ],
        "pearl": "Active vs passive limitation helps separate weakness/pain inhibition from true joint stiffness."
      },
      {
        "title": "Targeted Follow-up",
        "how": [
          "If screen is abnormal, move to region-specific exam (your other tabs).",
          "Document what was abnormal and why you escalated."
        ],
        "pearl": "A screen isn’t the end—it’s a triage tool to focus your detailed exam."
      }
    ],
    "special_tests": []
  },
  "cervical_spine": {
    "name": "Cervical Spine Examination",
    "description": "C-spine exam emphasizing posture, ROM, neurologic screen, and nerve root provocation.",
    "steps": [
      {
        "title": "Inspection",
        "how": [
          "Observe posture, head position, and muscle symmetry.",
          "Look for spasm, guarding, or abnormal alignment."
        ],
        "pearl": "A guarded posture often correlates with acute pain; document resting position before moving the neck."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate midline spinous processes and paraspinal muscles.",
          "Assess for focal tenderness and muscle spasm."
        ],
        "pearl": "Midline bony tenderness after trauma is a red flag—don’t aggressively mobilize."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Assess flexion/extension, rotation, and lateral flexion actively first.",
          "Stop if severe pain, dizziness, or neurologic symptoms occur."
        ],
        "pearl": "Rotation is often most limited in facet irritation; note side-to-side differences."
      },
      {
        "title": "Neurologic Screen (Upper Limb)",
        "how": [
          "Screen sensation in key dermatomes and strength in key myotomes.",
          "Check reflexes if symptoms suggest radiculopathy."
        ],
        "pearl": "Symptoms past the elbow or paresthesias raise suspicion for nerve involvement—pair exam with history."
      },
      {
        "title": "Provocative / Safety Tests (as indicated)",
        "how": [
          "Use nerve root provocation or distraction tests when radicular symptoms exist.",
          "Avoid high-risk maneuvers if vertebrobasilar symptoms are suspected."
        ],
        "pearl": "Only do special tests when indicated—don’t provoke unnecessary symptoms in a straightforward neck strain."
      }
    ],
    "special_tests": [
      {
        "name": "Spurling",
        "how": [
          "Extend and laterally flex the neck toward symptomatic side.",
          "Apply gentle axial compression."
        ],
        "positive": "Reproduction of radicular arm pain/paresthesia (suggesting cervical radiculopathy).",
        "pearl": "Radicular symptoms are more meaningful than neck pain alone—use gentle pressure.",
        "image": ""
      }
    ]
  },
  "lumbar_spine": {
    "name": "Lumbar Spine Examination",
    "description": "Lumbar exam focusing on posture, ROM, neuro screen, and radicular provocation when indicated.",
    "steps": [
      {
        "title": "Inspection",
        "how": [
          "Inspect posture, lumbar curvature, pelvic tilt, and symmetry.",
          "Observe gait and ease of sitting/standing."
        ],
        "pearl": "Watch the sit-to-stand—guarding or pain behavior can guide your exam intensity."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate midline spinous processes and paraspinal muscles.",
          "Assess SI region if posterior pelvic pain is reported."
        ],
        "pearl": "Focal midline tenderness after trauma is a red flag—avoid aggressive testing."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Assess flexion/extension and lateral flexion actively.",
          "Note pain location and any radicular symptoms provoked."
        ],
        "pearl": "Pain with extension can suggest facet-related issues; flexion-provoked radicular symptoms can suggest nerve root irritation."
      },
      {
        "title": "Neurologic Screen (Lower Limb)",
        "how": [
          "Screen key dermatomes, myotomes, and reflexes when indicated.",
          "Assess straight-leg raise if radicular symptoms present."
        ],
        "pearl": "If there’s true weakness or bowel/bladder symptoms, escalate—don’t just document."
      },
      {
        "title": "Functional / Red Flags",
        "how": [
          "Ask about red flags (night pain, weight loss, fever, saddle anesthesia, bowel/bladder changes).",
          "Consider functional tasks only if safe."
        ],
        "pearl": "A clean neuro exam doesn’t rule out serious disease—red flags come from history + exam together."
      }
    ],
    "special_tests": [
      {
        "name": "Straight Leg Raise",
        "how": [
          "With patient supine, raise the straight leg slowly.",
          "Note angle and symptom reproduction; compare sides."
        ],
        "positive": "Reproduction of radicular pain down the leg (suggesting nerve root irritation).",
        "pearl": "Back/hamstring tightness is not the same as radicular pain—ask where the pain travels.",
        "image": ""
      },
      {
        "name": "Femoral Nerve Stretch",
        "how": [
          "Prone: flex the knee and extend the hip gently.",
          "Ask about anterior thigh pain."
        ],
        "positive": "Anterior thigh pain (suggesting upper lumbar nerve root irritation).",
        "pearl": "Different pain pattern than SLR—think L2–L4 involvement.",
        "image": ""
      },
      {
        "name": "FABER (SI/hip screen)",
        "how": [
          "Place leg in figure-4 position, stabilize pelvis, press knee down.",
          "Ask patient to localize pain."
        ],
        "positive": "Posterior pain suggests SI involvement; groin pain suggests hip involvement.",
        "pearl": "Localization matters—posterior vs anterior changes your differential.",
        "image": ""
      },
      {
        "name": "Schober (Mobility screen)",
        "how": [
          "Mark points on lumbar spine and measure change with forward flexion.",
          "Compare to expected mobility (context-dependent)."
        ],
        "positive": "Reduced lumbar flexion excursion (suggesting reduced lumbar mobility).",
        "pearl": "Use as a trend/clinical context tool rather than an isolated diagnosis-maker.",
        "image": ""
      }
    ]
  },
  "shoulder": {
    "name": "Shoulder Examination",
    "description": "Stepwise assessment of shoulder pain, range of motion, strength, and common provocative tests.",
    "steps": [
      {
        "title": "Inspection",
        "how": [
          "Expose both shoulders (front and back) and compare sides.",
          "Look for asymmetry, swelling, bruising, scars, deformity, and muscle wasting (deltoid/supraspinatus/infraspinatus).",
          "Note posture and scapular position/winging during relaxed standing."
        ],
        "pearl": "Always compare with the unaffected side—subtle atrophy and asymmetry are easiest to spot side-by-side."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate key landmarks: sternoclavicular joint, clavicle, acromioclavicular joint, acromion, coracoid, bicipital groove, greater tuberosity, and scapular spine.",
          "Assess for focal tenderness, warmth, or step-offs; ask the patient to localize maximal pain."
        ],
        "pearl": "Tenderness over the AC joint is common with AC pathology; bicipital groove tenderness can suggest biceps tendinopathy."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Start with active ROM, then passive ROM if limited or painful.",
          "Check flexion/extension, abduction/adduction, and external/internal rotation (at the side and, if tolerated, at 90° abduction).",
          "Observe for painful arcs, substitution patterns, and scapulothoracic compensation."
        ],
        "pearl": "If active ROM is limited but passive ROM is near-normal, think weakness/impingement rather than capsular stiffness."
      },
      {
        "title": "Strength",
        "how": [
          "Test deltoid abduction and the rotator cuff: external rotation (infraspinatus/teres minor) and internal rotation (subscapularis).",
          "If pain limits strength, try to distinguish pain-inhibited effort from true weakness by adjusting position or reducing load."
        ],
        "pearl": "True rotator cuff weakness often persists even when you support the arm; pain-only limitation may improve with support."
      },
      {
        "title": "Neurovascular Screen",
        "how": [
          "Briefly screen sensation over the lateral shoulder (axillary nerve territory) and deltoid activation.",
          "Check distal perfusion (e.g., radial pulse) and ask about paresthesias; consider a quick cervical screen if symptoms suggest referred pain."
        ],
        "pearl": "If symptoms radiate past the elbow or include numbness/tingling, consider cervical or peripheral nerve involvement."
      }
    ],
    "special_tests": [
      {
        "name": "Hawkins-Kennedy",
        "how": [
          "Flex the shoulder to ~90° and the elbow to ~90°.",
          "Gently internally rotate the shoulder."
        ],
        "positive": "Pain in the anterior/lateral shoulder (often subacromial region), suggesting impingement/rotator cuff irritation.",
        "pearl": "Support the elbow so the patient can relax; compare sides and avoid forcing through severe pain.",
        "image": ""
      },
      {
        "name": "Neer",
        "how": [
          "Stabilize the scapula with one hand.",
          "Passively forward-flex the internally rotated arm (thumb down) overhead."
        ],
        "positive": "Pain near end-range forward flexion, suggesting impingement.",
        "pearl": "Scapular stabilization matters—without it you may miss or falsely provoke symptoms.",
        "image": ""
      },
      {
        "name": "Empty Can (Jobe)",
        "how": [
          "Abduct the arm ~90° in the scapular plane with thumbs pointing down.",
          "Ask the patient to resist downward pressure."
        ],
        "positive": "Pain and/or weakness compared with the other side, suggesting supraspinatus involvement.",
        "pearl": "Weakness is generally more specific than pain alone; ensure you are testing in the scapular plane.",
        "image": ""
      },
      {
        "name": "Lift-off",
        "how": [
          "Have the patient place the dorsum of the hand on the low back.",
          "Ask them to lift the hand away from the back against resistance."
        ],
        "positive": "Inability to lift off or marked weakness, suggesting subscapularis dysfunction.",
        "pearl": "If the patient cannot get into position, use the belly-press test as an alternative.",
        "image": ""
      },
      {
        "name": "Apprehension",
        "how": [
          "With the patient supine or seated, abduct the shoulder to ~90° and slowly externally rotate.",
          "Watch for apprehension suggesting instability and stop early if the patient becomes guarded."
        ],
        "positive": "Apprehension (not just pain) with external rotation, suggesting shoulder instability/dislocation tendency.",
        "pearl": "Move slowly and stop when the patient feels apprehension—don’t force a dislocation.",
        "image": ""
      }
    ]
  },
  "elbow": {
    "name": "Elbow Examination",
    "description": "Elbow assessment focused on epicondylitis, ROM, stability, and peripheral nerve screening.",
    "steps": [
      {
        "title": "Inspection",
        "how": [
          "Inspect for swelling, erythema, bruising, scars, deformity, and carrying angle asymmetry.",
          "Look for olecranon swelling (bursitis) and muscle wasting."
        ],
        "pearl": "Olecranon bursitis can be obvious visually—look before you press hard."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate medial/lateral epicondyles, olecranon, radial head, and joint line.",
          "Localize tenderness and assess warmth."
        ],
        "pearl": "Focal tenderness at lateral epicondyle + pain with resisted wrist extension is classic for lateral epicondylitis."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Check flexion/extension and pronation/supination.",
          "Note pain and end-feel; compare sides."
        ],
        "pearl": "Loss of extension can be subtle but functionally important—compare to the other side."
      },
      {
        "title": "Strength",
        "how": [
          "Test biceps/triceps strength and wrist extensors/flexors if epicondylitis suspected.",
          "Compare and note pain-limited effort."
        ],
        "pearl": "Pain with resisted wrist extension (elbow extended) strongly supports lateral epicondylitis."
      },
      {
        "title": "Neurovascular Screen",
        "how": [
          "Screen ulnar nerve symptoms (ring/small finger), plus median/radial if indicated.",
          "Consider Tinel at cubital tunnel if ulnar symptoms."
        ],
        "pearl": "Cubital tunnel symptoms often worsen with prolonged elbow flexion—ask about night symptoms."
      }
    ],
    "special_tests": [
      {
        "name": "Cozen’s (Tennis Elbow) Test",
        "how": [
          "Patient makes a fist; extend and radially deviate the wrist against resistance.",
          "Palpate lateral epicondyle during the maneuver."
        ],
        "positive": "Pain at the lateral epicondyle (suggesting lateral epicondylitis).",
        "pearl": "Keep the elbow extended to bias extensor origin involvement.",
        "image": ""
      },
      {
        "name": "Golfer’s Elbow (Resisted Wrist Flexion)",
        "how": [
          "Patient flexes the wrist against resistance (often with forearm supinated).",
          "Palpate medial epicondyle during the maneuver."
        ],
        "positive": "Pain at the medial epicondyle (suggesting medial epicondylitis).",
        "pearl": "Also consider pain with resisted forearm pronation depending on symptoms.",
        "image": ""
      },
      {
        "name": "Valgus Stress (MCL/UCL)",
        "how": [
          "With elbow slightly flexed, apply a valgus force at the elbow.",
          "Compare laxity and pain to contralateral side."
        ],
        "positive": "Pain and/or increased gapping (suggesting UCL injury).",
        "pearl": "Test in slight flexion to reduce bony constraint and better isolate ligament stress.",
        "image": ""
      },
      {
        "name": "Varus Stress (LCL)",
        "how": [
          "With elbow slightly flexed, apply a varus force.",
          "Compare with contralateral side."
        ],
        "positive": "Pain/laxity (suggesting LCL injury).",
        "pearl": "Varus instability is less common but important in posterolateral rotatory issues.",
        "image": ""
      },
      {
        "name": "Tinel at Cubital Tunnel",
        "how": [
          "Tap over the ulnar nerve in the cubital tunnel (posterior to medial epicondyle).",
          "Ask about tingling in ring/small finger."
        ],
        "positive": "Paresthesia radiating to ulnar digits (suggesting ulnar nerve irritation).",
        "pearl": "Symptom reproduction is more meaningful than local tenderness alone.",
        "image": ""
      }
    ]
  },
  "wrist_hand": {
    "name": "Wrist & Hand Examination",
    "description": "Assessment of wrist/hand pain, ROM, strength, and common nerve/tendon tests.",
    "steps": [
      {
        "title": "Inspection",
        "how": [
          "Inspect for swelling, deformity, color changes, scars, and muscle wasting (thenar/hypothenar).",
          "Check nails and skin; compare sides."
        ],
        "pearl": "Thenar wasting raises suspicion for chronic median nerve compression."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate distal radius/ulna, carpal bones (as indicated), metacarpals, MCP/PIP/DIP joints.",
          "Localize point tenderness and assess warmth."
        ],
        "pearl": "Point tenderness over scaphoid (anatomic snuffbox) is an important fracture red flag."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Assess wrist flexion/extension, radial/ulnar deviation, and finger ROM.",
          "Compare sides and note pain pattern."
        ],
        "pearl": "Loss of wrist extension can significantly limit function—document it clearly."
      },
      {
        "title": "Strength",
        "how": [
          "Test grip strength and pinch strength; test finger abduction/adduction (ulnar).",
          "Assess thumb abduction/opposition (median)."
        ],
        "pearl": "Pinch strength and thumb opposition are very sensitive to median nerve dysfunction."
      },
      {
        "title": "Neurovascular / Function",
        "how": [
          "Screen sensation in median/ulnar/radial distributions as indicated.",
          "Ask about functional limitations (buttoning, writing, opening jars)."
        ],
        "pearl": "Functional complaints often map cleanly onto nerve distributions—use them to guide focused testing."
      }
    ],
    "special_tests": [
      {
        "name": "Phalen",
        "how": [
          "Have the patient flex wrists maximally (backs of hands together) for ~60 seconds.",
          "Ask about paresthesias in median nerve distribution."
        ],
        "positive": "Tingling/numbness in thumb/index/middle (suggesting carpal tunnel syndrome).",
        "pearl": "Symptoms often appear before 60 seconds in moderate cases—note time to onset.",
        "image": ""
      },
      {
        "name": "Tinel (Carpal Tunnel)",
        "how": [
          "Tap over the median nerve at the volar wrist.",
          "Ask about paresthesias into the hand."
        ],
        "positive": "Median distribution tingling (suggesting carpal tunnel syndrome).",
        "pearl": "Combine with Phalen and sensory changes for better clinical confidence.",
        "image": ""
      },
      {
        "name": "Finkelstein",
        "how": [
          "Patient tucks thumb into fist.",
          "Ulnar-deviate the wrist (or have patient do it)."
        ],
        "positive": "Pain over radial styloid (suggesting de Quervain tenosynovitis).",
        "pearl": "Do gently—this can be very painful and patients may guard.",
        "image": ""
      }
    ]
  },
  "hip": {
    "name": "Hip Examination",
    "description": "Structured hip assessment including gait, ROM, strength, and common impingement/soft tissue tests.",
    "steps": [
      {
        "title": "Gait and Inspection",
        "how": [
          "Observe gait for antalgia, Trendelenburg pattern, and stride asymmetry.",
          "Inspect pelvis and hips for asymmetry, swelling, scars, and muscle wasting."
        ],
        "pearl": "A Trendelenburg gait points you toward hip abductor weakness or pain inhibition."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate key landmarks: ASIS, iliac crest, greater trochanter, and groin region (as appropriate).",
          "Localize tenderness; consider trochanteric tenderness in lateral hip pain."
        ],
        "pearl": "Lateral hip tenderness over the greater trochanter often suggests greater trochanteric pain syndrome."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Assess hip flexion/extension, abduction/adduction, and internal/external rotation (often supine).",
          "Compare sides and note pain location (groin vs lateral vs posterior)."
        ],
        "pearl": "Loss of internal rotation can be an early sign of intra-articular hip pathology."
      },
      {
        "title": "Strength",
        "how": [
          "Test hip flexion, extension, abduction, adduction against resistance.",
          "Consider single-leg stance or a brief Trendelenburg check if safe."
        ],
        "pearl": "Hip abductor weakness is common and clinically meaningful—don’t skip it."
      },
      {
        "title": "Neurovascular / Referred Pain Screen",
        "how": [
          "If symptoms radiate or are posterior, consider a quick lumbar screen (SLR, neuro check).",
          "Check distal pulses/sensation if clinically relevant."
        ],
        "pearl": "Groin pain points more intra-articular; posterior pain can be spine/SI-related—pattern matters."
      }
    ],
    "special_tests": [
      {
        "name": "Thomas Test",
        "how": [
          "With patient supine, flex one hip to flatten lumbar lordosis.",
          "Observe the contralateral leg for hip flexor tightness/hip extension limitation."
        ],
        "positive": "Contralateral thigh lifts off the table (suggesting hip flexor tightness).",
        "pearl": "Make sure the pelvis stays posteriorly tilted (lordosis flattened) or you’ll overcall tightness.",
        "image": ""
      },
      {
        "name": "Trendelenburg Test",
        "how": [
          "Ask the patient to stand on one leg.",
          "Observe pelvis level and trunk lean."
        ],
        "positive": "Pelvis drops on the unsupported side (suggesting abductor weakness on stance leg).",
        "pearl": "A compensatory trunk lean toward the stance side can be a clue (Trendelenburg gait).",
        "image": ""
      },
      {
        "name": "Ober’s Test",
        "how": [
          "Side-lying with tested hip on top; stabilize pelvis.",
          "Extend and abduct the hip, then allow it to adduct toward the table."
        ],
        "positive": "Leg remains abducted (suggesting IT band/TFL tightness).",
        "pearl": "Pelvic stabilization is key—otherwise you test the pelvis, not the IT band.",
        "image": ""
      }
    ]
  },
  "knee": {
    "name": "Knee Examination",
    "description": "Stepwise assessment of knee pain, effusion, stability, and common meniscal/ligament tests.",
    "steps": [
      {
        "title": "Inspection",
        "how": [
          "Expose both knees and compare sides.",
          "Look for swelling/effusion, erythema, bruising, scars, deformity, and quadriceps wasting.",
          "Assess alignment (varus/valgus), patellar position, and gait if relevant."
        ],
        "pearl": "Quadriceps wasting and subtle effusion are easiest to spot when you compare sides from the front and the side."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate around the patella, patellar tendon, tibial tuberosity, and joint lines (medial/lateral).",
          "Palpate MCL/LCL and posterior fossa if symptoms suggest it.",
          "If swelling suspected, assess for effusion (e.g., bulge sign or patellar tap)."
        ],
        "pearl": "Joint line tenderness increases suspicion for meniscal pathology, especially when paired with a provocative test."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Check active flexion/extension first, then passive ROM if limited.",
          "Note pain, crepitus, and any mechanical block or locking sensation."
        ],
        "pearl": "A true mechanical block (can’t extend or flex) is more concerning than pain-limited ROM."
      },
      {
        "title": "Strength",
        "how": [
          "Test quadriceps (knee extension) and hamstrings (knee flexion) against resistance.",
          "Compare side-to-side; consider pain inhibition if effort seems limited."
        ],
        "pearl": "If strength is limited by pain, re-test in a slightly different position or with reduced load to differentiate true weakness."
      },
      {
        "title": "Stability and Functional Screen",
        "how": [
          "Test collateral ligaments (valgus/varus stress) and cruciates (Lachman/anterior drawer).",
          "Consider a simple functional task if safe (e.g., squat, single-leg stance)."
        ],
        "pearl": "Do Lachman early if ACL injury suspected—large effusions and guarding can make later testing harder."
      }
    ],
    "special_tests": [
      {
        "name": "Lachman",
        "how": [
          "With knee flexed ~20–30°, stabilize the distal femur.",
          "Pull the proximal tibia anteriorly with the other hand."
        ],
        "positive": "Increased anterior translation and/or a soft end-point compared with the other side (suggesting ACL injury).",
        "pearl": "A soft end-point is often more important than the absolute amount of translation—compare sides.",
        "image": ""
      },
      {
        "name": "Anterior Drawer",
        "how": [
          "Flex the knee to ~90° with the foot stabilized.",
          "Pull the tibia anteriorly while keeping hamstrings relaxed."
        ],
        "positive": "Excess anterior translation compared to the other side (suggesting ACL injury).",
        "pearl": "Hamstring guarding can cause false negatives—ask the patient to relax and ensure the tibia starts neutral.",
        "image": ""
      },
      {
        "name": "McMurray",
        "how": [
          "Flex the knee fully; palpate the joint line.",
          "Rotate the tibia (IR/ER) and extend the knee while applying varus/valgus stress."
        ],
        "positive": "Pain and/or a palpable/audible click along the joint line (suggesting meniscal pathology).",
        "pearl": "Joint-line tenderness plus McMurray symptoms is more convincing than either alone.",
        "image": ""
      },
      {
        "name": "Valgus/Varus Stress",
        "how": [
          "With knee at ~30° flexion, apply valgus force to test MCL and varus force to test LCL.",
          "Compare laxity and end-feel to the other side."
        ],
        "positive": "Excess gapping or laxity compared with contralateral side (suggesting collateral ligament injury).",
        "pearl": "Testing at ~30° isolates the collaterals better than full extension.",
        "image": ""
      }
    ]
  },
  "ankle": {
    "name": "Ankle & Foot Examination",
    "description": "Assessment of ankle/foot pain including alignment, ROM, strength, and common ligament/tendon tests.",
    "steps": [
      {
        "title": "Inspection",
        "how": [
          "Inspect standing and sitting if possible: alignment, swelling, bruising, deformity, arch height, skin changes.",
          "Compare both sides; note hindfoot valgus/varus and midfoot collapse."
        ],
        "pearl": "Bruising/swelling pattern can quickly point to ligament injury vs fracture vs tendon issue."
      },
      {
        "title": "Palpation",
        "how": [
          "Palpate malleoli, ATFL/CFL regions, base of 5th metatarsal, navicular, Achilles tendon, plantar fascia.",
          "Check pulses and temperature if needed."
        ],
        "pearl": "Point tenderness over bony landmarks is a red flag for fracture—don’t skip this."
      },
      {
        "title": "Range of Motion",
        "how": [
          "Assess dorsiflexion/plantarflexion and inversion/eversion.",
          "Compare sides and note pain location."
        ],
        "pearl": "Limited dorsiflexion can drive compensatory mechanics and persistent symptoms."
      },
      {
        "title": "Strength",
        "how": [
          "Test dorsiflexion, plantarflexion, inversion, eversion against resistance.",
          "Assess single-leg heel raise if safe (calf/Achilles function)."
        ],
        "pearl": "Inability to perform a single-leg heel raise suggests significant plantarflexor/Achilles dysfunction."
      },
      {
        "title": "Functional / Gait",
        "how": [
          "Observe gait, toe walk/heel walk (if tolerated).",
          "Consider balance and hop test only if appropriate."
        ],
        "pearl": "Functional tests are useful once acute pain has settled—don’t provoke unnecessary setbacks early."
      }
    ],
    "special_tests": [
      {
        "name": "Anterior Drawer (Ankle)",
        "how": [
          "Stabilize the tibia with one hand.",
          "Cup the calcaneus and draw the talus anteriorly."
        ],
        "positive": "Excess anterior translation compared with the other side (suggesting ATFL injury).",
        "pearl": "Test gently—guarding is common in acute sprains; compare sides.",
        "image": ""
      },
      {
        "name": "Ottawa Ankle Rules (screen)",
        "how": [
          "Assess for pain in the malleolar or midfoot zone.",
          "Check for bony tenderness at the posterior edge or tip of the lateral or medial malleolus (ankle), or at the navicular or base of the 5th metatarsal (foot), and assess ability to bear weight for 4 steps both immediately after injury and at evaluation."
        ],
        "positive": "Presence of any of the above criteria indicates that an X-ray is warranted to rule out fracture.",
        "pearl": "Highly sensitive; rules out fractures and helps reduce unnecessary imaging.",
        "image": ""
      }
    ]
  },
  "neurological_asia": {
    "name": "Neurological Examination (ASIA)",
    "description": "A practical neuro screen using ASIA-style key myotomes, dermatomes, reflexes, and UMN signs (with optional rectal tone screen when indicated).",
    "steps": [
      {
        "title": "Setup and Safety",
        "how": [
          "Explain what you’re going to test (strength, sensation, reflexes).",
          "Compare right vs left throughout.",
          "If there are red flags (rapid progression, bowel/bladder change, saddle numbness), prioritize escalation over completing every step."
        ],
        "pearl": "A focused neuro screen is fine for most MSK complaints—reserve the full ASIA-style exam for concerning findings or neuro symptoms."
      },
      {
        "title": "Motor Screen: Key Myotomes",
        "how": [
          "Test strength bilaterally and grade effort against resistance.",
          "Upper limb key levels: C5 elbow flexion; C6 wrist extension; C7 elbow extension; C8 finger flexion; T1 5th-finger abduction.",
          "Lower limb key levels: L2 hip flexion; L3 knee extension; L4 ankle dorsiflexion; L5 great-toe dorsiflexion; S1 ankle plantarflexion."
        ],
        "pearl": "If pain limits strength, document “pain-limited” and re-test in a modified position to separate true weakness from inhibition."
      },
      {
        "title": "Sensory Screen: Light Touch and Pinprick",
        "how": [
          "Test light touch and pinprick in key dermatomal points bilaterally.",
          "Cervical/upper limb landmarks: C2 behind ear; C3 upper neck; C4 upper shoulder; C5 lateral upper arm; C6 lateral forearm; C7 middle finger/posterior arm; C8 medial forearm; T1 medial upper arm/axilla.",
          "Trunk/lower limb landmarks: L1 groin; L2 medial mid-thigh; L3 medial knee; L4 medial malleolus; L5 anterior ankle; S1 lateral malleolus; S2 posterior knee; S3 posterior heel; S4–S5 saddle area."
        ],
        "pearl": "When sensory changes don’t respect dermatomes, consider peripheral nerve patterns—or non-neurologic causes—before over-calling radiculopathy."
      },
      {
        "title": "Reflexes (as indicated)",
        "how": [
          "Check deep tendon reflexes when symptoms suggest radiculopathy or UMN signs.",
          "Common lower limb pair: patellar (L3/L4—mainly L4) and Achilles (S1/S2—mainly S1).",
          "For upper limb complaints, consider biceps/brachioradialis/triceps depending on your local teaching."
        ],
        "pearl": "Reflex asymmetry is often more meaningful than “brisk” reflexes in isolation—always compare sides."
      },
      {
        "title": "Upper Motor Neuron Screen",
        "how": [
          "Check plantar response (Babinski) when cord/UMN involvement is a concern.",
          "Interpret any UMN findings alongside gait change, sensory change, and the rest of the neurologic screen."
        ],
        "pearl": "UMN signs + sensory level or gait change should push you toward cord pathology rather than a simple peripheral issue."
      },
      {
        "title": "High-stakes add-on: Cauda Equina Screen (only if indicated)",
        "how": [
          "Ask about saddle numbness and bowel/bladder changes.",
          "If warranted, include perianal sensation and rectal tone/voluntary anal contraction per your clinical setting and supervision."
        ],
        "pearl": "Don’t bury cauda equina red flags inside a long exam—if suspected, escalate immediately."
      }
    ],
    "special_tests": [
      {
        "name": "ASIA Motor Score (quick framework)",
        "how": [
          "Test each key myotome bilaterally (C5, C6, C7, C8, T1, L2, L3, L4, L5, S1).",
          "Use a 0–5 grading approach: 0 no movement; 3 against gravity; 5 full resistance."
        ],
        "positive": "A focal deficit (e.g., clear weakness in a key myotome compared to the other side).",
        "pearl": "Write the level and side (e.g., “L4 dorsiflexion 3/5 R”)—that single line is incredibly clinically useful.",
        "image": ""
      },
      {
        "name": "ASIA Sensory Score (quick framework)",
        "how": [
          "Test light touch and pinprick at key dermatomal landmarks bilaterally.",
          "Score: 0 absent; 1 altered; 2 normal (use whichever scoring style your clerkship prefers)."
        ],
        "positive": "Reduced or absent sensation in a consistent dermatomal distribution.",
        "pearl": "If the complaint is unilateral numbness, always check the matching point on the other side immediately after.",
        "image": ""
      },
      {
        "name": "Babinski (Plantar Response)",
        "how": [
          "Stroke the lateral sole from heel toward the forefoot, then across the ball of the foot.",
          "Watch the great toe and the other toes."
        ],
        "positive": "Upgoing great toe (often with toe fanning), suggesting an UMN pattern.",
        "pearl": "Do it slowly and firmly; a “withdrawal” tickle response is not the same as a true Babinski.",
        "image": ""
      }
    ]
  }
};
