import React from "react";

const style = {
    padding: 0,
    margin: 0
  }

const Signature = ({newauthor}) => {
    return (
        <div>
        <p style={style}>Done by:</p>
        {newauthor.toUpperCase()}

        </div>
    )
}

export default Signature