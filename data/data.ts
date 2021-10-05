import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { IoGitNetworkSharp } from "react-icons/io5";
import { BiBook } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { MyEdu, MyService, MySkills, MyWorkExp } from "./type";

export const services: MyService[] = [
  {
    Icon: RiComputerLine,
    title: "Hello Welcome to my world",
    disc: "I can build a beautiful and scalable SPA / PWA using <b> HTML</b>,<b>CSS</b> <b>JavaScript</b> and <b>React.js, Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    disc: "handle database, server, api using <b>NodeJs</b> <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    disc: "I can develop robust REST API using <b>Node API</b> and <b>Laravel</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Problem Solver",
    disc: "Basic Problem solver in <b>HackerRank</b>  and <b>urionlinejudge</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    disc: "Stunning user interface designer using <b>Figma</b>, <b>Adobe XD</b> and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Soft Skills",
    disc: "I have lots of soft skills Managing task, Seting Priority, Presenting, Bug Hunting etc.",
  },
];

export const education: MyEdu[] = [
  {
    Icon: BiBook,
    name: "Master of Business Administration (MBA)",
    institute: "Northern University Bangladesh",
    grade: "CGPA: 3.7 (Result Withheld)",
    year: "2014-2015",
    link: "https://nub.ac.bd/",
    sub: "Mejor in Marketing",
  },
  {
    Icon: BiBook,
    name: "Bachelor of Social Science (BSS)",
    institute: "Laskarpur Degree College",
    grade: "Second Division",
    year: "2004-2008",
    link: "https://www.facebook.com/PuthiaLaskarpurDegreeCollegeOfficial/",
    sub: "Political and Social Science",
  },
  {
    Icon: BiBook,
    name: "Higher Secondary School Certificate (HSC)",
    institute: "Laskarpur Degree College",
    grade: "GPA: 2.8 (Without Forth Subject)",
    year: "2002-2004",
    link: "https://www.facebook.com/PuthiaLaskarpurDegreeCollegeOfficial/",
    sub: "Humanities",
  },
  {
    Icon: BiBook,
    name: "Secondary School Certificate (SSC)",
    institute: "Puthia P.N Govt. High School",
    grade: "GPA: 2.63 (Without Forth Subject)",
    year: "2001-2002",
    link: "https://www.facebook.com/ppnmhs/",
    sub: "Humanities",
  },
];

export const techEducation: MyEdu[] = [
  {
    Icon: FaCode,
    name: "Web Presence Solution & Implementation",
    institute: "IsDB-BISEW IT Scholarship Programme",
    batch: "Round-15",
    year: "2011 - 2013 (1.8 years)",
    link: "http://www.isdb-bisew.org/",
    sub: "PHP, MYSQL, jQuery, JavaScript, HTML, CSS, .net and MCTS Certification, etc.",
  },
  {
    Icon: FaCode,
    name: "Mobile Application Development – Android",
    institute: "Skills for Employment Investment Program (SEIP)",
    batch: "Round-15",
    year: "2018 (4 Month)",
    link: "https://seip-fd.gov.bd/admission-circular/admission-circular-under-seip-basis-project/",
    sub: "Java, Kotlin, Android Studio etc.",
  },
  {
    Icon: FaCode,
    name: "Web Design & Development Training",
    institute: "Grameen Star IT Education",
    batch: "Batch-79",
    year: "2010 - (4 Month)",
    link: "https://www.mawbiz.com.bd/grameen-star-it-education",
    sub: "HTML, CSS, JavaScript, WordPress, Photoshop, Illustrator, Office Package etc",
  },
  {
    Icon: FaCode,
    name: "Database Programming Course",
    institute: "Bangladesh Technical Education Board (BTEB)",
    batch: "Batch-275",
    year: "2003 - (6 Month)",
    link: "https://btc.edu.bd/proposed-certificate-courses/",
    sub: "HTML, CSS, JavaScript, WordPress, Photoshop, Illustrator, Word, Excel, PowerPoint, Access, FoxPro etc",
  },
];

