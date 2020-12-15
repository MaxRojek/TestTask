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
  color: ${(props) => (props.isActive ? "blue" : "black")};
`;
