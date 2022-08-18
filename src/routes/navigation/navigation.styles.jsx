import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 1000px;
  height: 35px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const TitleContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    padding-left: 25px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1000px) {
    padding-right: 25px;
  }
`;

export const NavLink = styled(Link)`
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
