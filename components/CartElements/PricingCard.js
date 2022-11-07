import styled from "styled-components";
import Button from "../elements/Button";

const PricingCard = ({ name, price, features, handleClick, isMain }) => {
  return (
    <Container isMain={isMain}>
      <h4 className="pricing-h4">{name}</h4>
      <p className="pricing-p">Starter package plan</p>
      <p className="price-p">
        ${price}
        <span className="sub-text">/mo</span>
      </p>
      {features?.map((item, index) => {
        return (
          <div key={`pricing-feature-${index}`} className="pricing-feature-div">
            <p>{item}</p>
            <div className="exists-dot"></div>
          </div>
        );
      })}
      <div className="pricing-btn-wrp">
        {" "}
        <Button
          handleClick={handleClick}
          title={name === "free" ? "Get Started" : "Start 14-day Trial"}
          type="button"
          bg={isMain ? "#f9f9f9" : "#000"}
          color={isMain ? "#000" : "#fff"}
          border={"transparent"}
          radius="10px"
          margin=".5em"
        />
      </div>
    </Container>
  );
};

export default PricingCard;

const Container = styled.div`
  padding: 1.5em;
  border-radius: 15px;
  background: ${({ theme, isMain }) =>
    isMain ? theme.colors.gradientBG : "#f9f9f9"};
  flex-grow: 1;
  color: ${({ theme, isMain }) => (isMain ? "#fff" : theme.colors.textColor)};
  transform: ${(props) => (props.isMain ? "scale(1.05)" : "")};
  border: ${(props) => (props.isMain ? "3px solid #640178" : "")};
  .pricing-feature-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6em 0.25em;
    p {
      font-size: 12px;
      font-weight: 500;
    }
  }
  .exists-dot {
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: lightgreen;
  }
  .pricing-h4 {
    line-height: 1.5;
    text-align: left;
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .pricing-p {
    font-size: 0.8rem;
    margin-bottom: 0.25em;
    line-height: 1.5;
    font-weight: 500;
  }
  .price-p {
    padding: 0.5em 0;
    font-size: 1.75rem;
    line-height: 1.5;
    border-bottom: 1px solid #ddd;
    margin-bottom: 0.5em;
    .sub-text {
      font-size: 12px;
      margin-left: 1px;
    }
  }
  .pricing-btn-wrp {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
  }
  @media only screen and (max-width: 1000px) {
    transform: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 1.5em 1em;
  }
`;
