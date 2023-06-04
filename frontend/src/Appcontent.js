import React, { useEffect, useState } from 'react';
import { useUser, UserButton } from '@clerk/clerk-react';
import { Div, Text } from 'atomize';
import phoneservice from './services/phoneservice';
import Footer from './components/Footer';
import Form from './components/insertnew/form';
import Personnellist from './components/personnellist/personnelList';
import Settings from './components/settings/settings';
import Greeting from './components/title/greeting';
import Summary from './components/summary/summary';
import ParadeState from './components/contents/paradestate';

const AppContent = () => {
  const [persons, setPersons] = useState([]);
  const [newcdo, setNewCdo] = useState('');
  const [newcds, setNewCds] = useState('');
  const [newcos, setNewCos] = useState('');
  const [newauthor, setNewAuthor] = useState('');
  const { firstName } = useUser();

  useEffect(() => {
    phoneservice.getAll().then(allPersons => {
      setPersons(allPersons);
    });
  }, []);

  return (
    <Div>
      <Div d="flex" align="center" p="1rem" justify="space-between" bg="white" rounded="md">
        <Text m={{ l: "0.5rem" }} textWeight="500">Hello, {firstName}!</Text>
        <UserButton />
      </Div>
      <Form persons={persons} setPersons={setPersons} />
      <Personnellist setPersons={setPersons} persons={persons} />
      <Settings
        newcdo={newcdo}
        setnewcdo={setNewCdo}
        newcds={newcds}
        setnewcds={setNewCds}
        newcos={newcos}
        setnewcos={setNewCos}
        newauthor={newauthor}
        setnewauthor={setNewAuthor}
        persons={persons}
      />
      <Div bg="brand100" p="1rem" rounded="xl">
        <Text textSize="heading">Parade State</Text>
        <Greeting />
        <Summary
          persons={persons}
          newcdo={newcdo}
          newcds={newcds}
          newcos={newcos}
        />
        <ParadeState
          setPersons={setPersons}
          persons={persons}
          newauthor={newauthor}
        />
      </Div>
      <Footer />
    </Div>
  );
};

export default AppContent;
