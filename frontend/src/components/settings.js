import React from "react";
import {Icon, Div, Input } from "atomize";

const Settings = ({
    newcdo,
    handlecdochange,
    newcds,
    handlecdschange,
    newcos,
    handlecoschange,
    newas,
    handleaschange,
    newauthor,
    handleauthorchange
}) => {

    return (
        <Div>
          <h1>Settings</h1>
          <Div d='flex' justify={{ xs: "space-around", lg: "center" }}>
          <Input
    rounded="xl"
    value={newcdo}
    onChange={handlecdochange}
    placeholder="CDO (Rank/Name)"
    p={{ x: "2.5rem" }}
    prefix={
    <Icon
    name="UserSolid"
    color="warning800"
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
    placeholder="CDS (Rank/Name)"
    p={{ x: "2.5rem" }}
    prefix={
    <Icon
    name="UserSolid"
    color="warning800"
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
    color="warning800"
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
    color="warning800"
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
    color="warning800"
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