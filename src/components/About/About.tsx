import { Container } from "./styles";
import Varun_Punia from "../../assets/red.jpg";
import cpp from "../../assets/icons/icons8-c.svg";
import python from "../../assets/icons/icons8-python.svg";
import htmlIcon from "../../assets/icons/icons8-html.svg";
import cssIcon from "../../assets/icons/icons8-css.svg";
import postman from "../../assets/postman.svg";
import jsIcon from "../../assets/icons/icons8-javascript.svg";
import reactIcon from "../../assets/icons/icons8-react-native.svg";
import figma from "../../assets/figma.png";
import canva from "../../assets/canva.png";
import next from "../../assets/next2.png";
import typescript from "../../assets/typescript.png";
import daisy from "../../assets/daisy2.png";
import sql from "../../assets/sql.png";
import java from "../../assets/java.png";
import firebase from "../../assets/firebase.png";
import airtable from "../../assets/airtable.svg";
import mixpanel from "../../assets/mixpanel.png";
import notion from "../../assets/notion.png";
import cloudinary from "../../assets/cloudinary.svg";
import git from "../../assets/git.png";
import materialUI from "../../assets/MaterialUI.svg";
import redux from "../../assets/Redux.svg";
import linear from "../../assets/linear-app-icon.png";
import vercel from "../../assets/vercel.png";
import chart from "../../assets/ChartJs.svg";
import davinci from "../../assets/davinci.png";
import obs from "../../assets/obs.png";

import boostrapIcon from "../../assets/icons/icons8-bootstrap.svg";
import tailwind from "../../assets/icons/icons8-tailwind-css.svg";

import api from "../../assets/icons/icons8-api.svg";
import npm from "../../assets/icons/icons8-npm.svg";
import express from "../../assets/icons/icons8-express-js.svg";
import nodeIcon from "../../assets/icons/icons8-nodejs.svg";
import mongodb from "../../assets/icons/icons8-mongodb.svg";

import github from "../../assets/github.svg";
import vscode from "../../assets/icons/icons8-visual-studio.svg";

import AI from "../../assets/icons/icons8-AI.svg";
import ScrollAnimation from "react-animate-on-scroll";
import resume from '../../assets/Varun-Punia-Resume.pdf';

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Varun Punia, competitive programmer and MERN stack
            developer. Solving complex DSA problems and developing useful
            websites is what I like the most.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Teaching is something I deeply enjoy and excel at breaking down
            complex topics into simple, understandable forms.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Apart from professional pursuits, I love philosophy and science. I'm
            an avid reader, too. For me, every day is a new opportunity to learn
            something new.{" "}
          </p>
        </ScrollAnimation>
        <br></br>

        <br></br>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <a className="button" href={resume} download="Varun-Punia-Resume.pdf"  style={{ padding: "1.4rem 6rem", fontSize : '1.5rem' }}>
            My resume
          </a>
        </ScrollAnimation>

        <br></br>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={cpp} alt="cpp" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={java} alt="java" />
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

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={redux} alt="redux" />
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
              <img src={next} alt="next" className="profile" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={typescript} alt="typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={chart} alt="chart" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={materialUI} alt="materialUI" />
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
              <img src={git} alt="git" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={AI} alt="Ai" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={postman} alt="postman" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={figma} alt="figma" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={canva} alt="canva" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={daisy} alt="daisy" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={sql} alt="sql" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={firebase} alt="firebase" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={airtable} alt="airtable" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mixpanel} alt="mixpanel" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={notion} alt="notion" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={cloudinary} alt="cloudinary" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={linear} alt="linear" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vercel} alt="vercel" className="profile" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={obs} alt="obs" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={davinci} alt="davinci" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={Varun_Punia} alt="Varun Punia" className="profile" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
