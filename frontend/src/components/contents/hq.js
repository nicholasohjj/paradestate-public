import React from 'react';
import Emojidisplay from '../reusable/emoji';
import Reason from '../reason';

const style = {
  padding: 0,
  margin: 0
};

const HQ = ({ persons }) => {
  const HQList = persons.filter(person => String(person.group).toLowerCase() === 'hq');
  console.log(`List of HQ personnel: ${JSON.stringify(HQList)}`);

  let currentStrength = 0;
  HQList.forEach(person => {
    if (person.status === 'present') {
      currentStrength++;
    }
  });

  const totalStrength = HQList.length;

  return (
    <div>
      <p style={style}>HQ: {currentStrength}/{totalStrength}</p>
      {HQList.map((person, index) => (
        <p style={style} key={person.name}>
          {index + 1}. {person.name}
          <Emojidisplay currentStatus={person.status} />
          <Reason person={person} />
        </p>
      ))}
    </div>
  );
};

export default HQ;
