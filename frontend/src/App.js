import React from 'react';
import Loginpage from './components/loginpage/Loginpage';
import Appcontent from './Appcontent'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
  import { useHistory } from "react-router-dom";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const App = () => {

    const {push} = useHistory();

        return (
            <ClerkProvider frontendApi={frontendApi} navigate={(to) => push(to)}>
            <SignedIn>
            <UserButton />
              <Appcontent />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </ClerkProvider>
        )
}

export default App