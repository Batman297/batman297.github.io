import AuthorInfo from "../../components/author-info/author-info.component";
import Porject from "../../components/project/project.component";
import SkillTag from "../../components/skill-tag/skill-tag.component";

import { skills, projects } from "../../data/home";

import {
  HomeContainer,
  ElementTitle,
  ElementContainer,
  SkillsContainer,
} from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <AuthorInfo />
      <ElementContainer>
        <ElementTitle id="my-projects">My recent projects</ElementTitle>
        {projects.map((project, index) => (
          <Porject
            key={`project${index}`}
            color={project.color}
            contains={project}
          />
        ))}
      </ElementContainer>
      <ElementContainer>
        <ElementTitle>Important attributes of skills</ElementTitle>
        <SkillsContainer>
          {skills.map((tag, index) => (
            <SkillTag key={`tag${index}`} tag={tag} />
          ))}
        </SkillsContainer>
      </ElementContainer>
    </HomeContainer>
  );
};

export default Home;
