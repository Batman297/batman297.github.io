import AuthorInfo from "../../components/author-info/author-info.component";
import Porject from "../../components/project/project.component";
import SkillTag from "../../components/skill-tag/skill-tag.component";

import imageOneUrl from "../../assets/breactjs-simplestore.png";
import imageTwoUrl from "../../assets/portfolio-blog-project.png";

import {
  HomeContainer,
  ElementTitle,
  ElementContainer,
  SkillsContainer,
} from "./home.styles";

const projects = [
  {
    projectTitle: "Breactjs SimpleStore",
    imageUrl: imageOneUrl,
    viewUrl: "https://breactjs-simplestore.netlify.app/",
    repoUrl: "https://github.com/tridenda/BreactjsSimpleStore",
    color: "blue",
    description: [
      "Built an online store using ReactJS",
      "Integrated with Firebase and Stripe",
      "Manage context using Redux",
    ],
  },
  {
    projectTitle: "AddictionMetter",
    imageUrl: imageOneUrl,
    viewUrl: null,
    repoUrl: "https://github.com/tridenda/AddictionMeter",
    color: "yellow",
    description: [
      "Built an expert system app for detection online game addiction using certainty factor algorithm",
      "Built it using React Native and integrated with Firebase",
    ],
  },
  {
    projectTitle: "Portfolio & Blog Project",
    imageUrl: imageTwoUrl,
    viewUrl: "https://tridenda.github.io/",
    repoUrl: "https://github.com/tridenda/tridenda.github.io",
    color: "green",
    description: [
      "Build my own portfolio and blog web using ReactJS",
      "Responsive view on desktop, tablet, or mobile",
    ],
  },
];

const tags = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "React Native",
  "Redux",
  "PhotoShop",
  "Figma",
  "Git",
  "Linux",
];

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
          {tags.map((tag, index) => (
            <SkillTag key={`tag${index}`} tag={tag} />
          ))}
        </SkillsContainer>
      </ElementContainer>
    </HomeContainer>
  );
};

export default Home;
