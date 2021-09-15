import React from "react"
import Emojidisplay from "../reusable/emoji"
import Reason from "../reason"

const style = {
    padding: 0,
    margin: 0
  }

const CSP = ({persons}) => {
    
    const CSPList = persons.filter(person=> (String(person.group)).toLowerCase()==='csp') 
    console.log(`List of CSP personnel: ${JSON.stringify(CSPList)}`)
    let currentstrength = 0
    CSPList.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = CSPList.length

    if (totalstrength) {
      return (
        <div>
          <p style={style}>FG2 - CSP: {currentstrength}/{totalstrength}</p>
            {CSPList.map((person, index)=> 
              <p style={style} key={person.name}>
                {index+1}.  
                {' ' + person.name}
                <Emojidisplay currentStatus ={person.status} />
                <Reason person = {person} />

              </p>
                        
            )}   
        </div>
      )
    }

}


  

  export default CSP