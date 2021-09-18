import React, {useState} from "react";
import { Icon, Div, Dropdown, Anchor} from "atomize";
import phoneservice from "../../services/phoneservice";
import Newdate from "../reusable/newdate"




const StatusDropDown = ({person,persons,setPersons}) => {

    const HandleUpdateStatus = (event) => {
      setshowModal(!showModal)

      let returnValue = event.target.getAttribute("value")

      let newReason = ''
      if (returnValue === 'mc') {
        newReason = prompt('Details',`MC FROM ${Newdate} TO ${Newdate}`)
      } else if (returnValue === 'ma') {
        newReason = prompt('Details',`MA AT`)
      } else if (returnValue === 'off') {
        newReason = prompt('Details',`OFF ON ${Newdate}`)
      } else if (returnValue === 'leave') {
        newReason = prompt('Details',`LEAVE ON ${Newdate}`)
      } else if (returnValue === 'attached') {
        newReason = prompt('Details',`ATTACHED OUT TO `)
      } else if (returnValue === 'others') {
        newReason = prompt('Details',``)
      } else if (returnValue === 'oncourse') {
        newReason = prompt('Details',``)
      }
       else {
        newReason = ''
      }
  
      if (newReason) {
        newReason = newReason.toUpperCase()
      } else {
        newReason = 'nil'
      }
  
      console.log(newReason)
        console.log(event.target.getAttribute("value"))
            const newPerson = {
              name: person.name,
              status: event.target.getAttribute("value"),
              reason: newReason,
              group: person.group,
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
      <Div p={{ x: "1rem", y: "0.5rem" }} onClick ={HandleUpdateStatus}>
        <Anchor d="block" p={{ y: "0.25rem" }} value='present' >
            {"Present ✅"}  
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='mc' >
            {"MC 😷"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='ma'>
            {"MA 👨🏻‍⚕️"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='off'>
            {"Off 🚫"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='oncourse'>
            {"On Course 👨🏻‍🎓"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='leave'>
            {"Leave 🚪"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='attached'>
            {"Attached Out 🅰"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='others'>
            {"Others 🗒"}
        </Anchor>
        <Anchor d="block" p={{ y: "0.25rem" }} value='stayout'>
            {"Stay Out 🏠"}
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
          bg="info200"
        focusBg="info300"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        m={{ r: "0.5rem"}}
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
        >
          Status
        </Dropdown>
      );
}

export default StatusDropDown
;