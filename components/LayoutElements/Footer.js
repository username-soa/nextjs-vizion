import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <Container>
      <div className="footer-top">
        <div className="footer-top-column div-grow">
          <div className="footer-top-info">
            <Link href="/">
              <a>
                <Image
                  src={img}
                  width={110}
                  height={35}
                  placeholder="blur"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
          <div className="footer-top-socials">
            <div className="footer-social">
              <a
                className="social-link"
                href="https://facebook.com/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                className="social-link"
                href="https://twitter.com/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                className="social-link"
                href="https://youtube.com/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
            <div className="footer-top-extra">
              <p>© {new Date().getFullYear()} Vizion, All rights reserved.</p>
              <p>Site made by SOA</p>
            </div>
          </div>
        </div>
        <div className="footer-top-column">
          <h4 className="footer-top-h4">Pages</h4>
          <Link href={"/"}>
            <a className="footer-top-link">Home</a>
          </Link>
          <Link href={"/about"}>
            <a className="footer-top-link">About</a>
          </Link>

          <Link href={"/pricing"}>
            <a className="footer-top-link">Pricing</a>
          </Link>
          <Link href={"/features"}>
            <a className="footer-top-link">Features</a>
          </Link>
        </div>
        <div className="footer-top-column">
          <h4 className="footer-top-h4">Support</h4>
          <Link href={"/faq"}>
            <a className="footer-top-link">FAQs</a>
          </Link>
          <Link href={"/contact"}>
            <a className="footer-top-link">Contact</a>
          </Link>

          <Link href={"/privacy"}>
            <a className="footer-top-link">Privacy Policy</a>
          </Link>
          <Link href={"/terms"}>
            <a className="footer-top-link">Terms & conditions</a>
          </Link>
        </div>
        <div className="footer-top-column">
          <h4 className="footer-top-h4">Find Us</h4>
          <a className="footer-top-link" href="tel:+66 0410 793 294">
            +66 0410 793 294
          </a>
          <a className="footer-top-link" href="vizion@contact.com">
            vizion@contact.com
          </a>
          <a className="footer-top-link" href="#">
            1 Newgate, London, Croydon, CR0 2FB
          </a>
        </div>
      </div>
      <div className="footer-bottom-socials">
        <div className="footer-social">
          <a
            className="social-link"
            href="https://facebook.com/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            className="social-link"
            href="https://twitter.com/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            className="social-link"
            href="https://youtube.com/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
        </div>
        <div className="footer-top-extra">
          <p>© {new Date().getFullYear()} Vizion, All rights reserved.</p>
          <p>Site made by SOA</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 2em;
  border-radius: 15px;
  background-color: #f3efef;
  width: clamp(70%, 1140px, 90%);
  margin: 1em auto 2em auto;
  .footer-bottom-socials {
    display: none;
  }
  .footer-top-socials {
    margin: auto 1em 0 0;
    gap: 1em;
    display: flex;
    flex-direction: column;
    width: fit-content;
  }
  .footer-top-extra {
    border-top: 1px solid #640178;
    border-bottom: 1px solid #640178;
    padding: 0.5em 0.25em;
    text-align: right;
    p {
      font-size: 13px;
      padding: 0.25em 0.5em;
      opacity: 0.9;
    }
  }
  .div-grow {
    flex-grow: 1;
  }
  .footer-top {
    display: flex;
    gap: 2em;
  }
  .footer-top-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .footer-top-link {
    transition: all 0.3s ease;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.05rem;
    text-decoration: none;
    &:hover {
      color: #640178;
    }
  }
  .footer-top-h4 {
    font-size: 0.95rem;
    font-weight: 400;
    color: #444;
    margin-bottom: 0.75em;
    opacity: 0.8;
  }

  .footer-social {
    display: flex;
    gap: 1em;
    align-items: center;
    margin-top: 1em;
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background: #fff;
      border: 1px solid #dadada;
      text-align: center;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      svg {
        fill: #640178;
        width: 14px;
      }
      &:hover {
        background-color: #640178;
        svg {
          fill: #fff;
        }
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    margin: 1em 4em;
    width: unset;

    .footer-top-extra {
      p {
        font-size: 12px;
      }
    }
    .footer-top {
      gap: 1.5em;
    }
  }
  @media only screen and (max-width: 1100px) {
    .footer-top-h4 {
      font-size: 0.8rem;
    }
    .footer-top-link {
      font-size: 0.85rem;
    }
    .footer-top {
      gap: 1em;
    }
    .footer-top-extra p {
      font-size: 10px;
    }
    .footer-top-socials {
      margin: auto 0 0 0;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 1.5em 1.25em;
    .footer-top {
      flex-direction: column;
      gap: 2em;
    }
    .footer-top-h4 {
      font-size: 14px;
    }
    .footer-top-link {
      font-size: 15px;
    }
    .footer-top-socials {
      display: none;
    }
    .footer-bottom-socials {
      display: flex;
      flex-direction: column;
      gap: 2em;
      margin-top: 2em;
    }
    .footer-top-info {
      margin: 1em 0;
    }
    .footer-social {
      margin-top: 1em;
      justify-content: space-around;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 1em 2em;
  }
`;
