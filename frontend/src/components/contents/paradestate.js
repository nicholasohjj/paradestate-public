import React from 'react'
import HQ from './hq' 
import CCP from './CCP';
import CSP from './CSP'
import Excuses from './Excuses'
import Signature from "./signature"
import Tradecourse from './Tradecourse';

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