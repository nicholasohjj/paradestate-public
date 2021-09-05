import React from 'react'
import { FormControl, Select, MenuItem, InputLabel, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Input = ({text,value,onChange}) => {
    return (
      <div>
      {text}: 
            <input value={value} onChange={onChange}/>
      </div>
    )
  }
  
const Form = ({addName,newName,handleNameChange,newStatus,handleStatusChange}) => {
    return (
      <div>
        <form onSubmit={addName}>
        <Input text="Rank/Name " value ={newName} onChange={handleNameChange}/>
        
        <FormControl className={useStyles().formControl}>
        <InputLabel id="demo-simple-select-label">Current Status</InputLabel>
        <Select
          labelId="status"
          id="status"
          value ={newName}
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