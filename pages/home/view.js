import React from "react";
import { Button } from "../../components/Button ";
import { PackageItemIcon } from "./packageItemIcon";
import { staticData } from "../../public/data";
import CalendarImage from "../../components/CalendarImage";
export const View = () => {
  console.log("123");
  return (
    <div className="--flex-dir-column gap-15">
      <div style={{ flexBasis: "30%" }}>
        <h1 className="text-color-darker --font-weight-bold --title-line-height">
          Top view of mountains
        </h1>
        <PackageItemIcon
          country="Jimmy Paul"
          calender="2 April 2023"
          number="Switzerland"
        />
        <p className="text-color-dark --desc-line-height --margin-top">
          Lörem ipsum krorat ekosiv och sende anime då cringe. Detisk. Egonat.
          Diren den eftersom sojaren, men poligam.
        </p>
        <Button
          text="view more"
          onClick={() => {}}
          image="/assets/img/next.svg"
        />
      </div>
      <div
        style={{ flexBasis: "70%", display: "flex", justifyContent: "center" }}
      >
        <CalendarImage images={staticData.images} />
      </div>
    </div>
  );
};
