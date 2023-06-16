import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa";
import IconsContact from "./../iconsContact/IconsContact";
import { NavBar } from "../NavBar";

const Footer = () => {
  return (
    <footer className="footer-container --flex-between">
                    <NavBar className1='text-color-dark' />

      <div className="--align-center gap-15">
        <IconsContact width="30px" height="30px">
          <FaFacebookF />
        </IconsContact>
        <IconsContact width="30px" height="30px">
          <FaTwitter />
        </IconsContact>
        <IconsContact width="30px" height="30px">
          <FaInstagram />
        </IconsContact>
        <IconsContact width="30px" height="30px">
          <FaTiktok />
        </IconsContact>
        <IconsContact width="30px" height="30px">
          <FaTelegram />
        </IconsContact>
      </div>
      {/* <IconsContact>
        <FaTwitter />
        <FaInstagram />
        <FaTiktok />
        <FaTelegram />
      </IconsContact> */}
      <p className="--font-navbar">
        &copy; 2023 Test Powered by
        <span className="text-color-light --font-navbar">
          Innovation Factory
        </span>
      </p>
    </footer>
  );
};

export default Footer;
