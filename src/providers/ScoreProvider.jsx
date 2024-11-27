import React, { createContext, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state

// Create the context
const ScoreProviderContext = createContext();

// Hook to use the context
export const useScore = () => {
  const context = useContext(ScoreProviderContext);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
};

// ScoreProvider component
export const ScoreProvider = ({ children }) => {
  const [scoreCount, setScoreCount] = useState(0);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  // Access the JWT from Redux
  const jwt = useSelector((state) => state.auth.jwt);

  const fetchScoreCount = async () => {
    if (!jwt) {
      setError("JWT is missing");
      setStatus("failed");
      return;
    }

    try {
      setStatus("loading");

      const response = await fetch(
        `${process.env.REACT_APP_REST_API}/motherbase/get`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch motherbase");
      }

      const data = await response.json();
      setScoreCount(data.motherbase.gmp_count);
      setStatus("succeeded");
    } catch (err) {
      setError(err.message);
      setStatus("failed");
    }
  };

  useEffect(() => {
    fetchScoreCount();
  }, [jwt]); // Refetch when JWT changes

  return (
    <ScoreProviderContext.Provider
      value={{ scoreCount, status, error, refetch: fetchScoreCount }}
    >
      {children}
    </ScoreProviderContext.Provider>
  );
};
