import React from "react";
import Image from "next/image";
import { t } from "i18next";

export const TypeTrip = ({img, title, description}) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px", // Add marginBottom to create space for the line
  };

  const iconparentStyle = {
    width: "80px",
    height: "80px",
    backgroundColor: "rgba(26, 151, 212, 0.05)",
    position: "relative",
    borderRadius: "45px",
  };

  const iconStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50% , -50%)",
  };

  const lineStyle = {
    width: "60%",
    height: "1px",
    backgroundColor: "#E1EDF2",
    marginTop: "10px",
  };

  return (
    <>
      <div className="--align-center gap-15">
        <div style={containerStyle}>
          <div style={iconparentStyle}>
            <Image
              style={iconStyle}
              src={img}
              alt="plane"
              width={29}
              height={25}
            />
          </div>
        </div>
        <div className="--flex-dir-column --dir-column gap-15">
          <h3>{title}</h3>
          <p className="text-color-dark">{description}</p>
        </div>
      </div>
      <div style={lineStyle}></div>
    </>
  );
};
