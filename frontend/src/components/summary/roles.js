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

  const SevenSpecrolelist = persons.filter(person=> (person.role==='sevenspec'))
  let Sevenspeccurrent = 0
  SevenSpecrolelist.map(person=> (person.status==='present') ? (Sevenspeccurrent = Sevenspeccurrent+1) : Sevenspeccurrent)
  const SevenSpectotal = SevenSpecrolelist.length

  const IC2rolelist = persons.filter(person=> (person.role==='ic2'))
  let IC2current = 0
  IC2rolelist.map(person=> (person.status==='present') ? (IC2current = IC2current+1) : IC2current)
  const IC2total = IC2rolelist.length

  const ISrolelist = persons.filter(person=> (person.role==='is'))
  let IScurrent = 0
  ISrolelist.map(person=> (person.status==='present') ? (IScurrent = IScurrent+1) : IScurrent)
  const IStotal = ISrolelist.length

  const Sixmonolist = persons.filter(person=> (person.role==='sixmono'))
  let Sixmonocurrent = 0
  Sixmonolist.map(person=> (person.status==='present') ? (Sixmonocurrent = Sixmonocurrent+1) : Sixmonocurrent)
  const Sixmonototal = Sixmonolist.length

      return (
      <div>
          <p style={style}> -Coy HQ: {HQcurrent}/{HQtotal} </p>
          <p style={style}> -7th Mono Spec: {Sevenspeccurrent}/{SevenSpectotal} </p>
          <p style={style}> -IC2 Opr: {IC2current}/{IC2total} </p>
          <p style={style}> -IS Opr: {IScurrent}/{IStotal} </p>

          <br/>
      </div>
    )
  }

  export default Roles