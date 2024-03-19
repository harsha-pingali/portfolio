import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { IoDocumentText } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsGithub,BsLinkedin } from "react-icons/bs";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Sai Harsha</h1>
          <h3>Web Developer and Cloud Computing Enthusiast</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            iusto. Adipisci in qui officia provident tenetur sequi, deserunt
            corporis quos?
          </p>
          <button>View My Resume <IoDocumentText style={{fontSize:"20px"}}/> </button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <BsLinkedin style={{fontSize:'1.5rem'}}/>
                </a>
              </span>
              <span>
                <a href="/">
                  <BsGithub style={{fontSize:'1.5rem'}}/>
                </a>
              </span>
              <span>
                <a href="/">
                  <BsInstagram style={{fontSize:'1.5rem'}}/>
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://res.cloudinary.com/dpkdi73b4/image/upload/v1709399726/haipzj42rpylm0esrsbc.png"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
  padding: 0.7rem 2rem;
  margin-top: 3rem;
  cursor: pointer;
  background-color: #0fa5e1; /* Transparent background for glass effect */
  border: none;
  border-radius:0.75rem;
  font-size:20px;
  color: #fff;
  font-weight: 500;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15); /* Subtle glass effect */
  transition: box-shadow 0.2s ease-in-out; /* Smooth transition on hover */

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
  }
}

`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 3.3rem;
      height: 3rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #0fa5e1;
      position: relative;
      transition: transform 400ms ease-in-out;
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    span:hover{
      transform:scale(1.12);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 21rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
