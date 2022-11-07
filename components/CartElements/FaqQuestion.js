import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const FaqQuestion = ({ title, children }) => {
  const CartVariants = {
    hidden: { opacity: 0, y: "100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, type: "Inertia" },
    },
  };
  const ExtraInfoVariants = {
    hidden: { opacity: 0, y: "-100px" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "Inertia" },
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <Container animate="visible" initial="hidden" variants={CartVariants}>
      <div
        className="question-wrp"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h4>{title}</h4>
        <svg
          className={open ? "rotated" : null}
          onClick={() => {
            setOpen(!open);
          }}
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
        </svg>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={open ? "visible" : ""}
            initial="hidden"
            variants={ExtraInfoVariants}
            exit={{
              opacity: 0,
              y: "100vh",
              transition: { type: "Inertia" },
            }}
            className="extra-info active"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default FaqQuestion;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  h4 {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 1.4em !important;
    text-transform: uppercase;
    margin: 0 0.5em;
  }
  .question-wrp {
    background: #fff;
    padding: 2em 1.5em;
    display: grid;
    grid-template-columns: auto 20px;
    cursor: pointer;
  }
  .extra-info {
    background: rgb(247, 250, 252);
    padding: 1em;
    border: 2px solid rgb(243, 244, 245);
    border-radius: 10px;
    margin: 0.5em 0.5em 1em 0.5em;
    display: none;
    height: 0;
    transition: all 0.3s ease-in-out;
    &.active {
      display: flex;
      flex-direction: column;
      gap: 1em;
      height: fit-content;
    }
  }

  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
    transform: rotate(45deg);
    transition: all 0.3s ease-in-out;
    margin: auto;
    fill: #393d46;
    &.rotated {
      transform: rotate(0deg);
    }
  }

  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 1rem;
      line-height: 1.2rem;
    }
    .question-wrp {
      padding: 1.5em 1em;
    }
  }
`;
