import React from "react";
import NewDate from "../reusable/newdate";

const Greeting = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const currentTime = `${formattedHours}:${formattedMinutes}`;

  let greeting = "";
  if (hours < 12 && hours >= 0) {
    greeting = "morning";
  } else if (hours >= 16) {
    greeting = "evening";
  } else {
    greeting = "afternoon";
  }

  return (
    <>
      <p>
        Good {greeting} to all, this is the strength for our team as of{" "}
        {currentTime} on <NewDate />.
      </p>
    </>
  );
};

export default Greeting;
