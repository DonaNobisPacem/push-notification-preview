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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJEZWZhdWx0QXBwbGVTdHlsZXMiLCJBcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldyIsInByb3BzIiwiY2xhc3NlcyIsImV4cGFuZCIsInNldEV4cGFuZCIsImFwcE5hbWUiLCJ0aW1lIiwibWVzc2FnZSIsInRpdGxlIiwiY29sb3IiLCJBcHBJY29uIiwiaW1hZ2UiLCJhY3Rpb25CdXR0b25zIiwibG9hZEFwcEljb24iLCJhcHBJY29uIiwicm9vdCIsImNsb3NlSWNvbiIsImNsaWNrYWJsZU5vdGlmaWNhdGlvbiIsImNhcmROb3RpZmljYXRpb25XaXRoSW1hZ2UiLCJjYXJkTm90aWZpY2F0aW9uIiwiaGVhZGVyIiwid2hpdGVTcGFjZSIsInBhZGRpbmdCb3R0b20iLCJhcHBOYW1lVGV4dCIsIm92ZXJmbG93IiwibW9yZUljb24iLCJub3RpZmljYXRpb25UZXh0V2l0aEltYWdlIiwibm90aWZpY2F0aW9uVGV4dCIsIm5vdGlmaWNhdGlvblRpdGxlUHJldmlldyIsIm5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3IiwidW5kZWZpbmVkIiwibm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3Q29udGFpbmVyIiwibm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3IiwiYmFja2dyb3VuZEltYWdlIiwibm90aWZpY2F0aW9uSW1hZ2UiLCJfIiwiaXNFbXB0eSIsIm5vdGlmaWNhdGlvbkFjdGlvbnMiLCJtYXAiLCJidXR0b24iLCJub3RpZmljYXRpb25BY3Rpb25zQnV0dG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsIk5vdGlmaWNhdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNB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RUFBRUQsT0FBTyxDQUFDbUM7QUFBdkIsS0FDR0YsbUJBQUVHLEdBQUYsQ0FBTTFCLGFBQU4sRUFBcUIsVUFBQTJCLE1BQU07QUFBQSx3QkFDMUI7QUFBSSxNQUFBLEdBQUcsMEJBQW1CQSxNQUFuQjtBQUFQLG9CQUNFLGdDQUFDLFlBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRXJDLE9BQU8sQ0FBQ3NDO0FBRHJCLE9BR0dELE1BSEgsQ0FERixDQUQwQjtBQUFBLEdBQTNCLENBREgsQ0FERixDQTNISixDQURGO0FBNElEOztBQUVEdkMsZ0NBQWdDLENBQUN5QyxTQUFqQyxHQUE2QztBQUMzQzNCLEVBQUFBLE9BQU8sRUFBRTRCLHNCQUFVQyxNQUR3QjtBQUUzQ3RDLEVBQUFBLE9BQU8sRUFBRXFDLHNCQUFVRSxNQUFWLENBQWlCQyxVQUZpQjtBQUczQzNDLEVBQUFBLE9BQU8sRUFBRXdDLHNCQUFVQyxNQUFWLENBQWlCRSxVQUhpQjtBQUkzQ3BDLEVBQUFBLEtBQUssRUFBRWlDLHNCQUFVRSxNQUowQjtBQUszQ3JDLEVBQUFBLE9BQU8sRUFBRW1DLHNCQUFVRSxNQUFWLENBQWlCQyxVQUxpQjtBQU0zQ3ZDLEVBQUFBLElBQUksRUFBRW9DLHNCQUFVRSxNQUFWLENBQWlCQyxVQU5vQjtBQU8zQ3JDLEVBQUFBLEtBQUssRUFBRWtDLHNCQUFVRTtBQVAwQixDQUE3QztBQVVBNUMsZ0NBQWdDLENBQUM4QyxZQUFqQyxHQUFnRDtBQUM5Q3JDLEVBQUFBLEtBQUssRUFBRSxPQUR1QztBQUU5Q0gsRUFBQUEsSUFBSSxFQUFFLFVBRndDO0FBRzlDSSxFQUFBQSxPQUFPLEVBQUVxQztBQUhxQyxDQUFoRDtlQU1lL0MsZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiwgRmFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgQ2xvc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xuaW1wb3J0IE1vcmVIb3JpeiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgRGVmYXVsdEFwcGxlU3R5bGVzIGZyb20gXCIuL0RlZmF1bHRBcHBsZVN0eWxlc1wiO1xuaW1wb3J0IHsgcGFyc2VFbW9qaXMgfSBmcm9tIFwiLi9FbW9qaVByb2Nlc3NvclwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKERlZmF1bHRBcHBsZVN0eWxlcyk7XG5cbmZ1bmN0aW9uIEFwcGxlUmljaFB1c2hOb3RpZmljYXRpb25QcmV2aWV3KHByb3BzKSB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7XG4gICAgYXBwTmFtZSxcbiAgICB0aW1lLFxuICAgIG1lc3NhZ2UsXG4gICAgdGl0bGUsXG4gICAgY29sb3IsXG4gICAgQXBwSWNvbixcbiAgICBpbWFnZSxcbiAgICBhY3Rpb25CdXR0b25zXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgbG9hZEFwcEljb24gPSAoKSA9PiAoXG4gICAgPEFwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEljb259IHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fSAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGNvbnRhaW5lclxuICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAganVzdGlmeT1cImZsZXgtZW5kXCJcbiAgICA+XG4gICAgICB7ZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICA8RmFiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VJY29ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kKCFleHBhbmQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICAgIDwvRmFiPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xpY2thYmxlTm90aWZpY2F0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmQoIWV4cGFuZCl9XG4gICAgICA+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgaW1hZ2UgJiYgZXhwYW5kXG4gICAgICAgICAgICAgID8gY2xhc3Nlcy5jYXJkTm90aWZpY2F0aW9uV2l0aEltYWdlXG4gICAgICAgICAgICAgIDogY2xhc3Nlcy5jYXJkTm90aWZpY2F0aW9uXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwIH19Pntsb2FkQXBwSWNvbigpfTwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcE5hbWVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmdiKCAyMjQsIDc0LCA2NSknIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YXBwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG92ZXJmbG93OiBcImhpZGRlblwiLCBjb2xvcjogJ3JnYiggMjI0LCA3NCwgNjUpJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtleHBhbmQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxNb3JlSG9yaXpcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9yZUljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICB0aW1lXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiXCIgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtpbWFnZSAmJiAhZXhwYW5kID8gY2xhc3Nlcy5ub3RpZmljYXRpb25UZXh0V2l0aEltYWdlIDogY2xhc3Nlcy5ub3RpZmljYXRpb25UZXh0fT5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uVGl0bGVQcmV2aWV3fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRW1vamlzKHRpdGxlLCBcImFwcGxlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbk1lc3NhZ2VQcmV2aWV3fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRW1vamlzKG1lc3NhZ2UsIFwiYXBwbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkICYmICFleHBhbmQgJiYgKFxuICAgICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkltYWdlUHJldmlld0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uSW1hZ2VQcmV2aWV3fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9CdXR0b24+XG4gICAgICB7aW1hZ2UgJiYgZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkltYWdlfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyFfLmlzRW1wdHkoYWN0aW9uQnV0dG9ucykgJiYgZXhwYW5kICYmIChcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubm90aWZpY2F0aW9uQWN0aW9uc30+XG4gICAgICAgICAgICB7Xy5tYXAoYWN0aW9uQnV0dG9ucywgYnV0dG9uID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17YGFjdGlvbkJ1dHRvbnMtJHtidXR0b259YH0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbkFjdGlvbnNCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICl9XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIGFwcEljb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5BcHBsZVJpY2hQdXNoTm90aWZpY2F0aW9uUHJldmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiBcImJsYWNrXCIsXG4gIHRpbWU6IFwiMTI6MzQgUE1cIixcbiAgQXBwSWNvbjogTm90aWZpY2F0aW9uc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXc7XG4iXX0=