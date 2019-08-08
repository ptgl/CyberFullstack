import React, { Component } from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

const Account = () => {
  // render() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  console.log(isAuthenticated);
  console.log(user);
  
  return (
    <div className="float-right">
      <a
        className="nav-link dropdown-toggle text-white"
        href="#"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Hello {!user && 'Customer'} {user && user.name}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {!isAuthenticated && (
          <a
            className="dropdown-item"
            href="#"
            onClick={() => loginWithRedirect({})}
          >
            Log in
          </a>
        )}

        {isAuthenticated && (
          <a className="dropdown-item" href="#" onClick={() => logout()}>
            Log out
          </a>
        )}
      </div>
    </div>
  );
};
// }

export default Account;
