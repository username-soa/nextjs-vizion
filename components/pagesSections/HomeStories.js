import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoryCart from "../CartElements/StoryCart";
import img from "../../assets/blog/blog-img1.jpg";
import img2 from "../../assets/blog/blog-img2.jpg";

const data = [
  {
    title: "Established fact that a reader will be",
    by: "Admin",
    date: "May 20, 2019",
    to: "/blog",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Programming", "Dev"],
    image: img,
  },
  {
    title: "Established fact that a reader will be",
    by: "Admin",
    date: "May 10, 2018",
    to: "/blog",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    tags: ["Design", "style"],
    image: img2,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 1100 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 1100, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const HomeStories = () => {
  return (
    <Container>
      <div className="title-box">
        <h2>
          Recent
          <span className="title-span"> Stories</span>
        </h2>
        <p className="p-sub-title">Contrary to popular belief, Lorem Ipsum.</p>
      </div>

      <div className="stories-wrapper">
        <Carousel
          draggable={false}
          swipeable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .3 ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          // deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect={true}
        >
          {data?.map((item, index) => {
            return (
              <StoryCart
                key={index}
                image={item?.image}
                title={item?.title}
                content={item?.content}
                by={item?.by}
                to={item?.to}
                tags={item?.tags}
                date={item?.date}
              />
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

export default HomeStories;

const Container = styled.section`
  padding: 3em 150px;
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
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    .p-sub-title {
      font-size: 17px;
      line-height: 2em;
      color: #444;
      margin: 0.5em 0;
    }
  }
  .stories-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    .swiper-wrapper {
      > div {
        margin: 0 !important;
      }
    }
  }

  .react-multi-carousel-dot {
    button {
      height: 7px;
      width: 7px;
      border: none;
      background-color: rgba(0, 0, 0, 0.25) !important;
    }
    &.react-multi-carousel-dot--active {
      button {
        width: 12px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.8) !important;
      }
    }
  }
  @media only screen and (max-width: 1500px) {
  }
  @media only screen and (max-width: 1300px) {
    .title-box {
      h2 {
        font-size: 1.5rem !important;
      }
    }
    .stories-wrapper {
      max-width: unset;
    }
    padding: 2em;
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
