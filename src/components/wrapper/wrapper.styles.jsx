import styled from "styled-components";

export const WrapperContainer = styled.div`
  min-height: calc(100% - 35px);
`;

export const MainContainer = styled.div`
  overflow: auto;
  padding-bottom: 110px;

  @media screen and (max-width: 1050px) {
    padding: 0 25px;
    padding-bottom: 110px;
  }

  @media screen and (max-width: 550px) {
    padding: 0 10px;
    padding-bottom: 110px;
  }
`;
