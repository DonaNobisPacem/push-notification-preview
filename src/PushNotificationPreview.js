import React from "react";
import PropTypes from "prop-types";
import AndroidPushNotificationPreview from "./AndroidPushNotificationPreview";
import ApplePushNotificationPreview from "./ApplePushNotificationPreview";

function PushNotificationPreview(props) {
  const { platform } = props;

  return (
    <React.Fragment>
      {platform==='android' &&
          <AndroidPushNotificationPreview
          {...props}
          />
      }
      {platform==='apple' &&
          <ApplePushNotificationPreview
          {...props}
          />
      }
    </React.Fragment>
  );
}

PushNotificationPreview.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.string),
  appName: PropTypes.string.isRequired,
  color: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string,
  platform: PropTypes.string.isRequired,
  time: PropTypes.string,
  title: PropTypes.string,
};

export default PushNotificationPreview;
