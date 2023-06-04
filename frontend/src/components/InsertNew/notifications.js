import React from 'react';
import { Notification, Icon } from 'atomize';

const Notifications = ({
  newName,
  setNewAlert,
  newAlert,
  newUpdate,
  setNewUpdate,
  newWarning,
  setNewWarning,
  newInput,
  setNewInput,
}) => {
  return (
    <>
      <Notification
        bg="danger700"
        isOpen={newAlert}
        onClose={() => {
          setNewAlert(!newAlert);
        }}
        prefix={
          <Icon name="CloseSolid" color="white" size="18px" m={{ r: '0.5rem' }} />
        }
      >
        All fields (other than medical excuses) must be filled.
      </Notification>
      <Notification
        bg="success700"
        isOpen={newUpdate}
        onClose={() => setNewUpdate(!newUpdate)}
        prefix={
          <Icon name="Success" color="white" size="18px" m={{ r: '0.5rem' }} />
        }
      >
        {newName.toUpperCase()} has been updated.
      </Notification>
      <Notification
        bg="warning700"
        isOpen={newWarning}
        onClose={() => setNewWarning(!newWarning)}
        prefix={
          <Icon name="AlertSolid" color="white" size="18px" m={{ r: '0.5rem' }} />
        }
      >
        {newName.toUpperCase()} has already been removed from the server.
      </Notification>
      <Notification
        bg="success700"
        isOpen={newInput}
        onClose={() => setNewInput(!newInput)}
        prefix={
          <Icon name="Success" color="white" size="18px" m={{ r: '0.5rem' }} />
        }
      >
        Name added.
      </Notification>
    </>
  );
};

export default Notifications;
