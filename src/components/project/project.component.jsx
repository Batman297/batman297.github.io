import {
  ImageContainer,
  DescriptionContainer,
  ProjectTitleText,
  ListContainer,
  BaseProjectContainer,
  BlueProjectContainer,
  YellowProjectContainer,
  GreenProjectContainer,
  RedProjectContainer,
  LinkContainer,
} from "./project.styles";

export const PROJECT_TYPES_CLASSES = {
  base: "base",
  blue: "blue",
  yellow: "yellow",
  green: "green",
  red: "red",
};

const getContainerType = (color = PROJECT_TYPES_CLASSES.base) =>
  ({
    [PROJECT_TYPES_CLASSES.base]: BaseProjectContainer,
    [PROJECT_TYPES_CLASSES.blue]: BlueProjectContainer,
    [PROJECT_TYPES_CLASSES.yellow]: YellowProjectContainer,
    [PROJECT_TYPES_CLASSES.green]: GreenProjectContainer,
    [PROJECT_TYPES_CLASSES.red]: RedProjectContainer,
  }[color]);

const Project = ({ color, contains }) => {
  const Container = getContainerType(color);
  const { projectTitle, imageUrl, viewUrl, repoUrl, description } = contains;

  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt="Breactjs SimpleStore Project" />
      </ImageContainer>
      <DescriptionContainer>
        <ProjectTitleText>{projectTitle}</ProjectTitleText>
        <ListContainer>
          <ul>
            {description.map((item, index) => (
              <li key={`li${index}`}>{item}</li>
            ))}
          </ul>
        </ListContainer>
        <LinkContainer>
          {viewUrl && (
            <a href={viewUrl} target="_blank" rel="noreferrer">
              Live View
            </a>
          )}
          {viewUrl && repoUrl && <span>or</span>}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              Source Code
            </a>
          )}
        </LinkContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default Project;
