import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <div className="navbar__content">
                    <div className="navbar__content__logo">
                        <h1>New Shop</h1>
                    </div>
                    <div className="navbar__content__menu">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Woman</a>
                            </li>
                            <li>
                                <a href="#">Man</a>
                            </li>
                            <li>
                                <a href="#">Short Code</a>
                            </li>
                            <li>
                                <a href="#">Mail Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__content__cart">
                        <p>
                            $0.00 (0 items) <i className="fa fa-shopping-cart" />
                        </p>
                        <p>Empty Cart</p>
                    </div>
                    <div className="clear" />
                </div>
            </div>
        );
    }
}

export default Navbar;