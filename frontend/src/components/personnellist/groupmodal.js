import React, {useState} from "react";
import { Div, Dropdown, Anchor} from "atomize";
import phoneservice from "../../services/phoneservice";



const GroupModal = ({person,persons,setPersons}) => {

    const HandleUpdateGroup = (event) => {
      setshowModal(!showModal)
        console.log(event.target.getAttribute("value"))
            const newPerson = {
              name: person.name,
              status: person.status,
              reason: person.reason,
              group: event.target.getAttribute("value"),
              excuse: person.excuse,
              role: person.role
            }
    const nameCheck = persons.filter(person=> 
        person.name.toLowerCase().includes(newPerson.name.toLowerCase()))
          
    console.log(nameCheck)
      
    if (event.target.getAttribute("value")) {
            return (
              phoneservice
                .update(nameCheck[0].id, newPerson)
                .then(updatedList=> {setPersons(persons.map(person=>
                    person.id !== nameCheck[0].id
                      ? person
                      : updatedList))
            }))
          }
          }
    
    const menuList = (
      <Div p={{ x: "1rem", y: "0.5rem" }} onClick ={HandleUpdateGroup}>
        <Anchor d="block" p={{ y: "0.25rem" }} value='hq' >
            {"HQ"}  
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='ccp' >
            {"FG1 - CCP"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='csp'>
            {"FG2 - CSP"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='others'>
            {"Others"}
        </Anchor>
      </Div>
    );

    const [showModal, setshowModal] = useState(false)

    const Handleclick = () => {
        setshowModal(!showModal)
    }
    
    return (
        <Dropdown
          w="fit-content"
          isOpen={showModal}
          onClick={Handleclick}
          menu={menuList}
        >
          GROUP
        </Dropdown>
      );
}

export default GroupModal;