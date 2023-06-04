import React, { useState } from "react";
import { Icon, Div, Dropdown, Anchor, Notification } from "atomize";
import phoneservice from "../../services/phoneservice";
import Newdate from "../reusable/newdate";

const StatusDropDown = ({ person, persons, setPersons }) => {
  const [newinfo, setnewinfo] = useState(false);

  const HandleUpdateStatus = (event) => {
    setshowModal(!showModal);

    const value = event.target.getAttribute("value");

    let newReason = "";
    switch (value) {
      case "mc":
        newReason = prompt("Details", `MC FROM ${Newdate} TO ${Newdate}`);
        break;
      case "ma":
        newReason = prompt("Details", "MA AT");
        break;
      case "off":
        newReason = prompt("Details", `OFF ON ${Newdate}`);
        break;
      case "leave":
        newReason = prompt("Details", `LEAVE ON ${Newdate}`);
        break;
      case "attached":
        newReason = prompt("Details", "ATTACHED OUT TO");
        break;
      case "others":
        newReason = prompt("Details", "");
        break;
      case "oncourse":
        newReason = prompt("Details", "");
        break;
      default:
        newReason = "";
    }

    newReason = newReason ? newReason.toUpperCase() : "nil";

    const newPerson = {
      name: person.name,
      status: value,
      reason: newReason,
      group: person.group,
      excuse: person.excuse,
      role: person.role,
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
      <Anchor d="block" p={{ y: "0.25rem" }} value="present">
        {"Present ✅"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="mc">
        {"MC 😷"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="ma">
        {"MA 👨🏻‍⚕️"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="off">
        {"Off 🚫"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="oncourse">
        {"On Course 👨🏻‍🎓"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="leave">
        {"Leave 🚪"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="attached">
        {"Attached Out 🅰"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="others">
        {"Others 🗒"}
      </Anchor>
      <Anchor d="block" p={{ y: "0.25rem" }} value="stayout">
        {"Stay Out 🏠"}
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
        Status Updated
      </Notification>
      <Dropdown
        w="fit-content"
        isOpen={showModal}
        onClick={Handleclick}
        menu={menuList}
        bg="info200"
        focusBg="info300"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        m={{ r: "0.5rem" }}
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
      >
        Status
      </Dropdown>
    </Div>
  );
};

export default StatusDropDown;
