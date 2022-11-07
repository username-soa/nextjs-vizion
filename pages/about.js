import Head from "next/head";
import styled from "styled-components";
import PageHeader from "../components/elements/PageHeader";
import AboutNav from "../components/elements/AboutNav";
import AboutValues from "../components/pagesSections/AboutValues";
import AboutTeam from "../components/pagesSections/AboutTeam";
import AboutPartners from "../components/pagesSections/AboutPartners";

const about = () => {
  return (
    <Container>
      <Head>
        <title>Vizion - AI/ML - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title={"About Us"} toName="About Us" />
      <AboutNav />
      <AboutValues />
      <AboutTeam />
      <AboutPartners />
    </Container>
  );
};

export default about;

const Container = styled.div``;
