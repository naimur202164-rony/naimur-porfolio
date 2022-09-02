import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/FDb1cfc/Time-Keeper.png"
              title="TimeKeeper —"
              description="Technologies :
              React Js, Node Js, Node Express, MongoDB, Firebase, React Bootstrap, Heroku.
              Project Overview :
              ● A fully functional, full-stack web app based on MERN.
              ● This is an e-commerce niche project, users can order any watch if they are
              logged in and can also view their orders on the Dashboard page.
              ● The admin panel is available to all. An admin can manage all
              orders and can add a service.
              "
              link="https://unruffled-hoover-560b6b.netlify.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/vjhB53v/Foods.png"
              title="Madang Food"
              description="Technologies :
              React Js, Node Js, Node Express, MongoDB, Firebase, React Bootstrap, Heroku.
              Project Overview :
              ● Functional food agency web application using MERN stack.
              ● Users can book their order and view their order details on the My Orders
              page.
              ● Implemented firebase authentication system with the google, private rout"
              link="https://hardcore-pare-4a9874.netlify.app/home"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/ws1B97b/Screenshot-2022-08-16-101103.png"
              title="Car-Dealer"
              description="Technologies :
              ● A fully functional, full-stack web app based on MERN.
              ● This is an e-commerce niche project, users can order any watch if they are logged
              in and can also view their orders on the Dashboard page.
              ● The admin panel is available to all. An admin can manage all
              orders and can add a service."
              link="https://assignment-twelve-tb.web.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/ZVBfWRD/Screenshot-2022-08-24-194428.png"
              title="Nike"
              description="The Project is created with Raw HTML AND CSS,Javascript"
              link="https://naimur202163.github.io/Nike/"
            />
          </Col>
          {/* Games */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/tssGyXM/Screenshot-2022-08-24-194351.png"
              title="Javscript Modal App"
              description="The Project is created with Raw HTML AND CSS,Javascript"
              link="https://naimur202163.github.io/Modal-Window-Javascript/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/58nQfgp/Screenshot-2022-08-25-093509.png"
              title="Honda Cbr"
              description="The Project is created with Raw HTML AND CSS,Javascript"
              link="https://naimur202163.github.io/Honda-Cbr-responsive/"
            />
          </Col>
          {/* Javascript --Clock  */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/vvVv48b/Screenshot-2022-08-26-122318.png"
              title="Clock"
              description="The Project is created with Raw HTML AND CSS,Javascript"
              link="https://naimur202163.github.io/Clock-With-Javascript/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/cXvT6xf/Screenshot-2022-08-26-193919.png"
              title="Image Slider"
              description="The Project is created with Raw HTML AND CSS,Javascript"
              link="https://naimur202163.github.io/explanding-card/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/vYJQ99t/Screenshot-2022-08-27-230645.png"
              title="Wakanda"
              description="The Project is created with Raw HTML and CSS"
              link="https://naimur202163.github.io/Wakana-Landing-Page/"
            />
          </Col>
          {/* Progress var */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/LNs8Yyf/Screenshot-2022-09-02-075508.png"
              title="Progress"
              description="The Project is created with Raw HTML and CSS"
              link="https://naimur202163.github.io/Progress-step-javascript/"
            />
          </Col>
          {/* Image-slider */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/k64SzJj/Screenshot-2022-09-02-121835.png"
              title="Image-Slider"
              description=" Project is created with Raw HTML and CSS"
              link="https://naimur202163.github.io/Image-Slider/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
