import { FunctionComponent } from "react";
import { MyEdu } from "../data/type";
import Link from "next/link";

const EduCard: FunctionComponent<{
  data: MyEdu;
}> = ({ data: { Icon, grade, institute, name, year, sub, batch, link } }) => {
  return (
    <>
      <div className="py-2 card">
        <h4 className="flex text-sm font-bold">
          <Icon className="flex w-5 h-5 pr-2 text-purple-500" />
          {name}
        </h4>
        <div>
          <h6 className="text-sm">
            {link ? (
              <Link href={link}>
                <a className="text-purple-500">{institute}</a>
              </Link>
            ) : (
              institute
            )}
          </h6>
          <div className="text-xs">
            <p>
              {grade ? grade + " |" : batch ? batch + " |" : ""} {year}
            </p>
            <p>{sub}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduCard;

// working area was in HTML, CSS, JavaScript, WordPress, Photoshop, Illustrator, Word, Excel, PowerPoint, Adobe AEM 6.0 | 6.2, Drupal Site Customization and Content Population, EDM, Static and HTML5 Banner Development for international Market with JIRA.
