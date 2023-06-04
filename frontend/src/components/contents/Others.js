import React from "react";
import Emojidisplay from "../reusable/emoji";
import Reason from "../reason";
import { Text } from "atomize";

const style = {
  padding: 0,
  margin: 0
};

const Others = ({ persons }) => {
  const OthersList = persons.filter(person => String(person.group).toLowerCase() === 'others');
  console.log(`List of other members: ${JSON.stringify(OthersList)}`);

  let currentStrength = 0;
  OthersList.forEach(person => {
    if (person.status === 'present') {
      currentStrength++;
    }
  });

  const totalStrength = OthersList.length;

  if (totalStrength !== 0) {
    return (
      <div>
        <Text style={style}>OTHERS: {currentStrength}/{totalStrength}</Text>
        {OthersList.map((person, index) => (
          <Text style={style} key={person.name}>
            {index + 1}. {person.name}
            <Emojidisplay currentStatus={person.status} />
            <Reason person={person} />
          </Text>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Others;
