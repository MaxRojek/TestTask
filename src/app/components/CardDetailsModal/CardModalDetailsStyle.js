import styled from "styled-components";

export const ModaldWrapper = styled.div`
  position: relative;
  height: 530px;
  width: 520px;
  background-color: white;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.img`
  position: absolute;
  height: 70%;
  width: 100%;
  object-fit: cover;
  top: 0px;
`;
export const ContentModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: fit-content;
  height: 30%;
  width: 100%;
  background-color: white;
  bottom: 0px;
  padding: 15px;
  border-radius: 8px;
`;

export const TextModalWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  color: #9194a5;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;
