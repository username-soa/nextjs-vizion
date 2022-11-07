import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Breadcrumbs = ({ from = "/", fromName = "Home", toName }) => {
  return (
    <Container>
      <ul>
        <li>
          <Link href={from}>
            <a>{fromName}</a>
          </Link>
        </li>
        <li>
          <span className="span-divider">/</span>
        </li>
        <li>
          <span className="span-text">{toName}</span>
        </li>
      </ul>
    </Container>
  );
};

export default Breadcrumbs;

const Container = styled.section`
  li {
    list-style: none;
    font-size: 17px;
    line-height: 2em;
    color: #444;
    opacity: 0.8;
    display: inline;
    span {
      line-height: 150%;
    }
    .span-divider {
      color: #fff;
      margin: 0 0.65em;
      opacity: 0.7;
      font-size: 14px;
    }
    .span-text {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 7px 14px;
      font-size: 14px;
      border-radius: 10px;
      color: #fff;
    }
    > a {
      opacity: 0.7;
      color: #fff;
      text-decoration: none;
      transition: all 0.2s ease;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
