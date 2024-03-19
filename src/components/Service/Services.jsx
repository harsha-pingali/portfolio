import React from "react";
import { FaServer } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbCloudComputing } from "react-icons/tb";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h1>
          My <span className="green">Skill Set</span>
        </h1>
        <h4>I Work on</h4>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={IoCodeSlashOutline}
            title={"Frontend Development"}
            disc={'I specialize in crafting user interfaces using technologies such as HTML, CSS, and React.js, combining them with frameworks like Chakra UI, Bootstrap, and Ant Design to optimize and build highly responsive interfaces for enhanced user experiences, ensuring seamless interaction across all devices.'}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaServer}
            title={"Backend Development"}
            disc={`I create robust and efficient backend APIs using backend frameworks such as Express.js and Spring Boot, along with databases like MongoDB and MySQL. Additionally, I integrate popular server-side libraries to implement security and various other services to enhance the functionality of the backend systems.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={TbCloudComputing}
            title={"Cloud Computing & Devops"}
            disc={`I harness the power of various AWS services to innovate, deploy, and manage both new and existing services. My focus lies in utilizing AWS Lambda, API Gateway, DynamoDB, and other machine learning services to provide Backend as a Service (BaaS) solutions, delivering exceptional value to end users.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
  font-family:@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap')

`;
