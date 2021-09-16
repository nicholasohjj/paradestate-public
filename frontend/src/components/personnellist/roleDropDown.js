import React, {useState} from "react";
import { Icon,Div, Dropdown, Anchor} from "atomize";
import phoneservice from "../../services/phoneservice";



const RoleDropDown = ({person,persons,setPersons}) => {

    const HandleUpdateStatus = (event) => {
      setshowModal(!showModal)
        console.log(event.target.getAttribute("value"))
            const newPerson = {
                name: person.name,
                status: person.status,
                reason: person.reason,
                group: person.group,
                excuse: person.excuse,
                role: event.target.getAttribute("value")
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
      <Div p={{ x: "1rem", y: "0.5rem" }} onClick ={HandleUpdateStatus}>
        <Anchor d="block" p={{ y: "0.25rem" }} value='hq' >
            {"Coy HQ"}  
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='sevenspec' >
            {"7th Mono Spec"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='ic2'>
            {"IC2 Opr"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='is'>
            {"IS Opr"}
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
          bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
        >
          ROLE
        </Dropdown>
      );
}

export default RoleDropDown;