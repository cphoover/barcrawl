import { useMyUser } from "./Providers/MyUserProvider";
import { useRouter } from "./Router";

const RedirectUnregistered = ({ children }) => {
  const { isCurrentPage, goto } = useRouter();
  // TODO local storage is not the way to do this...
  if (!isCurrentPage("register") && !localStorage.getItem("user")) {
    setTimeout(() => goto("register"), 0);
  }

  return children;
};

export default RedirectUnregistered;
