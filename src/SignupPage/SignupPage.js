import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Signuppage() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <button onClick={() =>loginWithRedirect() }>
      Sign up
    </button>
    )
  );
}

export default Signuppage;