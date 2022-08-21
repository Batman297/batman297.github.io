import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 1000px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  clear: both;
  margin-top: -110px;

  @media screen and (max-width: 1050px) {
    width: calc(100% - 50px);
    margin: 0 25px;
    margin-top: -110px;
  }

  @media screen and (max-width: 900px) {
    width: calc(100% - 20px);
    margin: 0 10px;
    margin-top: -110px;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    font-size: 26px;
  }

  @media screen and (max-width: 750px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  margin-top: 10px;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }

  @media screen and (max-width: 750px) {
    font-size: 18px;
  }
`;

export const LinkContianer = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    margin: 0 10px;
  }

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;
