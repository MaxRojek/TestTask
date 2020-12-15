import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: row;
`;

export const LoginImageWrapper = styled.div`
  display: flex;
  width: 40%;
  height: 100vh;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vw;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 100px;
  }
`;

export const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const FormWrapper = styled.div`
  display: flex;
  height: 90%;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15vw;
  padding-right: 10%;
  max-width: 600px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#2140E8" : "white")};
  color: ${(props) => (props.primary ? "white" : "#2140E8")};
  font-size: 1em;
  margin-top: 40px;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  &:hover {
    background: ${(props) => (props.primary ? "#4460F7" : "#2140E8")};
  }
  &:focus {
    outline: none;
  }
`;

export const AlertInfo = styled.div`
  margin-top: 50px;
`;
