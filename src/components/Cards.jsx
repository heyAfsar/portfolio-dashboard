import React, { Component } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import CardBgImg from "./CardBgImg";
import CardTopLogo from "./CardTopLogo";

class Cards extends Component {
  state = {};
  render() {
    const containerDivStyle = {
      display: "flex",
      height: 550,
      width: 1000,
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      flexWrap: "wrap",
    };
    return (
      <div style={containerDivStyle} className="row">
        <CardTopLogo />
        <Card1 color="#fa5300" buttonColor="white" height="230px" />
        <Card1 color="#96cbfd" buttonColor="secondary" height="230px" />
        <Card1 color="#fa0644" height="150px" />
        <Card2 color="#fa0644" />
        <Card1 color="#ffde59" buttonColor="error" height="230px" />
        <Card1 color="#aa02ff" buttonColor="white" height="230px" />
        <CardBgImg color="#e04f26" buttonColor="black" />
      </div>
    );
  }
}

export default Cards;
