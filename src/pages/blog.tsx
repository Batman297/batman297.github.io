import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { FC } from "react";

import dateFormatter from "@src/lib/date-formatter";

export const getStaticProps = async () => {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("data", "posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Get frontmatter
    const fileContents = fs.readFileSync(
      path.join("data", "posts", filename),
      "utf-8"
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      category: matterResult.data.category,
      slug: filename.replace(".md", ""),
    };
  });

  return {
    props: {
      posts,
    },
  };
};

type BlogProps = {
  posts: {
    title: string;
    date: string;
    subtitle: string;
    category: string;
    slug: string;
  }[];
};

const Blog: FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => {
        const { date, day, month, year } = dateFormatter(post.date);

        return (
          <div key={post.slug}>
            <Link href={`blog/${post.slug}`}>
              <span>{post.title}</span>
              <span>{`${day}, ${month} ${date}, ${year}`}</span>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
