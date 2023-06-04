import React, { useState } from "react";
import { Icon, Div, Dropdown, Anchor, Notification } from "atomize";
import phoneservice from "../../services/phoneservice";

const RoleDropDown = ({ person, persons, setPersons }) => {
  const [newinfo, setnewinfo] = useState(false);

  const HandleUpdateStatus = (event) => {
    setshowModal(!showModal);

    const value = event.target.getAttribute("value");

    const newPerson = {
      name: person.name,
      status: person.status,
      reason: person.reason,
      group: person.group,
      excuse: person.excuse,
      role: value,
    };

    const nameCheck = persons.filter((person) =>
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
    );

    if (value) {
      phoneservice
        .update(nameCheck[0].id, newPerson)
        .then((updatedList) => {
          setPersons(
            persons.map((person) =>
              person.id !== nameCheck[0].id ? person : updatedList
            )
          );
          setnewinfo(!newinfo);
        });
    }
  };

  const menuList = (
    <Div p={{ x: "1rem", y: "0.5rem" }} onClick={HandleUpdateStatus}>
      <Anchor d="block" p={{ y: "0.25rem" }} value="hq">
        {"Coy HQ"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="specs">
        {"Specialist"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="opr">
        {"Operator"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="admin">
        {"Administrator"}
      </Anchor>
    </Div>
  );

  const [showModal, setshowModal] = useState(false);

  const Handleclick = () => {
    setshowModal(!showModal);
  };

  return (
    <Div>
      <Notification
        bg="info700"
        isOpen={newinfo}
        onClose={() => {
          setnewinfo(!newinfo);
        }}
        prefix={
          <Icon name="InfoSolid" color="white" size="18px" m={{ r: "0.5rem" }} />
        }
      >
        Role Updated
      </Notification>
      <Dropdown
        w="fit-content"
        isOpen={showModal}
        onClick={Handleclick}
        menu={menuList}
        bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        m={{ r: "0.5rem" }}
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
      >
        Role
      </Dropdown>
    </Div>
  );
};

export default RoleDropDown;
