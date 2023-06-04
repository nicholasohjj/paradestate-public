import React, { useState } from 'react';
import { Icon, Div, Dropdown, Anchor } from 'atomize';

const NewGroupDropdown = ({ setNewGroup, newGroup }) => {
  const handleUpdateGroup = (event) => {
    setshowModal(!showModal);
    console.log(`Group: ${event.target.getAttribute('value')}`);
    setNewGroup(event.target.getAttribute('value'));
  };

  const menuList = (
    <Div p={{ x: '1rem', y: '0.5rem' }} value={newGroup} onClick={handleUpdateGroup}>
      <Anchor d="block" p={{ y: '0.25rem' }} value="hq">
        {'HQ 🏢'}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="blueteam">
        {'Blue Team'}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="redteam">
        {'Red Team'}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="others">
        {'Others'}
      </Anchor>
    </Div>
  );

  const [showModal, setshowModal] = useState(false);

  const handleClick = () => {
    setshowModal(!showModal);
  };

  return (
    <Dropdown
      rounded="xl"
      isOpen={showModal}
      menu={menuList}
      onClick={handleClick}
      bg="info100"
      focusBg="info200"
      borderColor="info600"
      focusBorderColor="info800"
      textColor="info800"
      textWeight="500"
      openSuffix={<Icon name="Up" color="info700" size="16px" />}
      closeSuffix={<Icon name="Down" color="info700" size="16px" />}
    >
      {newGroup ? `Group: ${newGroup.toUpperCase()}` : 'Group'}
    </Dropdown>
  );
};

export default NewGroupDropdown;
