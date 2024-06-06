import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { supabase } from "../db";
import { objectivesMap } from "../objectives";
import { debug, getUserId } from "../utils";

// Create context
const CompletionsContext = createContext();

export const CompletionsProvider = ({ children }) => {
  const [completions, setCompletions] = useState([]);
  const myID = getUserId();
  const [lastVisited, setLastVisited] = useState(() =>
    localStorage.getItem("lastVisitedNotifications")
  );

  const [lastFetchTime, setLastFetchTime] = useState(() =>
    new Date().toISOString()
  );

  const updateLastVisited = () => {
    const now = new Date().toISOString();
    localStorage.setItem("lastVisitedNotifications", now);
    setLastVisited(now);
  };

  const fetchCompletions = useCallback(
    async (onlyNew) => {
      debug("fetchCompletions async");
      const { data, error } = await (onlyNew
        ? supabase
            .from("completions")
            .select(
              `
        *,
        user:user_id (username, avatar_small)
      `
            )
            .gt("created_at", lastFetchTime)
        : supabase.from("completions").select(
            `*,
        user:user_id (username, avatar_small)
      `
          ));

     

      if (error) {
        console.error("Error fetching completions", error);
      } else {
        setCompletions((prevCompletions) => {
          return onlyNew
            ? [
                ...prevCompletions,
                ...data.filter(
                  (d) =>
                    !prevCompletions.some(
                      (prevCompletion) => prevCompletion.id === d.id
                    )
                ),
              ]
            : data;
        });
        setLastFetchTime(new Date().toISOString());
      }
    },
    [setCompletions, setLastFetchTime, lastFetchTime]
  );

  useEffect(() => {
    fetchCompletions();
  }, [fetchCompletions]);

  useEffect(() => {
    // Subscribe to real-time updates using visibility API
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchCompletions();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("completions")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "completions" },
        () => {
          fetchCompletions(true);
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [fetchCompletions, lastVisited]);

  const unreadCountValue = completions.filter(
    (completion) => lastVisited === null || completion.created_at > lastVisited
  ).length;

  const userScores = useMemo(() => {
    const avatarMap = new Map(
      completions.map((completion) => [
        completion.user_id,
        completion.user.avatar_small,
      ])
    );

    const completionUserMap = new Map(
      completions.map((completion) => [
        completion.user_id,
        completion.user.username,
      ])
    );

    debug("completions", { completions });
    const groupedScores = completions.reduce((acc, completion) => {
      const userId = completion.user_id;
      debug("group userId", { completion, userId });
      const score = objectivesMap[completion.completion_id]?.points || 0;

      if (userId in acc) {
        acc[userId] += score;
      } else {
        acc[userId] = score;
      }
      return acc;
    }, {});

    debug("groupedScores", {
      groupedScores,
      completionUserMap,
      completions,
    });

    return Object.entries(groupedScores)
      .map(([userId, scores]) => ({
        userId,
        scores,
        username: completionUserMap.get(userId),
        avatarSmall: avatarMap.get(userId),
      }))
      .sort((a, b) => b.scores - a.scores);
  }, [completions]);

  const completedObjectives = useMemo(() => {
    return new Set(
      completions
        .filter((c) => c.user_id === myID)
        .map((completion) => completion.completion_id)
    );
  }, [completions, myID]);

  console.log("completedObjectives", {
    completedObjectives,
    myID,
    completions,
  });

  debug("unreadCountValue", {
    unreadCountValue,
    completions,
    lastVisited,
  });

  console.log("completions", {
    completions,
  });
  return (
    <CompletionsContext.Provider
      value={{
        completions,
        updateLastVisited,
        unreadCountValue,
        userScores,
        completedObjectives,
      }}
    >
      {children}
    </CompletionsContext.Provider>
  );
};

// Custom hook to use the completions
export const useCompletions = () => {
  return useContext(CompletionsContext);
};
