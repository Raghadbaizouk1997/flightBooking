import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import Layout from "../components/layout/Layout";
import ErrorComponent from "../components/ErrorComponent";
import "../styles/styles.css";
import { AvailableFlight } from "./flight/AvailableFlight";

const AuthContext = React.createContext();

function MyApp({ Component, pageProps, router }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  // const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === "/home";
  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";
  // const checkAuthentication = () => {
  //   const path = router.pathname;
  //   const isLoginPage = path === "/login";
  //   const isRegisterPage = path === "/register";

  //   if (!isAuthenticated && !isLoginPage && !isRegisterPage) {
  //     router.push("/register");
  //   }
  // };
  const handleLogin = () => {
    setError(null);
    setIsAuthenticated(true); // Set isAuthenticated to true first
  };

  const handleRegister = () => {
    setError(null);
    setIsAuthenticated(true); // Set isAuthenticated to true first
  };

  // useEffect(() => {
  //   // Check if the user is authenticated
  //   if (typeof window !== "undefined" && isAuthenticated) {
  //     router.push("/"); // Redirect to home page
  //   }
  // }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    router.push("/login");
  };

  console.log(isHome);
  return (
    <I18nextProvider i18n={i18n}>
      <AuthContext.Provider value={isAuthenticated}>
        <ToastContainer />
        {error && <ErrorComponent error={error} />}
        <AvailableFlight />
        {/* <Layout isHome={isHome}>
          {isLogin || isRegister ? (
            <Component
              {...pageProps}
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              handleLogout={handleLogout}
            />
          ) : null}
        </Layout> */}
      </AuthContext.Provider>
    </I18nextProvider>
  );
}

export default MyApp;
