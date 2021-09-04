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
    return <Emoji symbol="🅰"/>
  } else if (currentStatus==='others') {
    return <Emoji symbol="🗒"/>
  } else if (currentStatus==='mc') {
  return <Emoji symbol="😷"/>
  } else if (currentStatus==='ma') {
    return <Emoji symbol="👨🏻‍⚕️"/>
  } else if (currentStatus==='off') {
  return <Emoji symbol="🚫"/>
  } else if (currentStatus==='leave') {
    return <Emoji symbol="🚪"/>
  } else if (currentStatus==='leave') {
  return <Emoji symbol="🚪"/>
  } else if (currentStatus==='stayout') {
  return <Emoji symbol="🏠"/>
  }
}


const Results = ({setPersons, persons}) => {
    return (
      <div>
        <ul>
          {persons.map(person=>
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