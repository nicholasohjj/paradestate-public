import React, { useEffect, useState } from 'react'
import Message from './components/message'
import Form from './components/InsertNew/form'
import Personnellist from './components/personnellist/personnelList'
import Settings from './components/settings/settings' 
import phoneservice from './services/phoneservice'
import Greeting from './components/title/greeting'
import Summary from './components/summary/summary'
import ParadeState from './components/contents/paradestate'
import { useUser, UserButton } from '@clerk/clerk-react'
import { Div, Text } from 'atomize'

//App component
const Appcontent = () => {
  const [ persons, setPersons ] = useState([]) 
  
  const [newcdo, setnewcdo] = useState('')
  const [newcds, setnewcds] = useState('')
  const [newcos, setnewcos] = useState('')
  const [newauthor, setnewauthor] = useState('')

  const [ newMessage, setNewMessage ] = useState(null)

  const { firstName } = useUser();

  useEffect(() =>{
    phoneservice
      .getAll()
      .then(allPersons=>{
        setPersons(allPersons)
      })
  },[])

  return (
    <Div>
      <Div d='flex' align="center"p="1rem">
      <UserButton />
      <Text >Hello, {firstName}!</Text> 
      </Div>
      <Message message={newMessage}/>
      <Form setNewMessage={setNewMessage} persons={persons} setPersons={setPersons} />
      <Personnellist setPersons={setPersons} persons={persons}/>
      <Settings newcdo={newcdo}
                setnewcdo={setnewcdo}
                newcds={newcds}
                setnewcds={setnewcds}
                newcos={newcos}
                setnewcos={setnewcos}
                newauthor = {newauthor}
                setnewauthor ={setnewauthor}
                persons={persons}/>
      <h2>Parade State</h2>
      <Greeting />
      <Summary persons={persons}
               newcdo={newcdo}
               newcds={newcds}
               newcos={newcos}
               />
      <ParadeState setPersons={setPersons}
                  persons={persons}
                  newauthor={newauthor} />

      </Div>
  )
}

export default Appcontent 