import {
  ImageContainer,
  DescriptionContainer,
  ProjectTitleText,
  ListContainer,
  BaseContainer,
  BlueContainer,
  YellowContainer,
  GreenContainer,
  LinkContainer,
} from "./project.styles";

export const COLORS = {
  base: "base",
  blue: "blue",
  yellow: "yellow",
  green: "green",
};

const getContainerColor = (color = COLORS.base) =>
  ({
    [COLORS.base]: BaseContainer,
    [COLORS.blue]: BlueContainer,
    [COLORS.yellow]: YellowContainer,
    [COLORS.green]: GreenContainer,
  }[color]);

const Project = ({ color, contains }) => {
  const Container = getContainerColor(color);
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
          {viewUrl && <a href={viewUrl}>Live view</a>}
          {viewUrl && repoUrl && <span>or</span>}
          {repoUrl && <a href={repoUrl}>Check the repo</a>}
        </LinkContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default Project;
