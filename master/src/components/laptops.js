import React, { Component } from "react";
import LaptopItem from "../components/laptop-item";
const data = [
  {
    id: "sp_1",
    name: "Macbook",
    price: "30.000.000 VNĐ",
    img: "./img/lt_macbook.png",
    desc:
      "iPhone X featuresa new all-screen design. Face ID, which makes your face your password"
  },
  {
    id: "sp_2",
    name: "Asus Rog",
    price: "20.000.000 VNĐ",
    img: "./img/lt_rog.png",
    desc:
      "The Galaxy Note7comes with a perfectly symmetrical design for good reason"
  },
  {
    id: "sp_3",
    name: "HP Book",
    price: "10.000.000 VNĐ",
    img: "./img/lt_hp.png",
    desc:
      "A young globalsmartphone brand focusing on introducing perfect sound quality"
  },
  {
    id: "sp_4",
    name: "Lenovo Thinkpad",
    price: "15.000.000 VNĐ",
    img: "./img/lt_lenovo.png",
    desc:
      "BlackBerryis a line of smartphones, tablets, and services originally designed"
  }
];

class laptops extends Component {
  render() {
    let laptops = data.map((o, idx) => (
      <LaptopItem key={idx} img={o.img} name={o.name} desc={o.desc} />
    ));
    return (
      <section
        id="laptop"
        className="container-fluid pt-5 pb-5 bg-light text-dark"
      >
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row">{laptops}</div>
      </section>
    );
  }
}

export default laptops;
