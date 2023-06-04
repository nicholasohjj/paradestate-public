import React from "react";

const emojiMap = {
  present: "✅",
  attached: "🅰",
  others: "🗒",
  mc: "😷",
  ma: "👨🏻‍⚕️",
  off: "🚫",
  leave: "🚪",
  stayout: "🏠",
  oncourse: "👨🏻‍🎓"
};

const Emojidisplay = ({ currentStatus }) => {
  const emojiSymbol = emojiMap[currentStatus] || "";
  return <span className="emoji" role="img">{emojiSymbol}</span>;
};

export default Emojidisplay;
