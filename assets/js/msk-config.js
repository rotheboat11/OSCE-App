window.EXAM_IMAGES = {
  general_msk: "static/Skeleton.jpg",
  cervical_spine: "static/Spine.jpg",
  lumbar_spine: "static/Spine.jpg",
  shoulder: "static/ShoulderImage.jpg",
  elbow: "static/ElbowImage.jpg",
  wrist_hand: "static/WristImage.jpg",
  hip: "static/HipImage.jpeg",
  knee: "static/KneeImage.jpg",
  ankle: "static/AnkleImage.jpeg",
  neurological_asia: "static/Neurological.jpeg"
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
