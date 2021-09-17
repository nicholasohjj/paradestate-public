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
            textColor="black"
            rounded="xl"
              bg="info700"
              hoverBg="info600"
              m={{ r: "0.5rem",y: "0.5rem" }}
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon
                name="EditSolid"
                size="16px"
                color="black"
                m={{ l: "1rem" }}
                
              />} 
              >
                Edit
            </Button>
    </Div>
      </>
    )} else {
      return (
        <>
      <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
            <Button
            textColor="black"
            rounded="xl"
              bg="info700"
              hoverBg="info600"
              p={{ r: "1.5rem", l: "1rem" }}
              shadow="3"
              hoverShadow="4"
              onClick={HandleShow}
              suffix={
                <Icon
                name="EditSolid"
                size="16px"
                color="black"
                m={{ l: "1rem" }}
                
              />} 
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
        </>
      )
  }

    
  }

  export default Personnellist