import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkReferenceLinks from "remark-reference-links";
import remarkGfm from "remark-gfm";

import { posts } from "../../blog-posts/posts";
import { getCustomDate } from "../../utils/blog-posts.helper";

import {
  BlogPostContainer,
  Header,
  PostDate,
  Title,
  Article,
} from "./blog-post.styles";

const BlogPost = () => {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState("");

  const post = posts.filter((post) => {
    return post.id === Number(id);
  })[0];

  useEffect(() => {
    import(`../../blog-posts/${post.id}/${post.slug}.md`)
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
  }, [post.id, post.slug]);

  if (!post)
    return (
      <h2>
        I haven't wrote anything using this url. Please make sure you typed the
        right one.
      </h2>
    );

  const getDateStringHandler = getCustomDate(post.createdAt);

  return (
    <BlogPostContainer>
      <Header>
        <PostDate>{getDateStringHandler}</PostDate>
        <Title>{post.title}</Title>
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
