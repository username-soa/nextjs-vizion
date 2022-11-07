import styled from "styled-components";
import Image from "next/image";
import img from "../../assets/works/work-bg.png";
import img2 from "../../assets/works/works-img1.png";

const RotatingImages = ({ image }) => {
  return (
    <Container>
      <div className="rotating-img-wrp scaled-down img-1">
        <Image src={img} />
      </div>
      <div className="rotating-img-wrp scaled-down img-2">
        <Image src={img2} />
      </div>

      <div className="rotating-img-wrp  img-3">
        <Image src={image} />
      </div>
    </Container>
  );
};

export default RotatingImages;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  .responsive-img {
    width: 100%;
    position: relative;
  }

  .rotating-img-wrp {
    position: absolute;
  }
  .scaled-down {
    transform: scale(0.8);
  }
  .img-1 {
    opacity: 0.3;
    span {
      animation: spin 500s linear infinite;
    }
  }
  .img-2 {
    span {
      animation: spin-reverse 500s linear infinite;
    }
  }
  .img-3 {
    span {
      box-shadow: 0 10px 46px -4px rgb(0 0 0 / 30%);
      border-radius: 35px;
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin-reverse {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @media only screen and (max-width: 100px) {
    /* margin-top: 2em; */
  }
  @media only screen and (max-width: 768px) {
    .scaled-down {
      transform: scale(0.7);
    }
  }
`;
