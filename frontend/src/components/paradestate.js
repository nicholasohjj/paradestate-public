import React from 'react'
import HQ from './contents/hq' 
import CCP from './contents/ccp'
import CSP from './contents/csp'
import Excuses from './contents/excuses'
import Signature from "./contents/signature"

const ParadeState = ({persons, newauthor}) => {
  return (
    <>
    <HQ persons={persons}/>
    <br/>
    <CCP persons={persons}/>
    <br/>
    <CSP persons={persons}/>
    <br/>
    <Excuses persons={persons}/>
    <br/>
    <Signature newauthor={newauthor}/>
    </>

  )
  }

  export default ParadeState