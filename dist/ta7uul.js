(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ta7uul"] = factory();
	else
		root["ta7uul"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _digits = __webpack_require__(6);

Object.keys(_digits).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _digits[key];
    }
  });
});

var _letters = __webpack_require__(8);

Object.keys(_letters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _letters[key];
    }
  });
});

var _extras = __webpack_require__(7);

Object.keys(_extras).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extras[key];
    }
  });
});

var _tashkil = __webpack_require__(10);

Object.keys(_tashkil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tashkil[key];
    }
  });
});

var _punctuation = __webpack_require__(9);

Object.keys(_punctuation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _punctuation[key];
    }
  });
});
Object.defineProperty(exports, "digits", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_digits).default;
  }
});
Object.defineProperty(exports, "letters", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_letters).default;
  }
});
Object.defineProperty(exports, "extras", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_extras).default;
  }
});
Object.defineProperty(exports, "tashkil", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tashkil).default;
  }
});
Object.defineProperty(exports, "punctuation", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_punctuation).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendAll = exports.extendPunctuation = exports.extendPunct = exports.extendNumbers = exports.extendVowels = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _punct = __webpack_require__(12);

var _punct2 = _interopRequireDefault(_punct);

var _numbers = __webpack_require__(11);

var _numbers2 = _interopRequireDefault(_numbers);

var _vowels = __webpack_require__(13);

