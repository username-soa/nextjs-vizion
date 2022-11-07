import { ThemeProvider } from "styled-components";
import Layout from "../layouts/DefaultLayout";
import "../styles/globals.css";

const theme = {
  colors: {
    primary: "#640178",
    textColor: "#343a40",
    scrollbarBG: "#1b1b1b",
    scrollbarColor: "#393d46",
    gradientBG: `linear-gradient(
      to right,
      rgb(167, 51, 187) 0%,
      rgb(125, 74, 199) 100%
    )`,
    footerBG: "#f3efef",
    textColor: "#444",
  },
};

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
