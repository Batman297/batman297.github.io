import { FC } from "react";

export type SkillViewProps = {
  skill: string;
};

const SkillView: FC<SkillViewProps> = ({ skill }) => {
  return (
    <div className="bg-gray-300 py-1 px-5">
      <span>{skill}</span>
    </div>
  );
};

export default SkillView;
