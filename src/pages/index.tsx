import ProjectView from "@src/components/project-view/project-view.component";
import { about, projects, skills } from "../../data/portfolio";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center my-12">
        <img
          src={about.imageUrl}
          alt="tridenda-profile"
          className="max-w-[150px] rounded-full"
        />
        <span className="font-bold text-[28px]">{about.name}</span>
        <span className="max-w-[500px] text-center">{about.description}</span>
      </div>

      <div className="my-3">
        <span className="font-bold">My recent projects</span>
        {projects.map((project, index) => {
          return <ProjectView key={`project-${index}`} project={project} />;
        })}
      </div>

      <div className="my-3">
        {skills.map((skill, index) => (
          <span key={`skill-${index}`}>{skill}</span>
        ))}
      </div>
    </>
  );
};

export default Home;
