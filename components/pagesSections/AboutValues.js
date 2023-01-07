import styled from "styled-components";
import Image from "next/image";
import img from "../../assets/about/about-img.gif";

const AboutValues = () => {
  const renderSvg = () => {
    return (
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
          fillRule="nonzero"
        />
      </svg>
    );
  };
  return (
    <Container id="values">
      <div className="about-values-content">
        <h2>
          Our Company <span>Values</span>
        </h2>
        <p className="p-strong">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using &apos;Content here,
          content here&apos;, making it look like readable English.
        </p>
      </div>
      <div className="about-values-img">
        <Image src={img} />
      </div>
      <div className="about-values-content">
        <h3>
          Long Term <span> Company Thinking</span>
        </h3>
        <p>
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
        </p>
        <ul>
          <li>
            {renderSvg()}
            There are many variations of passages of Lorem Ipsum available.
          </li>
          <li>
            {renderSvg()}
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </li>
        </ul>
      </div>
      <div className="about-values-content">
        <h3>
          <span>Creativity</span>
        </h3>
        <p>
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
        </p>
        <ul>
          <li>
            {renderSvg()}
            There are many variations of passages of Lorem Ipsum available.
          </li>
          <li>
            {renderSvg()}
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default AboutValues;

const Container = styled.div`
  padding: 1em 0;
  width: clamp(70%, 1140px, 90%);
  margin: 0 auto;
  display: grid;
  gap: 3em;
  grid-template-columns: 1fr 1fr;
  scroll-margin-top: 150px;
  .about-values-img {
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-values-content {
    h2 {
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 2px;
      position: relative;
      color: #343a40;
      line-height: 2em;
      span {
        text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
        font-weight: 600;
        color: #640178;
      }
    }
    h3 {
      font-size: 1.75rem;
      font-style: normal;
      line-height: 36px;
      color: #343a40;
      font-weight: 500;
      span {
        text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
        font-weight: 600;
        color: #640178;
      }
    }
    p {
      font-size: 16px;
      line-height: 2em;
      color: #444;
      margin: 2em 0;
      text-align: left;
      line-height: 2em;
      opacity: 0.9;
    }
    .p-strong {
      font-weight: bold;
    }
    ul {
      li {
        list-style: none;
        font-size: 16px;
        line-height: 2em;
        color: #222;
        font-weight: 500;
        margin: 0.5em 0;
        position: relative;
        svg {
          width: 24px;
          height: 24px;
          fill: ${({ theme }) => theme.colors.primary};
          margin-right: 0.5em;
          transform: translateY(5px);
        }
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    padding: 1em 4em;
    gap: 2em;
    width: 100%;
    .about-values-img {
      padding: 0em;
    }
    .about-values-content {
      h2 {
        font-size: 1.75rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 15px;
      }
      ul {
        li {
          font-size: 15px;
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
  @media only screen and (max-width: 768px) {
    padding: 1em 2em;
    scroll-margin-top: 250px;
    .about-values-content {
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      p {
        font-size: 14px;
      }
      ul {
        li {
          font-size: 14px;
        }
      }
    }
  }
`;
