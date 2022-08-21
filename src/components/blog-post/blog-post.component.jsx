import ReactMarkdown from "react-markdown";
import remarkReferenceLinks from "remark-reference-links";
import remarkGfm from "remark-gfm";

import { markdown } from "./markdown";

import {
  BlogPostContainer,
  Header,
  PostDate,
  Title,
  Article,
} from "./blog-post.styles";

const BlogPost = () => {
  return (
    <BlogPostContainer>
      <Header>
        <PostDate>Wed, February 01, 2017</PostDate>
        <Title>Hello, World!</Title>
      </Header>
      <Article>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm, remarkReferenceLinks]}
        />
      </Article>
    </BlogPostContainer>
  );
};

export default BlogPost;
