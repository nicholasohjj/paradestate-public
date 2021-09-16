import React from "react";
import { Input, Icon } from "atomize";

const NewExcuse = ({newexcuse,setnewExcuse}) => {

    const handleExcuseChange = (event) => {
        console.log(`Excuse: ${event.target.value}`)
        setnewExcuse(event.target.value)
      }

  return (
    <Input
    value={newexcuse}
    onChange={handleExcuseChange}
    placeholder="Medical Excuses"
    p={{ x: "2.5rem" }}
    prefix={
    <Icon
    name="RemoveSolid"
    color="danger800"
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

export default NewExcuse