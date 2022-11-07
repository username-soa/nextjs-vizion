import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import EmailIcon from "../../assets/email.svg";
import PhoneEmail from "../../assets/phone-call.svg";
import LocationIcon from "../../assets/pin.svg";

const ContactInfoCard = ({ handleCopy }) => {
  const data = {
    email: "vizion@gmail.com",
    phone: "+0123 456 789",
    address: "Carol J. Stephens 1635 Franklin, Montgomery, AL 36104 USA",
  };
  return (
    <Container>
      <h2>Contact Info</h2>
      <p>Fill out the form and our team will get back to you within 24 hours</p>
      <div className="contact-info">
        <div className="channel-info">
          <PhoneEmail />
          <CopyToClipboard text={data?.phone} onCopy={handleCopy}>
            <h5 className="span-info">{data?.phone}</h5>
          </CopyToClipboard>
        </div>
        <div className="channel-info">
          <EmailIcon />
          <CopyToClipboard text={data?.email} onCopy={handleCopy}>
            <h5 className="span-info">{data?.email}</h5>
          </CopyToClipboard>
        </div>
        <div className="channel-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <CopyToClipboard text={data?.address} onCopy={handleCopy}>
            <h5 className="span-info">{data?.address}</h5>
          </CopyToClipboard>
        </div>
      </div>
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
    </Container>
  );
};

export default ContactInfoCard;

const Container = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.gradientBG};
  box-shadow: rgb(237 239 247 / 47%) 0px 10px 20px,
    rgb(237 239 247 / 47%) 0px 6px 6px;
  padding: 0 1em;
  color: #faf3e0;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    font-weight: 500 !important;
    letter-spacing: 2px;
    margin: 1em 0;
    color: #fff;
  }
  h5 {
    font-size: 0.9rem;
    font-weight: 300 !important;
    display: inline;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 1em 0;
  }
  .channel-info {
    padding: 1em;
    cursor: copy;
    margin: 0.5em auto;
    width: 100%;
    display: flex;
    font-size: 0.9rem;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    svg {
      align-self: center;
      margin: 1em;
      width: 20px;
      height: 20px;
      fill: #faf3e0;
      g {
        path {
          fill: #fff !important;
        }
      }
    }
    &:hover {
      background: #f8f8f8;
      color: #222;
      svg {
        fill: #222 !important;
        g {
          path {
            fill: #222 !important;
          }
        }
      }
    }
  }
  .span-info {
    text-align: center;
  }

  svg {
    width: 18px;
    height: 18px;
  }
  .side-menu-socials {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2em 0.75em 0.1em 0.75em;
    padding: 1em;
    border-top: 1px solid #fff;
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      line-height: 50px;
      background: transparent;
      border: 1px solid #dadada;
      text-align: center;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      svg {
        fill: #fff;
        width: 18px;
      }
      &:hover {
        border: 1px solid #640178;
        svg {
          fill: #640178;
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;
