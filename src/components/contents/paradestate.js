import React from 'react'
import HQ from './hq' 
import Blueteam from './Blueteam';
import Redteam from './Redteam'
import Excuses from './Excuses'
import Signature from "./signature"
import Others from './Others';

const ParadeState = ({persons, newauthor}) => {
  return (
    <>
    <HQ persons={persons}/>
    <br/>
    <Blueteam persons={persons}/>
    <br/>
    <Redteam persons={persons}/>
    <br/>
    <Others persons={persons} />
    <br/>
    <Excuses persons={persons}/>
    <br/>
    <Signature newauthor={newauthor}/> 
    
    </>

  )
  }

  export default ParadeState