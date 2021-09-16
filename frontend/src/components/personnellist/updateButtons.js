import React, {useState} from 'react'
import UpdateStatus from './updateStatus'
import UpdateGroup from './updateGroup'
import UpdateRole from './updateRole'
import UpdateExcuse from './updateExcuse'
import DetailModal from './detailmodal'
import DeleteModal from './deletemodal'
import RoleModal from './rolemodal'
import { Div, Button } from 'atomize'

const Updatebuttons = ({person, id, setPersons, persons}) => {

  const [show, setShow] = useState(false)

  const HandleShow = () => setShow(!show)
  
  if (show===false) {
      return (  
        <Div d="flex">
          <Button color="warning700" onClick={HandleShow}>Update</Button>
          <DetailModal person={person}/>
          <DeleteModal id={id} setPersons={setPersons} persons={persons} person={person.name}/>
        </Div>
      )} else {
        return (
          <>
          <Div d="flex">
            <Button onClick={HandleShow}>Hide</Button>
            <DetailModal person={person}/>
            <DeleteModal id={id} setPersons={setPersons} persons={persons} person={person.name}/>
          </Div>
          <Div d="flex">
            <UpdateStatus options={show} 
                          person={person}
                          persons={persons}
                          setPersons={setPersons}/>
            <UpdateGroup options={show} person={person} persons={persons} setPersons={setPersons}/>
            <RoleModal options={show} person={person} persons={persons} setPersons={setPersons}/>
            <UpdateExcuse options={show} person={person} persons={persons} setPersons={setPersons}/>

          </Div>
          </>
        )}
}

export default Updatebuttons
