import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <h3 className={`${classes.title} ${props.className}`}>{props.children}</h3>
  );
};

export default Title;
