import breactjsUrl from "../assets/breactjs-simplestore.png";
import portfolioUrl from "../assets/portfolio-blog-project.png";
import addictionMetterUrl from "../assets/addiction-metter.png";
import smartbrainUrl from "../assets/smartbrain-facedetection.png";

export const projects = [
  {
    projectTitle: "Breactjs SimpleStore",
    imageUrl: breactjsUrl,
    viewUrl: "https://breactjs-simplestore.netlify.app/",
    repoUrl: "https://github.com/tridenda/BreactjsSimpleStore",
    color: "blue",
    description: [
      "Built it using React and Redux",
      "API integration with Firebase and Stripe",
      "Built many features such as responsive design, register/login using email and Google account",
    ],
  },
  {
    projectTitle: "Smart Brain",
    imageUrl: smartbrainUrl,
    viewUrl: "https://tridenda.github.io/smart-brain/",
    repoUrl: "https://github.com/tridenda/smart-brain",
    color: "yellow",
    description: [
      "Built it using React JS and Redux",
      "Integrated with Clarifai API for detecting faces using AI",
      "Created backend app using Express JS and PostgreSQL",
      "Created and integrated with REST API",
    ],
  },
  {
    projectTitle: "AddictionMetter",
    imageUrl: addictionMetterUrl,
    viewUrl: null,
    repoUrl: "https://github.com/tridenda/AddictionMeter",
    color: "green",
    description: [
      "Built expert system while I was working on my final project as a college student",
      "Implemented Certainty Factor algorithm",
      "Built it using React Native (Expo) for fast implementation",
    ],
  },
  {
    projectTitle: "Portfolio & Blog Project",
    imageUrl: portfolioUrl,
    viewUrl: "https://tridenda.github.io/",
    repoUrl: "https://github.com/tridenda/tridenda.github.io",
    color: "red",
    description: [
      "Built a portfolio and blog web",
      "Built the responsive view on desktop, mobile, and tablet",
    ],
  },
];

export const skills = [
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
