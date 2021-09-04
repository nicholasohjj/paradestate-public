import React, {useState} from 'react'
import phoneservice from './phoneservice'




const Button = ({person, id, setPersons, persons}) => {

  const [options, setOptions] = useState(false)

  const Options = () => {
    if (options) {
      return (
        <>
        <button onClick={HandleDelete}>✅</button>
        <button onClick={HandleUpdate}>😷</button>
        <button onClick={HandleUpdate}>👨🏻‍⚕️</button>
        <button onClick={HandleUpdate}>🚫</button>
        <button onClick={HandleUpdate}>🚪</button>
        <button onClick={HandleUpdate}>🅰</button>
        <button onClick={HandleUpdate}>🗒</button>
        <button onClick={HandleUpdate}>🏠</button>
        </> 
      )} else
      return (
        <>
        </>
      )
    } 


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
    <Options />
    </>
  )
}

export default Button