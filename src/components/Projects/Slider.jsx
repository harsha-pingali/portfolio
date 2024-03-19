import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaChakra } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { SiExpress } from "react-icons/si";
import data from './Projectdata.js';
import { FaCircleChevronRight,FaCircleChevronLeft} from "react-icons/fa6";
// let data = [
//     {
//         img : "https://res.cloudinary.com/dpkdi73b4/image/upload/v1709525215/jgay3mtdx8i9l3dcm2sc.png",
//         name :"Blink Chat",
//         disc : "A MERN Stack based Application empowerd by the power of Socket.Io to enable a real time messaging system that allows construct and maintain single and group chats easily",
//         techstack:"MERN",
//         database:"MongoDB",
//         backend:"Node js",
//         frameworks:["Express JS", "Socket Io", "Chakra UI","JWT","Mongoose","Node Mailer"],
//         github:"https://github.com/harsha-pingali/blink_chat_frontend",
//         link :"https://blinkchatweb.vercel.app/",
//     },
//     {
//         img : "https://res.cloudinary.com/dpkdi73b4/image/upload/v1709526435/fpxlloin9yrnabytibys.png",
//         name :"Food Express..",
//         disc : "Developed a application based on Spring Boot to implement online food delivery system with the provision for the restaurants to update the Menus and also implemented micro services architecture using eureka",
//         github :"https://github.com/harsha-pingali/Jfsd_sdp",
//         techstack:"JFSD",
//         database:"My SQL",
//         backend:"Java",
//         frameworks:["Spring Boot", "Spring Data JPA", "Spring Boot Starter Mail","Stripe","Ajax","BootStrap","MicroServices Using Eureka"],
//     },
//     {
//         img : "https://res.cloudinary.com/dpkdi73b4/image/upload/v1709531902/m3pjiwsu2nxlkaydrxei.jpg",
//         name :"Text-To-Speech Converter",
//         disc : "Developed a simple Serverless web  application using React js & AWS Lambda that converts Text to speech utilizing AWS Ploy",
//         // link :"https://blinkchatweb.vercel.app/",
//         techstack:"React + AWS",
//         backend:"Node js (AWS Lambda run time)",
//         frameworks:["Chakra Ui","AWS services like IAM , Lambda , Poly , API Gateway","AWS IAM","AWS Lambda","Amazon Poly"]
        
//     },
//     {
//         img : "https://res.cloudinary.com/dpkdi73b4/image/upload/v1709691065/ymeqlj2xor6v7e2ynroi.jpg",
//         name :"Weather App",
//         disc : "Built a simple yet effecient application using HTMl , CSS & JS and utilized weather API to fech the data",
//         // link :"/",
//         techstack:"HTML + CSS + JS",
//         frameworks:["Rapid API (To fetch weather data)","Bootstrap"]
//     },
// ];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><FaCircleChevronLeft style={{fontSize:"1rem"}}/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><FaCircleChevronRight style={{fontSize:"1rem"}}/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: #0fa5e1;;
    cursor: pointer;
    color: white;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`