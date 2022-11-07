import Head from "next/head";
import styled from "styled-components";
import PageHeader from "../components/elements/PageHeader";
import FeaturesSection from "../components/pagesSections/FeaturesSection";

const Features = () => {
  const data = [
    {
      direction: "left",
      content: `
      
      <h2>Conversational <span>Maturity</span></h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Accompanied by English versions from the 1914 translation by H. Rackham.</p>
      `,
    },
    {
      direction: "right",
      content: `<h2>Emotionally<span> Intelligent</span></h2>
    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    `,
    },
    {
      direction: "left",
      content: `<h2>3rd Party<span> Integrations</span></h2>
    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
      <ul>
      <li> <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
        fillRule="nonzero"
      />
    </svg>Contrary to popular belief</li>
      <li> <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
        fillRule="nonzero"
      />
    </svg>There are many variations of passages</li>
      <li> <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z"
        fillRule="nonzero"
      />
    </svg>Many desktop publishing packages</li>
      </ul>
    `,
    },
    {
      direction: "right",
      content: `<h2>Free to <span>Explore</span></h2>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Accompanied by English versions from the 1914 translation by H. Rackham.</p>
<p>It is a long established fact that a reader will be distracted.</p>
`,
    },
  ];
  return (
    <Container>
      <Head>
        <title>Vizion - AI/ML - Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader
        title={"Features"}
        from="/"
        fromName="Home"
        toName="Features"
      />
      {data.map((item, index) => {
        return (
          <FeaturesSection
            content={item.content}
            direction={item.direction}
            key={`features-section-${index}`}
          />
        );
      })}
    </Container>
  );
};

export default Features;

const Container = styled.section``;
