import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../actions/auth"

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const { auth } = this.props;
    const { isAuthenticate } = auth;

    return (
      <div>
        <Nav tabs>
          {isAuthenticate ? (
            <>
              <NavItem>
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/" onClick={this.props.logout} >
                  Logout
                </Link>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </NavItem>
            </>
          )}
        </Nav>
      </div>
    );
  }
}

const mapStateToProps = states => {
  return {
    auth: states.auth
  };
};
export default connect(mapStateToProps, {logout})(Menu);
