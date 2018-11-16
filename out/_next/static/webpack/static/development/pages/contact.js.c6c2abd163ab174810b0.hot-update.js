webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./node_modules/react-typeform-embed/lib/ReactTypeformEmbed/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-typeform-embed/lib/ReactTypeformEmbed/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _embed = __webpack_require__(/*! @typeform/embed */ "./node_modules/@typeform/embed/lib/api.js");

var typeformEmbed = _interopRequireWildcard(_embed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleDefault = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};

var ReactTypeformEmbed = function (_Component) {
  _inherits(ReactTypeformEmbed, _Component);

  function ReactTypeformEmbed() {
    _classCallCheck(this, ReactTypeformEmbed);

    return _possibleConstructorReturn(this, (ReactTypeformEmbed.__proto__ || Object.getPrototypeOf(ReactTypeformEmbed)).apply(this, arguments));
  }

  _createClass(ReactTypeformEmbed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          url = _props.url,
          hideHeaders = _props.hideHeaders,
          hideFooter = _props.hideFooter,
          opacity = _props.opacity,
          buttonText = _props.buttonText,
          popup = _props.popup,
          mode = _props.mode,
          autoOpen = _props.autoOpen,
          autoClose = _props.autoClose,
          onSubmit = _props.onSubmit;

      var options = {
        hideHeaders: hideHeaders,
        hideFooter: hideFooter,
        opacity: opacity,
        buttonText: buttonText,
        mode: mode,
        autoOpen: autoOpen,
        autoClose: autoClose,
        onSubmit: onSubmit

        // Popup Mode
      };if (popup) {

        // Load Typeform embed popup
        this.typeform = typeformEmbed.makePopup(url, options);

        // Widget Mode (default)
      } else {
        var elm = this.typeformElm;

        // Load Typeform embed widget
        typeformEmbed.makeWidget(elm, url, options);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = Object.assign({}, styleDefault, this.props.style);

      return _react2.default.createElement('div', { className: 'ReactTypeformEmbed', ref: function ref(tf) {
          return _this2.typeformElm = tf;
        }, style: style });
    }
  }]);

  return ReactTypeformEmbed;
}(_react.Component);

ReactTypeformEmbed.propTypes = {
  style: _propTypes2.default.object,
  url: _propTypes2.default.string.isRequired,
  popup: _propTypes2.default.bool,
  hideHeaders: _propTypes2.default.bool,
  hideFooter: _propTypes2.default.bool,

  // Widget options
  opacity: _propTypes2.default.number,
  buttonText: _propTypes2.default.string,

  // Popup options
  mode: _propTypes2.default.string,
  autoOpen: _propTypes2.default.bool,
  autoClose: _propTypes2.default.number,
  onSubmit: _propTypes2.default.func
};

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
  style: {},
  url: '',
  popup: false,
  hideHeaders: false,
  hideFooter: false,
  onSubmit: function onSubmit() {},

  // Widget options
  opacity: 100,
  buttonText: 'Start',

  // Popup options
  mode: "popup", // options: "popup", "drawer_left", "drawer_right"
  autoOpen: false

};

exports.default = ReactTypeformEmbed;

/***/ }),

/***/ "./node_modules/react-typeform-embed/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-typeform-embed/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactTypeformEmbed = __webpack_require__(/*! ./ReactTypeformEmbed */ "./node_modules/react-typeform-embed/lib/ReactTypeformEmbed/index.js");

Object.defineProperty(exports, 'ReactTypeformEmbed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ReactTypeformEmbed).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_typeform_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typeform-embed */ "./node_modules/react-typeform-embed/lib/index.js");
/* harmony import */ var react_typeform_embed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typeform_embed__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Albert\\Documents\\Albert Site\\v3\\pages\\contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typeform_embed__WEBPACK_IMPORTED_MODULE_1__["ReactTypeformEmbed"], {
        url: 'https://albertkim1.typeform.com/to/lfIu3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      });
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contact")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contact.js.c6c2abd163ab174810b0.hot-update.js.map