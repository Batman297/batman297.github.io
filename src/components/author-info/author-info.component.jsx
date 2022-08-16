import authorPhotoUrl from "../../assets/tridenda.png";
import {
  AuthorInfoContainer,
  AuthorInfoTextContainer,
  AuthorInfoImageContainer,
  GreetingText,
  RolesText,
  DescriptionText,
} from "./author-info.styles";

const AuthorInfo = () => {
  return (
    <AuthorInfoContainer>
      <AuthorInfoTextContainer>
        <GreetingText>Hi, I'm Tri Denda</GreetingText>
        <RolesText>A web Developer & activist</RolesText>
        <DescriptionText>
          I use JavaScipt as the primary language to build front-end and
          back-end websites also mobile applications. For me, programming
          languages are just tools to help me to solve real problems. Also, I
          raise awareness of porn’s negative effects and help addicts to free
          themselves from porn addiction.
        </DescriptionText>
      </AuthorInfoTextContainer>
      <AuthorInfoImageContainer>
        <img src={authorPhotoUrl} alt="Author face" />
      </AuthorInfoImageContainer>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
