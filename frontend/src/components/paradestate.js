import React from 'react'
import Emojidisplay from './emoji'

const style = {
  padding: 0,
  margin: 0
}

const ParadeState = ({persons}) => {
  
  let currentstrength = 0
  persons.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
  const totalstrength = persons.length

    return (
      <div>
        <p style={style}>HQ {currentstrength}/{totalstrength}</p>
          {persons.map((person, index)=> 
            <p style={style} key={person.name}>
              {index+1}.  
              {person.name}
              <Emojidisplay currentStatus ={person.status} />
            </p>
                      
          )}   
      </div>
    )
  }

  export default ParadeState