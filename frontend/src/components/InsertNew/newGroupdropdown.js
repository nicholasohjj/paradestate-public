import React, {useState} from "react";
import {Icon, Div, Dropdown, Anchor} from "atomize";



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
        rounded="xl"
        isOpen={showModal}
        menu={menuList}
        onClick={Handleclick}
        bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
      >
        {(newGroup)? `GROUP: ${newGroup.toUpperCase()}`: "GROUP"}
      </Dropdown>
    );
}

export default NewGroupdropdown
;