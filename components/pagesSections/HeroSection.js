import Image from "next/image";
import styled from "styled-components";
import img from "../../assets/banner/banner-after.png";
import img2 from "../../assets/banner/banner-img.png";

const HeroSection = () => {
  return (
    <Container>
      <div className="hero-section-content">
        <div className="hero-text-wrp">
          <div className="hero-text-content">
            <h1>ADD CHATBOT & AI TO YOUR WEBSITE</h1>
            <h3>
              Free Try for 30 Days. <span> Let’s Start</span>
            </h3>
            <div className="hero-form-wrp">
              <form>
                <input
                  placeholder="you@example.com"
                  type="text"
                  className="hero-form-input"
                />
                <button type="submit" className="hero-form-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="hero-text-img">
            <Image src={img2} />
          </div>
        </div>
        <div className="hero-bottom-img-wrp">
          <Image src={img} layout="fill" />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

const Container = styled.section`
  min-height: 90vh;
  /* margin-bottom: 10vh; */
  .hero-section-content {
    padding-top: 15vh;
    background-image: ${({ theme }) => theme.colors.gradientBG};
  }
  .hero-text-wrp {
    width: clamp(70%, 1140px, 90%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;

    .hero-text-img {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hero-text-content {
      padding-left: 1em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1em;
      h1 {
        font-size: 35px;
        font-weight: 600;
        color: #fff;
        width: 90%;
        line-height: 150%;
        margin-top: 3em;
      }
      h3 {
        font-size: 19px;
        font-style: normal;
        line-height: 150%;
        color: #fff;
        font-weight: 400;
        span {
          font-weight: 600;
          font-size: 15px;
          color: #fff;
        }
      }
    }
  }
  .hero-bottom-img-wrp {
    width: 100%;
    height: 10vh;
    position: relative;
    z-index: 9;
  }
  .hero-form-wrp {
    margin-top: 1em;
    form {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75em;
    }
    .hero-form-input {
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      height: 45px;
      padding: 0 15px;
      outline: none !important;
      box-shadow: inherit;
      width: 280px;
      border-radius: 9px;
      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #fff;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #fff;
      }
    }
    .hero-form-btn {
      background-color: #fff;
      padding: 0 15px;
      height: 45px;
      outline: none;
      border: none;
      border-radius: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    min-height: fit-content;
    margin-bottom: 4em;
    .hero-section-content {
      padding-bottom: 4em;
    }
    .hero-text-wrp {
      grid-template-columns: 100%;
      grid-template-rows: auto auto;
      gap: 4em;
      .hero-text-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        h1 {
          width: 100%;
          text-align: center;
          font-size: 30px;
          margin-top: 0;
        }
        h3 {
          text-align: center;
          font-size: 20px;
        }
      }
    }
    .hero-bottom-img-wrp {
      display: none;
    }
  }
  @media only screen and (max-width: 1400px) {
    .hero-text-wrp {
      width: 90%;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero-text-wrp {
      .hero-text-content {
        h1 {
          font-size: 25px;
        }
        h3 {
          font-size: 15px;
        }
      }
    }
    .hero-form-wrp {
      margin-top: 1em;
      .hero-form-input {
        width: 250px;
      }
      form {
        justify-content: center;
      }
    }
  }
`;
