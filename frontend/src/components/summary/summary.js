import React from "react";
import Absentees from "./absentees";
import Roles from "./roles";
import { Text } from "atomize";

const style = {
  padding: 0,
  margin: 0
};

const Summary = ({ persons, newcdo, newcds, newcos }) => {
  const currentStrength = persons.filter(person => person.status === 'present').length;
  const totalStrength = persons.length;

  return (
    <div>
      <Text style={style}>CDO: {newcdo.toUpperCase()}</Text>
      <Text style={style}>CDS: {newcds.toUpperCase()}</Text>
      <Text style={style}>COS: {newcos.toUpperCase()}</Text>
      <br/>
      <Text style={style}>Total Strength: {totalStrength}</Text>
      <Text style={style}>Present Strength: {currentStrength}</Text> 
      <br/>
      <Roles persons={persons} />
      <Absentees persons={persons} />
      <Text style={style}>PRESENT IN CAMP: {currentStrength}</Text>
      <br/>
    </div>
  );
};

export default Summary;
