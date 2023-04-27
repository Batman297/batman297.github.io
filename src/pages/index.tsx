import { about, projects, skills } from "../../data/portfolio";

export default function Home() {
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

      <div>
        {projects.map((project, index) => {
          return (
            <div key={`project-${index}`}>
              <span>{project.name}</span>
            </div>
          );
        })}
      </div>

      <div>
        {skills.map((skill, index) => (
          <span key={`skill-${index}`}>{skill}</span>
        ))}
      </div>
    </>
  );
}
