import styled from "styled-components";

const MapMarkerWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const MarkerPhoto = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  // z-index: 2;
  border-radius: 50%;
  border: 2px solid white;
 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

// const MarkerPoint = styled.div`
//   position: absolute;
//   bottom: -12px;
//   left: calc(50% + 2px);
//   transform: translateX(-50%);
//   width: 0;
//   height: 0;
//   z-index: 2;
//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-top: 10px solid white;
// `;

const PersonMarker = ({ photoUrl }) => (
  <MapMarkerWrapper>
    <MarkerPhoto src={photoUrl} alt="Friend's Photo" />
    {/* <MarkerPoint /> */}
  </MapMarkerWrapper>
);

export default PersonMarker;
