import React from 'react'
import HQ from './contents/HQ'
import CCP from './contents/CCP'
import CSP from './contents/CSP'

const ParadeState = ({persons}) => {
  return (
    <>
    <HQ persons={persons}/>
    <br/>
    <CCP persons={persons}/>
    <br/>
    <CSP persons={persons}/>
    </>

  )
  }

  export default ParadeState