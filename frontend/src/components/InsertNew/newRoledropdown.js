import React, { useState } from 'react';
import { Icon, Div, Dropdown, Anchor } from 'atomize';

const NewRoleDropDown = ({ setNewRole, newRole }) => {
  const handleUpdateRole = (event) => {
    setshowModal(!showModal);
    console.log(`Role: ${event.target.getAttribute('value')}`);
    setNewRole(event.target.getAttribute('value'));
  };

  const menuList = (
    <Div p={{ x: '1rem', y: '0.5rem' }} value={newRole} onClick={handleUpdateRole}>
      <Anchor d="block" p={{ y: '0.25rem' }} value="hq">
        {'Coy HQ'}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="specs">
        {'Specialist'}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="opr">
        {'Operator'}
      </Anchor>
      <Anchor d="block" p={{ y: '0.25rem' }} value="admin">
        {'Administrator'}
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
      onClick={handleClick}
      menu={menuList}
      bg="info100"
      focusBg="info200"
      borderColor="info600"
      focusBorderColor="info800"
      textColor="info800"
      textWeight="500"
      openSuffix={<Icon name="Up" color="info700" size="16px" />}
      closeSuffix={<Icon name="Down" color="info700" size="16px" />}
    >
      {newRole ? `Role: ${newRole.toUpperCase()}` : 'Role'}
    </Dropdown>
  );
};

export default NewRoleDropDown;
