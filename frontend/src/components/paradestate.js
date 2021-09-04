import React from 'react'
import Emojidisplay from './emoji'



const ParadeState = ({setPersons, persons}) => {
  
  let currentstrength = 0
  persons.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
  const totalstrength = persons.length

    return (
      <div>
        <p>HQ {currentstrength}/{totalstrength}</p>
        <ol>
          {persons.map(person=>
            <li key={person.name}>
              {person.name}
              <Emojidisplay currentStatus ={person.status} />
            </li>
          )}   
        </ol>
      </div>
    )
  }

  export default ParadeState