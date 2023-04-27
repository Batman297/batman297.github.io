import clsx from "@src/lib/clsx";
import Link from "next/link";
import { FC } from "react";

export type ProjectViewProps = {
  project: {
    name: string;
    imageUrl: string;
    description: string;
    bgColor: string;
    url: string;
  };
};

const getColorBackground = (bgColor = "blue") =>
  ({
    blue: "bg-[#B0D7FB]",
    orange: "bg-[#F8E0AF]",
    red: "bg-[#F8BDBD]",
  }[bgColor]);

const ProjectView: FC<ProjectViewProps> = ({ project }) => {
  return (
    <div
      className={clsx(
        "my-3 sm:flex sm:px-6 sm:items-center",
        getColorBackground(project.bgColor)
      )}
    >
      <div className="flex justify-center py-3 mx-3">
        <Link href={project.url}>
          <img
            className="max-w-[150px]"
            src={project.imageUrl}
            alt={project.name}
          />
        </Link>
      </div>
      <div className="flex flex-col items-center mx-3 sm:items-start">
        <span className="font-bold text-[24px] leading-12">{project.name}</span>
        <span className="text-center mb-3 leading-5 sm:text-left">
          {project.description}
        </span>
      </div>
    </div>
  );
};

export default ProjectView;
