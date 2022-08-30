import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer.component";
import Wrapper from "../../components/wrapper/wrapper.component";

import {
  NavigationContainer,
  TitleContainer,
  NavLinks,
  NavLink,
  NavHashLink,
  HamburgerButton,
  XmarkButton,
  NavLinksMobile,
  NavLinkMobile,
  NavHashLinkMobile,
} from "./navigation.styles";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <TitleContainer to="/">
          <h1>TRI DENDA</h1>
        </TitleContainer>
        <NavLinks>
          <NavLink to="about">ABOUT</NavLink>
          <NavLink to="blog">BLOG</NavLink>
          <NavHashLink smooth to="/#my-projects">
            PROJECTS
          </NavHashLink>
          {!isOpen && <HamburgerButton onClick={openMenuHandler} />}
          {isOpen && <XmarkButton onClick={openMenuHandler} />}
        </NavLinks>
      </NavigationContainer>
      {isOpen && (
        <NavLinksMobile>
          <NavLinkMobile to="about">ABOUT</NavLinkMobile>
          <NavLinkMobile to="blog">BLOG</NavLinkMobile>
          <NavHashLinkMobile smooth to="/#my-projects">
            PROJECTS
          </NavHashLinkMobile>
        </NavLinksMobile>
      )}
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

export default Navigation;
