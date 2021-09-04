import React from 'react'
import Emojidisplay from './emoji'

const Absentees = ({setPersons, persons}) => {
  
  let mc = 0
  persons.map(person=> (person.status==='mc') ? (mc = mc+1) : mc)
  let ma = 0
  persons.map(person=> (person.status==='ma') ? (ma = ma+1) : ma)
  let off = 0
  persons.map(person=> (person.status==='off') ? (off = off+1) : off)
  let leave = 0
  persons.map(person=> (person.status==='leave') ? (leave = leave+1) : leave)
  let attached = 0
  persons.map(person=> (person.status==='attached') ? (attached = attached+1) : attached)
  let others = 0
  persons.map(person=> (person.status==='others') ? (others = others+1) : others)
  let stayout = 0
  persons.map(person=> (person.status==='stayout') ? (stayout = stayout+1) : stayout)

  const totalAbsentee = mc + ma + off + leave + attached + others + stayout

    return (
      <div>
        <p>Absentees: {totalAbsentee}</p>
        <p>- <Emojidisplay currentStatus ="mc" /> MC: {mc} </p>
        <p>- <Emojidisplay currentStatus ="ma" /> MA: {ma} </p>
        <p>- <Emojidisplay currentStatus ="off" /> OFF: {off} </p>
        <p>- <Emojidisplay currentStatus ="leave" /> LEAVE: {leave} </p>
        <p>- <Emojidisplay currentStatus ="others" /> OTHERS: {others} </p>
      </div>
    )
  }

  export default Absentees