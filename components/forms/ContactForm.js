import styled from "styled-components";
import CustomInput from "../elements/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../elements/Button";

const ContactForm = ({ handleSubmit, feedback }) => {
  return (
    <Container>
      <h3 className="contact-form-h3">Get in Touch</h3>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("required"),
          email: Yup.string().email("must be an e-mail").required("required"),
          phone: Yup.string().required("required"),
          message: Yup.string().required("required"),
        })}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await handleSubmit(data);
          console.log(feedback);
          // if (feedback?.status === 1 || feedback?.status === null) {
          //   console.log("inside resete");
          //   resetForm();
          // }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <div className="input-row-contact item-2">
              <CustomInput
                label="Name"
                name="name"
                placeholder="Your Name"
                id="name"
                type="text"
              />
              <CustomInput
                label="Email"
                name="email"
                placeholder="Your Email"
                id="email"
                type="text"
              />
            </div>

            <div className="input-row-contact item-1">
              <CustomInput
                label="Phone"
                name="phone"
                placeholder="Your Phone Number"
                id="phone"
                type="text"
              />
            </div>
            <div className="input-row-contact extra-margin">
              <CustomInput
                label="Message"
                name="message"
                placeholder="Type Your Message Here"
                id="message"
                type="text"
                textarea
              />
            </div>

            <div className="form-contact-bottom">
              <Button
                handleClick={handleSubmit}
                title={isSubmitting ? "Sending..." : "Send Message"}
                type="button"
                bg="linear-gradient(
                  to right,
                  rgb(167, 51, 187) 0%,
                  rgb(125, 74, 199) 100%
                )"
                color="#fff"
                border={"transparent"}
                radius="10px"
                margin=".5em"
              />
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  height: 100%;
  background: #fff;

  .contact-form-h3 {
    font-size: 2rem;
    font-weight: 500 !important;
    letter-spacing: 2px;
    color: #222;
    line-height: 150%;
    margin: 1em 0;
  }

  input,
  textarea {
    width: 100%;
  }
  .extra-margin {
    margin: 0 0.5em;
    grid-column: 1/3;
  }

  .input-row-contact {
    margin: 0.5em 0;
  }
  .item-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  .contact-form-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .go-back-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      padding: 0.5em 0;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      transition: all 0.3s ease;
      cursor: pointer;
      background-color: #eee;
      color: ${({ theme }) => theme.colors.primary};
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .form-contact-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1300px) {
    margin: 0;
    box-shadow: none;
    .input-row-contact,
    form {
      margin: 0;
    }
  }
  @media only screen and (max-width: 1000px) {
    padding: 0 0.5em;
  }
  @media only screen and (max-width: 768px) {
    .form-contact-bottom {
    }
    .contact-form-h3 {
      font-size: 1.5rem;
    }
    .item-2 {
      grid-template-columns: 100%;
      gap: 0;
    }
  }
`;
