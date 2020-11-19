import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import Notifications from "@material-ui/icons/Notifications";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import DefaultAndroidStyles from "./DefaultAndroidStyles";

const useStyles = makeStyles(DefaultAndroidStyles);

function AndroidRegularPushNotificationPreview(props) {

  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const {
    appName,
    time,
    message,
    title,
    color,
    actionButtons,
    AppIcon
  } = props;
  const loadAppIcon = () => (
      <AppIcon className={classes.appIcon} style={{color: color}}/>
  );
  const maxDivWidth = 8.5 * (appName.length + time.length) + 64;

  return (
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={12} className={classes.cardNotification}>
          <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={1}
          >
            <Grid item xs={12} className={classes.header}>
              <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="flex-start"
                  spacing={1}
                  style={{
                    whiteSpace: "nowrap"
                  }}
              >
                <Grid item style={{padding: '4px 0 0 0'}}>{loadAppIcon()}</Grid>
                <Grid
                    item
                    className={classes.appNameText}
                    style={{color: color}}
                >
                  {appName} &bull; {time}
                </Grid>
              </Grid>
              <Grid item>
                <IconButton
                    onClick={() => {
                      setExpand(!expand);
                    }}
                    size="small"
                >
                  {expand ? (
                      <KeyboardArrowUp className={classes.controlIcon}/>
                  ) : (
                      <KeyboardArrowDown className={classes.controlIcon}/>
                  )}
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0 }}>
              <Grid container alignItems="flex-start">
                <Grid item xs={12} style={{ paddingTop: 0, paddingBottom: 0, lineHeight: '20px' }}>
                  <Grid item xs={12} className={classes.notificationTitle}>
                    {title}
                  </Grid>
                  {message && (
                      <Grid
                          item
                          xs={12}
                          className={
                            expand
                                ? classes.notificationMessage
                                : classes.notificationMessagePreview
                          }
                      >
                        {message}
                      </Grid>
                  )}
                </Grid>
              </Grid>
              {expand && actionButtons && <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}
                  className={classes.actionButtons}
              >
                {actionButtons.map(actionButton => <Grid item>{actionButton}</Grid>)}
              </Grid>
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

AndroidRegularPushNotificationPreview.propTypes = {
  AppIcon: PropTypes.object,
  appName: PropTypes.string.isRequired,
  color: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
};

AndroidRegularPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: Notifications
};

export default AndroidRegularPushNotificationPreview;

