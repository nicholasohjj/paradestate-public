import React, { useEffect, useState } from 'react'
import Message from './components/message'
import Form from './components/insertnew/form'
import Results from './components/personnellist/personnelList'
import Settings from './components/settings' 
import phoneservice from './services/phoneservice'
import Greeting from './components/greeting'
import Summary from './components/summary/summary'
import ParadeState from './components/paradestate'

//App component
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newStatus, setnewStatus ] = useState('')
  const [ newReason, setnewReason ] = useState('')

  const [ newGroup, setnewGroup ] = useState('')
  const [ newexcuse, setnewExcuse ] = useState('')
  const [ newRole, setnewRole ] = useState('')
  
  
  const [newcdo, setnewcdo] = useState('')
  const [newcds, setnewcds] = useState('')
  const [newcos, setnewcos] = useState('')
  const [newas, setnewas] = useState('')
  const [newauthor, setnewauthor] = useState('')



  const [ newMessage, setNewMessage ] = useState(null)

  useEffect(() =>{
    phoneservice
      .getAll()
      .then(allPersons=>{
        setPersons(allPersons)
      })
  },[])
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleStatusChange = (event) => {
    console.log(event.target.value)
    setnewStatus(event.target.value)

    if (event.target.value=='mc') {
      setnewReason('MC FROM XXXXXX TO XXXXXX')
    } else if (event.target.value=='ma') {
      setnewReason('MA AT XXXXXX')
    } else if (event.target.value=='off') {
      setnewReason(`off ON XXXXXX`)
    } else if (event.target.value=='others') {
      setnewReason(`others`)
    } else {
      setnewReason(`nil`)
    }
  }

  const handleGroupChange = (event) => {
    console.log(event.target.value)
    setnewGroup(event.target.value)
  }
  
  const handleExcuseChange = (event) => {
    console.log(event.target.value)
    setnewExcuse(event.target.value)
  }

  const handleRoleChange = (event) => {
    console.log(event.target.value)
    setnewRole(event.target.value)
  }

  const handlecdochange = (event) => {
      console.log(event.target.value)
      setnewcdo((event.target.value))
    }

  const handlecdschange = (event) => {
      console.log(event.target.value)
      setnewcds(event.target.value)
    }

  const handlecoschange = (event) => {
      console.log(event.target.value)
      setnewcos(event.target.value)
    }

    const handleaschange = (event) => {
      console.log(event.target.value)
      setnewas(event.target.value)
    }

    const handleauthorchange = (event) => {
      console.log(event.target.value)
      setnewauthor(event.target.value)
    }

  //Adds new element to persons array
  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName.trim().toUpperCase(),
      status: newStatus.toLowerCase(),
      reason: newReason,
      group: newGroup.toUpperCase(),
      excuse: newexcuse.trim,
      role: newRole
    }

    const nameCheck = persons.filter(person=> 
      person.name.toLowerCase().includes(newPerson.name.toLowerCase())
      )
    
    console.log(nameCheck)

    if (!newName.trim() || !newStatus.trim() || !newGroup.trim()) {
      alert("Name/status/Group must be filled")
    } else if (nameCheck.length>0) {
      if (window.confirm(`${newName} is already added to phonebook. Would you like to update the status?`)) {
        return (
          phoneservice
            .update(nameCheck[0].id, newPerson)
            .then(updatedList=> {setPersons(persons.map(person=>
                person.id !== nameCheck[0].id
                  ? person
                  : updatedList))
          setNewMessage(`${newName} has been updated`)
          setTimeout(()=>setNewMessage(null),5000)
        })
            .catch(error=> {
              setNewMessage(`${newName} has been already been removed from the server`)
              setTimeout(()=>setNewMessage(null),5000)
            })
        )}
      } else {
        phoneservice
          .addNew(newPerson)
          .then(updatedList => {
              setPersons(persons.concat(updatedList))
              setNewMessage(`${newName} has been added`)
              setTimeout(()=>setNewMessage(null),5000)
            })
          .catch(error=> {
            setNewMessage(`${newName} has already been added to the server`)
            setTimeout(()=>setNewMessage(null),5000)
          })
        }
        setnewStatus('')
        setNewName('')
      }

  return (
    <div>
      <h2>Parade State Application (For Internal Use Only)</h2>
      <Message message={newMessage}/>
      <Form addName={addName}
            newName={newName}
            handleNameChange={handleNameChange}
            newStatus={newStatus}
            handleStatusChange={handleStatusChange}
            newGroup = {newGroup} 
            handleGroupChange = {handleGroupChange}
            newexcuse ={newexcuse}
            handleExcuseChange = {handleExcuseChange}
            newRole ={newRole}
            handleRoleChange = {handleRoleChange}/>
      <Results setPersons={setPersons} persons={persons} />
      <h2>Settings</h2>
      <Settings newcdo={newcdo}
                handlecdochange={handlecdochange}
                newcds={newcds}
                handlecdschange={handlecdschange}
                newcos={newcos}
                handlecoschange={handlecoschange}
                newas={newas}
                handleaschange={handleaschange}/>
      <h2>Parade State</h2>
      <Greeting />
      <Summary persons={persons}
               newcdo={newcdo}
               newcds={newcds}
               newcos={newcos}
               newas={newas}
               newauthor = {newauthor}
               handleauthorchange ={handleauthorchange}
               />
      <ParadeState setPersons={setPersons}
                  persons={persons}
                  newauthor={newauthor} />

      </div>
  )
}

export default App 