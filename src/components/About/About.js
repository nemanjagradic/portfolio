import Title from "../../UI/Title";
import classes from "./About.module.css";
import Reveal from "../../UI/Reveal";
import { useState, useRef, useEffect } from "react";
import useChangeLinks from "../../hooks/useChangeLinks";
/* eslint-disable no-unused-vars */

const About = () => {
  const [run, setRun] = useState(false);
  const about = useRef();
  useChangeLinks(about.current, { root: null, threshold: 0.8 });
  useEffect(() => {
    setRun(true);
  }, []);
  return (
    <div ref={about} id="About" className={classes.about}>
      <div className="container">
        <div className={classes["about-row"]}>
          <div className={classes["about-col-img"]}>
            <Reveal
              hidden={{ opacity: 0, x: -30 }}
              visible={{ opacity: 1, x: 0 }}
            >
              <div className={classes["about-img"]}>
                <img src="./images/about-image.webp" alt="about-img" />
              </div>
            </Reveal>
          </div>
          <div className={classes["about-col-content"]}>
            <Reveal
              hidden={{ opacity: 0, x: 30 }}
              visible={{ opacity: 1, x: 0 }}
            >
              <Title className={classes["about-title"]}>About Me</Title>
              <p>
                I'm Nemanja Gradic, a dedicated junior front-end React developer
                with a passion for crafting seamless digital experiences. I
                embrace the fusion of creativity and precision, focusing on
                creating responsive, accessible, and aesthetically pleasing web
                applications. I relish the opportunity to contribute to
                innovative projects and thrive in dynamic team environments.
              </p>
              <h2>Tech Stack</h2>
              <div className={classes.icons}>
                <img
                  src="https://skillicons.dev/icons?i=html,css,javascript,react"
                  alt="icons"
                />
                <div className={classes.icon}>
                  <img src="images/chakraui.png" alt="chakraui icon"></img>
                </div>
                <img
                  src="https://skillicons.dev/icons?i=bootstrap"
                  alt="bootstrap icon"
                  style={{ marginLeft: "8px" }}
                />
                <div className={classes.icon}>
                  <img src="images/jira.png" alt="jira icon"></img>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
