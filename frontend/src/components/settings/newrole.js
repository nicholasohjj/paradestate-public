import React, { useState } from "react";
import { Icon, Div, Dropdown, Anchor } from "atomize";

const NewRole = ({ persons, setNewRole, roleTitle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRoleChange = (event) => {
    console.log(`${roleTitle}: ${event.target.getAttribute("value")}`);
    setNewRole(event.target.getAttribute("value"));
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const filteredPersons = persons.filter(
    (person) => String(person.role).toLowerCase() === roleTitle.toLowerCase()
  );
  console.log(filteredPersons);

  const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }} onClick={handleRoleChange}>
      {filteredPersons.map((person) => (
        <Anchor
          key={person.id}
          value={person.name}
          d="block"
          p={{ y: "0.25rem" }}
          onClick={handleClick}
        >
          {person.name}
        </Anchor>
      ))}
    </Div>
  );

  return (
    <Dropdown
      rounded="xl"
      isOpen={showModal}
      onClick={handleClick}
      menu={menuList}
      bg="info200"
      focusBg="info300"
      borderColor="info600"
      focusBorderColor="info800"
      m={{ r: "0.5rem", y: "0.5rem" }}
      textColor="info800"
      textWeight="500"
      openSuffix={<Icon name="Up" color="info700" size="16px" />}
      closeSuffix={<Icon name="Down" color="info700" size="16px" />}
    >
      {roleTitle}
    </Dropdown>
  );
};

export default NewRole;
