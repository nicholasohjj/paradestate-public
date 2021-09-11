import React from 'react'
import HQ from './contents/HQ'
import CCP from './contents/CCP'
import CSP from './contents/CSP'
import Excuses from './contents/Excuses'

const ParadeState = ({persons}) => {
  return (
    <>
    <HQ persons={persons}/>
    <br/>
    <CCP persons={persons}/>
    <br/>
    <CSP persons={persons}/>
    <br/>
    <Excuses persons={persons}/>
    </>

  )
  }

  export default ParadeState