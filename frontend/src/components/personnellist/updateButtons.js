import React, {useState} from 'react'
import phoneservice from '../../services/phoneservice'
import UpdateStatus from './updateStatus'
import UpdateGroup from './updateGroup'
import { Button, ButtonGroup} from '@material-ui/core'
import UpdateRole from './updateRole'
import UpdateExcuse from './updateExcuse'

const Updatebuttons = ({person, id, setPersons, persons}) => {

  const [show, setShow] = useState(false)

  const HandleDelete = () => {
    if (window.confirm(`Are you sure you want to permanently delete ${person.name}?`)) {
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
          <button onClick={HandleShow}>Update</button>
          <Button onClick={HandleDelete}>Delete</Button>
          </ButtonGroup>
        </>
      )} else {
        setTimeout(HandleShow,10000)
        return (
          <>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <button onClick={HandleShow}>Hide</button>
            <Button onClick={HandleDelete}>Delete</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <UpdateStatus options={show} 
                          person={person}
                          persons={persons}
                          setPersons={setPersons}/>
            <UpdateGroup options={show} person={person} persons={persons} setPersons={setPersons}/>
            <UpdateRole options={show} person={person} persons={persons} setPersons={setPersons}/>
            <UpdateExcuse options={show} person={person} persons={persons} setPersons={setPersons}/>


            </ButtonGroup>

          </>
        )}
}

export default Updatebuttons
