import React, { Component } from 'react';

class Account extends Component {
    render() {
        return (
            <div class="float-right">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hello Customer
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Log out
                  </a>
                  
                </div>
              </div>
        );
    }
}

export default Account;