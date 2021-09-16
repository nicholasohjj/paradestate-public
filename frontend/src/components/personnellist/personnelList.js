import React, {useState} from 'react'
import Updatebuttons from './updateButtons'; 
import Emojidisplay from '../reusable/emoji';
import Reason from '../reason';
import { Div, Button, Icon } from "atomize";



const Personnellist = ({setPersons, persons}) => {
  const [show, setShow] = useState(false)

  const HandleShow = () => setShow(!show)

  if (show===false) {
    return (
      <>
      <Div d="flex">
        <Button
        suffix={
        <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />}
      shadow="3"
      hoverShadow="4"
      m={{ r: "1rem" }}
      onClick={HandleShow}
      >
    Edit
    </Button>
    </Div>
      </>
    )} else {
      return (
        <div>
      <Div d="flex">
        <Button
        suffix={
        <Icon
        name="LongRight"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />}
      shadow="3"
      hoverShadow="4"
      m={{ r: "1rem" }}
      onClick={HandleShow}
      >
    Hide
    </Button>
    </Div>
          <br/>
          <ol>
            {persons.map(person=>
              <li key={person.name}>
                {person.name}
                <Emojidisplay currentStatus ={person.status} />
                <Reason person = {person} />
                <br/>
                <Updatebuttons person={person}
                               id={person.id}
                               setPersons={setPersons}
                               persons={persons}/>
              </li>
            )}
          </ol>
        </div>
      )
  }

    
  }

  export default Personnellist