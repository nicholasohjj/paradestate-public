import React, {useState} from "react";
import { Icon, Div, Dropdown, Anchor} from "atomize";




const NewCDS = ({persons,setnewcds}) => {

    const handlecdschange = (event) => {
        console.log(`CDS: ${event.target.getAttribute("value")}`)
        setnewcds(event.target.getAttribute("value"))
      }
    
    const CDSList = persons.filter(person=> (String(person.role)).toLowerCase()==='sevenspec') 
    console.log(CDSList)
    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }} onClick ={handlecdschange}>
        {CDSList.map(person => (
          <Anchor value={person.name} d="block" p={{ y: "0.25rem" }}>
            {person.name}
          </Anchor>
        ))}
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
          bg="info200"
        focusBg="info300"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
        >
          CDS
        </Dropdown>
      );
}

export default NewCDS
;