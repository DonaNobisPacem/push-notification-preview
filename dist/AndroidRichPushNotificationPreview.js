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
    item: true,
    style: {
      paddingBottom: 0
    }
  }, loadAppIcon()), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.appNameText,
    style: {
      color: color
    }
  }, appName, " \u2022 ", time)), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
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
  })))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    style: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    alignItems: "flex-start",
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: image && !expand ? classes.notificationTextWithImage : classes.notificationText,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      lineHeight: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    alignItems: "flex-start"
  }, title && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationTitle
  }, (0, _EmojiProcessor.parseEmojis)(title, "google")), message && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: expand ? classes.notificationMessage : classes.notificationMessagePreview
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
    justify: "flex-start",
    alignItems: "center",
    spacing: 2,
    style: {
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _lodash["default"].map(actionButtons, function (button) {
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      item: true,
      className: classes.notificationActions,
      style: {
        color: color
      }
    }, button);
  })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BbmRyb2lkUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIkRlZmF1bHRBbmRyb2lkU3R5bGVzIiwiQW5kcm9pZFJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJpbWFnZSIsImFjdGlvbkJ1dHRvbnMiLCJBcHBJY29uIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwibWF4RGl2V2lkdGgiLCJsZW5ndGgiLCJlbW9qaUluTWVzc2FnZSIsImVtb2ppSW5UaXRsZSIsIm1lc3NhZ2VJblRvb2x0aXAiLCJfIiwiaXNOaWwiLCJpc0VtcHR5Iiwicm9vdCIsImNhcmROb3RpZmljYXRpb24iLCJoZWFkZXIiLCJ3aGl0ZVNwYWNlIiwicGFkZGluZ0JvdHRvbSIsImFwcE5hbWVUZXh0IiwiY29udHJvbEljb24iLCJwYWRkaW5nVG9wIiwibm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZSIsIm5vdGlmaWNhdGlvblRleHQiLCJsaW5lSGVpZ2h0Iiwibm90aWZpY2F0aW9uVGl0bGUiLCJub3RpZmljYXRpb25NZXNzYWdlIiwibm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXciLCJ1bmRlZmluZWQiLCJub3RpZmljYXRpb25JbWFnZVByZXZpZXdDb250YWluZXIiLCJub3RpZmljYXRpb25JbWFnZVByZXZpZXciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJub3RpZmljYXRpb25JbWFnZUNvbnRhaW5lciIsIm5vdGlmaWNhdGlvbkltYWdlIiwibm90aWZpY2F0aW9uQWN0aW9uc0NvbnRhaW5lciIsIm1hcCIsImJ1dHRvbiIsIm5vdGlmaWNhdGlvbkFjdGlvbnMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFBy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S0FBSyxFQUFFdUMsc0JBQVVFLE1BSDRCO0FBSTdDM0MsRUFBQUEsT0FBTyxFQUFFeUMsc0JBQVVFLE1BSjBCO0FBSzdDNUMsRUFBQUEsSUFBSSxFQUFFMEMsc0JBQVVFLE1BTDZCO0FBTTdDMUMsRUFBQUEsS0FBSyxFQUFFd0Msc0JBQVVFO0FBTjRCLENBQS9DO0FBU0FsRCxrQ0FBa0MsQ0FBQ29ELFlBQW5DLEdBQWtEO0FBQ2hEM0MsRUFBQUEsS0FBSyxFQUFFLE9BRHlDO0FBRWhESCxFQUFBQSxJQUFJLEVBQUUsVUFGMEM7QUFHaERNLEVBQUFBLE9BQU8sRUFBRXlDO0FBSHVDLENBQWxEO2VBTWVyRCxrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgR3JpZCwgSWNvbkJ1dHRvbiwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBLZXlib2FyZEFycm93VXAgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIjtcbmltcG9ydCBLZXlib2FyZEFycm93RG93biBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dEb3duXCI7XG5pbXBvcnQgRGVmYXVsdEFuZHJvaWRTdHlsZXMgZnJvbSBcIi4vRGVmYXVsdEFuZHJvaWRTdHlsZXNcIjtcbmltcG9ydCB7IHBhcnNlRW1vamlzLCBjaGVja0lmRW1vamlQcmVzZW50IH0gZnJvbSBcIi4vRW1vamlQcm9jZXNzb3JcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhEZWZhdWx0QW5kcm9pZFN0eWxlcyk7XG5cbmZ1bmN0aW9uIEFuZHJvaWRSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXcocHJvcHMpIHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICBhcHBOYW1lLFxuICAgIHRpbWUsXG4gICAgbWVzc2FnZSxcbiAgICB0aXRsZSxcbiAgICBjb2xvcixcbiAgICBpbWFnZSxcbiAgICBhY3Rpb25CdXR0b25zLFxuICAgIEFwcEljb25cbiAgfSA9IHByb3BzO1xuICBjb25zdCBsb2FkQXBwSWNvbiA9ICgpID0+IChcbiAgICA8QXBwSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwSWNvbn0gc3R5bGU9e3sgY29sb3I6IGNvbG9yIH19IC8+XG4gICk7XG4gIGNvbnN0IG1heERpdldpZHRoID0gOC41ICogKGFwcE5hbWUubGVuZ3RoICsgdGltZS5sZW5ndGgpICsgNjQ7XG4gIGNvbnN0IGVtb2ppSW5NZXNzYWdlID0gY2hlY2tJZkVtb2ppUHJlc2VudChtZXNzYWdlKTtcbiAgY29uc3QgZW1vamlJblRpdGxlID0gY2hlY2tJZkVtb2ppUHJlc2VudCh0aXRsZSk7XG4gIGNvbnN0IG1lc3NhZ2VJblRvb2x0aXAgPSAoZW1vamlJblRpdGxlICYmICFlbW9qaUluTWVzc2FnZSAmJiBfLmlzTmlsKGltYWdlKSAmJiBfLmlzRW1wdHkoYWN0aW9uQnV0dG9ucykpO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZE5vdGlmaWNhdGlvbn0+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwIH19Pntsb2FkQXBwSWNvbigpfTwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcE5hbWVUZXh0fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2FwcE5hbWV9ICZidWxsOyB7dGltZX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kKCFleHBhbmQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZXhwYW5kID8gKFxuICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sSWNvbn0gLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0Rvd24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xJY29ufSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAsIHBhZGRpbmdCb3R0b206IDAgfX0+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17aW1hZ2UgJiYgIWV4cGFuZCA/IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZSA6IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogMCwgcGFkZGluZ0JvdHRvbTogMCwgbGluZUhlaWdodDogJzIwcHgnIH19PlxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAge3RpdGxlICYmXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VFbW9qaXModGl0bGUsIFwiZ29vZ2xlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2xhc3Nlcy5ub3RpZmljYXRpb25NZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFzc2VzLm5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRW1vamlzKG1lc3NhZ2UsIFwiZ29vZ2xlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkICYmICFleHBhbmQgJiYgKFxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkltYWdlUHJldmlld0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25JbWFnZVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICB7aW1hZ2UgIT09IHVuZGVmaW5lZCAmJiBleHBhbmQgJiYgKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25JbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uSW1hZ2V9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHshXy5pc0VtcHR5KGFjdGlvbkJ1dHRvbnMpICYmIGV4cGFuZCAmJiAoXG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkFjdGlvbnNDb250YWluZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICB7Xy5tYXAoYWN0aW9uQnV0dG9ucywgYnV0dG9uID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGNvbG9yIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuQW5kcm9pZFJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIEFwcEljb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5BbmRyb2lkUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiYmxhY2tcIixcbiAgdGltZTogXCIxMjozNCBQTVwiLFxuICBBcHBJY29uOiBOb3RpZmljYXRpb25zXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmRyb2lkUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3O1xuIl19