import React, {useState} from "react";
import Formcontent from "./formcontent";
import { Div, Button, Icon } from "atomize";
import phoneservice from "../../services/phoneservice";

const Form = ({setNewMessage,persons,setPersons}) => {

      const [ newName, setNewName ] = useState('')
const [ newStatus, setnewStatus ] = useState('')
const [ newReason, setnewReason ] = useState('')
const [ newGroup, setnewGroup ] = useState('')
const [ newexcuse, setnewExcuse ] = useState('')
const [ newRole, setnewRole ] = useState('')

const addName = (event) => {
  event.preventDefault()
  console.log(newexcuse)

  const newPerson = {
    name: newName.trim().toUpperCase(),
    status: newStatus.toLowerCase(),
    reason: (newReason) ? newReason : 'nil',
    group: newGroup.toUpperCase(),
    excuse: (newexcuse) ? newexcuse : 'nil',
    role: newRole
  }

  const nameCheck = persons.filter(person=> 
    person.name.toLowerCase().includes(newPerson.name.toLowerCase())
    )
  
  console.log(nameCheck)

  if (!newName.trim() || !newStatus.trim() || !newGroup.trim() || !newRole.trim()) {
    alert("All fields (other than medical excuses) must be filled.")
  } else if (nameCheck.length>0) {
    if (window.confirm(`${newName.toUpperCase()} is already added to phonebook. Would you like to update the status?`)) {
      return (
        phoneservice
          .update(nameCheck[0].id, newPerson)
          .then(updatedList=> {setPersons(persons.map(person=>
              person.id !== nameCheck[0].id
                ? person
                : updatedList))
        setNewMessage(`${newName.toUpperCase()} has been updated`)
        setTimeout(()=>setNewMessage(null),5000)
      })
          .catch(error=> {
            setNewMessage(`${newName.toUpperCase()} has been already been removed from the server`)
            setTimeout(()=>setNewMessage(null),5000)
          })
      )}
    } else {
      phoneservice
        .addNew(newPerson)
        .then(updatedList => {
            setPersons(persons.concat(updatedList))
            setNewMessage(`${newName.toUpperCase()} has been added`)
            setTimeout(()=>setNewMessage(null),5000)
          })
        .catch(error=> {
          setNewMessage(`${newName.toUpperCase()} has already been added to the server`)
          setTimeout(()=>setNewMessage(null),5000)
        })
      }
      setnewStatus('')
      setNewName('')
      setnewReason('')
      setnewGroup('')
      setnewExcuse('')
      setnewRole('')

    }

    
    const [show, setShow] = useState(false)

    const HandleShow = () => setShow(!show)

    if (show===false) {
        return (
          <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Button
            textColor="black"
            rounded="xl"
              bg="success700"
              hoverBg="success600"
              m={{ r: "0.5rem",y: "0.5rem" }}
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon
                name="Add"
                size="16px"
                color="black"
                m={{ l: "1rem" }}
                
              />} 
              >
                Add
            </Button>
          </Div>
        )} else {
          return (
            <>
            <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Button
            textColor="black"
            rounded="xl"
              bg="success700"
              hoverBg="success600"
              m={{ r: "0.5rem",y: "0.5rem" }}
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon
                name="Add"
                size="16px"
                color="black"
                m={{ l: "1rem" }}
                
              />} 
              >
                Hide
            </Button>
            </Div>
            <>
              <br/>
              <Formcontent 
              addName={addName}
              newName={newName}
              setNewName={setNewName}
              newStatus={newStatus}
              setnewStatus={setnewStatus}
              newGroup = {newGroup} 
              setnewGroup = {setnewGroup}
              newexcuse ={newexcuse}
              setnewExcuse = {setnewExcuse}
              newRole = {newRole}
              setnewRole = {setnewRole}
              setnewReason={setnewReason}
              />
              <br/>  
            </>
            </>
          )}
  }

export default Form