import React from "react";
import styled from "styled-components";
import Image from "next/image";

const SocialLoginButton = ({ icon, text, handleClick, styles }) => {
  return (
    <Container onClick={handleClick} style={{ ...styles }}>
      <div className="social-btn-icon">
        <Image src={icon} />
      </div>
      <span className="social-btn-text">{text}</span>
    </Container>
  );
};

export default SocialLoginButton;

const Container = styled.div`
  border-radius: 25px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
  display: grid;
  grid-template-columns: 40px auto;
  cursor: pointer;
  overflow: hidden;
  .social-btn-icon {
    background: rgba(255, 255, 255, 0.5);
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social-btn-text {
    color: #fff;
    line-height: 46px;
    text-transform: uppercase;
    padding: 0 24px;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
  @media only screen and (max-width: 768px) {
    .social-btn-text {
      padding-left: 0.75em;
      font-size: 13px;
    }
  }
`;
