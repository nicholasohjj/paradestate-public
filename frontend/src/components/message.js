import React from 'react';

const Message = ({ message, backgroundColor = 'lightgrey', textColor = 'green', fontSize = 20, borderRadius = 5, padding = 10, marginBottom = 10 }) => {
  const messageStyle = {
    color: textColor,
    background: backgroundColor,
    fontSize: fontSize,
    borderStyle: 'solid',
    borderRadius: borderRadius,
    padding: padding,
    marginBottom: marginBottom,
  };

  if (!message) {
    return null;
  }

  return <div style={messageStyle}>{message}</div>;
};

export default Message;
