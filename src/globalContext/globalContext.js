import React, { createContext } from "react";

export const GlobalContextValues = {
  creator: "Marcin Rojek",
  theme: "light",
  primaryColor: "#2140E8",
  secondaryColor: "#9194A5",
  apiUrl: "https://join-tsh-api-staging.herokuapp.com",
};

const globalStateContext = React.createContext(GlobalContextValues);
export const GlobalStateContextProvider = globalStateContext.Provider;
export default globalStateContext;
