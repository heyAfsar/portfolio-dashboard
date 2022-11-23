import React, { Component } from "react";
import Button from "@mui/material/Button";
import reactLogo from "../assets/img/reactLogoWithoutBg.png";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="profile-card">
        <div className="upper-profile">
          <img src={reactLogo} className="profile-pic" alt="logo" />
        </div>
        <div className="lower-profile">
          <p className="profile-name">Md Afsar Hussain</p>
          <span>Founder of CrashTech</span>
          <p className="profile-detail">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ex
            asperiores. Corporis ex excepturi suscipit reiciendis ipsum?
          </p>
          <div className="profile-button">
            <Button
              sx={{
                margin: "10px",
                color: "aliceblue",
                borderColor: "aliceblue",
                "&:hover": {
                  backgroundColor: "rgb(21, 10, 41)",
                  borderColor: "aliceblue",
                },
              }}
              variant="outlined"
            >
              Message
            </Button>
            <Button
              sx={{
                margin: "10px",
                color: "aliceblue",
                borderColor: "aliceblue",
                "&:hover": {
                  backgroundColor: "rgb(21, 10, 41)",
                  borderColor: "aliceblue",
                },
              }}
              variant="outlined"
            >
              Following
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
