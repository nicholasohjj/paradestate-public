import React from 'react'
import HQ from './contents/HQ'
import CCP from './contents/CCP'
import CSP from './contents/CSP'
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