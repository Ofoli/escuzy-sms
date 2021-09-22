import Header from "./Header.jsx";
import Footer from "./footer/Footer.jsx";
import Banner from "../banner/banner";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <Header />
      <Banner />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
