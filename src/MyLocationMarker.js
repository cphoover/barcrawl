// import { Marker, Popup, useMap } from "react-leaflet";
import Marker from "./CustomMarker";
import BlinkMarker from "./BlinkMarker.js";
import { useLocation } from "./Providers/LocationProvider";

const MyLocationMarker = () => {
  const position = useLocation();

  return position ? (
    <>
      <Marker
        latitude={position[0]}
        longitude={position[1]}
        layerOrder={99}
        icon={<BlinkMarker />}
      />

      {/* Source and Layer for Type 2 markers */}
    </>
  ) : null;
};
export default MyLocationMarker;
