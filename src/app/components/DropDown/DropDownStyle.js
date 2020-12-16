import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropDownButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const DropDownMenu = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-right: 50px;
  top: 5;
  left: -120px;
  border-radius: 5px;
`;

export const DropDownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
