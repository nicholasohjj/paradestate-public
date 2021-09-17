import React from "react";
import { Input, Icon, Div } from "atomize";

const NewExcuse = ({newexcuse,setnewExcuse}) => {

    const handleExcuseChange = (event) => {
        console.log(`Excuse: ${event.target.getAttribute("value")}`)
          setnewExcuse(event.target.value)
        }

  return (
    <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
    <Input
    rounded="xl"
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
      </Div>
    
  );
}

export default NewExcuse