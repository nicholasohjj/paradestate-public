import React from "react";
import {Icon, Div, Input } from "atomize";
import NewCDO from "./newcdo";
import NewCDS from "./newcds";
import NewCOS from "./newcos";
import NewAS from "./newas";

const Settings = ({
    setnewcdo,
    setnewcds,
    setnewcos,
    setnewas,
    newauthor,
    setnewauthor,
    persons
}) => {

  const handleauthorchange = (event) => {
    console.log(`Done by: ${event.target.value}`)
    setnewauthor(event.target.value)
  }

    return (
        <Div>
          <h1>Settings</h1>
          <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    rounded="xl"
    value={newauthor}
    onChange={handleauthorchange}
    placeholder="Done By: (Rank/Name)"
    p={{ l: '2rem', r: '3rem' }}
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
          <NewCDO persons={persons} setnewcdo={setnewcdo}/>
          <NewCDS persons={persons} setnewcds={setnewcds}/>
          <NewCOS persons={persons} setnewcos={setnewcos}/>
          <NewAS persons={persons} setnewas={setnewas}/>


        </Div>
    )
}

export default Settings