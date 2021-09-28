import classes from "./banner.module.css";

const Banner = (props) => {
  return <div className={classes.mainBanner}>{props.children}</div>;
};
export default Banner;
