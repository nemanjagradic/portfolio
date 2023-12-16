import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Title from "../../UI/Title";
import classes from "./Projects.module.css";
import Reveal from "../../UI/Reveal";
import useChangeLinks from "../../hooks/useChangeLinks";
import { useState, useEffect, useRef } from "react";
/* eslint-disable no-unused-vars */

const Projects = () => {
  const [run, setRun] = useState(false);
  const projects = useRef();
  useChangeLinks(projects.current, { root: null, threshold: 0.25 });
  useEffect(() => {
    setRun(true);
  }, []);
  return (
    <div ref={projects} id="Projects">
      <div className="container">
        <Reveal hidden={{ opacity: 0, x: -70 }} visible={{ opacity: 1, x: 0 }}>
          <Title>Projects</Title>
        </Reveal>
        <div className={classes["project-row"]}>
          <Reveal
            hidden={{ opacity: 0, y: 70 }}
            visible={{ opacity: 1, y: 0 }}
            className={classes["project-col"]}
          >
            <div className={classes["project"]}>
              <div className={classes["project-content"]}>
                <h3>Nouhotel - Booking Room Website</h3>
                <p>
                  Booking application that provides users with the reservation
                  of luxury rooms. On the application, you can choose a room,
                  number of adults, children and length of stay.
                </p>
                <div className={classes["project-programs"]}>
                  <span className={classes.program}>React</span>
                  <span className={classes.program}>CSS</span>
                  <span className={classes.program}>Bootstrap</span>
                </div>
                <div className={classes["project-view"]}>
                  <a href="https://github.com/nemanjagradic/Nouhotel">
                    Code <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://nouhotel.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </div>
              </div>
              <div className={classes["project-img"]}>
                <img src="./images/project-3.png" alt="project-3" />
              </div>
            </div>
          </Reveal>
          <Reveal
            hidden={{ opacity: 0, y: 70 }}
            visible={{ opacity: 1, y: 0 }}
            className={classes["project-col"]}
          >
            <div className={classes["project"]}>
              <div className={classes["project-content"]}>
                <h3>Ico crypto - Cryptocurrency Website</h3>
                <p>
                  Coindom is a crypto app that allows users to search for
                  information about various cryptocurrencies in real-time.
                </p>
                <div className={classes["project-programs"]}>
                  <span className={classes.program}>React</span>
                  <span className={classes.program}>SCSS</span>
                </div>
                <div className={classes["project-view"]}>
                  <a href="https://github.com/nemanjagradic/Ico-cryptocurrency">
                    Code <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://ico-crypto.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </div>
              </div>
              <div className={classes["project-img"]}>
                <img src="./images/project-2.png" alt="project-3" />
              </div>
            </div>
          </Reveal>
          <Reveal
            hidden={{ opacity: 0, y: 70 }}
            visible={{ opacity: 1, y: 0 }}
            className={classes["project-col"]}
          >
            <div className={classes["project"]}>
              <div className={classes["project-content"]}>
                <h3>Miini - E-Commerce Website</h3>
                <p>
                  Main focus of this website is on simplicity to make easier so
                  that users can find and buy a specific product with ease.
                </p>
                <div className={classes["project-programs"]}>
                  <span className={classes.program}>React</span>
                  <span className={classes.program}>Tailwind CSS</span>
                </div>
                <div className={classes["project-view"]}>
                  <a href="https://github.com/nemanjagradic/miini-e-commerce">
                    Code <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://miini-e-commerce.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </div>
              </div>
              <div className={classes["project-img"]}>
                <img src="./images/project-1.png" alt="project-3" />
              </div>
            </div>
          </Reveal>
          <Reveal
            hidden={{ opacity: 0, y: 70 }}
            visible={{ opacity: 1, y: 0 }}
            className={classes["project-col"]}
          >
            <div className={classes["project"]}>
              <div className={classes["project-content"]}>
                <h3>Realestate.com - Real Estate Website</h3>
                <p>
                  Real estate website where users can search for diverse range
                  of properties available for purchase or rent with various
                  filters and location to fulfill their needs.
                </p>
                <div className={classes["project-programs"]}>
                  <span className={classes.program}>React</span>
                  <span className={classes.program}>Chakra UI</span>
                </div>
                <div className={classes["project-view"]}>
                  <a href="https://github.com/nemanjagradic/Real-estate">
                    Code <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://realestatecom.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </div>
              </div>
              <div className={classes["project-img"]}>
                <img src="./images/project-4.png" alt="project-4" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Projects;
