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
          <NewExcuse newexcuse={newexcuse} setnewExcuse={setnewExcuse}/>
          <br/>
          <NewStatusDropDown setnewStatus={setnewStatus} newStatus={newStatus} setnewReason={setnewReason}/>
          <br/>
          <NewGroupdropdown setnewGroup={setnewGroup} newGroup={newGroup}/>
          <br/>
          <NewRoleDropDown setnewRole={setnewRole} newRole={newRole}/>
          <br/>
          <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Button
            textColor="white"
            type='submit'
            rounded="xl"
              bg="black700"
              hoverBg="black800"
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4" 
              >
                Submit
            </Button>
      </Div>
        </form>
      </Div>
    )
  }

  export default Formcontent