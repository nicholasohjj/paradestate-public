import React, {useState} from 'react'
import { Div, Button, Modal, Icon, Text} from "atomize";
import phoneservice from '../../services/phoneservice';

const AlignCenterModal = ({ isOpen, onClose, onSubmit, person }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }} >
        <Icon
          name="AlertSolid"
          color="danger700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Are you sure you want to permanently delete {person}?
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onSubmit} bg="danger700">
          Yes, Delete
        </Button>
      </Div>
    </Modal>
  );
};

const DeleteModal = ({id, setPersons, persons, person}) => {
  const [showModal, setshowModal] = useState(false)

    const Handleclick = () => {
        setshowModal(!showModal)
    }

    const Handlesubmit = () => {
        setshowModal(!showModal)

        phoneservice
        .removePerson(id)
        setPersons(persons.filter(person=>person.id !==id))
    }
    
    return (
        <>
          <Button
            bg="danger700"
            hoverBg="danger600"
            m={{ r: "0.5rem",y: "0.5rem" }}
            onClick={Handleclick}
          >
            <Icon name="Delete" size="20px" />
          </Button>
          <AlignCenterModal
            isOpen={showModal}
            onClose={Handleclick}
            onSubmit={Handlesubmit}
            person={person}
          />
        </>
      );
}

export default DeleteModal;