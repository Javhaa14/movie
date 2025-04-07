"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Create the context
const ModeContext = createContext<any>(null);

// ModeProvider component
export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<boolean | null>(null); // Set initial state to `null`
  
  // Use useEffect to run client-side code after the component mounts
  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    setMode(currentMode === "false" ? false : true); // Initialize mode state based on localStorage
  }, []); // Empty dependency array ensures it runs only once after the component mounts

  const toggleMode = () => {
    if (mode !== null) {
      const newMode = !mode;
      localStorage.setItem("mode", `${newMode}`);
      setMode(newMode);
    }
  };

  if (mode === null) {
    return null; // Or you can return a loading spinner here if you prefer
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

// Custom hook to use mode context
export const useMode = () => useContext(ModeContext);
