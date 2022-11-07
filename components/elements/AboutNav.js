import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const AboutNav = () => {
  const ref = useRef(null);
  const [stuck, setStuck] = useState(false);
  const [selected, setSelected] = useState(1);
  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: "-91px 0px 91px 0px",
      }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return (
    <Container ref={ref} className={stuck ? "stuck-about-nav" : "about-nav"}>
      <ul>
        <li>
          <Link href={"/about#values"}>
            <a
              onClick={() => {
                setSelected(1);
              }}
            >
              Our Values
            </a>
          </Link>
          {selected === 1 && <div className="selected-dot" />}
        </li>
        <li>
          <Link href={"/about#team"}>
            <a
              onClick={() => {
                setSelected(2);
              }}
            >
              Our Team
            </a>
          </Link>
          {selected === 2 && <div className="selected-dot" />}
        </li>
        <li>
          <Link href={"/about#partners"} scroll={false}>
            <a
              onClick={() => {
                setSelected(3);
              }}
            >
              {" "}
              Our Partners
            </a>
          </Link>
          {selected === 3 && <div className="selected-dot" />}
        </li>
      </ul>
    </Container>
  );
};

export default AboutNav;

const Container = styled.div`
  transition: all 0.3s ease-out 0s;
  position: sticky;
  top: 80px;
  z-index: 99;
  &.about-nav {
    padding: 2em 150px 2em 150px;
    background-color: #fff;
    ul {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 10px;
    }
  }
  &.stuck-about-nav {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    background-color: ${({ theme }) => theme.colors.footerBG};
    padding: 0.75em 150px 0.75em 150px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;
      font-size: 17px;
      line-height: 2em;
      display: inline;
      margin: 0 1.5em;
      color: #222;
      font-weight: 500;
      font-size: 18px;
      position: relative;
      &:hover {
        opacity: 0.9;
      }
      a {
        text-decoration: none;
        color: #222;
      }
    }
  }
  .selected-dot {
    width: 15px;
    height: 5px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.scrollbarColor};
    margin: 0 auto;
    transform: translateY(-3px);
  }
  @media only screen and (max-width: 1400px) {
    &.about-nav {
      padding: 2em 4em 2em 4em;
    }
    &.stuck-about-nav {
      padding: 0.75em 4em 0.75em 4em;
    }
  }
  @media only screen and (max-width: 1100px) {
    top: 68px;
  }
  @media only screen and (max-width: 768px) {
    &.about-nav {
      padding: 2em;
    }
    &.stuck-about-nav {
      padding: 0.75em 2em 0.75em 2em;
    }
    ul {
      flex-wrap: wrap;
      li {
        font-size: 16px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    ul {
      flex-direction: column;
      li {
        margin: 0.15em 1.5em;
      }
    }
  }
`;
