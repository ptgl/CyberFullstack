import React, { Component } from 'react';

class Account extends Component {
    render() {
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
                  Hello Customer
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Log out
                  </a>
                  
                </div>
              </div>
        );
    }
}

export default Account;