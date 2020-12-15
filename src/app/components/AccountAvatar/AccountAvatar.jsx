import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../routing/AppRoute.enum";
import globalStateContext from "../../../globalContext/globalContext";
import avatar from "../../assets/avatar.png";
import { Button, Image, Dropdown } from "react-bootstrap";

const AccountAvatar = () => {
  const { isLoggedDispatcher, isMobileDispatcher } = useContext(
    globalStateContext
  );
  const [isLogged] = isLoggedDispatcher;
  const [isMobile] = isMobileDispatcher;

  return (
    <>
      {isLogged ? (
        <div>
          <Image style={{ width: "50px" }} src={avatar} roundedCircle />
        </div>
      ) : (
        <Link to={AppRoute.login}>
          <Button
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
            variant="outline-primary"
          >
            Log in
          </Button>
        </Link>
      )}
    </>
  );
};
export default AccountAvatar;
