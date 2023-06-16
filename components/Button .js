import React from "react";

export const Button = ({ text, onClick, disabled, type }) => {
  const buttonStyle = {
    backgroundColor: "var(--light-blue)",
    color: "var(--color-white)",
    padding: "15px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop:'10px'
    // lineHeight: '88px'
  };

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled} type={type}>
      {text}
    </button>
  );
};
