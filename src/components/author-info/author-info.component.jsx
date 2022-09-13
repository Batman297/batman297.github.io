import authorPhotoUrl from "../../assets/tridenda.png";
import myResumeUrl from "../../assets/Tri_Denda_Resume.pdf";

import Button from "../button/button.component";
import {
  AuthorInfoContainer,
  TextContainer,
  NameText,
  RolesText,
  DescriptionText,
  CustomLine,
  ButtonContainer,
  DownloadButtonLink,
  CustomButtonLink,
} from "./author-info.styles";

const AuthorInfo = () => {
  return (
    <AuthorInfoContainer>
      <img src={authorPhotoUrl} alt="Author face" />
      <TextContainer>
        <NameText>TRI DENDA</NameText>
        <RolesText>WEB DEVELOPER</RolesText>
        <CustomLine />
        <DescriptionText>
          I am a passionate web developer who loves solving problems and making
          meaningful impacts on others' lives through the products that I built.
          For me, creating products is about identifying the problems to create
          effective solutions to solve its problems.
        </DescriptionText>
        <ButtonContainer>
          <DownloadButtonLink href={myResumeUrl} download>
            <Button>Resume</Button>
          </DownloadButtonLink>
          <CustomButtonLink to="about">
            <Button>Know more</Button>
          </CustomButtonLink>
        </ButtonContainer>
      </TextContainer>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
