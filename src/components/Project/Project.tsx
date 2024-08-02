import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/harshul-2002/Automatic_Number_Plate_Recognition" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Automatic Number Plate Recognition (ANPR) with YOLOv8 </h3>
              <p> 
              Welcome to the Automatic Number Plate Recognition (ANPR) project!.
              Trained meticulously for 100 epochs on a dataset of 5000 images with precise annotations, this project aims to deliver high accuracy and reliability in detecting and reading vehicle number plates. 
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>Yolov8</li> <li>OpenCV</li> <li>pytorch</li><li>Google Colab</li>
             </ul> </footer>
            
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/harshul-2002/shopping-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://shopping-app-tl5d.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>E-Commerce Web App</h3>
              <p> 
              I created website features for secure user authentication, product management, and admin controls, prioritizing seamless browsing and robust security with user feedback options.</p>
            </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>CSS</li> <li>Javascript</li><li>passport</li>
             </ul> </footer>
            <footer> <ul className="tech-list"> 
            <li>Express.js</li> <li>Node.js</li> <li>EJS</li><li>tailwind</li>  </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="hhttps://github.com/harshul-2002/Simpli-Law" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://simpli-law.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Simpli Law - The Legal AI</h3>
              <p>I crafted an AI chatbot app for SIH 2023 with Google signup and diverse authentication methods. It offers a smart toggle for user roles and a simple interface with admin controls for a smooth user experience.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>CSS</li> <li>Javascript</li><li>passport</li>
             </ul> </footer>
            <footer> <ul className="tech-list"> 
            <li>Express.js</li> <li>Node.js</li> <li>EJS</li><li>tailwind</li>  </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/harshul-2002/React-Ecomzy" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://ecomzy-shopping-store.netlify.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-Comzy React App</h3>
              <p>
                I developed a fully functional e-commerce clone frontend project  enabling users to seamlessly browse products, add them to cart, and proceed to checkout. By
                implementing responsive design principles, I ensured a consistent and user-friendly experience across various
                devices, showcasing my proficiency in modern web development technologies.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>CSS</li> <li>React</li><li>Tailwind</li>
             </ul> </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://hdking.co.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>HD King Spices</h3>
              <p>
              Crafted a dynamic frontend web application for a spice company, showcasing their diverse product range with an engaging and visually appealing design. Implemented user-friendly features for seamless navigation and product exploration.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/harshul-2002/Git-profile-card" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://gregarious-mandazi-464957.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Git Profile Card</h3>
              <p>
                  Developed a responsive GitHub profile card generator, fetching data from GitHub URLs for an impressive display of user profiles.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        
      </div>
    </Container>
  );
}