// import { Marker, Popup } from
import { Marker } from "react-map-gl";
import PersonMarker from "./PersonMarker.js";
import { useCompletions } from "./Providers/CompletionsProvider.js";


const CompletionMarkers = () => {
  const { completions } = useCompletions();

  return (
    <>
      {completions.map((completion) => {
        const playerColor = "#fff";
        return (
          <Marker
            key={completion.id}
            latitude={completion.latitude}
            longitude={completion.longitude}
          >
            {/* 
             Really we need to send a heartbeat or something...
             actually probably the best way is if we have an update on position in the last 2 minutes make it active...
             otherwise let's make it inactive
            */}

            {Boolean(completion.photo_small) ? (
              <PersonMarker
                photoUrl={completion.photo_small}
                color={playerColor}
                user={completion}
              />
            ) : (
              "💩"
            )}

            {/* <Popup>Another user is here</Popup> */}
          </Marker>
        );
      })}
    </>
  );
};
export default CompletionMarkers;
