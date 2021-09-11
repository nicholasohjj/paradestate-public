import React from 'react'
import Buttons from './updateButtons'; 
import Emojidisplay from '../emoji';
import Reason from '../reason';

const Results = ({setPersons, persons}) => {
    return (
      <div>
        <ol>
          {persons.map(person=>
            <li key={person.name}>
              {person.name}
              <Emojidisplay currentStatus ={person.status} />
              <Reason person = {person} />
              <br/>
              <Buttons person={person} id={person.id} setPersons={setPersons} persons={persons}/>
            </li>
          )}
        </ol>
      </div>
    )
  }

  export default Results