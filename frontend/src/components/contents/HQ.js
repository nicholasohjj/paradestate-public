import React from "react"
import Emojidisplay from "../reusable/emoji"
import Reason from "../reason"
import { Text, scrollTo } from "atomize"


const style = {
    padding: 0,
    margin: 0
  }

const HQ = ({persons}) => {
    
    const HQList = persons.filter(person=> (String(person.group)).toLowerCase()==='hq') 
    console.log(`List of HQ personnel: ${JSON.stringify(HQList)}`)
    let currentstrength = 0
    HQList.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = HQList.length
    return (
        <div>
          <p style={style}>HQ: {currentstrength}/{totalstrength}</p>
            {HQList.map((person, index)=> 
              <Text style={style} key={person.name}
              onClick={() => scrollTo("#edit")}>
                {index+1}.  
                {' ' + person.name}
                <Emojidisplay currentStatus ={person.status} />
                <Reason person = {person} />

              </Text>
                        
            )}   
        </div>
      )
}


  

  export default HQ