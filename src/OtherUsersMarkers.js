import { debug, isRecentUpdate } from "./utils.js";
// import { Marker, Popup } from
import { Marker } from "react-map-gl";
import PersonMarker from "./PersonMarker";
import PersonAvatar from "./PersonAvatar";
import { useOnlineUsers } from "./Providers/OnlineUsersProvider.js";
import randomColor from "randomcolor";
import { useOtherUsers } from "./Providers/OtherUsersProvider";

// const getPastelColor = memoize((userId) => {
//   return (
//     "hsl(" +
//     360 * Math.random() +
//     "," +
//     (25 + 70 * Math.random()) +
//     "%," +
//     (85 + 10 * Math.random()) +
//     "%)"
//   );
// });

const userColors = new Map();
const getPastelColor = (userId) => {
  if (userColors.has(userId)) {
    return userColors.get(userId);
  } else {
    const color = randomColor({
      luminosity: "light",
    });
    userColors.set(userId, color);
    return color;
  }
};

const OtherUsersMarkers = () => {
  const onlineUsers = useOnlineUsers();
  const { otherUsersPositions, UserHelpers } = useOtherUsers();
  debug("otherUsers", otherUsersPositions);

  return (
    <>
      {otherUsersPositions.map((userPosition) => {
        const playerColor = getPastelColor(userPosition.user_id);
        return (
          <Marker
            key={userPosition.user_id}
            latitude={userPosition.latitude}
            longitude={userPosition.longitude}
          >
            {/* 
             Really we need to send a heartbeat or something...
             actually probably the best way is if we have an update on position in the last 2 minutes make it active...
             otherwise let's make it inactive
            */}
            {onlineUsers.has(userPosition.user_id) ||
            isRecentUpdate(userPosition) ? (
              <PersonAvatar
                photoUrl={UserHelpers.getSmallAvatar(userPosition.user_id)}
                color={playerColor}
                user={userPosition}
              />
            ) : (
              <PersonMarker
                photoUrl={UserHelpers.getSmallAvatar(userPosition.user_id)}
                color={playerColor}
                user={userPosition}
              />
            )}

            {/* <Popup>Another user is here</Popup> */}
          </Marker>
        );
      })}
    </>
  );
};
export default OtherUsersMarkers;
