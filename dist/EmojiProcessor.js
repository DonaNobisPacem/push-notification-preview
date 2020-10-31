"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfEmojiPresent = exports.parseEmojis = exports.emojiUnicodeToColonsFormat = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _emojiMart = require("emoji-mart");

var _all = _interopRequireDefault(require("emoji-mart/data/all.json"));

var _emojiRegex = _interopRequireDefault(require("emoji-regex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emojiUnicodeToColonsFormat = function emojiUnicodeToColonsFormat(platform, message) {
  var output = message;
  var match = null;
  var unicodeEmojiRegex = (0, _emojiRegex["default"])();

  while ((match = unicodeEmojiRegex.exec(output)) !== null) {
    var emoji = match[0];
    var emojiName = (0, _emojiMart.getEmojiDataFromNative)(emoji, platform, _all["default"]).colons;
    var a = output.substr(0, match.index);
    var b = output.substr(match.index + emoji.length);
    output = a + emojiName + b;
  }

  return output;
};

exports.emojiUnicodeToColonsFormat = emojiUnicodeToColonsFormat;

var checkIfEmojiPresent = function checkIfEmojiPresent(message) {
  var unicodeEmojiRegex = (0, _emojiRegex["default"])();
  return unicodeEmojiRegex.test(message);
};

exports.checkIfEmojiPresent = checkIfEmojiPresent;

var parseEmojis = function parseEmojis(message, platform, size) {
  if (message) {
    var colonFormat = emojiUnicodeToColonsFormat(platform, message);
    var colonEmojiRegex = /(:(?![\n])[+()#$@-\w]+:)/g;
    var res = colonFormat.split(colonEmojiRegex);

    if (res.length > 1) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _lodash["default"].map(res, function (element, i) {
        if (colonEmojiRegex.test(element)) {
          var emoji = element.replace(/:/g, "");
          return /*#__PURE__*/_react["default"].createElement(_emojiMart.Emoji, {
            emoji: emoji,
            set: platform,
            size: size || 16,
            key: "emoji-".concat(emoji, "-").concat(i)
          });
        }

        return element;
      }));
    }
  }

  return message;
};

exports.parseEmojis = parseEmojis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FbW9qaVByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJlbW9qaVVuaWNvZGVUb0NvbG9uc0Zvcm1hdCIsInBsYXRmb3JtIiwibWVzc2FnZSIsIm91dHB1dCIsIm1hdGNoIiwidW5pY29kZUVtb2ppUmVnZXgiLCJleGVjIiwiZW1vamkiLCJlbW9qaU5hbWUiLCJkYXRhIiwiY29sb25zIiwiYSIsInN1YnN0ciIsImluZGV4IiwiYiIsImxlbmd0aCIsImNoZWNrSWZFbW9qaVByZXNlbnQiLCJ0ZXN0IiwicGFyc2VFbW9qaXMiLCJzaXplIiwiY29sb25Gb3JtYXQiLCJjb2xvbkVtb2ppUmVnZXgiLCJyZXMiLCJzcGxpdCIsIl8iLCJtYXAiLCJlbGVtZW50IiwiaSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsQ0FBQ0MsUUFBRCxFQUFXQyxPQUFYLEVBQXVCO0FBQ3hELE1BQUlDLE1BQU0sR0FBR0QsT0FBYjtBQUNBLE1BQUlFLEtBQUssR0FBRyxJQUFaO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsNkJBQTFCOztBQUNBLFNBQU8sQ0FBQ0QsS0FBSyxHQUFHQyxpQkFBaUIsQ0FBQ0MsSUFBbEIsQ0FBdUJILE1BQXZCLENBQVQsTUFBNkMsSUFBcEQsRUFBMEQ7QUFDeEQsUUFBTUksS0FBSyxHQUFHSCxLQUFLLENBQUMsQ0FBRCxDQUFuQjtBQUNBLFFBQU1JLFNBQVMsR0FBRyx1Q0FBdUJELEtBQXZCLEVBQThCTixRQUE5QixFQUF3Q1EsZUFBeEMsRUFBOENDLE1BQWhFO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHUixNQUFNLENBQUNTLE1BQVAsQ0FBYyxDQUFkLEVBQWlCUixLQUFLLENBQUNTLEtBQXZCLENBQVY7QUFDQSxRQUFNQyxDQUFDLEdBQUdYLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjUixLQUFLLENBQUNTLEtBQU4sR0FBY04sS0FBSyxDQUFDUSxNQUFsQyxDQUFWO0FBQ0FaLElBQUFBLE1BQU0sR0FBR1EsQ0FBQyxHQUFHSCxTQUFKLEdBQWdCTSxDQUF6QjtBQUNEOztBQUNELFNBQU9YLE1BQVA7QUFDRCxDQVpEOzs7O0FBY0EsSUFBTWEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDZCxPQUFELEVBQWE7QUFDdkMsTUFBTUcsaUJBQWlCLEdBQUcsNkJBQTFCO0FBQ0EsU0FBT0EsaUJBQWlCLENBQUNZLElBQWxCLENBQXVCZixPQUF2QixDQUFQO0FBQ0QsQ0FIRDs7OztBQUtBLElBQU1nQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDaEIsT0FBRCxFQUFVRCxRQUFWLEVBQW9Ca0IsSUFBcEIsRUFBNkI7QUFDL0MsTUFBSWpCLE9BQUosRUFBYTtBQUNYLFFBQU1rQixXQUFXLEdBQUdwQiwwQkFBMEIsQ0FBQ0MsUUFBRCxFQUFXQyxPQUFYLENBQTlDO0FBQ0EsUUFBTW1CLGVBQWUsR0FBRywyQkFBeEI7QUFDQSxRQUFNQyxHQUFHLEdBQUdGLFdBQVcsQ0FBQ0csS0FBWixDQUFrQkYsZUFBbEIsQ0FBWjs7QUFDQSxRQUFJQyxHQUFHLENBQUNQLE1BQUosR0FBYSxDQUFqQixFQUFvQjtBQUNsQiwwQkFDRSxnQ0FBQyxpQkFBRCxDQUFPLFFBQVAsUUFDR1MsbUJBQUVDLEdBQUYsQ0FBTUgsR0FBTixFQUFXLFVBQUNJLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUMxQixZQUFJTixlQUFlLENBQUNKLElBQWhCLENBQXFCUyxPQUFyQixDQUFKLEVBQW1DO0FBQ2pDLGNBQU1uQixLQUFLLEdBQUdtQixPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0IsRUFBdEIsQ0FBZDtBQUNBLDhCQUNFLGdDQUFDLGdCQUFEO0FBQ0UsWUFBQSxLQUFLLEVBQUVyQixLQURUO0FBRUUsWUFBQSxHQUFHLEVBQUVOLFFBRlA7QUFHRSxZQUFBLElBQUksRUFBRWtCLElBQUksSUFBSSxFQUhoQjtBQUlFLFlBQUEsR0FBRyxrQkFBV1osS0FBWCxjQUFvQm9CLENBQXBCO0FBSkwsWUFERjtBQVFEOztBQUNELGVBQU9ELE9BQVA7QUFDRCxPQWJBLENBREgsQ0FERjtBQWtCRDtBQUNGOztBQUNELFNBQU94QixPQUFQO0FBQ0QsQ0EzQkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBnZXRFbW9qaURhdGFGcm9tTmF0aXZlLCBFbW9qaSB9IGZyb20gXCJlbW9qaS1tYXJ0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiZW1vamktbWFydC9kYXRhL2FsbC5qc29uXCI7XG5pbXBvcnQgZW1vamlSZWdleCBmcm9tIFwiZW1vamktcmVnZXhcIjtcblxuY29uc3QgZW1vamlVbmljb2RlVG9Db2xvbnNGb3JtYXQgPSAocGxhdGZvcm0sIG1lc3NhZ2UpID0+IHtcbiAgbGV0IG91dHB1dCA9IG1lc3NhZ2U7XG4gIGxldCBtYXRjaCA9IG51bGw7XG4gIGNvbnN0IHVuaWNvZGVFbW9qaVJlZ2V4ID0gZW1vamlSZWdleCgpO1xuICB3aGlsZSAoKG1hdGNoID0gdW5pY29kZUVtb2ppUmVnZXguZXhlYyhvdXRwdXQpKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGVtb2ppID0gbWF0Y2hbMF07XG4gICAgY29uc3QgZW1vamlOYW1lID0gZ2V0RW1vamlEYXRhRnJvbU5hdGl2ZShlbW9qaSwgcGxhdGZvcm0sIGRhdGEpLmNvbG9ucztcbiAgICBjb25zdCBhID0gb3V0cHV0LnN1YnN0cigwLCBtYXRjaC5pbmRleCk7XG4gICAgY29uc3QgYiA9IG91dHB1dC5zdWJzdHIobWF0Y2guaW5kZXggKyBlbW9qaS5sZW5ndGgpO1xuICAgIG91dHB1dCA9IGEgKyBlbW9qaU5hbWUgKyBiO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBjaGVja0lmRW1vamlQcmVzZW50ID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgdW5pY29kZUVtb2ppUmVnZXggPSBlbW9qaVJlZ2V4KCk7XG4gIHJldHVybiB1bmljb2RlRW1vamlSZWdleC50ZXN0KG1lc3NhZ2UpO1xufTtcblxuY29uc3QgcGFyc2VFbW9qaXMgPSAobWVzc2FnZSwgcGxhdGZvcm0sIHNpemUpID0+IHtcbiAgaWYgKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBjb2xvbkZvcm1hdCA9IGVtb2ppVW5pY29kZVRvQ29sb25zRm9ybWF0KHBsYXRmb3JtLCBtZXNzYWdlKTtcbiAgICBjb25zdCBjb2xvbkVtb2ppUmVnZXggPSAvKDooPyFbXFxuXSlbKygpIyRALVxcd10rOikvZztcbiAgICBjb25zdCByZXMgPSBjb2xvbkZvcm1hdC5zcGxpdChjb2xvbkVtb2ppUmVnZXgpO1xuICAgIGlmIChyZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtfLm1hcChyZXMsIChlbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29sb25FbW9qaVJlZ2V4LnRlc3QoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW1vamkgPSBlbGVtZW50LnJlcGxhY2UoLzovZywgXCJcIik7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEVtb2ppXG4gICAgICAgICAgICAgICAgICBlbW9qaT17ZW1vaml9XG4gICAgICAgICAgICAgICAgICBzZXQ9e3BsYXRmb3JtfVxuICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZSB8fCAxNn1cbiAgICAgICAgICAgICAgICAgIGtleT17YGVtb2ppLSR7ZW1vaml9LSR7aX1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuZXhwb3J0IHsgZW1vamlVbmljb2RlVG9Db2xvbnNGb3JtYXQsIHBhcnNlRW1vamlzLCBjaGVja0lmRW1vamlQcmVzZW50IH07Il19