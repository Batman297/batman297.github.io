import ProjectView from "@src/components/project-view/project-view.component";
import SkillView from "@src/components/skill-view/skill-view.component";
import Image from "next/image";
import { about, projects, skills } from "../../data/portfolio";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center my-12">
        <Image
          src={about.imageUrl}
          alt="tridenda-profile"
          className="max-w-[150px] rounded-full"
          width={150}
          height={150}
        />
        <span className="font-bold text-[28px]">{about.name}</span>
        <span className="max-w-[500px] text-center">{about.description}</span>
      </div>

      <div id="projects" className="my-10">
        <span className="font-bold">My recent projects</span>
        {projects.map((project, index) => {
          return <ProjectView key={`project-${index}`} project={project} />;
        })}
      </div>

      <div className="my-5">
        <span className="font-bold">Important attributes of skill</span>
        <div className="flex flex-wrap justify-start gap-2 my-3">
          {skills.map((skill, index) => (
            <SkillView key={`skill-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
