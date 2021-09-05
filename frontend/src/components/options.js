import React from "react"
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
    }
    if (options) {
      return (
        <>
        <button value='present' onClick={UpdateStatus}>✅</button>
        <button value='mc'onClick>😷</button>
        <button value='ma' onClick>👨🏻‍⚕️</button>
        <button value='off'onClick>🚫</button>
        <button value='leave'onClick>🚪</button>
        <button value='attached' onClick>🅰</button>
        <button value='others' onClick>🗒</button>
        <button value='stayout' onClick>🏠</button>
        </> 
      )} else
      return (
        <>
        </>
      )
    } 

    export default Options