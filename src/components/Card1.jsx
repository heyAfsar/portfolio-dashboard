import * as React from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export default function Card1(props) {
  const cardStyle = {
    width: 200,
    height: `${props.height}`,
    backgroundColor: `${props.color}`,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    position: "relative",
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
  };

  return (
    <div style={cardStyle} className="card">
      <AddCircleOutlinedIcon style={buttonStyle} color={props.buttonColor} />
      <p style={summary}>lorem6</p>
    </div>
  );
}
