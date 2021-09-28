import Header from "./Header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
