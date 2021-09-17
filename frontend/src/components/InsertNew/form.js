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
          <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Button
            textColor="black"
            rounded="xl"
              bg="success700"
              hoverBg="success600"
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon
                name="Add"
                size="16px"
                color="black"
                m={{ l: "1rem" }}
                
              />} 
              >
                Add
            </Button>
          </Div>
        )} else {
          return (
            <>
            <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Button
            textColor="black"
            rounded="xl"
              bg="success700"
              hoverBg="success600"
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon
                name="Add"
                size="16px"
                color="black"
                m={{ l: "1rem" }}
                
              />} 
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