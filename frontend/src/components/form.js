import React from 'react'

const Input = ({text,value,onChange}) => {
    return (
      <div>
      {text}: 
            <input value={value} onChange={onChange}/>
      </div>
    )
  }
  
const Form = ({addName,newName,handleNameChange,newStatus,handleStatusChange}) => {
    return (
      <div>
        <form onSubmit={addName}>
        <Input text="Rank/Name " value={newName} onChange={handleNameChange}/>
        <Input text="Status (present/attached/others) " value={newStatus} onChange={handleStatusChange}/>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
      </div>
    )
  }

  export default Form