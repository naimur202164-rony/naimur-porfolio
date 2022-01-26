import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Mohammad Naimur Rahman </span>
            I am a English Horns Student from <span className="purple"> Cumilla, Bangladesh  .</span>
            <br />
            
            <br />I have completed  My College in  Science  Group from Jafarganj Mir Abdul Gafur College<br /> <br />
           <br />
            
           <br />
            <br />
            ⚡ Apart from this, I have done courses on  Full Stack Development .
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;