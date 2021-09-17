import React, {useState} from 'react'
import UpdateExcuse from './updateExcuse'
import DetailModal from './detailmodal'
import DeleteModal from './deletemodal'
import RoleDropDown from './roleDropDown'
import Groupdropdown from './groupDropDown'
import StatusDropDown from './statusDropDown'
import { Div, Button, Icon } from 'atomize'

const Updatebuttons = ({person, id, setPersons, persons}) => {

  const [show, setShow] = useState(false)

  const HandleShow = () => setShow(!show)
  
  if (show===false) {
      return (  
        <Div d="flex">
          <Button bg="info700" hoverBg="info600" m={{ r: "0.5rem" }} onClick={HandleShow}><Icon name="Edit" size="20px" /></Button>
          <DetailModal person={person}/>
          <DeleteModal id={id} setPersons={setPersons} persons={persons} person={person.name}/>
        </Div>
      )} else {
        return (
          <>
          <Div d="flex">
            <Button bg="info700" hoverBg="info600" m={{ r: "0.5rem" }} onClick={HandleShow}><Icon name="Edit" size="20px" /></Button>
            <DetailModal person={person}/>
            <DeleteModal id={id} setPersons={setPersons} persons={persons} person={person.name}/>
          </Div>
          <Div d="flex">
            <StatusDropDown options={show} person={person} persons={persons} setPersons={setPersons}/>
            <Groupdropdown options={show} person={person} persons={persons} setPersons={setPersons}/>
            <RoleDropDown options={show} person={person} persons={persons} setPersons={setPersons}/>
          </Div>
          <Div d="flex">
          <UpdateExcuse options={show} person={person} persons={persons} setPersons={setPersons}/>
          </Div>

          </>
        )}
}

export default Updatebuttons
