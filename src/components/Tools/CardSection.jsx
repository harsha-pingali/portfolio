import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard'; // Assuming Card component is in a separate file

import skillsData from './tooldata';
const CardSection = () => {
  // Sample data for the cards
  // const skillsData = [
  //   { id: 1, icon: () => <FaJava/>,    title:   'Java', description: 'Description 1' },
  //   { id: 2, icon: () => <FaPython />, title: 'Python', description: 'Description 2' },
  //   { id: 3, icon: () => <IoLogoJavascript />, title: 'JavaScript', description: 'Description 2' },
  //   { id: 6, icon: () => <FaHtml5 />, title: 'HTML', description: 'Description 2' },
  //   { id: 7, icon: () => <FaCss3Alt />, title: 'CSS', description: 'Description 2' },
  //   { id: 8, icon: () => <FaReact />, title: 'React Js', description: 'Description 2' },
  //   { id: 8, icon: () => <FaBootstrap />, title: 'BootStrap', description: 'Description 2' },
  //   { id: 8, icon: () => <SiChakraui />, title: 'Chakra UI', description: 'Description 2' },
  //   { id: 9, icon: () => <FaNodeJs />, title: 'Node Js', description: 'Description 2' },
  //   { id: 8, icon: () => <SiExpress />, title: 'Express Js', description: 'Description 2' },
  //   { id: 8, icon: () => <SiSpringboot />, title: 'Spring Boot', description: 'Description 2' },
  //   { id: 4, icon: () => <SiSqlite />, title: 'Sqlite', description: 'Description 2' },
  //   { id: 5, icon: () => <TbBrandMysql />, title: 'My SQL', description: 'Description 2' },
  //   { id: 8, icon: () => <SiMongodb />, title: 'MongoDB', description: 'Description 2' },
  //   { id: 8, icon: () => <SiPostman />, title: 'Postman', description: 'Description 2' },
  //   { id: 8, icon: () => <FaGitAlt />, title: 'Git', description: 'Description 2' },
  //   { id: 8, icon: () => <FaGithub />, title: 'Github', description: 'Description 2' },
  //   { id: 8, icon: () => <TbBrandVercel />, title: 'Vercel', description: 'Description 2' },
  //   { id: 8, icon: () => <SiRender />, title: 'Render', description: 'Description 2' },
  //   { id: 8, icon: () => <FaAws />, title: 'AWS', description: 'Description 2' },
  //   { id: 8, icon: () => <FaDocker />, title: 'Docker', description: 'Description 2' },
  //   // Add more skills as needed
  // ];

  return (
    <Section>
      {skillsData.map((skill) => (
        <SkillCard key={skill.id} Icon={skill.icon} title={skill.title} disc={skill.description} />
      ))}
    </Section>
  );
};

export default CardSection;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

// Define your icons (replace these with your actual icons)

// Add more icons as needed
