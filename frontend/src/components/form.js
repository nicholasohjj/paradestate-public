import React from 'react'
import { FormControl, Select, MenuItem, InputLabel, makeStyles, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
  
const Form = ({addName,newName,handleNameChange,newStatus,handleStatusChange}) => {
    return (
      <div>
        <form onSubmit={addName}>
        <TextField id="outlined-basic" label="Rank/Name" variant="outlined" value ={newName} onChange={handleNameChange}/>
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
        <div>
          <button type="submit">add</button>
        </div>
        </form>
      </div>
    )
  }

  export default Form