import React, {useState} from "react";
import Formcontent from "./formcontent";
import {ButtonGroup} from '@material-ui/core'


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
          <>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <button onClick={HandleShow}><h3>Insert New</h3></button>
            </ButtonGroup>
          </>
        )} else {
          return (
            <>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <button onClick={HandleShow}><h3>Hide</h3></button>
              </ButtonGroup>
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
          )}
  }

export default Form