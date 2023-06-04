import React from 'react';

const style = {
  padding: 0,
  margin: 0
};

const Roles = ({ persons }) => {
  const filterPersonsByRole = (role) => persons.filter((person) => person.role === role);

  const HQrolelist = filterPersonsByRole('hq');
  const HQcurrent = HQrolelist.filter((person) => person.status === 'present').length;
  const HQtotal = HQrolelist.length;

  const Specrolelist = filterPersonsByRole('specs');
  const Speccurrent = Specrolelist.filter((person) => person.status === 'present').length;
  const Spectotal = Specrolelist.length;

  const Oprrolelist = filterPersonsByRole('opr');
  const Oprcurrent = Oprrolelist.filter((person) => person.status === 'present').length;
  const Oprtotal = Oprrolelist.length;

  const Adminrolelist = filterPersonsByRole('admin');
  const Admincurrent = Adminrolelist.filter((person) => person.status === 'present').length;
  const Admintotal = Adminrolelist.length;

  return (
    <div>
      <p style={style}>- HQ: {HQcurrent}/{HQtotal}</p>
      <p style={style}>- Specialists: {Speccurrent}/{Spectotal}</p>
      <p style={style}>- Operators: {Oprcurrent}/{Oprtotal}</p>
      <p style={style}>- Administrators: {Admincurrent}/{Admintotal}</p>
      <br/>
    </div>
  );
};

export default Roles;
