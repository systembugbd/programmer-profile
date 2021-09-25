import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { MyService } from "./type";

export const services: MyService[] = [
  {
    Icon: RiComputerLine,
    title: "Hello",
    disc: "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js, NextJs</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    disc: "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    disc: "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    disc: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    disc: "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];
