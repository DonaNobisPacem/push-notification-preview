import React from "react";
import PropTypes from "prop-types";
import AppleRegularPushNotificationPreview from "./AppleRegularPushNotificationPreview";
import AppleRichPushNotificationPreview from "./AppleRichPushNotificationPreview";
import { checkIfEmojiPresent } from "./EmojiProcessor";

function ApplePushNotificationPreview(props) {

  const { message, title, image, actionButtons } = props;
  const emojiInTitle = checkIfEmojiPresent(title);
  const emojiInMessage = checkIfEmojiPresent(message);
  const richPush =
    emojiInTitle ||
    emojiInMessage ||
    image !== undefined ||
    actionButtons !== undefined;

  return (
    <React.Fragment>
      {!richPush && <AppleRegularPushNotificationPreview {...props} />}
      {richPush && <AppleRichPushNotificationPreview {...props} />}
    </React.Fragment>
  );
}

ApplePushNotificationPreview.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.string),
  appName: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
};

export default ApplePushNotificationPreview;
