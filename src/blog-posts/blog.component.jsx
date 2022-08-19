import { useState, useEffect } from "react";

import {
  getPostsByCategory,
  getCategories,
} from "../../utils/blog-posts.helper";

import CategoryButton from "../../components/category-button/category-button.component";
import PostList from "../../components/post-list/post-list.component";

import { posts } from "../../blog-posts/_posts";

import {
  BlogContainer,
  Header,
  Title,
  CategoriesContainer,
} from "./blog.styles";

const Blog = () => {
  const [category, setCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const categoriesArr = getCategories(posts);
    const newFilteredPosts = getPostsByCategory(posts, category);

    setCategories(categoriesArr);
    setFilteredPosts(newFilteredPosts);
  }, [category]);

  const updateCategoryHandler = (newCategory) => setCategory(newCategory);

  return (
    <BlogContainer>
      <Header>
        <Title>BLOG</Title>
        <CategoriesContainer>
          {categories.map((categoryObj, index) => {
            const categoryType =
              categoryObj.categoryName === category ? "active" : "base";

            return (
              <CategoryButton
                key={`category-button${index}`}
                categoryObj={categoryObj}
                categoryType={categoryType}
                updateCategory={updateCategoryHandler}
                onClick={() => setCategory(categoryObj.categoryName)}
              />
            );
          })}
        </CategoriesContainer>
      </Header>

      {filteredPosts.map((post, index) => {
        return (
          <PostList
            key={`post-list${index}`}
            year={post.year}
            posts={post.posts}
          />
        );
      })}
    </BlogContainer>
  );
};

export default Blog;
