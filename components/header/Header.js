import React from "react";
import { FaUser } from "react-icons/fa";

import { useRouter } from "next/router";
import { NavBar } from "../NavBar";

const Header = ({ handleRegister }) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const isActivePage = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <header className="header-container --flex-around">
      <NavBar className1="text-color-dark" />

      <div>
        <button
          className={`${
            isActivePage("/register")
              ? "text-color-light --font-navbar"
              : "text-color-dark --font-navbar"
          }`}
          style={{
            border: isActivePage("/register") ? "1px solid #e1edf2" : "none",
            borderRadius: isActivePage("/register") ? "15px" : "0",
            padding: isActivePage("/register") ? "15px 20px" : "0",
            marginRight: "10px",
          }}
          onClick={handleRegisterClick}
        >
          {isActivePage("/register") && (
            <FaUser style={{ color: "#1A97D4", marginRight: "5px" }} />
          )}
          Register
        </button>
        <button
          className={`${
            isActivePage("/login")
              ? "text-color-light --font-navbar"
              : "text-color-dark --font-navbar"
          }`}
          style={{
            border: isActivePage("/login") ? "1px solid #e1edf2" : "none",
            borderRadius: isActivePage("/login") ? "15px" : "0",
            padding: isActivePage("/login") ? "15px 20px" : "0",
            marginRight: "10px",
          }}
          onClick={handleLogin}
        >
          {isActivePage("/login") && (
            <FaUser style={{ color: "#1A97D4", marginRight: "5px" }} />
          )}
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
