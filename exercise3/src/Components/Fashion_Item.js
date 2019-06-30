import React, { Component } from 'react';

class Fashion_Item extends Component {
    render() {
        return (
            <div className="fashion__trend">
                        <div className="fashion__trend__item">
                            <img src={require(`../img/${this.props.pic}.jpg`)} />
                            <div className="fashion__trend__item-overlay">
                                <span>Men</span>
                            </div>
                            <div className="fashtion__trend__item-discount">
                                <span>50% </span>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Fashion_Item;