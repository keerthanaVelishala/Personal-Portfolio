import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Velishala Keerthana </b>
                  and I am a master's student in <b className="purple">Computer Systems Analysis </b>
                    from <b className="purple">University of South Florida, </b>
                      Tampa, Florida.
                <br />
                <br />
                        My technical proficiency spans  &nbsp;
                  <b className="purple">
                    {" "}
                    Java, Springboot, Rest Architecture, Microservices Architecture, AWS Services and Agile methodologies.{" "}
                  </b>
                <br />
                <br />
                I am a passionate software developer with over 3 years of experience working in IT industry.
                  {/*<b className="purple">*/}
                  {/*  {" "}*/}
                  {/*  NodeJS, ReactJS, OpenCV, Pandas, and NumPy.{" "}*/}
                  {/*</b>*/}
                <br />
                {/*<br />*/}
                {/*Whenever possible, I also apply my passion for developing*/}
                {/*products with &nbsp;*/}
                {/*  /!*<b className="purple">*!/*/}
                {/*  /!*  {" "}*!/*/}
                {/*  /!*  Modern Javascript Library and Frameworks.*!/*/}
                {/*  /!*</b>*!/*/}
                {/*<br />*/}
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building new web applications and features. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
