import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Head from "next/head";
import path from "path";
import { FC } from "react";

// export const getStaticPaths = async () => {
//   return {
//     paths: [{ params: { slug: "about" } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// };

export const getStaticProps = async () => {
  const content = fs.readFileSync(path.join("data", "about.md"), "utf-8");
  const matterResult = matter(content);

  return {
    props: {
      about: {
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date,
        content: matterResult.content,
      },
    },
  };
};

type AboutProps = {
  about: {
    title: string;
    subtitle: string;
    date: string;
    content: string;
  };
};

const About: FC<AboutProps> = ({ about }) => {
  return (
    <div>
      <Head>
        <title>Tri Denda - About</title>
      </Head>
      <h1 className="text-4xl font-bold text-gray-700 mt-12">{about.title}</h1>
      <article className="prose">
        <Markdown>{about.content}</Markdown>
      </article>
    </div>
  );
};

export default About;
