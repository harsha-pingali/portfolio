import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { Icon, title, disc } = props;

  return (
    <Container>
      <Content>
        <IconWrapper><Icon/></IconWrapper>
        <span>{title}</span>
      </Content>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: calc(12.5% - 1rem); /* Adjust the width for 8 cards in a row */
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;
  border: 2px solid #3498db;
  border-radius: 8px;
  margin: 0.5rem; /* Add margin for spacing between cards */
  
  

  @media (max-width: 768px) {
    width: calc(50% - 1rem); /* Adjust the width for 2 cards in a row on tablets */
  }

  @media (max-width: 480px) {
    width: calc(100% - 1rem); /* Adjust the width for 1 card in a row on mobile devices */
  }
  &:hover {
    transform:scale(1.101);
    font-weight:bold;
   /* text-decoration:underline;*/
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.span`
  font-size: 3rem; /* Decrease the icon size */
  margin-bottom: 0.5rem;
  color: #06a7e1;
`;
