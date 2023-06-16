import React from "react";
// import { useTranslation } from "react-i18next";
export const NavBar = ({className1}) => {
  // const { t } = useTranslation();
  return (
    <ul className="--flex-start gap-15">
      <li>
        <a href="#" className={`--font-navbar ${className1}`}>
        About
        </a>
      </li>
      <li>
        <a href="#" className={`--font-navbar ${className1}`}>
          Package
        </a>
      </li>
      <li>
        <a href="#" className={`--font-navbar ${className1}`}>
          News
        </a>
      </li>
      <li>
        <a href="#" className={`--font-navbar ${className1}`}>
          Partners
        </a>
      </li>
      <li>
        <a href="#" className={`--font-navbar ${className1}`}>
          Contact
        </a>
      </li>
    </ul>
  );
};
