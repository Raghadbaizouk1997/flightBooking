import React from "react";
import Image from "next/image";

export const PackageItemIcon = ({country, calender, number}) => {
  return (
    <div className="--flex-dir-column --margin-top">
      <div className="--align-center gap-15 ">
        <Image
          src="/assets/img/Map-marker.svg"
          alt="Slider Image"
          width={20}
          height={20}
          style={{ borderRadius: "15px" }}
        />
        <span className="text-color-dark">{country}</span>
      </div>
      <div className="--align-center gap-15 --margin-left">
        <Image
          src="/assets/img/Calendar.svg"
          alt="Slider Image"
          width={20}
          height={20}
          style={{ borderRadius: "15px" }}
        />
        <span className="text-color-dark">{calender}</span>
      </div>
      <div className="--align-center gap-15 --margin-left">
        <Image
          src="/assets/img/people.svg"
          alt="Slider Image"
          width={20}
          height={20}
          style={{ borderRadius: "15px" }}
        />
        <span className="text-color-dark ">{number}</span>
      </div>
    </div>
  );
};
