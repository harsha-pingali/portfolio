import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { FaReact,FaServer } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { TbCloudComputing } from "react-icons/tb";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h4>
          My <span className="green">Skill Set</span>
        </h4>
        <h1>I Work on</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={IoCodeSlashOutline}
            title={"FrontEnd Development"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaServer}
            title={"Backend Development"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={TbCloudComputing}
            title={"Cloud Computing & Devops"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
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
`;
