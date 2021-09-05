import React from 'react'
import Buttons from './buttons'; 
import Emojidisplay from './emoji';

const Results = ({setPersons, persons}) => {
    return (
      <div>
        <ol>
          {persons.map(person=>
            <li key={person.name}>
              {person.name}
              <Emojidisplay currentStatus ={person.status} />
              <br/>
              <Buttons person={person} id={person.id} setPersons={setPersons} persons={persons}/>
            </li>
          )}
          <br/>   
        </ol>
      </div>
    )
  }

  export default Results