import React from "react";

export const Button = ({ data, symbol }) => {
  const btnstyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.5rem 1.2rem",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    border: "none",
    margin: "0.8rem 0",
    cursor: "pointer",
  };
  const btniconstyle = {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.5rem",
    fontSize: "1rem",
    margin: "0.3rem 0",
  };
  return (
    <div>
      <button style={btnstyle}>
        {data} <h4 style={btniconstyle}>{symbol}</h4>
      </button>
    </div>
  );
};
