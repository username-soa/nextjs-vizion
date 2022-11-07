import Head from "next/head";
import styled from "styled-components";
import HomeClients from "../components/pagesSections/HomeClients";
import HomeAbout from "../components/pagesSections/HomeAbout";
import HomeStories from "../components/pagesSections/HomeStories";
import HeroSection from "../components/pagesSections/HeroSection";
import HomeFeatures from "../components/pagesSections/HomeFeatures";
import HomeWorks from "../components/pagesSections/HomeWorks";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vizion - AI/ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <HomeFeatures />
      <HomeWorks />
      <HomeAbout />
      <HomeStories />
      <HomeClients />
    </Container>
  );
}

const Container = styled.div``;
