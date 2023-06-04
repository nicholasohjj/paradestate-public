import React from "react";
import Emojidisplay from "../reusable/emoji";
import Reason from "../reason";
import { Text } from "atomize";

const style = {
  padding: 0,
  margin: 0
};

const Redteam = ({ persons }) => {
  const RedteamList = persons.filter(person => String(person.group).toLowerCase() === 'redteam');
  console.log(`List of Red Team members: ${JSON.stringify(RedteamList)}`);

  let currentStrength = 0;
  RedteamList.forEach(person => {
    if (person.status === 'present') {
      currentStrength++;
    }
  });

  const totalStrength = RedteamList.length;

  return (
    <div>
      <Text style={style}>RED TEAM: {currentStrength}/{totalStrength}</Text>
      {RedteamList.map((person, index) => (
        <Text style={style} key={person.name}>
          {index + 1}. {person.name}
          <Emojidisplay currentStatus={person.status} />
          <Reason person={person} />
        </Text>
      ))}
    </div>
  );
};

export default Redteam;
