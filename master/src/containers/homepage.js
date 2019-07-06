import React, { Component } from 'react'
import Header from '../components/header';
import Carousel from '../components/carousel';
import Smartphone from '../components/smartphones';
import Laptop from "../components/laptops";
import Promotion from '../components/promotion';

export default class Homepage extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Header />
                    <Carousel />
                    <Smartphone/>
                    <Laptop/>
                    <Promotion/>
                </div>

            </div>
        )
    }
}
