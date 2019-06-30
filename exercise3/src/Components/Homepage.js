import React, { Component } from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Intro from "./Intro";
import NewProducts from "./NewProducts";
import Banner from "./Banner";
import NewArrivals from "./NewArrivals";
import Footer from "./Footer";
import Copyright from "./Copyright";
import FashionTrend from "./FashionTrend";

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <Carousel/>
                <Intro/>
                <NewProducts/>
                <Banner/>
                <NewArrivals/>
                <FashionTrend/>
                <Footer/>
                <Copyright/>
                
            </div>

        );
    }
}

export default Homepage;