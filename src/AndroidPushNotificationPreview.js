import React from "react";
import PropTypes from "prop-types";
import AndroidRegularPushNotificationPreview from "./AndroidRegularPushNotificationPreview";
import AndroidRichPushNotificationPreview from "./AndroidRichPushNotificationPreview";
import { checkIfEmojiPresent } from "./EmojiProcessor";

function AndroidPushNotificationPreview(props) {
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
      {!richPush && <AndroidRegularPushNotificationPreview {...props} />}
      {richPush && <AndroidRichPushNotificationPreview {...props} />}
    </React.Fragment>
  );
}

AndroidPushNotificationPreview.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.string),
  appName: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
};

export default AndroidPushNotificationPreview;
