import React from "react";
import Image from "next/image";

export const PackageItemIcon = ({country, calender, number}) => {
  return (
    <div className="--flex-dir-column">
      <div className="--align-center">
        <Image
          src="/assets/img/Map-marker.svg"
          alt="Slider Image"
          width={20}
          height={20}
          style={{ borderRadius: "15px" }}
        />
        <span>{country}</span>
      </div>
      <div className="--align-center">
        <Image
          src="/assets/img/Calendar.svg"
          alt="Slider Image"
          width={20}
          height={20}
          style={{ borderRadius: "15px" }}
        />
        <span>{calender}</span>
      </div>
      <div className="--align-center">
        <Image
          src="/assets/img/people.svg"
          alt="Slider Image"
          width={20}
          height={20}
          style={{ borderRadius: "15px" }}
        />
        <span>People: {number}</span>
      </div>
    </div>
  );
};
