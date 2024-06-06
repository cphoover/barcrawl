import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import LeaderboardScreen from "./Screens/LeaderboardScreen";
import MainMapScreen from "./Screens/MainMapScreen";
// import MainMapScreen from "./Screens/MainMapScreenUseReactMarkers";
import NotificationsScreen from "./Screens/NotificationsScreen";
import ObjectivesScreen from "./Screens/ObjectivesScreen";
import RecordGoalScreen from "./Screens/RecordGoalScreen";
import RegisterScreen from "./Screens/RegisterScreen";

import SettingsScreen from "./Screens/SettingsScreen";
import RedirectUnregistered from "./RedirectUnregistered";
import { MapFiltersProvider } from "./Providers/MapFiltersProvider";
import { OtherUsersProvider } from "./Providers/OtherUsersProvider";
import { OnlineUsersProvider } from "./Providers/OnlineUsersProvider";
import { LocationProvider } from "./Providers/LocationProvider";
import { lazy } from "react";
import LogItScreen from "./Screens/LogItScreen";

const PhotosScreen = lazy(() => import("./Screens/PhotosScreen"));

// Create a context
const RouterContext = createContext();

function Router() {
  const [currentPage, setCurrentPage] = useState(
    window.location.hash.substr(1) || "map"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.substr(1));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Function to check if the current page is the page in question
  const isCurrentPage = (page) => currentPage === page;

  // Function to navigate to a different page
  const goto = (page) => {
    // scroll to top of the page

    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  // Function to render the component based on the current page
  const renderRoute = () => {
    switch (currentPage) {
      case "register":
        return <RegisterScreen />;
      case "leaderboard":
        return <LeaderboardScreen />;
      case "map":
        return <MainMapScreen />;
      case "log-it":
        return <LogItScreen />;
      case "notifications":
        return <NotificationsScreen />;
      case "objectives":
        return <ObjectivesScreen />;
      case "record":
        return <RecordGoalScreen />;
      case "photos":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <PhotosScreen />
          </Suspense>
        );
      case "settings":
        return <SettingsScreen />;
      default:
        return <MainMapScreen />; // Default route or add a NotFound screen if preferred
    }
  };

  const contextValue = {
    currentPage,
    isCurrentPage,
    goto,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      <RedirectUnregistered>{renderRoute()}</RedirectUnregistered>
    </RouterContext.Provider>
  );
}

const ProvidersHOC = ({ children }) => (
  <MapFiltersProvider>
    <OtherUsersProvider>
      <OnlineUsersProvider>
        <LocationProvider>{children}</LocationProvider>
      </OnlineUsersProvider>
    </OtherUsersProvider>
  </MapFiltersProvider>
);

// Export the context for use in other components
export const useRouter = () => useContext(RouterContext);

export default Router;
