import React from "react";
import { Row, Col } from "./Grid";
import About from "./About";
import { CSSTransitionGroup } from 'react-transition-group';
import "./AboutStyle.css";


const Nav = (props) => {
    return (
    <div className="overlay-container">
      <Row>
        <Col size="12">
          <div className="about-me-font" onClick={props.openAboutMe}>
            {props.showAboutMe ? (
              <div>
                <span className="align-right">&times; Close</span>
                <About />
              </div>
              ) : (
              <div>
                <span className="align-left">Alyssa Keimach</span>
                <span className="align-right">About</span>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Nav;

