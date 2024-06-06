import styled from "styled-components";
import { formatLastUpdatedTime } from "./utils";

const MapMarkerWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 40px;
`;

const MarkerPhoto = styled.img`
  width: 100%;
  // height: 100%;
  position: relative;
  // z-index: 2;
  // border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid white;
  border: ${(props) => props.color} solid 2px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

const TimeBubble = styled.div`
  font-weight: bold;
  // background: white;
  background: ${(props) => props.color};
  display: block;
  // font-family: "Montserrat";
  // padding: 5px;
  text-align: center;
  width: 50px;
  // border-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative; /* Needed for absolute positioning of the arrow */
  margin-top: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  // &::after {
  //   content: "";
  //   position: absolute;
  //   bottom: -9px; /* Adjusts the position of the arrow below the bubble */
  //   left: 50%; /* Centers the arrow */
  //   width: 0;
  //   height: 0;
  //   border-style: solid;
  //   // box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  //   border-width: 10px 10px 0 10px; /* Creates the triangle */
  //   border-color: white transparent transparent transparent; /* Only the top border is colored */
  //   border-color: ${(props) =>
    props.color} transparent transparent transparent; /* Only the top border is colored */
  //   transform: translateX(-50%); /* Ensures the arrow is perfectly centered */
  // }
`;


// const formatLastUpdatedTime = (data) => {
//   const timestamp = data.updated_at || data.created_at;
//   const date = new Date(timestamp);
//   let hours = date.getUTCHours(); // Get hours in UTC
//   let minutes = date.getUTCMinutes(); // Get minutes in UTC
//   let period = "am";

//   if (hours >= 12) {
//     period = "pm";
//     if (hours > 12) hours -= 12; // Correctly adjust hours greater than 12
//     if (hours === 0) hours = 12; // Adjust for midnight
//   }

//   if (hours === 0) hours = 12; // Adjust for noon

//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }

//   return `${hours}:${minutes}${period}`;
// };
const PersonMarker = ({ photoUrl, color, user }) => (
  <>
    <MapMarkerWrapper>
      <MarkerPhoto src={photoUrl} color={color} alt="Friend's Photo" />
      {/* <MarkerPoint /> */}
    </MapMarkerWrapper>
    <TimeBubble color={color}>{formatLastUpdatedTime(user)}</TimeBubble>
  </>
);

export default PersonMarker;
