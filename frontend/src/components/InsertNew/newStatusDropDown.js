import React, {useState} from "react";
import { Div, Dropdown, Anchor} from "atomize";
import Newdate from "../reusable/newdate"




const NewStatusDropDown = ({setnewStatus,newStatus,setnewReason}) => {

    const handleStatusChange = (event) => {
      setshowModal(!showModal)
      console.log(`Status: ${event.target.getAttribute("value")}`)
      setnewStatus(event.target.getAttribute("value"))
  
      let detailresponse = ''
      if (event.target.getAttribute("value") === 'mc') {
        detailresponse = prompt('Details',`MC FROM ${Newdate} TO ${Newdate}`)
      } else if (event.target.getAttribute("value") === 'ma') {
        detailresponse = prompt('Details',`MA AT`)
      } else if (event.target.getAttribute("value") === 'off') {
        detailresponse = prompt('Details',`OFF ON ${Newdate}`)
      } else if (event.target.getAttribute("value") === 'leave') {
        detailresponse = prompt('Details',`LEAVE ON ${Newdate}`)
      } else if (event.target.getAttribute("value") === 'attached') {
        detailresponse = prompt('Details',`ATTACHED OUT TO`)
      } else if (event.target.getAttribute("value") === 'others') {
        detailresponse = prompt('Details',``)
      } else if (event.target.getAttribute("value") === 'oncourse') {
        detailresponse = prompt('Details',``)
      }
      else {
        detailresponse = ''
      }
      console.log(`Reason: ${detailresponse}`)
      if (detailresponse) {
        setnewReason(detailresponse.toUpperCase())
      }
          }
    
    const menuList = (
      <Div p={{ x: "1rem", y: "0.5rem" }} value ={newStatus} onClick ={handleStatusChange}>
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
          isOpen={showModal}
          menu={menuList}
          onClick={Handleclick}
        >
          {(newStatus)? `STATUS: ${newStatus.toUpperCase()}`: "STATUS"}
        </Dropdown>
      );
}

export default NewStatusDropDown
;