import React from "react"
import { Notification, Icon } from "atomize"

const Notifications = ({newName,
    setnewalert,
    newalert,
    newupdate,
    setnewupdate,
    newwarning,
    setnewwarning,
    newinput,
    setnewinput}) => {
    return (
        <>
        <Notification
          bg="danger700"
          isOpen={newalert}
          onClose={()=> {setnewalert(!newalert)}}
          prefix={
            <Icon
              name="CloseSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          All fields (other than medical excuses) must be filled.
        </Notification>
        <Notification
          bg="success700"
          isOpen={newupdate}
          onClose={() => setnewupdate(!newupdate)}
          prefix={
            <Icon
              name="Success"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          {newName.toUpperCase()} has been updated.
        </Notification>
        <Notification
          bg="warning700"
          isOpen={newwarning}
          onClose={() => setnewwarning(!newwarning)}
          prefix={
            <Icon
            name="AlertSolid"
            color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          {newName.toUpperCase()} has already been removed from the server.
        </Notification>
        <Notification
          bg="success700"
          isOpen={newinput}
          onClose={() => setnewinput(!newinput)}
          prefix={
            <Icon
              name="Success"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          Name added.
        </Notification>
        </>
    )
}

export default Notifications
