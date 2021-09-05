import React, {useState} from 'react'
import phoneservice from './phoneservice'
import Options from './options'



const Button = ({person, id, setPersons, persons}) => {

  const [options, setOptions] = useState(false)

  const HandleDelete = () => {
    if (window.confirm(`Do you want to delete ${person.name}`)) {
      phoneservice
        .removePerson(id)
        setPersons(persons.filter(person=>person.id !==id))
        }
  }

  const HandleUpdate = () => setOptions(!options)


  return (
    <>
    <button onClick={HandleDelete}>Delete</button>
    <button onClick={HandleUpdate}>Update</button>
    <br/>
    <Options options={options} person={person.name} persons={persons} setPersons={setPersons}/>
    </>
  )
}

export default Button