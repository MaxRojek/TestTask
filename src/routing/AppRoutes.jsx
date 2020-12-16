import React, { useContext, useState, useEffect, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import globalStateContext, {
  GlobalStateContextProvider,
  globalStateContextProvider,
} from "../globalContext/globalContext";
import { Login } from "../app/pages/loginPage/Login";
import { Products } from "../app/pages/productsPage/Products";
import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  const GlobalValues = useContext(globalStateContext);
  const [isLogged, setIsLogged] = useState(true);
  const [isMobile, setIsMobile] = useState(Boolean);

  const updateIfMobile = () => {
    const ifMobile = window.innerWidth <= 768 ? true : false;

    setIsMobile(ifMobile);
  };

  useEffect(() => {
    updateIfMobile();
    window.addEventListener("resize", updateIfMobile);
    //console.log(isMobile);
  }, [isMobile]);

  return (
    <GlobalStateContextProvider
      value={{
        isLoggedDispatcher: [isLogged, setIsLogged],
        isMobileDispatcher: [isMobile, setIsMobile],
      }}
    >
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={AppRoute.home} exact component={Products} />
          <Route path={AppRoute.login} component={Login} />
          <Redirect to={AppRoute.home} />
        </Switch>
      </Suspense>
    </GlobalStateContextProvider>
  );
};
