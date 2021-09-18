import React from "react"
import Emojidisplay from "../reusable/emoji"
import Reason from "../reason"
import { Text } from "atomize"
const style = {
    padding: 0,
    margin: 0
  }

const Others = ({persons}) => {
    
    const OthersList = persons.filter(person=> (String(person.group)).toLowerCase()==='others') 
    console.log(`List of other members: ${JSON.stringify(OthersList)}`)
    let currentstrength = 0
    OthersList.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = OthersList.length
    // eslint-disable-next-line eqeqeq
    if (totalstrength!='0') {
      return (
        <div>
          <p style={style}>OTHERS: {currentstrength}/{totalstrength}</p>
            {OthersList.map((person, index)=> 
              <Text style={style} key={person.name}>
                {index+1} .  
                {' ' + person.name}
                <Emojidisplay currentStatus ={person.status} />
                <Reason person = {person} />
              </Text>
                        
            )}   
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }

}


  

  export default Others 