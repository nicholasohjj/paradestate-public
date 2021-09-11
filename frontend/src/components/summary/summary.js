import React from "react";
import Absentees from "./absentees";
import Roles from "./roles";

const style = {
    padding: 0,
    margin: 0
  }

const Summary = ({persons}) => {
    let currentstrength = 0
    persons.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = persons.length

    return (
        <div style={style}>
        <p style={style}>Total Strength: {totalstrength}</p>
        <p style={style}>Present Strength: {currentstrength}</p>
        <br/>
        <Roles persons ={persons} />
        <Absentees persons={persons} />
        </div>
    )
}
export default Summary