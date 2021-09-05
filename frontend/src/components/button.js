import React, {useState} from 'react'
import phoneservice from './phoneservice'
import Options from './options'

const ShowUpdate = ({person,persons,setPersons}) => {

  const [show, setShow] = useState(false)

  const HandleShow = () => setShow(!show)
  
  if (show===false) {
      return <button onClick={HandleShow}>Update Status</button>
  } else {
      return (
      <>
          <button onClick ={HandleShow}>Hide Statuses</button>
          <br/>
          <Options options={show} person={person} persons={persons} setPersons={setPersons}/>
      </>
      )
  }
    }

const Button = ({person, id, setPersons, persons}) => {


  const HandleDelete = () => {
    if (window.confirm(`Do you want to delete ${person.name}`)) {
      phoneservice
        .removePerson(id)
        setPersons(persons.filter(person=>person.id !==id))
        }
  }



  return (
    <>
    <ShowUpdate person={person.name} persons={persons} setPersons={setPersons}/>
    <button onClick={HandleDelete}>Delete</button>
    <br/>
    </>
  )
}

export default Button