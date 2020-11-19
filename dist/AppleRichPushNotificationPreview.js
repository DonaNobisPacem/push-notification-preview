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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJEZWZhdWx0QXBwbGVTdHlsZXMiLCJBcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwiaW1hZ2UiLCJhY3Rpb25CdXR0b25zIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwicm9vdCIsImNsb3NlSWNvbiIsImNsaWNrYWJsZU5vdGlmaWNhdGlvbiIsImNhcmROb3RpZmljYXRpb25XaXRoSW1hZ2UiLCJjYXJkTm90aWZpY2F0aW9uIiwiaGVhZGVyIiwid2hpdGVTcGFjZSIsInBhZGRpbmdCb3R0b20iLCJhcHBOYW1lVGV4dCIsIm92ZXJmbG93Iiwibm90aWZpY2F0aW9uVGV4dFdpdGhJbWFnZSIsIm5vdGlmaWNhdGlvblRleHQiLCJub3RpZmljYXRpb25UaXRsZVByZXZpZXciLCJub3RpZmljYXRpb25NZXNzYWdlUHJldmlldyIsInVuZGVmaW5lZCIsIm5vdGlmaWNhdGlvbkltYWdlUHJldmlld0NvbnRhaW5lciIsIm5vdGlmaWNhdGlvbkltYWdlUHJldmlldyIsImJhY2tncm91bmRJbWFnZSIsIm5vdGlmaWNhdGlvbkltYWdlIiwiXyIsImlzRW1wdHkiLCJub3RpZmljYXRpb25BY3Rpb25zIiwibWFwIiwiYnV0dG9uIiwibm90aWZpY2F0aW9uQWN0aW9uc0J1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJOb3RpZmljYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFD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QixVQUFBMEIsTUFBTTtBQUFBLHdCQUMxQjtBQUFJLE1BQUEsR0FBRywwQkFBbUJBLE1BQW5CO0FBQVAsb0JBQ0UsZ0NBQUMsWUFBRDtBQUNFLE1BQUEsU0FBUyxFQUFFcEMsT0FBTyxDQUFDcUM7QUFEckIsT0FHR0QsTUFISCxDQURGLENBRDBCO0FBQUEsR0FBM0IsQ0FESCxDQURGLENBcEhKLENBREY7QUFxSUQ7O0FBRUR0QyxnQ0FBZ0MsQ0FBQ3dDLFNBQWpDLEdBQTZDO0FBQzNDMUIsRUFBQUEsT0FBTyxFQUFFMkIsc0JBQVVDLE1BRHdCO0FBRTNDckMsRUFBQUEsT0FBTyxFQUFFb0Msc0JBQVVFLE1BQVYsQ0FBaUJDLFVBRmlCO0FBRzNDMUMsRUFBQUEsT0FBTyxFQUFFdUMsc0JBQVVDLE1BQVYsQ0FBaUJFLFVBSGlCO0FBSTNDbkMsRUFBQUEsS0FBSyxFQUFFZ0Msc0JBQVVFLE1BSjBCO0FBSzNDcEMsRUFBQUEsT0FBTyxFQUFFa0Msc0JBQVVFLE1BQVYsQ0FBaUJDLFVBTGlCO0FBTTNDdEMsRUFBQUEsSUFBSSxFQUFFbUMsc0JBQVVFLE1BQVYsQ0FBaUJDLFVBTm9CO0FBTzNDcEMsRUFBQUEsS0FBSyxFQUFFaUMsc0JBQVVFO0FBUDBCLENBQTdDO0FBVUEzQyxnQ0FBZ0MsQ0FBQzZDLFlBQWpDLEdBQWdEO0FBQzlDcEMsRUFBQUEsS0FBSyxFQUFFLE9BRHVDO0FBRTlDSCxFQUFBQSxJQUFJLEVBQUUsVUFGd0M7QUFHOUNJLEVBQUFBLE9BQU8sRUFBRW9DO0FBSHFDLENBQWhEO2VBTWU5QyxnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgR3JpZCwgQnV0dG9uLCBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBDbG9zZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XG5pbXBvcnQgTW9yZUhvcml6IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6XCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBEZWZhdWx0QXBwbGVTdHlsZXMgZnJvbSBcIi4vRGVmYXVsdEFwcGxlU3R5bGVzXCI7XG5pbXBvcnQgeyBwYXJzZUVtb2ppcyB9IGZyb20gXCIuL0Vtb2ppUHJvY2Vzc29yXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoRGVmYXVsdEFwcGxlU3R5bGVzKTtcblxuZnVuY3Rpb24gQXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXcocHJvcHMpIHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtcbiAgICBhcHBOYW1lLFxuICAgIHRpbWUsXG4gICAgbWVzc2FnZSxcbiAgICB0aXRsZSxcbiAgICBjb2xvcixcbiAgICBBcHBJY29uLFxuICAgIGltYWdlLFxuICAgIGFjdGlvbkJ1dHRvbnNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBsb2FkQXBwSWNvbiA9ICgpID0+IChcbiAgICA8QXBwSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwSWNvbn0gc3R5bGU9e3sgY29sb3I6IGNvbG9yIH19IC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZFxuICAgICAgY29udGFpbmVyXG4gICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICBqdXN0aWZ5PVwiZmxleC1lbmRcIlxuICAgID5cbiAgICAgIHtleHBhbmQgJiYgKFxuICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgIDxGYWJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUljb259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmQoIWV4cGFuZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAncmdiKCAyMjQsIDc0LCA2NSknIH19IC8+XG4gICAgICAgICAgPC9GYWI+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbGlja2FibGVOb3RpZmljYXRpb259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZCghZXhwYW5kKX1cbiAgICAgID5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBpbWFnZSAmJiBleHBhbmRcbiAgICAgICAgICAgICAgPyBjbGFzc2VzLmNhcmROb3RpZmljYXRpb25XaXRoSW1hZ2VcbiAgICAgICAgICAgICAgOiBjbGFzc2VzLmNhcmROb3RpZmljYXRpb25cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDAgfX0+e2xvYWRBcHBJY29uKCl9PC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXBwTmFtZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZ2IoIDIyNCwgNzQsIDY1KScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHthcHBOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIGNvbG9yOiAncmdiKCAyMjQsIDc0LCA2NSknIH19PlxuICAgICAgICAgICAgICAgICAge3RpbWV9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJcIiBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2ltYWdlICYmICFleHBhbmQgPyBjbGFzc2VzLm5vdGlmaWNhdGlvblRleHRXaXRoSW1hZ2UgOiBjbGFzc2VzLm5vdGlmaWNhdGlvblRleHR9PlxuICAgICAgICAgICAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25UaXRsZVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VFbW9qaXModGl0bGUsIFwiYXBwbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uTWVzc2FnZVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VFbW9qaXMobWVzc2FnZSwgXCJhcHBsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAge2ltYWdlICE9PSB1bmRlZmluZWQgJiYgIWV4cGFuZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25JbWFnZVByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIHtpbWFnZSAmJiBleHBhbmQgJiYgKFxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uSW1hZ2V9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7IV8uaXNFbXB0eShhY3Rpb25CdXR0b25zKSAmJiBleHBhbmQgJiYgKFxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25BY3Rpb25zfT5cbiAgICAgICAgICAgIHtfLm1hcChhY3Rpb25CdXR0b25zLCBidXR0b24gPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtgYWN0aW9uQnV0dG9ucy0ke2J1dHRvbn1gfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uQWN0aW9uc0J1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YnV0dG9ufVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG5cbkFwcGxlUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgYXBwSWNvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgYXBwTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkFwcGxlUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6IFwiYmxhY2tcIixcbiAgdGltZTogXCIxMjozNCBQTVwiLFxuICBBcHBJY29uOiBOb3RpZmljYXRpb25zXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldztcbiJdfQ==