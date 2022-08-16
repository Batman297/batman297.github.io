import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer.component";
import Wrapper from "../../components/wrapper/wrapper.component";

import {
  NavigationContainer,
  TitleContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <TitleContainer to="/">
          <h1>TRI DENDA</h1>
        </TitleContainer>
        <NavLinks>
          <NavLink to="/">RESUME</NavLink>
          <NavLink to="blog">BLOG</NavLink>
          <NavLink to="/">PROJECTS</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

export default Navigation;
