import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Particleground from "particleground-light";


class App extends React.Component {

  state = {
    showAboutMe: false,
    showProject: false
  };

  componentDidMount() {
    new Particleground(document.getElementById('particles'), {
        lineColor: '#0d4f48',
        dotColor: '#299c90'
    });
  };

  openAboutMe = () => {
    if (this.state.showAboutMe) {
      this.setState({ showAboutMe: false })
    } else {
      this.setState({ showAboutMe: true })
    }
  };

  openProject = (id) => {
    console.log(this.state.id);
    if (this.state.showProject) {
      this.setState({ showProject: false })
    } else {
      this.setState({ showProject: true })
    }
  };


  render() {
    return(
      <div id="particles" className="particle-style">
        <div id="intro" className="intro-style">
          <Nav
            showAboutMe={this.state.showAboutMe}
            openAboutMe={this.openAboutMe}
          />
          <Main
            showProject={this.state.showProject}
            openProject={this.openProject}
          />
        </div>
      </div>
    )
  }
}
  

export default App;
