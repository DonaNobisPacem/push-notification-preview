import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash";
import { Grid, Button, Fab } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Notifications from "@material-ui/icons/Notifications";
import DefaultAppleStyles from "./DefaultAppleStyles";
import { parseEmojis } from "./EmojiProcessor";

const useStyles = makeStyles(DefaultAppleStyles);

function AppleRichPushNotificationPreview(props) {

  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const {
    appName,
    time,
    message,
    title,
    color,
    AppIcon,
    image,
    actionButtons
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
            <Close style={{ color: 'rgb( 224, 74, 65)' }} />
          </Fab>
        </Grid>
      )}
      <Button
        className={classes.clickableNotification}
        onClick={() => setExpand(!expand)}
      >
        <Grid
          item
          xs={12}
          className={
            image && expand
              ? classes.cardNotificationWithImage
              : classes.cardNotification
          }
        >
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
            <Grid item xs={12}>
              <Grid container direction="" alignItems="flex-start" justify="space-between">
                <Grid item className={image && !expand ? classes.notificationTextWithImage : classes.notificationText}>
                  {title && (
                    <Grid
                      item
                      xs={12}
                      className={classes.notificationTitlePreview}
                    >
                      {parseEmojis(title, "apple")}
                    </Grid>
                  )}
                  {message && (
                    <Grid
                      item
                      xs={12}
                      className={classes.notificationMessagePreview}
                    >
                      {parseEmojis(message, "apple")}
                    </Grid>
                  )}
                </Grid>
                {image !== undefined && !expand && (
                  <Grid className={classes.notificationImagePreviewContainer}>
                    <div
                      className={classes.notificationImagePreview}
                      style={{
                        backgroundImage: `url(${image})`
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Button>
      {image && expand && (
        <Grid
          item
          className={classes.notificationImage}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      )}
      {!_.isEmpty(actionButtons) && expand && (
        <Grid item xs={12}>
          <ul className={classes.notificationActions}>
            {_.map(actionButtons, button => (
              <li key={`actionButtons-${button}`}>
                <Button
                  className={classes.notificationActionsButton}
                >
                  {button}
                </Button>
              </li>
            ))}
          </ul>
        </Grid>
      )}
    </Grid>
  );
}

AppleRichPushNotificationPreview.propTypes = {
  appIcon: PropTypes.object,
  appName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string
};

AppleRichPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: Notifications
};

export default AppleRichPushNotificationPreview;
