import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import PageHeader from "../components/elements/PageHeader";
import ContactForm from "../components/forms/ContactForm";
import ContactInfoCard from "../components/CartElements/ContactInfoCard";
import Popup from "../components/elements/Popup";
import FeedBack from "../components/elements/FeedBack";

const Contact = () => {
  let isMounted = true;
  const [popup, setPopup] = useState(false);
  const [feedback, setFeedback] = useState({ status: null, message: null });
  useEffect(() => {
    let timer;
    if (isMounted && feedback.status !== null) {
      timer = setTimeout(() => {
        setFeedback({
          ...feedback,
          status: null,
          message: null,
        });
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, [feedback]);

  const sendMessage = async (data) => {
    setPopup(!popup);
  };

  return (
    <Container>
      <Head>
        <title>Vizion - AI/ML - Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader
        title={"Contact Us"}
        from="/"
        fromName="Home"
        toName="Contact Us"
      />
      <div className="contact-page-content">
        <ContactInfoCard
          handleCopy={() => {
            setFeedback({
              ...feedback,
              status: 1,
              message: "Copied !",
            });
          }}
        />
        <ContactForm handleSubmit={sendMessage} feedback={feedback} />
      </div>
      {feedback?.status ? (
        <FeedBack bg="#000" color="#fff" message={feedback?.message} />
      ) : null}
      <AnimatePresence exitBeforeEnter>
        {popup && (
          <Popup
            type="success"
            title="Notice"
            description="This is only a UI template, for demonstration purposes only"
            handleClose={() => {
              setPopup(!popup);
            }}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  .contact-page-content {
    padding: 6em 0;
    width: clamp(70%, 1140px, 90%);
    margin: 0 auto;
    display: grid;
    gap: 2em;
    grid-template-columns: 400px auto;
  }
  @media only screen and (max-width: 1400px) {
    .contact-page-content {
      padding: 4em;
      width: 100%;
      margin: 0;
    }
  }
  @media only screen and (max-width: 1000px) {
    .contact-page-content {
      grid-template-columns: 100%;
      gap: 2em;
      padding: 4em 2em;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact-page-content {
      padding: 4em 1em;
    }
  }
`;
