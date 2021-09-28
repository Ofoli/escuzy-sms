import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const navItems = [
  { naviName: "Billing", naviLink: "/billing" },
  { naviName: "Services", naviLink: "/product-and-services" },
  { naviName: "Contact Us", naviLink: "/contact-us" },
  { naviName: "Download", naviLink: "/download" },
];
const getMenuButtons = (buttonsClass) => {
  return navItems.map(({ naviName, naviLink }, index) => {
    return (
      <Button
        {...{
          key: index,
          color: "inherit",
          to: naviLink,
          component: Link,
          className: buttonsClass,
        }}
      >
        {naviName}
      </Button>
    );
  });
};
const useStyles = makeStyles(() => ({
  header: {
    //  backgroundColor: "rgb(4, 26, 54)",
    background: "#0a1393",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  naviClass: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Header() {
  const { header, toolbar, naviClass } = useStyles();
  return (
    <header>
      <AppBar className={header} position="static">
        <Toolbar className={toolbar}>
          <Typography variant="h6" component="h1">
            Escuzy
          </Typography>
          <div>{getMenuButtons(naviClass)}</div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
