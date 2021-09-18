import React, {useState} from "react";
import {Button, Icon, Div, Input } from "atomize";
import NewCDO from "./newcdo";
import NewCDS from "./newcds";
import NewCOS from "./newcos";


const Settings = ({
    setnewcdo,
    setnewcds,
    setnewcos,
    setnewas,
    newauthor,
    setnewauthor,
    persons
}) => {
  const [show, setShow] = useState(false)

  const HandleShow = () => setShow(!show)
  
  const handleauthorchange = (event) => {
    console.log(`Done by: ${event.target.value}`)
    setnewauthor(event.target.value)
  }

  if (show===false) {
    return (
      <>
                <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Button
            textColor="white"
            rounded="xl"
              bg="black700"
              hoverBg="black600"
              m={{ r: "0.5rem",y: "0.5rem" }}
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon name="SettingsSolid" size="20px" color="white"
                m={{ l: "1rem" }}/>
                } 
              >
                Settings
            </Button>
    </Div>
      </>
    )} else {
      return (
        <>
      <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Button
            textColor="white"
            rounded="xl"
              bg="black700"
              hoverBg="black600"
              m={{ r: "0.5rem",y: "0.5rem" }}
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon
                name="SettingsSolid"
                size="16px"
                color="white"
                m={{ l: "1rem" }}
                
              />} 
              >
                Hide
            </Button>
    </Div>
    <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    m={{ r: "0.5rem",y: "0.5rem" }}
    rounded="xl"
    value={newauthor}
    onChange={handleauthorchange}
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
          <NewCDO  persons={persons} setnewcdo={setnewcdo}/>
          <NewCDS persons={persons} setnewcds={setnewcds}/>
          <NewCOS persons={persons} setnewcos={setnewcos}/>
        </>
      )
  }
}

export default Settings