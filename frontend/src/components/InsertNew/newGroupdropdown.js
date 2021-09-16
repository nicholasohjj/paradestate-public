import React, {useState} from "react";
import { Div, Dropdown, Anchor} from "atomize";



const NewGroupdropdown = ({setnewGroup,newGroup}) => {

    const HandleUpdateGroup = (event) => {
      setshowModal(!showModal)
      console.log(`Group: ${event.target.getAttribute("value")}`)
      setnewGroup(event.target.getAttribute("value"))
          }
    
    const menuList = (
      <Div p={{ x: "1rem", y: "0.5rem" }} value={newGroup} onClick ={HandleUpdateGroup}>
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
        isOpen={showModal}
        menu={menuList}
        onClick={Handleclick}
      >
        {(newGroup)? `STATUS: ${newGroup.toUpperCase()}`: "STATUS"}
      </Dropdown>
    );
}

export default NewGroupdropdown
;