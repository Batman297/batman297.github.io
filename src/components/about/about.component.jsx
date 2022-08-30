import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkReferenceLinks from "remark-reference-links";
import remarkGfm from "remark-gfm";

import { AboutContainer, Header, Title, Article } from "./about.styles";

const About = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    import(`../../data/about.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => setMarkdown(response))
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AboutContainer>
      <Header>
        <Title>About Me</Title>
      </Header>
      <Article>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm, remarkReferenceLinks]}
        />
      </Article>
    </AboutContainer>
  );
};

export default About;
