import React from "react";
import Image from "next/image";

export const Button = ({ text, onClick, disabled, type, image }) => {
  const buttonStyle = {
    backgroundColor: "var(--light-blue)",
    color: "var(--color-white)",
    padding: "15px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "10px",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="--flex-dir-column gap-15"
    >
      {text}
      {image && (
        <div style={{ display: "inline-block", marginRight: "8px" }}>
          <Image src={image} alt="Button Icon" width={20} height={20} />
        </div>
      )}
    </button>
  );
};
