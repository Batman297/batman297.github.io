import AuthorInfo from "../../components/author-info/author-info.component";
import Porject from "../../components/project/project.component";

import { HomeContainer, ElementContainer, ElementTitle } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <AuthorInfo />
      <ElementContainer>
        <ElementTitle>My recent projects</ElementTitle>
        <Porject />
        <Porject />
        <Porject />
      </ElementContainer>
      <ElementContainer>
        <ElementTitle>Important attributes of skills</ElementTitle>
      </ElementContainer>
    </HomeContainer>
  );
};

export default Home;
