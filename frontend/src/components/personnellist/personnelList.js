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
      <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
        <Button
            rounded="xl"
        id="edit"
        suffix={
        <Icon
        name="Up"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />}
      bg="info700"
      hoverBg="info600"
      shadow="3"
      hoverShadow="4"
      m={{ r: "1rem" }}
      onClick={HandleShow}
      >
    <Icon color='white' name="EditSolid" size="20px" />
    </Button>
    </Div>
      </>
    )} else {
      return (
        <>
      <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
        <Button
        rounded="xl"
        id="edit"
        suffix={
        <Icon
        name="Down"
        size="16px"
        color="white"
        m={{ l: "1rem" }}
      />}
      bg="info700"
      hoverBg="info600"
      shadow="3"
      hoverShadow="4"
      m={{ r: "1rem" }}
      onClick={HandleShow}
      >
    <Icon color='white' name="EditSolid" size="20px" />
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
        </>
      )
  }

    
  }

  export default Personnellist