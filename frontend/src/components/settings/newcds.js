import React, { useState } from "react";
import { Icon, Div, Dropdown, Anchor } from "atomize";

const NewCDS = ({ persons, setnewcds }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCDSChange = (event) => {
    console.log(`CDS: ${event.target.getAttribute("value")}`);
    setnewcds(event.target.getAttribute("value"));
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const SpecList = persons.filter(
    (person) => String(person.role).toLowerCase() === "specs"
  );
  console.log(SpecList);
  const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }} onClick={handleCDSChange}>
      <Anchor value="LTA JOHN DOE" d="block" p={{ y: "0.25rem" }} onClick={handleClick}>
        LTA JOHN DOE
      </Anchor>
      <Anchor value="2LT JANE SMITH" d="block" p={{ y: "0.25rem" }} onClick={handleClick}>
        2LT JANE SMITH
      </Anchor>
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
      CDS
    </Dropdown>
  );
};

export default NewCDS;
