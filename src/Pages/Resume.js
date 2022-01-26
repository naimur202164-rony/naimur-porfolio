import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../Assets/Naimur.pdf";
import Particle from "../Components/Particles/Particle";




function Resume() {
    return (
        <Container fluid className="resume-section">
        <Particle />
        
      {/* <img src={resume} alt="error" style={{width:"70%" , marginLeft:"15%", marginBottom:"5%" }}/>
      <img src={project} alt="error" style={{width:"70%" , marginLeft:"15%" ,marginBottom:"5%" }}/> */}
      
        <Container>
          <Row style={{ justifyContent: "center", position: "relative"}}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          </Container>
    </Container>
    )
}

export default Resume
