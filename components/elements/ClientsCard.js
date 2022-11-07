import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ClientsCard = ({ img, name }) => {
  return (
    <Container>
      <Link href="/">
        <>
          <Image alt="client-image" src={img} />
          <span className="client-name-span">{name}</span>
        </>
      </Link>
    </Container>
  );
};

export default ClientsCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.25em 2em;
  position: relative;
  transition: all 0.3s ease-in-out;
  margin: 0.5em;
  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  &:hover {
    .client-name-span {
      display: block;
    }
    cursor: pointer;
    transform: scale(1.03);
    background-color: #eee;
    border-radius: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .client-name-span {
    position: absolute;
    display: none;
    bottom: -2px;
    z-index: 999;
    padding: 0.5em;
    background-color: #222;
    color: #fff;
    font-size: 0.75rem;
    border-radius: 7px;
  }
  @media only screen and (max-width: 768px) {
    padding: 2em 1em;
  }
  @media only screen and (max-width: 500px) {
    padding: 1em 0.5em;
  }
`;
