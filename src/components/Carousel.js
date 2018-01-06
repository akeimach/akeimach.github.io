import React from "react";
import { Row, Col } from "./Grid";
import { React_Bootstrap_Carousel as ReactCarousel } from 'react-bootstrap-carousel';


const Carousel = (props) => {
  console.log(props);
  return (
    <div className="carousel-container">
      <Row>
        <Col size="12">
          <ReactCarousel
            animation={true}
            slideshowSpeed={7000}
            className="carousel-slide"
          >
          <div className="carousel-item">
            <a className="square-link" href="https://brewski-beer-review.herokuapp.com/" target="_blank">Brewski</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="http://alyssakeimach.com/cloudnv/" target="_blank">Cloud Identifier</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="https://glacial-fortress-86427.herokuapp.com/" target="_blank">Mígreni</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="https://enigmatic-savannah-23124.herokuapp.com/" target="_blank">Friend Finder</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="https://evening-tundra-35426.herokuapp.com/" target="_blank">Medium Article Scraper</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="https://salty-bayou-25776.herokuapp.com/" target="_blank">NYT Article Saver</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="http://alyssakeimach.com/star-wars-game/" target="_blank">Star Wars RPG</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="http://alyssakeimach.com/hangman-game/" target="_blank">Galactic Hangman</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="http://alyssakeimach.com/gif-generator/" target="_blank">Gif Generator</a>
          </div>
          <div className="carousel-item">
            <a className="square-link" href="http://alyssakeimach.com/trivia-game/" target="_blank">National Park Trivia</a>
          </div>
          </ReactCarousel>
        </Col>
      </Row>
    </div>
  );
};

export default Carousel;
