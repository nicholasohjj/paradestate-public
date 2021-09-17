import React, {useState} from "react";
import { Icon, Div, Dropdown, Anchor} from "atomize";




const NewAS = ({persons,setnewas}) => {

    const handleaschange = (event) => {
        console.log(`AS: ${event.target.getAttribute("value")}`)
        setnewas(event.target.getAttribute("value"))
      }

    const Handleclick = () => {
        setshowModal(!showModal)
    }
    
    const ASList = persons.filter(person=> (String(person.role)).toLowerCase()==='sevenspec') 
    console.log(ASList)
    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }} onClick ={handleaschange}>
          <Anchor value="3SG TOSHIRO MURAKAMI" d="block" p={{ y: "0.25rem" }} onClick ={Handleclick}>
            3SG TOSHIRO MURAKAMI
          </Anchor>
          <Anchor value="3SG JUSTIN LAN" d="block" p={{ y: "0.25rem" }} onClick ={Handleclick}>
            3SG JUSTIN LAN
          </Anchor>
      </Div>
    );

    const [showModal, setshowModal] = useState(false)

    
    
    return (
        <Dropdown
        rounded="xl" 
          isOpen={showModal}
          onClick={Handleclick}
          menu={menuList}
          bg="info200"
        focusBg="info300"
        borderColor="info600"
        m={{ r: "0.5rem",y: "0.5rem" }}
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        openSuffix={<Icon name="Up" color="info700" size="16px" />}
        closeSuffix={<Icon name="Down" color="info700" size="16px" />}
        >
          Armskote
        </Dropdown>
      );
}

export default NewAS
;