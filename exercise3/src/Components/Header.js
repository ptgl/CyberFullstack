import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
                <div id="header">
                    <div className="header__content__left">
                        <span>Help</span>
                        <i className="fa fa-mobile" />
                        <span>01634643124</span>
                    </div>
                    <div className="header__content__right">
                        <ul>
                            <li>
                                <a href="#">Checkout</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                            <li>
                                <a href="#">Account</a>
                            </li>
                        </ul>
                    </div>
                    <div className="clear" />
                </div>
        );
    }
}

export default Header;