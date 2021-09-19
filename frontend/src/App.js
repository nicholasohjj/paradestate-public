import React from 'react';
import Appcontent from './Appcontent'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
  import { useHistory } from "react-router-dom";

  const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const App = () => {

    const {push} = useHistory();
    return (
      <ClerkProvider frontendApi={frontendApi} navigate={(to) => push(to)}>
      <SignedIn>
        <Appcontent />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  )
}

export default App