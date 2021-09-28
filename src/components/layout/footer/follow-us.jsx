import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FollowUs(props) {
  return (
    <div
      style={{
        height: "80px",
        lineHeight: "80px",
      }}
    >
      <Grid container>
        <Grid item xs={12} lg={3}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Accra, Ghana"
              secondary="Mateheko Samson Street"
            />
          </ListItem>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AttachEmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="admin@luxstek.com" />
          </ListItem>
        </Grid>
        <Grid item xs={12} lg={3}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneInTalkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="+233 547 036 245" />
          </ListItem>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div>
            <FacebookIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
