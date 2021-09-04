import React from 'react'
import Button from './button'


const Emoji = ({symbol}) => (
  <span
      className="emoji"
      role="img"
  >
      {symbol}
  </span>
);

const Status = ({currentStatus}) => {
  if (currentStatus==='present') {
    return <Emoji symbol="🐑"/>
  } else if (currentStatus==='attached') {
    return <Emoji symbol="🐑"/>
  } else if (currentStatus==='others')
    return <Emoji symbol="🐑"/>
}


const Results = ({notesToShow, setPersons, persons}) => {
    return (
      <div>
        <ul>
          {notesToShow.map(person=>
            <li key={person.name}>
              {person.name}
              <Status currentStatus ={person.status} />
              <Button person={person} id={person.id} setPersons={setPersons} persons={persons}/>
            </li>
          )}   
        </ul>
      </div>
    )
  }

  export default Results