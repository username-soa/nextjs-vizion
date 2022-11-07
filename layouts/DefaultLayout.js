import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/LayoutElements/Footer";
import Header from "../components/LayoutElements/Header";
import SideMenu from "../components/LayoutElements/SideMenu";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import CookiesCard from "../components/CartElements/CookiesCard";

const Layout = ({ children }) => {
  const router = useRouter();
  const [sideMenu, setSideMenu] = useState(false);
  const [cookies, setCookies] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("cookie-token") === null) {
      setCookies(true);
    } else {
      setCookies(false);
    }
  }, []);

  useEffect(() => {
    setSideMenu(false);
  }, [router.pathname]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {sideMenu && <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />}
      </AnimatePresence>
      {router?.pathname !== "/login" && router?.pathname !== "/register" && (
        <Header setSideMenu={setSideMenu} sideMenu={sideMenu} />
      )}
      <Container className="body">{children}</Container>
      {router?.pathname !== "/login" && router?.pathname !== "/register" && (
        <Footer />
      )}
      <AnimatePresence exitBeforeEnter>
        {cookies && (
          <CookiesCard
            handleClick={() => {
              localStorage.setItem("cookie-token", true);
              setCookies(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;

const Container = styled.main``;
