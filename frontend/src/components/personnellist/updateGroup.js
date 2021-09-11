import React, {useState} from "react"
import phoneservice from "../../services/phoneservice"
import { Button, Menu, MenuItem } from "@material-ui/core"


const UpdateGroup = ({options,person,persons,setPersons}) => {
  
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    
  const HandleUpdateGroup = (event,value) => {  
    setAnchorEl(null);

    console.log(value)
        const newPerson = {
            name: person.name,
            status: person.status,
            reason: person.reason,
            group: event.target.getAttribute("value"),
            excuse: person.excuse,
            role: person.role
        }
    

  const nameCheck = persons.filter(person=> 
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
        )
    
    console.log(nameCheck)

    return (
        phoneservice
          .update(nameCheck[0].id, newPerson)
          .then(updatedList=> {setPersons(persons.map(person=>
              person.id !== nameCheck[0].id
                ? person
                : updatedList))
      }))

    }


    if (options) {
      return (
        <div >
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Group
      </Button>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClick={HandleUpdateGroup}
          onClose={handleClose}>
            <MenuItem value='hq'>HQ</MenuItem>
            <MenuItem value='ccp'>FG1 - CCP</MenuItem>
            <MenuItem value='csp'>FG2 - CSP</MenuItem>
            <MenuItem value='others'>Others</MenuItem>
            </Menu>

        </div> 
      )} else
      return (
        <>
        </>
      )
    } 

    export default UpdateGroup