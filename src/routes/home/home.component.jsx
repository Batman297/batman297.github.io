import AuthorInfo from "../../components/author-info/author-info.component";
import Porject from "../../components/project/project.component";
import SkillTag from "../../components/skill-tag/skill-tag.component";

import breactjsUrl from "../../assets/breactjs-simplestore.png";
import portfolioUrl from "../../assets/portfolio-blog-project.png";
import addictionMetterUrl from "../../assets/addiction-metter.png";
import smartbrainUrl from "../../assets/smartbrain-facedetection.png";

import {
  HomeContainer,
  ElementTitle,
  ElementContainer,
  SkillsContainer,
} from "./home.styles";

const projects = [
  {
    projectTitle: "Breactjs SimpleStore",
    imageUrl: breactjsUrl,
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
    projectTitle: "Smart Brain",
    imageUrl: smartbrainUrl,
    viewUrl: "https://tridenda.github.io/smart-brain/",
    repoUrl: "https://github.com/tridenda/smart-brain",
    color: "yellow",
    description: [
      "Built a face recognition app using Clarifai API",
      "Built the frontend using React JS & REST API",
      "Also, built the backend using Express JS & PostgreSQL",
    ],
  },
  {
    projectTitle: "AddictionMetter",
    imageUrl: addictionMetterUrl,
    viewUrl: null,
    repoUrl: "https://github.com/tridenda/AddictionMeter",
    color: "green",
    description: [
      "Built an expert system app for detection online game addiction using certainty factor algorithm",
      "Built it using React Native and integrated with Firebase",
    ],
  },
  {
    projectTitle: "Portfolio & Blog Project",
    imageUrl: portfolioUrl,
    viewUrl: "https://tridenda.github.io/",
    repoUrl: "https://github.com/tridenda/tridenda.github.io",
    color: "red",
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
