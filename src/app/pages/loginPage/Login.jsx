import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { AppRoute } from "../../../routing/AppRoute.enum";
import globalStateContext from "../../../globalContext/globalContext";
import bridge from "../../assets/bridge.png";
import {
  LoginPageWrapper,
  LoginImageWrapper,
  LoginFormWrapper,
  ImageWrapper,
  FormWrapper,
  Button,
  AlertInfo,
} from "./LoginStyle";

export const Login = () => {
  const { isLoggedDispatcher, isMobileDispatcher } = useContext(
    globalStateContext
  );
  const [isLogged, setIsLogged] = isLoggedDispatcher;
  const [isMobile] = isMobileDispatcher;
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setErrorMessage(true);
    try {
      const response = await fetch(
        `https://join-tsh-api-staging.herokuapp.com/user/login`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        console.log(response);
        // isLogged(true);
        // localStorage.setItem("logged", "true");
      }

      //const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginPageWrapper>
      {isMobile ? (
        <></>
      ) : (
        <LoginImageWrapper>
          <ImageWrapper src={bridge} />
        </LoginImageWrapper>
      )}

      <LoginFormWrapper>
        <h6>join.tsh.io</h6>
        <FormWrapper>
          <h4>Login</h4>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={{ marginTop: "20px" }}>Username</Form.Label>
            <Form.Control
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <Form.Label style={{ marginTop: "20px" }}>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <Button onClick={handleLogin} primary>
              Log in
            </Button>
            <p style={{ marginTop: "10px" }}>
              <a href="">Forgot password?</a>
            </p>
            {errorMessage ? (
              <AlertInfo>
                <Alert variant="danger">Coś poszło nie tak</Alert>
              </AlertInfo>
            ) : (
              <></>
            )}
          </Form.Group>
        </FormWrapper>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};
