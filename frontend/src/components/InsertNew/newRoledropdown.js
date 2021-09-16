import React, {useState} from "react";
import { Div, Dropdown, Anchor} from "atomize";



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
          isOpen={showModal}
          onClick={Handleclick}
          menu={menuList}
          targetHover
        >
          {(newRole)? `ROLE: ${newRole.toUpperCase()}`: "ROLE"}
        </Dropdown>
      );
}

export default NewRoleDropDown;