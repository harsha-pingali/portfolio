import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { Tooltip } from 'antd';
const ProjectModal = (props) => {
  const {handleCancel,handleOk,open,data,title,rest} = props
  return (
    <>
      <Modal
        title={<u>{title}</u>}
        centered
        open={open}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <p>{data}</p>
        <ul style={{marginTop:"0.75rem"}}>
          <li style={{marginBottom:"0.75rem"}}> <b>Tech Stack</b> : {rest.techstack}</li>
          {rest.database ? (<li style={{marginBottom:"0.75rem"}}><b> Database </b>: {rest.database}</li>) : <></>}
          {rest.backend ? (<li style={{marginBottom:"0.75rem"}}><b> Backend Runtime </b>: {rest.backend}</li>) : <></>}
          {rest.frameworks ? (<li style={{marginBottom:"0.75rem"}}><b>Technologies used</b> :{rest.frameworks.map((item)=>{
            return(
              <p style={{marginLeft:"2rem",marginTop:"0.50rem"}}>{item}</p>
            )
          })}</li>):<></>}
        </ul>
        <div style={{display:"flex", flexDirection:"row" ,gap:"1rem"}}>
        <Tooltip title="Github">
        {rest.github && (
            <a href={rest.github} style={{textDecoration:"None"}}>
              <FaGithub style={{fontSize:"2rem"}} className="green" ></FaGithub>
            </a>
        )}
        </Tooltip>
        <Tooltip title="Demo">
         {rest.link!==undefined && (
            <a href={rest.link} style={{textDecoration:"None"}}>
              <CiGlobe style={{fontSize:"2rem"}} className="green"></CiGlobe>
            </a>
        )}
        </Tooltip>
        </div>
      </Modal>
    </>
  );
};
export default ProjectModal;
