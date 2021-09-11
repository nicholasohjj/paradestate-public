import React from 'react'
import Emojidisplay from './emoji'

const style = {
  padding: 0,
  margin: 0
}

const Absentees = ({persons}) => {
  
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
        <p style={style}>Absentees: {totalAbsentee}</p>
          <p style={style}> - <Emojidisplay currentStatus ="mc" /> MC: {mc} </p>
          <p style={style}>- <Emojidisplay currentStatus ="ma" /> MA: {ma} </p>
          <p style={style}>- <Emojidisplay currentStatus ="off" /> OFF: {off} </p>
          <p style={style}>- <Emojidisplay currentStatus ="leave" /> LEAVE: {leave} </p>
          <p style={style}>- <Emojidisplay currentStatus ="attached" /> ATTACHED OUT: {attached} </p>
          <p style={style}>- <Emojidisplay currentStatus ="others" /> OTHERS: {others} </p>
          <p style={style}>- <Emojidisplay currentStatus ="stayout" /> STAY OUT: {stayout} </p>
          <br/>
      </div>
    )
  }

  export default Absentees