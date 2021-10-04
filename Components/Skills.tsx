import { FunctionComponent } from "react";

import {
  education,
  techEducation,
  workExperience,
  skills,
} from "./../data/data";
import SkillsCard from "./SkillsCard";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col rounded-xl">
      <div>
        {skills.map((data, i) => (
          <SkillsCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
