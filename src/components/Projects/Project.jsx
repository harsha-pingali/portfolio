import React, { useState } from 'react'
import styled from 'styled-components';
import ProjectModal from '../utils/ProjectModal';
import { Button } from 'antd';

const Project = (props) => {
    const { id, img, disc, name, ...rest } = props.item;
    // console.log(rest)
    const [open, setOpen] = useState(false);
    const handleCancel = () => {
        setOpen(false)
    }
    const handleOk = () => {
        setOpen(true)
    }

    return (
        <Container className='project'>
            <img src={img} alt="project" />
            <div className="disc" key={id}>
                <h1>{name}</h1>
                {/* <p>{disc}</p> */}
                {/* <a href={link} target='_blank'>demo</a> */}
                <div className='d-flex row justify-content-center align-items-center'>
                    <Button onClick={() => handleOk()} size='small' style={{ marginLeft: "0.4rem" }} >View More</Button>
                </div>
                <ProjectModal open={open} handleCancel={handleCancel} handleOk={handleOk} data={disc} title={name} rest={rest} />
            </div>
        </Container>
    )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 0.98rem;
            color:#0fa5e1;
            font-weight:bold;
            margin-bottom:0.2rem;
        }
        h1:hover{
            text-decoration:underline;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

`