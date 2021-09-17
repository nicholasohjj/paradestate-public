import React from 'react'
import { Input,Icon, Div } from 'atomize'

const Filter = ({newFilter, handleNamefilter}) => {
    return (
      
      <Div>
        <Input
    rounded="xl"
    value={newFilter}
    bg="success00"

    onChange={handleNamefilter}
    placeholder="Filter by name"
    p={{ x: "2.5rem" }}
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
    onClick={()=> window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
        />
      }
    />
    </Div>
    )
  }

  export default Filter
  //not relevant

