import React from "react"
import Emojidisplay from "../reusable/emoji"
import Reason from "../reason"

const style = {
    padding: 0,
    margin: 0
  }

const Oncourse = ({persons}) => {
    
    const Courselist = persons.filter(person=> (String(person.group)).toLowerCase()==='oncourse') 
    console.log(`On Course: ${JSON.stringify(Courselist)}`)
    let currentstrength = 0
    Courselist.map(person=> (person.status==='present') ? (currentstrength = currentstrength+1) : currentstrength)
    const totalstrength = Courselist.length
    return (
        <div>
          <p style={style}>ON COURSE: {currentstrength}/{totalstrength}</p>
            {Courselist.map((person, index)=> 
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


  

  export default Oncourse