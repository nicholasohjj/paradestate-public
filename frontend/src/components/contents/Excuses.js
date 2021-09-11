import React from "react"

const style = {
    padding: 0,
    margin: 0
  }

const Excuse = ({person}) => {
  if (person.excuse) {
    return (
        <>
        ({person.excuse})
        </>
    )
} else {
    return (
        <>
        </>
    )
}
}

const Excuses = ({persons}) => {
  
    
    const ExcuseList = persons.filter(person=> person.excuse)
    console.log(ExcuseList)
    const currentstrength = ExcuseList.length
    return (
        <div>
          <p style={style}>STATUSES: {currentstrength}</p>
            {ExcuseList.map((person, index)=> 
              <p style={style} key={person.name}>
                {index+1}.  
                {' ' + person.name + ' '}
                <Excuse person={person} />
              </p>
                        
            )}   
        </div>
      )
}


  

  export default Excuses