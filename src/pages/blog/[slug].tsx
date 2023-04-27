import dateFormatter from "@src/lib/date-formatter";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import path from "path";
import { FC } from "react";

export const getStaticPaths = async () => {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("data", "posts"));

  return {
    paths: files.map((filename) => {
      return {
        params: {
          slug: filename.split(".")[0],
        },
      };
    }),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: any) => {
  const filename = context.params.slug + ".md";
  const content = fs.readFileSync(
    path.join("data", "posts", filename),
    "utf-8"
  );
  const matterResult = matter(content);

  return {
    props: {
      post: {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date,
        category: matterResult.data.category,
        content: matterResult.content,
      },
    },
  };
};

type PostProps = {
  post: {
    title: string;
    subtitle: string;
    date: string;
    category: string[];
    content: string;
  };
};

const Post: FC<PostProps> = ({ post }) => {
  const { day, date, month, year } = dateFormatter(post.date);

  return (
    <>
      <span>{`${day}, ${month} ${date}, ${year}`}</span>
      <h3>{post.title}</h3>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
};

export default Post;
