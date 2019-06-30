import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div id="banner-discount">
                <div className="banner-discount__content">
                    <p>20% Discount on</p>
                    <h1>TRENDING DESIGN</h1>
                    <button>Shop now</button>
                    <button>Quick View</button>
                </div>
            </div>
        );
    }
}

export default Banner;