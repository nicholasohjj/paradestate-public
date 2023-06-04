import React, { useState } from 'react';
import { Div, Button, Modal, Icon, Input, Notification } from 'atomize';
import phoneservice from '../../services/phoneservice';

const AlignCenterModal = ({ isOpen, onClose, onSubmit, person, newexcuse, handleExcuseChange }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" maxW="32rem" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: '4rem' }}>
        <Icon name="History" color="black" m={{ t: '0.35rem', r: '0.5rem' }} />
        <Input
          d="flex"
          justify="flex-end"
          m={{ r: '1rem' }}
          rounded="xl"
          value={newexcuse}
          onChange={handleExcuseChange}
          placeholder="Medical Excuses"
          p={{ x: '2.5rem' }}
        />
      </Div>
      <Div d="flex" justify="flex-end">
        <Button onClick={onClose} bg="gray200" textColor="medium" m={{ r: '1rem' }}>
          Cancel
        </Button>
        <Button onClick={onSubmit} bg="info700">
          Update
        </Button>
      </Div>
    </Modal>
  );
};

const UpdateexcuseModal = ({ setPersons, persons, person }) => {
  const [showModal, setshowModal] = useState(false);
  const [newexcuse, setnewExcuse] = useState('');
  const [newinfo, setnewinfo] = useState(false);

  const handleExcuseChange = (event) => {
    console.log(`Excuse: ${event.target.value}`);
    setnewExcuse(event.target.value);
  };

  const Handleclick = () => {
    setshowModal(!showModal);
  };

  const Handlesubmit = () => {
    console.log(newexcuse.toUpperCase());
    const newPerson = {
      name: person.name,
      status: person.status,
      reason: person.reason,
      group: person.group,
      excuse: newexcuse.trim() ? newexcuse.trim().toUpperCase() : 'nil',
      role: person.role,
    };
    const nameCheck = persons.filter((person) =>
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
    );

    console.log(nameCheck);
    setshowModal(!showModal);
    phoneservice.update(nameCheck[0].id, newPerson).then((updatedList) => {
      setPersons(
        persons.map((person) => (person.id !== nameCheck[0].id ? person : updatedList))
      );
      setnewinfo(!newinfo);
    });
  };

  return (
    <Div d="flex">
      <Notification
        bg="info700"
        isOpen={newinfo}
        onClose={() => {
          setnewinfo(!newinfo);
        }}
        prefix={
          <Icon name="InfoSolid" color="white" size="18px" m={{ r: '0.5rem' }} />
        }
      >
        Medical Excuses Updated
      </Notification>
      <Button
        bg="white"
        focusBg="info300"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        m={{ r: '0.5rem', y: '0.5rem' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={Handleclick}
      >
        Excuses
      </Button>
      <AlignCenterModal
        isOpen={showModal}
        onClose={Handleclick}
        onSubmit={Handlesubmit}
        person={person}
        newexcuse={newexcuse}
        handleExcuseChange={handleExcuseChange}
      />
    </Div>
  );
};

export default UpdateexcuseModal;
