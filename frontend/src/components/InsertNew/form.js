import React, {useState} from "react";
import Formcontent from "./formcontent";
import { Div, Button, Icon } from "atomize";




const Form = ({addName,
    newName,
    setNewName,
    newStatus,
    setnewStatus,
    newGroup,
    setnewGroup,
    newexcuse,
    setnewExcuse,
    newRole,
    setnewRole,
    setnewReason,
    }) => {
    
    const [show, setShow] = useState(false)

    const HandleShow = () => setShow(!show)

    if (show===false) {
        return (
          <Div d="flex">
            <Button
            prefix={
            <Icon
              name="EyeSolid"
              size="16px"
              color="white"
              m={{ r: "0.5rem" }}
              />}
              bg="warning700"
              hoverBg="warning800"
              rounded="circle"
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              >
                Insert New
            </Button>
          </Div>
        )} else {
          return (
            <>
            <Div d="flex">
            <Button
            prefix={
            <Icon
              name="EyeSolid"
              size="16px"
              color="white"
              m={{ r: "0.5rem" }}
              />}
              bg="warning700"
              hoverBg="warning800"
              rounded="circle"
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              >
                Hide
            </Button>
            </Div>
            <>
              <br/>
              <Formcontent 
              addName={addName}
              newName={newName}
              setNewName={setNewName}
              newStatus={newStatus}
              setnewStatus={setnewStatus}
              newGroup = {newGroup} 
              setnewGroup = {setnewGroup}
              newexcuse ={newexcuse}
              setnewExcuse = {setnewExcuse}
              newRole = {newRole}
              setnewRole = {setnewRole}
              setnewReason={setnewReason}
              />
              <br/>  
            </>
            </>
          )}
  }

export default Form