import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  min-height: 100%;

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const ElementTitle = styled.p`
  font-size: 24px;

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }
`;

export const ElementContainer = styled.div`
  width: 100%;
  margin: 50px 0;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
