import styled from "styled-components";
import Image from "next/image";
import img from "../../assets/works/screen-1.png";

const FeaturesSection = ({ content, direction }) => {
  return (
    <Container>
      {direction === "right" ? (
        <>
          <div className="features-section-media">
            <Image src={img} alt="features-image" />
          </div>
          <div
            className="features-section-content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </>
      ) : (
        <>
          <div
            className="features-section-content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="features-section-media">
            <Image src={img} alt="features-image" />
          </div>
        </>
      )}
    </Container>
  );
};

export default FeaturesSection;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  padding: 4em 0;
  width: clamp(70%, 1140px, 90%);
  margin: 0 auto;
  .features-section-content {
    h2 {
      letter-spacing: 2px;
      line-height: 150%;
      color: ${({ theme }) => theme.colors.textColor};
      text-align: left;
      font-weight: 500;
      font-size: 2em;
      margin: 1em 0;
      span {
        text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    p {
      font-size: 17px;
      line-height: 2em;
      color: #444;
      margin: 1em 0;
      text-align: left;
      opacity: 0.8;
    }
    li {
      list-style: none;
      font-size: 17px;
      line-height: 2em;
      color: #444;
      opacity: 0.8;
      svg {
        width: 24px;
        height: 24px;
        fill: ${({ theme }) => theme.colors.primary};
        margin-right: 0.5em;
        transform: translateY(5px);
      }
    }
  }
  .features-section-media {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1400px) {
    padding: 4em;
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    gap: 4em;
    padding: 4em 2em;

    .features-section-content {
      grid-row: 1/2;
    }
    .features-section-media {
      grid-row: 2/3;
    }
  }

  @media only screen and (max-width: 768px) {
    .features-section-content {
      h2 {
        font-size: 1.5rem !important;
      }
      p {
        font-size: 15px;
      }
      li {
        font-size: 15px;
        svg {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 4em 1em;
  }
`;
