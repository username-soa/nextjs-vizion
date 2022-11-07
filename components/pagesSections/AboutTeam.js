import styled from "styled-components";
import Image from "next/image";
import img1 from "../../assets/team/team-1.jpg";
import img1hover from "../../assets/team/team-1hover.jpg";
import img2 from "../../assets/team/team-2.jpg";
import img2hover from "../../assets/team/team-2hover.jpg";
import img3 from "../../assets/team/team-3.jpg";
import img3hover from "../../assets/team/team-3hover.jpg";
import img4 from "../../assets/team/team-4.jpg";
import img4hover from "../../assets/team/team-4hover.jpg";
import TeamCard from "../CartElements/TeamCard";

const AboutTeam = () => {
  const data = [
    {
      image: img1,
      imageHover: img1hover,
      name: "Peter Deo",
      position: "CEO-Vizion",
    },
    {
      image: img2,
      imageHover: img2hover,
      name: "Rose Parker",
      position: "CEO-Vizion",
    },
    {
      image: img3,
      imageHover: img3hover,
      name: "Jackie White",
      position: "CEO-Vizion",
    },
    {
      image: img4,
      imageHover: img4hover,
      name: "Black John",
      position: "CEO-Vizion",
    },
    {
      image: img1,
      imageHover: img1hover,
      name: "Peter Deo",
      position: "CEO-Vizion",
    },
    {
      image: img2,
      imageHover: img2hover,
      name: "Rose Parker",
      position: "CEO-Vizion",
    },
    {
      image: img3,
      imageHover: img3hover,
      name: "Rose Doe",
      position: "CEO-Vizion",
    },
    {
      image: img4,
      imageHover: img4hover,
      name: "Black John",
      position: "CEO-Vizion",
    },
  ];
  return (
    <Container id="team">
      <div className="about-team-top">
        <h2>Our Team</h2>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
        </p>
      </div>
      <div className="about-team-content">
        {data.map((item, index) => {
          return (
            <TeamCard
              key={`team-card-${index}`}
              image={item.image}
              hoverImage={item.imageHover}
              name={item.name}
              position={item.position}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default AboutTeam;

const Container = styled.div`
  width: clamp(70%, 1140px, 90%);
  margin: 0 auto;
  padding: 4em 0;
  scroll-margin-top: 150px;
  .about-team-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 2px;
      position: relative;
      color: ${({ theme }) => theme.colors.primary};
      line-height: 2em;
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
  .about-team-content {
    padding: 2em 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(240px, 1fr));
    grid-gap: 2em 1em;
  }
  @media only screen and (max-width: 1400px) {
    padding: 4em;
    width: 100%;
    .about-team-top {
      h2 {
        font-size: 1.75rem;
      }
      p {
        font-size: 15px;
      }
    }
    .about-team-content {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 4em 2em;
    scroll-margin-top: 220px;
    .about-team-top {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;
