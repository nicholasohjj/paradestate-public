import React, {useState} from "react";
import { Icon, Div, Dropdown, Anchor} from "atomize";




const NewCOS = ({persons,setnewcos}) => {

  const [showModal, setshowModal] = useState(false)

  const Handleclick = () => {
      setshowModal(!showModal)
  }
  

    const handlecoschange = (event) => {
        console.log(`COS: ${event.target.getAttribute("value")}`)
        setnewcos(event.target.getAttribute("value"))
      }
    
    const COSList = persons.filter(person=> (String(person.role)).toLowerCase()==='sevenspec') 
    console.log(COSList)
    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }} onClick ={handlecoschange}>
        {COSList.map(person => (
          <Anchor value={person.name} d="block" p={{ y: "0.25rem" }} onClick ={Handleclick}>
            {person.name}
          </Anchor>
        ))}
      </Div>
    );

   
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

export default NewCOS
;