import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from "react-icons/io";
import {AiOutlineStar} from "react-icons/ai";
import {Badge} from "antd";
const ClientSlider = (props) => {
    const {name, skills, img_url, stars, disc} = props.item;
  return (
    <Container>
        <Header>
            {/* <span className='quote'><IoIosQuote/></span> */}
            {/* <div>
                {Array(stars).fill().map((_, i) => (
                    <span className='star' key={i}>
                        <AiOutlineStar/>
                    </span>
                ))}
            </div> */}
        </Header>
        <Footer>
            <img src={img_url} alt={name} />
            <div>
                <h1 style={{margin:"1rem"}}>{name}</h1>
                <div className='badge-container'>
                { skills && skills.map((i)=>{
                    return(
                        <Badge count={i} color='#0fa5e1' size='small'/>
                    )
                })}
                </div>
            </div>
        </Footer>
    </Container>
  )
}

export default ClientSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #01be96;
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 7rem;
        height: 7rem;
        object-fit: cover;
        @media(max-width:400px){
            width:5rem;
            height:5rem
        }
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
     .badge-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem; /* Adjust the gap as needed */
         padding:1rem
         @media (max-width: 800px) {
        justify-content: center; /* Center badges horizontally on smaller screens */
        margin-top: 0.5rem; /* Add margin for spacing between badges and text */
    }

    
    }
`