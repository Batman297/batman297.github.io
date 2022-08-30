import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { ReactComponent as BarSolid } from "../../assets/bars-solid.svg";
import { ReactComponent as XmarkSolid } from "../../assets/xmark-solid.svg";

export const NavigationContainer = styled.div`
  width: 1000px;
  height: 35px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1050px) {
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

  @media screen and (max-width: 1050px) {
    padding-left: 25px;
  }

  @media screen and (max-width: 550px) {
    padding-left: 10px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;

  @media screen and (max-width: 1050px) {
    padding-right: 25px;
  }

  @media screen and (max-width: 550px) {
    padding-right: 10px;
  }
`;

export const NavLink = styled(Link)`
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 549px) {
    display: none;
  }
`;

export const NavHashLink = styled(HashLink)`
  margin-left: 15px;

  @media screen and (max-width: 549px) {
    display: none;
  }
`;

export const HamburgerButton = styled(BarSolid)`
  width: 16px;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

export const XmarkButton = styled(XmarkSolid)`
  width: 16px;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

export const NavLinksMobile = styled.div`
  width: 100%;
  border-top: 1px solid #4f4f4f;
  border-bottom: 1px solid #4f4f4f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;

  @media screen and (min-width: 550px) {
    display: none;
  }
`;

export const NavLinkMobile = styled(Link)`
  font-weight: bold;
`;

export const NavHashLinkMobile = styled(HashLink)`
  font-weight: bold;
`;
