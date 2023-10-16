import classes from "./MainInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Title from "../../UI/Title";
import Reveal from "../../UI/Reveal";
import { useEffect, useRef, useState } from "react";
import useChangeLinks from "../../hooks/useChangeLinks";
/* eslint-disable no-unused-vars */

const MainInfo = () => {
  const [run, setRun] = useState(false);
  const home = useRef();
  useChangeLinks(home.current, { root: null, threshold: 0.3 });
  useEffect(() => {
    setRun(true);
  }, []);
  return (
    <div
      ref={home}
      id="Home"
      style={{ marginTop: "70px" }}
      className="container"
    >
      <div className={classes["main-info-row"]}>
        <div className={classes["main-info-content"]}>
          <Reveal hidden={{ opacity: 0, y: 70 }} visible={{ opacity: 1, y: 0 }}>
            <h1>Nemanja Gradic</h1>
          </Reveal>
          <Reveal
            hidden={{ opacity: 0, x: -70 }}
            visible={{ opacity: 1, x: 0 }}
            delay={0.7}
          >
            <Title>Front-End React Developer</Title>
            <p>
              I'm a passionate developer based in Belgrade, and very diligent
              and dedicated to my work.
            </p>
            <div className={classes["main-info-icons"]}>
              <span>Follow me:</span>
              <a
                href="https://www.linkedin.com/in/nemanja-gradic-33230b1bb/"
                className={classes.icon}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/nemanjagradic"
                className={classes.icon}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </Reveal>
        </div>
        <div className={classes["main-info-image"]}>
          <Reveal hidden={{ opacity: 0, y: 50 }} visible={{ opacity: 1, y: 0 }}>
            <div className={classes["big-image"]}>
              <img src="./images/portfolio-img.png" alt="cv-img" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
