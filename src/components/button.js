import React from "react";

const PinkButton = () => {
  const buttonStyle = {
    backgroundColor: "#C61569",
    padding: "6px 35px",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "20px",
    marginTop: "20px",
    cursor: "pointer",
    marginBottom: "20px",
  };

  return <button style={buttonStyle}>Explore</button>;
};

export default PinkButton;
