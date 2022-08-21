import { getCustomDate } from "../../utils/blog-posts.helper";

import {
  PostListContainer,
  YearText,
  ListContainer,
  PostTitle,
  PostDate,
  PostLink,
} from "./post-list.styles";

const PostList = ({ year, posts }) => {
  return (
    <PostListContainer>
      <YearText>{year}</YearText>
      <ListContainer>
        {posts.map((post, index) => {
          return (
            <PostLink
              key={`post-list${index}`}
              to={`/blog/${post.id}/${post.slug}`}
            >
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{getCustomDate(post.createdAt)}</PostDate>
            </PostLink>
          );
        })}
      </ListContainer>
    </PostListContainer>
  );
};

export default PostList;
