import React from 'react'
import { FormControl, Select, MenuItem, InputLabel, makeStyles, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 177,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
  
const Form = ({addName,newName,handleNameChange,newStatus,handleStatusChange}) => {
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
              <MenuItem value='present'>Present</MenuItem>
              <MenuItem value='mc'>MC</MenuItem>
              <MenuItem value='ma'>MA</MenuItem>
              <MenuItem value='off'>Off</MenuItem>
              <MenuItem value='leave'>Leave</MenuItem>
              <MenuItem value='attached'>Attached Out</MenuItem>
              <MenuItem value='others'>Others</MenuItem>
              <MenuItem value='stayout'>Stay Out</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <Button variant="contained" color="primary" type="submit">Add</Button>
          </div>
          
        </form>
      </div>
    )
  }

  export default Form