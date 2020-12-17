import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: fit-content;
  height: fit-content;
  background-color: #f2f2f2;
  align-items: center;
  min-height: 100vh;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
  height: fit-content;

  background-color: #f2f2f2;
  flex-direction: row;
  padding-left: 60px;
  padding-right: 60px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
  }
`;

export const PagginationWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  max-width: 50%;
  width: fit-content;
  height: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
