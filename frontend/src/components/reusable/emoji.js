import React from "react";

const Emoji = ({ symbol }) => (
  <span className="emoji" role="img">
    {symbol}
  </span>
);

const Emojidisplay = ({ currentStatus }) => {
  if (currentStatus === "present") {
    return <Emoji symbol="✅" />;
  } else if (currentStatus === "attached") {
    return <Emoji symbol="🅰" />;
  } else if (currentStatus === "others") {
    return <Emoji symbol="🗒" />;
  } else if (currentStatus === "mc") {
    return <Emoji symbol="😷" />;
  } else if (currentStatus === "ma") {
    return <Emoji symbol="👨🏻‍⚕️" />;
  } else if (currentStatus === "off") {
    return <Emoji symbol="🚫" />;
  } else if (currentStatus === "leave") {
    return <Emoji symbol="🚪" />;
  } else if (currentStatus === "stayout") {
    return <Emoji symbol="🏠" />;
  } else if (currentStatus === "oncourse") {
    return <Emoji symbol="👨🏻‍🎓" />;
  } else {
    return "";
  }
};

export default Emojidisplay;
