import ReactMarkdown from "react-markdown";
import remarkReferenceLinks from "remark-reference-links";
import remarkGfm from "remark-gfm";

import {
  BlogPostContainer,
  Header,
  PostDate,
  Title,
  Article,
} from "./blog-post.styles";

const markdown = `
This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg).

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

> - asdf

1. asdf Pleno Rekapitulasi PSU Pilkada Kalsel Rampung, Sahbirin-Muhidin Unggul
1. asdf Pleno Rekapitulasi PSU Pilkada Kalsel Rampung, Sahbirin-Muhidin Unggul
- asdf Pleno Rekapitulasi PSU Pilkada Kalsel Rampung, Sahbirin-Muhidin Unggul
- asdf Pleno Rekapitulasi PSU Pilkada Kalsel Rampung, Sahbirin-Muhidin Unggul
`;

const BlogPost = () => {
  return (
    <BlogPostContainer>
      <Header>
        <PostDate>Wed, February 01, 2017</PostDate>
        <Title>
          Pleno Rekapitulasi PSU Pilkada Kalsel Rampung, Sahbirin-Muhidin Unggul
        </Title>
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
