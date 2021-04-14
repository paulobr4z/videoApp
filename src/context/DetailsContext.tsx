import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CountContextData {
  details: any;
  setDetails: any;
  randomNumber: any;
}

interface CountProviderProps {
  children: ReactNode;
}

export const CountContext = createContext({} as CountContextData);

export const CountProvider = ({ children }: CountProviderProps) => {
  const [details, setDetails] = useState();
  const [randomNumber] = useState(Math.floor(Math.random() * 20));

  return (
    <CountContext.Provider
      value={{
        details,
        setDetails,
        randomNumber,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}