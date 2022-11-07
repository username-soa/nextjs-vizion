import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import NavLink from "../elements/NavLink";
import { useRouter } from "next/router";
import logo from "../../assets/logo-sticky.png";

const SideMenu = ({ sideMenu, setSideMenu }) => {
  const sideMenuLinksAnimation = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, type: "Inertia" },
    },
    exit: {
      opacity: 0,
      transition: { type: "Inertia" },
    },
  };
  const sideMenuVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "Inertia" },
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      transition: { type: "Inertia" },
    },
  };
  const linksAnimation = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "Inertia" },
    },
    exit: {
      opacity: 0,
      transition: { type: "Inertia" },
    },
  };

  const router = useRouter();
  return (
    <Container
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={sideMenuVariants}
    >
      <motion.div
        className="side-menu-top"
        animate="visible"
        initial="hidden"
        exit="exit"
        variants={linksAnimation}
      >
        <div
          className="logo-icon"
          onClick={() => {
            if (router.pathname === "/") {
              setSideMenu(!sideMenu);
            }
          }}
        >
          <Link href="/">
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div
          className="close-icon"
          onClick={() => {
            setSideMenu(!sideMenu);
          }}
        >
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#640178"
            onClick={() => {
              setSideMenu(!sideMenu);
            }}
          >
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
      </motion.div>
      <motion.div
        className="side-menu-links"
        animate="visible"
        initial="hidden"
        exit="exit"
        variants={sideMenuLinksAnimation}
      >
        <Link href="/">
          <a
            className="side-menu-a"
            onClick={() => {
              if (router.pathname === "/") {
                setSideMenu(!sideMenu);
              }
            }}
          >
            <h4 className="side-menu-h4">Home</h4>
          </a>
        </Link>
        <Link href="/about">
          <a
            className="side-menu-a"
            onClick={() => {
              if (router.pathname === "/about") {
                setSideMenu(!sideMenu);
              }
            }}
          >
            <h4 className="side-menu-h4">About us</h4>
          </a>
        </Link>
        <Link href="/features">
          <a
            className="side-menu-a"
            onClick={() => {
              if (router.pathname === "/features") {
                setSideMenu(!sideMenu);
              }
            }}
          >
            <h4 className="side-menu-h4">Features</h4>
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="side-menu-a"
            onClick={() => {
              if (router.pathname === "/contact") {
                setSideMenu(!sideMenu);
              }
            }}
          >
            <h4 className="side-menu-h4">Contact</h4>
          </a>
        </Link>
        <Link href="/pricing">
          <a
            className="side-menu-a"
            onClick={() => {
              if (router.pathname === "/pricing") {
                setSideMenu(!sideMenu);
              }
            }}
          >
            <h4 className="side-menu-h4">Pricing</h4>
          </a>
        </Link>
        <Link href="/login">
          <a
            className="side-menu-a"
            onClick={() => {
              if (router.pathname === "/login") {
                setSideMenu(!sideMenu);
              }
            }}
          >
            <h4 className="side-menu-h4">Login</h4>
          </a>
        </Link>
        <Link href="/register">
          <a
            className="side-menu-a"
            onClick={() => {
              if (router.pathname === "/register") {
                setSideMenu(!sideMenu);
              }
            }}
          >
            <h4 className="side-menu-h4">Register</h4>
          </a>
        </Link>
      </motion.div>

      <motion.div
        className="side-menu-socials"
        animate="visible"
        initial="hidden"
        exit="exit"
        // variants={sideMenuLinksAnimation}
      >
        <a
          className="social-link"
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a
          className="social-link"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a
          className="social-link"
          href="https://youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      </motion.div>
      <motion.div
        className="copyright-div"
        animate="visible"
        initial="hidden"
        exit="exit"
        // variants={sideMenuLinksAnimation}
      >
        <span className="data">Vizion</span>
        <span className="data">
          © {new Date().getFullYear()} All rights reserved
        </span>
      </motion.div>
    </Container>
  );
};

export default SideMenu;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: #f3efef;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .side-menu-top {
    width: 100%;
    display: grid;
    grid-template-columns: 100px auto;
    padding: 2em 4em;
  }
  .close-icon {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 10px;
    svg {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  svg {
    cursor: pointer;
  }
  .logo-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .side-menu-links {
    display: flex;
    flex-direction: column;
    padding: 1em 4em;
    .side-menu-a {
      text-decoration: none;
    }
    .side-menu-h4 {
      transition: all 0.3s ease;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.8);
      font-size: 1.75rem;
      margin: 0.2em 0;
      width: fit-content;
      &:hover {
        color: #640178;
        border-bottom: 1px solid #640178;
        padding-left: 0.25em;
      }
    }
  }
  .side-menu-socials {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto 2em 0.1em 2em;
    padding: 0 1em;
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      line-height: 50px;
      background: #fff;
      border: 1px solid #dadada;
      text-align: center;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      svg {
        fill: #640178;
        width: 18px;
      }
      &:hover {
        background-color: #640178;
        svg {
          fill: #fff;
        }
      }
    }
    /* .socials-wrp {
      border: 1px solid rgba(0, 0, 0, 0.8);
      width: 50px;
      height: 50px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s;
      &:hover {
        border: 1px solid #640178;
        svg {
          fill: 1px solid #640178;
          path,
          circle {
            fill: #640178 !important;
          }
          g {
            path {
              fill: #640178 !important;
            }
          }
        }
      }
    } */
    /* svg {
      width: 24px;
      height: 24px;
      margin: 0 0.75em;
      cursor: pointer;
      fill: #343a40 !important;
      transition: all 0.4s;
      path,
      circle {
        fill: #343a40 !important;
      }
      g {
        path {
          fill: #343a40 !important;
        }
      }
    } */
  }
  .copyright-div {
    border-top: 2px solid rgb(125, 74, 199);
    border-bottom: 2px solid rgb(125, 74, 199);
    margin: 2em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    .side-menu-top {
      padding: 2em;
    }
    .side-menu-links {
      padding: 0 2em 1em 2em;
      .side-menu-h4 {
        font-size: 1.5rem;
      }
    }
    .copyright-div {
      margin: 0.75em 1.5em 1.5em 1.5em;
    }
  }
`;
