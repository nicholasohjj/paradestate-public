import React from 'react';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useHistory } from "react-router-dom";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const App = () => {
  const history = useHistory();

  const navigateTo = (to) => {
    history.push(to);
  };

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={navigateTo}>
      <SignedIn>
        <AppContent />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};

export default App;
