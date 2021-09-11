import React from 'react'

const style = {
  padding: 0,
  margin: 0
}

const Roles = ({persons}) => {
  
  let hq = 0
  persons.map(person=> (person.role==='hq') ? (hq = hq+1) : hq)
  let sevenspec = 0
  persons.map(person=> (person.role==='7spec') ? (sevenspec = sevenspec+1) : sevenspec)
  let ic2 = 0
  persons.map(person=> (person.role==='ic2') ? (ic2 = ic2+1) : ic2)
  let is = 0
  persons.map(person=> (person.role==='is') ? (is = is+1) : is)

      return (
      <div>
          <p style={style}> -Coy HQ: {hq} </p>
          <p style={style}> -7th Mono Spec: {sevenspec} </p>
          <p style={style}> -IC2 Opr: {ic2} </p>
          <p style={style}> -IS Opr: {is} </p>
          <br/>
      </div>
    )
  }

  export default Roles