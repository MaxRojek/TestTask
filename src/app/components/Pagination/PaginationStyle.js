import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PageNumber = styled.h6`
  margin: 5px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#4460F7" : "black")};
`;
export const PageNav = styled.h6`
  margin: 5px;
  cursor: pointer;
  color: ${(props) => (props.disabled ? "#9194A5" : "black")};
  margin-left: 10px;
  margin-right: 10px;
`;
