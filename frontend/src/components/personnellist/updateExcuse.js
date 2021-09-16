import React from "react"
import phoneservice from "../../services/phoneservice"
import { Div, Button } from "atomize"

const UpdateExcuse = ({options,person,persons,setPersons}) => {
    
  const Handleupdateexcuse = (event,value) => {  

    console.log(value)
    let response = prompt('Current excuses', person.excuse)
    if (response) {
      const newPerson = {
        name: person.name,
        status: person.status,
        reason: person.reason,
        group: person.group,
        excuse: response.toUpperCase(),
        role: person.role
    }
    const nameCheck = persons.filter(person=> 
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
        )
    
    console.log(nameCheck)

    if (response) {
      return (
        phoneservice
          .update(nameCheck[0].id, newPerson)
          .then(updatedList=> {setPersons(persons.map(person=>
              person.id !== nameCheck[0].id
                ? person
                : updatedList))
      }))  
    }

    }
    }

    if (options) {
      return (
          <Div d="flex">
          <Button 
          bg="white"
          textColor="black"
          aria-controls="simple-menu" aria-haspopup="true" onClick={Handleupdateexcuse}>
        Excuses
      </Button>
        </Div> 
      )
}
    }

    export default UpdateExcuse