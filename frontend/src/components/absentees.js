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
        <ul>
            <li>
              <Emojidisplay currentStatus ="mc" /> <p>MC: {mc} </p>
            </li>
            <li>
              <Emojidisplay currentStatus ="ma" /> <p>MA: {ma} </p>
            </li>
            <li>
              <Emojidisplay currentStatus ="off" /> <p>OFF: {off} </p>
            </li>
            <li>
              <Emojidisplay currentStatus ="leave" /> <p>LEAVE: {leave} </p>
            </li>
            <li>
              <Emojidisplay currentStatus ="others" /> <p>OTHERS: {others} </p>
            </li>
        </ul>
      </div>
    )
  }

  export default Absentees