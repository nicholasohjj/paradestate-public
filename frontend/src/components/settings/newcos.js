import React, { useState } from "react";
import { Icon, Div, Dropdown, Anchor } from "atomize";

const NewCOS = ({ persons, setnewcos }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCOSChange = (event) => {
    console.log(`COS: ${event.target.getAttribute("value")}`);
    setnewcos(event.target.getAttribute("value"));
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const OprList = persons.filter(
    (person) => String(person.role).toLowerCase() === "opr"
  );
  console.log(OprList);
  const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }} onClick={handleCOSChange}>
      <Anchor value="LTA TOM SMITH" d="block" p={{ y: "0.25rem" }} onClick={handleClick}>
        LTA TOM SMITH
      </Anchor>
      <Anchor value="2LT EMMA WHITE" d="block" p={{ y: "0.25rem" }} onClick={handleClick}>
        2LT EMMA WHITE
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
      COS
    </Dropdown>
  );
};

export default NewCOS;
