import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StoryCart = ({ title, by, to, content, date, image, tags }) => {
  return (
    <Container>
      <div className="story-cart-left">
        <h5 className="story-cart-h5">{title}</h5>
        <div>
          <span className="story-cart-span">By:</span>
          <Link href="/">
            <a className="story-cart-author-a">{` ${by}`}</a>
          </Link>
          <span className="story-cart-date">{` ${date}`}</span>
        </div>
        <p className="story-cart-p">{content}</p>
        {tags?.length
          ? tags?.map((item, index) => {
              return (
                <Link href="/" key={index}>
                  <a className="story-cart-tags-a">{item}</a>
                </Link>
              );
            })
          : null}
      </div>

      <div className="story-cart-img ">
        <Image src={image} alt="story-image" layout="fill" objectFit="cover" />
      </div>
    </Container>
  );
};
export default StoryCart;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  min-height: 500px;
  cursor: grab;
  .story-cart-img {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .story-cart-h5 {
    margin: 1em 0;
    font-weight: 500;
    line-height: 1.5;
    font-size: 1.1rem;
    color: #222;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
  .story-cart-p {
    font-size: 1rem;
    line-height: 1.8em;
    color: #444;
    margin: 2em 0;
  }
  .story-cart-span {
    font-size: 0.8rem;
    font-weight: 600;
  }
  .story-cart-date {
    font-size: 0.8rem;
    color: #222;
  }
  .story-cart-left {
    background-color: #efefef;
    padding: 1em;
    position: relative;
    &::after {
      position: absolute;
      right: -15px;
      top: 40px;
      content: "";
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-left: 15px solid #efefef;
      border-bottom: 10px solid transparent;
      z-index: 9;
    }
  }
  .story-cart-author-a {
    color: #666;
    cursor: pointer;
    font-size: 0.8rem;
    text-decoration: none;
    padding-right: 1em;
    border-right: 1px solid #dcdcdc;
    &:hover {
      color: #a733bb;
    }
  }
  .story-cart-tags-a {
    background: #e9e9e9;
    color: #666;
    padding: 5px 15px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    text-decoration: none;
    margin: 0 0.25em;
    &:hover {
      color: #a733bb;
    }
  }
  @media only screen and (max-width: 768px) {
    .story-cart-p {
      font-size: 0.9rem;
    }
    .story-cart-h5 {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    .story-cart-left {
      padding: 1.5em 1em;
    }
  }
`;
