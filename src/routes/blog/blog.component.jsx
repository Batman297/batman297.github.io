import Category from "../../components/category/category.component";
import {
  BlogContainer,
  Header,
  Title,
  CategoriesContainer,
} from "./blog.styles";

const Blog = () => {
  return (
    <BlogContainer>
      {/*
        Header
          Title
          Categories
          
        PostList
          ListPost
            Year
            LinkList
      */}

      <Header>
        <Title>BLOG</Title>
        <CategoriesContainer>
          <Category categoryName="All" categoryType="active" />
          <Category categoryName="JavaScript" />
          <Category categoryName="HTML" />
          <Category categoryName="CSS" />
        </CategoriesContainer>
      </Header>
    </BlogContainer>
  );
};

export default Blog;
