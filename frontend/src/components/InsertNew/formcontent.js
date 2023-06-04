import React from 'react';
import NewGroupDropdown from './newGroupDropdown';
import NewRoleDropdown from './newRoleDropdown';
import NewStatusDropdown from './newStatusDropdown';
import NewName from './newName';
import NewExcuse from './newExcuse';
import { Div, Button } from 'atomize';

const FormContent = ({
  addName,
  newName,
  setNewName,
  newStatus,
  setNewStatus,
  newGroup,
  setNewGroup,
  newExcuse,
  setNewExcuse,
  newRole,
  setNewRole,
  setNewReason,
}) => {
  return (
    <Div>
      <form onSubmit={addName}>
        <NewName newName={newName} setNewName={setNewName} />
        <br />
        <NewExcuse newExcuse={newExcuse} setNewExcuse={setNewExcuse} />
        <br />
        <NewStatusDropdown
          setNewStatus={setNewStatus}
          newStatus={newStatus}
          setNewReason={setNewReason}
        />
        <br />
        <NewGroupDropdown setNewGroup={setNewGroup} newGroup={newGroup} />
        <br />
        <NewRoleDropdown setNewRole={setNewRole} newRole={newRole} />
        <br />
        <Div d="flex" justify={{ xs: 'space-around', lg: 'center' }}>
          <Button
            textColor="white"
            type="submit"
            rounded="xl"
            bg="black700"
            hoverBg="black800"
            p={{ r: '1.5rem', l: '1rem' }}
            shadow="3"
            hoverShadow="4"
          >
            Submit
          </Button>
        </Div>
      </form>
    </Div>
  );
};

export default FormContent;
