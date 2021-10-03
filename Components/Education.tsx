import { FunctionComponent } from "react";

import { education, techEducation, workExperience } from "./../data/data";
import EduCard from "./EduCard";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import Skills from "./Skills";

const Education = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
      <div className="flex flex-col p-4 bg-gray-50 rounded-xl">
        <h3 className="flex font-bold text-indigo-500 align-center">
          <FaUserGraduate className="w-5 h-5 pr-2 text-indigo-500 " />
          General Education
        </h3>
        <div className="pl-5">
          {education.map((data, i) => (
            <EduCard data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col p-4 bg-gray-50 rounded-xl">
        <h3 className="flex font-bold text-indigo-500 align-center ">
          <FaLaptopCode className="w-6 h-6 pr-2 text-indigo-500 " />
          Technical Education
        </h3>
        <div className="pl-5">
          {techEducation.map((data, i) => (
            <EduCard data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col p-4 bg-gray-50 rounded-xl">
        <h3 className="flex font-bold text-indigo-500 align-center ">
          <FaLaptopCode className="w-6 h-6 pr-2 text-indigo-500 " />
          Professional Experience
        </h3>
        <div className="pl-5">
          {workExperience.map((data, i) => (
            <EduCard data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="flex flex-col p-4 bg-gray-50 rounded-xl">
        <h3 className="flex font-bold text-indigo-500 align-center ">
          <FaLaptopCode className="w-6 h-6 pr-2 text-indigo-500 " />
          Skills
        </h3>
        <div className="pl-5">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Education;
