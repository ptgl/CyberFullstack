import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer__content">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                        illum ullam, eos debitis inventore nemo sunt distinctio
        doloremque sed repudiandae at,{" "}
                    </p>
                </div>
                <div className="footer__content">
                    <h1>My Account</h1>
                    <p>
                        <a href="#">Check out</a>
                    </p>
                    <p>
                        <a href="#">Login</a>
                    </p>
                    <p>
                        <a href="#">Create Account</a>
                    </p>
                </div>
                <div className="footer__content">
                    <h1>Information</h1>
                    <p>
                        <a href="#">Home</a>
                    </p>
                    <p>
                        <a href="#">Products</a>
                    </p>
                    <p>
                        <a href="#">Short Codes</a>
                    </p>
                    <p>
                        <a href="#">Mail us</a>
                    </p>
                </div>
                <div className="footer__content">
                    <h1>Contact</h1>
                    <p>
                        <i className="fa fa-map-marker" />
                        <span>296 Võ Thành Trang</span>
                    </p>
                    <p>
                        <i className="fa fa-phone" />
                        <span>01634643124</span>
                    </p>
                    <p>
                        <i className="fa fa-envelope" />
                        <span>Dangtrunghieu147@gmail.com</span>
                    </p>
                </div>
                <div className="clear" />
            </div>
        );
    }
}

export default Footer;