import React, {useState} from 'react'
import UpdateExcuse from './updateExcuse'
import DetailModal from './detailmodal'
import DeleteModal from './deletemodal'
import RoleDropDown from './roleDropDown'
import Groupdropdown from './groupDropDown'
import StatusDropDown from './statusDropDown'
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
            <StatusDropDown person={person} persons={persons} setPersons={setPersons}/>
            <Groupdropdown   person={person} persons={persons} setPersons={setPersons}/>
            <RoleDropDown person={person} persons={persons} setPersons={setPersons}/>
            <UpdateExcuse  person={person} persons={persons} setPersons={setPersons}/>

          </Div>
          </>
        )}
}

export default Updatebuttons
