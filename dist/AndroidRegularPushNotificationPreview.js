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
      padding: '4px 0 0 0'
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
    alignItems: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      lineHeight: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: classes.notificationTitle
  }, title), message && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    xs: 12,
    className: expand ? classes.notificationMessage : classes.notificationMessagePreview
  }, message))), expand && actionButtons && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    justify: "flex-start",
    alignItems: "center",
    spacing: 2,
    className: classes.actionButtons
  }, actionButtons.map(function (actionButton) {
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      item: true
    }, actionButton);
  }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BbmRyb2lkUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIkRlZmF1bHRBbmRyb2lkU3R5bGVzIiwiQW5kcm9pZFJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJhY3Rpb25CdXR0b25zIiwiQXBwSWNvbiIsImxvYWRBcHBJY29uIiwiYXBwSWNvbiIsIm1heERpdldpZHRoIiwibGVuZ3RoIiwicm9vdCIsImNhcmROb3RpZmljYXRpb24iLCJoZWFkZXIiLCJ3aGl0ZVNwYWNlIiwicGFkZGluZyIsImFwcE5hbWVUZXh0IiwiY29udHJvbEljb24iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImxpbmVIZWlnaHQiLCJub3RpZmljYXRpb25UaXRsZSIsIm5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJub3RpZmljYXRpb25NZXNzYWdlUHJldmlldyIsIm1hcCIsImFjdGlvbkJ1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJOb3RpZmljYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsd0JBQVdDLGdDQUFYLENBQWxCOztBQUVBLFNBQVNDLHFDQUFULENBQStDQyxLQUEvQyxFQUFzRDtBQUVwRCxNQUFNQyxPQUFPLEdBQUdKLFNBQVMsRUFBekI7O0FBRm9ELGtCQUd4QixxQkFBUyxLQUFULENBSHdCO0FBQUE7QUFBQSxNQUc3Q0ssTUFINkM7QUFBQSxNQUdyQ0MsU0FIcUM7O0FBQUEsTUFL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SSxnQ0FBQyxVQUFEO0FBQU0sTUFBQSxJQUFJO0FBQVYsT0FBWUEsWUFBWixDQUFKO0FBQUEsR0FBOUIsQ0FSeUIsQ0FyQjlCLENBMUNGLENBREYsQ0FERixDQURKO0FBa0ZEOztBQUVEOUIscUNBQXFDLENBQUMrQixTQUF0QyxHQUFrRDtBQUNoRHBCLEVBQUFBLE9BQU8sRUFBRXFCLHNCQUFVQyxNQUQ2QjtBQUVoRDVCLEVBQUFBLE9BQU8sRUFBRTJCLHNCQUFVRSxNQUFWLENBQWlCQyxVQUZzQjtBQUdoRDFCLEVBQUFBLEtBQUssRUFBRXVCLHNCQUFVRSxNQUgrQjtBQUloRDNCLEVBQUFBLE9BQU8sRUFBRXlCLHNCQUFVRSxNQUo2QjtBQUtoRDVCLEVBQUFBLElBQUksRUFBRTBCLHNCQUFVRSxNQUxnQztBQU1oRDFCLEVBQUFBLEtBQUssRUFBRXdCLHNCQUFVRTtBQU4rQixDQUFsRDtBQVNBbEMscUNBQXFDLENBQUNvQyxZQUF0QyxHQUFxRDtBQUNuRDNCLEVBQUFBLEtBQUssRUFBRSxPQUQ0QztBQUVuREgsRUFBQUEsSUFBSSxFQUFFLFVBRjZDO0FBR25ESyxFQUFBQSxPQUFPLEVBQUUwQjtBQUgwQyxDQUFyRDtlQU1lckMscUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IEdyaWQsIEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dVcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dVcFwiO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0Rvd25cIjtcbmltcG9ydCBEZWZhdWx0QW5kcm9pZFN0eWxlcyBmcm9tIFwiLi9EZWZhdWx0QW5kcm9pZFN0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKERlZmF1bHRBbmRyb2lkU3R5bGVzKTtcblxuZnVuY3Rpb24gQW5kcm9pZFJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldyhwcm9wcykge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIGFwcE5hbWUsXG4gICAgdGltZSxcbiAgICBtZXNzYWdlLFxuICAgIHRpdGxlLFxuICAgIGNvbG9yLFxuICAgIGFjdGlvbkJ1dHRvbnMsXG4gICAgQXBwSWNvblxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGxvYWRBcHBJY29uID0gKCkgPT4gKFxuICAgICAgPEFwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEljb259IHN0eWxlPXt7Y29sb3I6IGNvbG9yfX0vPlxuICApO1xuICBjb25zdCBtYXhEaXZXaWR0aCA9IDguNSAqIChhcHBOYW1lLmxlbmd0aCArIHRpbWUubGVuZ3RoKSArIDY0O1xuXG4gIHJldHVybiAoXG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmROb3RpZmljYXRpb259PlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7cGFkZGluZzogJzRweCAwIDAgMCd9fT57bG9hZEFwcEljb24oKX08L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwTmFtZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IGNvbG9yfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YXBwTmFtZX0gJmJ1bGw7IHt0aW1lfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBhbmQoIWV4cGFuZCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2V4cGFuZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sSWNvbn0vPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0Rvd24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2xJY29ufS8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDAsIHBhZGRpbmdCb3R0b206IDAgfX0+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17eyBwYWRkaW5nVG9wOiAwLCBwYWRkaW5nQm90dG9tOiAwLCBsaW5lSGVpZ2h0OiAnMjBweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvblRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIHtleHBhbmQgJiYgYWN0aW9uQnV0dG9ucyAmJiA8R3JpZFxuICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkJ1dHRvbnN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWN0aW9uQnV0dG9ucy5tYXAoYWN0aW9uQnV0dG9uID0+IDxHcmlkIGl0ZW0+e2FjdGlvbkJ1dHRvbn08L0dyaWQ+KX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkFuZHJvaWRSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXcucHJvcFR5cGVzID0ge1xuICBBcHBJY29uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuQW5kcm9pZFJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiBcImJsYWNrXCIsXG4gIHRpbWU6IFwiMTI6MzQgUE1cIixcbiAgQXBwSWNvbjogTm90aWZpY2F0aW9uc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5kcm9pZFJlZ3VsYXJQdXNoTm90aWZpY2F0aW9uUHJldmlldztcblxuIl19