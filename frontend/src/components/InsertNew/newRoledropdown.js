import React, {useState} from "react";
import {Icon, Div, Dropdown, Anchor} from "atomize";



const NewRoleDropDown = ({setnewRole, newRole}) => {

    const HandleUpdateRole = (event) => {
      setshowModal(!showModal)
      console.log(`Role: ${event.target.getAttribute("value")}`)
      setnewRole(event.target.getAttribute("value"))
          }
    
    const menuList = (
      <Div p={{ x: "1rem", y: "0.5rem" }} value ={newRole} onClick ={HandleUpdateRole}>
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
          rounded="xl" 
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
          {(newRole)? `ROLE: ${newRole.toUpperCase()}`: "ROLE"}
        </Dropdown>
      );
}

export default NewRoleDropDown;