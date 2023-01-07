import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../elements/Button";
import CustomInput2 from "./CustomInput2";
import SocialLoginButton from "./SocialLoginButton";
import logo1 from "../../assets/google-logo.png";
import logo2 from "../../assets/github-logo.png";
import Link from "next/link";

const svg1 = () => {
  return (
    <svg viewBox="0 0 32 32">
      <path
        d="M26.249 28H5.753a.756.756 0 0 1-.75-.83C5.338 23.752 8.898 20 16 20s10.662 3.752 10.997 7.17a.756.756 0 0 1-.75.83zM16 18c-3.201 0-5.997-2.778-5.997-7.25 0-3.85 2.421-6.75 5.997-6.75s5.997 2.9 5.997 6.75c0 4.472-2.796 7.25-5.997 7.25z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
const svg2 = () => {
  return (
    <svg viewBox="0 0 64 64">
      <path
        d="M44.01 28.02h1a4.177 4.177 0 0 1 4 4.334v17.334a4.177 4.177 0 0 1-4 4.333h-26a4.177 4.177 0 0 1-4-4.333V32.354a4.177 4.177 0 0 1 4-4.333h1v-7.005c0-4.03.846-6.379 2.729-8.262 1.883-1.883 4.23-2.73 8.258-2.73h2.026c4.029 0 6.376.847 8.258 2.73 1.883 1.883 2.729 4.231 2.729 8.262zm-4-7.002c0-2.565-.539-4.06-1.737-5.258-1.198-1.198-2.691-1.737-5.255-1.737h-2.016c-2.564 0-4.057.539-5.255 1.737-1.198 1.199-1.737 2.693-1.737 5.258v7.003h16z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

const RegisterForm = ({ handleSubmit, feedback }) => {
  return (
    <Container>
      <h1 className="register-h1">Create your account</h1>
      <div className="login-input-row register-select-div">
        <input type="checkbox" />
        <p>
          I agree and acknowledge Vizion&apos;s
          <Link href="/privacy">
            <a> Privacy Policy.</a>
          </Link>
        </p>
      </div>
      <div className="login-input-row">
        <SocialLoginButton
          text="Sign up with Google"
          icon={logo1}
          styles={{ background: "#2f80ed" }}
        />
      </div>
      <div className="login-input-row">
        <SocialLoginButton
          text="Sign up with Github"
          icon={logo2}
          styles={{ background: "#222" }}
        />
      </div>

      <span className="span-text">or</span>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: "",
          email: "",
          pwd: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("required"),
          email: Yup.string().email("must be an e-mail").required("required"),
          pwd: Yup.string().required("required"),
        })}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await handleSubmit(data);
          if (feedback?.status === 1 || feedback?.status === null) {
            resetForm();
          }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, values }) => (
          <Form className="form first-form">
            <div className="login-input-row item-1">
              <CustomInput2
                name="name"
                placeholder="Full Name"
                id="name"
                type="text"
                Icon={svg1}
              />
            </div>
            <div className="login-input-row item-1">
              <CustomInput2
                name="email"
                placeholder="Email"
                id="email"
                type="text"
                Icon={svg1}
              />
            </div>

            <div className="login-input-row item-1">
              <CustomInput2
                name="pwd"
                placeholder="Password"
                id="pwd"
                type="password"
                Icon={svg2}
              />
            </div>

            <div className="form-contact-bottom">
              <Button
                handleClick={handleSubmit}
                title={isSubmitting ? "Signing up..." : "Sign Up"}
                type="button"
                bg="#000"
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

export default RegisterForm;

const Container = styled.div`
  padding-top: 100px;
  .register-h1 {
    color: #000;
    text-align: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 2;
    margin: 0 0 24px;
    border-bottom: 1px solid #eee;
  }
  .register-select-div {
    display: flex;
    gap: 2em;
    padding: 2em 0;
    margin: 0 auto;
    width: 70%;
    input {
      width: 20px;
    }
    p {
      font-size: 14px;
    }
    a {
      padding: 0.5em 0 1em 0;
      color: #2f80ed;
      font-weight: 500;
      text-decoration: none;
    }
  }
  input,
  textarea {
    width: 100%;
  }
  .login-input-row {
    margin-bottom: 1em;
  }
  .span-text {
    color: #4a5568;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    display: block;
    padding: 1em 0;
  }
  .form-contact-bottom {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1000px) {
    padding-top: 4em;
    .register-h1 {
      border-bottom: none;
      text-align: center;
    }
  }
  @media only screen and (max-width: 768px) {
    .register-select-div {
      width: 98%;
      gap: 0.75em;
      padding: 1em 0;
    }
  }
`;
