import React, {useState} from "react"
import phoneservice from "../../services/phoneservice"
import { Button, Menu, MenuItem } from "@material-ui/core"


const UpdateRole = ({options,person,persons,setPersons}) => {
  
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    
  const HandleUpdateStatus = (event) => {  
    setAnchorEl(null);

    console.log(event.target.getAttribute("value"))
        const newPerson = {
            name: person.name,
            status: person.status,
            reason: person.reason,
            group: person.group,
            excuse: person.excuse,
            role: event.target.getAttribute("value")
        }
    

  const nameCheck = persons.filter(person=> 
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
        )
    
    console.log(nameCheck)

    if (event.target.getAttribute("value")) {
      return (
        phoneservice
          .update(nameCheck[0].id, newPerson)
          .then(updatedList=> {setPersons(persons.map(person=>
              person.id !== nameCheck[0].id
                ? person
                : updatedList))
      }))
    }
    }


    if (options) {
      return (
        <div >
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Role
      </Button>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClick={HandleUpdateStatus}
          onClose={handleClose}>
            <MenuItem value='hq' >Coy HQ</MenuItem>
            <MenuItem value='sevenspec'>7th Mono Spec</MenuItem>
            <MenuItem value='ic2'>IC2 Opr</MenuItem>
            <MenuItem value='is'>IS Opr</MenuItem>
            </Menu>

        </div> 
      )} else
      return (
        <>
        </>
      )
    } 

    export default UpdateRole