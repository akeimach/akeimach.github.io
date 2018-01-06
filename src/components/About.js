import React from "react";
import { Row, Col } from "./Grid";
import { CSSTransitionGroup } from 'react-transition-group';
import "./AboutStyle.css";

const About = (props) => {
  return (
    <div className="about-me-container">
      <CSSTransitionGroup
        transitionName="about-me-transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <Row>
          <Col size="1"></Col>
          <Col size="3">
            <Row>
              <img className="profile-img" src="./images/profile_1.jpg" alt="Alyssa at the Grand Canyon" />
            </Row>
            <br />
            <Row>
              <ul>
                <li><a href="#" rel="noopener noreferrer">alyssakeimach@gmail.com</a></li>
                <li><a href="https://github.com/akeimach" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/akeimach/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://stackoverflow.com/users/4525770/alyssakm" target="_blank" rel="noopener noreferrer">StackOverflow</a></li>
              </ul>
            </Row>
          </Col>
          <Col size="1"></Col>
          <Col size="6">
            <br />
            <p>I’m a critical thinker who pays attention to detail, and my degree is in Computational Physics. For the past two years I worked as an aerospace software engineer before pivoting to web development, where I enjoy its potential to impact large audiences. In my free time I work as a math and physics tutor, breaking down complex concepts for students to understand instead of memorize. I seek to create technology that will directly empower these students and other end users in the scientific community.</p>
            <br />
            <p>Reach out, I'd love to talk!</p>
            <br />
          </Col>
          <Col size="1"></Col>
        </Row>
      </CSSTransitionGroup>
    </div>
  );
}

export default About;