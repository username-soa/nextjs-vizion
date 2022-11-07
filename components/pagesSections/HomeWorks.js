import styled from "styled-components";
import CheckSvg from "../elements/CheckSvg";
import RotatingImages from "../elements/RotatingImages";
import img from "../../assets/works/02.gif";
import img2 from "../../assets/works/works-arrow1.png";
import img4 from "../../assets/works/02.gif";

const HomeWorks = () => {
  return (
    <Container img={img2}>
      <div className="works-section-title">
        <h2 className="title-h2">
          Simple Platform to <span className="diff-color">Build & Deploy</span>
        </h2>
        <p className="title-p">Contrary to popular belief, Lorem Ipsum.</p>
      </div>
      <div className="works-section-content">
        <div className="works-section-row">
          <div className="works-section-title-box">
            <h2>
              Great Way to add Little Fun to Your{" "}
              <span className="diff-color">Corporate World</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable roots in a piece.
            </p>
            <ul>
              <li>
                <CheckSvg />
                Contrary to popular belief
              </li>
              <li>
                <CheckSvg />
                The standard chunk of Lorem Ipsum used since
              </li>
              <li>
                <CheckSvg />
                There are many variations of passages
              </li>
              <li>
                <CheckSvg />
                Many desktop publishing packages
              </li>
            </ul>
          </div>
          <div className="images-div">
            <RotatingImages image={img} />
          </div>
        </div>

        <div className="works-section-row">
          <div className="images-div grid-row-1">
            <RotatingImages image={img4} />
          </div>
          <div className="works-section-title-box grid-row-2">
            <h2>
              Chatbots are Just Another Way for
              <span className="diff-color"> Millennials to Chat</span>
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
        </div>
        <div className="works-section-row">
          <div className="works-section-title-box">
            <h2>
              Positive Feelings + Reduced Friction =
              <span className="diff-color"> Fun & Conversions</span>
            </h2>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
            <button
              onClick={() => {
                return null;
              }}
            >
              Read More
            </button>
          </div>
          <div className="images-div">
            <RotatingImages image={img4} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeWorks;

const Container = styled.section`
  padding: 4em 150px;
  .works-section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title-p {
      font-size: 17px;
      line-height: 2em;
      color: #444;
      margin: 0.75em 0;
      text-align: center;
    }
    .title-h2 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 2px;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.textColor};
      text-align: center;
      .diff-color {
        text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .works-section-content {
    margin-top: 4em;
  }
  .works-section-title-box {
    padding: 2em 0;
    grid-area: "b";
    h2 {
      letter-spacing: 2px;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.textColor};
      text-align: left;
      font-weight: 500;
      font-size: 1.75em;
      .diff-color {
        text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    p {
      font-size: 17px;
      line-height: 2em;
      color: #444;
      margin: 2em 0;
      text-align: left;
    }
    li {
      list-style: none;
      font-size: 17px;
      line-height: 2em;
      color: #444;
      opacity: 0.8;
      margin-top: 0.25em;
      svg {
        width: 24px;
        height: 24px;
        fill: ${({ theme }) => theme.colors.primary};
        margin-right: 0.5em;
        transform: translateY(5px);
      }
    }
    button {
      color: #fff;
      background: ${({ theme }) => theme.colors.gradientBG};
      padding: 15px 30px;
      display: inline-block;
      text-decoration: none !important;
      font-size: 16px;
      line-height: 16px;
      font-weight: 600;
      border-radius: 6px;
      letter-spacing: 1px;
      border: none;
      cursor: pointer;
    }
  }
  .row-img-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .works-section-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    padding: 4em 0;
  }
  @media only screen and (max-width: 1400px) {
    padding: 4em;
  }
  @media only screen and (max-width: 1200px) {
    .works-section-title {
      .title-h2 {
        font-size: 1.5rem !important;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .works-section-row {
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      gap: 3em;
    }
    .grid-row-2 {
      grid-row: 1/2;
    }
    .grid-row-1 {
      grid-row: 2/3;
    }
    .works-section-content {
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 4em 1.25em;
    .works-section-title {
      .title-h2 {
        font-size: 1.25rem !important;
      }
      .title-p {
        font-size: 15px;
      }
    }
    .works-section-title-box {
      h2 {
        font-size: 1.25rem !important;
      }
      p {
        font-size: 15px;
      }
      li {
        font-size: 15px;
      }
    }
  }
`;
