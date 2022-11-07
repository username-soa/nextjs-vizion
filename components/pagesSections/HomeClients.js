import styled from "styled-components";
import ClientsCard from "../elements/ClientsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/clients/clients-img1.png";
import img2 from "../../assets/clients/clients-img2.png";
import img3 from "../../assets/clients/clients-img3.png";
import img4 from "../../assets/clients/clients-img4.png";
import img5 from "../../assets/clients/clients-img5.png";
import img6 from "../../assets/clients/clients-img6.png";

const data = [
  { img: img1, name: "HTML" },
  { img: img2, name: "Wordpress" },
  { img: img3, name: "Shopify" },
  { img: img4, name: "CSS" },
  { img: img5, name: "JQuery" },
  { img: img6, name: "BootStrap" },
];
const responsive = {
  largeDesktop: {
    breakpoint: { max: 1924, min: 1500 },
    items: 6,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1300 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1300, min: 600 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 600, min: 400 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  smallMobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const HomeClients = () => {
  return (
    <Container className="default-p-m">
      <div className="title-box">
        <h3 className="title text-dark">
          Worldwide Our <span className="timer">6000</span> Satisfied Client
          Using Chatbot
        </h3>
        <p className="p-sub-title">Contrary to popular belief, Lorem Ipsum.</p>
      </div>
      <div className="carousel-wrapper">
        <Carousel
          draggable={true}
          swipeable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .3 ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[
            "smallMobile",
            "mobile",
            "tablet",
            "desktop",
            "largeDesktop",
          ]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect={true}
        >
          {data?.map((item, index) => {
            return (
              <ClientsCard key={index} img={item?.img} name={item?.name} />
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

export default HomeClients;

const Container = styled.section`
  .title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    text-align: center;
  }
  h3 {
    font-size: 24px;
    font-style: normal;
    line-height: 36px;
    span {
      text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
      font-weight: 800;
      color: #640178;
    }
    &.text-dark {
      color: #343a40 !important;
    }
    &.title {
      font-weight: 600;
      letter-spacing: 2px;
      position: relative;
      z-index: -1;
    }
  }
  .timer {
    position: relative;
    &::after {
      position: absolute;
      right: -12px;
      top: -18px;
      content: "+";
      font-size: 24px;
      font-weight: 600;
    }
  }
  .p-sub-title {
    font-size: 17px;
    line-height: 2em;
    color: #444;
  }
  .carousel-wrapper {
    padding: 2em 0;
  }
`;
