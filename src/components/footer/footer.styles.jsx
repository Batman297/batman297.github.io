import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 1000px;
  height: 110px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 22px;
  margin-top: 10px;
`;

export const LinkContianer = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    margin: 0 10px;
  }
`;
