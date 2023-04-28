import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { FC } from "react";

import { clsx, dateFormatter } from "@src/lib/helper";

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
      <h2 className="font-bold text-lg my-3">Blog</h2>
      {posts.map((post, index) => {
        const { date, day, month, year } = dateFormatter(post.date);

        return (
          <Link key={post.slug} href={`blog/${post.slug}`}>
            <div
              className={clsx(
                "flex flex-col-reverse border-t py-2 text-sm",
                posts.length == ++index && "border-y"
              )}
            >
              <span className="">{post.title}</span>
              <span className="text-xs text-gray-500">{`${day}, ${month} ${date}, ${year}`}</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Blog;
