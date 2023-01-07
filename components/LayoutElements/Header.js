import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import img from "../../assets/logo.png";
import NavLink from "../elements/NavLink";
import img2 from "../../assets/logo-sticky.png";

const Header = ({ setSideMenu, sideMenu }) => {
  const [padding, setPadding] = useState(40);
  const [boxShadow, setBoxShadow] = useState(0);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparency, setBackgroundTransparency] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparencyVar = clientWindowHeight / 600;

    if (backgroundTransparencyVar < 1) {
      let paddingVar = 40 - backgroundTransparencyVar * 20;
      let boxShadowVar = backgroundTransparencyVar * 0.1;
      setBackgroundTransparency(backgroundTransparencyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
      // console.log("backgroundTransparencyVar is : ", backgroundTransparencyVar);
    }
  }, [clientWindowHeight]);

  return (
    <CustomNav>
      <div
        className="header-content-wrp"
        style={{
          background: `rgba(255, 255, 255, ${backgroundTransparency})`,
          paddingTop: `${padding}px`,
          paddingBottom: `${padding / 2}px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="header-content">
          <div className="header-links-wrp">
            <div className="logo-wrp">
              {backgroundTransparency > 0.5 ? (
                <Link href={"/"}>
                  <a>
                    <Image src={img2} alt="logo" />
                  </a>
                </Link>
              ) : (
                <Link href={"/"}>
                  <a>
                    <Image src={img} alt="logo" />
                  </a>
                </Link>
              )}
            </div>
            <nav className="header-links">
              <NavLink
                href="/"
                activeClassName={
                  backgroundTransparency > 0.45 ? "active-dark" : "active-light"
                }
                exact
              >
                <a
                  className={
                    backgroundTransparency > 0.45
                      ? "nav-link dark-color"
                      : "nav-link light-color"
                  }
                >
                  Home
                </a>
              </NavLink>
              <NavLink
                href="/about"
                activeClassName={
                  backgroundTransparency > 0.45 ? "active-dark" : "active-light"
                }
                exact
              >
                <a
                  className={
                    backgroundTransparency > 0.45
                      ? "nav-link dark-color"
                      : "nav-link light-color"
                  }
                >
                  About us
                </a>
              </NavLink>
              <NavLink
                href="/features"
                activeClassName={
                  backgroundTransparency > 0.45 ? "active-dark" : "active-light"
                }
                exact
              >
                <a
                  className={
                    backgroundTransparency > 0.45
                      ? "nav-link dark-color"
                      : "nav-link light-color"
                  }
                >
                  Features
                </a>
              </NavLink>
              <NavLink
                href="/contact"
                activeClassName={
                  backgroundTransparency > 0.45 ? "active-dark" : "active-light"
                }
                exact
              >
                <a
                  className={
                    backgroundTransparency > 0.45
                      ? "nav-link dark-color"
                      : "nav-link light-color"
                  }
                >
                  Contact
                </a>
              </NavLink>
              <NavLink
                href="/pricing"
                activeClassName={
                  backgroundTransparency > 0.45 ? "active-dark" : "active-light"
                }
                exact
              >
                <a
                  className={
                    backgroundTransparency > 0.45
                      ? "nav-link dark-color"
                      : "nav-link light-color"
                  }
                >
                  Pricing
                </a>
              </NavLink>
            </nav>
          </div>
          <div className="header-right">
            <Link href="/login">
              <a
                className={
                  backgroundTransparency > 0.45
                    ? "auth-link-dark"
                    : "auth-links"
                }
              >
                Login
              </a>
            </Link>
            <Link href="/register">
              <a
                className={
                  backgroundTransparency > 0.45
                    ? "auth-link-dark"
                    : "auth-links register-link"
                }
              >
                Register
              </a>
            </Link>
          </div>
          <div className="side-menu-wrp">
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={
                backgroundTransparency > 0.5
                  ? { fill: "#640178" }
                  : { fill: "#fff" }
              }
              onClick={() => {
                setSideMenu(!sideMenu);
              }}
            >
              <path
                d="m22 15.25c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-6.5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>
    </CustomNav>
  );
};

export default Header;

const CustomNav = styled.header`
  background-image: linear-gradient(
    to right,
    rgb(167, 51, 187) 0%,
    rgb(125, 74, 199) 100%
  );
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  .header-content {
    height: 100%;
    width: clamp(70%, 1140px, 90%);
  }
  .header-content {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-right {
    display: flex;
    gap: 1em;
    .auth-links {
      background-color: transparent;
      color: #fff;
      padding: 6px 15px;
      border-radius: 6px;
      border: 2px solid transparent;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.5px;
      font-weight: 500;
      transition: all 0.3s ease;
      text-decoration: none;
      &:hover {
        border: 2px solid #fff;
      }
    }
    .auth-link-dark {
      color: rgba(0, 0, 0, 0.8);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 6px;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.5px;
      font-weight: 500;
      transition: all 0.3s ease;
      &:hover {
        color: #640178;
      }
    }
    .register-link {
      color: #640178;
      background-color: #fff;
      &:hover {
        background-color: transparent;
        color: #fff;
      }
    }
  }
  .header-links {
    display: flex;
    align-items: center;
    .nav-link {
      margin: 0 0.75em;
      font-style: normal;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.5px;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
    }
    .dark-color {
      color: rgba(0, 0, 0, 0.8);
    }
    .light-color {
      color: #fff;
    }
  }
  .active-dark {
    color: #640178 !important;
    border-bottom: 2px solid #640178;
  }
  .active-light {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  .header-links-wrp {
    display: grid;
    grid-template-columns: 140px auto;
    gap: 4em;
  }
  .side-menu-wrp {
    display: none;
    svg {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 1400px) {
    .header-content {
      padding-right: 4em;
      padding-left: 4em;
      width: 100%;
      margin: 0;
    }
  }
  @media only screen and (max-width: 1100px) {
    .header-links-wrp {
      display: grid;
      grid-template-columns: 100px auto;
      gap: 2em;
    }
    .header-right {
      .auth-links,
      .auth-link-dark {
        font-size: 14px;
      }
    }
    .header-links {
      .nav-link {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    .header-right,
    .header-links {
      display: none;
    }
    .side-menu-wrp {
      display: flex;
    }
  }
  @media only screen and (max-width: 768px) {
    .header-content {
      padding-right: 2em;
      padding-left: 2em;
    }
  }
`;
