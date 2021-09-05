import React, {useState} from 'react'
import phoneservice from './phoneservice'
import Options from './options'
import { Button, ButtonGroup} from '@material-ui/core'

const Buttons = ({person, id, setPersons, persons}) => {

  const [show, setShow] = useState(false)

  const HandleDelete = () => {
    if (window.confirm(`Do you want to delete ${person.name}`)) {
      phoneservice
        .removePerson(id)
        setPersons(persons.filter(person=>person.id !==id))
        }
  }

  const HandleShow = () => setShow(!show)
  
  if (show===false) {
      return (
        <>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <button onClick={HandleShow}>Update Status</button>
          <Button onClick={HandleDelete}>Delete</Button>
          </ButtonGroup>
        </>
      )} else {
        return (
          <>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <button onClick={HandleShow}>Update Status</button>
            <Button onClick={HandleDelete}>Delete</Button>
            <br/>
            <Options options={show} person={person} persons={persons} setPersons={setPersons}/>
            </ButtonGroup>
          </>
        )}
}

export default Buttons
