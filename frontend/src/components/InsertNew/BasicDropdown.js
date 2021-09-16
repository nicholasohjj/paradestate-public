import React,{useState} from "react";
import { Div, Dropdown, Anchor } from "atomize";
const menuList = (
  <Div>
    {["Option 1", "Option 2", "Option 3"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </Div>
);

const BasicDropdown = () => {
  const [show, setShow] = useState(false)

  const HandleShow = (event) => {
    setShow(!show)
   console.log(event.target.value)
  }

    return (
        <>
        <Dropdown
        isOpen={show}
        onClick={HandleShow}
        menu={menuList}>
        Click me
      </Dropdown>
        </>
    )
}

export default BasicDropdown;