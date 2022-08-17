import styled from "styled-components";

export const AuthorInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: calc(15vh - 35px);
  margin-bottom: 15vh;

  img {
    width: 200px;
  }
`;

export const TextContainer = styled.div`
  width: 850px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
`;

export const NameText = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  letter-spacing: 5px;
`;

export const RolesText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  letter-spacing: 5px;
`;

export const DescriptionText = styled.p`
  font-size: 22px;
  line-height: 32px;
`;
