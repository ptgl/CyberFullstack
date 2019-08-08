import React, { Component } from "react";

import Control from "../Components/Controls";
import ProductItems from "../Components/ProductItems";
import { useAuth0 } from "../react-auth0-wrapper";


const Homepage = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control isLogin={isAuthenticated}/>
            {/* DISPLAY */}
            <ProductItems isLogin={isAuthenticated} login={loginWithRedirect} logout={logout} user={user}/>
          </div>
        </div>
      </div>
    );
  // }
}

export default Homepage;
