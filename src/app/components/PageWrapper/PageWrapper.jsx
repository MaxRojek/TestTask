import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../routing/AppRoute.enum";
import globalStateContext from "../../../globalContext/globalContext";
import Navbar from "../Navbar/Navbar";
import { PageWrapperStyle } from "./PageWrapperStyle";

const PageWrapper = () => {
  const { isLoggedDispatcher } = useContext(globalStateContext);
  const [isLogged, setIsLogged] = isLoggedDispatcher;

  return (
    <PageWrapperStyle>
      <Navbar />
    </PageWrapperStyle>
  );
};
export default PageWrapper;
