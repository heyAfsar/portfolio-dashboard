import React, { Component } from "react";
import reactLogo from "../assets/img/reactLogoWithoutBg.png";

class CardTopLogo extends Component {
  state = {};
  render() {
    const cardStyle = {
      height: "100%",
      marginTop: 3,
      display: "flex",
      // justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      clear: "bottom",
      transition: ".2s",
    };
    const contentStyle = {
      // height: 120,
      // width: 200,
      width: "-webkit-fill-available",
      height: "-webkit-fill-available",
      borderRadius: 20,
      padding: 10,
      margin: 3,
      backgroundColor: "#e2e2e2",
      fontSize: 23,
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      alignItems: "center",
      textAlign: "center",
      cursor: "pointer",
      zIndex: 2,
    };
    const logoStyle = {
      justifyContent: "center",
      height: 60,
      width: 60,
      alignItem: "center",
      marginBottom: -33,
      zIndex: 3,
      cursor: "pointer",
    };
    return (
      <div className={this.props.className} style={cardStyle}>
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
