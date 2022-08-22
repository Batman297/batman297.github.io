import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    padding: 20px 0;
  }
`;

export const MessageText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
