import React from "react";
import { Input, Icon } from "atomize";

const NewName = ({newName,setNewName}) => {

    const handleNameChange = (event) => {
        console.log(`Name: ${event.target.value}`)
        setNewName(event.target.value)
      }

  return (
    <Input
    value={newName}
    onChange={handleNameChange}
    placeholder="Rank/Name"
    p={{ x: "2.5rem" }}
    prefix={
    <Icon
    name="UserSolid"
    color="warning800"
    size="16px"
    cursor="pointer"
    pos="absolute"
    top="50%"
    left="0.75rem"
    transform="translateY(-50%)"
        />
      }
    />
  );
}

export default NewName