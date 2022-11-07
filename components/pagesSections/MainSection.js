import React from "react";
import styled from "styled-components";

const MainSection = ({ children }) => {
  return <Section>{children}</Section>;
};

export default MainSection;

const Section = styled.section`
  padding: 2em 150px;
  @media only screen and (max-width: 1400px) {
    padding: 2em;
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1.25em;
  }
`;
