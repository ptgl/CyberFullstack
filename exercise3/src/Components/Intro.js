import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div id="intro">
                    <div className="intro__left">
                        <div className="intro__left__img" />
                    </div>
                    <div className="intro__right">
                        <div className="intro__right__img intro__right__img--1" />
                        <div className="intro__right__img intro__right__img--2" />
                        <div className="intro__right__img intro__right__img--3" />
                        <div className="clear" />
                    </div>
                    <div className="clear" />
                </div>
        );
    }
}

export default Intro;