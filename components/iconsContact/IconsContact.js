import React from "react";

const IconsContact = ({ children, width, height }) => {
  const blueColor = "#1A97D4";

  const circleStyle = {
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // gap: '10px',
    width: width || "50px",
    height: height || "50px",
    boxShadow: '0 0 35px 0 rgba(0, 0, 0, 0.07)',
    border: '1px solid #e1edf2',
  };

  const iconStyle = {
    color: blueColor,
    // fontSize: 20,
    // boxShadow: '0 0 35px 0 rgba(0, 0, 0, 0.7)',
    // border: '1px solid #e1edf2',
    borderRadius: '50%'
  };

  // Clone element to pass props with children
  const childrenWithStyle = React.Children.map(children, (child) => {
    return React.cloneElement(child, { className: "iconStyle", style: iconStyle });
  });

  return (
    <div style={circleStyle}>
      {childrenWithStyle}
    </div>
  );
};

export default IconsContact;
