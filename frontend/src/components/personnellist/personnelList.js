import React, {useState} from 'react'
import Updatebuttons from './updateButtons'; 
import Emojidisplay from '../emoji';
import Reason from '../reason';
import {ButtonGroup} from '@material-ui/core'


const Personnellist = ({setPersons, persons}) => {
  const [show, setShow] = useState(false)

  const HandleShow = () => setShow(!show)

  if (show===false) {
    return (
      <>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <button onClick={HandleShow}><h3>Show Personnel List</h3></button>
        </ButtonGroup>
      </>
    )} else {
      return (
        <div>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <button onClick={HandleShow}><h3>Hide Personnel List</h3></button>
          </ButtonGroup>
          <br/>
          <ol>
            {persons.map(person=>
              <li key={person.name}>
                {person.name}
                <Emojidisplay currentStatus ={person.status} />
                <Reason person = {person} />
                <br/>
                <Updatebuttons person={person}
                               id={person.id}
                               setPersons={setPersons}
                               persons={persons}/>
              </li>
            )}
          </ol>
        </div>
      )
  }

    
  }

  export default Personnellist