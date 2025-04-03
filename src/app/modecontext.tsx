"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

const ModeContext = createContext<any>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const currentMode = localStorage.getItem("mode");
  const [mode, setMode] = useState(currentMode === "false" ? false : true);
  const toggleMode = () => {
    localStorage.setItem("mode", `${!mode}`);
    setMode(!mode);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export const useMode = () => useContext(ModeContext);
