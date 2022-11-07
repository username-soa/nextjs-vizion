import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/works/work-bg.png";
import img2 from "../../assets/about/about-img.gif";

const HomeAbout = () => {
  return (
    <Container>
      <div className="bg">
        <Image src={img} />
      </div>
      <div className="div-content">
        <div className="title-box">
          <h2>
            The Best Way to know What They Want is
            <span className="title-span"> Through a Chatbot.</span>
          </h2>
          <p className="p-sub-title">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from a Latin
            professor.
          </p>
          <Link href="/about">
            <a className="read-more">Learn More</a>
          </Link>
        </div>
        <Image src={img2} />
      </div>
    </Container>
  );
};

export default HomeAbout;

const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding: 3em 0px;
  .bg {
    width: 25%;
    aspect-ratio: 1/1;
    animation: spin 40s linear infinite;
    position: absolute;
    right: -10%;
    top: 20%;
    opacity: 0.3;
  }
  .title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    text-align: center;
    margin-bottom: 1em;

    h2 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 2px;
      position: relative;
      color: #343a40;
      span {
        text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
        font-weight: 700;
        color: #640178;
      }
    }
    .p-sub-title {
      font-size: 17px;
      line-height: 2em;
      color: #444;
      margin: 0.75em 0;
    }
    .read-more {
      color: #7d4ac7;
      font-weight: 800;
      letter-spacing: 1px;
      position: relative;
      text-decoration: none;
      &::before {
        position: absolute;
        content: ">";
        letter-spacing: 0;
        right: -14px;
        font-size: 20px;
        bottom: -3px;
      }
    }
  }
  .div-content {
    max-width: 700px;
    margin: 0 auto;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 1200px) {
    padding: 2em;
    .title-box {
      h2 {
        font-size: 1.5rem !important;
      }
    }
    .bg {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1.25em;
    .title-box {
      h2 {
        font-size: 1.25rem !important;
      }
      .p-sub-title {
        font-size: 15px;
      }
    }
  }
`;
