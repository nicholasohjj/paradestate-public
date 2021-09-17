import React from "react";
import {Icon, Div, Input } from "atomize";

const Settings = ({
    newcdo,
    setnewcdo,
    newcds,
    setnewcds,
    newcos,
    setnewcos,
    newas,
    setnewas,
    newauthor,
    setnewauthor
}) => {

  const handlecdochange = (event) => {
    console.log(`CDO: ${event.target.value}`)
    setnewcdo((event.target.value))
  }

  const handlecdschange = (event) => {
    console.log(`CDS: ${event.target.value}`)
    setnewcds(event.target.value)
  }

  const handlecoschange = (event) => {
    console.log(`COS: ${event.target.value}`)
    setnewcos(event.target.value)
  }

  const handleaschange = (event) => {
    console.log(`Armskote: ${event.target.value}`)
    setnewas(event.target.value)
  }

  const handleauthorchange = (event) => {
    console.log(`Done by: ${event.target.value}`)
    setnewauthor(event.target.value)
  }

    return (
        <Div>
          <h1>Settings</h1>
          <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    rounded="xl"
    value={newcdo}
    id="cdo"
    onChange={handlecdochange}
    placeholder="CDO (Rank/Name)"
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
        />
      }
    />
          </Div>

          <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    rounded="xl"
    value={newcds}
    onChange={handlecdschange}
    id="cds"
    placeholder="CDS (Rank/Name)"
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
        />
      }
      />
      </Div>

      <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    rounded="xl"
    value={newcos}
    onChange={handlecoschange}
    placeholder="COS (Rank/Name)"
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
        />
      }
      />
      </Div>

      <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    rounded="xl"
    value={newas}
    onChange={handleaschange}
    placeholder="A/S (Rank/Name)"
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
        />
      }
      />
      </Div>

      <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    rounded="xl"
    value={newauthor}
    onChange={handleauthorchange}
    placeholder="Done By: (Rank/Name)"
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
        />
      }
      />
      </Div>
        </Div>
    )
}

export default Settings