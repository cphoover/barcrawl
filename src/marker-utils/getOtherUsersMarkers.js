// import { Marker, Popup } from
import PersonMarker from "../PersonMarker";
import PersonAvatar from "../PersonAvatar";
import randomColor from "randomcolor";

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

const getOtherUsersMarkers = ({ onlineUsers, otherUsers }) => {
  return otherUsers.map((user, idx) => {
    const playerColor = getPastelColor(user.user_id);
    return {
      user,
      idx,
      marker: (
        <>
          {onlineUsers.has(user.user_id) ? (
            <PersonAvatar
              photoUrl={
                user.photoUrl || "https://picsum.photos/200?" + Math.random()
              }
              color={playerColor}
              user={user}
            />
          ) : (
            <PersonMarker
              photoUrl={
                user.photoUrl || "https://picsum.photos/200?" + Math.random()
              }
              color={playerColor}
              user={user}
            />
          )}
        </>
      ),
    };
  });
};
export default getOtherUsersMarkers;
