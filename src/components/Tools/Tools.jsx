import React from 'react'
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import Card from '../Service/Card';
import CardSection from './CardSection';
const Tools = () => {
  return (
    <Container id="tools">
      <Slide direction="left">
        <h1>
          <span className="green">Languages , Tools &  Frameworks</span>
        </h1>
        <h3>that i work with</h3>
        <Cards>
          <CardSection/>
        </Cards>
      </Slide>
      </Container>
  )
}
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



export default Tools