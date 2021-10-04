import { IconType } from "react-icons";
export interface MyService {
  title: string;
  disc: string;
  Icon: IconType;
}

export interface MyEdu {
  Icon: IconType;
  name: string;
  institute: string;
  grade?: number | string;
  batch?: string;
  year: string;
  link?: string;
  sub?: string;
}

export interface MyWorkExp {
  Icon: IconType;
  designation: string;
  company: string;
  duration: string;
}
export interface MySkills {
  Icon: IconType;
  type: string;
  name: string;
  label: string;
  percentage: string;
}
