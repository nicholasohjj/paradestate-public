import React from "react";

const style = {
  padding: 0,
  margin: 0
};

const Signature = ({ newAuthor }) => {
  return (
    <>
      <p style={style}>Done by:</p>
      {newAuthor.toUpperCase()}
    </>
  );
};

export default Signature;
