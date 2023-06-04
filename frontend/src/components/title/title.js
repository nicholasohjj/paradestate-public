import React from "react";
import { Div, Text, Image } from "atomize";

// For future expansion: Replace the placeholder with your actual logo image source
const logoSrc = "logo.png";

const Title = () => {
  return (
    <Div d="flex" align="center" justify="center" p="1rem">
      <Image src={logoSrc} alt="Logo" h="3rem" mr="1rem" />
      <Text tag="h2" textSize="xl" textColor="black500" textWeight="500">
        Parade State Application (For Internal Use Only)
      </Text>
    </Div>
  );
};

export default Title;
