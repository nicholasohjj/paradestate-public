import React from "react"
import phoneservice from "./phoneservice"
import { ButtonGroup } from "@material-ui/core"
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
          <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group" onClick={UpdateStatus}>
            <button value='present'>✅</button>
            <button value='mc'>😷</button>
            <button value='ma'>👨🏻‍⚕️</button>
            <button value='off'>🚫</button>
            <button value='leave'>🚪</button>
            <button value='attached'>🅰</button>
            <button value='others'>🗒</button>
            <button value='stayout'>🏠</button>
          </ButtonGroup>
        </> 
      )} else
      return (
        <>
        </>
      )
    } 

    export default Options