import { Grid } from "@material-ui/core";

import logo from "../../../Assets/logo.jpeg";
import colors from "../../../globals/colors";
import { Navigate, Company, Download } from "./rows";
import FollowUs from "./follow-us";
import { style } from "@mui/system";

const styles = {
  footer: {
    background: colors.background,
    width: "80%",
    padding: "0px 10% ", //top right buttom left
  },
  description: {
    width: "300px",
  },
  logoDiv: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "70px",
    display: "flex",
  },
  logo: {
    width: "60px",
    height: "50px",
    marginRight: "5px",
  },
  par: {
    wordSpacing: "5px",
    textAlign: "left",
    fontSize: "20px",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <Grid container direction="column">
        <Grid item>
          <Grid container>
            <Grid item xs={12} lg={3}>
              <div style={styles.description}>
                <div style={styles.logoDiv}>
                  <img style={styles.logo} src={logo} alt="logo" />
                  <h1>ESCUZY</h1>
                </div>
                <p style={styles.par}>
                  Escuzy platform is a school management system tailored to meet
                  the needs of any modern school setup. Thus the software arms
                  any educational institution with tools to effectively and
                  efficiently manage it's operations
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Navigate />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Download />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Company />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <FollowUs />
        </Grid>
        <Grid item>
          <p style={{ marginBottom: "10px" }}>
            copyright @2021 All rights reserved | Join the luxstek team today
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}
