import React from "react";

const Summary = ({HQtotal,HQcurrent}) => {
    return (
        <>
        <p>Total Strength: {HQtotal}</p>
        <p>Present Strength: {HQcurrent}</p>

        </>
    )
}
export default Summary