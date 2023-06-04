import React, { useState } from 'react';
import Formcontent from './formcontent';
import { Div, Button, Icon } from 'atomize';
import phoneservice from '../../services/phoneservice';
import Notifications from './notifications';

const Form = ({ setNewMessage, persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [newReason, setNewReason] = useState('');
  const [newGroup, setNewGroup] = useState('');
  const [newExcuse, setNewExcuse] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newAlert, setNewAlert] = useState(false);
  const [newUpdate, setNewUpdate] = useState(false);
  const [newWarning, setNewWarning] = useState(false);
  const [newInput, setNewInput] = useState(false);

  const addName = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName.trim().toUpperCase(),
      status: newStatus.toLowerCase(),
      reason: newReason ? newReason : 'nil',
      group: newGroup.toUpperCase(),
      excuse: newExcuse ? newExcuse : 'nil',
      role: newRole,
    };

    const nameCheck = persons.filter((person) =>
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
    );

    if (
      !newName.trim() ||
      !newStatus.trim() ||
      !newGroup.trim() ||
      !newRole.trim()
    ) {
      setNewAlert(true);
    } else if (nameCheck.length > 0) {
      if (
        window.confirm(
          `${newName.toUpperCase()} is already added to nominal roll. Would you like to update the status?`
        )
      ) {
        phoneservice
          .update(nameCheck[0].id, newPerson)
          .then((updatedList) => {
            setPersons(
              persons.map((person) =>
                person.id !== nameCheck[0].id ? person : updatedList
              )
            );
            setNewUpdate(true);
          })
          .catch((error) => {
            setNewWarning(true);
          });
      }
    } else {
      phoneservice
        .addNew(newPerson)
        .then((updatedList) => {
          setPersons(persons.concat(updatedList));
          setNewInput(true);
        })
        .catch((error) => {
          setNewWarning(true);
        });
    }

    setNewStatus('');
    setNewName('');
    setNewReason('');
    setNewGroup('');
    setNewExcuse('');
    setNewRole('');
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  if (!show) {
    return (
      <Div d="flex" justify={{ xs: 'space-around', lg: 'center' }}>
        <Button
          textColor="black"
          rounded="xl"
          bg="success700"
          hoverBg="success600"
          m={{ r: '0.5rem', y: '0.5rem' }}
          p={{ r: '1.5rem', l: '1rem' }}
          shadow="3"
          hoverShadow="4"
          onClick={handleShow}
          suffix={<Icon name="Add" size="16px" color="black" m={{ l: '1rem' }} />}
        >
          Add
        </Button>
      </Div>
    );
  } else {
    return (
      <>
        <Notifications
          newName={newName}
          setNewAlert={setNewAlert}
          newAlert={newAlert}
          newUpdate={newUpdate}
          setNewUpdate={setNewUpdate}
          newWarning={newWarning}
          setNewWarning={setNewWarning}
          newInput={newInput}
          setNewInput={setNewInput}
        />
        <Div d="flex" justify={{ xs: 'space-around', lg: 'center' }}>
          <Button
            textColor="black"
            rounded="xl"
            bg="success700"
            hoverBg="success600"
            m={{ r: '0.5rem', y: '0.5rem' }}
            p={{ r: '1.5rem', l: '1rem' }}
            shadow="3"
            hoverShadow="4"
            onClick={handleShow}
            suffix={<Icon name="Add" size="16px" color="black" m={{ l: '1rem' }} />}
          >
            Hide
          </Button>
        </Div>
        <>
          <br />
          <Formcontent
            addName={addName}
            newName={newName}
            setNewName={setNewName}
            newStatus={newStatus}
            setNewStatus={setNewStatus}
            newGroup={newGroup}
            setNewGroup={setNewGroup}
            newExcuse={newExcuse}
            setNewExcuse={setNewExcuse}
            newRole={newRole}
            setNewRole={setNewRole}
            setNewReason={setNewReason}
          />
          <br />
        </>
      </>
    );
  }
};

export default Form;
