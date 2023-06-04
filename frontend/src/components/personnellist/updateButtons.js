import React from 'react';
import DetailModal from './detailmodal';
import DeleteModal from './deletemodal';
import RoleDropDown from './roleDropDown';
import Groupdropdown from './groupDropDown';
import StatusDropDown from './statusDropDown';
import { Div, Button, Icon } from 'atomize';
import UpdateexcuseModal from './updateexcusemodal';

const Updatebuttons = ({ person, id, setPersons, persons }) => {
  return (
    <>
      <Div d="flex">
        <Button bg="info700" hoverBg="info600" m={{ r: '0.5rem', y: '0.5rem' }}>
          <Icon name="Rename" size="20px" />
        </Button>
        <DetailModal person={person} />
        <DeleteModal id={id} setPersons={setPersons} persons={persons} person={person.name} />
      </Div>
      <Div d="flex">
        <StatusDropDown person={person} persons={persons} setPersons={setPersons} />
        <Groupdropdown person={person} persons={persons} setPersons={setPersons} />
        <RoleDropDown person={person} persons={persons} setPersons={setPersons} />
      </Div>
      <Div d="flex">
        <UpdateexcuseModal id={id} setPersons={setPersons} persons={persons} person={person} />
      </Div>
    </>
  );
};

export default Updatebuttons;
