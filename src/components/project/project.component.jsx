import {
  ImageContainer,
  DescriptionContainer,
  ProjectTitleText,
  ListContainer,
  BaseContainer,
  BlueContainer,
  YellowContainer,
  GreenContainer,
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
  const { projectTitle, imageUrl, description } = contains;
  console.log(description);
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt="Breactjs SimpleStore Project" />
      </ImageContainer>
      <DescriptionContainer>
        <ProjectTitleText>{projectTitle}</ProjectTitleText>
        <ListContainer>
          <ul>
            {description.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </ListContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default Project;
