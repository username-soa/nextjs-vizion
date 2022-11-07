import styled from "styled-components";
import Image from "next/image";
import img from "../../assets/banner/banner-after.png";
import Breadcrumbs from "./Breadcrumbs";

const PageHeader = ({ title, from, fromName, toName }) => {
  return (
    <Container>
      <div className="page-header-content">
        <h1 className="page-header-h1">{title}</h1>
        <Breadcrumbs from={from} fromName={fromName} toName={toName} />
      </div>
      <div className="page-header-img">
        <div className="bottom-img">
          <Image src={img} layout="fill" />
        </div>
      </div>
    </Container>
  );
};

export default PageHeader;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.gradientBG};
  padding-top: 4em;
  padding-bottom: 15vh;
  position: relative;
  .page-header-content {
    width: clamp(70%, 1140px, 90%);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .page-header-h1 {
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 0;
    line-height: 150%;
    font-size: 2.5rem;
  }
  .page-header-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .bottom-img {
    width: 100%;
    height: 10vh;
    position: relative;
    z-index: 9;
  }
  @media only screen and (max-width: 1400px) {
    padding: 4em;
    padding-bottom: 15vh;
    .page-header-content {
      width: 100%;
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2em;
    padding-bottom: 15vh;
    .page-header-h1 {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 10vh;
    .page-header-content {
      flex-direction: column;
      gap: 2em;
      align-items: flex-start;
    }
    .page-header-img {
      display: none;
    }
  }
`;
