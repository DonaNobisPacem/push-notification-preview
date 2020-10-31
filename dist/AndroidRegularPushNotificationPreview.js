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

var _Notifications = _interopRequireDefault(require("@material-ui/icons/Notifications"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _DefaultAndroidStyles = _interopRequireDefault(require("./DefaultAndroidStyles"));

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

function AndroidRegularPushNotificationPreview(props) {
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

  var maxDivWidth = 8.5 * (appName.length + time.length) + 64;
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
  }, appName), !expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    style: {
      maxWidth: "calc(100% - ".concat(maxDivWidth, "px)")
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.notificationPreview
  }, title || message)), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
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
  }))))), expand && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    alignItems: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationTitle
  }, title), message && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: expand ? classes.notificationMessage : classes.notificationMessagePreview
  }, message)))))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
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

AndroidRegularPushNotificationPreview.propTypes = {
  AppIcon: _propTypes["default"].object,
  appName: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string,
  message: _propTypes["default"].string,
  time: _propTypes["default"].string,
  title: _propTypes["default"].string
};
AndroidRegularPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: _Notifications["default"]
};
var _default = AndroidRegularPushNotificationPreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BbmRyb2lkUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIkRlZmF1bHRBbmRyb2lkU3R5bGVzIiwiQW5kcm9pZFJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwibWF4RGl2V2lkdGgiLCJsZW5ndGgiLCJyb290IiwiY2FyZE5vdGlmaWNhdGlvbiIsImhlYWRlciIsIndoaXRlU3BhY2UiLCJhcHBOYW1lVGV4dCIsIm1heFdpZHRoIiwibm90aWZpY2F0aW9uUHJldmlldyIsImNvbnRyb2xJY29uIiwibm90aWZpY2F0aW9uVGl0bGUiLCJub3RpZmljYXRpb25NZXNzYWdlIiwibm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXciLCJjYXJkRm9vdGVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsIk5vdGlmaWNhdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyx3QkFBV0MsZ0NBQVgsQ0FBbEI7O0FBRUEsU0FBU0MscUNBQVQsQ0FBK0NDLEtBQS9DLEVBQXNEO0FBRXBELE1BQU1DLE9BQU8sR0FBR0osU0FBUyxFQUF6Qjs7QUFGb0Qsa0JBR3hCLHFCQUFTLEtBQVQsQ0FId0I7QUFBQTtBQUFBLE1BRzdDSyxNQUg2QztBQUFBLE1BR3JDQyxTQUhxQzs7QUFBQSxNQUtsREMsT0FMa0QsR0FXaERKLEtBWGdELENBS2xESSxPQUxrRDtBQUFBLE1B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Q0FqRkYsQ0FERjtBQWdHRDs7QUFFRDFCLHFDQUFxQyxDQUFDMkIsU0FBdEMsR0FBa0Q7QUFDaERqQixFQUFBQSxPQUFPLEVBQUVrQixzQkFBVUMsTUFENkI7QUFFaER4QixFQUFBQSxPQUFPLEVBQUV1QixzQkFBVUUsTUFBVixDQUFpQkMsVUFGc0I7QUFHaER0QixFQUFBQSxLQUFLLEVBQUVtQixzQkFBVUUsTUFIK0I7QUFJaER2QixFQUFBQSxPQUFPLEVBQUVxQixzQkFBVUUsTUFKNkI7QUFLaER4QixFQUFBQSxJQUFJLEVBQUVzQixzQkFBVUUsTUFMZ0M7QUFNaER0QixFQUFBQSxLQUFLLEVBQUVvQixzQkFBVUU7QUFOK0IsQ0FBbEQ7QUFTQTlCLHFDQUFxQyxDQUFDZ0MsWUFBdEMsR0FBcUQ7QUFDbkR2QixFQUFBQSxLQUFLLEVBQUUsT0FENEM7QUFFbkRILEVBQUFBLElBQUksRUFBRSxVQUY2QztBQUduREksRUFBQUEsT0FBTyxFQUFFdUI7QUFIMEMsQ0FBckQ7ZUFNZWpDLHFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBLZXlib2FyZEFycm93VXAgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93VXBcIjtcbmltcG9ydCBLZXlib2FyZEFycm93RG93biBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dEb3duXCI7XG5pbXBvcnQgRGVmYXVsdEFuZHJvaWRTdHlsZXMgZnJvbSBcIi4vRGVmYXVsdEFuZHJvaWRTdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhEZWZhdWx0QW5kcm9pZFN0eWxlcyk7XG5cbmZ1bmN0aW9uIEFuZHJvaWRSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXcocHJvcHMpIHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICBhcHBOYW1lLFxuICAgIHRpbWUsXG4gICAgbWVzc2FnZSxcbiAgICB0aXRsZSxcbiAgICBjb2xvcixcbiAgICBBcHBJY29uXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgbG9hZEFwcEljb24gPSAoKSA9PiAoXG4gICAgPEFwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEljb259IHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fSAvPlxuICApO1xuICBjb25zdCBtYXhEaXZXaWR0aCA9IDguNSAqIChhcHBOYW1lLmxlbmd0aCArIHRpbWUubGVuZ3RoKSArIDY0O1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZE5vdGlmaWNhdGlvbn0+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT57bG9hZEFwcEljb24oKX08L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBOYW1lVGV4dH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY29sb3IgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthcHBOYW1lfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIHshZXhwYW5kICYmIChcbiAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IGBjYWxjKDEwMCUgLSAke21heERpdldpZHRofXB4KWBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvblByZXZpZXd9Pnt0aXRsZSB8fCBtZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+e3RpbWV9PC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEV4cGFuZCghZXhwYW5kKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtleHBhbmQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93VXAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dEb3duIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHtleHBhbmQgJiYgKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvblRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRGb290ZXJ9PlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBzcGFjaW5nPXszfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbT5Ob3RpZmljYXRpb24gc2V0dGluZ3M8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5DbGVhcjwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuQW5kcm9pZFJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIEFwcEljb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5BbmRyb2lkUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiYmxhY2tcIixcbiAgdGltZTogXCIxMjozNCBQTVwiLFxuICBBcHBJY29uOiBOb3RpZmljYXRpb25zXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmRyb2lkUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3O1xuXG4iXX0=