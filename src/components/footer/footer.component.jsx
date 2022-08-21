import { Text, FooterContainer, Title, LinkContianer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <Title>Let's connect</Title>
      <Text>Get in touch for opportunities or just to say hi!</Text>
      <LinkContianer>
        <a href="https://www.twitter.com/trdenda" target="_blank">
          Twitter
        </a>
        <p>·</p>
        <a href="https://github.com/tridenda" target="_blank">
          Github
        </a>
        <p>·</p>
        <a href="https://www.linkedin.com/in/tridenda" target="_blank">
          Linked In
        </a>
        <p>·</p>
        <a href="mailto: tridenda297@gmail.com" target="_blank">
          Email
        </a>
      </LinkContianer>
    </FooterContainer>
  );
};

export default Footer;
