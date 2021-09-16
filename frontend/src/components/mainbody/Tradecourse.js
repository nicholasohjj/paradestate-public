import React from "react"
import Emojidisplay from "../reusable/emoji"
import Reason from "../reason"
import { Text } from "atomize"
const style = {
    padding: 0,
    margin: 0
  }

const Tradecourse = ({persons}) => {
    
    const TcourseList = persons.filter(person=> (String(person.group)).toLowerCase()==='tradecourse') 
    console.log(`List of Trade Course personnel: ${JSON.stringify(TcourseList)}`)
    let currentstrength = 0
    TcourseList.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = TcourseList.length
    if (totalstrength!='0') {
      return (
        <div>
          <p style={style}>IC2 OPR COURSE TILL 160921: {currentstrength}/{totalstrength}</p>
            {TcourseList.map((person, index)=> 
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


  

  export default Tradecourse 