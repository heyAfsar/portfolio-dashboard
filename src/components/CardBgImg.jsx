import * as React from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import background from "../assets/img/bgImage.jpg";

export default function CardBgImg(props) {
  const cardStyle = {
    // width: 200,
    // height: 300,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    borderRadius: 20,
    padding: 10,
    margin: 3,
    position: "relative",
  };

  const buttonStyle = {
    position: "absolute",
    top: 10,
    right: 10,
  };
  const summary = {
    position: "absolute",
    bottom: 35,
    left: 30,
    fontSize: 25,
    color: "#ffffff",
  };

  let classes = "card ";
  classes = classes.concat(props.className);

  return (
    <div style={cardStyle} className={classes}>
      <AddCircleOutlinedIcon style={buttonStyle} color={props.buttonColor} />
      <p style={summary}>
        People <br /> Directory
      </p>
    </div>
  );
}
