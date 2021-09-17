import React from "react"
import Emojidisplay from "../reusable/emoji"
import Reason from "../reason"
import { Text } from "atomize"
const style = {
    padding: 0,
    margin: 0
  }

const Blueteam = ({persons}) => {
    
    const BlueteamList = persons.filter(person=> (String(person.group)).toLowerCase()==='blueteam') 
    console.log(`List of Blue Team members: ${JSON.stringify(BlueteamList)}`)
    let currentstrength = 0
    BlueteamList.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = BlueteamList.length
    return (
        <div>
          <p style={style}>BLUE TEAM: {currentstrength}/{totalstrength}</p>
            {BlueteamList.map((person, index)=> 
              <Text style={style} key={person.name}>
                {index+1} .  
                {' ' + person.name}
                <Emojidisplay currentStatus ={person.status} />
                <Reason person = {person} />
              </Text>
                        
            )}   
        </div>
      )
}


  

  export default Blueteam 