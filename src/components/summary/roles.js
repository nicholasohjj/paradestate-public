import React from 'react'

const style = {
  padding: 0,
  margin: 0
}

const Roles = ({persons}) => {

  const HQrolelist = persons.filter(person=> (person.role==='hq'))
  let HQcurrent = 0
  HQrolelist.map(person=> (person.status==='present') ? (HQcurrent = HQcurrent+1) : HQcurrent)
  const HQtotal = HQrolelist.length

  const Specrolelist = persons.filter(person=> (person.role==='specs'))
  let Speccurrent = 0
  Specrolelist.map(person=> (person.status==='present') ? (Speccurrent = Speccurrent+1) : Speccurrent)
  const Spectotal = Specrolelist.length

  const Oprrolelist = persons.filter(person=> (person.role==='opr'))
  let Oprcurrent = 0
  Oprrolelist.map(person=> (person.status==='present') ? (Oprcurrent = Oprcurrent+1) : Oprcurrent)
  const Oprtotal = Oprrolelist.length

  const Adminrolelist = persons.filter(person=> (person.role==='admin'))
  let Admincurrent = 0
  Adminrolelist.map(person=> (person.status==='present') ? (Admincurrent = Admincurrent+1) : Admincurrent)
  const Admintotal = Adminrolelist.length

      return (
      <div>
          <p style={style}> -HQ: {HQcurrent}/{HQtotal} </p>
          <p style={style}> -Specialists: {Speccurrent}/{Spectotal} </p>
          <p style={style}> -Operators: {Oprcurrent}/{Oprtotal} </p>
          <p style={style}> -Administrators: {Admincurrent}/{Admintotal} </p>

          <br/>
      </div>
    )
  }

  export default Roles