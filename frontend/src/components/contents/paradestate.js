import React from 'react';
import HQ from './hq';
import Blueteam from './Blueteam';
import Redteam from './Redteam';
import Excuses from './Excuses';
import Signature from './signature';
import Others from './Others';

const ParadeState = ({ persons, newauthor }) => {
  return (
    <>
      <HQ persons={persons} />

      <Blueteam persons={persons} />

      <Redteam persons={persons} />

      <Others persons={persons} />

      <Excuses persons={persons} />

      <Signature newauthor={newauthor} />
    </>
  );
};

export default ParadeState;
