import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const TeamCard = ({ image, hoverImage, name, position }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Container>
      <div
        className="team-card-image-wrp"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isHovering ? <Image src={hoverImage} /> : <Image src={image} />}
      </div>
      <div className="team-card-info-wrp">
        <h5>{name}</h5>
        <p>{position}</p>
      </div>
    </Container>
  );
};

export default TeamCard;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  .team-card-image-wrp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1em;
  }
  .team-card-info-wrp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      font-size: 1.25rem;
      display: inline;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
      margin-top: 0.75em;
    }
    p {
      font-size: 14px;
      line-height: 2em;
      color: #444;
      text-align: center;
    }
  }
`;
