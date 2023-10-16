import classes from "./Contact.module.css";
import Title from "../../UI/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMapPin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Reveal from "../../UI/Reveal";
import { useRef, useEffect, useState } from "react";
import useChangeLinks from "../../hooks/useChangeLinks";
/* eslint-disable no-unused-vars */

const Contact = () => {
  const [run, setRun] = useState(false);
  const contact = useRef();
  useChangeLinks(contact.current, { root: null, threshold: 1 });
  useEffect(() => {
    setRun(true);
  }, []);
  return (
    <div ref={contact} id="Contact" className={classes.contact}>
      <div style={{ paddingBottom: "40px" }} className="container">
        <Reveal hidden={{ opacity: 0, x: -70 }} visible={{ opacity: 1, x: 0 }}>
          <Title>Contact Me</Title>
          <h2>Let's work together!</h2>
        </Reveal>
        <div className={classes["contact-boxes"]}>
          <Reveal
            hidden={{ opacity: 0, x: -70 }}
            visible={{ opacity: 1, x: 0 }}
            delay={0.5}
            className={classes["contact-box"]}
          >
            <div className={classes["contact-box-image"]}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className={classes["contact-box-content"]}>
              <h3>Mail</h3>
              <h4>nemanjagradic12345@gmail.com</h4>
            </div>
          </Reveal>
          <Reveal
            hidden={{ opacity: 0, x: -70 }}
            visible={{ opacity: 1, x: 0 }}
            className={classes["contact-box"]}
            delay={1}
          >
            <div className={classes["contact-box-image"]}>
              <FontAwesomeIcon icon={faMapPin} />
            </div>
            <div className={classes["contact-box-content"]}>
              <h3>Location</h3>
              <h4>Belgrade, Serbia</h4>
            </div>
          </Reveal>
          <Reveal
            hidden={{ opacity: 0, x: -70 }}
            visible={{ opacity: 1, x: 0 }}
            delay={1.5}
          >
            <div className={classes["contact-icons"]}>
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
      </div>
    </div>
  );
};

export default Contact;
