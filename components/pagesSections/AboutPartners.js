import styled from "styled-components";
import ClientsCard from "../elements/ClientsCard";
import img1 from "../../assets/clients/clients-img1.png";
import img2 from "../../assets/clients/clients-img2.png";
import img3 from "../../assets/clients/clients-img3.png";
import img4 from "../../assets/clients/clients-img4.png";
import img5 from "../../assets/clients/clients-img5.png";
import img6 from "../../assets/clients/clients-img6.png";

const AboutPartners = () => {
  const data = [
    { img: img1, name: "HTML" },
    { img: img2, name: "Wordpress" },
    { img: img3, name: "Shopify" },
    { img: img4, name: "CSS" },
    { img: img5, name: "JQuery" },
    { img: img6, name: "BootStrap" },
    { img: img1, name: "HTML" },
    { img: img2, name: "Wordpress" },
  ];

  return (
    <Container id="partners">
      <div className="about-partners-top">
        <h2>
          Meet Our <span>Partners</span>
        </h2>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
        </p>
      </div>
      <div className="about-partners-content">
        {data?.map((item, index) => {
          return (
            <ClientsCard
              key={`about-clients-${index}`}
              img={item?.img}
              name={item?.name}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default AboutPartners;

const Container = styled.div`
  width: clamp(70%, 1140px, 90%);
  margin: 0 auto;
  padding: 4em 0;
  scroll-margin-top: 150px;
  .about-partners-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 2px;
      position: relative;
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 2em;
      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    p {
      font-size: 16px;
      line-height: 2em;
      color: #444;
      margin: 2em 0;
      text-align: center;
      line-height: 2em;
      opacity: 0.9;
    }
  }
  .about-partners-content {
    padding: 2em 0;
    display: grid;
    grid-template-columns: repeat(6, minmax(150px, 1fr));
    grid-gap: 1em;
  }
  @media only screen and (max-width: 1400px) {
    padding: 4em;
    width: 100%;
    .about-partners-top {
      h2 {
        font-size: 1.75rem;
      }
      p {
        font-size: 15px;
      }
    }
    .about-partners-content {
      grid-template-columns: repeat(4, minmax(150px, 1fr));
    }
  }
  @media only screen and (max-width: 1000px) {
    .about-partners-content {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 4em 2em;
    scroll-margin-top: 220px;
    .about-partners-top {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;
