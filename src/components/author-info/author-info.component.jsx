import authorPhotoUrl from "../../assets/tridenda.png";
import myResumeUrl from "../../assets/tridenda-resume-2.0.4.pdf";

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
          I'm an enthusiastic web developer who loves solving problems and
          making meaningful impacts through the products that I built. For me,
          programming languages are just tools to help solve those problems. And
          for now, I use JavaScript as my primary language to build the
          frontend, backend, and mobile app.
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
