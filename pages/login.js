import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/logo-sticky.png";
import LoginForm from "../components/forms/LoginForm";
import Popup from "../components/elements/Popup";

const Login = () => {
  const [popup, setPopup] = useState(false);

  const login = async (data) => {
    setPopup(!popup);
  };
  return (
    <Container>
      <div className="login-content">
        <div className="login-header">
          <Link href={"/"}>
            <a>
              <Image src={img} alt="logo" />
            </a>
          </Link>
          <div className="login-header-link">
            <p>
              <span className="register-link-left">
                Don't have an account ?
              </span>
              <Link href={"/register"}>
                <a>
                  Sign up
                  <span>
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M10.7146 6.42855C10.7146 6.66963 10.632 6.87275 10.4668 7.03793L6.10742 11.3973C5.93331 11.5625 5.73019 11.6451 5.49805 11.6451C5.27037 11.6451 5.06947 11.5625 4.89537 11.3973L4.39314 10.8951C4.22349 10.7254 4.13867 10.5223 4.13867 10.2857C4.13867 10.0491 4.22349 9.84596 4.39314 9.67632L6.35519 7.71427H1.6409C1.40876 7.71427 1.22015 7.63056 1.07506 7.46315C0.929967 7.29574 0.857422 7.09373 0.857422 6.85713V5.99998C0.857422 5.76338 0.929967 5.56137 1.07506 5.39396C1.22015 5.22654 1.40876 5.14284 1.6409 5.14284H6.35519L4.39314 3.17409C4.22349 3.01338 4.13867 2.81248 4.13867 2.57141C4.13867 2.33034 4.22349 2.12945 4.39314 1.96873L4.89537 1.4665C5.06501 1.29686 5.2659 1.21204 5.49805 1.21204C5.73465 1.21204 5.93778 1.29686 6.10742 1.4665L10.4668 5.82588C10.632 5.98213 10.7146 6.18302 10.7146 6.42855Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="login-form">
          <LoginForm handleSubmit={login} />
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {popup && (
          <Popup
            type="success"
            title="Notice"
            description="This is only a UI template, for demonstration purposes only"
            handleClose={() => {
              setPopup(!popup);
            }}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
      55.87%55.87%at 35.49%-18.37%,
      #943cff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      91.61%92.58%at 104.86%-43.36%,
      #fd9d52 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      50.59%55.55%at -2.99%-8.69%,
      #dd45d3 9.06%,
      rgba(255, 255, 255, 0) 100%
    );
  .login-form {
    width: 450px;
    margin: 0 auto;
  }
  .login-content {
    height: 100%;
    width: clamp(70%, 1140px, 90%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .login-header {
    width: 100%;
    display: grid;
    grid-template-columns: 140px auto;
    padding: 3em;
  }
  .login-header-link {
    width: fit-content;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #2d3748;
      font-size: 16px;
    }
    a {
      color: #000;
      text-decoration: none;
      margin-left: 0.5em;
      font-weight: 500;
      span {
        margin-left: 0.5em;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .login-content {
      width: 100%;
    }
    .login-header {
      grid-template-columns: 100px auto;
      padding: 2em 1em;
    }
    .login-header-link {
      .register-link-left {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .login-form {
      width: 90%;
    }
  }
`;
