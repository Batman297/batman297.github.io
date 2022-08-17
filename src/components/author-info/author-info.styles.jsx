import styled from "styled-components";

export const AuthorInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;

  img {
    width: 200px;
  }
`;

export const TextContainer = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
`;

export const NameText = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const RolesText = styled.p`
  font-size: 20px;
  font-style: italic;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.p`
  font-size: 22px;
  line-height: 32px;
`;
