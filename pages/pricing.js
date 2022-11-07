import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import PageHeader from "../components/elements/PageHeader";
import PricingCard from "../components/CartElements/PricingCard";
import Popup from "../components/elements/Popup";
import AboutPartners from "../components/pagesSections/AboutPartners";

const pricing = () => {
  const [popup, setPopup] = useState(false);
  const data = [
    {
      isMain: false,
      name: "free",
      price: 0,
      features: [
        "Case Management",
        "Hourly and Flat Fee Billing ",
        "Custom Invoices",
        "Task Management",
        "Devices",
        "Payment Plans",
        "Clio Launche",
        "Trust Requests",
        "Advanced Reporting",
        "Priority Support",
      ],
    },
    {
      isMain: true,
      name: "Basic",
      price: 15,
      features: [
        "Advanced Reporting ",
        "Priority Support ",
        "Case Management",
        "Hourly and Flat Fee Billing",
        "Devices",
        "Payment Plans",
        "Clio Launcher",
        "Trust Requests",
        "Custom Invoices",
        "Task Management",
      ],
    },
    {
      isMain: false,
      name: "Business",
      price: 30,
      features: [
        "Custom Invoices",
        "Task Management",
        "Case Management",
        "Hourly and Flat Fee Billing",
        "Devices",
        "Payment Plans",
        "Clio Launcher",
        "Trust Requests",
        "Advanced Reporting",
        "Priority Support",
      ],
    },
  ];
  return (
    <Container>
      <Head>
        <title>Vizion - AI/ML - Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title={"Pricing"} toName="Pricing" />
      <div className="pricing-container">
        <h2>
          Pick a pricing plan. Start more
          <br className="hide-on-mobile" />
          <span> conversations</span>. Shrink your sales cycle.
        </h2>
        <p className="pricing-container-p">
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia.
        </p>
        <div className="pricing-cards-wrp">
          {data.map((item, index) => {
            return (
              <PricingCard
                key={`pricing-card-${index}`}
                price={item.price}
                features={item.features}
                name={item.name}
                isMain={item.isMain}
                handleClick={() => {
                  setPopup(!popup);
                }}
              />
            );
          })}
        </div>
      </div>
      <AboutPartners />
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

export default pricing;

const Container = styled.div`
  .pricing-container {
    padding: 2em 0;
    width: clamp(70%, 1140px, 90%);
    margin: 0 auto;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-align: center;
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 2em;
      line-height: 1.5;
      margin: 1em 0;
      span {
        color: ${({ theme }) => theme.colors.primary};
        text-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
      }
    }

    .pricing-container-p {
      font-size: 16px;
      line-height: 2em;
      color: #444;
      margin: 1em auto;
      text-align: center;
      opacity: 0.8;
      width: 80%;
    }
  }
  .pricing-cards-wrp {
    padding-top: 5em;
    display: flex;
    gap: 2em;
  }
  @media only screen and (max-width: 1400px) {
    .pricing-container {
      padding: 2em 4em;
      width: 100%;
    }
    .pricing-cards-wrp {
      gap: 1.5em;
    }
  }
  @media only screen and (max-width: 1000px) {
    .pricing-container {
      h2 {
        font-size: 1.5rem !important;
      }
    }
    .pricing-cards-wrp {
      flex-direction: column;
      padding: 4em 0;
      gap: 2em;
    }
  }
  @media only screen and (max-width: 768px) {
    .pricing-container {
      .pricing-container-p {
        width: 100%;
        font-size: 14px;
      }
    }
    .pricing-container {
      padding: 2em;
      h2 {
        font-size: 1.25rem !important;
      }
    }
    .hide-on-mobile {
      display: none;
    }
  }
`;
