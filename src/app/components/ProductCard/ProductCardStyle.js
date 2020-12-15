import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 288px;
  height: fit-content;
  margin: 10px;
  @media (max-width: 768px) {
    width: 365px;
    margin: 15px;
  }
`;

export const ProductRateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;

  bottom: 10px;
`;
