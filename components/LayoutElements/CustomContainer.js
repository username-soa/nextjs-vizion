import styled from "styled-components";

const CustomContainer = ({ children, padding, margin }) => {
  return (
    <Container padding={padding} margin={margin}>
      {children}
    </Container>
  );
};

export default CustomContainer;

const Container = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "3em 150px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  @media only screen and (max-width: 1200px) {
    padding: 2em;
  }
`;
