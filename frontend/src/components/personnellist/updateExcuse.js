import React from "react"
import phoneservice from "../../services/phoneservice"
import {Button} from "@material-ui/core"
import Newdate from "../newdate"


const UpdateExcuse = ({options,person,persons,setPersons}) => {
    
  const Handleupdateexcuse = (event,value) => {  

    let response = prompt('Current excuses', `EXCUSE XXX FROM ${Newdate} TO ${Newdate}`)

    console.log(value)
        const newPerson = {
            name: person.name,
            status: person.status,
            reason: person.reason,
            group: person.group,
            excuse: response,
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

    if (options) {
      return (
        <div >
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={Handleupdateexcuse}>
        Group
      </Button>
        </div> 
      )
}
    }

    export default UpdateExcuse