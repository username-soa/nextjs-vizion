import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/logo-sticky.png";
import Popup from "../components/elements/Popup";
import RegisterForm from "../components/forms/RegisterForm";

const renderSVG = () => {
  return (
    <svg width="16px" height="16px" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8" fill="black"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 16C3.58588 16 0 12.4141 0 8C0 3.58588 3.58588 0 8 0C12.4141 0 16 3.58588 16 8C16 12.4141 12.4141 16 8 16ZM11.5859 4.35765C11.84 4.15059 12.2165 4.13176 12.48 4.34824C12.7812 4.60235 12.8188 5.04471 12.5553 5.34588L7.58588 11.3129C7.50118 11.4165 7.40706 11.5106 7.29412 11.5859C6.64471 12.0188 5.76941 11.84 5.33647 11.1906L3.37882 8.25412C3.16235 7.93412 3.25647 7.49177 3.57647 7.27529C3.82118 7.11529 4.13176 7.12471 4.35765 7.27529L6.41882 8.64L11.5765 4.34824L11.5859 4.35765Z"
        fill="white"
      ></path>
    </svg>
  );
};

const Register = () => {
  const [popup, setPopup] = useState(false);

  const signup = async (data) => {
    setPopup(!popup);
  };
  return (
    <Container>
      <div className="register-left">
        <div className="register-left-content">
          <Link href={"/"}>
            <a>
              <Image src={img} alt="logo" width={130} objectFit="scale-down" />
            </a>
          </Link>
          <h1 className="register-left-h1">Add chatbot & AI to your website</h1>
          <div className="register-left-row">
            <div className="register-left-row-top">
              {renderSVG()}
              <h2 className="register-left-h2">ML-Accelerated Data Labeling</h2>
            </div>
            <p>
              Machine learning powered pre-labeling, active tooling, and quality
              checks accurately annotate data.
            </p>
          </div>
          <div className="register-left-row">
            <div className="register-left-row-top">
              {renderSVG()}
              <h2 className="register-left-h2">Automated Quality Pipeline</h2>
            </div>
            <p>
              Varying levels and types of human review triggered based on a
              quality assurance system’s confidence scores.
            </p>
          </div>
          <div className="register-left-row">
            <div className="register-left-row-top">
              {renderSVG()}
              <h2 className="register-left-h2">Comprehensive Label Support</h2>
            </div>
            <p>
              Specify geometries for different classes and combine different
              annotation types in a singular task.
            </p>
          </div>
        </div>
      </div>
      <div className="register-right">
        <div className="register-header">
          <div className="register-header-logo">
            <Link href={"/"}>
              <a>
                <Image src={img} alt="logo" />
              </a>
            </Link>
          </div>
          <div className="register-header-link">
            <p>
              <span className="register-link-left">Have an account ?</span>
              <Link href={"/login"}>
                <a>
                  Log in
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
        <div className="register-form">
          <RegisterForm handleSubmit={signup} />
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

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .register-left-h1 {
    color: #000;
    font-size: 20px;
    font-weight: normal;
    line-height: 2;
    margin: 0 0 2em;
  }
  .register-left-h2 {
    color: #000;
    font-size: 16px;
    line-height: 2;
    font-weight: 500;
    display: block;
  }
  .register-left,
  .register-right {
    padding: 3em 2em;
  }
  .register-left {
    .register-left-content {
      margin: 0 3em 0 auto;
      padding-top: 2em;
      width: 450px;
    }
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
  }
  .register-left-row {
    margin-bottom: 3em;
    .register-left-row-top {
      display: flex;
      gap: 1em;
      align-items: center;
      margin-bottom: 0.25em;
    }
    p {
      color: #4a5568;
      margin: 0;
      font-size: 15px;
      line-height: 2;
      display: block;
      padding-left: 30px;
    }
  }
  .register-right {
    background: #fff;
    .register-form {
      width: 450px;
      margin: 0 auto 0 3em;
    }
  }
  .register-header {
    .register-header-logo {
      display: none;
    }
  }
  .register-header-link {
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
  @media only screen and (max-width: 1200px) {
    .register-left {
      .register-left-content {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    .register-header {
      width: 100%;
      display: grid;
      grid-template-columns: 100px auto;
      .register-header-logo {
        display: flex;
      }
    }
    .register-link-left {
      display: none;
    }

    .register-left {
      display: none;
    }
    .register-right {
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
      .register-form {
        width: 450px;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .register-right {
      .register-form {
        width: 100%;
      }
    }
  }
`;
