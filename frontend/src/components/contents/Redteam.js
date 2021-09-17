import React from "react"
import Emojidisplay from "../reusable/emoji"
import Reason from "../reason"
import { Text } from "atomize"

const style = {
    padding: 0,
    margin: 0
  }

const Redteam = ({persons}) => {
    
    const RedteamList = persons.filter(person=> (String(person.group)).toLowerCase()==='redteam') 
    console.log(`List of Red Team members: ${JSON.stringify(RedteamList)}`)
    let currentstrength = 0
    RedteamList.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = RedteamList.length
    return (
        <div>
          <p style={style}>RED TEAM: {currentstrength}/{totalstrength}</p>
            {RedteamList.map((person, index)=> 
              <Text style={style} key={person.name}>                {index+1}.  
                {' ' + person.name}
                <Emojidisplay currentStatus ={person.status} />
                <Reason person = {person} />

              </Text>
                        
            )}   
        </div>
      )
}


  

  export default Redteam