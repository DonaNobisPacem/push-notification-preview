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
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
    style: {
      color: 'rgb( 224, 74, 65)'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_core.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJEZWZhdWx0QXBwbGVTdHlsZXMiLCJBcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwicm9vdCIsImNsb3NlSWNvbiIsImNsaWNrYWJsZU5vdGlmaWNhdGlvbiIsImNhcmROb3RpZmljYXRpb24iLCJoZWFkZXIiLCJ3aGl0ZVNwYWNlIiwicGFkZGluZ0JvdHRvbSIsImFwcE5hbWVUZXh0Iiwib3ZlcmZsb3ciLCJub3RpZmljYXRpb25UaXRsZVByZXZpZXciLCJub3RpZmljYXRpb25NZXNzYWdlUHJldmlldyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJOb3RpZmljYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVdDLDhCQUFYLENBQWxCOztBQUVBLFNBQVNDLG1DQUFULENBQTZDQyxLQUE3QyxFQUFvRDtBQUVsRCxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsRUFBekI7O0FBRmtELGtCQUd0QixxQkFBUyxLQUFULENBSHNCO0FBQUE7QUFBQSxNQUczQ0ssTUFIMkM7QUFBQSxNQUduQ0MsU0FIbUM7O0FBQUEsTUFLaERDLE9BTGdELEdBVzlDSixLQVg4QyxDQUtoREksT0FMZ0Q7QUFBQSxNQU1oREMsSUFOZ0QsR0FXOUNMLEtBWDhDLENBTWhESyxJQU5nRDtBQUFBLE1BT2hE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OUIsbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiwgRmFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQ2xvc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgRGVmYXVsdEFwcGxlU3R5bGVzIGZyb20gXCIuL0RlZmF1bHRBcHBsZVN0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKERlZmF1bHRBcHBsZVN0eWxlcyk7XG5cbmZ1bmN0aW9uIEFwcGxlUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3KHByb3BzKSB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7XG4gICAgYXBwTmFtZSxcbiAgICB0aW1lLFxuICAgIG1lc3NhZ2UsXG4gICAgdGl0bGUsXG4gICAgY29sb3IsXG4gICAgQXBwSWNvblxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGxvYWRBcHBJY29uID0gKCkgPT4gKFxuICAgIDxBcHBJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBJY29ufSBzdHlsZT17eyBjb2xvcjogY29sb3IgfX0gLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkXG4gICAgICBjb250YWluZXJcbiAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgIGp1c3RpZnk9XCJmbGV4LWVuZFwiXG4gICAgPlxuICAgICAge2V4cGFuZCAmJiAoXG4gICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPEZhYlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlSWNvbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZCghZXhwYW5kKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICdyZ2IoIDIyNCwgNzQsIDY1KScgfX0gLz5cbiAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsaWNrYWJsZU5vdGlmaWNhdGlvbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKCFleHBhbmQpfVxuICAgICAgPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmROb3RpZmljYXRpb259PlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMCB9fT57bG9hZEFwcEljb24oKX08L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBOYW1lVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JnYiggMjI0LCA3NCwgNjUpJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2FwcE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiwgY29sb3I6ICdyZ2IoIDIyNCwgNzQsIDY1KScgfX0+XG4gICAgICAgICAgICAgICAgICB7dGltZX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uVGl0bGVQcmV2aWV3fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuQXBwbGVSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXcucHJvcFR5cGVzID0ge1xuICBhcHBJY29uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5BcHBsZVJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiBcImJsYWNrXCIsXG4gIHRpbWU6IFwiMTI6MzQgUE1cIixcbiAgQXBwSWNvbjogTm90aWZpY2F0aW9uc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwbGVSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXc7XG4iXX0=