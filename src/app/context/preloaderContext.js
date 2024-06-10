"use client";

import { useState } from "react";
import { createContext } from "react";

export const preloaderContext = createContext({});
const PreloaderContextProvider = ({ children }) => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <preloaderContext.Provider
      value={{ preloaderComplete, setPreloaderComplete }}
    >
      {children}
    </preloaderContext.Provider>
  );
};

export default PreloaderContextProvider;
