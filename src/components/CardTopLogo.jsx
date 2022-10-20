import React, { Component } from "react";
import reactLogo from "../assets/img/reactLogoWithoutBg.png";

class CardTopLogo extends Component {
  state = {};
  render() {
    const cardStyle = {
      height: 160,
      marginTop: 10,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      clear: "bottom",
    };
    const contentStyle = {
      height: 140,
      width: 200,
      borderRadius: 20,
      padding: 10,
      margin: 10,
      backgroundColor: "#e2e2e2",
      fontSize: 23,
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
    };
    const logoStyle = {
      justifyContent: "center",
      height: 50,
      width: 50,
      alignItem: "center",
      marginBottom: -33,
      zIndex: 2,
    };
    return (
      <div style={cardStyle}>
        <img src={reactLogo} style={logoStyle} alt="logo" />
        <div style={contentStyle}>
          <p>
            Md Afsar <br /> Hussain
          </p>
        </div>
      </div>
    );
  }
}

export default CardTopLogo;
