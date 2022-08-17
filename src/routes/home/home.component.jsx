import AuthorInfo from "../../components/author-info/author-info.component";
import Porject from "../../components/project/project.component";

import imageOneUrl from "../../assets/breactjs-simplestore.png";

import { HomeContainer, ElementTitle, ElementContainer } from "./home.styles";

const projectOne = {
  projectTitle: "Portfolio Project",
  imageUrl: imageOneUrl,
  description: [
    "Built an online store using ReactJS",
    "Integrated with Firebase and Stripe",
    "Manage context using Redux",
  ],
};

const projectTwo = {
  projectTitle: "Breactjs SimpleStore",
  imageUrl: imageOneUrl,
  description: [
    "Built an online store using ReactJS",
    "Integrated with Firebase and Stripe",
    "Manage context using Redux",
  ],
};

const projectThree = {
  projectTitle: "AddictionMetter",
  imageUrl: imageOneUrl,
  description: [
    "Built an online store using ReactJSBuilt an expert system app for detection online game addiction using certainty factor algorithm",
    "Built it using React Native",
  ],
};

const Home = () => {
  return (
    <HomeContainer>
      <AuthorInfo />
      <ElementContainer>
        <ElementTitle>My recent projects</ElementTitle>
        <Porject color="blue" contains={projectOne} />
        <Porject color="yellow" contains={projectTwo} />
        <Porject color="green" contains={projectThree} />
      </ElementContainer>
      <ElementContainer>
        <ElementTitle>Important attributes of skills</ElementTitle>
      </ElementContainer>
    </HomeContainer>
  );
};

export default Home;
