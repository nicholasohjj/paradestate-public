import React from "react";

const Summarystyle = {
    marginBottom : 0,
    padding : 0
}

const Summary = ({persons}) => {
    let HQcurrent = 0
    persons.map(person=> (person.status==='present') ? (HQcurrent = HQcurrent+1) : HQcurrent)
    const HQtotal = persons.length

    return (
        <div style={Summarystyle}>
        <p>Total Strength: {HQtotal}</p>
        <p>Present Strength: {HQcurrent}</p>
        </div>
    )
}
export default Summary