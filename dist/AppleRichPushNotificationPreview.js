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

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _DefaultAppleStyles = _interopRequireDefault(require("./DefaultAppleStyles"));

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

var useStyles = (0, _styles.makeStyles)(_DefaultAppleStyles["default"]);

function AppleRichPushNotificationPreview(props) {
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
      AppIcon = props.AppIcon,
      image = props.image,
      actionButtons = props.actionButtons;

  var loadAppIcon = function loadAppIcon() {
    return /*#__PURE__*/_react["default"].createElement(AppIcon, {
      className: classes.appIcon,
      style: {
        color: color
      }
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    className: classes.root,
    justify: "flex-end"
  }, expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Fab, {
    className: classes.closeIcon,
    onClick: function onClick() {
      return setExpand(!expand);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null))), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    className: classes.clickableNotification,
    onClick: function onClick() {
      return setExpand(!expand);
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: image && expand ? classes.cardNotificationWithImage : classes.cardNotification
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.header
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    alignItems: "center",
    justify: "space-between",
    spacing: 1,
    style: {
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    alignItems: "center",
    justify: "flex-start",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    style: {
      paddingBottom: 0
    }
  }, loadAppIcon()), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.appNameText,
    style: {
      color: 'rgb( 224, 74, 65)'
    }
  }, appName))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    style: {
      overflow: "hidden",
      color: 'rgb( 224, 74, 65)'
    }
  }, time))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "",
    alignItems: "flex-start",
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: image && !expand ? classes.notificationTextWithImage : classes.notificationText
  }, title && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationTitlePreview
  }, (0, _EmojiProcessor.parseEmojis)(title, "apple")), message && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationMessagePreview
  }, (0, _EmojiProcessor.parseEmojis)(message, "apple"))), image !== undefined && !expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    className: classes.notificationImagePreviewContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.notificationImagePreview,
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }))))))), image && expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.notificationImage,
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }), !_lodash["default"].isEmpty(actionButtons) && expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: classes.notificationActions
  }, _lodash["default"].map(actionButtons, function (button) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: "actionButtons-".concat(button)
    }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
      className: classes.notificationActionsButton
    }, button));
  }))));
}