export const workExperience: MyEdu[] = [
  {
    Icon: IoGitNetworkSharp,
    name: "Web Developer",
    institute: "Wundermanthompson | Graphic People",
    batch: "",
    year: "Oct 01, 2015 - continue",
    link: "https://www.graphicpeoplestudio.com/",
    sub: "There are lots of work has been done during my service like Website Design and Development, EDM Development, HTML5 animated banner Design and Development, Drupal 8 Web site Development, Website maintenance, bug fixing, Site customization using AEM 6.0 and AEM 6.2 (Adobe Experience Manager), Application Development, Asset Validation, Client Communication, Using Bug tracking system like JIRA, trello and meeting the production deadline etc was my daily work. On the other hand I had few opportunity to work with world recognize and well known Brand like AdPeople, Wunderman, Hogarth, Microsoft and with DELL China, USA, Dell India Team which make me an ideal and professional in this sector.",
  },
  {
    Icon: IoGitNetworkSharp,
    name: "Web Developer",
    institute: "Athena Software Associates Ltd.",
    batch: "",
    year: "Jan 2014 – Feb 2015",
    link: "https://www.linkedin.com/company/athena-software-associates-ltd./about/",
    sub: "Web Design & Development, WordPress theme Customization, Plugins Development, Maintenance and SQA for Exchange House (Remittance Application) & ARMS (Bank Remittance Management System) Project.",
  },
  {
    Icon: IoGitNetworkSharp,
    name: "Web Application Developer",
    institute: "Transaction World Ltd.",
    batch: "",
    year: "March 2013 – Dec 2013",
    link: "https://www.pinterest.com.au/BeLocalToday/_saved/",
    sub: "Web Design & Development using PHP, MYSQL, Javascript, HTML CSS Technology & Technique.",
  },
  {
    Icon: IoGitNetworkSharp,
    name: "Jr. Software Developer",
    institute: "Smart Data Soft",
    batch: "",
    year: "January 16, 2012 - Feb 27, 2013",
    link: "https://smartdatasoft.com/",
    sub: "PSD Design and convert to HTML, WordPress theme development, Prestashop as well as PHP, MYSQL, Javascript, HTML CSS",
  },
];

export const skills: MySkills[] = [
  {
    Icon: BiCodeAlt,
    type: "frontend",
    name: "JavaScript",
    label: "Expert",
    percentage: "80%",
  },
  {
    Icon: BiCodeAlt,
    type: "frontend",
    name: "React.js",
    label: "Medium",
    percentage: "70%",
  },
  {
    Icon: BiCodeAlt,
    type: "frontend",
    name: "Next.js",
    label: "Medium",
    percentage: "75%",
  },
  {
    Icon: BiCodeAlt,
    type: "backend",
    name: "Node.js",
    label: "Medium",
    percentage: "60%",
  },
  ,
  {
    Icon: BiCodeAlt,
    type: "backend",
    name: "Express",
    label: "Medium",
    percentage: "65%",
  },
  {
    Icon: BiCodeAlt,
    type: "backend",
    name: "PHP",
    label: "Medium",
    percentage: "60%",
  },
  {
    Icon: BiCodeAlt,
    type: "backend",
    name: "Laravel",
    label: "Medium",
    percentage: "50%",
  },
  {
    Icon: BiCodeAlt,
    type: "backend",
    name: "API Development",
    label: "Medium",
    percentage: "65%",
  },
  {
    Icon: BiCodeAlt,
    type: "backend",
    name: "JSON",
    label: "Medium",
    percentage: "70%",
  },
  {
    Icon: BiCodeAlt,
    type: "style",
    name: "CSS3",
    label: "Expert",
    percentage: "75%",
  },
  {
    Icon: BiCodeAlt,
    type: "style",
    name: "SASS",
    label: "Expert",
    percentage: "70%",
  },

  {
    Icon: BiCodeAlt,
    type: "style",
    name: "Tailwind CSS",
    label: "Expert",
    percentage: "70%",
  },
  {
    Icon: BiCodeAlt,
    type: "style",
    name: "Material UI",
    label: "Expert",
    percentage: "60%",
  },
  {
    Icon: BiCodeAlt,
    type: "style",
    name: "Styled Component",
    label: "Expert",
    percentage: "75%",
  },
  {
    Icon: BiCodeAlt,
    type: "style",
    name: "module.css",
    label: "Expert",
    percentage: "77%",
  },
  {
    Icon: BiCodeAlt,
    type: "git",
    name: "Git & Github",
    label: "Medium",
    percentage: "75%",
  },
  {
    Icon: BiCodeAlt,
    type: "git",
    name: "Github Action - CI/CD",
    label: "low",
    percentage: "50%",
  },

  {
    Icon: BiCodeAlt,
    type: "design",
    name: "Photoshop",
    label: "Expert",
    percentage: "80%",
  },
  {
    Icon: BiCodeAlt,
    type: "design",
    name: "Illustrator",
    label: "Expert",
    percentage: "80%",
  },
  {
    Icon: BiCodeAlt,
    type: "design",
    name: "Figma",
    label: "Medium",
    percentage: "70%",
  },
  {
    Icon: BiCodeAlt,
    type: "design",
    name: "Adobe XD",
    label: "Medium",
    percentage: "70%",
  },
  {
    Icon: BiCodeAlt,
    type: "wordProcessing",
    name: "Office Package",
    label: "Expert",
    percentage: "85%",
  },
];
