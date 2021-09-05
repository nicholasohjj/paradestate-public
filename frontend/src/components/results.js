import React from 'react'
import Button from './button'
import Emojidisplay from './emoji';

const Results = ({setPersons, persons}) => {
    return (
      <div>
        <ol>
          {persons.map(person=>
            <li key={person.name}>
              {person.name}
              <Emojidisplay currentStatus ={person.status} />
              <Button person={person} id={person.id} setPersons={setPersons} persons={persons}/>
            </li>
          )}   
        </ol>
      </div>
    )
  }

  export default Results