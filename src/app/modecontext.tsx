"use client";  // <-- This marks the file as a client-side component

import React, { createContext, useContext, useState, ReactNode } from "react";

const ModeContext = createContext<any>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState(true);

  const toggleMode = () => setMode(!mode);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export const useMode = () => useContext(ModeContext);
