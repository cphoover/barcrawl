import React, { useEffect, useState } from "react";
import MainMapScreen from "./Screens/MainMapScreen";
import Register from "./Screens/RegisterScreen";
import Notifications from "./Screens/NotificationsScreen";
import { supabase } from "./db";
import LeaderboardScreen from "./Screens/LeaderboardScreen";
import ObjectivesScreen from "./Screens/ObjectivesScreen";
import BottomTabMenu from "./BottomTabMenu";
import Router from "./Router";
import { LocationProvider } from "./Providers/LocationProvider";
import { OnlineUsersProvider } from "./Providers/OnlineUsersProvider";
import { OtherUsersProvider } from "./Providers/OtherUsersProvider";
import { MapFiltersProvider } from "./Providers/MapFiltersProvider";
import { MyUserProvider } from "./Providers/MyUserProvider";
import { CompletionsProvider } from "./Providers/CompletionsProvider";

const App = () => {
  const [user, setUser] = useState(null); // State to hold user data

  // useEffect(() => {
  //   checkUser();
  // }, []);

  // const checkUser = async () => {
  //   const session = supabase.auth.session();  // Check if there's an existing session
  //   setUser(session?.user ?? null);
  // };

  const handleRegistration = (userData) => {
    setUser(userData); // Set user data upon registration
  };

  // return <ObjectivesScreen />;
  // return <Notifications />;

  // return <LeaderboardScreen />;

  // if (!user) {
  // If no user data, show the registration form
  // return <Register onRegistered={handleRegistration} />;
  // }

  // If user is registered, show the map
  return <MainMapScreen />;
};

const AppWrapper = ({ children }) => (
  <>
    <MyUserProvider>
      <MapFiltersProvider>
        <CompletionsProvider>
          <OtherUsersProvider>
            <OnlineUsersProvider>
              <LocationProvider>
                <Router />
              </LocationProvider>
            </OnlineUsersProvider>
          </OtherUsersProvider>
        </CompletionsProvider>
      </MapFiltersProvider>
    </MyUserProvider>
  </>
);

export default AppWrapper;
