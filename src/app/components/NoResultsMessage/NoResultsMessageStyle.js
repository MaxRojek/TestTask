import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  height: 350px;
  width: 600px;
  background-color: white;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const MessageCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageTextWrapper = styled.div`
  color: #9194a5;
`;
