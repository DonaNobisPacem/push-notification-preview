import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Fab } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Notifications from "@material-ui/icons/Notifications";
import DefaultAppleStyles from "./DefaultAppleStyles";

const useStyles = makeStyles(DefaultAppleStyles);

function AppleRegularPushNotificationPreview(props) {

  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const {
    appName,
    time,
    message,
    title,
    color,
    AppIcon
  } = props;
  const loadAppIcon = () => (
    <AppIcon className={classes.appIcon} style={{ color: color }} />
  );

  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      justify="flex-end"
    >
      {expand && (
        <Grid item>
          <Fab
            className={classes.closeIcon}
            onClick={() => setExpand(!expand)}
          >
            <Close />
          </Fab>
        </Grid>
      )}
      <Button
        className={classes.clickableNotification}
        onClick={() => setExpand(!expand)}
      >
        <Grid item xs={12} className={classes.cardNotification}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} className={classes.header}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                spacing={1}
                style={{
                  whiteSpace: "nowrap"
                }}
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="flex-start"
                    spacing={1}
                  >
                    <Grid item style={{ paddingBottom: 0 }}>{loadAppIcon()}</Grid>
                    <Grid
                      item
                      className={classes.appNameText}
                      style={{ color: 'rgb( 224, 74, 65)' }}
                    >
                      {appName}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ overflow: "hidden", color: 'rgb( 224, 74, 65)' }}>
                  {time}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              className={classes.notificationTitlePreview}
            >
              {title}
            </Grid>
            <Grid
              item
              xs={12}
              className={classes.notificationMessagePreview}
            >
              {message}
            </Grid>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
}

AppleRegularPushNotificationPreview.propTypes = {
  appIcon: PropTypes.object,
  appName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

AppleRegularPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: Notifications
};

export default AppleRegularPushNotificationPreview;
