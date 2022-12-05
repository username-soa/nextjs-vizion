import styled from "styled-components";
import Image from "next/image";
import img from "../../assets/works/work-bg.png";
import img1 from "../../assets/works/01.gif";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeFeatures = () => {
  const data = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
        </svg>
      ),
      name: "Automate",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
        </svg>
      ),
      name: "Chat",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" />
        </svg>
      ),
      name: "Responses",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12.434 22.586l7.859-7.858.707.707-8.565 8.565-.001-.001v.001l-12.434-12.434.707-.707 11.727 11.727zm-.033-1.7l-12.401-12.405v-8.481h8.441l12.445 12.401-8.485 8.485zm-4.373-19.886h-7.028v7.067l11.401 11.405 7.07-7.07s-7.534-7.506-11.443-11.402zm-1.598 2.594c.78.78.78 2.048 0 2.828-.781.781-2.048.781-2.829 0-.78-.78-.78-2.048 0-2.828.781-.781 2.048-.781 2.829 0zm-.707.707c.39.39.39 1.024 0 1.414-.391.39-1.024.39-1.414 0-.391-.39-.391-1.024 0-1.414.39-.39 1.023-.39 1.414 0z" />
        </svg>
      ),
      name: "Tags",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
        </svg>
      ),
      name: "Sharing",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.053 17c.466 0 .844-.378.844-.845 0-.466-.378-.844-.844-.844-.466 0-.845.378-.845.844 0 .467.379.845.845.845zm.468-2.822h-.998c-.035-1.162.182-2.054.939-2.943.491-.57 1.607-1.479 1.945-2.058.722-1.229.077-3.177-2.271-3.177-1.439 0-2.615.877-2.928 2.507l-1.018-.102c.28-2.236 1.958-3.405 3.922-3.405 1.964 0 3.615 1.25 3.615 3.22 0 1.806-1.826 2.782-2.638 3.868-.422.563-.555 1.377-.568 2.09z" />
        </svg>
      ),
      name: "Support",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  const variants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const ref = useRef(null);
  const [currentItem, setCurrentItem] = useState({ index: 0, item: data[0] });

  useEffect(() => {
    ref.current = 0;
    const interval = setInterval(() => {
      if (ref.current === data.length) {
        ref.current = 0;
      }
      setCurrentItem({ index: ref.current, item: data[ref.current] });
      ref.current += 1;
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <div className="bg">
        <Image src={img} />
      </div>
      <div className="features-content">
        <div className="features-gif">
          <Image src={img1} layout="fill" objectFit="scale-down" />
        </div>

        <TestContainer>
          <h2>
            The best <span>Features</span> to elevate business
          </h2>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className="features-details-top"
              animate="visible"
              initial="hidden"
              exit="exit"
              variants={variants2}
              key={currentItem.index}
            >
              <div className={`item-div`}>{currentItem.item.icon}</div>
              <h3> {currentItem.item.name}</h3>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            <motion.p
              animate="visible"
              initial="hidden"
              exit="exit"
              variants={variants2}
              key={currentItem.index}
            >
              {currentItem.item.description}
            </motion.p>
          </AnimatePresence>
          <div className="span-dots-container">
            {data.map((item, index) => {
              return (
                <span
                  className={
                    ref.current === index
                      ? "span-dot dot-highlighted"
                      : "span-dot"
                  }
                  key={`span-dot-${index}`}
                />
              );
            })}
          </div>
        </TestContainer>
      </div>
    </Container>
  );
};

export default HomeFeatures;

const Container = styled.section`
  position: relative;
  padding: 4em 150px;

  .bg {
    width: 25%;
    aspect-ratio: 1/1;
    animation: spin 40s linear infinite;
    position: absolute;
    left: -15%;
    top: 20%;
    opacity: 0.3;
  }
  .features-content {
    display: grid;
    grid-template-columns: 1fr 1fr;

    > div {
      min-height: 500px;
    }
  }
  .features-gif {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
  }

  @media only screen and (max-width: 1400px) {
    padding: 4em 2em;
  }
  @media only screen and (max-width: 1200px) {
    .bg {
      display: none;
    }
  }
  @media only screen and (max-width: 1000px) {
    .features-content {
      grid-template-columns: 100%;
      grid-template-rows: 2fr 1fr;
      gap: 2em;
      > div {
        min-height: unset;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1.25em;
    .features-content {
      grid-template-columns: 100%;
      grid-template-rows: 1.5fr 1fr;
      gap: 2em;
    }
  }
  @media only screen and (max-width: 400px) {
    .features-content {
      grid-template-rows: 1.15fr 1fr;
    }
  }
`;

const TestContainer = styled.div`
  gap: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: left;
    margin-bottom: 1em;
    span {
      text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    font-size: 17px;
    line-height: 2em;
    color: #444;
    text-align: left;
    opacity: 0.9;
    font-weight: 300;
    min-height: 180px;
  }
  .features-details-top {
    display: flex;
    gap: 1em;
    align-items: center;
    .item-div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      color: #7d4ac7;
      border-radius: 20px;
      z-index: 3;
      cursor: pointer;
      border: 1px solid #e6e6e6;
      transition: all 0.3s ease-in-out;
      background: ${({ theme }) => theme.colors.gradientBG};
      svg {
        fill: #fff;
      }
      &:hover {
        background: #fff;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        svg {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  .span-dots-container {
    gap: 0.4em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .span-dot {
    background: #ccc;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .dot-highlighted {
    background: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 1200px) {
    h2 {
      font-size: 1.5rem !important;
    }
    h3 {
      font-size: 1.25rem;
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1.25rem !important;
    }
    p {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 400px) {
    padding: 0;
    h2 {
      font-size: 1.25rem !important;
    }
    p {
      font-size: 15px;
    }
  }
`;
