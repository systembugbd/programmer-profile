import { FunctionComponent } from "react";
import { MySkills } from "../data/type";
import Link from "next/link";

const SkillsCard: FunctionComponent<{
  data: MySkills;
}> = ({ data: { Icon, name, label, percentage, type } }) => {
  return (
    <>
      <div className="flex flex-col py-1 card">
        <div className="flex items-center justify-start rounded-r-full bg-gradient-to-r from-gray-300 to-gray-400">
          <h4
            className="inline-flex items-center justify-start pl-2 text-xs text-white rounded-r-full text-smtext-white bg-gradient-to-r from-pink-600 to-indigo-600"
            style={{ width: percentage }}
          >
            <Icon className="flex w-5 h-5 pr-2 text-white" />
            {name}
          </h4>
          <div className="items-center justify-center inline pl-1 text-xs text-gray-300">
            {label}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;

// working area was in HTML, CSS, JavaScript, WordPress, Photoshop, Illustrator, Word, Excel, PowerPoint, Adobe AEM 6.0 | 6.2, Drupal Site Customization and Content Population, EDM, Static and HTML5 Banner Development for international Market with JIRA.
