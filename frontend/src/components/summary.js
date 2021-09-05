import React from "react";


const Summary = ({persons}) => {
    let HQcurrent = 0
    persons.map(person=> (person.status==='present') ? (HQcurrent = HQcurrent+1) : HQcurrent)
    const HQtotal = persons.length

    return (
        <div>
        <p>Total Strength: {HQtotal}</p>
        <p>Present Strength: {HQcurrent}</p>
        </div>
    )
}
export default Summary