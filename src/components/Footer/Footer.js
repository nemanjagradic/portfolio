import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div
      style={{ background: "#393939", padding: "30px 18%" }}
      className={classes.footer}
    >
      <h3 style={{ color: "#fff" }}>
        © 2023 by Nemanja Gradic. All Rights Reserved
      </h3>
    </div>
  );
};

export default Footer;
