import React from 'react';
import { Div, Input, Icon } from 'atomize';

const NewName = ({ newName, setNewName }) => {
  const handleNameChange = (event) => {
    console.log(`Name: ${event.target.value}`);
    setNewName(event.target.value);
  };

  return (
    <Div d="flex" justify={{ xs: 'space-around', lg: 'center' }}>
      <Input
        rounded="xl"
        value={newName}
        bg="success00"
        onChange={handleNameChange}
        placeholder="Rank/Name"
        p={{ x: '2.5rem' }}
        prefix={
          <Icon
            name="UserSolid"
            color="black"
            size="16px"
            cursor="pointer"
            pos="absolute"
            top="50%"
            left="0.75rem"
            transform="translateY(-50%)"
            onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
          />
        }
      />
    </Div>
  );
};

export default NewName;
