import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.75);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  // width: 15px; /* Adjust according to the size of Dot */
  // height: 15px; /* Adjust according to the size of Dot */
`;

const Dot = styled.div`
  // z-index: 1;
  position: absolute;
  background: #1da1f2;
  border-radius: 50%;
  border: 2px solid #fff;
  width: 15px;
  height: 15px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  will-change: transform, opacity;
    &::after {
    pointer-events: none;
    opacity: 0.5;
    border-radius: 50%;
    background: #1da1f230;
    box-shadow: inset 0 0 0 1px #1da1f2;
    content: "";
    height: 200px;
    width: 200px;
    // z-index: -1;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    will-change: transform, opacity;
  }
`;

const Blinking = styled.div`
  animation: ${blink} 2s infinite ease-out;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px #1da1f2;
  background: #1da1f2;
  // z-index: 0;
  height: 20px;
  width: 20px;
  position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  transform-origin: center;
  will-change: transform, opacity;
`;

export default function BlinkMarker() {
  return (
    <Wrapper className="blink-marker">
      <Blinking />
      <Dot />
    </Wrapper>
  );
}
