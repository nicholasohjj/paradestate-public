import React, { useEffect, useState } from 'react'
import Form from './components/insertnew/form'
import Personnellist from './components/personnellist/personnelList'
import Settings from './components/settings/settings' 
import phoneservice from './services/phoneservice'
import Greeting from './components/title/greeting'
import Summary from './components/summary/summary'
import ParadeState from './components/contents/paradestate'
import { useUser, UserButton } from '@clerk/clerk-react'
import { Div, Text } from 'atomize'
import Footer from './components/Footer'


//App component
const Appcontent = () => {
  const [ persons, setPersons ] = useState([]) 
  
  const [newcdo, setnewcdo] = useState('')
  const [newcds, setnewcds] = useState('')
  const [newcos, setnewcos] = useState('')
  const [newauthor, setnewauthor] = useState('')
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
      <Div d='flex' align="center"p="1rem"  justify="space-between" bg="white" rounded="md">
      <Text m={{ l: "0.5rem"}} textWeight="500">Hello, {firstName}!</Text> 
      <UserButton />
      </Div>
      <Form persons={persons} setPersons={setPersons} />
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
      <Div bg="brand100" p="1rem" rounded="xl"> 
      <Text textSize="heading">Parade State</Text>
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
      <Footer/>
      </Div>
  )
}

export default Appcontent 