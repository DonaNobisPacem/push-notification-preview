"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _MoreHoriz = _interopRequireDefault(require("@material-ui/icons/MoreHoriz"));

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _DefaultAppleStyles = _interopRequireDefault(require("./DefaultAppleStyles"));

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

function AppleRegularPushNotificationPreview(props) {
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
      AppIcon = props.AppIcon;

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
    className: classes.cardNotification
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
    xs: 12,
    className: expand ? classes.notificationTitle : classes.notificationTitlePreview
  }, title), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: expand ? classes.notificationMessage : classes.notificationMessagePreview
  }, message)))));
}

AppleRegularPushNotificationPreview.propTypes = {
  appIcon: _propTypes["default"].object,
  appName: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object.isRequired,
  color: _propTypes["default"].string,
  message: _propTypes["default"].string.isRequired,
  time: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired
};
AppleRegularPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: _Notifications["default"]
};
var _default = AppleRegularPushNotificationPreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJEZWZhdWx0QXBwbGVTdHlsZXMiLCJBcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwicm9vdCIsImNsb3NlSWNvbiIsImNsaWNrYWJsZU5vdGlmaWNhdGlvbiIsImNhcmROb3RpZmljYXRpb24iLCJoZWFkZXIiLCJ3aGl0ZVNwYWNlIiwiYXBwTmFtZVRleHQiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1vcmVJY29uIiwibm90aWZpY2F0aW9uVGl0bGUiLCJub3RpZmljYXRpb25UaXRsZVByZXZpZXciLCJub3RpZmljYXRpb25NZXNzYWdlIiwibm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiTm90aWZpY2F0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdCQUFXQyw4QkFBWCxDQUFsQjs7QUFFQSxTQUFTQyxtQ0FBVCxDQUE2Q0MsS0FBN0MsRUFBb0Q7QUFFbEQsTUFBTUMsT0FBTyxHQUFHSixTQUFTLEVBQXpCOztBQUZrRCxrQkFHdEIscUJBQVMsS0FBVCxDQUhzQjtBQUFBO0FBQUEsTUFHM0NLLE1BSDJDO0FBQUEsTUFHbkNDLFNBSG1DOztBQUFBLE1BS2hEQyxPQUxnRCxHQVc5Q0osS0FYOEMsQ0FLaERJLE9BTGdEO0FB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Q0FBQ2dDLFlBQXBDLEdBQW1EO0FBQ2pEdkIsRUFBQUEsS0FBSyxFQUFFLE9BRDBDO0FBRWpESCxFQUFBQSxJQUFJLEVBQUUsVUFGMkM7QUFHakRJLEVBQUFBLE9BQU8sRUFBRXVCO0FBSHdDLENBQW5EO2VBTWVqQyxtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDbG9zZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XG5pbXBvcnQgTW9yZUhvcml6IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6XCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBEZWZhdWx0QXBwbGVTdHlsZXMgZnJvbSBcIi4vRGVmYXVsdEFwcGxlU3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoRGVmYXVsdEFwcGxlU3R5bGVzKTtcblxuZnVuY3Rpb24gQXBwbGVSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXcocHJvcHMpIHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICBhcHBOYW1lLFxuICAgIHRpbWUsXG4gICAgbWVzc2FnZSxcbiAgICB0aXRsZSxcbiAgICBjb2xvcixcbiAgICBBcHBJY29uXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgbG9hZEFwcEljb24gPSAoKSA9PiAoXG4gICAgPEFwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEljb259IHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fSAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNvbnRhaW5lclxuICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICA+XG4gICAgICB7ZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8RmFiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VJY29ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKCFleHBhbmQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xpY2thYmxlTm90aWZpY2F0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmQoIWV4cGFuZCl9XG4gICAgICA+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZE5vdGlmaWNhdGlvbn0+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT57bG9hZEFwcEljb24oKX08L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBOYW1lVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY29sb3IgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHthcHBOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgaGVpZ2h0OiBcIjI2cHhcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICB7ZXhwYW5kID8gKFxuICAgICAgICAgICAgICAgICAgICA8TW9yZUhvcml6XG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vcmVJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgdGltZVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGV4cGFuZFxuICAgICAgICAgICAgICAgICAgPyBjbGFzc2VzLm5vdGlmaWNhdGlvblRpdGxlXG4gICAgICAgICAgICAgICAgICA6IGNsYXNzZXMubm90aWZpY2F0aW9uVGl0bGVQcmV2aWV3XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgZXhwYW5kXG4gICAgICAgICAgICAgICAgICA/IGNsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgOiBjbGFzc2VzLm5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkFwcGxlUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgYXBwSWNvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgYXBwTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuQXBwbGVSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBjb2xvcjogXCJibGFja1wiLFxuICB0aW1lOiBcIjEyOjM0IFBNXCIsXG4gIEFwcEljb246IE5vdGlmaWNhdGlvbnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxlUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3O1xuIl19