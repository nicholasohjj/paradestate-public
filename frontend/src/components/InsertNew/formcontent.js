import React from 'react'
import NewGroupdropdown from './newGroupdropdown';
import NewRoleDropDown from './newRoledropdown'
import NewStatusDropDown from './newStatusDropDown'
import NewName from './newName'
import NewExcuse from './newExcuse';
import {Div, Icon,Button} from "atomize";

const Formcontent = ({addName,
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
               setnewReason
              }) => {

    return (
      <Div>
        <form onSubmit={addName}>
          <NewName newName={newName} setNewName={setNewName}/>
          <br/>
          <NewStatusDropDown setnewStatus={setnewStatus} newStatus={newStatus} setnewReason={setnewReason}/>
          <br/>
          <NewGroupdropdown setnewGroup={setnewGroup} newGroup={newGroup}/>
          <br/>
          <NewRoleDropDown setnewRole={setnewRole} newRole={newRole}/>
          <br/>
          <NewExcuse newexcuse={newexcuse} setnewExcuse={setnewExcuse}/>
          <br/>
          <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Button suffix={
      <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />}
      bg="black"
      hoverBg="black400"
      variant="contained" color="primary" type="submit">Add</Button>
      </Div>
        </form>
      </Div>
    )
  }

  export default Formcontent