import React from "react"
import phoneservice from "./phoneservice"

const Options = ({options,person,persons,setPersons}) => {
    
    const UpdateStatus = (event) => {       
        const newPerson = {
            name: person,
            status: event.target.value
        }
    

    const nameCheck = persons.filter(person=> 
        person.name.toLowerCase().includes(newPerson.name.toLowerCase())
        )
    
    console.log(nameCheck)

    return (
        phoneservice
          .update(nameCheck[0].id, newPerson)
          .then(updatedList=> {setPersons(persons.map(person=>
              person.id !== nameCheck[0].id
                ? person
                : updatedList))
      }))
    }


    if (options) {
      return (
        <>
        <button value='present' onClick={UpdateStatus}>✅</button>
        <button value='mc'onClick={UpdateStatus}>😷</button>
        <button value='ma' onClick={UpdateStatus}>👨🏻‍⚕️</button>
        <button value='off'onClick={UpdateStatus}>🚫</button>
        <button value='leave'onClick={UpdateStatus}>🚪</button>
        <button value='attached' onClick={UpdateStatus}>🅰</button>
        <button value='others' onClick={UpdateStatus}>🗒</button>
        <button value='stayout' onClick={UpdateStatus}>🏠</button>
        </> 
      )} else
      return (
        <>
        </>
      )
    } 

    export default Options