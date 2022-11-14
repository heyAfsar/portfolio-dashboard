import * as React from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export default function Card1(props) {
  const cardStyle = {
    // width: 200,
    // height: `${props.height}`,

    backgroundColor: `${props.color}`,
    borderRadius: 20,
    padding: 10,
    margin: 3,
    position: "relative",
    cursor: "pointer",
    transition: ".2s",
  };

  const buttonStyle = {
    position: "absolute",
    top: 10,
    right: 10,
  };
  const summary = {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 20,
    display: "flex",
    width: 120,
  };

  let classes = "card ";
  classes = classes.concat(props.className);
  console.log(classes);

  return (
    <div onClick={props.clickCarPrice} style={cardStyle} className={classes}>
      <AddCircleOutlinedIcon style={buttonStyle} color={props.buttonColor} />
      <p style={summary}>{props.textContent}</p>
    </div>
  );
}
