import classes from "./h_banner.module.css";

import { Grid } from "@mui/material";
import EButton from "../../../widgets/Button/eButton";
/*
    page_title
    page_description
    download button
    4-quick stats [register,grade,manage and monitor]
*/

export default function HomeBanner() {
  return (
    <div className={classes.main_banner}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className={classes.banner_text}>
            <h2>Manage Your School</h2>
            <p>The ultimate resource to prepare for coding interviews.</p>
            <p>Everything you need, in one streamlined platform.</p>
            <EButton
              name="Download"
              xStyle={{ marginLeft: "15px", marginTop: "15px" }}
            />
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.banner_stats}>stats</div>
        </Grid>
      </Grid>
    </div>
  );
}
