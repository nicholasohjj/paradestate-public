import React, {useState} from "react"
import phoneservice from "../../services/phoneservice"
import { Button, Menu, MenuItem } from "@material-ui/core"


const UpdateStatus = ({options,person,persons,setPersons}) => {
  
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    
  const HandleUpdateStatus = (event,value) => {  
    setAnchorEl(null);

    console.log(value)
        const newPerson = {
            name: person.name,
            status: event.target.getAttribute("value"),
            reason: person.reason,
            group: person.group,
            excuse: person.excuse,
            role: person.role
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
        Status
      </Button>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClick={HandleUpdateStatus}
          onClose={handleClose}>
            <MenuItem value='present' >Present ✅</MenuItem>
            <MenuItem value='mc'>MC 😷</MenuItem>
            <MenuItem value='ma'>MA 👨🏻‍⚕️</MenuItem>
            <MenuItem value='off'>Off 🚫</MenuItem>
            <MenuItem value='leave'>Leave 🚪</MenuItem>
            <MenuItem value='attached'>Attached Out 🅰</MenuItem>
            <MenuItem value='others'>Others 🗒</MenuItem>
            <MenuItem value='stayout'>Stay Out 🏠</MenuItem>
            </Menu>

        </div> 
      )} else
      return (
        <>
        </>
      )
    } 

    export default UpdateStatus