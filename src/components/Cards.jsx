import React, { Component } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import CardBgImg from "./CardBgImg";
import CardTopLogo from "./CardTopLogo";
import styles from "../css/style.css";

class Cards extends Component {
  state = {};
  render() {
    const mainContainer = {
      display: "flex",
      height: "100vh",
    };
    return (
      <div style={mainContainer}>
        <div style={styles} className="grid-container">
          <CardTopLogo className="grid-item1" style={styles} />
          <Card1
            className="grid-item2 grid-row-span2"
            color="#fa5300"
            buttonColor="white"
            height="230px"
          />
          <Card1
            className="grid-item3 grid-row-span2"
            color="#96cbfd"
            buttonColor="secondary"
            height="230px"
          />
          <Card1 className="grid-item4" color="#fa0644" height="150px" />
          <Card2 className="grid-item5" color="#fa0644" />
          <Card1
            className="grid-item6 grid-row-span2"
            color="#ffde59"
            buttonColor="error"
            height="230px"
          />
          <Card1
            className="grid-item7 grid-row-span2"
            color="#aa02ff"
            buttonColor="white"
            height="230px"
          />
          <CardBgImg
            className="grid-item8"
            color="#e04f26"
            buttonColor="black"
          />
        </div>
      </div>
    );
  }
}

export default Cards;
