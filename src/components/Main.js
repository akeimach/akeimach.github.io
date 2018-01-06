import React from "react";
import Carousel from "./Carousel";


const Main = (props) => {

  return (
    <div>
      <Carousel
        showProject={props.showProject}
        openProject={props.openProject}
      />
    </div>
  );
}

export default Main;
