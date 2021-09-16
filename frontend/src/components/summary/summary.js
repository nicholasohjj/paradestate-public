import React from "react";
import Absentees from "./absentees";
import Roles from "./roles";

const style = {
    padding: 0,
    margin: 0
  }

const Summary = ({persons,
                newcdo,
                newcds,
                newcos,
                newas}) => {
    let currentstrength = 0
    persons.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = persons.length

    return (
        <div>
        <p style={style}>CDO: {newcdo.toUpperCase()}</p>
        <p style={style}>CDS: {newcds.toUpperCase()}</p>
        <p style={style}>COS: {newcos.toUpperCase()}</p>
        <p style={style}>ARMSKOTE: {newas.toUpperCase()}</p>
        <br/>
        <p style={style}>Total Strength: {totalstrength}</p>
        <p style={style}>Present Strength: {currentstrength}</p> 
        <br/>
        <Roles persons ={persons} />
        <Absentees persons={persons} />
        <p style={style}>PRESENT IN CAMP: {currentstrength}</p>
        <br/>
        </div>
    )
}
export default Summary