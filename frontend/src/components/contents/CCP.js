import React from "react"
import Emojidisplay from "../emoji"

const style = {
    padding: 0,
    margin: 0
  }

const CCP = ({persons}) => {
    
    const CCPList = persons.filter(person=> (String(person.group)).toLowerCase()==='ccp') 
    console.log(CCPList)
    let currentstrength = 0
    CCPList.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = CCPList.length
    return (
        <div>
          <p style={style}>FG1 - CCP: {currentstrength}/{totalstrength}</p>
            {CCPList.map((person, index)=> 
              <p style={style} key={person.name}>
                {index+1}.  
                {' ' + person.name}
                <Emojidisplay currentStatus ={person.status} />
              </p>
                        
            )}   
        </div>
      )
}


  

  export default CCP