import React, { createContext, useContext, useState, useEffect } from "react";
import LeaderboardScreen from "./Screens/LeaderboardScreen";
import MainMapScreen from "./Screens/MainMapScreen";
import NotificationsScreen from "./Screens/NotificationsScreen";
import ObjectivesScreen from "./Screens/ObjectivesScreen";
import RecordGoalScreen from "./Screens/RecordGoalScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import PhotosScreen from "./Screens/PhotosScreen";
import SettingsScreen from "./Screens/SettingsScreen";

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
    window.location.hash = page;
  };

  // Function to render the component based on the current page
  const renderRoute = () => {
    switch (currentPage) {
      case "leaderboard":
        return <LeaderboardScreen />;
      case "map":
        return <MainMapScreen />;
      case "notifications":
        return <NotificationsScreen />;
      case "objectives":
        return <ObjectivesScreen />;
      case "record":
        return <RecordGoalScreen />;
      case "register":
        return <RegisterScreen />;
      case "photos":
        return <PhotosScreen />;
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
      {renderRoute()}
    </RouterContext.Provider>
  );
}

// Export the context for use in other components
export const useRouter = () => useContext(RouterContext);

export default Router;
