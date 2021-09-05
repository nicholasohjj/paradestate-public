import React from 'react'

const Filter = ({newFilter, handleNamefilter}) => {
    return (
      <div>
        filter by name:
        <input value={newFilter} onChange={handleNamefilter}/>
    </div>
    )
  }

  export default Filter


  <Input text="Status (PRESENT/MC/MA/OFF/LEAVE/ATTACHED/OTHERS/STAYOUT) " value={newStatus.toLowerCase()} onChange={handleStatusChange}/>

  //not relevant