AppleRichPushNotificationPreview.propTypes = {
  appIcon: _propTypes["default"].object,
  appName: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object.isRequired,
  color: _propTypes["default"].string,
  message: _propTypes["default"].string.isRequired,
  time: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string
};
AppleRichPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: _Notifications["default"]
};
var _default = AppleRichPushNotificationPreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJEZWZhdWx0QXBwbGVTdHlsZXMiLCJBcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwiaW1hZ2UiLCJhY3Rpb25CdXR0b25zIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwicm9vdCIsImNsb3NlSWNvbiIsImNsaWNrYWJsZU5vdGlmaWNhdGlvbiIsImNhcmROb3RpZmljYXRpb25XaXRoSW1hZ2UiLCJjYXJkTm90aWZpY2F0aW9uIiwiaGVhZGVyIiwid2hpdGVTcGFjZSIsInBhZGRpbmdCb3R0b20iLCJhcHBOYW1lVGV4dCIsIm92ZXJmbG93Iiwibm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZSIsIm5vdGlmaWNhdGlvblRleHQiLCJub3RpZmljYXRpb25UaXRsZVByZXZpZXciLCJub3RpZmljYXRpb25NZXNzYWdlUHJldmlldyIsInVuZGVmaW5lZCIsIm5vdGlmaWNhdGlvbkltYWdlUHJldmlld0NvbnRhaW5lciIsIm5vdGlmaWNhdGlvbkltYWdlUHJldmlldyIsImJhY2tncm91bmRJbWFnZSIsIm5vdGlmaWNhdGlvbkltYWdlIiwiXyIsImlzRW1wdHkiLCJub3RpZmljYXRpb25BY3Rpb25zIiwibWFwIiwiYnV0dG9uIiwibm90aWZpY2F0aW9uQWN0aW9uc0J1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJOb3RpZmljYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFD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bkI7QUFBUCxvQkFDRSxnQ0FBQyxZQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUVwQyxPQUFPLENBQUNxQztBQURyQixPQUdHRCxNQUhILENBREYsQ0FEMEI7QUFBQSxHQUEzQixDQURILENBREYsQ0FwSEosQ0FERjtBQXFJRDs7QUFFRHRDLGdDQUFnQyxDQUFDd0MsU0FBakMsR0FBNkM7QUFDM0MxQixFQUFBQSxPQUFPLEVBQUUyQixzQkFBVUMsTUFEd0I7QUFFM0NyQyxFQUFBQSxPQUFPLEVBQUVvQyxzQkFBVUUsTUFBVixDQUFpQkMsVUFGaUI7QUFHM0MxQyxFQUFBQSxPQUFPLEVBQUV1QyxzQkFBVUMsTUFBVixDQUFpQkUsVUFIaUI7QUFJM0NuQyxFQUFBQSxLQUFLLEVBQUVnQyxzQkFBVUUsTUFKMEI7QUFLM0NwQyxFQUFBQSxPQUFPLEVBQUVrQyxzQkFBVUUsTUFBVixDQUFpQkMsVUFMaUI7QUFNM0N0QyxFQUFBQSxJQUFJLEVBQUVtQyxzQkFBVUUsTUFBVixDQUFpQkMsVUFOb0I7QUFPM0NwQyxFQUFBQSxLQUFLLEVBQUVpQyxzQkFBVUU7QUFQMEIsQ0FBN0M7QUFVQTNDLGdDQUFnQyxDQUFDNkMsWUFBakMsR0FBZ0Q7QUFDOUNwQyxFQUFBQSxLQUFLLEVBQUUsT0FEdUM7QUFFOUNILEVBQUFBLElBQUksRUFBRSxVQUZ3QztBQUc5Q0ksRUFBQUEsT0FBTyxFQUFFb0M7QUFIcUMsQ0FBaEQ7ZUFNZTlDLGdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBHcmlkLCBCdXR0b24sIEZhYiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IENsb3NlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcbmltcG9ydCBNb3JlSG9yaXogZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlSG9yaXpcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IERlZmF1bHRBcHBsZVN0eWxlcyBmcm9tIFwiLi9EZWZhdWx0QXBwbGVTdHlsZXNcIjtcbmltcG9ydCB7IHBhcnNlRW1vamlzIH0gZnJvbSBcIi4vRW1vamlQcm9jZXNzb3JcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhEZWZhdWx0QXBwbGVTdHlsZXMpO1xuXG5mdW5jdGlvbiBBcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyhwcm9wcykge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIGFwcE5hbWUsXG4gICAgdGltZSxcbiAgICBtZXNzYWdlLFxuICAgIHRpdGxlLFxuICAgIGNvbG9yLFxuICAgIEFwcEljb24sXG4gICAgaW1hZ2UsXG4gICAgYWN0aW9uQnV0dG9uc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGxvYWRBcHBJY29uID0gKCkgPT4gKFxuICAgIDxBcHBJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBJY29ufSBzdHlsZT17eyBjb2xvcjogY29sb3IgfX0gLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICBjb250YWluZXJcbiAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgIGp1c3RpZnk9XCJmbGV4LWVuZFwiXG4gICAgPlxuICAgICAge2V4cGFuZCAmJiAoXG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPEZhYlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlSWNvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZCghZXhwYW5kKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsaWNrYWJsZU5vdGlmaWNhdGlvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKCFleHBhbmQpfVxuICAgICAgPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGltYWdlICYmIGV4cGFuZFxuICAgICAgICAgICAgICA/IGNsYXNzZXMuY2FyZE5vdGlmaWNhdGlvbldpdGhJbWFnZVxuICAgICAgICAgICAgICA6IGNsYXNzZXMuY2FyZE5vdGlmaWNhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMCB9fT57bG9hZEFwcEljb24oKX08L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBOYW1lVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JnYiggMjI0LCA3NCwgNjUpJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2FwcE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiwgY29sb3I6ICdyZ2IoIDIyNCwgNzQsIDY1KScgfX0+XG4gICAgICAgICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cIlwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17aW1hZ2UgJiYgIWV4cGFuZCA/IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZSA6IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dH0+XG4gICAgICAgICAgICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvblRpdGxlUHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUVtb2ppcyh0aXRsZSwgXCJhcHBsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25NZXNzYWdlUHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUVtb2ppcyhtZXNzYWdlLCBcImFwcGxlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB7aW1hZ2UgIT09IHVuZGVmaW5lZCAmJiAhZXhwYW5kICYmIChcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25JbWFnZVByZXZpZXdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkltYWdlUHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWBcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2ltYWdlICYmIGV4cGFuZCAmJiAoXG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25JbWFnZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWBcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshXy5pc0VtcHR5KGFjdGlvbkJ1dHRvbnMpICYmIGV4cGFuZCAmJiAoXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkFjdGlvbnN9PlxuICAgICAgICAgICAge18ubWFwKGFjdGlvbkJ1dHRvbnMsIGJ1dHRvbiA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2BhY3Rpb25CdXR0b25zLSR7YnV0dG9ufWB9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25BY3Rpb25zQnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtidXR0b259XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuQXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXcucHJvcFR5cGVzID0ge1xuICBhcHBJY29uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuQXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogXCJibGFja1wiLFxuICB0aW1lOiBcIjEyOjM0IFBNXCIsXG4gIEFwcEljb246IE5vdGlmaWNhdGlvbnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxlUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3O1xuIl19