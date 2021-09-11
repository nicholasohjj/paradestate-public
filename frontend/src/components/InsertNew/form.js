import React, {useState} from "react";
import Formcontent from "./formcontent";
import {ButtonGroup} from '@material-ui/core'


const Form = ({addName,
    newName,
    handleNameChange,
    newStatus,
    handleStatusChange,
    newGroup,
    handleGroupChange,
    newexcuse,
    handleExcuseChange,
    newRole,
    handleRoleChange}) => {
    
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
              handleNameChange={handleNameChange}
              newStatus={newStatus}
              handleStatusChange={handleStatusChange}
              newGroup = {newGroup} 
              handleGroupChange = {handleGroupChange}
              newexcuse ={newexcuse}
              handleExcuseChange = {handleExcuseChange}
              newRole = {newRole}
              handleRoleChange = {handleRoleChange}
              />
  
            </>
          )}
  }

export default Form