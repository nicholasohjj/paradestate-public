import React from 'react'
import { FormControl, Select, MenuItem, InputLabel, makeStyles, TextField, Button } from '@material-ui/core';
import Newdate from '../reusable/newdate';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 177,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

  const handleNameChange = (event) => {
    console.log(`Name: ${event.target.value}`)
    setNewName(event.target.value)
  }

  const handleStatusChange = (event) => {
  console.log(`Status: ${event.target.value}`)
    setnewStatus(event.target.value)

    let detailresponse = ''
    if (event.target.value === 'mc') {
      detailresponse = prompt('Details',`MC FROM ${Newdate} TO ${Newdate}`)
    } else if (event.target.value === 'ma') {
      detailresponse = prompt('Details',`MA AT`)
    } else if (event.target.value === 'off') {
      detailresponse = prompt('Details',`OFF ON ${Newdate}`)
    } else if (event.target.value === 'leave') {
      detailresponse = prompt('Details',`LEAVE ON ${Newdate}`)
    } else if (event.target.value === 'attachedout') {
      detailresponse = prompt('Details',`ATTACHED OUT TO`)
    } else if (event.target.value === 'others') {
      detailresponse = prompt('Details',``)
    } else {
      detailresponse = ''
    }
    console.log(`Reason: ${detailresponse}`)
    if (detailresponse) {
      setnewReason(detailresponse.toUpperCase())
    }
    }


const handleGroupChange = (event) => {
  console.log(`Group: ${event.target.value}`)
  setnewGroup(event.target.value)
}

const handleExcuseChange = (event) => {
  console.log(`Excuse: ${event.target.value}`)
  setnewExcuse(event.target.value)
}

const handleRoleChange = (event) => {
  console.log(`Role: ${event.target.value}`)
  setnewRole(event.target.value)
}

    return (
      <div>
        <form onSubmit={addName}>
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Rank/Name"
              multiline
              maxRows={4}
              value={newName}
              onChange={handleNameChange}
              />  
          </div>

          <div>
            <FormControl className={useStyles().formControl}>
              <InputLabel id="demo-simple-select-label">Current Status</InputLabel>
              <Select
              labelId="status"
              id="status"
              value ={newStatus}
              onChange = {handleStatusChange}
              >
              <MenuItem value='present'>Present ✅</MenuItem>
              <MenuItem value='mc'>MC 😷</MenuItem>
              <MenuItem value='ma'>MA 👨🏻‍⚕️</MenuItem>
              <MenuItem value='off'>Off 🚫</MenuItem>
              <MenuItem value='leave'>Leave 🚪</MenuItem>
              <MenuItem value='attached'>Attached Out 🅰</MenuItem>
              <MenuItem value='others'>Others 🗒</MenuItem>
              <MenuItem value='stayout'>Stay Out 🏠</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl className={useStyles().formControl}>
              <InputLabel id="demo-simple-select-label">Group</InputLabel>
              <Select
              labelId="group"
              id="group"
              value ={newGroup}
              onChange = {handleGroupChange}
              >
              <MenuItem value='HQ'>HQ</MenuItem>
              <MenuItem value='CCP'>FG1 - CCP</MenuItem>
              <MenuItem value='CSP'>FG2 - CSP</MenuItem>
              <MenuItem value='OTHERS'>Others</MenuItem>

              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl className={useStyles().formControl}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
              labelId="role"
              id="role"
              value ={newRole}
              onChange = {handleRoleChange}
              >
              <MenuItem value='hq'>Coy HQ</MenuItem>
              <MenuItem value='sevenspec'>7th Mono Spec</MenuItem>
              <MenuItem value='ic2'>IC2 Opr</MenuItem>
              <MenuItem value='is'>IS Opr</MenuItem>

              </Select>
            </FormControl>
          </div>

          <div>
          <TextField
              id="standard-multiline-flexible"
              label="Medical Excuses"
              multiline
              maxRows={4}
              value={newexcuse}
              onChange={handleExcuseChange}
              />

          </div>

          <div>
            <Button variant="contained" color="primary" type="submit">Add</Button>
          </div>
          
        </form>
      </div>
    )
  }

  export default Formcontent