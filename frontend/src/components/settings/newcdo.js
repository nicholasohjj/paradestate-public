import React, {useState} from "react";
import { Icon, Div, Dropdown, Anchor} from "atomize";




const NewCDO = ({persons,setnewcdo}) => {

    const handlecdochange = (event) => {
        console.log(`CDO: ${event.target.getAttribute("value")}`)
        setnewcdo(event.target.getAttribute("value"))
      }
    
    const HQList = persons.filter(person=> (String(person.role)).toLowerCase()==='hq') 
    console.log(HQList)
    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }} onClick ={handlecdochange}>
        {HQList.map(person => (
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
          CDO
        </Dropdown>
      );
}

export default NewCDO
;