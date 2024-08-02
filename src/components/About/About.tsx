import { Container } from "./styles";
import Harsh_kumar from "../../assets/file.png";
import cpp from "../../assets/icons/icons8-c.svg";
import python from "../../assets/icons/icons8-python.svg";
import htmlIcon from "../../assets/icons/icons8-html.svg";
import cssIcon from "../../assets/icons/icons8-css.svg";
import jsIcon from "../../assets/icons/icons8-javascript.svg";
// import jquery from "../../assets/icons/icons8-jquery.svg"
import reactIcon from "../../assets/icons/icons8-react-native.svg";

import boostrapIcon from "../../assets/icons/icons8-bootstrap.svg";
import tailwind from "../../assets/icons/icons8-tailwind-css.svg";

import api from "../../assets/icons/icons8-api.svg";
import npm from "../../assets/icons/icons8-npm.svg";
import express from "../../assets/icons/icons8-express-js.svg";
import nodeIcon from "../../assets/icons/icons8-nodejs.svg";
import mongodb from "../../assets/icons/icons8-mongodb.svg";

import github from "../../assets/icons/icons8-github.svg";
import vscode from "../../assets/icons/icons8-visual-studio.svg";
import googlecolab from "../../assets/icons/icons8-google-colab.svg";
import kaggle from "../../assets/icons/icons8-kaggle.svg";

import numpy from "../../assets/icons/icons8-numpy.svg";
import jupyter from "../../assets/icons/icons8-jupyter.svg";
import AI from "../../assets/icons/icons8-AI.svg";
import opencv from "../../assets/icons/icons8-opencv.svg";
import yolo from "../../assets/icons/icons8-yolo-200.svg";


import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi there! I'm Harsh Kumar, a C++ programmer and full-stack developer, as well as an AI and ML enthusiast.With a focus on AI and ML, I've been honing my skills in these fields, specializing in developing detection and prediction models.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          As a freelancer, I offer a range of services including building websites from scratch and creating AI detection and prediction models to meet the unique needs of my clients.
            </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Whether you're looking to establish a new online presence or enhance your existing one with cutting-edge AI capabilities, I'm here to help bring your ideas to life. Let's collaborate to turn your visions into reality!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={cpp} alt="cpp" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jquery} alt="Jquery" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={tailwind} alt="Tailwind" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={api} alt="api" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={npm} alt="npm" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={express} alt="express" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mongodb} alt="mongodb" />
            </ScrollAnimation>
          </div>


          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vscode} alt="vscode" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={github} alt="github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={googlecolab} alt="googlecolab" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={kaggle} alt="kaggle" />
            </ScrollAnimation>
          </div>

        

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={numpy} alt="numpy" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={jupyter} alt="jupyter" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={AI} alt="Ai" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={opencv} alt="opencv" />
            </ScrollAnimation>
          </div> 
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={yolo} alt="yolo" />
            </ScrollAnimation>
          </div>
          
          
          
          
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Harsh_kumar} alt="Harsh kumar" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
