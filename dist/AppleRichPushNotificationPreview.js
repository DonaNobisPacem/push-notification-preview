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
    item: true
  }, loadAppIcon()), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.appNameText,
    style: {
      color: color
    }
  }, appName))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    style: {
      height: "26px",
      overflow: "hidden"
    }
  }, expand ? /*#__PURE__*/_react["default"].createElement(_MoreHoriz["default"], {
    fontSize: "large",
    className: classes.moreIcon
  }) : time))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
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
    className: expand ? classes.notificationTitle : classes.notificationTitlePreview
  }, (0, _EmojiProcessor.parseEmojis)(title, "apple")), message && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: expand ? classes.notificationMessage : classes.notificationMessagePreview
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJEZWZhdWx0QXBwbGVTdHlsZXMiLCJBcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwiaW1hZ2UiLCJhY3Rpb25CdXR0b25zIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwicm9vdCIsImNsb3NlSWNvbiIsImNsaWNrYWJsZU5vdGlmaWNhdGlvbiIsImNhcmROb3RpZmljYXRpb25XaXRoSW1hZ2UiLCJjYXJkTm90aWZpY2F0aW9uIiwiaGVhZGVyIiwid2hpdGVTcGFjZSIsImFwcE5hbWVUZXh0IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJtb3JlSWNvbiIsIm5vdGlmaWNhdGlvblRleHRXaXRoSW1hZ2UiLCJub3RpZmljYXRpb25UZXh0Iiwibm90aWZpY2F0aW9uVGl0bGUiLCJub3RpZmljYXRpb25UaXRsZVByZXZpZXciLCJub3RpZmljYXRpb25NZXNzYWdlIiwibm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXciLCJ1bmRlZmluZWQiLCJub3RpZmljYXRpb25JbWFnZVByZXZpZXdDb250YWluZXIiLCJub3RpZmljYXRpb25JbWFnZVByZXZpZXciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJub3RpZmljYXRpb25JbWFnZSIsIl8iLCJpc0VtcHR5Iiwibm90aWZpY2F0aW9uQWN0aW9ucyIsIm1hcCIsImJ1dHRvbiIsIm5vdGlmaWNhdGlvbkFjdGlvbnNCdXR0b24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiTm90aWZpY2F0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7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QUksTUFBVjtBQUFXLElBQUEsRUFBRSxFQUFFO0FBQWYsa0JBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBRUQsT0FBTyxDQUFDcUM7QUFBdkIsS0FDR0YsbUJBQUVHLEdBQUYsQ0FBTTVCLGFBQU4sRUFBcUIsVUFBQTZCLE1BQU07QUFBQSx3QkFDMUI7QUFBSSxNQUFBLEdBQUcsMEJBQW1CQSxNQUFuQjtBQUFQLG9CQUNFLGdDQUFDLFlBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRXZDLE9BQU8sQ0FBQ3dDO0FBRHJCLE9BR0dELE1BSEgsQ0FERixDQUQwQjtBQUFBLEdBQTNCLENBREgsQ0FERixDQW5JSixDQURGO0FBb0pEOztBQUVEekMsZ0NBQWdDLENBQUMyQyxTQUFqQyxHQUE2QztBQUMzQzdCLEVBQUFBLE9BQU8sRUFBRThCLHNCQUFVQyxNQUR3QjtBQUUzQ3hDLEVBQUFBLE9BQU8sRUFBRXVDLHNCQUFVRSxNQUFWLENBQWlCQyxVQUZpQjtBQUczQzdDLEVBQUFBLE9BQU8sRUFBRTBDLHNCQUFVQyxNQUFWLENBQWlCRSxVQUhpQjtBQUkzQ3RDLEVBQUFBLEtBQUssRUFBRW1DLHNCQUFVRSxNQUowQjtBQUszQ3ZDLEVBQUFBLE9BQU8sRUFBRXFDLHNCQUFVRSxNQUFWLENBQWlCQyxVQUxpQjtBQU0zQ3pDLEVBQUFBLElBQUksRUFBRXNDLHNCQUFVRSxNQUFWLENBQWlCQyxVQU5vQjtBQU8zQ3ZDLEVBQUFBLEtBQUssRUFBRW9DLHNCQUFVRTtBQVAwQixDQUE3QztBQVVBOUMsZ0NBQWdDLENBQUNnRCxZQUFqQyxHQUFnRDtBQUM5Q3ZDLEVBQUFBLEtBQUssRUFBRSxPQUR1QztBQUU5Q0gsRUFBQUEsSUFBSSxFQUFFLFVBRndDO0FBRzlDSSxFQUFBQSxPQUFPLEVBQUV1QztBQUhxQyxDQUFoRDtlQU1lakQsZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiwgRmFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQ2xvc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xuaW1wb3J0IE1vcmVIb3JpeiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgRGVmYXVsdEFwcGxlU3R5bGVzIGZyb20gXCIuL0RlZmF1bHRBcHBsZVN0eWxlc1wiO1xuaW1wb3J0IHsgcGFyc2VFbW9qaXMgfSBmcm9tIFwiLi9FbW9qaVByb2Nlc3NvclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKERlZmF1bHRBcHBsZVN0eWxlcyk7XG5cbmZ1bmN0aW9uIEFwcGxlUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3KHByb3BzKSB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7XG4gICAgYXBwTmFtZSxcbiAgICB0aW1lLFxuICAgIG1lc3NhZ2UsXG4gICAgdGl0bGUsXG4gICAgY29sb3IsXG4gICAgQXBwSWNvbixcbiAgICBpbWFnZSxcbiAgICBhY3Rpb25CdXR0b25zXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgbG9hZEFwcEljb24gPSAoKSA9PiAoXG4gICAgPEFwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEljb259IHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fSAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNvbnRhaW5lclxuICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICA+XG4gICAgICB7ZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8RmFiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VJY29ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKCFleHBhbmQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xpY2thYmxlTm90aWZpY2F0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmQoIWV4cGFuZCl9XG4gICAgICA+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgaW1hZ2UgJiYgZXhwYW5kXG4gICAgICAgICAgICAgID8gY2xhc3Nlcy5jYXJkTm90aWZpY2F0aW9uV2l0aEltYWdlXG4gICAgICAgICAgICAgIDogY2xhc3Nlcy5jYXJkTm90aWZpY2F0aW9uXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT57bG9hZEFwcEljb24oKX08L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBOYW1lVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY29sb3IgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHthcHBOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgaGVpZ2h0OiBcIjI2cHhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICB7ZXhwYW5kID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW9yZUhvcml6XG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vcmVJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgdGltZVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cIlwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17aW1hZ2UgJiYgIWV4cGFuZCA/IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZSA6IGNsYXNzZXMubm90aWZpY2F0aW9uVGV4dH0+XG4gICAgICAgICAgICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzZXMubm90aWZpY2F0aW9uVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFzc2VzLm5vdGlmaWNhdGlvblRpdGxlUHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUVtb2ppcyh0aXRsZSwgXCJhcHBsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc2VzLm5vdGlmaWNhdGlvbk1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFzc2VzLm5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRW1vamlzKG1lc3NhZ2UsIFwiYXBwbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkICYmICFleHBhbmQgJiYgKFxuICAgICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkltYWdlUHJldmlld0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9CdXR0b24+XG4gICAgICB7aW1hZ2UgJiYgZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkltYWdlfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyFfLmlzRW1wdHkoYWN0aW9uQnV0dG9ucykgJiYgZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uQWN0aW9uc30+XG4gICAgICAgICAgICB7Xy5tYXAoYWN0aW9uQnV0dG9ucywgYnV0dG9uID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17YGFjdGlvbkJ1dHRvbnMtJHtidXR0b259YH0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkFjdGlvbnNCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICl9XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIGFwcEljb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiBcImJsYWNrXCIsXG4gIHRpbWU6IFwiMTI6MzQgUE1cIixcbiAgQXBwSWNvbjogTm90aWZpY2F0aW9uc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXc7XG4iXX0=