var _vowels2 = _interopRequireDefault(_vowels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendVowels = exports.extendVowels = function extendVowels(rules) {
  return _extends({}, _vowels2.default, rules);
};
var extendNumbers = exports.extendNumbers = function extendNumbers(rules) {
  return _extends({}, _numbers2.default, rules);
};
var extendPunct = exports.extendPunct = function extendPunct(rules) {
  return _extends({}, _punct2.default, rules);
};
var extendPunctuation = exports.extendPunctuation = extendPunct;
var extendAll = exports.extendAll = function extendAll(rules) {
  return _extends({}, _punct2.default, _numbers2.default, _vowels2.default, rules);
};
exports.default = extendAll;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keep = exports.leaveEmpty = exports.showQuestionMark = exports.showReplacementChar = undefined;

var _alphabet = __webpack_require__(0);

var showReplacementChar = exports.showReplacementChar = function showReplacementChar() {
  return "�";
};
var showQuestionMark = exports.showQuestionMark = function showQuestionMark() {
  return _alphabet.question;
};
var leaveEmpty = exports.leaveEmpty = function leaveEmpty() {
  return " ";
};
var keep = exports.keep = function keep(x) {
  return x;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alphabet = __webpack_require__(0);

var _ = _interopRequireWildcard(_alphabet);

var _extendRules = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var table = {
  e: _.hamza,
  A: _.alif,
  aa: _.alif,
  b: _.ba,
  t: _.taw,
  c: _.ta,
  j: _.jim,
  H: _.het,
  K: _.kha,
  d: _.dal,
  "z'": _.dhal,
  r: _.ra,
  z: _.zayn,
  s: _.sin,
  x: _.shin,
  S: _.sad,
  D: _.dad,
  T: _.tha,
  Z: _.za,
  E: _.ayn,
  g: _.ghayn,
  f: _.fa,
  q: _.qaf,
  k: _.kaf,
  l: _.lam,
  m: _.mim,
  n: _.nun,
  h: _.ha,
  w: _.waw,
  uu: _.waw,
  y: _.ya,
  ii: _.ya,
  eaa: _.maddah,
  "t'": _.marbutah,
  aaa: _.maqsurah,
  "_": ""
};

exports.default = (0, _extendRules.extendAll)(table);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.table = exports.unknown = undefined;

var _extendPunctuation;

var _handleUnrecognized = __webpack_require__(2);

Object.defineProperty(exports, "unknown", {
  enumerable: true,
  get: function get() {
    return _handleUnrecognized.keep;
  }
});

var _alphabet = __webpack_require__(0);

var _ = _interopRequireWildcard(_alphabet);

var _extendRules = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var table = exports.table = (0, _extendRules.extendPunctuation)((_extendPunctuation = {
  2: _.hamza,
  a: _.alif,
  e: _.alif,
  b: _.ba,
  p: _.ba,
  t: _.taw,
  s: _.ta,
  th: _.ta,
  j: _.jim,
  dj: _.jim,
  g: _.jim,
  7: _.het,
  kh: _.kha,
  5: _.kha,
  "7'": _.kha,
  d: _.dal,
  z: _.dhal,
  dh: _.dhal,
  r: _.ra
}, _defineProperty(_extendPunctuation, "z", _.zayn), _defineProperty(_extendPunctuation, "s", _.sin), _defineProperty(_extendPunctuation, "sh", _.shin), _defineProperty(_extendPunctuation, "ch", _.shin), _defineProperty(_extendPunctuation, "S", _.sad), _defineProperty(_extendPunctuation, 9, _.sad), _defineProperty(_extendPunctuation, "D", _.dad), _defineProperty(_extendPunctuation, "9'", _.dad), _defineProperty(_extendPunctuation, "T", _.tha), _defineProperty(_extendPunctuation, 6, _.tha), _defineProperty(_extendPunctuation, "Z", _.za), _defineProperty(_extendPunctuation, "6'", _.za), _defineProperty(_extendPunctuation, 3, _.ayn), _defineProperty(_extendPunctuation, "gh", _.ghayn), _defineProperty(_extendPunctuation, "3'", _.ghayn), _defineProperty(_extendPunctuation, "f", _.fa), _defineProperty(_extendPunctuation, "v", _.fa), _defineProperty(_extendPunctuation, "q", _.qaf), _defineProperty(_extendPunctuation, 8, _.qaf), _defineProperty(_extendPunctuation, "k", _.kaf), _defineProperty(_extendPunctuation, "l", _.lam), _defineProperty(_extendPunctuation, "m", _.mim), _defineProperty(_extendPunctuation, "n", _.nun), _defineProperty(_extendPunctuation, "h", _.ha), _defineProperty(_extendPunctuation, "w", _.waw), _defineProperty(_extendPunctuation, "o", _.waw), _defineProperty(_extendPunctuation, "ou", _.waw), _defineProperty(_extendPunctuation, "oo", _.waw), _defineProperty(_extendPunctuation, "u", _.waw), _defineProperty(_extendPunctuation, "y", _.ya), _defineProperty(_extendPunctuation, "i", _.ya), _defineProperty(_extendPunctuation, "ee", _.ya), _defineProperty(_extendPunctuation, "2a", _.maddah), _defineProperty(_extendPunctuation, "at", _.marbutah), _defineProperty(_extendPunctuation, "et", _.marbutah), _defineProperty(_extendPunctuation, "A", _.maqsurah), _defineProperty(_extendPunctuation, "_", ""), _extendPunctuation));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleUnrecognized = __webpack_require__(2);

var fromTable = function fromTable(str, table) {
  var handleUnrecognized = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _handleUnrecognized.showReplacementChar;


  var tra = "";
  for (var i = 0; i < str.length; i++) {
    for (var l = 2; l >= 0; l--) {
      if (l === 0) {
        tra += handleUnrecognized(str[i]);
        break;
      }
      var chunk = str.substr(i, l);
      if (chunk in table) {
        tra += table[chunk];
        i += l - 1;
        break;
      }
    }
  }
  return tra;
};

exports.default = function (str, ruleSet, handleUnrecognized) {

  var rules = ruleSet.default || ruleSet;

  if (rules instanceof Function) return rules(str, handleUnrecognized);else return fromTable(str, rules.table || rules, handleUnrecognized || rules.unknown);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var zero = exports.zero = "٠";
var one = exports.one = "١";
var two = exports.two = "٢";
var three = exports.three = "٣";
var four = exports.four = "٤";
var five = exports.five = "٥";
var six = exports.six = "٦";
var seven = exports.seven = "٧";
var eight = exports.eight = "٨";
var nine = exports.nine = "٩";

exports.default = [zero, one, two, three, four, five, six, seven, eight, nine];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hamza = exports.hamza = "ء";
var maddah = exports.maddah = "آ";
var marbutah = exports.marbutah = "ة";
var maqsurah = exports.maqsurah = "ى";

exports.default = { hamza: hamza, maddah: maddah, marbutah: marbutah, maqsurah: maqsurah };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var alif = exports.alif = "ا";
var ba = exports.ba = "ب";
var taw = exports.taw = "ت";
var ta = exports.ta = "ث";
var jim = exports.jim = "ج";
var het = exports.het = "ح";
var kha = exports.kha = "خ";
var dal = exports.dal = "د";
var dhal = exports.dhal = "ذ";
var ra = exports.ra = "ر";
var zayn = exports.zayn = "ز";
var tha = exports.tha = "ط";
var za = exports.za = "ظ";
var kaf = exports.kaf = "ك";
var lam = exports.lam = "ل";
var mim = exports.mim = "م";
var nun = exports.nun = "ن";
var sad = exports.sad = "ص";
var dad = exports.dad = "ض";
var ayn = exports.ayn = "ع";
var ghayn = exports.ghayn = "غ";
var fa = exports.fa = "ف";
var qaf = exports.qaf = "ق";
var sin = exports.sin = "س";
var shin = exports.shin = "ش";
var ha = exports.ha = "ه";
var waw = exports.waw = "و";
var ya = exports.ya = "ي";

exports.default = { alif: alif, ba: ba, taw: taw, ta: ta, jim: jim, het: het, kha: kha, dal: dal, dhal: dhal, ra: ra, zayn: zayn, tha: tha, za: za, kaf: kaf, lam: lam, mim: mim, nun: nun, sad: sad, dad: dad, ayn: ayn, ghayn: ghayn, fa: fa, qaf: qaf, sin: sin, shin: shin, ha: ha, waw: waw, ya: ya };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var space = exports.space = " ";
var question = exports.question = "؟";

exports.default = { space: space, question: question };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Harakat
var fathah = exports.fathah = "َ";
var kasrah = exports.kasrah = "ِ";
var dammah = exports.dammah = "ُ";
// export const maddah = "ٓ";
var sukun = exports.sukun = "ْ";
var khanjariyah = exports.khanjariyah = "ٰ";
var waslah = exports.waslah = "ٱ";

var shaddah = exports.shaddah = "ّ";

var tanwinf = exports.tanwinf = "ً";
var tanwink = exports.tanwink = "ٍ";
var tanwind = exports.tanwind = "ٌ";

exports.default = { fathah: fathah, kasrah: kasrah, dammah: dammah, sukun: sukun, khanjariyah: khanjariyah, waslah: waslah, shaddah: shaddah, tanwinf: tanwinf, tanwink: tanwink, tanwind: tanwind };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alphabet = __webpack_require__(0);

exports.default = {
  "0": _alphabet.digits[0],
  "1": _alphabet.digits[1],
  "2": _alphabet.digits[2],
  "3": _alphabet.digits[3],
  "4": _alphabet.digits[4],
  "5": _alphabet.digits[5],
  "6": _alphabet.digits[6],
  "7": _alphabet.digits[7],
  "8": _alphabet.digits[8],
  "9": _alphabet.digits[9]
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alphabet = __webpack_require__(0);

exports.default = {
  " ": _alphabet.punctuation.space,
  "?": _alphabet.punctuation.question
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alphabet = __webpack_require__(0);

exports.default = {
  a: _alphabet.tashkil.fathah,
  i: _alphabet.tashkil.kasrah,
  u: _alphabet.tashkil.dammah
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rules = exports.alphabet = exports.trans = exports.transliterate = undefined;

var _alphabet = __webpack_require__(0);

var alphabet = _interopRequireWildcard(_alphabet);

var _transliterate = __webpack_require__(5);

var _transliterate2 = _interopRequireDefault(_transliterate);

var _BATR = __webpack_require__(3);

var BATR = _interopRequireWildcard(_BATR);

var _chat = __webpack_require__(4);

var chat = _interopRequireWildcard(_chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var trans = _transliterate2.default;
var rules = { BATR: BATR, chat: chat };

exports.transliterate = _transliterate2.default;
exports.trans = trans;
exports.alphabet = alphabet;
exports.rules = rules;

/***/ })
/******/ ]);
});