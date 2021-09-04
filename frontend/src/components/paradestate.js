import React from 'react'
import Emojidisplay from './emoji'

const ParadeState = ({setPersons, persons}) => {
    return (
      <div>
        <ul>
          {persons.map(person=>
            <li key={person.name}>
              {person.name}
              <Emojidisplay currentStatus ={person.status} />
            </li>
          )}   
        </ul>
      </div>
    )
  }

  export default ParadeState