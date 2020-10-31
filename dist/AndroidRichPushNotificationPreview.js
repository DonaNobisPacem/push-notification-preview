"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _lodash = _interopRequireDefault(require("lodash"));

var _core = require("@material-ui/core");

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _DefaultAndroidStyles = _interopRequireDefault(require("./DefaultAndroidStyles"));

var _EmojiProcessor = require("./EmojiProcessor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_DefaultAndroidStyles["default"]);

function AndroidRichPushNotificationPreview(props) {
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];

  var appName = props.appName,
      time = props.time,
      message = props.message,
      title = props.title,
      color = props.color,
      image = props.image,
      actionButtons = props.actionButtons,
      AppIcon = props.AppIcon;

  var loadAppIcon = function loadAppIcon() {
    return /*#__PURE__*/_react["default"].createElement(AppIcon, {
      className: classes.appIcon,
      style: {
        color: color
      }
    });
  };

  var maxDivWidth = 8.5 * (appName.length + time.length) + 64;
  var emojiInMessage = (0, _EmojiProcessor.checkIfEmojiPresent)(message);
  var emojiInTitle = (0, _EmojiProcessor.checkIfEmojiPresent)(title);

  var messageInTooltip = emojiInTitle && !emojiInMessage && _lodash["default"].isNil(image) && _lodash["default"].isEmpty(actionButtons);

  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.cardNotification
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.header
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    alignItems: "center",
    justify: "flex-start",
    spacing: 1,
    style: {
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, loadAppIcon()), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.appNameText,
    style: {
      color: color
    }
  }, appName), !expand && messageInTooltip && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    style: {
      maxWidth: "calc(100% - ".concat(maxDivWidth, "px)")
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.notificationPreview
  }, message)), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, time), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: function onClick() {
      setExpand(!expand);
    },
    size: "small"
  }, expand ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowUp["default"], {
    className: classes.controlIcon
  }) : /*#__PURE__*/_react["default"].createElement(_KeyboardArrowDown["default"], {
    className: classes.controlIcon
  }))))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    alignItems: "flex-start",
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: image && !expand ? classes.notificationTextWithImage : classes.notificationText
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    alignItems: "flex-start"
  }, title && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationTitle
  }, (0, _EmojiProcessor.parseEmojis)(title, "google")), message && (expand || !messageInTooltip) && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationMessage
  }, (0, _EmojiProcessor.parseEmojis)(message, "google")))), image !== undefined && !expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.notificationImagePreviewContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.notificationImagePreview,
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  })))), image !== undefined && expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationImageContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.notificationImage,
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  })), !_lodash["default"].isEmpty(actionButtons) && expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationActionsContainer
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    alignItems: "center",
    justify: "space-around",
    spacing: 1,
    style: {
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _lodash["default"].map(actionButtons, function (button) {
    return /*#__PURE__*/_react["default"].createElement(_core.Button, {
      key: "actionButtons-".concat(button)
    }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      item: true,
      className: classes.notificationActions,
      style: {
        color: color
      }
    }, button));
  })))))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.cardFooter
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, "Notification settings"), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, "Clear"))));
}

