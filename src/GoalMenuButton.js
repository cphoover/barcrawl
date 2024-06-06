import styled from "styled-components";
import StarIcon from "./icons/star";

const ButtonCircle = styled.div`
  width: 67px;
  height: 67px;
  border-radius: 50%;
  background: #5856d6;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 12px 8px rgba(0, 0, 0, 0.26);
  border-radius: 50%;
  // border: 4px solid rgba(255,255,255,.5);
  border: 5px solid rgba(255, 255, 255, 0.5);
  ${(props) =>
    props.isMap &&
    `  bottom: 160px;
    right: 10px;
    position: absolute;`}

  & svg {
    fill: white;

    z-index: 2;
  }
`;

const ButtonCircleShadow = styled.div`
  right: 0;
  bottom: 0;
  width: 63px;
  height: 63px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: absolute;
`;
const GoalMenuButton = ({ onClick, isMap = true }) => {
  return (
    <ButtonCircle isMap={isMap} onClick={onClick} className="goal-button">
      <ButtonCircleShadow> </ButtonCircleShadow>
      <StarIcon />
    </ButtonCircle>
  );
};

export default GoalMenuButton;
