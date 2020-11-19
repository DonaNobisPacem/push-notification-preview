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
    xs: 12,
    className: classes.notificationTitlePreview
  }, title), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationMessagePreview
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJEZWZhdWx0QXBwbGVTdHlsZXMiLCJBcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwicm9vdCIsImNsb3NlSWNvbiIsImNsaWNrYWJsZU5vdGlmaWNhdGlvbiIsImNhcmROb3RpZmljYXRpb24iLCJoZWFkZXIiLCJ3aGl0ZVNwYWNlIiwicGFkZGluZ0JvdHRvbSIsImFwcE5hbWVUZXh0Iiwib3ZlcmZsb3ciLCJub3RpZmljYXRpb25UaXRsZVByZXZpZXciLCJub3RpZmljYXRpb25NZXNzYWdlUHJldmlldyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJOb3RpZmljYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVdDLDhCQUFYLENBQWxCOztBQUVBLFNBQVNDLG1DQUFULENBQTZDQyxLQUE3QyxFQUFvRDtBQUVsRCxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsRUFBekI7O0FBRmtELGtCQUd0QixxQkFBUyxLQUFULENBSHNCO0FBQUE7QUFBQSxNQUczQ0ssTUFIMkM7QUFBQSxNQUduQ0MsU0FIbUM7O0FBQUEsTUFLaERDLE9BTGdELEdBVzlDSixLQVg4QyxDQUtoREksT0FMZ0Q7QUFBQSxNQU1oREMsSUFOZ0QsR0FXOUNMLEtBWDhDLENBTWhESyxJQU5nRDtBQUFBLE1BT2hE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cm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDbG9zZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBEZWZhdWx0QXBwbGVTdHlsZXMgZnJvbSBcIi4vRGVmYXVsdEFwcGxlU3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoRGVmYXVsdEFwcGxlU3R5bGVzKTtcblxuZnVuY3Rpb24gQXBwbGVSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXcocHJvcHMpIHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICBhcHBOYW1lLFxuICAgIHRpbWUsXG4gICAgbWVzc2FnZSxcbiAgICB0aXRsZSxcbiAgICBjb2xvcixcbiAgICBBcHBJY29uXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgbG9hZEFwcEljb24gPSAoKSA9PiAoXG4gICAgPEFwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEljb259IHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fSAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNvbnRhaW5lclxuICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICA+XG4gICAgICB7ZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8RmFiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VJY29ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKCFleHBhbmQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xpY2thYmxlTm90aWZpY2F0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmQoIWV4cGFuZCl9XG4gICAgICA+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZE5vdGlmaWNhdGlvbn0+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwIH19Pntsb2FkQXBwSWNvbigpfTwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcE5hbWVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmdiKCAyMjQsIDc0LCA2NSknIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YXBwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG92ZXJmbG93OiBcImhpZGRlblwiLCBjb2xvcjogJ3JnYiggMjI0LCA3NCwgNjUpJyB9fT5cbiAgICAgICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25UaXRsZVByZXZpZXd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5BcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIGFwcEljb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbkFwcGxlUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiYmxhY2tcIixcbiAgdGltZTogXCIxMjozNCBQTVwiLFxuICBBcHBJY29uOiBOb3RpZmljYXRpb25zXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldztcbiJdfQ==