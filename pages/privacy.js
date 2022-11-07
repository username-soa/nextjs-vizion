import Head from "next/head";
import styled from "styled-components";
import PageHeader from "../components/elements/PageHeader";

const Privacy = () => {
  return (
    <Container>
      <Head>
        <title>Vizion - AI/ML - Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader title={"Privacy Policy"} toName="Privacy Policy" />
      <div className="privacy-container">
        <div className="privacy-row">
          <h4 className="privacy-h4">Terms of Use - Vizion Installment</h4>
          <p className="privacy-p">
            Nulla enim justo, elementum iaculis commodo et, feugiat fermentum
            quam. In quis lorem tempor, porta nunc a, malesuada dui. Integer
            venenatis leo sit amet mi tincidunt, sit amet pharetra mauris
            efficitur. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent vestibulum eros
            vitae magna iaculis.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">General</h4>
          <p className="privacy-p">
            Suspendisse eu neque sit amet mi fermentum viverra. Nullam venenatis
            feugiat odio nec tincidunt. Suspendisse molestie ipsum ac molestie
            maximus.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">Permitted Use and Restrictions</h4>
          <p className="privacy-p">
            Sed id tellus orci. Donec congue tellus dignissim molestie
            fermentum. Duis cursus in mi id cursus. Sed egestas mi quis semper
            feugiat. Donec laoreet porta velit. Duis eros orci, lacinia a mollis
            quis, vestibulum ut elit. Sed vitae justo sapien. Duis ultricies
            ante non tortor sollicitudin, vel mattis lacus venenatis. Nam non
            tincidunt mauris, a tincidunt diam. Sed pulvinar lorem pellentesque
            faucibus ornare. Donec eu dui urna. Cras porta porta enim, nec
            congue tellus hendrerit vitae. Fusce rhoncus vel lorem.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">Your Access to the Site</h4>
          <p className="privacy-p">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">Accounts & Passwords</h4>
          <p className="privacy-p">
            Nunc quam dui, aliquam ut lacus non, congue rutrum tortor. Maecenas
            mi quam, lacinia sed tortor nec, cursus accumsan lorem. Pellentesque
            a quam non nibh tincidunt congue.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">Security</h4>
          <p className="privacy-p">
            Phasellus semper malesuada arcu a posuere. Vestibulum tortor nisi,
            pellentesque eget nibh tristique, scelerisque bibendum ex. Integer
            malesuada bibendum ante ut molestie. Praesent sed ex laoreet, cursus
            justo vel, sodales quam. Nam a odio eu ex pulvinar euismod.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">Unauthorized Use of the Site</h4>
          <p className="privacy-p">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">No Financial Advice Provided</h4>
          <p className="privacy-p">
            Fusce rutrum mauris eros, at iaculis orci vestibulum non. Morbi sit
            amet blandit tortor. Integer quis nisi eu augue maximus tincidunt ut
            vel enim. Ut malesuada massa nec sollicitudin dapibus.
          </p>
        </div>
        <div className="privacy-row">
          <h4 className="privacy-h4">Cookies</h4>
          <p className="privacy-p">
            Vestibulum laoreet vehicula eros, et rutrum purus auctor et.
            Praesent rutrum erat ut nisi hendrerit, vitae dapibus mi blandit.
            Fusce eu ultricies tortor. Integer sed finibus nulla, nec iaculis
            ex. Suspendisse lacinia magna sit amet turpis rhoncus, a accumsan ex
            porttitor. Donec at quam vitae enim maximus accumsan. Curabitur nec
            posuere turpis. Curabitur a metus gravida, fermentum nisi id,
            rhoncus nulla. Pellentesque at erat sed nibh tempus mollis. Quisque
            tempor viverra erat, quis semper orci imperdiet a. Sed eu laoreet
            lacus, eget bibendum dolor. Praesent luctus justo non molestie
            rutrum.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Privacy;

const Container = styled.div`
  .privacy-container {
    width: clamp(70%, 1140px, 90%);
    margin: 0 auto;
  }
  .privacy-row {
    margin: 2em 0;
  }
  .privacy-h4 {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.5rem;
    margin: 0.2em 0;
  }
  .privacy-p {
    font-size: 16px;
    line-height: 2em;
    color: #444;
    margin: 1em 0;
    text-align: left;
    line-height: 2em;
    opacity: 0.8;
  }
  @media only screen and (max-width: 1400px) {
    .privacy-container {
      padding: 4em;
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .privacy-container {
      padding: 2em;
    }
    .privacy-h4 {
      font-size: 1.25rem;
    }
    .privacy-p {
      font-size: 14px;
    }
  }
`;