AndroidRichPushNotificationPreview.propTypes = {
  AppIcon: _propTypes["default"].object,
  appName: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string,
  message: _propTypes["default"].string,
  time: _propTypes["default"].string,
  title: _propTypes["default"].string
};
AndroidRichPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: _Notifications["default"]
};
var _default = AndroidRichPushNotificationPreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BbmRyb2lkUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIkRlZmF1bHRBbmRyb2lkU3R5bGVzIiwiQW5kcm9pZFJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJpbWFnZSIsImFjdGlvbkJ1dHRvbnMiLCJBcHBJY29uIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwibWF4RGl2V2lkdGgiLCJsZW5ndGgiLCJlbW9qaUluTWVzc2FnZSIsImVtb2ppSW5UaXRsZSIsIm1lc3NhZ2VJblRvb2x0aXAiLCJfIiwiaXNOaWwiLCJpc0VtcHR5Iiwicm9vdCIsImNhcmROb3RpZmljYXRpb24iLCJoZWFkZXIiLCJ3aGl0ZVNwYWNlIiwiYXBwTmFtZVRleHQiLCJtYXhXaWR0aCIsIm5vdGlmaWNhdGlvblByZXZpZXciLCJjb250cm9sSWNvbiIsIm5vdGlmaWNhdGlvblRleHRXaXRoSW1hZ2UiLCJub3RpZmljYXRpb25UZXh0Iiwibm90aWZpY2F0aW9uVGl0bGUiLCJub3RpZmljYXRpb25NZXNzYWdlIiwidW5kZWZpbmVkIiwibm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3Q29udGFpbmVyIiwibm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3IiwiYmFja2dyb3VuZEltYWdlIiwibm90aWZpY2F0aW9uSW1hZ2VDb250YWluZXIiLCJub3RpZmljYXRpb25JbWFnZSIsIm5vdGlmaWNhdGlvbkFjdGlvbnNDb250YWluZXIiLCJtYXAiLCJidXR0b24iLCJub3RpZmljYXRpb25BY3Rpb25zIiwiY2FyZEZvb3RlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJOb3RpZmljYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVdDLGdDQUFYLENBQWxCOztBQUVBLFNBQVNDLGtDQUFULENBQTRDQyxLQUE1QyxFQUFtRDtBQUVqRCxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsRUFBekI7O0FBRmlELGtCQUdyQixxQkFBUyxLQUFULENBSHFCO0FBQUE7QUFBQSxNQUcxQ0ssTUFIMEM7QUFBQSxNQUdsQ0MsU0FIa0M7O0FBQUEsTUFLL0NDLE9BTCtDLEdBYTdDSixLQWI2QyxDQUsvQ0ksT0FMK0M7QUFBQSxNQU0vQ0MsSUFOK0MsR0FhN0NMLEtBYjZDLENBTS9DSyxJQU4rQztBQUFBLE1BTy9DQyxPQVArQyxHQWE3Q04sS0FiNkMsQ0FPL0NNLE9BUCtDO0FBQUEsTUFRL0NDLEtBUitDLEdBYTdDUCxLQWI2QyxDQVEvQ08sS0FSK0M7QUFBQSxNQVMvQ0MsS0FUK0MsR0FhN0NSLEtBYjZDLENBUy9DUSxLQVQrQztBQUFBLE1BVS9DQyxLQVYrQyxHQWE3Q1QsS0FiNkMsQ0FVL0NTLEtBVitDO0FBQUEsTUFXL0NDLGFBWCtDLEdBYTdDVixLQWI2QyxDQVcvQ1UsYUFYK0M7QUFBQSxNQVkvQ0MsT0FaK0MsR0FhN0NYLEtBYjZDLENBWS9DVyxPQVorQzs7QUFjakQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSx3QkFDbEIsZ0NBQUMsT0FBRDtBQUFTLE1BQUEsU0FBUyxFQUFFWCxPQUFPLENBQUNZLE9BQTVCO0FBQXFDLE1BQUEsS0FBSyxFQUFFO0FBQUVMLFFBQUFBLEtBQUssRUFBRUE7QUFBVDtBQUE1QyxNQURrQjtBQUFBLEdBQXBCOztBQUdBLE1BQU1NLFdBQVcsR0FBRyxPQUFPVixPQUFPLENBQUNXLE1BQVIsR0FBaUJWLElBQUksQ0FBQ1UsTUFBN0IsSUFBdUMsRUFBM0Q7QUFDQSxNQUFNQyxjQUFjLEdBQUcseUNBQW9CVixPQUFwQixDQUF2QjtBQUNBLE1BQU1XLFlBQVksR0FBRyx5Q0FBb0JWLEtBQXBCLENBQXJCOztBQUNBLE1BQU1XLGdCQUFnQixHQUFJRCxZQUFZLElBQUksQ0FBQ0QsY0FBakIsSUFBbUNHLG1CQUFFQyxLQUFGLENBQVFYLEtBQVIsQ0FBbkMsSUFBcURVLG1CQUFFRSxPQUFGLENBQVVYLGFBQVYsQ0FBL0U7O0FBRUEsc0JBQ0UsZ0NBQUMsVUFBRDtBQUFNLElBQUEsU0FBUyxNQUFmO0FBQWdCLElBQUEsU0FBUyxFQUFDLEtBQTFCO0FBQWdDLElBQUEsU0FBUyxFQUFFVCxPQUFPLENBQUNxQjtBQUFuRCxrQkFDRSxnQ0FBQyxVQUFEO0FBQU0sSUFBQSxJQUFJLE1BQVY7QUFBVyxJQUFBLEVBQUUsRUFBRSxFQUFmO0FBQW1CLElBQUEsU0FBUyxFQUFFckIsT0FBTyxDQUFDc0I7QUFBdEMsa0JBQ0UsZ0NBQUMsVUFBRDtBQUNFLElBQUEsU0FBUyxNQURYO0FBRUUsSUFBQSxTQUFTLEVBQUMsS0FGWjtBQUdFLElBQUEsT0FBTyxFQUFDLFlBSFY7QUFJRSxJQUFBLFVBQVUsRUFBQyxRQUpiO0FBS0UsSUFBQSxPQUFPLEVBQUU7QUFMWCxrQkFPRSxnQ0FBQyxVQUFEO0FBQU0sSUFBQSxJQUFJLE1BQVY7QUFBVyxJQUFBLEVBQUUsRUFBRSxFQUFmO0FBQW1CLElBQUEsU0FBUyxFQUFFdEIsT0FBTyxDQUFDdUI7QUFBdEMsa0JBQ0UsZ0NBQUMsVUFBRDtBQUNFLElBQUEsU0FBUyxNQURYO0FBRUUsSUFBQSxTQUFTLEVBQUMsS0FGWjtBQUdFLElBQUEsVUFBVSxFQUFDLFFBSGI7QUFJRSxJQUFBLE9BQU8sRUFBQyxZQUpWO0FBS0UsSUFBQSxPQUFPLEVBQUUsQ0FMWDtBQU1FLElBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFVBQVUsRUFBRTtBQURQO0FBTlQsa0JBVUUsZ0NBQUMsVUFBRDtBQUFNLElBQUEsSUFBSTtBQUFWLEtBQVliLFdBQVcsRUFBdkIsQ0FWRixlQVdFLGdDQUFDLFVBQUQ7QUFDRSxJQUFBLElBQUksTUFETjtBQUVFLElBQUEsU0FBUyxFQUFFWCxPQUFPLENBQUN5QixXQUZyQjtBQUdFLElBQUEsS0FBSyxFQUFFO0FBQUVsQixNQUFBQSxLQUFLLEVBQUVBO0FBQVQ7QUFIVCxLQUtHSixPQUxILENBWEYsRUFrQkcsQ0FBQ0YsTUFBRCxJQUNDZ0IsZ0JBREQsaUJBRUcsZ0NBQUMsVUFBRDtBQUNFLElBQUEsSUFBSSxNQUROO0FBRUUsSUFBQSxLQUFLLEVBQUU7QUFDTFMsTUFBQUEsUUFBUSx3QkFBaUJiLFdBQWpCO0FBREg7QUFGVCxrQkFNRTtBQUFNLElBQUEsU0FBUyxFQUFFYixPQUFPLENBQUMyQjtBQUF6QixLQUNHdEIsT0FESCxDQU5GLENBcEJOLGVBK0JFLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLElBQUk7QUFBVixLQUFZRCxJQUFaLENBL0JGLGVBZ0NFLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLElBQUk7QUFBVixrQkFDRSxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JGLE1BQUFBLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxLQUhIO0FBSUUsSUFBQSxJQUFJLEVBQUM7QUFKUCxLQU1HQSxNQUFNLGdCQUNMLGdDQUFDLDJCQUFEO0FBQWlCLElBQUEsU0FBUyxFQUFFRCxPQUFPLENBQUM0QjtBQUFwQyxJQURLLGdCQUdMLGdDQUFDLDZCQUFEO0FBQW1CLElBQUEsU0FBUyxFQUFFNUIsT0FBTyxDQUFDNEI7QUFBdEMsSUFUSixDQURGLENBaENGLENBREYsQ0FQRixlQXdERSxnQ0FBQyxVQUFEO0FBQU0sSUFBQSxJQUFJLE1BQVY7QUFBVyxJQUFBLEVBQUUsRUFBRTtBQUFmLGtCQUNFLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLFNBQVMsTUFBZjtBQUFnQixJQUFBLFVBQVUsRUFBQyxZQUEzQjtBQUF3QyxJQUFBLE9BQU8sRUFBQztBQUFoRCxrQkFDRSxnQ0FBQyxVQUFEO0FBQU0sSUFBQSxJQUFJLE1BQVY7QUFBVyxJQUFBLFNBQVMsRUFBRXBCLEtBQUssSUFBSSxDQUFDUCxNQUFWLEdBQW1CRCxPQUFPLENBQUM2Qix5QkFBM0IsR0FBdUQ3QixPQUFPLENBQUM4QjtBQUFyRixrQkFDRSxnQ0FBQyxVQUFEO0FBQU0sSUFBQSxTQUFTLE1BQWY7QUFBZ0IsSUFBQSxVQUFVLEVBQUM7QUFBM0IsS0FDR3hCLEtBQUssaUJBQ0osZ0NBQUMsVUFBRDtBQUNFLElBQUEsSUFBSSxNQUROO0FBRUUsSUFBQSxFQUFFLEVBQUUsRUFGTjtBQUdFLElBQUEsU0FBUyxFQUFFTixPQUFPLENBQUMrQjtBQUhyQixLQUtHLGlDQUFZekIsS0FBWixFQUFtQixRQUFuQixDQUxILENBRkosRUFVR0QsT0FBTyxLQUFLSixNQUFNLElBQUksQ0FBQ2dCLGdCQUFoQixDQUFQLGlCQUNDLGdDQUFDLFVBQUQ7QUFDRSxJQUFBLElBQUksTUFETjtBQUVFLElBQUEsRUFBRSxFQUFFLEVBRk47QUFHRSxJQUFBLFNBQVMsRUFBRWpCLE9BQU8sQ0FBQ2dDO0FBSHJCLEtBS0csaUNBQVkzQixPQUFaLEVBQXFCLFFBQXJCLENBTEgsQ0FYSixDQURGLENBREYsRUF1QkdHLEtBQUssS0FBS3lCLFNBQVYsSUFBdUIsQ0FBQ2hDLE1BQXhCLGlCQUNDLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLElBQUksTUFBVjtBQUFXLElBQUEsU0FBUyxFQUFFRCxPQUFPLENBQUNrQztBQUE5QixrQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFFbEMsT0FBTyxDQUFDbUMsd0JBRHJCO0FBRUUsSUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsZUFBZSxnQkFBUzVCLEtBQVQ7QUFEVjtBQUZULElBREYsQ0F4QkosQ0FERixDQXhERixFQTRGR0EsS0FBSyxLQUFLeUIsU0FBVixJQUF1QmhDLE1BQXZCLGlCQUNDLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLElBQUksTUFBVjtBQUFXLElBQUEsRUFBRSxFQUFFLEVBQWY7QUFBbUIsSUFBQSxTQUFTLEVBQUVELE9BQU8sQ0FBQ3FDO0FBQXRDLGtCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUVyQyxPQUFPLENBQUNzQyxpQkFEckI7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUNMRixNQUFBQSxlQUFlLGdCQUFTNUIsS0FBVDtBQURWO0FBRlQsSUFERixDQTdGSixFQXNHRyxDQUFDVSxtQkFBRUUsT0FBRixDQUFVWCxhQUFWLENBQUQsSUFBNkJSLE1BQTdCLGlCQUNDLGdDQUFDLFVBQUQ7QUFDRSxJQUFBLElBQUksTUFETjtBQUVFLElBQUEsRUFBRSxFQUFFLEVBRk47QUFHRSxJQUFBLFNBQVMsRUFBRUQsT0FBTyxDQUFDdUM7QUFIckIsa0JBS0UsZ0NBQUMsVUFBRDtBQUNFLElBQUEsU0FBUyxNQURYO0FBRUUsSUFBQSxTQUFTLEVBQUMsS0FGWjtBQUdFLElBQUEsVUFBVSxFQUFDLFFBSGI7QUFJRSxJQUFBLE9BQU8sRUFBQyxjQUpWO0FBS0UsSUFBQSxPQUFPLEVBQUUsQ0FMWDtBQU1FLElBQUEsS0FBSyxFQUFFO0FBQ0xmLE1BQUFBLFVBQVUsRUFBRTtBQURQO0FBTlQsa0JBVUUsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0dOLG1CQUFFc0IsR0FBRixDQUFNL0IsYUFBTixFQUFxQixVQUFBZ0MsTUFBTTtBQUFBLHdCQUMxQixnQ0FBQyxZQUFEO0FBQVEsTUFBQSxHQUFHLDBCQUFtQkEsTUFBbkI7QUFBWCxvQkFDRSxnQ0FBQyxVQUFEO0FBQ0UsTUFBQSxJQUFJLE1BRE47QUFFRSxNQUFBLFNBQVMsRUFBRXpDLE9BQU8sQ0FBQzBDLG1CQUZyQjtBQUdFLE1BQUEsS0FBSyxFQUFFO0FBQUVuQyxRQUFBQSxLQUFLLEVBQUVBO0FBQVQ7QUFIVCxPQUtHa0MsTUFMSCxDQURGLENBRDBCO0FBQUEsR0FBM0IsQ0FESCxDQVZGLENBTEYsQ0F2R0osQ0FERixDQURGLGVBMElFLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLElBQUksTUFBVjtBQUFXLElBQUEsRUFBRSxFQUFFLEVBQWY7QUFBbUIsSUFBQSxTQUFTLEVBQUV6QyxPQUFPLENBQUMyQztBQUF0QyxrQkFDRSxnQ0FBQyxVQUFEO0FBQ0UsSUFBQSxTQUFTLE1BRFg7QUFFRSxJQUFBLFNBQVMsRUFBQyxLQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUMsVUFIVjtBQUlFLElBQUEsVUFBVSxFQUFDLFFBSmI7QUFLRSxJQUFBLE9BQU8sRUFBRTtBQUxYLGtCQU9FLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLElBQUk7QUFBViw2QkFQRixlQVFFLGdDQUFDLFVBQUQ7QUFBTSxJQUFBLElBQUk7QUFBVixhQVJGLENBREYsQ0ExSUYsQ0FERjtBQXlKRDs7QUFFRDdDLGtDQUFrQyxDQUFDOEMsU0FBbkMsR0FBK0M7QUFDN0NsQyxFQUFBQSxPQUFPLEVBQUVtQyxzQkFBVUMsTUFEMEI7QUFFN0MzQyxFQUFBQSxPQUFPLEVBQUUwQyxzQkFBVUUsTUFBVixDQUFpQkMsVUFGbUI7QUFHN0N6QyxFQUFBQSxLQUFLLEVBQUVzQyxzQkFBVUUsTUFINEI7QUFJN0MxQyxFQUFBQSxPQUFPLEVBQUV3QyxzQkFBVUUsTUFKMEI7QUFLN0MzQyxFQUFBQSxJQUFJLEVBQUV5QyxzQkFBVUUsTUFMNkI7QUFNN0N6QyxFQUFBQSxLQUFLLEVBQUV1QyxzQkFBVUU7QUFONEIsQ0FBL0M7QUFTQWpELGtDQUFrQyxDQUFDbUQsWUFBbkMsR0FBa0Q7QUFDaEQxQyxFQUFBQSxLQUFLLEVBQUUsT0FEeUM7QUFFaERILEVBQUFBLElBQUksRUFBRSxVQUYwQztBQUdoRE0sRUFBQUEsT0FBTyxFQUFFd0M7QUFIdUMsQ0FBbEQ7ZUFNZXBELGtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBHcmlkLCBJY29uQnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dVcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0Rvd25cIjtcbmltcG9ydCBEZWZhdWx0QW5kcm9pZFN0eWxlcyBmcm9tIFwiLi9EZWZhdWx0QW5kcm9pZFN0eWxlc1wiO1xuaW1wb3J0IHsgcGFyc2VFbW9qaXMsIGNoZWNrSWZFbW9qaVByZXNlbnQgfSBmcm9tIFwiLi9FbW9qaVByb2Nlc3NvclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKERlZmF1bHRBbmRyb2lkU3R5bGVzKTtcblxuZnVuY3Rpb24gQW5kcm9pZFJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyhwcm9wcykge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIGFwcE5hbWUsXG4gICAgdGltZSxcbiAgICBtZXNzYWdlLFxuICAgIHRpdGxlLFxuICAgIGNvbG9yLFxuICAgIGltYWdlLFxuICAgIGFjdGlvbkJ1dHRvbnMsXG4gICAgQXBwSWNvblxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGxvYWRBcHBJY29uID0gKCkgPT4gKFxuICAgIDxBcHBJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBJY29ufSBzdHlsZT17eyBjb2xvcjogY29sb3IgfX0gLz5cbiAgKTtcbiAgY29uc3QgbWF4RGl2V2lkdGggPSA4LjUgKiAoYXBwTmFtZS5sZW5ndGggKyB0aW1lLmxlbmd0aCkgKyA2NDtcbiAgY29uc3QgZW1vamlJbk1lc3NhZ2UgPSBjaGVja0lmRW1vamlQcmVzZW50KG1lc3NhZ2UpO1xuICBjb25zdCBlbW9qaUluVGl0bGUgPSBjaGVja0lmRW1vamlQcmVzZW50KHRpdGxlKTtcbiAgY29uc3QgbWVzc2FnZUluVG9vbHRpcCA9IChlbW9qaUluVGl0bGUgJiYgIWVtb2ppSW5NZXNzYWdlICYmIF8uaXNOaWwoaW1hZ2UpICYmIF8uaXNFbXB0eShhY3Rpb25CdXR0b25zKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkTm90aWZpY2F0aW9ufT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPntsb2FkQXBwSWNvbigpfTwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcE5hbWVUZXh0fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2FwcE5hbWV9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgeyFleHBhbmQgJiZcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5Ub29sdGlwICYmIChcbiAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogYGNhbGMoMTAwJSAtICR7bWF4RGl2V2lkdGh9cHgpYFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uUHJldmlld30+XG4gICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPnt0aW1lfTwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRFeHBhbmQoIWV4cGFuZCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXhwYW5kID8gKFxuICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93RG93biBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbEljb259IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17aW1hZ2UgJiYgIWV4cGFuZCA/IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZSA6IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dH0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICB7dGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25UaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUVtb2ppcyh0aXRsZSwgXCJnb29nbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIChleHBhbmQgfHwgIW1lc3NhZ2VJblRvb2x0aXApICYmXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUVtb2ppcyhtZXNzYWdlLCBcImdvb2dsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICB7aW1hZ2UgIT09IHVuZGVmaW5lZCAmJiAhZXhwYW5kICYmIChcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25JbWFnZVByZXZpZXdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAge2ltYWdlICE9PSB1bmRlZmluZWQgJiYgZXhwYW5kICYmIChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uSW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkltYWdlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IV8uaXNFbXB0eShhY3Rpb25CdXR0b25zKSAmJiBleHBhbmQgJiYgKFxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25BY3Rpb25zQ29udGFpbmVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWFyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICB7Xy5tYXAoYWN0aW9uQnV0dG9ucywgYnV0dG9uID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2BhY3Rpb25CdXR0b25zLSR7YnV0dG9ufWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRGb290ZXJ9PlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBzcGFjaW5nPXszfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbT5Ob3RpZmljYXRpb24gc2V0dGluZ3M8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5DbGVhcjwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuQW5kcm9pZFJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIEFwcEljb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5BbmRyb2lkUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiYmxhY2tcIixcbiAgdGltZTogXCIxMjozNCBQTVwiLFxuICBBcHBJY29uOiBOb3RpZmljYXRpb25zXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmRyb2lkUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3O1xuIl19