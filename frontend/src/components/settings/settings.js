import React, { useState } from "react";
import { Button, Icon, Div, Input } from "atomize";
import NewRole from "./newrole";

const Settings = ({
  setnewcdo,
  setnewcds,
  setnewcos,
  setnewas,
  newauthor,
  setnewauthor,
  persons
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleAuthorChange = (event) => {
    console.log(`Done by: ${event.target.value}`);
    setnewauthor(event.target.value);
  };

  return (
    <>
      <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
        <Button
          textColor="white"
          rounded="xl"
          bg="black700"
          hoverBg="black600"
          m={{ r: "0.5rem", y: "0.5rem" }}
          p={{ r: "1.5rem", l: "1rem" }}
          shadow="3"
          hoverShadow="4"
          onClick={handleShow}
          suffix={
            <Icon name={show ? "Cross" : "SettingsSolid"} size="20px" color="white" m={{ l: "1rem" }} />
          }
        >
          {show ? "Hide" : "Settings"}
        </Button>
      </Div>
      {show && (
        <>
          <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Input
              m={{ r: "0.5rem", y: "0.5rem" }}
              rounded="xl"
              value={newauthor}
              onChange={handleAuthorChange}
              placeholder="Done By: (Rank/Name)"
              p={{ x: "2.5rem" }}
              prefix={
                <Icon
                  name="UserSolid"
                  color="black"
                  size="16px"
                  cursor="pointer"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
            />
          </Div>
          <NewRole persons={persons} setNewRole={setnewcdo} roleTitle="CDO" />
          <NewRole persons={persons} setNewRole={setnewcds} roleTitle="CDS" />
          <NewRole persons={persons} setNewRole={setnewcos} roleTitle="COS" />
        </>
      )}
    </>
  );
};

export default Settings;
