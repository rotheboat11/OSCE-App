window.EXAM_IMAGES = {
  general_msk: "static/Skeleton.png",
  cervical_spine: "static/CervicalSpine.png",
  lumbar_spine: "static/LumbarSpine.png",
  shoulder: "static/ShoulderImage.png",
  elbow: "static/ElbowImage.png",
  wrist_hand: "static/WristImage.png",
  hip: "static/HipImage.png",
  knee: "static/KneeImage.png",
  ankle: "static/AnkleImage.png",
  neurological_asia: "static/Neurological.png"
};

window.fallbackEmojiForExam = (key) => {
  if (key === "general_msk") return "🏥";
  if (key.includes("spine")) return "🦴";
  if (key === "shoulder") return "💪";
  if (["elbow", "wrist_hand"].includes(key)) return "🤲";
  if (["hip", "knee"].includes(key)) return "🦵";
  if (key === "ankle") return "🦶";
  if (key === "neurological_asia") return "🧠";
  return "📘";
};
