import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../routing/AppRoute.enum";
import globalStateContext from "../../../globalContext/globalContext";
import avatar from "../../assets/avatar.png";
import { Button, Image } from "react-bootstrap";
import DropDown from "../DropDown/DropDown";
import { DropDownItem } from "../DropDown/DropDownStyle";
const AccountAvatar = () => {
  const { isLoggedDispatcher, isMobileDispatcher } = useContext(
    globalStateContext
  );
  const [isLogged, setIsLogged] = isLoggedDispatcher;
  const [isMobile] = isMobileDispatcher;

  return (
    <>
      {isLogged ? (
        <div>
          <DropDown
            title={
              <Image
                style={{ width: "50px", cursor: "pointer" }}
                src={avatar}
                roundedCircle
              />
            }
            content={
              <DropDownItem onClick={() => setIsLogged(false)}>
                Logout
              </DropDownItem>
            }
          />
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
