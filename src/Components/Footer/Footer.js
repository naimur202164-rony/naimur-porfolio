import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillFacebook, AiFillGithub, AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2022</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Naimur Rahman</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="https://www.facebook.com/naimur.rahman.946954"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/naimur202163"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/naimur-rahman-76aaa3216/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://youtube.com/c/SijeeshMiziha"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
            </li> */}
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;