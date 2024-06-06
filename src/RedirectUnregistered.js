import { useEffect } from "react";
import { useMyUser } from "./Providers/MyUserProvider";
import { useRouter } from "./Router";

const RedirectUnregistered = ({ children }) => {
  const { isCurrentPage, goto } = useRouter();
  const { myDetails, userLoaded } = useMyUser();
  console.log("myDetails", myDetails);
  // TODO local storage is not the way to do this...

  useEffect(() => {
    console.log("goto", {
      userLoaded,
      myDetails,
      registered: myDetails?.registered,
    });
    if (userLoaded && !myDetails?.registered) {
      setTimeout(() => goto("register"), 0);
    }
  }, [userLoaded, myDetails, goto]);

  return children;
};

export default RedirectUnregistered;
