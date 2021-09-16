// 24rem width Modal
import React,{useState} from "react";
import { Div, Button, Modal, Icon, Text } from "atomize";

const ModalSize = ({ isOpen, onClose, person }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="md"
      maxW="24rem"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
      >
        <p>NAME: {person.name}</p>
        <p>STATUS: {person.status.toUpperCase()}</p>
        <p>REASON: {person.reason.toUpperCase()}</p>
        <p>GROUP: {person.group.toUpperCase()}</p>
        <p>EXCUSES: {person.excuse.toUpperCase()}</p>
        <p>ROLE: {person.role.toUpperCase()}</p>




      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
      </Div>
    </Modal>
  );
};


const DetailModal = ({person}) => {
    const [showModal, setshowModal] = useState(false)

    const Handleclick = () => {
        setshowModal(!showModal)
    }

    return (
        <>
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={Handleclick}
          >
            Details
          </Button>
          <ModalSize
            isOpen={showModal}
            onClose={Handleclick}
            person={person}
          />
        </>
      );
}

export default DetailModal;