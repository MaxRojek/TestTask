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
  margin-left: -10px;
  padding-bottom: 10px;
`;

/////////////////
export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
  height: 400px;
  border-radius: 8px;
  background-color: #ffffff;
`;
export const ProductCardImageWrapper = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 8px 8px 0px 0px;
  background-color: #e0e2ea;
`;
export const ProductCardTitleWrapper = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  margin-bottom: 10px;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0px 0px;
  opacity: ${(props) => (props.available ? "1" : "0.5")};
`;

export const ProductCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 15px 15px 15px;
  height: 150px;
`;
export const ProductCardDescription = styled.div`
  display: flex;
  color: #9194a5;
  width: 90%;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PromoInfo = styled.div`
  position: relative;
  top: -150px;
  width: fit-content;
  background-color: orange;
  padding: 2px 15px 2px 15px;
  color: white;
  z-index: 1000;
  font-size: 16px;
`;
