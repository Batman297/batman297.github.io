import styled from "styled-components";

export const AuthorInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;

  img {
    width: 200px;
  }

  @media screen and (max-width: 750px) {
    img {
      width: 180px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;

  @media screen and (max-width: 750px) {
    width: 95%;
  }
`;

export const NameText = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  letter-spacing: 5px;

  @media screen and (max-width: 750px) {
    font-size: 28px;
    letter-spacing: 3px;
  }
`;

export const RolesText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  letter-spacing: 5px;

  @media screen and (max-width: 750px) {
    font-size: 16px;
    letter-spacing: 3px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 22px;
  line-height: 32px;

  @media screen and (max-width: 750px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const CustomLine = styled.hr`
  @media screen and (max-width: 750px) {
    margin: 5px 0;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
