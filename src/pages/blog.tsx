import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { FC } from "react";

import { clsx, dateFormatter, filterPostsByYear } from "@src/lib/helper";

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

  filterPostsByYear(posts);

  return {
    props: {
      posts: filterPostsByYear(posts),
    },
  };
};

type BlogProps = {
  posts: {
    year: string;
    contents: {
      title: string;
      date: string;
      subtitle: string;
      category: string;
      slug: string;
    }[];
  }[];
};

const Blog: FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <h2 className="font-bold text-lg mt-3">Blog</h2>
      {posts.map((post) => {
        return (
          <div key={`year-${post.year}`} className="flex flex-col">
            <p className="font-bold mt-5 mb-2">{post.year}</p>
            {post.contents.map((content, index) => {
              const { date, day, month, year } = dateFormatter(content.date);

              return (
                <Link key={content.slug} href={`blog/${content.slug}`}>
                  <div
                    className={clsx(
                      "flex flex-col-reverse border-t py-2 text-sm",
                      "md:flex-row md:items-center md:justify-between md:hover:pl-2 md:hover:transition-all",
                      post.contents.length == ++index && "border-y"
                    )}
                  >
                    <span className="md:max-w-[430px]">{content.title}</span>
                    <span className="text-xs text-gray-500 md:max-w-[150px]">{`${day}, ${month} ${date}, ${year}`}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Blog;
