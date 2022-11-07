import styled from "styled-components";
import { motion } from "framer-motion";

const CookiesCard = ({ handleClick }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: "100px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
      },
    },
    exit: {
      opacity: 0,
      y: "100px",
    },
  };

  return (
    <Container
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
    >
      <div className="cookies-card-content">
        <p>We use cookies to give you tailored experiences on our website.</p>
        <button onClick={handleClick}>Accept</button>
      </div>
    </Container>
  );
};

export default CookiesCard;

const Container = styled(motion.div)`
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 99;
  .cookies-card-content {
    background-color: #000;
    color: #fff;
    border-radius: 13px;
    padding: 0.75em 1.5em;
    display: flex;
    align-items: center;
    gap: 2em;
    margin: 0 auto;
    width: fit-content;
  }
  p {
    font-size: 14px;
    background: -webkit-linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  button {
    border-radius: 20px;
    font-size: 14px;
    padding: 0.25em 0.75em;
    background-color: rgba(39, 39, 42, 1);
    color: #fff;
    border: 1px solid rgba(63, 63, 70, 1);
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    .cookies-card-content {
      gap: 0.5em;
      padding: 0.75em;
    }
    p,
    button {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 560px) {
    .cookies-card-content {
      flex-direction: column;
      width: 95%;
    }
  }
`;
