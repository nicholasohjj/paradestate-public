import React from "react";
import { Div, Text } from "atomize"
import dayjs from "dayjs";

const year = String(dayjs().format('YYYY'))

const Footer = () => {
  return (
    <Div
    className="footer"
    d='flex'
    justify='space-around'
    m={{ r: "0.5rem",y: "0.25rem" }}
    >
          <Text>Copyright © {year} </Text>
          <Text>A Project by Nicholas Oh</Text>
    
    </Div>
  );
}

export default Footer;