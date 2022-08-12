import authorPhotoUrl from "../../assets/tridenda.png";
import {
  AuthorInfoContainer,
  AuthorInfoTextContainer,
  AuthorInfoImageContainer,
  Greeting,
  Roles,
  Description,
} from "./author-info.styles";

const AuthorInfo = () => {
  return (
    <AuthorInfoContainer>
      <AuthorInfoTextContainer>
        <Greeting>Hi, I'm Tri Denda</Greeting>
        <Roles>A web Developer & activist</Roles>
        <Description>
          I use JavaScipt as the primary language to build front-end and
          back-end websites also mobile applications. For me, programming
          languages are just tools to help me to solve real problems. Also, I
          raise awareness of porn’s negative effects and help addicts to free
          themselves from porn addiction.
        </Description>
      </AuthorInfoTextContainer>
      <AuthorInfoImageContainer>
        <img src={authorPhotoUrl} alt="Author face" />
      </AuthorInfoImageContainer>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
