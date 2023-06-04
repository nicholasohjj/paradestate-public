import React, { useState } from 'react';
import Updatebuttons from './updateButtons';
import Emojidisplay from '../reusable/emoji';
import Reason from '../reason';
import { Div, Button, Icon } from "atomize";
import Filter from './filter';

const Personnellist = ({ setPersons, persons }) => {
  const [show, setShow] = useState(false);
  const [newFilter, setFilter] = useState('');

  const handleShow = () => setShow(!show);

  const handleNameFilter = (event) => {
    setFilter(event.target.value);
  };

  const personnelToShow = !newFilter.trim()
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      );

  return (
    <>
      <Div d="flex" justify={{ xs: "space-around", lg: "center" }}>
        <Button
          textColor="black"
          rounded="xl"
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem", y: "0.5rem" }}
          p={{ r: "1.5rem", l: "1rem" }}
          shadow="3"
          hoverShadow="4"
          onClick={handleShow}
          suffix={
            <Icon
              name={show ? "EditSolid" : "HideSolid"}
              size="16px"
              color="black"
              m={{ l: "1rem" }}
            />
          }
        >
          {show ? "Hide" : "Edit"}
        </Button>
      </Div>

      {show && (
        <>
          <Filter newFilter={newFilter} handleNamefilter={handleNameFilter} />
          <ol>
            {personnelToShow.map((person) => (
              <li key={person.name}>
                {person.name}
                <Emojidisplay currentStatus={person.status} />
                <Reason person={person} />
                <br />
                <Updatebuttons
                  person={person}
                  id={person.id}
                  setPersons={setPersons}
                  persons={persons}
                />
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default Personnellist;
