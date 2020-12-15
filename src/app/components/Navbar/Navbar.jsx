import React, { useContext, useEffect, useState } from "react";

import AccountAvatar from "../AccountAvatar/AccountAvatar";
import globalStateContext from "../../../globalContext/globalContext";
import {
  NavbarWrapper,
  InputWrapper,
  LoginWrapper,
  NavbarTitle,
  NavLeftWrapper,
  NavRightWrapper,
  CheckboxWrapper,
  NavTopWrapper,
} from "./NavbarStyle";
import { InputGroup, FormControl, Form, Nav } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const PageWrapper = (props) => {
  const { isLoggedDispatcher, isMobileDispatcher } = useContext(
    globalStateContext
  );
  const [isLogged, setIsLogged] = isLoggedDispatcher;
  const [isMobile] = isMobileDispatcher;
  const [searchName, setSearchName] = useState("");
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);

  const hanldeFilterActive = () => {
    setActive(!active);
    props.active(!active);
  };
  const handleFilterPromo = () => {
    setPromo(!promo);
    props.promo(!promo);
  };

  return (
    <NavbarWrapper>
      <NavLeftWrapper>
        <NavTopWrapper>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>join.tsh.io</div>
          {isMobile ? (
            <LoginWrapper>
              <AccountAvatar />
            </LoginWrapper>
          ) : (
            <></>
          )}
        </NavTopWrapper>
        <InputWrapper>
          <InputGroup>
            <FormControl
              style={{ borderRight: "none" }}
              placeholder="Search"
              aria-describedby="basic-addon2"
              onChange={(e) => props.searchName(e.target.value)}
              onKeyUp={props.searchOnclick}
            />
            <InputGroup.Append>
              <InputGroup.Text
                style={{
                  backgroundColor: "white",
                  borderLeft: "none",
                  cursor: "pointer",
                }}
                id="basic-addon1"
                onClick={props.searchOnclick}
              >
                <Search color="black" size={15} />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </InputWrapper>
        <CheckboxWrapper>
          <Form.Check onChange={hanldeFilterActive} inline label="Active" />
          <Form.Check onChange={handleFilterPromo} inline label="Promo" />
        </CheckboxWrapper>
      </NavLeftWrapper>

      {isMobile ? (
        <></>
      ) : (
        <NavRightWrapper>
          <AccountAvatar />
        </NavRightWrapper>
      )}
    </NavbarWrapper>
  );
};
export default PageWrapper;
