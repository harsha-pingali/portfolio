import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandMysql, TbBrandVercel } from "react-icons/tb";
import {
  SiSqlite,
  SiChakraui,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiRender,
  SiPostman,
} from "react-icons/si";

const skillsData = [
  {
    id: 1,
    icon: () => <FaJava />,
    title: "Java",
    description: "Description 1",
  },
  {
    id: 2,
    icon: () => <FaPython />,
    title: "Python",
    description: "Description 2",
  },
  {
    id: 3,
    icon: () => <IoLogoJavascript />,
    title: "JavaScript",
    description: "Description 3",
  },
  {
    id: 4,
    icon: () => <FaHtml5 />,
    title: "HTML",
    description: "Description 4",
  },
  {
    id: 5,
    icon: () => <FaCss3Alt />,
    title: "CSS",
    description: "Description 5",
  },
  {
    id: 6,
    icon: () => <FaReact />,
    title: "React Js",
    description: "Description 6",
  },
  {
    id: 7,
    icon: () => <FaBootstrap />,
    title: "BootStrap",
    description: "Description 7",
  },
  {
    id: 8,
    icon: () => <SiChakraui />,
    title: "Chakra UI",
    description: "Description 8",
  },
  {
    id: 9,
    icon: () => <FaNodeJs />,
    title: "Node Js",
    description: "Description 9",
  },
  {
    id: 10,
    icon: () => <SiExpress />,
    title: "Express Js",
    description: "Description 10",
  },
  {
    id: 11,
    icon: () => <SiSpringboot />,
    title: "Spring Boot",
    description: "Description 11",
  },
  {
    id: 12,
    icon: () => <SiSqlite />,
    title: "Sqlite",
    description: "Description 12",
  },
  {
    id: 13,
    icon: () => <TbBrandMysql />,
    title: "My SQL",
    description: "Description 13",
  },
  {
    id: 14,
    icon: () => <SiMongodb />,
    title: "MongoDB",
    description: "Description 14",
  },
  {
    id: 15,
    icon: () => <SiPostman />,
    title: "Postman",
    description: "Description 15",
  },
  {
    id: 16,
    icon: () => <FaGitAlt />,
    title: "Git",
    description: "Description 16",
  },
  {
    id: 17,
    icon: () => <FaGithub />,
    title: "Github",
    description: "Description 17",
  },
  {
    id: 18,
    icon: () => <TbBrandVercel />,
    title: "Vercel",
    description: "Description 18",
  },
  {
    id: 19,
    icon: () => <SiRender />,
    title: "Render",
    description: "Description 19",
  },
  { id: 20, icon: () => <FaAws />, title: "AWS", description: "Description 20" },
  {
    id: 21,
    icon: () => <FaDocker />,
    title: "Docker",
    description: "Description 21",
  },
  // Add more skills as needed
];

export default skillsData;
