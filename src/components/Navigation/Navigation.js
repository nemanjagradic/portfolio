import classes from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { linkActions } from "../../store/links-slice";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navigation() {
  const [isShowNav, setIsShowNav] = useState(false);
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.isActive);
  const sectionId = useSelector((state) => state.sectionId);
  const links = ["Home", "About", "Projects", "Contact"];
  const hoverHandler = (item) => {
    const active = item;
    dispatch(linkActions.setActive({ active }));
  };

  return (
    <>
      <nav className={classes["responsive-nav"]}>
        <h3>Portfolio NG</h3>
        <FontAwesomeIcon icon={faBars} onClick={() => setIsShowNav(true)} />
        <AnimatePresence>
          {isShowNav && (
            <motion.div
              initial={{ left: -500, opacity: 0.5 }}
              animate={{ left: 0, opacity: 1 }}
              exit={{ left: -500, opacity: 0 }}
              className={classes["responsive-nav-list"]}
              transition={{ duration: 0.5 }}
            >
              <div
                className={classes.close}
                onClick={() => setIsShowNav(false)}
              >
                <FontAwesomeIcon icon={faClose} />
              </div>
              <ul>
                <h3>Portfolio NG</h3>
                {links.map((link) => {
                  return (
                    <li
                      key={link}
                      onMouseEnter={hoverHandler.bind(null, link)}
                      onMouseLeave={() => {
                        dispatch(linkActions.setActive({ sectionId }));
                      }}
                    >
                      <Link
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        onClick={() => setIsShowNav(false)}
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <nav className={classes["main-nav"]}>
        <h3>Portfolio NG</h3>
        <ul>
          {links.map((link) => {
            return (
              <li
                key={link}
                onMouseEnter={hoverHandler.bind(null, link)}
                onMouseLeave={() => {
                  dispatch(linkActions.setActive({ sectionId }));
                }}
              >
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {link}
                </Link>
                {isActive === link && (
                  <motion.div
                    layoutId="active-listitem"
                    className={classes.active}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
