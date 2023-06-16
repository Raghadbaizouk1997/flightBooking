import React from "react";

export const Serve = ({number, text}) => {
  const KNumber = {
    color: "var(--light-blue)",
    fontWeight: "700",
  };
  const lineLeftStyle = {
    width: "2px",
    height: "40px",
    borderLeft: "1.5px solid #E1EDF2",
    marginLeft: "20px",
  };
  return (

    <div className="--align-center">
      <div>
        <h1 style={KNumber}>{number}</h1>
        <p className="text-color-dark --desc-line-height">{text}</p>
      </div>
      <div style={lineLeftStyle}></div>
    </div>
  );
};
