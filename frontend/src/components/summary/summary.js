import React from "react";
import Absentees from "./absentees";
import Roles from "./roles";
import {Text} from "atomize";

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
        <Text style={style}>CDO: {newcdo.toUpperCase()}</Text>
        <Text style={style}>CDS: {newcds.toUpperCase()}</Text>
        <Text style={style}>COS: {newcos.toUpperCase()}</Text>
        <Text style={style}>ARMSKOTE: {newas.toUpperCase()}</Text>
        <br/>
        <Text style={style}>Total Strength: {totalstrength}</Text>
        <Text style={style}>Present Strength: {currentstrength}</Text> 
        <br/>
        <Roles persons ={persons} />
        <Absentees persons={persons} />
        <Text style={style}>PRESENT IN CAMP: {currentstrength}</Text>
        <br/>
        </div>
    )
}
export default Summary