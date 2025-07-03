/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/pusher-js/dist/web/pusher.js":
/*!***************************************************!*\
  !*** ./node_modules/pusher-js/dist/web/pusher.js ***!
  \***************************************************/
/***/ ((module) => {

/*!
 * Pusher JavaScript Library v7.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(window, function () {
  return /******/function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __nested_webpack_require_689__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/if (installedModules[moduleId]) {
        /******/return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/i: moduleId,
        /******/l: false,
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_689__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __nested_webpack_require_689__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __nested_webpack_require_689__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __nested_webpack_require_689__.d = function (exports, name, getter) {
      /******/if (!__nested_webpack_require_689__.o(exports, name)) {
        /******/Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __nested_webpack_require_689__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __nested_webpack_require_689__.t = function (value, mode) {
      /******/if (mode & 1) value = __nested_webpack_require_689__(value);
      /******/
      if (mode & 8) return value;
      /******/
      if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/
      var ns = Object.create(null);
      /******/
      __nested_webpack_require_689__.r(ns);
      /******/
      Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/
      if (mode & 2 && typeof value != 'string') for (var key in value) {
        __nested_webpack_require_689__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      }
      /******/
      return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __nested_webpack_require_689__.n = function (module) {
      /******/var getter = module && module.__esModule ? /******/function getDefault() {
        return module['default'];
      } : /******/function getModuleExports() {
        return module;
      };
      /******/
      __nested_webpack_require_689__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __nested_webpack_require_689__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __nested_webpack_require_689__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __nested_webpack_require_689__(__nested_webpack_require_689__.s = 2);
    /******/
  }
  /************************************************************************/
  /******/([( /* 0 */
  /***/function (module, exports, __webpack_require__) {
    "use strict";

    // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.
    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics(d, b);
      };
      return function (d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Package base64 implements Base64 encoding and decoding.
     */
    // Invalid character used in decoding to indicate
    // that the character to decode is out of range of
    // alphabet and cannot be decoded.
    var INVALID_BYTE = 256;
    /**
     * Implements standard Base64 encoding.
     *
     * Operates in constant time.
     */
    var Coder = /** @class */function () {
      // TODO(dchest): methods to encode chunk-by-chunk.
      function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) {
          _paddingCharacter = "=";
        }
        this._paddingCharacter = _paddingCharacter;
      }
      Coder.prototype.encodedLength = function (length) {
        if (!this._paddingCharacter) {
          return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
      };
      Coder.prototype.encode = function (data) {
        var out = "";
        var i = 0;
        for (; i < data.length - 2; i += 3) {
          var c = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
          out += this._encodeByte(c >>> 3 * 6 & 63);
          out += this._encodeByte(c >>> 2 * 6 & 63);
          out += this._encodeByte(c >>> 1 * 6 & 63);
          out += this._encodeByte(c >>> 0 * 6 & 63);
        }
        var left = data.length - i;
        if (left > 0) {
          var c = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
          out += this._encodeByte(c >>> 3 * 6 & 63);
          out += this._encodeByte(c >>> 2 * 6 & 63);
          if (left === 2) {
            out += this._encodeByte(c >>> 1 * 6 & 63);
          } else {
            out += this._paddingCharacter || "";
          }
          out += this._paddingCharacter || "";
        }
        return out;
      };
      Coder.prototype.maxDecodedLength = function (length) {
        if (!this._paddingCharacter) {
          return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
      };
      Coder.prototype.decodedLength = function (s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
      };
      Coder.prototype.decode = function (s) {
        if (s.length === 0) {
          return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0,
          v1 = 0,
          v2 = 0,
          v3 = 0;
        for (; i < length - 4; i += 4) {
          v0 = this._decodeChar(s.charCodeAt(i + 0));
          v1 = this._decodeChar(s.charCodeAt(i + 1));
          v2 = this._decodeChar(s.charCodeAt(i + 2));
          v3 = this._decodeChar(s.charCodeAt(i + 3));
          out[op++] = v0 << 2 | v1 >>> 4;
          out[op++] = v1 << 4 | v2 >>> 2;
          out[op++] = v2 << 6 | v3;
          haveBad |= v0 & INVALID_BYTE;
          haveBad |= v1 & INVALID_BYTE;
          haveBad |= v2 & INVALID_BYTE;
          haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
          v0 = this._decodeChar(s.charCodeAt(i));
          v1 = this._decodeChar(s.charCodeAt(i + 1));
          out[op++] = v0 << 2 | v1 >>> 4;
          haveBad |= v0 & INVALID_BYTE;
          haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
          v2 = this._decodeChar(s.charCodeAt(i + 2));
          out[op++] = v1 << 4 | v2 >>> 2;
          haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
          v3 = this._decodeChar(s.charCodeAt(i + 3));
          out[op++] = v2 << 6 | v3;
          haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
          throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
      };
      // Standard encoding have the following encoded/decoded ranges,
      // which we need to convert between.
      //
      // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
      // Index:   0 - 25                    26 - 51              52 - 61   62  63
      // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
      //
      // Encode 6 bits in b into a new character.
      Coder.prototype._encodeByte = function (b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
        // b > 51
        result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
        // b > 61
        result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
        // b > 62
        result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
        return String.fromCharCode(result);
      };
      // Decode a character code into a byte.
      // Must return 256 if character is out of alphabet range.
      Coder.prototype._decodeChar = function (c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
        // c == 47 (c > 46 and c < 48)
        result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
        // c > 47 and c < 58
        result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
        // c > 64 and c < 91
        result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
        // c > 96 and c < 123
        result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
        return result;
      };
      Coder.prototype._getPaddingLength = function (s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
          for (var i = s.length - 1; i >= 0; i--) {
            if (s[i] !== this._paddingCharacter) {
              break;
            }
            paddingLength++;
          }
          if (s.length < 4 || paddingLength > 2) {
            throw new Error("Base64Coder: incorrect padding");
          }
        }
        return paddingLength;
      };
      return Coder;
    }();
    exports.Coder = Coder;
    var stdCoder = new Coder();
    function encode(data) {
      return stdCoder.encode(data);
    }
    exports.encode = encode;
    function decode(s) {
      return stdCoder.decode(s);
    }
    exports.decode = decode;
    /**
     * Implements URL-safe Base64 encoding.
     * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
     *
     * Operates in constant time.
     */
    var URLSafeCoder = /** @class */function (_super) {
      __extends(URLSafeCoder, _super);
      function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      // URL-safe encoding have the following encoded/decoded ranges:
      //
      // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
      // Index:   0 - 25                    26 - 51              52 - 61   62  63
      // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
      //
      URLSafeCoder.prototype._encodeByte = function (b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
        // b > 51
        result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
        // b > 61
        result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
        // b > 62
        result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
        return String.fromCharCode(result);
      };
      URLSafeCoder.prototype._decodeChar = function (c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
        // c == 95 (c > 94 and c < 96)
        result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
        // c > 47 and c < 58
        result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
        // c > 64 and c < 91
        result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
        // c > 96 and c < 123
        result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
        return result;
      };
      return URLSafeCoder;
    }(Coder);
    exports.URLSafeCoder = URLSafeCoder;
    var urlSafeCoder = new URLSafeCoder();
    function encodeURLSafe(data) {
      return urlSafeCoder.encode(data);
    }
    exports.encodeURLSafe = encodeURLSafe;
    function decodeURLSafe(s) {
      return urlSafeCoder.decode(s);
    }
    exports.decodeURLSafe = decodeURLSafe;
    exports.encodedLength = function (length) {
      return stdCoder.encodedLength(length);
    };
    exports.maxDecodedLength = function (length) {
      return stdCoder.maxDecodedLength(length);
    };
    exports.decodedLength = function (s) {
      return stdCoder.decodedLength(s);
    };

    /***/
  }), ( /* 1 */
  /***/function (module, exports, __webpack_require__) {
    "use strict";

    // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Package utf8 implements UTF-8 encoding and decoding.
     */
    var INVALID_UTF16 = "utf8: invalid string";
    var INVALID_UTF8 = "utf8: invalid source encoding";
    /**
     * Encodes the given string into UTF-8 byte array.
     * Throws if the source string has invalid UTF-16 encoding.
     */
    function encode(s) {
      // Calculate result length and allocate output array.
      // encodedLength() also validates string and throws errors,
      // so we don't need repeat validation here.
      var arr = new Uint8Array(encodedLength(s));
      var pos = 0;
      for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
          arr[pos++] = c;
        } else if (c < 0x800) {
          arr[pos++] = 0xc0 | c >> 6;
          arr[pos++] = 0x80 | c & 0x3f;
        } else if (c < 0xd800) {
          arr[pos++] = 0xe0 | c >> 12;
          arr[pos++] = 0x80 | c >> 6 & 0x3f;
          arr[pos++] = 0x80 | c & 0x3f;
        } else {
          i++; // get one more character
          c = (c & 0x3ff) << 10;
          c |= s.charCodeAt(i) & 0x3ff;
          c += 0x10000;
          arr[pos++] = 0xf0 | c >> 18;
          arr[pos++] = 0x80 | c >> 12 & 0x3f;
          arr[pos++] = 0x80 | c >> 6 & 0x3f;
          arr[pos++] = 0x80 | c & 0x3f;
        }
      }
      return arr;
    }
    exports.encode = encode;
    /**
     * Returns the number of bytes required to encode the given string into UTF-8.
     * Throws if the source string has invalid UTF-16 encoding.
     */
    function encodedLength(s) {
      var result = 0;
      for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
          result += 1;
        } else if (c < 0x800) {
          result += 2;
        } else if (c < 0xd800) {
          result += 3;
        } else if (c <= 0xdfff) {
          if (i >= s.length - 1) {
            throw new Error(INVALID_UTF16);
          }
          i++; // "eat" next character
          result += 4;
        } else {
          throw new Error(INVALID_UTF16);
        }
      }
      return result;
    }
    exports.encodedLength = encodedLength;
    /**
     * Decodes the given byte array from UTF-8 into a string.
     * Throws if encoding is invalid.
     */
    function decode(arr) {
      var chars = [];
      for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        if (b & 0x80) {
          var min = void 0;
          if (b < 0xe0) {
            // Need 1 more byte.
            if (i >= arr.length) {
              throw new Error(INVALID_UTF8);
            }
            var n1 = arr[++i];
            if ((n1 & 0xc0) !== 0x80) {
              throw new Error(INVALID_UTF8);
            }
            b = (b & 0x1f) << 6 | n1 & 0x3f;
            min = 0x80;
          } else if (b < 0xf0) {
            // Need 2 more bytes.
            if (i >= arr.length - 1) {
              throw new Error(INVALID_UTF8);
            }
            var n1 = arr[++i];
            var n2 = arr[++i];
            if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80) {
              throw new Error(INVALID_UTF8);
            }
            b = (b & 0x0f) << 12 | (n1 & 0x3f) << 6 | n2 & 0x3f;
            min = 0x800;
          } else if (b < 0xf8) {
            // Need 3 more bytes.
            if (i >= arr.length - 2) {
              throw new Error(INVALID_UTF8);
            }
            var n1 = arr[++i];
            var n2 = arr[++i];
            var n3 = arr[++i];
            if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80 || (n3 & 0xc0) !== 0x80) {
              throw new Error(INVALID_UTF8);
            }
            b = (b & 0x0f) << 18 | (n1 & 0x3f) << 12 | (n2 & 0x3f) << 6 | n3 & 0x3f;
            min = 0x10000;
          } else {
            throw new Error(INVALID_UTF8);
          }
          if (b < min || b >= 0xd800 && b <= 0xdfff) {
            throw new Error(INVALID_UTF8);
          }
          if (b >= 0x10000) {
            // Surrogate pair.
            if (b > 0x10ffff) {
              throw new Error(INVALID_UTF8);
            }
            b -= 0x10000;
            chars.push(String.fromCharCode(0xd800 | b >> 10));
            b = 0xdc00 | b & 0x3ff;
          }
        }
        chars.push(String.fromCharCode(b));
      }
      return chars.join("");
    }
    exports.decode = decode;

    /***/
  }), ( /* 2 */
  /***/function (module, exports, __nested_webpack_require_20504__) {
    // required so we don't have to do require('pusher').default etc.
    module.exports = __nested_webpack_require_20504__(3)["default"];

    /***/
  }), ( /* 3 */
  /***/function (module, __nested_webpack_exports__, __nested_webpack_require_20726__) {
    "use strict";

    // ESM COMPAT FLAG
    __nested_webpack_require_20726__.r(__nested_webpack_exports__);

    // CONCATENATED MODULE: ./src/runtimes/web/dom/script_receiver_factory.ts
    var ScriptReceiverFactory = function () {
      function ScriptReceiverFactory(prefix, name) {
        this.lastId = 0;
        this.prefix = prefix;
        this.name = name;
      }
      ScriptReceiverFactory.prototype.create = function (callback) {
        this.lastId++;
        var number = this.lastId;
        var id = this.prefix + number;
        var name = this.name + '[' + number + ']';
        var called = false;
        var callbackWrapper = function callbackWrapper() {
          if (!called) {
            callback.apply(null, arguments);
            called = true;
          }
        };
        this[number] = callbackWrapper;
        return {
          number: number,
          id: id,
          name: name,
          callback: callbackWrapper
        };
      };
      ScriptReceiverFactory.prototype.remove = function (receiver) {
        delete this[receiver.number];
      };
      return ScriptReceiverFactory;
    }();
    var ScriptReceivers = new ScriptReceiverFactory('_pusher_script_', 'Pusher.ScriptReceivers');

    // CONCATENATED MODULE: ./src/core/defaults.ts
    var Defaults = {
      VERSION: "7.4.0",
      PROTOCOL: 7,
      wsPort: 80,
      wssPort: 443,
      wsPath: '',
      httpHost: 'sockjs.pusher.com',
      httpPort: 80,
      httpsPort: 443,
      httpPath: '/pusher',
      stats_host: 'stats.pusher.com',
      authEndpoint: '/pusher/auth',
      authTransport: 'ajax',
      activityTimeout: 120000,
      pongTimeout: 30000,
      unavailableTimeout: 10000,
      cluster: 'mt1',
      userAuthentication: {
        endpoint: '/pusher/user-auth',
        transport: 'ajax'
      },
      channelAuthorization: {
        endpoint: '/pusher/auth',
        transport: 'ajax'
      },
      cdn_http: "http://js.pusher.com",
      cdn_https: "https://js.pusher.com",
      dependency_suffix: ""
    };
    /* harmony default export */
    var defaults = Defaults;

    // CONCATENATED MODULE: ./src/runtimes/web/dom/dependency_loader.ts

    var dependency_loader_DependencyLoader = function () {
      function DependencyLoader(options) {
        this.options = options;
        this.receivers = options.receivers || ScriptReceivers;
        this.loading = {};
      }
      DependencyLoader.prototype.load = function (name, options, callback) {
        var self = this;
        if (self.loading[name] && self.loading[name].length > 0) {
          self.loading[name].push(callback);
        } else {
          self.loading[name] = [callback];
          var request = runtime.createScriptRequest(self.getPath(name, options));
          var receiver = self.receivers.create(function (error) {
            self.receivers.remove(receiver);
            if (self.loading[name]) {
              var callbacks = self.loading[name];
              delete self.loading[name];
              var successCallback = function successCallback(wasSuccessful) {
                if (!wasSuccessful) {
                  request.cleanup();
                }
              };
              for (var i = 0; i < callbacks.length; i++) {
                callbacks[i](error, successCallback);
              }
            }
          });
          request.send(receiver);
        }
      };
      DependencyLoader.prototype.getRoot = function (options) {
        var cdn;
        var protocol = runtime.getDocument().location.protocol;
        if (options && options.useTLS || protocol === 'https:') {
          cdn = this.options.cdn_https;
        } else {
          cdn = this.options.cdn_http;
        }
        return cdn.replace(/\/*$/, '') + '/' + this.options.version;
      };
      DependencyLoader.prototype.getPath = function (name, options) {
        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
      };
      return DependencyLoader;
    }();
    /* harmony default export */
    var dependency_loader = dependency_loader_DependencyLoader;

    // CONCATENATED MODULE: ./src/runtimes/web/dom/dependencies.ts

    var DependenciesReceivers = new ScriptReceiverFactory('_pusher_dependencies', 'Pusher.DependenciesReceivers');
    var Dependencies = new dependency_loader({
      cdn_http: defaults.cdn_http,
      cdn_https: defaults.cdn_https,
      version: defaults.VERSION,
      suffix: defaults.dependency_suffix,
      receivers: DependenciesReceivers
    });

    // CONCATENATED MODULE: ./src/core/utils/url_store.ts
    var urlStore = {
      baseUrl: 'https://pusher.com',
      urls: {
        authenticationEndpoint: {
          path: '/docs/channels/server_api/authenticating_users'
        },
        authorizationEndpoint: {
          path: '/docs/channels/server_api/authorizing-users/'
        },
        javascriptQuickStart: {
          path: '/docs/javascript_quick_start'
        },
        triggeringClientEvents: {
          path: '/docs/client_api_guide/client_events#trigger-events'
        },
        encryptedChannelSupport: {
          fullUrl: 'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support'
        }
      }
    };
    var buildLogSuffix = function buildLogSuffix(key) {
      var urlPrefix = 'See:';
      var urlObj = urlStore.urls[key];
      if (!urlObj) return '';
      var url;
      if (urlObj.fullUrl) {
        url = urlObj.fullUrl;
      } else if (urlObj.path) {
        url = urlStore.baseUrl + urlObj.path;
      }
      if (!url) return '';
      return urlPrefix + " " + url;
    };
    /* harmony default export */
    var url_store = {
      buildLogSuffix: buildLogSuffix
    };

    // CONCATENATED MODULE: ./src/core/auth/options.ts
    var AuthRequestType;
    (function (AuthRequestType) {
      AuthRequestType["UserAuthentication"] = "user-authentication";
      AuthRequestType["ChannelAuthorization"] = "channel-authorization";
    })(AuthRequestType || (AuthRequestType = {}));

    // CONCATENATED MODULE: ./src/core/errors.ts
    var __extends =  false || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics2(d, b);
      };
      return function (d, b) {
        _extendStatics2(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var BadEventName = function (_super) {
      __extends(BadEventName, _super);
      function BadEventName(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return BadEventName;
    }(Error);
    var BadChannelName = function (_super) {
      __extends(BadChannelName, _super);
      function BadChannelName(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return BadChannelName;
    }(Error);
    var RequestTimedOut = function (_super) {
      __extends(RequestTimedOut, _super);
      function RequestTimedOut(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return RequestTimedOut;
    }(Error);
    var TransportPriorityTooLow = function (_super) {
      __extends(TransportPriorityTooLow, _super);
      function TransportPriorityTooLow(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return TransportPriorityTooLow;
    }(Error);
    var TransportClosed = function (_super) {
      __extends(TransportClosed, _super);
      function TransportClosed(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return TransportClosed;
    }(Error);
    var UnsupportedFeature = function (_super) {
      __extends(UnsupportedFeature, _super);
      function UnsupportedFeature(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return UnsupportedFeature;
    }(Error);
    var UnsupportedTransport = function (_super) {
      __extends(UnsupportedTransport, _super);
      function UnsupportedTransport(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return UnsupportedTransport;
    }(Error);
    var UnsupportedStrategy = function (_super) {
      __extends(UnsupportedStrategy, _super);
      function UnsupportedStrategy(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return UnsupportedStrategy;
    }(Error);
    var HTTPAuthError = function (_super) {
      __extends(HTTPAuthError, _super);
      function HTTPAuthError(status, msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        _this.status = status;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
      }
      return HTTPAuthError;
    }(Error);

    // CONCATENATED MODULE: ./src/runtimes/isomorphic/auth/xhr_auth.ts

    var ajax = function ajax(context, query, authOptions, authRequestType, callback) {
      var xhr = runtime.createXHR();
      xhr.open('POST', authOptions.endpoint, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      for (var headerName in authOptions.headers) {
        xhr.setRequestHeader(headerName, authOptions.headers[headerName]);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var data = void 0;
            var parsed = false;
            try {
              data = JSON.parse(xhr.responseText);
              parsed = true;
            } catch (e) {
              callback(new HTTPAuthError(200, "JSON returned from " + authRequestType.toString() + " endpoint was invalid, yet status code was 200. Data was: " + xhr.responseText), null);
            }
            if (parsed) {
              callback(null, data);
            }
          } else {
            var suffix = '';
            switch (authRequestType) {
              case AuthRequestType.UserAuthentication:
                suffix = url_store.buildLogSuffix('authenticationEndpoint');
                break;
              case AuthRequestType.ChannelAuthorization:
                suffix = "Clients must be authenticated to join private or presence channels. " + url_store.buildLogSuffix('authorizationEndpoint');
                break;
            }
            callback(new HTTPAuthError(xhr.status, "Unable to retrieve auth string from " + authRequestType.toString() + " endpoint - " + ("received status: " + xhr.status + " from " + authOptions.endpoint + ". " + suffix)), null);
          }
        }
      };
      xhr.send(query);
      return xhr;
    };
    /* harmony default export */
    var xhr_auth = ajax;

    // CONCATENATED MODULE: ./src/core/base64.ts
    function encode(s) {
      return btoa(utob(s));
    }
    var fromCharCode = String.fromCharCode;
    var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = {};
    for (var base64_i = 0, l = b64chars.length; base64_i < l; base64_i++) {
      b64tab[b64chars.charAt(base64_i)] = base64_i;
    }
    var cb_utob = function cb_utob(c) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    };
    var utob = function utob(u) {
      return u.replace(/[^\x00-\x7F]/g, cb_utob);
    };
    var cb_encode = function cb_encode(ccc) {
      var padlen = [0, 2, 1][ccc.length % 3];
      var ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
      var chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
      return chars.join('');
    };
    var btoa = window.btoa || function (b) {
      return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };

    // CONCATENATED MODULE: ./src/core/utils/timers/abstract_timer.ts
    var Timer = function () {
      function Timer(set, clear, delay, callback) {
        var _this = this;
        this.clear = clear;
        this.timer = set(function () {
          if (_this.timer) {
            _this.timer = callback(_this.timer);
          }
        }, delay);
      }
      Timer.prototype.isRunning = function () {
        return this.timer !== null;
      };
      Timer.prototype.ensureAborted = function () {
        if (this.timer) {
          this.clear(this.timer);
          this.timer = null;
        }
      };
      return Timer;
    }();
    /* harmony default export */
    var abstract_timer = Timer;

    // CONCATENATED MODULE: ./src/core/utils/timers/index.ts
    var timers_extends =  false || function () {
      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics3(d, b);
      };
      return function (d, b) {
        _extendStatics3(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    function timers_clearTimeout(timer) {
      window.clearTimeout(timer);
    }
    function timers_clearInterval(timer) {
      window.clearInterval(timer);
    }
    var OneOffTimer = function (_super) {
      timers_extends(OneOffTimer, _super);
      function OneOffTimer(delay, callback) {
        return _super.call(this, setTimeout, timers_clearTimeout, delay, function (timer) {
          callback();
          return null;
        }) || this;
      }
      return OneOffTimer;
    }(abstract_timer);
    var PeriodicTimer = function (_super) {
      timers_extends(PeriodicTimer, _super);
      function PeriodicTimer(delay, callback) {
        return _super.call(this, setInterval, timers_clearInterval, delay, function (timer) {
          callback();
          return timer;
        }) || this;
      }
      return PeriodicTimer;
    }(abstract_timer);

    // CONCATENATED MODULE: ./src/core/util.ts

    var Util = {
      now: function now() {
        if (Date.now) {
          return Date.now();
        } else {
          return new Date().valueOf();
        }
      },
      defer: function defer(callback) {
        return new OneOffTimer(0, callback);
      },
      method: function method(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var boundArguments = Array.prototype.slice.call(arguments, 1);
        return function (object) {
          return object[name].apply(object, boundArguments.concat(arguments));
        };
      }
    };
    /* harmony default export */
    var util = Util;

    // CONCATENATED MODULE: ./src/core/utils/collections.ts

    function extend(target) {
      var sources = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
      }
      for (var i = 0; i < sources.length; i++) {
        var extensions = sources[i];
        for (var property in extensions) {
          if (extensions[property] && extensions[property].constructor && extensions[property].constructor === Object) {
            target[property] = extend(target[property] || {}, extensions[property]);
          } else {
            target[property] = extensions[property];
          }
        }
      }
      return target;
    }
    function stringify() {
      var m = ['Pusher'];
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
          m.push(arguments[i]);
        } else {
          m.push(safeJSONStringify(arguments[i]));
        }
      }
      return m.join(' : ');
    }
    function arrayIndexOf(array, item) {
      var nativeIndexOf = Array.prototype.indexOf;
      if (array === null) {
        return -1;
      }
      if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item);
      }
      for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === item) {
          return i;
        }
      }
      return -1;
    }
    function objectApply(object, f) {
      for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          f(object[key], key, object);
        }
      }
    }
    function keys(object) {
      var keys = [];
      objectApply(object, function (_, key) {
        keys.push(key);
      });
      return keys;
    }
    function values(object) {
      var values = [];
      objectApply(object, function (value) {
        values.push(value);
      });
      return values;
    }
    function apply(array, f, context) {
      for (var i = 0; i < array.length; i++) {
        f.call(context || window, array[i], i, array);
      }
    }
    function map(array, f) {
      var result = [];
      for (var i = 0; i < array.length; i++) {
        result.push(f(array[i], i, array, result));
      }
      return result;
    }
    function mapObject(object, f) {
      var result = {};
      objectApply(object, function (value, key) {
        result[key] = f(value);
      });
      return result;
    }
    function filter(array, test) {
      test = test || function (value) {
        return !!value;
      };
      var result = [];
      for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array, result)) {
          result.push(array[i]);
        }
      }
      return result;
    }
    function filterObject(object, test) {
      var result = {};
      objectApply(object, function (value, key) {
        if (test && test(value, key, object, result) || Boolean(value)) {
          result[key] = value;
        }
      });
      return result;
    }
    function flatten(object) {
      var result = [];
      objectApply(object, function (value, key) {
        result.push([key, value]);
      });
      return result;
    }
    function any(array, test) {
      for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
          return true;
        }
      }
      return false;
    }
    function collections_all(array, test) {
      for (var i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
          return false;
        }
      }
      return true;
    }
    function encodeParamsObject(data) {
      return mapObject(data, function (value) {
        if (typeof value === 'object') {
          value = safeJSONStringify(value);
        }
        return encodeURIComponent(encode(value.toString()));
      });
    }
    function buildQueryString(data) {
      var params = filterObject(data, function (value) {
        return value !== undefined;
      });
      var query = map(flatten(encodeParamsObject(params)), util.method('join', '=')).join('&');
      return query;
    }
    function decycleObject(object) {
      var objects = [],
        paths = [];
      return function derez(value, path) {
        var i, name, nu;
        switch (typeof value) {
          case 'object':
            if (!value) {
              return null;
            }
            for (i = 0; i < objects.length; i += 1) {
              if (objects[i] === value) {
                return {
                  $ref: paths[i]
                };
              }
            }
            objects.push(value);
            paths.push(path);
            if (Object.prototype.toString.apply(value) === '[object Array]') {
              nu = [];
              for (i = 0; i < value.length; i += 1) {
                nu[i] = derez(value[i], path + '[' + i + ']');
              }
            } else {
              nu = {};
              for (name in value) {
                if (Object.prototype.hasOwnProperty.call(value, name)) {
                  nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                }
              }
            }
            return nu;
          case 'number':
          case 'string':
          case 'boolean':
            return value;
        }
      }(object, '$');
    }
    function safeJSONStringify(source) {
      try {
        return JSON.stringify(source);
      } catch (e) {
        return JSON.stringify(decycleObject(source));
      }
    }

    // CONCATENATED MODULE: ./src/core/logger.ts

    var logger_Logger = function () {
      function Logger() {
        this.globalLog = function (message) {
          if (window.console && window.console.log) {
            window.console.log(message);
          }
        };
      }
      Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this.log(this.globalLog, args);
      };
      Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this.log(this.globalLogWarn, args);
      };
      Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        this.log(this.globalLogError, args);
      };
      Logger.prototype.globalLogWarn = function (message) {
        if (window.console && window.console.warn) {
          window.console.warn(message);
        } else {
          this.globalLog(message);
        }
      };
      Logger.prototype.globalLogError = function (message) {
        if (window.console && window.console.error) {
          window.console.error(message);
        } else {
          this.globalLogWarn(message);
        }
      };
      Logger.prototype.log = function (defaultLoggingFunction) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var message = stringify.apply(this, arguments);
        if (core_pusher.log) {
          core_pusher.log(message);
        } else if (core_pusher.logToConsole) {
          var log = defaultLoggingFunction.bind(this);
          log(message);
        }
      };
      return Logger;
    }();
    /* harmony default export */
    var logger = new logger_Logger();

    // CONCATENATED MODULE: ./src/runtimes/web/auth/jsonp_auth.ts

    var jsonp = function jsonp(context, query, authOptions, authRequestType, callback) {
      if (authOptions.headers !== undefined) {
        logger.warn("To send headers with the " + authRequestType.toString() + " request, you must use AJAX, rather than JSONP.");
      }
      var callbackName = context.nextAuthCallbackID.toString();
      context.nextAuthCallbackID++;
      var document = context.getDocument();
      var script = document.createElement('script');
      context.auth_callbacks[callbackName] = function (data) {
        callback(null, data);
      };
      var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
      script.src = authOptions.endpoint + '?callback=' + encodeURIComponent(callback_name) + '&' + query;
      var head = document.getElementsByTagName('head')[0] || document.documentElement;
      head.insertBefore(script, head.firstChild);
    };
    /* harmony default export */
    var jsonp_auth = jsonp;

    // CONCATENATED MODULE: ./src/runtimes/web/dom/script_request.ts
    var ScriptRequest = function () {
      function ScriptRequest(src) {
        this.src = src;
      }
      ScriptRequest.prototype.send = function (receiver) {
        var self = this;
        var errorString = 'Error loading ' + self.src;
        self.script = document.createElement('script');
        self.script.id = receiver.id;
        self.script.src = self.src;
        self.script.type = 'text/javascript';
        self.script.charset = 'UTF-8';
        if (self.script.addEventListener) {
          self.script.onerror = function () {
            receiver.callback(errorString);
          };
          self.script.onload = function () {
            receiver.callback(null);
          };
        } else {
          self.script.onreadystatechange = function () {
            if (self.script.readyState === 'loaded' || self.script.readyState === 'complete') {
              receiver.callback(null);
            }
          };
        }
        if (self.script.async === undefined && document.attachEvent && /opera/i.test(navigator.userAgent)) {
          self.errorScript = document.createElement('script');
          self.errorScript.id = receiver.id + '_error';
          self.errorScript.text = receiver.name + "('" + errorString + "');";
          self.script.async = self.errorScript.async = false;
        } else {
          self.script.async = true;
        }
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(self.script, head.firstChild);
        if (self.errorScript) {
          head.insertBefore(self.errorScript, self.script.nextSibling);
        }
      };
      ScriptRequest.prototype.cleanup = function () {
        if (this.script) {
          this.script.onload = this.script.onerror = null;
          this.script.onreadystatechange = null;
        }
        if (this.script && this.script.parentNode) {
          this.script.parentNode.removeChild(this.script);
        }
        if (this.errorScript && this.errorScript.parentNode) {
          this.errorScript.parentNode.removeChild(this.errorScript);
        }
        this.script = null;
        this.errorScript = null;
      };
      return ScriptRequest;
    }();
    /* harmony default export */
    var script_request = ScriptRequest;

    // CONCATENATED MODULE: ./src/runtimes/web/dom/jsonp_request.ts

    var jsonp_request_JSONPRequest = function () {
      function JSONPRequest(url, data) {
        this.url = url;
        this.data = data;
      }
      JSONPRequest.prototype.send = function (receiver) {
        if (this.request) {
          return;
        }
        var query = buildQueryString(this.data);
        var url = this.url + '/' + receiver.number + '?' + query;
        this.request = runtime.createScriptRequest(url);
        this.request.send(receiver);
      };
      JSONPRequest.prototype.cleanup = function () {
        if (this.request) {
          this.request.cleanup();
        }
      };
      return JSONPRequest;
    }();
    /* harmony default export */
    var jsonp_request = jsonp_request_JSONPRequest;

    // CONCATENATED MODULE: ./src/runtimes/web/timeline/jsonp_timeline.ts

    var getAgent = function getAgent(sender, useTLS) {
      return function (data, callback) {
        var scheme = 'http' + (useTLS ? 's' : '') + '://';
        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
        var request = runtime.createJSONPRequest(url, data);
        var receiver = runtime.ScriptReceivers.create(function (error, result) {
          ScriptReceivers.remove(receiver);
          request.cleanup();
          if (result && result.host) {
            sender.host = result.host;
          }
          if (callback) {
            callback(error, result);
          }
        });
        request.send(receiver);
      };
    };
    var jsonp_timeline_jsonp = {
      name: 'jsonp',
      getAgent: getAgent
    };
    /* harmony default export */
    var jsonp_timeline = jsonp_timeline_jsonp;

    // CONCATENATED MODULE: ./src/core/transports/url_schemes.ts

    function getGenericURL(baseScheme, params, path) {
      var scheme = baseScheme + (params.useTLS ? 's' : '');
      var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
      return scheme + '://' + host + path;
    }
    function getGenericPath(key, queryString) {
      var path = '/app/' + key;
      var query = '?protocol=' + defaults.PROTOCOL + '&client=js' + '&version=' + defaults.VERSION + (queryString ? '&' + queryString : '');
      return path + query;
    }
    var ws = {
      getInitial: function getInitial(key, params) {
        var path = (params.httpPath || '') + getGenericPath(key, 'flash=false');
        return getGenericURL('ws', params, path);
      }
    };
    var http = {
      getInitial: function getInitial(key, params) {
        var path = (params.httpPath || '/pusher') + getGenericPath(key);
        return getGenericURL('http', params, path);
      }
    };
    var sockjs = {
      getInitial: function getInitial(key, params) {
        return getGenericURL('http', params, params.httpPath || '/pusher');
      },
      getPath: function getPath(key, params) {
        return getGenericPath(key);
      }
    };

    // CONCATENATED MODULE: ./src/core/events/callback_registry.ts

    var callback_registry_CallbackRegistry = function () {
      function CallbackRegistry() {
        this._callbacks = {};
      }
      CallbackRegistry.prototype.get = function (name) {
        return this._callbacks[prefix(name)];
      };
      CallbackRegistry.prototype.add = function (name, callback, context) {
        var prefixedEventName = prefix(name);
        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
        this._callbacks[prefixedEventName].push({
          fn: callback,
          context: context
        });
      };
      CallbackRegistry.prototype.remove = function (name, callback, context) {
        if (!name && !callback && !context) {
          this._callbacks = {};
          return;
        }
        var names = name ? [prefix(name)] : keys(this._callbacks);
        if (callback || context) {
          this.removeCallback(names, callback, context);
        } else {
          this.removeAllCallbacks(names);
        }
      };
      CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
        apply(names, function (name) {
          this._callbacks[name] = filter(this._callbacks[name] || [], function (binding) {
            return callback && callback !== binding.fn || context && context !== binding.context;
          });
          if (this._callbacks[name].length === 0) {
            delete this._callbacks[name];
          }
        }, this);
      };
      CallbackRegistry.prototype.removeAllCallbacks = function (names) {
        apply(names, function (name) {
          delete this._callbacks[name];
        }, this);
      };
      return CallbackRegistry;
    }();
    /* harmony default export */
    var callback_registry = callback_registry_CallbackRegistry;
    function prefix(name) {
      return '_' + name;
    }

    // CONCATENATED MODULE: ./src/core/events/dispatcher.ts

    var dispatcher_Dispatcher = function () {
      function Dispatcher(failThrough) {
        this.callbacks = new callback_registry();
        this.global_callbacks = [];
        this.failThrough = failThrough;
      }
      Dispatcher.prototype.bind = function (eventName, callback, context) {
        this.callbacks.add(eventName, callback, context);
        return this;
      };
      Dispatcher.prototype.bind_global = function (callback) {
        this.global_callbacks.push(callback);
        return this;
      };
      Dispatcher.prototype.unbind = function (eventName, callback, context) {
        this.callbacks.remove(eventName, callback, context);
        return this;
      };
      Dispatcher.prototype.unbind_global = function (callback) {
        if (!callback) {
          this.global_callbacks = [];
          return this;
        }
        this.global_callbacks = filter(this.global_callbacks || [], function (c) {
          return c !== callback;
        });
        return this;
      };
      Dispatcher.prototype.unbind_all = function () {
        this.unbind();
        this.unbind_global();
        return this;
      };
      Dispatcher.prototype.emit = function (eventName, data, metadata) {
        for (var i = 0; i < this.global_callbacks.length; i++) {
          this.global_callbacks[i](eventName, data);
        }
        var callbacks = this.callbacks.get(eventName);
        var args = [];
        if (metadata) {
          args.push(data, metadata);
        } else if (data) {
          args.push(data);
        }
        if (callbacks && callbacks.length > 0) {
          for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].fn.apply(callbacks[i].context || window, args);
          }
        } else if (this.failThrough) {
          this.failThrough(eventName, data);
        }
        return this;
      };
      return Dispatcher;
    }();
    /* harmony default export */
    var dispatcher = dispatcher_Dispatcher;

    // CONCATENATED MODULE: ./src/core/transports/transport_connection.ts
    var transport_connection_extends =  false || function () {
      var _extendStatics4 = function extendStatics(d, b) {
        _extendStatics4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics4(d, b);
      };
      return function (d, b) {
        _extendStatics4(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var transport_connection_TransportConnection = function (_super) {
      transport_connection_extends(TransportConnection, _super);
      function TransportConnection(hooks, name, priority, key, options) {
        var _this = _super.call(this) || this;
        _this.initialize = runtime.transportConnectionInitializer;
        _this.hooks = hooks;
        _this.name = name;
        _this.priority = priority;
        _this.key = key;
        _this.options = options;
        _this.state = 'new';
        _this.timeline = options.timeline;
        _this.activityTimeout = options.activityTimeout;
        _this.id = _this.timeline.generateUniqueID();
        return _this;
      }
      TransportConnection.prototype.handlesActivityChecks = function () {
        return Boolean(this.hooks.handlesActivityChecks);
      };
      TransportConnection.prototype.supportsPing = function () {
        return Boolean(this.hooks.supportsPing);
      };
      TransportConnection.prototype.connect = function () {
        var _this = this;
        if (this.socket || this.state !== 'initialized') {
          return false;
        }
        var url = this.hooks.urls.getInitial(this.key, this.options);
        try {
          this.socket = this.hooks.getSocket(url, this.options);
        } catch (e) {
          util.defer(function () {
            _this.onError(e);
            _this.changeState('closed');
          });
          return false;
        }
        this.bindListeners();
        logger.debug('Connecting', {
          transport: this.name,
          url: url
        });
        this.changeState('connecting');
        return true;
      };
      TransportConnection.prototype.close = function () {
        if (this.socket) {
          this.socket.close();
          return true;
        } else {
          return false;
        }
      };
      TransportConnection.prototype.send = function (data) {
        var _this = this;
        if (this.state === 'open') {
          util.defer(function () {
            if (_this.socket) {
              _this.socket.send(data);
            }
          });
          return true;
        } else {
          return false;
        }
      };
      TransportConnection.prototype.ping = function () {
        if (this.state === 'open' && this.supportsPing()) {
          this.socket.ping();
        }
      };
      TransportConnection.prototype.onOpen = function () {
        if (this.hooks.beforeOpen) {
          this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
        }
        this.changeState('open');
        this.socket.onopen = undefined;
      };
      TransportConnection.prototype.onError = function (error) {
        this.emit('error', {
          type: 'WebSocketError',
          error: error
        });
        this.timeline.error(this.buildTimelineMessage({
          error: error.toString()
        }));
      };
      TransportConnection.prototype.onClose = function (closeEvent) {
        if (closeEvent) {
          this.changeState('closed', {
            code: closeEvent.code,
            reason: closeEvent.reason,
            wasClean: closeEvent.wasClean
          });
        } else {
          this.changeState('closed');
        }
        this.unbindListeners();
        this.socket = undefined;
      };
      TransportConnection.prototype.onMessage = function (message) {
        this.emit('message', message);
      };
      TransportConnection.prototype.onActivity = function () {
        this.emit('activity');
      };
      TransportConnection.prototype.bindListeners = function () {
        var _this = this;
        this.socket.onopen = function () {
          _this.onOpen();
        };
        this.socket.onerror = function (error) {
          _this.onError(error);
        };
        this.socket.onclose = function (closeEvent) {
          _this.onClose(closeEvent);
        };
        this.socket.onmessage = function (message) {
          _this.onMessage(message);
        };
        if (this.supportsPing()) {
          this.socket.onactivity = function () {
            _this.onActivity();
          };
        }
      };
      TransportConnection.prototype.unbindListeners = function () {
        if (this.socket) {
          this.socket.onopen = undefined;
          this.socket.onerror = undefined;
          this.socket.onclose = undefined;
          this.socket.onmessage = undefined;
          if (this.supportsPing()) {
            this.socket.onactivity = undefined;
          }
        }
      };
      TransportConnection.prototype.changeState = function (state, params) {
        this.state = state;
        this.timeline.info(this.buildTimelineMessage({
          state: state,
          params: params
        }));
        this.emit(state, params);
      };
      TransportConnection.prototype.buildTimelineMessage = function (message) {
        return extend({
          cid: this.id
        }, message);
      };
      return TransportConnection;
    }(dispatcher);
    /* harmony default export */
    var transport_connection = transport_connection_TransportConnection;

    // CONCATENATED MODULE: ./src/core/transports/transport.ts

    var transport_Transport = function () {
      function Transport(hooks) {
        this.hooks = hooks;
      }
      Transport.prototype.isSupported = function (environment) {
        return this.hooks.isSupported(environment);
      };
      Transport.prototype.createConnection = function (name, priority, key, options) {
        return new transport_connection(this.hooks, name, priority, key, options);
      };
      return Transport;
    }();
    /* harmony default export */
    var transports_transport = transport_Transport;

    // CONCATENATED MODULE: ./src/runtimes/isomorphic/transports/transports.ts

    var WSTransport = new transports_transport({
      urls: ws,
      handlesActivityChecks: false,
      supportsPing: false,
      isInitialized: function isInitialized() {
        return Boolean(runtime.getWebSocketAPI());
      },
      isSupported: function isSupported() {
        return Boolean(runtime.getWebSocketAPI());
      },
      getSocket: function getSocket(url) {
        return runtime.createWebSocket(url);
      }
    });
    var httpConfiguration = {
      urls: http,
      handlesActivityChecks: false,
      supportsPing: true,
      isInitialized: function isInitialized() {
        return true;
      }
    };
    var streamingConfiguration = extend({
      getSocket: function getSocket(url) {
        return runtime.HTTPFactory.createStreamingSocket(url);
      }
    }, httpConfiguration);
    var pollingConfiguration = extend({
      getSocket: function getSocket(url) {
        return runtime.HTTPFactory.createPollingSocket(url);
      }
    }, httpConfiguration);
    var xhrConfiguration = {
      isSupported: function isSupported() {
        return runtime.isXHRSupported();
      }
    };
    var XHRStreamingTransport = new transports_transport(extend({}, streamingConfiguration, xhrConfiguration));
    var XHRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xhrConfiguration));
    var Transports = {
      ws: WSTransport,
      xhr_streaming: XHRStreamingTransport,
      xhr_polling: XHRPollingTransport
    };
    /* harmony default export */
    var transports = Transports;

    // CONCATENATED MODULE: ./src/runtimes/web/transports/transports.ts

    var SockJSTransport = new transports_transport({
      file: 'sockjs',
      urls: sockjs,
      handlesActivityChecks: true,
      supportsPing: false,
      isSupported: function isSupported() {
        return true;
      },
      isInitialized: function isInitialized() {
        return window.SockJS !== undefined;
      },
      getSocket: function getSocket(url, options) {
        return new window.SockJS(url, null, {
          js_path: Dependencies.getPath('sockjs', {
            useTLS: options.useTLS
          }),
          ignore_null_origin: options.ignoreNullOrigin
        });
      },
      beforeOpen: function beforeOpen(socket, path) {
        socket.send(JSON.stringify({
          path: path
        }));
      }
    });
    var xdrConfiguration = {
      isSupported: function isSupported(environment) {
        var yes = runtime.isXDRSupported(environment.useTLS);
        return yes;
      }
    };
    var XDRStreamingTransport = new transports_transport(extend({}, streamingConfiguration, xdrConfiguration));
    var XDRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xdrConfiguration));
    transports.xdr_streaming = XDRStreamingTransport;
    transports.xdr_polling = XDRPollingTransport;
    transports.sockjs = SockJSTransport;
    /* harmony default export */
    var transports_transports = transports;

    // CONCATENATED MODULE: ./src/runtimes/web/net_info.ts
    var net_info_extends =  false || function () {
      var _extendStatics5 = function extendStatics(d, b) {
        _extendStatics5 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics5(d, b);
      };
      return function (d, b) {
        _extendStatics5(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var NetInfo = function (_super) {
      net_info_extends(NetInfo, _super);
      function NetInfo() {
        var _this = _super.call(this) || this;
        var self = _this;
        if (window.addEventListener !== undefined) {
          window.addEventListener('online', function () {
            self.emit('online');
          }, false);
          window.addEventListener('offline', function () {
            self.emit('offline');
          }, false);
        }
        return _this;
      }
      NetInfo.prototype.isOnline = function () {
        if (window.navigator.onLine === undefined) {
          return true;
        } else {
          return window.navigator.onLine;
        }
      };
      return NetInfo;
    }(dispatcher);
    var net_info_Network = new NetInfo();

    // CONCATENATED MODULE: ./src/core/transports/assistant_to_the_transport_manager.ts

    var assistant_to_the_transport_manager_AssistantToTheTransportManager = function () {
      function AssistantToTheTransportManager(manager, transport, options) {
        this.manager = manager;
        this.transport = transport;
        this.minPingDelay = options.minPingDelay;
        this.maxPingDelay = options.maxPingDelay;
        this.pingDelay = undefined;
      }
      AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
        var _this = this;
        options = extend({}, options, {
          activityTimeout: this.pingDelay
        });
        var connection = this.transport.createConnection(name, priority, key, options);
        var openTimestamp = null;
        var onOpen = function onOpen() {
          connection.unbind('open', onOpen);
          connection.bind('closed', onClosed);
          openTimestamp = util.now();
        };
        var onClosed = function onClosed(closeEvent) {
          connection.unbind('closed', onClosed);
          if (closeEvent.code === 1002 || closeEvent.code === 1003) {
            _this.manager.reportDeath();
          } else if (!closeEvent.wasClean && openTimestamp) {
            var lifespan = util.now() - openTimestamp;
            if (lifespan < 2 * _this.maxPingDelay) {
              _this.manager.reportDeath();
              _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
            }
          }
        };
        connection.bind('open', onOpen);
        return connection;
      };
      AssistantToTheTransportManager.prototype.isSupported = function (environment) {
        return this.manager.isAlive() && this.transport.isSupported(environment);
      };
      return AssistantToTheTransportManager;
    }();
    /* harmony default export */
    var assistant_to_the_transport_manager = assistant_to_the_transport_manager_AssistantToTheTransportManager;

    // CONCATENATED MODULE: ./src/core/connection/protocol/protocol.ts
    var Protocol = {
      decodeMessage: function decodeMessage(messageEvent) {
        try {
          var messageData = JSON.parse(messageEvent.data);
          var pusherEventData = messageData.data;
          if (typeof pusherEventData === 'string') {
            try {
              pusherEventData = JSON.parse(messageData.data);
            } catch (e) {}
          }
          var pusherEvent = {
            event: messageData.event,
            channel: messageData.channel,
            data: pusherEventData
          };
          if (messageData.user_id) {
            pusherEvent.user_id = messageData.user_id;
          }
          return pusherEvent;
        } catch (e) {
          throw {
            type: 'MessageParseError',
            error: e,
            data: messageEvent.data
          };
        }
      },
      encodeMessage: function encodeMessage(event) {
        return JSON.stringify(event);
      },
      processHandshake: function processHandshake(messageEvent) {
        var message = Protocol.decodeMessage(messageEvent);
        if (message.event === 'pusher:connection_established') {
          if (!message.data.activity_timeout) {
            throw 'No activity timeout specified in handshake';
          }
          return {
            action: 'connected',
            id: message.data.socket_id,
            activityTimeout: message.data.activity_timeout * 1000
          };
        } else if (message.event === 'pusher:error') {
          return {
            action: this.getCloseAction(message.data),
            error: this.getCloseError(message.data)
          };
        } else {
          throw 'Invalid handshake';
        }
      },
      getCloseAction: function getCloseAction(closeEvent) {
        if (closeEvent.code < 4000) {
          if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
            return 'backoff';
          } else {
            return null;
          }
        } else if (closeEvent.code === 4000) {
          return 'tls_only';
        } else if (closeEvent.code < 4100) {
          return 'refused';
        } else if (closeEvent.code < 4200) {
          return 'backoff';
        } else if (closeEvent.code < 4300) {
          return 'retry';
        } else {
          return 'refused';
        }
      },
      getCloseError: function getCloseError(closeEvent) {
        if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
          return {
            type: 'PusherError',
            data: {
              code: closeEvent.code,
              message: closeEvent.reason || closeEvent.message
            }
          };
        } else {
          return null;
        }
      }
    };
    /* harmony default export */
    var protocol_protocol = Protocol;

    // CONCATENATED MODULE: ./src/core/connection/connection.ts
    var connection_extends =  false || function () {
      var _extendStatics6 = function extendStatics(d, b) {
        _extendStatics6 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics6(d, b);
      };
      return function (d, b) {
        _extendStatics6(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var connection_Connection = function (_super) {
      connection_extends(Connection, _super);
      function Connection(id, transport) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.transport = transport;
        _this.activityTimeout = transport.activityTimeout;
        _this.bindListeners();
        return _this;
      }
      Connection.prototype.handlesActivityChecks = function () {
        return this.transport.handlesActivityChecks();
      };
      Connection.prototype.send = function (data) {
        return this.transport.send(data);
      };
      Connection.prototype.send_event = function (name, data, channel) {
        var event = {
          event: name,
          data: data
        };
        if (channel) {
          event.channel = channel;
        }
        logger.debug('Event sent', event);
        return this.send(protocol_protocol.encodeMessage(event));
      };
      Connection.prototype.ping = function () {
        if (this.transport.supportsPing()) {
          this.transport.ping();
        } else {
          this.send_event('pusher:ping', {});
        }
      };
      Connection.prototype.close = function () {
        this.transport.close();
      };
      Connection.prototype.bindListeners = function () {
        var _this = this;
        var listeners = {
          message: function message(messageEvent) {
            var pusherEvent;
            try {
              pusherEvent = protocol_protocol.decodeMessage(messageEvent);
            } catch (e) {
              _this.emit('error', {
                type: 'MessageParseError',
                error: e,
                data: messageEvent.data
              });
            }
            if (pusherEvent !== undefined) {
              logger.debug('Event recd', pusherEvent);
              switch (pusherEvent.event) {
                case 'pusher:error':
                  _this.emit('error', {
                    type: 'PusherError',
                    data: pusherEvent.data
                  });
                  break;
                case 'pusher:ping':
                  _this.emit('ping');
                  break;
                case 'pusher:pong':
                  _this.emit('pong');
                  break;
              }
              _this.emit('message', pusherEvent);
            }
          },
          activity: function activity() {
            _this.emit('activity');
          },
          error: function error(_error) {
            _this.emit('error', _error);
          },
          closed: function closed(closeEvent) {
            unbindListeners();
            if (closeEvent && closeEvent.code) {
              _this.handleCloseEvent(closeEvent);
            }
            _this.transport = null;
            _this.emit('closed');
          }
        };
        var unbindListeners = function unbindListeners() {
          objectApply(listeners, function (listener, event) {
            _this.transport.unbind(event, listener);
          });
        };
        objectApply(listeners, function (listener, event) {
          _this.transport.bind(event, listener);
        });
      };
      Connection.prototype.handleCloseEvent = function (closeEvent) {
        var action = protocol_protocol.getCloseAction(closeEvent);
        var error = protocol_protocol.getCloseError(closeEvent);
        if (error) {
          this.emit('error', error);
        }
        if (action) {
          this.emit(action, {
            action: action,
            error: error
          });
        }
      };
      return Connection;
    }(dispatcher);
    /* harmony default export */
    var connection_connection = connection_Connection;

    // CONCATENATED MODULE: ./src/core/connection/handshake/index.ts

    var handshake_Handshake = function () {
      function Handshake(transport, callback) {
        this.transport = transport;
        this.callback = callback;
        this.bindListeners();
      }
      Handshake.prototype.close = function () {
        this.unbindListeners();
        this.transport.close();
      };
      Handshake.prototype.bindListeners = function () {
        var _this = this;
        this.onMessage = function (m) {
          _this.unbindListeners();
          var result;
          try {
            result = protocol_protocol.processHandshake(m);
          } catch (e) {
            _this.finish('error', {
              error: e
            });
            _this.transport.close();
            return;
          }
          if (result.action === 'connected') {
            _this.finish('connected', {
              connection: new connection_connection(result.id, _this.transport),
              activityTimeout: result.activityTimeout
            });
          } else {
            _this.finish(result.action, {
              error: result.error
            });
            _this.transport.close();
          }
        };
        this.onClosed = function (closeEvent) {
          _this.unbindListeners();
          var action = protocol_protocol.getCloseAction(closeEvent) || 'backoff';
          var error = protocol_protocol.getCloseError(closeEvent);
          _this.finish(action, {
            error: error
          });
        };
        this.transport.bind('message', this.onMessage);
        this.transport.bind('closed', this.onClosed);
      };
      Handshake.prototype.unbindListeners = function () {
        this.transport.unbind('message', this.onMessage);
        this.transport.unbind('closed', this.onClosed);
      };
      Handshake.prototype.finish = function (action, params) {
        this.callback(extend({
          transport: this.transport,
          action: action
        }, params));
      };
      return Handshake;
    }();
    /* harmony default export */
    var connection_handshake = handshake_Handshake;

    // CONCATENATED MODULE: ./src/core/timeline/timeline_sender.ts

    var timeline_sender_TimelineSender = function () {
      function TimelineSender(timeline, options) {
        this.timeline = timeline;
        this.options = options || {};
      }
      TimelineSender.prototype.send = function (useTLS, callback) {
        if (this.timeline.isEmpty()) {
          return;
        }
        this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
      };
      return TimelineSender;
    }();
    /* harmony default export */
    var timeline_sender = timeline_sender_TimelineSender;

    // CONCATENATED MODULE: ./src/core/channels/channel.ts
    var channel_extends =  false || function () {
      var _extendStatics7 = function extendStatics(d, b) {
        _extendStatics7 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics7(d, b);
      };
      return function (d, b) {
        _extendStatics7(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var channel_Channel = function (_super) {
      channel_extends(Channel, _super);
      function Channel(name, pusher) {
        var _this = _super.call(this, function (event, data) {
          logger.debug('No callbacks on ' + name + ' for ' + event);
        }) || this;
        _this.name = name;
        _this.pusher = pusher;
        _this.subscribed = false;
        _this.subscriptionPending = false;
        _this.subscriptionCancelled = false;
        return _this;
      }
      Channel.prototype.authorize = function (socketId, callback) {
        return callback(null, {
          auth: ''
        });
      };
      Channel.prototype.trigger = function (event, data) {
        if (event.indexOf('client-') !== 0) {
          throw new BadEventName("Event '" + event + "' does not start with 'client-'");
        }
        if (!this.subscribed) {
          var suffix = url_store.buildLogSuffix('triggeringClientEvents');
          logger.warn("Client event triggered before channel 'subscription_succeeded' event . " + suffix);
        }
        return this.pusher.send_event(event, data, this.name);
      };
      Channel.prototype.disconnect = function () {
        this.subscribed = false;
        this.subscriptionPending = false;
      };
      Channel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName === 'pusher_internal:subscription_succeeded') {
          this.handleSubscriptionSucceededEvent(event);
        } else if (eventName === 'pusher_internal:subscription_count') {
          this.handleSubscriptionCountEvent(event);
        } else if (eventName.indexOf('pusher_internal:') !== 0) {
          var metadata = {};
          this.emit(eventName, data, metadata);
        }
      };
      Channel.prototype.handleSubscriptionSucceededEvent = function (event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
          this.pusher.unsubscribe(this.name);
        } else {
          this.emit('pusher:subscription_succeeded', event.data);
        }
      };
      Channel.prototype.handleSubscriptionCountEvent = function (event) {
        if (event.data.subscription_count) {
          this.subscriptionCount = event.data.subscription_count;
        }
        this.emit('pusher:subscription_count', event.data);
      };
      Channel.prototype.subscribe = function () {
        var _this = this;
        if (this.subscribed) {
          return;
        }
        this.subscriptionPending = true;
        this.subscriptionCancelled = false;
        this.authorize(this.pusher.connection.socket_id, function (error, data) {
          if (error) {
            _this.subscriptionPending = false;
            logger.error(error.toString());
            _this.emit('pusher:subscription_error', Object.assign({}, {
              type: 'AuthError',
              error: error.message
            }, error instanceof HTTPAuthError ? {
              status: error.status
            } : {}));
          } else {
            _this.pusher.send_event('pusher:subscribe', {
              auth: data.auth,
              channel_data: data.channel_data,
              channel: _this.name
            });
          }
        });
      };
      Channel.prototype.unsubscribe = function () {
        this.subscribed = false;
        this.pusher.send_event('pusher:unsubscribe', {
          channel: this.name
        });
      };
      Channel.prototype.cancelSubscription = function () {
        this.subscriptionCancelled = true;
      };
      Channel.prototype.reinstateSubscription = function () {
        this.subscriptionCancelled = false;
      };
      return Channel;
    }(dispatcher);
    /* harmony default export */
    var channels_channel = channel_Channel;

    // CONCATENATED MODULE: ./src/core/channels/private_channel.ts
    var private_channel_extends =  false || function () {
      var _extendStatics8 = function extendStatics(d, b) {
        _extendStatics8 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics8(d, b);
      };
      return function (d, b) {
        _extendStatics8(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var PrivateChannel = function (_super) {
      private_channel_extends(PrivateChannel, _super);
      function PrivateChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      PrivateChannel.prototype.authorize = function (socketId, callback) {
        return this.pusher.config.channelAuthorizer({
          channelName: this.name,
          socketId: socketId
        }, callback);
      };
      return PrivateChannel;
    }(channels_channel);
    /* harmony default export */
    var private_channel = PrivateChannel;

    // CONCATENATED MODULE: ./src/core/channels/members.ts

    var members_Members = function () {
      function Members() {
        this.reset();
      }
      Members.prototype.get = function (id) {
        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
          return {
            id: id,
            info: this.members[id]
          };
        } else {
          return null;
        }
      };
      Members.prototype.each = function (callback) {
        var _this = this;
        objectApply(this.members, function (member, id) {
          callback(_this.get(id));
        });
      };
      Members.prototype.setMyID = function (id) {
        this.myID = id;
      };
      Members.prototype.onSubscription = function (subscriptionData) {
        this.members = subscriptionData.presence.hash;
        this.count = subscriptionData.presence.count;
        this.me = this.get(this.myID);
      };
      Members.prototype.addMember = function (memberData) {
        if (this.get(memberData.user_id) === null) {
          this.count++;
        }
        this.members[memberData.user_id] = memberData.user_info;
        return this.get(memberData.user_id);
      };
      Members.prototype.removeMember = function (memberData) {
        var member = this.get(memberData.user_id);
        if (member) {
          delete this.members[memberData.user_id];
          this.count--;
        }
        return member;
      };
      Members.prototype.reset = function () {
        this.members = {};
        this.count = 0;
        this.myID = null;
        this.me = null;
      };
      return Members;
    }();
    /* harmony default export */
    var members = members_Members;

    // CONCATENATED MODULE: ./src/core/channels/presence_channel.ts
    var presence_channel_extends =  false || function () {
      var _extendStatics9 = function extendStatics(d, b) {
        _extendStatics9 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics9(d, b);
      };
      return function (d, b) {
        _extendStatics9(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __awaiter =  false || function (thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator =  false || function (thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var presence_channel_PresenceChannel = function (_super) {
      presence_channel_extends(PresenceChannel, _super);
      function PresenceChannel(name, pusher) {
        var _this = _super.call(this, name, pusher) || this;
        _this.members = new members();
        return _this;
      }
      PresenceChannel.prototype.authorize = function (socketId, callback) {
        var _this = this;
        _super.prototype.authorize.call(this, socketId, function (error, authData) {
          return __awaiter(_this, void 0, void 0, function () {
            var channelData, suffix;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!!error) return [3, 3];
                  authData = authData;
                  if (!(authData.channel_data != null)) return [3, 1];
                  channelData = JSON.parse(authData.channel_data);
                  this.members.setMyID(channelData.user_id);
                  return [3, 3];
                case 1:
                  return [4, this.pusher.user.signinDonePromise];
                case 2:
                  _a.sent();
                  if (this.pusher.user.user_data != null) {
                    this.members.setMyID(this.pusher.user.user_data.id);
                  } else {
                    suffix = url_store.buildLogSuffix('authorizationEndpoint');
                    logger.error("Invalid auth response for channel '" + this.name + "', " + ("expected 'channel_data' field. " + suffix + ", ") + "or the user should be signed in.");
                    callback('Invalid auth response');
                    return [2];
                  }
                  _a.label = 3;
                case 3:
                  callback(error, authData);
                  return [2];
              }
            });
          });
        });
      };
      PresenceChannel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        if (eventName.indexOf('pusher_internal:') === 0) {
          this.handleInternalEvent(event);
        } else {
          var data = event.data;
          var metadata = {};
          if (event.user_id) {
            metadata.user_id = event.user_id;
          }
          this.emit(eventName, data, metadata);
        }
      };
      PresenceChannel.prototype.handleInternalEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        switch (eventName) {
          case 'pusher_internal:subscription_succeeded':
            this.handleSubscriptionSucceededEvent(event);
            break;
          case 'pusher_internal:subscription_count':
            this.handleSubscriptionCountEvent(event);
            break;
          case 'pusher_internal:member_added':
            var addedMember = this.members.addMember(data);
            this.emit('pusher:member_added', addedMember);
            break;
          case 'pusher_internal:member_removed':
            var removedMember = this.members.removeMember(data);
            if (removedMember) {
              this.emit('pusher:member_removed', removedMember);
            }
            break;
        }
      };
      PresenceChannel.prototype.handleSubscriptionSucceededEvent = function (event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
          this.pusher.unsubscribe(this.name);
        } else {
          this.members.onSubscription(event.data);
          this.emit('pusher:subscription_succeeded', this.members);
        }
      };
      PresenceChannel.prototype.disconnect = function () {
        this.members.reset();
        _super.prototype.disconnect.call(this);
      };
      return PresenceChannel;
    }(private_channel);
    /* harmony default export */
    var presence_channel = presence_channel_PresenceChannel;

    // EXTERNAL MODULE: ./node_modules/@stablelib/utf8/lib/utf8.js
    var utf8 = __nested_webpack_require_20726__(1);

    // EXTERNAL MODULE: ./node_modules/@stablelib/base64/lib/base64.js
    var base64 = __nested_webpack_require_20726__(0);

    // CONCATENATED MODULE: ./src/core/channels/encrypted_channel.ts
    var encrypted_channel_extends =  false || function () {
      var _extendStatics10 = function extendStatics(d, b) {
        _extendStatics10 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics10(d, b);
      };
      return function (d, b) {
        _extendStatics10(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var encrypted_channel_EncryptedChannel = function (_super) {
      encrypted_channel_extends(EncryptedChannel, _super);
      function EncryptedChannel(name, pusher, nacl) {
        var _this = _super.call(this, name, pusher) || this;
        _this.key = null;
        _this.nacl = nacl;
        return _this;
      }
      EncryptedChannel.prototype.authorize = function (socketId, callback) {
        var _this = this;
        _super.prototype.authorize.call(this, socketId, function (error, authData) {
          if (error) {
            callback(error, authData);
            return;
          }
          var sharedSecret = authData['shared_secret'];
          if (!sharedSecret) {
            callback(new Error("No shared_secret key in auth payload for encrypted channel: " + _this.name), null);
            return;
          }
          _this.key = Object(base64["decode"])(sharedSecret);
          delete authData['shared_secret'];
          callback(null, authData);
        });
      };
      EncryptedChannel.prototype.trigger = function (event, data) {
        throw new UnsupportedFeature('Client events are not currently supported for encrypted channels');
      };
      EncryptedChannel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName.indexOf('pusher_internal:') === 0 || eventName.indexOf('pusher:') === 0) {
          _super.prototype.handleEvent.call(this, event);
          return;
        }
        this.handleEncryptedEvent(eventName, data);
      };
      EncryptedChannel.prototype.handleEncryptedEvent = function (event, data) {
        var _this = this;
        if (!this.key) {
          logger.debug('Received encrypted event before key has been retrieved from the authEndpoint');
          return;
        }
        if (!data.ciphertext || !data.nonce) {
          logger.error('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' + data);
          return;
        }
        var cipherText = Object(base64["decode"])(data.ciphertext);
        if (cipherText.length < this.nacl.secretbox.overheadLength) {
          logger.error("Expected encrypted event ciphertext length to be " + this.nacl.secretbox.overheadLength + ", got: " + cipherText.length);
          return;
        }
        var nonce = Object(base64["decode"])(data.nonce);
        if (nonce.length < this.nacl.secretbox.nonceLength) {
          logger.error("Expected encrypted event nonce length to be " + this.nacl.secretbox.nonceLength + ", got: " + nonce.length);
          return;
        }
        var bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
        if (bytes === null) {
          logger.debug('Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
          this.authorize(this.pusher.connection.socket_id, function (error, authData) {
            if (error) {
              logger.error("Failed to make a request to the authEndpoint: " + authData + ". Unable to fetch new key, so dropping encrypted event");
              return;
            }
            bytes = _this.nacl.secretbox.open(cipherText, nonce, _this.key);
            if (bytes === null) {
              logger.error("Failed to decrypt event with new key. Dropping encrypted event");
              return;
            }
            _this.emit(event, _this.getDataToEmit(bytes));
            return;
          });
          return;
        }
        this.emit(event, this.getDataToEmit(bytes));
      };
      EncryptedChannel.prototype.getDataToEmit = function (bytes) {
        var raw = Object(utf8["decode"])(bytes);
        try {
          return JSON.parse(raw);
        } catch (_a) {
          return raw;
        }
      };
      return EncryptedChannel;
    }(private_channel);
    /* harmony default export */
    var encrypted_channel = encrypted_channel_EncryptedChannel;

    // CONCATENATED MODULE: ./src/core/connection/connection_manager.ts
    var connection_manager_extends =  false || function () {
      var _extendStatics11 = function extendStatics(d, b) {
        _extendStatics11 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics11(d, b);
      };
      return function (d, b) {
        _extendStatics11(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var connection_manager_ConnectionManager = function (_super) {
      connection_manager_extends(ConnectionManager, _super);
      function ConnectionManager(key, options) {
        var _this = _super.call(this) || this;
        _this.state = 'initialized';
        _this.connection = null;
        _this.key = key;
        _this.options = options;
        _this.timeline = _this.options.timeline;
        _this.usingTLS = _this.options.useTLS;
        _this.errorCallbacks = _this.buildErrorCallbacks();
        _this.connectionCallbacks = _this.buildConnectionCallbacks(_this.errorCallbacks);
        _this.handshakeCallbacks = _this.buildHandshakeCallbacks(_this.errorCallbacks);
        var Network = runtime.getNetwork();
        Network.bind('online', function () {
          _this.timeline.info({
            netinfo: 'online'
          });
          if (_this.state === 'connecting' || _this.state === 'unavailable') {
            _this.retryIn(0);
          }
        });
        Network.bind('offline', function () {
          _this.timeline.info({
            netinfo: 'offline'
          });
          if (_this.connection) {
            _this.sendActivityCheck();
          }
        });
        _this.updateStrategy();
        return _this;
      }
      ConnectionManager.prototype.connect = function () {
        if (this.connection || this.runner) {
          return;
        }
        if (!this.strategy.isSupported()) {
          this.updateState('failed');
          return;
        }
        this.updateState('connecting');
        this.startConnecting();
        this.setUnavailableTimer();
      };
      ConnectionManager.prototype.send = function (data) {
        if (this.connection) {
          return this.connection.send(data);
        } else {
          return false;
        }
      };
      ConnectionManager.prototype.send_event = function (name, data, channel) {
        if (this.connection) {
          return this.connection.send_event(name, data, channel);
        } else {
          return false;
        }
      };
      ConnectionManager.prototype.disconnect = function () {
        this.disconnectInternally();
        this.updateState('disconnected');
      };
      ConnectionManager.prototype.isUsingTLS = function () {
        return this.usingTLS;
      };
      ConnectionManager.prototype.startConnecting = function () {
        var _this = this;
        var callback = function callback(error, handshake) {
          if (error) {
            _this.runner = _this.strategy.connect(0, callback);
          } else {
            if (handshake.action === 'error') {
              _this.emit('error', {
                type: 'HandshakeError',
                error: handshake.error
              });
              _this.timeline.error({
                handshakeError: handshake.error
              });
            } else {
              _this.abortConnecting();
              _this.handshakeCallbacks[handshake.action](handshake);
            }
          }
        };
        this.runner = this.strategy.connect(0, callback);
      };
      ConnectionManager.prototype.abortConnecting = function () {
        if (this.runner) {
          this.runner.abort();
          this.runner = null;
        }
      };
      ConnectionManager.prototype.disconnectInternally = function () {
        this.abortConnecting();
        this.clearRetryTimer();
        this.clearUnavailableTimer();
        if (this.connection) {
          var connection = this.abandonConnection();
          connection.close();
        }
      };
      ConnectionManager.prototype.updateStrategy = function () {
        this.strategy = this.options.getStrategy({
          key: this.key,
          timeline: this.timeline,
          useTLS: this.usingTLS
        });
      };
      ConnectionManager.prototype.retryIn = function (delay) {
        var _this = this;
        this.timeline.info({
          action: 'retry',
          delay: delay
        });
        if (delay > 0) {
          this.emit('connecting_in', Math.round(delay / 1000));
        }
        this.retryTimer = new OneOffTimer(delay || 0, function () {
          _this.disconnectInternally();
          _this.connect();
        });
      };
      ConnectionManager.prototype.clearRetryTimer = function () {
        if (this.retryTimer) {
          this.retryTimer.ensureAborted();
          this.retryTimer = null;
        }
      };
      ConnectionManager.prototype.setUnavailableTimer = function () {
        var _this = this;
        this.unavailableTimer = new OneOffTimer(this.options.unavailableTimeout, function () {
          _this.updateState('unavailable');
        });
      };
      ConnectionManager.prototype.clearUnavailableTimer = function () {
        if (this.unavailableTimer) {
          this.unavailableTimer.ensureAborted();
        }
      };
      ConnectionManager.prototype.sendActivityCheck = function () {
        var _this = this;
        this.stopActivityCheck();
        this.connection.ping();
        this.activityTimer = new OneOffTimer(this.options.pongTimeout, function () {
          _this.timeline.error({
            pong_timed_out: _this.options.pongTimeout
          });
          _this.retryIn(0);
        });
      };
      ConnectionManager.prototype.resetActivityCheck = function () {
        var _this = this;
        this.stopActivityCheck();
        if (this.connection && !this.connection.handlesActivityChecks()) {
          this.activityTimer = new OneOffTimer(this.activityTimeout, function () {
            _this.sendActivityCheck();
          });
        }
      };
      ConnectionManager.prototype.stopActivityCheck = function () {
        if (this.activityTimer) {
          this.activityTimer.ensureAborted();
        }
      };
      ConnectionManager.prototype.buildConnectionCallbacks = function (errorCallbacks) {
        var _this = this;
        return extend({}, errorCallbacks, {
          message: function message(_message) {
            _this.resetActivityCheck();
            _this.emit('message', _message);
          },
          ping: function ping() {
            _this.send_event('pusher:pong', {});
          },
          activity: function activity() {
            _this.resetActivityCheck();
          },
          error: function error(_error2) {
            _this.emit('error', _error2);
          },
          closed: function closed() {
            _this.abandonConnection();
            if (_this.shouldRetry()) {
              _this.retryIn(1000);
            }
          }
        });
      };
      ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
        var _this = this;
        return extend({}, errorCallbacks, {
          connected: function connected(handshake) {
            _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
            _this.clearUnavailableTimer();
            _this.setConnection(handshake.connection);
            _this.socket_id = _this.connection.id;
            _this.updateState('connected', {
              socket_id: _this.socket_id
            });
          }
        });
      };
      ConnectionManager.prototype.buildErrorCallbacks = function () {
        var _this = this;
        var withErrorEmitted = function withErrorEmitted(callback) {
          return function (result) {
            if (result.error) {
              _this.emit('error', {
                type: 'WebSocketError',
                error: result.error
              });
            }
            callback(result);
          };
        };
        return {
          tls_only: withErrorEmitted(function () {
            _this.usingTLS = true;
            _this.updateStrategy();
            _this.retryIn(0);
          }),
          refused: withErrorEmitted(function () {
            _this.disconnect();
          }),
          backoff: withErrorEmitted(function () {
            _this.retryIn(1000);
          }),
          retry: withErrorEmitted(function () {
            _this.retryIn(0);
          })
        };
      };
      ConnectionManager.prototype.setConnection = function (connection) {
        this.connection = connection;
        for (var event in this.connectionCallbacks) {
          this.connection.bind(event, this.connectionCallbacks[event]);
        }
        this.resetActivityCheck();
      };
      ConnectionManager.prototype.abandonConnection = function () {
        if (!this.connection) {
          return;
        }
        this.stopActivityCheck();
        for (var event in this.connectionCallbacks) {
          this.connection.unbind(event, this.connectionCallbacks[event]);
        }
        var connection = this.connection;
        this.connection = null;
        return connection;
      };
      ConnectionManager.prototype.updateState = function (newState, data) {
        var previousState = this.state;
        this.state = newState;
        if (previousState !== newState) {
          var newStateDescription = newState;
          if (newStateDescription === 'connected') {
            newStateDescription += ' with new socket ID ' + data.socket_id;
          }
          logger.debug('State changed', previousState + ' -> ' + newStateDescription);
          this.timeline.info({
            state: newState,
            params: data
          });
          this.emit('state_change', {
            previous: previousState,
            current: newState
          });
          this.emit(newState, data);
        }
      };
      ConnectionManager.prototype.shouldRetry = function () {
        return this.state === 'connecting' || this.state === 'connected';
      };
      return ConnectionManager;
    }(dispatcher);
    /* harmony default export */
    var connection_manager = connection_manager_ConnectionManager;

    // CONCATENATED MODULE: ./src/core/channels/channels.ts

    var channels_Channels = function () {
      function Channels() {
        this.channels = {};
      }
      Channels.prototype.add = function (name, pusher) {
        if (!this.channels[name]) {
          this.channels[name] = createChannel(name, pusher);
        }
        return this.channels[name];
      };
      Channels.prototype.all = function () {
        return values(this.channels);
      };
      Channels.prototype.find = function (name) {
        return this.channels[name];
      };
      Channels.prototype.remove = function (name) {
        var channel = this.channels[name];
        delete this.channels[name];
        return channel;
      };
      Channels.prototype.disconnect = function () {
        objectApply(this.channels, function (channel) {
          channel.disconnect();
        });
      };
      return Channels;
    }();
    /* harmony default export */
    var channels = channels_Channels;
    function createChannel(name, pusher) {
      if (name.indexOf('private-encrypted-') === 0) {
        if (pusher.config.nacl) {
          return factory.createEncryptedChannel(name, pusher, pusher.config.nacl);
        }
        var errMsg = 'Tried to subscribe to a private-encrypted- channel but no nacl implementation available';
        var suffix = url_store.buildLogSuffix('encryptedChannelSupport');
        throw new UnsupportedFeature(errMsg + ". " + suffix);
      } else if (name.indexOf('private-') === 0) {
        return factory.createPrivateChannel(name, pusher);
      } else if (name.indexOf('presence-') === 0) {
        return factory.createPresenceChannel(name, pusher);
      } else if (name.indexOf('#') === 0) {
        throw new BadChannelName('Cannot create a channel with name "' + name + '".');
      } else {
        return factory.createChannel(name, pusher);
      }
    }

    // CONCATENATED MODULE: ./src/core/utils/factory.ts

    var Factory = {
      createChannels: function createChannels() {
        return new channels();
      },
      createConnectionManager: function createConnectionManager(key, options) {
        return new connection_manager(key, options);
      },
      createChannel: function createChannel(name, pusher) {
        return new channels_channel(name, pusher);
      },
      createPrivateChannel: function createPrivateChannel(name, pusher) {
        return new private_channel(name, pusher);
      },
      createPresenceChannel: function createPresenceChannel(name, pusher) {
        return new presence_channel(name, pusher);
      },
      createEncryptedChannel: function createEncryptedChannel(name, pusher, nacl) {
        return new encrypted_channel(name, pusher, nacl);
      },
      createTimelineSender: function createTimelineSender(timeline, options) {
        return new timeline_sender(timeline, options);
      },
      createHandshake: function createHandshake(transport, callback) {
        return new connection_handshake(transport, callback);
      },
      createAssistantToTheTransportManager: function createAssistantToTheTransportManager(manager, transport, options) {
        return new assistant_to_the_transport_manager(manager, transport, options);
      }
    };
    /* harmony default export */
    var factory = Factory;

    // CONCATENATED MODULE: ./src/core/transports/transport_manager.ts

    var transport_manager_TransportManager = function () {
      function TransportManager(options) {
        this.options = options || {};
        this.livesLeft = this.options.lives || Infinity;
      }
      TransportManager.prototype.getAssistant = function (transport) {
        return factory.createAssistantToTheTransportManager(this, transport, {
          minPingDelay: this.options.minPingDelay,
          maxPingDelay: this.options.maxPingDelay
        });
      };
      TransportManager.prototype.isAlive = function () {
        return this.livesLeft > 0;
      };
      TransportManager.prototype.reportDeath = function () {
        this.livesLeft -= 1;
      };
      return TransportManager;
    }();
    /* harmony default export */
    var transport_manager = transport_manager_TransportManager;

    // CONCATENATED MODULE: ./src/core/strategies/sequential_strategy.ts

    var sequential_strategy_SequentialStrategy = function () {
      function SequentialStrategy(strategies, options) {
        this.strategies = strategies;
        this.loop = Boolean(options.loop);
        this.failFast = Boolean(options.failFast);
        this.timeout = options.timeout;
        this.timeoutLimit = options.timeoutLimit;
      }
      SequentialStrategy.prototype.isSupported = function () {
        return any(this.strategies, util.method('isSupported'));
      };
      SequentialStrategy.prototype.connect = function (minPriority, callback) {
        var _this = this;
        var strategies = this.strategies;
        var current = 0;
        var timeout = this.timeout;
        var runner = null;
        var tryNextStrategy = function tryNextStrategy(error, handshake) {
          if (handshake) {
            callback(null, handshake);
          } else {
            current = current + 1;
            if (_this.loop) {
              current = current % strategies.length;
            }
            if (current < strategies.length) {
              if (timeout) {
                timeout = timeout * 2;
                if (_this.timeoutLimit) {
                  timeout = Math.min(timeout, _this.timeoutLimit);
                }
              }
              runner = _this.tryStrategy(strategies[current], minPriority, {
                timeout: timeout,
                failFast: _this.failFast
              }, tryNextStrategy);
            } else {
              callback(true);
            }
          }
        };
        runner = this.tryStrategy(strategies[current], minPriority, {
          timeout: timeout,
          failFast: this.failFast
        }, tryNextStrategy);
        return {
          abort: function abort() {
            runner.abort();
          },
          forceMinPriority: function forceMinPriority(p) {
            minPriority = p;
            if (runner) {
              runner.forceMinPriority(p);
            }
          }
        };
      };
      SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
        var timer = null;
        var runner = null;
        if (options.timeout > 0) {
          timer = new OneOffTimer(options.timeout, function () {
            runner.abort();
            callback(true);
          });
        }
        runner = strategy.connect(minPriority, function (error, handshake) {
          if (error && timer && timer.isRunning() && !options.failFast) {
            return;
          }
          if (timer) {
            timer.ensureAborted();
          }
          callback(error, handshake);
        });
        return {
          abort: function abort() {
            if (timer) {
              timer.ensureAborted();
            }
            runner.abort();
          },
          forceMinPriority: function forceMinPriority(p) {
            runner.forceMinPriority(p);
          }
        };
      };
      return SequentialStrategy;
    }();
    /* harmony default export */
    var sequential_strategy = sequential_strategy_SequentialStrategy;

    // CONCATENATED MODULE: ./src/core/strategies/best_connected_ever_strategy.ts

    var best_connected_ever_strategy_BestConnectedEverStrategy = function () {
      function BestConnectedEverStrategy(strategies) {
        this.strategies = strategies;
      }
      BestConnectedEverStrategy.prototype.isSupported = function () {
        return any(this.strategies, util.method('isSupported'));
      };
      BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
        return connect(this.strategies, minPriority, function (i, runners) {
          return function (error, handshake) {
            runners[i].error = error;
            if (error) {
              if (allRunnersFailed(runners)) {
                callback(true);
              }
              return;
            }
            apply(runners, function (runner) {
              runner.forceMinPriority(handshake.transport.priority);
            });
            callback(null, handshake);
          };
        });
      };
      return BestConnectedEverStrategy;
    }();
    /* harmony default export */
    var best_connected_ever_strategy = best_connected_ever_strategy_BestConnectedEverStrategy;
    function connect(strategies, minPriority, callbackBuilder) {
      var runners = map(strategies, function (strategy, i, _, rs) {
        return strategy.connect(minPriority, callbackBuilder(i, rs));
      });
      return {
        abort: function abort() {
          apply(runners, abortRunner);
        },
        forceMinPriority: function forceMinPriority(p) {
          apply(runners, function (runner) {
            runner.forceMinPriority(p);
          });
        }
      };
    }
    function allRunnersFailed(runners) {
      return collections_all(runners, function (runner) {
        return Boolean(runner.error);
      });
    }
    function abortRunner(runner) {
      if (!runner.error && !runner.aborted) {
        runner.abort();
        runner.aborted = true;
      }
    }

    // CONCATENATED MODULE: ./src/core/strategies/cached_strategy.ts

    var cached_strategy_CachedStrategy = function () {
      function CachedStrategy(strategy, transports, options) {
        this.strategy = strategy;
        this.transports = transports;
        this.ttl = options.ttl || 1800 * 1000;
        this.usingTLS = options.useTLS;
        this.timeline = options.timeline;
      }
      CachedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
      };
      CachedStrategy.prototype.connect = function (minPriority, callback) {
        var usingTLS = this.usingTLS;
        var info = fetchTransportCache(usingTLS);
        var strategies = [this.strategy];
        if (info && info.timestamp + this.ttl >= util.now()) {
          var transport = this.transports[info.transport];
          if (transport) {
            this.timeline.info({
              cached: true,
              transport: info.transport,
              latency: info.latency
            });
            strategies.push(new sequential_strategy([transport], {
              timeout: info.latency * 2 + 1000,
              failFast: true
            }));
          }
        }
        var startTimestamp = util.now();
        var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
          if (error) {
            flushTransportCache(usingTLS);
            if (strategies.length > 0) {
              startTimestamp = util.now();
              runner = strategies.pop().connect(minPriority, cb);
            } else {
              callback(error);
            }
          } else {
            storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp);
            callback(null, handshake);
          }
        });
        return {
          abort: function abort() {
            runner.abort();
          },
          forceMinPriority: function forceMinPriority(p) {
            minPriority = p;
            if (runner) {
              runner.forceMinPriority(p);
            }
          }
        };
      };
      return CachedStrategy;
    }();
    /* harmony default export */
    var cached_strategy = cached_strategy_CachedStrategy;
    function getTransportCacheKey(usingTLS) {
      return 'pusherTransport' + (usingTLS ? 'TLS' : 'NonTLS');
    }
    function fetchTransportCache(usingTLS) {
      var storage = runtime.getLocalStorage();
      if (storage) {
        try {
          var serializedCache = storage[getTransportCacheKey(usingTLS)];
          if (serializedCache) {
            return JSON.parse(serializedCache);
          }
        } catch (e) {
          flushTransportCache(usingTLS);
        }
      }
      return null;
    }
    function storeTransportCache(usingTLS, transport, latency) {
      var storage = runtime.getLocalStorage();
      if (storage) {
        try {
          storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
            timestamp: util.now(),
            transport: transport,
            latency: latency
          });
        } catch (e) {}
      }
    }
    function flushTransportCache(usingTLS) {
      var storage = runtime.getLocalStorage();
      if (storage) {
        try {
          delete storage[getTransportCacheKey(usingTLS)];
        } catch (e) {}
      }
    }

    // CONCATENATED MODULE: ./src/core/strategies/delayed_strategy.ts

    var delayed_strategy_DelayedStrategy = function () {
      function DelayedStrategy(strategy, _a) {
        var number = _a.delay;
        this.strategy = strategy;
        this.options = {
          delay: number
        };
      }
      DelayedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
      };
      DelayedStrategy.prototype.connect = function (minPriority, callback) {
        var strategy = this.strategy;
        var runner;
        var timer = new OneOffTimer(this.options.delay, function () {
          runner = strategy.connect(minPriority, callback);
        });
        return {
          abort: function abort() {
            timer.ensureAborted();
            if (runner) {
              runner.abort();
            }
          },
          forceMinPriority: function forceMinPriority(p) {
            minPriority = p;
            if (runner) {
              runner.forceMinPriority(p);
            }
          }
        };
      };
      return DelayedStrategy;
    }();
    /* harmony default export */
    var delayed_strategy = delayed_strategy_DelayedStrategy;

    // CONCATENATED MODULE: ./src/core/strategies/if_strategy.ts
    var IfStrategy = function () {
      function IfStrategy(test, trueBranch, falseBranch) {
        this.test = test;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
      }
      IfStrategy.prototype.isSupported = function () {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.isSupported();
      };
      IfStrategy.prototype.connect = function (minPriority, callback) {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.connect(minPriority, callback);
      };
      return IfStrategy;
    }();
    /* harmony default export */
    var if_strategy = IfStrategy;

    // CONCATENATED MODULE: ./src/core/strategies/first_connected_strategy.ts
    var FirstConnectedStrategy = function () {
      function FirstConnectedStrategy(strategy) {
        this.strategy = strategy;
      }
      FirstConnectedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
      };
      FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
        var runner = this.strategy.connect(minPriority, function (error, handshake) {
          if (handshake) {
            runner.abort();
          }
          callback(error, handshake);
        });
        return runner;
      };
      return FirstConnectedStrategy;
    }();
    /* harmony default export */
    var first_connected_strategy = FirstConnectedStrategy;

    // CONCATENATED MODULE: ./src/runtimes/web/default_strategy.ts

    function testSupportsStrategy(strategy) {
      return function () {
        return strategy.isSupported();
      };
    }
    var getDefaultStrategy = function getDefaultStrategy(config, baseOptions, defineTransport) {
      var definedTransports = {};
      function defineTransportStrategy(name, type, priority, options, manager) {
        var transport = defineTransport(config, name, type, priority, options, manager);
        definedTransports[name] = transport;
        return transport;
      }
      var ws_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.wsHost + ':' + config.wsPort,
        hostTLS: config.wsHost + ':' + config.wssPort,
        httpPath: config.wsPath
      });
      var wss_options = Object.assign({}, ws_options, {
        useTLS: true
      });
      var sockjs_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.httpHost + ':' + config.httpPort,
        hostTLS: config.httpHost + ':' + config.httpsPort,
        httpPath: config.httpPath
      });
      var timeouts = {
        loop: true,
        timeout: 15000,
        timeoutLimit: 60000
      };
      var ws_manager = new transport_manager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
      });
      var streaming_manager = new transport_manager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
      });
      var ws_transport = defineTransportStrategy('ws', 'ws', 3, ws_options, ws_manager);
      var wss_transport = defineTransportStrategy('wss', 'ws', 3, wss_options, ws_manager);
      var sockjs_transport = defineTransportStrategy('sockjs', 'sockjs', 1, sockjs_options);
      var xhr_streaming_transport = defineTransportStrategy('xhr_streaming', 'xhr_streaming', 1, sockjs_options, streaming_manager);
      var xdr_streaming_transport = defineTransportStrategy('xdr_streaming', 'xdr_streaming', 1, sockjs_options, streaming_manager);
      var xhr_polling_transport = defineTransportStrategy('xhr_polling', 'xhr_polling', 1, sockjs_options);
      var xdr_polling_transport = defineTransportStrategy('xdr_polling', 'xdr_polling', 1, sockjs_options);
      var ws_loop = new sequential_strategy([ws_transport], timeouts);
      var wss_loop = new sequential_strategy([wss_transport], timeouts);
      var sockjs_loop = new sequential_strategy([sockjs_transport], timeouts);
      var streaming_loop = new sequential_strategy([new if_strategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)], timeouts);
      var polling_loop = new sequential_strategy([new if_strategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)], timeouts);
      var http_loop = new sequential_strategy([new if_strategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy([streaming_loop, new delayed_strategy(polling_loop, {
        delay: 4000
      })]), polling_loop)], timeouts);
      var http_fallback_loop = new if_strategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
      var wsStrategy;
      if (baseOptions.useTLS) {
        wsStrategy = new best_connected_ever_strategy([ws_loop, new delayed_strategy(http_fallback_loop, {
          delay: 2000
        })]);
      } else {
        wsStrategy = new best_connected_ever_strategy([ws_loop, new delayed_strategy(wss_loop, {
          delay: 2000
        }), new delayed_strategy(http_fallback_loop, {
          delay: 5000
        })]);
      }
      return new cached_strategy(new first_connected_strategy(new if_strategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
        ttl: 1800000,
        timeline: baseOptions.timeline,
        useTLS: baseOptions.useTLS
      });
    };
    /* harmony default export */
    var default_strategy = getDefaultStrategy;

    // CONCATENATED MODULE: ./src/runtimes/web/transports/transport_connection_initializer.ts

    /* harmony default export */
    var transport_connection_initializer = function transport_connection_initializer() {
      var self = this;
      self.timeline.info(self.buildTimelineMessage({
        transport: self.name + (self.options.useTLS ? 's' : '')
      }));
      if (self.hooks.isInitialized()) {
        self.changeState('initialized');
      } else if (self.hooks.file) {
        self.changeState('initializing');
        Dependencies.load(self.hooks.file, {
          useTLS: self.options.useTLS
        }, function (error, callback) {
          if (self.hooks.isInitialized()) {
            self.changeState('initialized');
            callback(true);
          } else {
            if (error) {
              self.onError(error);
            }
            self.onClose();
            callback(false);
          }
        });
      } else {
        self.onClose();
      }
    };

    // CONCATENATED MODULE: ./src/runtimes/web/http/http_xdomain_request.ts

    var http_xdomain_request_hooks = {
      getRequest: function getRequest(socket) {
        var xdr = new window.XDomainRequest();
        xdr.ontimeout = function () {
          socket.emit('error', new RequestTimedOut());
          socket.close();
        };
        xdr.onerror = function (e) {
          socket.emit('error', e);
          socket.close();
        };
        xdr.onprogress = function () {
          if (xdr.responseText && xdr.responseText.length > 0) {
            socket.onChunk(200, xdr.responseText);
          }
        };
        xdr.onload = function () {
          if (xdr.responseText && xdr.responseText.length > 0) {
            socket.onChunk(200, xdr.responseText);
          }
          socket.emit('finished', 200);
          socket.close();
        };
        return xdr;
      },
      abortRequest: function abortRequest(xdr) {
        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
        xdr.abort();
      }
    };
    /* harmony default export */
    var http_xdomain_request = http_xdomain_request_hooks;

    // CONCATENATED MODULE: ./src/core/http/http_request.ts
    var http_request_extends =  false || function () {
      var _extendStatics12 = function extendStatics(d, b) {
        _extendStatics12 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics12(d, b);
      };
      return function (d, b) {
        _extendStatics12(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var MAX_BUFFER_LENGTH = 256 * 1024;
    var http_request_HTTPRequest = function (_super) {
      http_request_extends(HTTPRequest, _super);
      function HTTPRequest(hooks, method, url) {
        var _this = _super.call(this) || this;
        _this.hooks = hooks;
        _this.method = method;
        _this.url = url;
        return _this;
      }
      HTTPRequest.prototype.start = function (payload) {
        var _this = this;
        this.position = 0;
        this.xhr = this.hooks.getRequest(this);
        this.unloader = function () {
          _this.close();
        };
        runtime.addUnloadListener(this.unloader);
        this.xhr.open(this.method, this.url, true);
        if (this.xhr.setRequestHeader) {
          this.xhr.setRequestHeader('Content-Type', 'application/json');
        }
        this.xhr.send(payload);
      };
      HTTPRequest.prototype.close = function () {
        if (this.unloader) {
          runtime.removeUnloadListener(this.unloader);
          this.unloader = null;
        }
        if (this.xhr) {
          this.hooks.abortRequest(this.xhr);
          this.xhr = null;
        }
      };
      HTTPRequest.prototype.onChunk = function (status, data) {
        while (true) {
          var chunk = this.advanceBuffer(data);
          if (chunk) {
            this.emit('chunk', {
              status: status,
              data: chunk
            });
          } else {
            break;
          }
        }
        if (this.isBufferTooLong(data)) {
          this.emit('buffer_too_long');
        }
      };
      HTTPRequest.prototype.advanceBuffer = function (buffer) {
        var unreadData = buffer.slice(this.position);
        var endOfLinePosition = unreadData.indexOf('\n');
        if (endOfLinePosition !== -1) {
          this.position += endOfLinePosition + 1;
          return unreadData.slice(0, endOfLinePosition);
        } else {
          return null;
        }
      };
      HTTPRequest.prototype.isBufferTooLong = function (buffer) {
        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
      };
      return HTTPRequest;
    }(dispatcher);
    /* harmony default export */
    var http_request = http_request_HTTPRequest;

    // CONCATENATED MODULE: ./src/core/http/state.ts
    var State;
    (function (State) {
      State[State["CONNECTING"] = 0] = "CONNECTING";
      State[State["OPEN"] = 1] = "OPEN";
      State[State["CLOSED"] = 3] = "CLOSED";
    })(State || (State = {}));
    /* harmony default export */
    var state = State;

    // CONCATENATED MODULE: ./src/core/http/http_socket.ts

    var autoIncrement = 1;
    var http_socket_HTTPSocket = function () {
      function HTTPSocket(hooks, url) {
        this.hooks = hooks;
        this.session = randomNumber(1000) + '/' + randomString(8);
        this.location = getLocation(url);
        this.readyState = state.CONNECTING;
        this.openStream();
      }
      HTTPSocket.prototype.send = function (payload) {
        return this.sendRaw(JSON.stringify([payload]));
      };
      HTTPSocket.prototype.ping = function () {
        this.hooks.sendHeartbeat(this);
      };
      HTTPSocket.prototype.close = function (code, reason) {
        this.onClose(code, reason, true);
      };
      HTTPSocket.prototype.sendRaw = function (payload) {
        if (this.readyState === state.OPEN) {
          try {
            runtime.createSocketRequest('POST', getUniqueURL(getSendURL(this.location, this.session))).start(payload);
            return true;
          } catch (e) {
            return false;
          }
        } else {
          return false;
        }
      };
      HTTPSocket.prototype.reconnect = function () {
        this.closeStream();
        this.openStream();
      };
      HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
        this.closeStream();
        this.readyState = state.CLOSED;
        if (this.onclose) {
          this.onclose({
            code: code,
            reason: reason,
            wasClean: wasClean
          });
        }
      };
      HTTPSocket.prototype.onChunk = function (chunk) {
        if (chunk.status !== 200) {
          return;
        }
        if (this.readyState === state.OPEN) {
          this.onActivity();
        }
        var payload;
        var type = chunk.data.slice(0, 1);
        switch (type) {
          case 'o':
            payload = JSON.parse(chunk.data.slice(1) || '{}');
            this.onOpen(payload);
            break;
          case 'a':
            payload = JSON.parse(chunk.data.slice(1) || '[]');
            for (var i = 0; i < payload.length; i++) {
              this.onEvent(payload[i]);
            }
            break;
          case 'm':
            payload = JSON.parse(chunk.data.slice(1) || 'null');
            this.onEvent(payload);
            break;
          case 'h':
            this.hooks.onHeartbeat(this);
            break;
          case 'c':
            payload = JSON.parse(chunk.data.slice(1) || '[]');
            this.onClose(payload[0], payload[1], true);
            break;
        }
      };
      HTTPSocket.prototype.onOpen = function (options) {
        if (this.readyState === state.CONNECTING) {
          if (options && options.hostname) {
            this.location.base = replaceHost(this.location.base, options.hostname);
          }
          this.readyState = state.OPEN;
          if (this.onopen) {
            this.onopen();
          }
        } else {
          this.onClose(1006, 'Server lost session', true);
        }
      };
      HTTPSocket.prototype.onEvent = function (event) {
        if (this.readyState === state.OPEN && this.onmessage) {
          this.onmessage({
            data: event
          });
        }
      };
      HTTPSocket.prototype.onActivity = function () {
        if (this.onactivity) {
          this.onactivity();
        }
      };
      HTTPSocket.prototype.onError = function (error) {
        if (this.onerror) {
          this.onerror(error);
        }
      };
      HTTPSocket.prototype.openStream = function () {
        var _this = this;
        this.stream = runtime.createSocketRequest('POST', getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
        this.stream.bind('chunk', function (chunk) {
          _this.onChunk(chunk);
        });
        this.stream.bind('finished', function (status) {
          _this.hooks.onFinished(_this, status);
        });
        this.stream.bind('buffer_too_long', function () {
          _this.reconnect();
        });
        try {
          this.stream.start();
        } catch (error) {
          util.defer(function () {
            _this.onError(error);
            _this.onClose(1006, 'Could not start streaming', false);
          });
        }
      };
      HTTPSocket.prototype.closeStream = function () {
        if (this.stream) {
          this.stream.unbind_all();
          this.stream.close();
          this.stream = null;
        }
      };
      return HTTPSocket;
    }();
    function getLocation(url) {
      var parts = /([^\?]*)\/*(\??.*)/.exec(url);
      return {
        base: parts[1],
        queryString: parts[2]
      };
    }
    function getSendURL(url, session) {
      return url.base + '/' + session + '/xhr_send';
    }
    function getUniqueURL(url) {
      var separator = url.indexOf('?') === -1 ? '?' : '&';
      return url + separator + 't=' + +new Date() + '&n=' + autoIncrement++;
    }
    function replaceHost(url, hostname) {
      var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
      return urlParts[1] + hostname + urlParts[3];
    }
    function randomNumber(max) {
      return Math.floor(Math.random() * max);
    }
    function randomString(length) {
      var result = [];
      for (var i = 0; i < length; i++) {
        result.push(randomNumber(32).toString(32));
      }
      return result.join('');
    }
    /* harmony default export */
    var http_socket = http_socket_HTTPSocket;

    // CONCATENATED MODULE: ./src/core/http/http_streaming_socket.ts
    var http_streaming_socket_hooks = {
      getReceiveURL: function getReceiveURL(url, session) {
        return url.base + '/' + session + '/xhr_streaming' + url.queryString;
      },
      onHeartbeat: function onHeartbeat(socket) {
        socket.sendRaw('[]');
      },
      sendHeartbeat: function sendHeartbeat(socket) {
        socket.sendRaw('[]');
      },
      onFinished: function onFinished(socket, status) {
        socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
      }
    };
    /* harmony default export */
    var http_streaming_socket = http_streaming_socket_hooks;

    // CONCATENATED MODULE: ./src/core/http/http_polling_socket.ts
    var http_polling_socket_hooks = {
      getReceiveURL: function getReceiveURL(url, session) {
        return url.base + '/' + session + '/xhr' + url.queryString;
      },
      onHeartbeat: function onHeartbeat() {},
      sendHeartbeat: function sendHeartbeat(socket) {
        socket.sendRaw('[]');
      },
      onFinished: function onFinished(socket, status) {
        if (status === 200) {
          socket.reconnect();
        } else {
          socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
        }
      }
    };
    /* harmony default export */
    var http_polling_socket = http_polling_socket_hooks;

    // CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http_xhr_request.ts

    var http_xhr_request_hooks = {
      getRequest: function getRequest(socket) {
        var Constructor = runtime.getXHRAPI();
        var xhr = new Constructor();
        xhr.onreadystatechange = xhr.onprogress = function () {
          switch (xhr.readyState) {
            case 3:
              if (xhr.responseText && xhr.responseText.length > 0) {
                socket.onChunk(xhr.status, xhr.responseText);
              }
              break;
            case 4:
              if (xhr.responseText && xhr.responseText.length > 0) {
                socket.onChunk(xhr.status, xhr.responseText);
              }
              socket.emit('finished', xhr.status);
              socket.close();
              break;
          }
        };
        return xhr;
      },
      abortRequest: function abortRequest(xhr) {
        xhr.onreadystatechange = null;
        xhr.abort();
      }
    };
    /* harmony default export */
    var http_xhr_request = http_xhr_request_hooks;

    // CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http.ts

    var HTTP = {
      createStreamingSocket: function createStreamingSocket(url) {
        return this.createSocket(http_streaming_socket, url);
      },
      createPollingSocket: function createPollingSocket(url) {
        return this.createSocket(http_polling_socket, url);
      },
      createSocket: function createSocket(hooks, url) {
        return new http_socket(hooks, url);
      },
      createXHR: function createXHR(method, url) {
        return this.createRequest(http_xhr_request, method, url);
      },
      createRequest: function createRequest(hooks, method, url) {
        return new http_request(hooks, method, url);
      }
    };
    /* harmony default export */
    var http_http = HTTP;

    // CONCATENATED MODULE: ./src/runtimes/web/http/http.ts

    http_http.createXDR = function (method, url) {
      return this.createRequest(http_xdomain_request, method, url);
    };
    /* harmony default export */
    var web_http_http = http_http;

    // CONCATENATED MODULE: ./src/runtimes/web/runtime.ts

    var Runtime = {
      nextAuthCallbackID: 1,
      auth_callbacks: {},
      ScriptReceivers: ScriptReceivers,
      DependenciesReceivers: DependenciesReceivers,
      getDefaultStrategy: default_strategy,
      Transports: transports_transports,
      transportConnectionInitializer: transport_connection_initializer,
      HTTPFactory: web_http_http,
      TimelineTransport: jsonp_timeline,
      getXHRAPI: function getXHRAPI() {
        return window.XMLHttpRequest;
      },
      getWebSocketAPI: function getWebSocketAPI() {
        return window.WebSocket || window.MozWebSocket;
      },
      setup: function setup(PusherClass) {
        var _this = this;
        window.Pusher = PusherClass;
        var initializeOnDocumentBody = function initializeOnDocumentBody() {
          _this.onDocumentBody(PusherClass.ready);
        };
        if (!window.JSON) {
          Dependencies.load('json2', {}, initializeOnDocumentBody);
        } else {
          initializeOnDocumentBody();
        }
      },
      getDocument: function getDocument() {
        return document;
      },
      getProtocol: function getProtocol() {
        return this.getDocument().location.protocol;
      },
      getAuthorizers: function getAuthorizers() {
        return {
          ajax: xhr_auth,
          jsonp: jsonp_auth
        };
      },
      onDocumentBody: function onDocumentBody(callback) {
        var _this = this;
        if (document.body) {
          callback();
        } else {
          setTimeout(function () {
            _this.onDocumentBody(callback);
          }, 0);
        }
      },
      createJSONPRequest: function createJSONPRequest(url, data) {
        return new jsonp_request(url, data);
      },
      createScriptRequest: function createScriptRequest(src) {
        return new script_request(src);
      },
      getLocalStorage: function getLocalStorage() {
        try {
          return window.localStorage;
        } catch (e) {
          return undefined;
        }
      },
      createXHR: function createXHR() {
        if (this.getXHRAPI()) {
          return this.createXMLHttpRequest();
        } else {
          return this.createMicrosoftXHR();
        }
      },
      createXMLHttpRequest: function createXMLHttpRequest() {
        var Constructor = this.getXHRAPI();
        return new Constructor();
      },
      createMicrosoftXHR: function createMicrosoftXHR() {
        return new ActiveXObject('Microsoft.XMLHTTP');
      },
      getNetwork: function getNetwork() {
        return net_info_Network;
      },
      createWebSocket: function createWebSocket(url) {
        var Constructor = this.getWebSocketAPI();
        return new Constructor(url);
      },
      createSocketRequest: function createSocketRequest(method, url) {
        if (this.isXHRSupported()) {
          return this.HTTPFactory.createXHR(method, url);
        } else if (this.isXDRSupported(url.indexOf('https:') === 0)) {
          return this.HTTPFactory.createXDR(method, url);
        } else {
          throw 'Cross-origin HTTP requests are not supported';
        }
      },
      isXHRSupported: function isXHRSupported() {
        var Constructor = this.getXHRAPI();
        return Boolean(Constructor) && new Constructor().withCredentials !== undefined;
      },
      isXDRSupported: function isXDRSupported(useTLS) {
        var protocol = useTLS ? 'https:' : 'http:';
        var documentProtocol = this.getProtocol();
        return Boolean(window['XDomainRequest']) && documentProtocol === protocol;
      },
      addUnloadListener: function addUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
          window.addEventListener('unload', listener, false);
        } else if (window.attachEvent !== undefined) {
          window.attachEvent('onunload', listener);
        }
      },
      removeUnloadListener: function removeUnloadListener(listener) {
        if (window.addEventListener !== undefined) {
          window.removeEventListener('unload', listener, false);
        } else if (window.detachEvent !== undefined) {
          window.detachEvent('onunload', listener);
        }
      }
    };
    /* harmony default export */
    var runtime = Runtime;

    // CONCATENATED MODULE: ./src/core/timeline/level.ts
    var TimelineLevel;
    (function (TimelineLevel) {
      TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
      TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
      TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
    })(TimelineLevel || (TimelineLevel = {}));
    /* harmony default export */
    var timeline_level = TimelineLevel;

    // CONCATENATED MODULE: ./src/core/timeline/timeline.ts

    var timeline_Timeline = function () {
      function Timeline(key, session, options) {
        this.key = key;
        this.session = session;
        this.events = [];
        this.options = options || {};
        this.sent = 0;
        this.uniqueID = 0;
      }
      Timeline.prototype.log = function (level, event) {
        if (level <= this.options.level) {
          this.events.push(extend({}, event, {
            timestamp: util.now()
          }));
          if (this.options.limit && this.events.length > this.options.limit) {
            this.events.shift();
          }
        }
      };
      Timeline.prototype.error = function (event) {
        this.log(timeline_level.ERROR, event);
      };
      Timeline.prototype.info = function (event) {
        this.log(timeline_level.INFO, event);
      };
      Timeline.prototype.debug = function (event) {
        this.log(timeline_level.DEBUG, event);
      };
      Timeline.prototype.isEmpty = function () {
        return this.events.length === 0;
      };
      Timeline.prototype.send = function (sendfn, callback) {
        var _this = this;
        var data = extend({
          session: this.session,
          bundle: this.sent + 1,
          key: this.key,
          lib: 'js',
          version: this.options.version,
          cluster: this.options.cluster,
          features: this.options.features,
          timeline: this.events
        }, this.options.params);
        this.events = [];
        sendfn(data, function (error, result) {
          if (!error) {
            _this.sent++;
          }
          if (callback) {
            callback(error, result);
          }
        });
        return true;
      };
      Timeline.prototype.generateUniqueID = function () {
        this.uniqueID++;
        return this.uniqueID;
      };
      return Timeline;
    }();
    /* harmony default export */
    var timeline_timeline = timeline_Timeline;

    // CONCATENATED MODULE: ./src/core/strategies/transport_strategy.ts

    var transport_strategy_TransportStrategy = function () {
      function TransportStrategy(name, priority, transport, options) {
        this.name = name;
        this.priority = priority;
        this.transport = transport;
        this.options = options || {};
      }
      TransportStrategy.prototype.isSupported = function () {
        return this.transport.isSupported({
          useTLS: this.options.useTLS
        });
      };
      TransportStrategy.prototype.connect = function (minPriority, callback) {
        var _this = this;
        if (!this.isSupported()) {
          return failAttempt(new UnsupportedStrategy(), callback);
        } else if (this.priority < minPriority) {
          return failAttempt(new TransportPriorityTooLow(), callback);
        }
        var connected = false;
        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
        var handshake = null;
        var onInitialized = function onInitialized() {
          transport.unbind('initialized', onInitialized);
          transport.connect();
        };
        var onOpen = function onOpen() {
          handshake = factory.createHandshake(transport, function (result) {
            connected = true;
            unbindListeners();
            callback(null, result);
          });
        };
        var onError = function onError(error) {
          unbindListeners();
          callback(error);
        };
        var onClosed = function onClosed() {
          unbindListeners();
          var serializedTransport;
          serializedTransport = safeJSONStringify(transport);
          callback(new TransportClosed(serializedTransport));
        };
        var unbindListeners = function unbindListeners() {
          transport.unbind('initialized', onInitialized);
          transport.unbind('open', onOpen);
          transport.unbind('error', onError);
          transport.unbind('closed', onClosed);
        };
        transport.bind('initialized', onInitialized);
        transport.bind('open', onOpen);
        transport.bind('error', onError);
        transport.bind('closed', onClosed);
        transport.initialize();
        return {
          abort: function abort() {
            if (connected) {
              return;
            }
            unbindListeners();
            if (handshake) {
              handshake.close();
            } else {
              transport.close();
            }
          },
          forceMinPriority: function forceMinPriority(p) {
            if (connected) {
              return;
            }
            if (_this.priority < p) {
              if (handshake) {
                handshake.close();
              } else {
                transport.close();
              }
            }
          }
        };
      };
      return TransportStrategy;
    }();
    /* harmony default export */
    var transport_strategy = transport_strategy_TransportStrategy;
    function failAttempt(error, callback) {
      util.defer(function () {
        callback(error);
      });
      return {
        abort: function abort() {},
        forceMinPriority: function forceMinPriority() {}
      };
    }

    // CONCATENATED MODULE: ./src/core/strategies/strategy_builder.ts

    var strategy_builder_Transports = runtime.Transports;
    var strategy_builder_defineTransport = function strategy_builder_defineTransport(config, name, type, priority, options, manager) {
      var transportClass = strategy_builder_Transports[type];
      if (!transportClass) {
        throw new UnsupportedTransport(type);
      }
      var enabled = (!config.enabledTransports || arrayIndexOf(config.enabledTransports, name) !== -1) && (!config.disabledTransports || arrayIndexOf(config.disabledTransports, name) === -1);
      var transport;
      if (enabled) {
        options = Object.assign({
          ignoreNullOrigin: config.ignoreNullOrigin
        }, options);
        transport = new transport_strategy(name, priority, manager ? manager.getAssistant(transportClass) : transportClass, options);
      } else {
        transport = strategy_builder_UnsupportedStrategy;
      }
      return transport;
    };
    var strategy_builder_UnsupportedStrategy = {
      isSupported: function isSupported() {
        return false;
      },
      connect: function connect(_, callback) {
        var deferred = util.defer(function () {
          callback(new UnsupportedStrategy());
        });
        return {
          abort: function abort() {
            deferred.ensureAborted();
          },
          forceMinPriority: function forceMinPriority() {}
        };
      }
    };

    // CONCATENATED MODULE: ./src/core/auth/user_authenticator.ts

    var composeChannelQuery = function composeChannelQuery(params, authOptions) {
      var query = 'socket_id=' + encodeURIComponent(params.socketId);
      for (var i in authOptions.params) {
        query += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(authOptions.params[i]);
      }
      return query;
    };
    var UserAuthenticator = function UserAuthenticator(authOptions) {
      if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw "'" + authOptions.transport + "' is not a recognized auth transport";
      }
      return function (params, callback) {
        var query = composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.UserAuthentication, callback);
      };
    };
    /* harmony default export */
    var user_authenticator = UserAuthenticator;

    // CONCATENATED MODULE: ./src/core/auth/channel_authorizer.ts

    var channel_authorizer_composeChannelQuery = function channel_authorizer_composeChannelQuery(params, authOptions) {
      var query = 'socket_id=' + encodeURIComponent(params.socketId);
      query += '&channel_name=' + encodeURIComponent(params.channelName);
      for (var i in authOptions.params) {
        query += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(authOptions.params[i]);
      }
      return query;
    };
    var ChannelAuthorizer = function ChannelAuthorizer(authOptions) {
      if (typeof runtime.getAuthorizers()[authOptions.transport] === 'undefined') {
        throw "'" + authOptions.transport + "' is not a recognized auth transport";
      }
      return function (params, callback) {
        var query = channel_authorizer_composeChannelQuery(params, authOptions);
        runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.ChannelAuthorization, callback);
      };
    };
    /* harmony default export */
    var channel_authorizer = ChannelAuthorizer;

    // CONCATENATED MODULE: ./src/core/auth/deprecated_channel_authorizer.ts
    var ChannelAuthorizerProxy = function ChannelAuthorizerProxy(pusher, authOptions, channelAuthorizerGenerator) {
      var deprecatedAuthorizerOptions = {
        authTransport: authOptions.transport,
        authEndpoint: authOptions.endpoint,
        auth: {
          params: authOptions.params,
          headers: authOptions.headers
        }
      };
      return function (params, callback) {
        var channel = pusher.channel(params.channelName);
        var channelAuthorizer = channelAuthorizerGenerator(channel, deprecatedAuthorizerOptions);
        channelAuthorizer.authorize(params.socketId, callback);
      };
    };

    // CONCATENATED MODULE: ./src/core/config.ts
    var __assign =  false || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    function getConfig(opts, pusher) {
      var config = {
        activityTimeout: opts.activityTimeout || defaults.activityTimeout,
        cluster: opts.cluster || defaults.cluster,
        httpPath: opts.httpPath || defaults.httpPath,
        httpPort: opts.httpPort || defaults.httpPort,
        httpsPort: opts.httpsPort || defaults.httpsPort,
        pongTimeout: opts.pongTimeout || defaults.pongTimeout,
        statsHost: opts.statsHost || defaults.stats_host,
        unavailableTimeout: opts.unavailableTimeout || defaults.unavailableTimeout,
        wsPath: opts.wsPath || defaults.wsPath,
        wsPort: opts.wsPort || defaults.wsPort,
        wssPort: opts.wssPort || defaults.wssPort,
        enableStats: getEnableStatsConfig(opts),
        httpHost: getHttpHost(opts),
        useTLS: shouldUseTLS(opts),
        wsHost: getWebsocketHost(opts),
        userAuthenticator: buildUserAuthenticator(opts),
        channelAuthorizer: buildChannelAuthorizer(opts, pusher)
      };
      if ('disabledTransports' in opts) config.disabledTransports = opts.disabledTransports;
      if ('enabledTransports' in opts) config.enabledTransports = opts.enabledTransports;
      if ('ignoreNullOrigin' in opts) config.ignoreNullOrigin = opts.ignoreNullOrigin;
      if ('timelineParams' in opts) config.timelineParams = opts.timelineParams;
      if ('nacl' in opts) {
        config.nacl = opts.nacl;
      }
      return config;
    }
    function getHttpHost(opts) {
      if (opts.httpHost) {
        return opts.httpHost;
      }
      if (opts.cluster) {
        return "sockjs-" + opts.cluster + ".pusher.com";
      }
      return defaults.httpHost;
    }
    function getWebsocketHost(opts) {
      if (opts.wsHost) {
        return opts.wsHost;
      }
      if (opts.cluster) {
        return getWebsocketHostFromCluster(opts.cluster);
      }
      return getWebsocketHostFromCluster(defaults.cluster);
    }
    function getWebsocketHostFromCluster(cluster) {
      return "ws-" + cluster + ".pusher.com";
    }
    function shouldUseTLS(opts) {
      if (runtime.getProtocol() === 'https:') {
        return true;
      } else if (opts.forceTLS === false) {
        return false;
      }
      return true;
    }
    function getEnableStatsConfig(opts) {
      if ('enableStats' in opts) {
        return opts.enableStats;
      }
      if ('disableStats' in opts) {
        return !opts.disableStats;
      }
      return false;
    }
    function buildUserAuthenticator(opts) {
      var userAuthentication = __assign({}, defaults.userAuthentication, opts.userAuthentication);
      if ('customHandler' in userAuthentication && userAuthentication['customHandler'] != null) {
        return userAuthentication['customHandler'];
      }
      return user_authenticator(userAuthentication);
    }
    function buildChannelAuth(opts, pusher) {
      var channelAuthorization;
      if ('channelAuthorization' in opts) {
        channelAuthorization = __assign({}, defaults.channelAuthorization, opts.channelAuthorization);
      } else {
        channelAuthorization = {
          transport: opts.authTransport || defaults.authTransport,
          endpoint: opts.authEndpoint || defaults.authEndpoint
        };
        if ('auth' in opts) {
          if ('params' in opts.auth) channelAuthorization.params = opts.auth.params;
          if ('headers' in opts.auth) channelAuthorization.headers = opts.auth.headers;
        }
        if ('authorizer' in opts) channelAuthorization.customHandler = ChannelAuthorizerProxy(pusher, channelAuthorization, opts.authorizer);
      }
      return channelAuthorization;
    }
    function buildChannelAuthorizer(opts, pusher) {
      var channelAuthorization = buildChannelAuth(opts, pusher);
      if ('customHandler' in channelAuthorization && channelAuthorization['customHandler'] != null) {
        return channelAuthorization['customHandler'];
      }
      return channel_authorizer(channelAuthorization);
    }

    // CONCATENATED MODULE: ./src/core/utils/flat_promise.ts
    function flatPromise() {
      var resolve, reject;
      var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
      });
      return {
        promise: promise,
        resolve: resolve,
        reject: reject
      };
    }
    /* harmony default export */
    var flat_promise = flatPromise;

    // CONCATENATED MODULE: ./src/core/user.ts
    var user_extends =  false || function () {
      var _extendStatics13 = function extendStatics(d, b) {
        _extendStatics13 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };
        return _extendStatics13(d, b);
      };
      return function (d, b) {
        _extendStatics13(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var user_UserFacade = function (_super) {
      user_extends(UserFacade, _super);
      function UserFacade(pusher) {
        var _this = _super.call(this, function (eventName, data) {
          logger.debug('No callbacks on user for ' + eventName);
        }) || this;
        _this.signin_requested = false;
        _this.user_data = null;
        _this.serverToUserChannel = null;
        _this.signinDonePromise = null;
        _this._signinDoneResolve = null;
        _this._onAuthorize = function (err, authData) {
          if (err) {
            logger.warn("Error during signin: " + err);
            _this._cleanup();
            return;
          }
          _this.pusher.send_event('pusher:signin', {
            auth: authData.auth,
            user_data: authData.user_data
          });
        };
        _this.pusher = pusher;
        _this.pusher.connection.bind('state_change', function (_a) {
          var previous = _a.previous,
            current = _a.current;
          if (previous !== 'connected' && current === 'connected') {
            _this._signin();
          }
          if (previous === 'connected' && current !== 'connected') {
            _this._cleanup();
            _this._newSigninPromiseIfNeeded();
          }
        });
        _this.pusher.connection.bind('message', function (event) {
          var eventName = event.event;
          if (eventName === 'pusher:signin_success') {
            _this._onSigninSuccess(event.data);
          }
          if (_this.serverToUserChannel && _this.serverToUserChannel.name === event.channel) {
            _this.serverToUserChannel.handleEvent(event);
          }
        });
        return _this;
      }
      UserFacade.prototype.signin = function () {
        if (this.signin_requested) {
          return;
        }
        this.signin_requested = true;
        this._signin();
      };
      UserFacade.prototype._signin = function () {
        if (!this.signin_requested) {
          return;
        }
        this._newSigninPromiseIfNeeded();
        if (this.pusher.connection.state !== 'connected') {
          return;
        }
        this.pusher.config.userAuthenticator({
          socketId: this.pusher.connection.socket_id
        }, this._onAuthorize);
      };
      UserFacade.prototype._onSigninSuccess = function (data) {
        try {
          this.user_data = JSON.parse(data.user_data);
        } catch (e) {
          logger.error("Failed parsing user data after signin: " + data.user_data);
          this._cleanup();
          return;
        }
        if (typeof this.user_data.id !== 'string' || this.user_data.id === '') {
          logger.error("user_data doesn't contain an id. user_data: " + this.user_data);
          this._cleanup();
          return;
        }
        this._signinDoneResolve();
        this._subscribeChannels();
      };
      UserFacade.prototype._subscribeChannels = function () {
        var _this = this;
        var ensure_subscribed = function ensure_subscribed(channel) {
          if (channel.subscriptionPending && channel.subscriptionCancelled) {
            channel.reinstateSubscription();
          } else if (!channel.subscriptionPending && _this.pusher.connection.state === 'connected') {
            channel.subscribe();
          }
        };
        this.serverToUserChannel = new channels_channel("#server-to-user-" + this.user_data.id, this.pusher);
        this.serverToUserChannel.bind_global(function (eventName, data) {
          if (eventName.indexOf('pusher_internal:') === 0 || eventName.indexOf('pusher:') === 0) {
            return;
          }
          _this.emit(eventName, data);
        });
        ensure_subscribed(this.serverToUserChannel);
      };
      UserFacade.prototype._cleanup = function () {
        this.user_data = null;
        if (this.serverToUserChannel) {
          this.serverToUserChannel.unbind_all();
          this.serverToUserChannel.disconnect();
          this.serverToUserChannel = null;
        }
        if (this.signin_requested) {
          this._signinDoneResolve();
        }
      };
      UserFacade.prototype._newSigninPromiseIfNeeded = function () {
        if (!this.signin_requested) {
          return;
        }
        if (this.signinDonePromise && !this.signinDonePromise.done) {
          return;
        }
        var _a = flat_promise(),
          promise = _a.promise,
          resolve = _a.resolve,
          _ = _a.reject;
        promise.done = false;
        var setDone = function setDone() {
          promise.done = true;
        };
        promise.then(setDone)["catch"](setDone);
        this.signinDonePromise = promise;
        this._signinDoneResolve = resolve;
      };
      return UserFacade;
    }(dispatcher);
    /* harmony default export */
    var user = user_UserFacade;

    // CONCATENATED MODULE: ./src/core/pusher.ts

    var pusher_Pusher = function () {
      function Pusher(app_key, options) {
        var _this = this;
        checkAppKey(app_key);
        options = options || {};
        if (!options.cluster && !(options.wsHost || options.httpHost)) {
          var suffix = url_store.buildLogSuffix('javascriptQuickStart');
          logger.warn("You should always specify a cluster when connecting. " + suffix);
        }
        if ('disableStats' in options) {
          logger.warn('The disableStats option is deprecated in favor of enableStats');
        }
        this.key = app_key;
        this.config = getConfig(options, this);
        this.channels = factory.createChannels();
        this.global_emitter = new dispatcher();
        this.sessionID = Math.floor(Math.random() * 1000000000);
        this.timeline = new timeline_timeline(this.key, this.sessionID, {
          cluster: this.config.cluster,
          features: Pusher.getClientFeatures(),
          params: this.config.timelineParams || {},
          limit: 50,
          level: timeline_level.INFO,
          version: defaults.VERSION
        });
        if (this.config.enableStats) {
          this.timelineSender = factory.createTimelineSender(this.timeline, {
            host: this.config.statsHost,
            path: '/timeline/v2/' + runtime.TimelineTransport.name
          });
        }
        var getStrategy = function getStrategy(options) {
          return runtime.getDefaultStrategy(_this.config, options, strategy_builder_defineTransport);
        };
        this.connection = factory.createConnectionManager(this.key, {
          getStrategy: getStrategy,
          timeline: this.timeline,
          activityTimeout: this.config.activityTimeout,
          pongTimeout: this.config.pongTimeout,
          unavailableTimeout: this.config.unavailableTimeout,
          useTLS: Boolean(this.config.useTLS)
        });
        this.connection.bind('connected', function () {
          _this.subscribeAll();
          if (_this.timelineSender) {
            _this.timelineSender.send(_this.connection.isUsingTLS());
          }
        });
        this.connection.bind('message', function (event) {
          var eventName = event.event;
          var internal = eventName.indexOf('pusher_internal:') === 0;
          if (event.channel) {
            var channel = _this.channel(event.channel);
            if (channel) {
              channel.handleEvent(event);
            }
          }
          if (!internal) {
            _this.global_emitter.emit(event.event, event.data);
          }
        });
        this.connection.bind('connecting', function () {
          _this.channels.disconnect();
        });
        this.connection.bind('disconnected', function () {
          _this.channels.disconnect();
        });
        this.connection.bind('error', function (err) {
          logger.warn(err);
        });
        Pusher.instances.push(this);
        this.timeline.info({
          instances: Pusher.instances.length
        });
        this.user = new user(this);
        if (Pusher.isReady) {
          this.connect();
        }
      }
      Pusher.ready = function () {
        Pusher.isReady = true;
        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
          Pusher.instances[i].connect();
        }
      };
      Pusher.getClientFeatures = function () {
        return keys(filterObject({
          ws: runtime.Transports.ws
        }, function (t) {
          return t.isSupported({});
        }));
      };
      Pusher.prototype.channel = function (name) {
        return this.channels.find(name);
      };
      Pusher.prototype.allChannels = function () {
        return this.channels.all();
      };
      Pusher.prototype.connect = function () {
        this.connection.connect();
        if (this.timelineSender) {
          if (!this.timelineSenderTimer) {
            var usingTLS = this.connection.isUsingTLS();
            var timelineSender = this.timelineSender;
            this.timelineSenderTimer = new PeriodicTimer(60000, function () {
              timelineSender.send(usingTLS);
            });
          }
        }
      };
      Pusher.prototype.disconnect = function () {
        this.connection.disconnect();
        if (this.timelineSenderTimer) {
          this.timelineSenderTimer.ensureAborted();
          this.timelineSenderTimer = null;
        }
      };
      Pusher.prototype.bind = function (event_name, callback, context) {
        this.global_emitter.bind(event_name, callback, context);
        return this;
      };
      Pusher.prototype.unbind = function (event_name, callback, context) {
        this.global_emitter.unbind(event_name, callback, context);
        return this;
      };
      Pusher.prototype.bind_global = function (callback) {
        this.global_emitter.bind_global(callback);
        return this;
      };
      Pusher.prototype.unbind_global = function (callback) {
        this.global_emitter.unbind_global(callback);
        return this;
      };
      Pusher.prototype.unbind_all = function (callback) {
        this.global_emitter.unbind_all();
        return this;
      };
      Pusher.prototype.subscribeAll = function () {
        var channelName;
        for (channelName in this.channels.channels) {
          if (this.channels.channels.hasOwnProperty(channelName)) {
            this.subscribe(channelName);
          }
        }
      };
      Pusher.prototype.subscribe = function (channel_name) {
        var channel = this.channels.add(channel_name, this);
        if (channel.subscriptionPending && channel.subscriptionCancelled) {
          channel.reinstateSubscription();
        } else if (!channel.subscriptionPending && this.connection.state === 'connected') {
          channel.subscribe();
        }
        return channel;
      };
      Pusher.prototype.unsubscribe = function (channel_name) {
        var channel = this.channels.find(channel_name);
        if (channel && channel.subscriptionPending) {
          channel.cancelSubscription();
        } else {
          channel = this.channels.remove(channel_name);
          if (channel && channel.subscribed) {
            channel.unsubscribe();
          }
        }
      };
      Pusher.prototype.send_event = function (event_name, data, channel) {
        return this.connection.send_event(event_name, data, channel);
      };
      Pusher.prototype.shouldUseTLS = function () {
        return this.config.useTLS;
      };
      Pusher.prototype.signin = function () {
        this.user.signin();
      };
      Pusher.instances = [];
      Pusher.isReady = false;
      Pusher.logToConsole = false;
      Pusher.Runtime = runtime;
      Pusher.ScriptReceivers = runtime.ScriptReceivers;
      Pusher.DependenciesReceivers = runtime.DependenciesReceivers;
      Pusher.auth_callbacks = runtime.auth_callbacks;
      return Pusher;
    }();
    /* harmony default export */
    var core_pusher = __nested_webpack_exports__["default"] = pusher_Pusher;
    function checkAppKey(key) {
      if (key === null || key === undefined) {
        throw 'You must pass your app key when you instantiate Pusher.';
      }
    }
    runtime.setup(pusher_Pusher);

    /***/
  }
  /******/)]);
});

/***/ }),

/***/ "./src/forum/extend/Application.js":
/*!*****************************************!*\
  !*** ./src/forum/extend/Application.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/Application */ "flarum/common/Application");
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Application__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_Application__WEBPACK_IMPORTED_MODULE_3___default().prototype), 'mount', function () {
    // Enable logging to console when debug is enabled.
    (pusher_js__WEBPACK_IMPORTED_MODULE_2___default().logToConsole) = this.forum.attribute('debug');
    var wsHost = this.forum.attribute('websocket.host');
    var secure = this.forum.attribute('websocket.secure');
    (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket) = new (pusher_js__WEBPACK_IMPORTED_MODULE_2___default())(this.forum.attribute('websocket.key'), {
      channelAuthorization: {
        endpoint: this.forum.attribute('apiUrl') + '/websocket/auth'
      },
      wsHost: wsHost,
      wsPort: this.forum.attribute('websocket.port'),
      wssPort: this.forum.attribute('websocket.port'),
      enabledTransports: ['wss', 'ws'],
      forceTLS: secure
    });
    (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels) = {
      "public": null,
      user: null
    };
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket.subscribe('private-user=' + flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.id());
    } else if (!this.forum.attribute('websocket.disallow_connection')) {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"] = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket.subscribe('public');
    }
  });
}

/***/ }),

/***/ "./src/forum/extend/Discussion.ts":
/*!****************************************!*\
  !*** ./src/forum/extend/Discussion.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Discussion)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Discussion_NewActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Discussion/NewActivity */ "./src/forum/extend/Discussion/NewActivity.js");
/* harmony import */ var _Discussion_TypingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Discussion/TypingIndicator */ "./src/forum/extend/Discussion/TypingIndicator.js");



function Discussion() {
  (0,_Discussion_NewActivity__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (!!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().data)['blomstra-realtime.typing-indicator']) {
    (0,_Discussion_TypingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

/***/ }),

/***/ "./src/forum/extend/Discussion/NewActivity.js":
/*!****************************************************!*\
  !*** ./src/forum/extend/Discussion/NewActivity.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype).websocketEventPosted = function (data) {
    var _this$discussion,
      _this = this;
    var discussion = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(data);
    if (discussion.id() === ((_this$discussion = this.discussion) == null ? void 0 : _this$discussion.id()) && this.stream) {
      var oldCount = this.discussion.commentCount();
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('discussions', this.discussion.id()).then(function () {
        _this.stream.update().then(function () {
          return m.redraw();
        });
        if (!document.hasFocus()) {
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitleCount(Math.max(0, _this.discussion.commentCount() - oldCount));
          $(window).one('focus', function () {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitleCount(0);
          });
        }
      });
    }
  };
  (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype).websocketEventStreamUpdate = function (data) {
    var _this$discussion2,
      _this2 = this;
    var discussion = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(data);
    if (discussion.id() === ((_this$discussion2 = this.discussion) == null ? void 0 : _this$discussion2.id()) && this.stream) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('discussions', this.discussion.id()).then(function () {
        _this2.stream.update().then(function () {
          return m.redraw();
        });
      });
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    var _app$websocket_channe, _app$websocket_channe2, _app$websocket_channe3, _app$websocket_channe4, _app$websocket_channe5, _app$websocket_channe6, _app$websocket_channe7, _app$websocket_channe8, _app$websocket_channe9, _app$websocket_channe10, _app$websocket_channe11, _app$websocket_channe12, _app$websocket_channe13, _app$websocket_channe14, _app$websocket_channe15;
    (_app$websocket_channe = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe.bind('Flarum\\Post\\Event\\Posted', this.websocketEventPosted.bind(this));
    (_app$websocket_channe2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe2.bind('Flarum\\Post\\Event\\Posted', this.websocketEventPosted.bind(this));
    (_app$websocket_channe3 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe3.bind('discussionRenamed', this.websocketEventStreamUpdate.bind(this));
    (_app$websocket_channe4 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe4.bind('discussionRenamed', this.websocketEventStreamUpdate.bind(this));
    (_app$websocket_channe5 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe5.bind('revisedEvent', this.websocketEventPosted.bind(this));
    (_app$websocket_channe6 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe6.bind('revisedEvent', this.websocketEventPosted.bind(this));

    // fof/best-answer
    (_app$websocket_channe7 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe7.bind('bestAnswerMutation', this.websocketEventStreamUpdate.bind(this));
    (_app$websocket_channe8 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe8.bind('bestAnswerMutation', this.websocketEventStreamUpdate.bind(this));

    // flarum/likes
    (_app$websocket_channe9 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe9.bind('likesMutation', this.websocketEventStreamUpdate.bind(this));
    (_app$websocket_channe10 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe10.bind('likesMutation', this.websocketEventStreamUpdate.bind(this));

    // fof/gamification
    (_app$websocket_channe11 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe11.bind('votedMutation', this.websocketEventStreamUpdate.bind(this));
    (_app$websocket_channe12 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe12.bind('votedMutation', this.websocketEventStreamUpdate.bind(this));

    // fof/reactions
    (_app$websocket_channe13 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe13.bind('reactionsMutation', this.websocketEventStreamUpdate.bind(this));
    (_app$websocket_channe14 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe14.bind('reactionsMutation', this.websocketEventStreamUpdate.bind(this));

    // flarum/lock
    (_app$websocket_channe15 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe15.bind('lockedEvent', this.websocketEventPosted.bind(this));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'onremove', function () {
    var _app$websocket_channe16, _app$websocket_channe17, _app$websocket_channe18, _app$websocket_channe19, _app$websocket_channe20, _app$websocket_channe21, _app$websocket_channe22, _app$websocket_channe23, _app$websocket_channe24, _app$websocket_channe25, _app$websocket_channe26, _app$websocket_channe27, _app$websocket_channe28, _app$websocket_channe29, _app$websocket_channe30;
    (_app$websocket_channe16 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe16.unbind('Flarum\\Post\\Event\\Posted');
    (_app$websocket_channe17 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe17.unbind('Flarum\\Post\\Event\\Posted');
    (_app$websocket_channe18 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe18.unbind('discussionRenamed');
    (_app$websocket_channe19 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe19.unbind('discussionRenamed');
    (_app$websocket_channe20 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe20.unbind('revisedEvent');
    (_app$websocket_channe21 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe21.unbind('revisedEvent');
    (_app$websocket_channe22 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe22.unbind('bestAnswerMutation');
    (_app$websocket_channe23 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe23.unbind('bestAnswerMutation');
    (_app$websocket_channe24 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe24.unbind('likesMutation');
    (_app$websocket_channe25 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe25.unbind('likesMutation');
    (_app$websocket_channe26 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe26.unbind('votedMutation');
    (_app$websocket_channe27 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe27.unbind('votedMutation');
    (_app$websocket_channe28 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe28.unbind('reactionsMutation');
    (_app$websocket_channe29 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe29.unbind('reactionsMutation');
    (_app$websocket_channe30 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe30.unbind('lockedEvent');
  });
}

/***/ }),

/***/ "./src/forum/extend/Discussion/TypingIndicator.js":
/*!********************************************************!*\
  !*** ./src/forum/extend/Discussion/TypingIndicator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_es_throttle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es/throttle */ "./node_modules/lodash-es/throttle.js");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/PostStream */ "flarum/forum/components/PostStream");
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6__);








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'sidebarItems', function (items) {
    //TODO flarum/core 1.7 move this to `PostStream.endItems`. Depends on https://github.com/flarum/framework/pull/3691
    if (this.discussion.attribute('canViewWhoTypes')) {
      var _app$session;
      var typingUsers = Object.keys(this.getTypingUsers());
      var count = typingUsers.length;
      var max = 3;
      var classes = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()(['TypingUsersContainer', count > 0 && 'TypingUsersContainer-active']);
      var typingIcon = count > 0 ? 'fas fa-ellipsis-h fa-beat' : 'fas fa-pause';
      var namedUsers = typingUsers.slice(0, max).join(', ');
      var showUsers = true; // default value

      if ((_app$session = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session)) != null && _app$session.user) {
        showUsers = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.preferences()['blomstra-realtime.typing-indicator-full'];
      }
      items.add('usersTyping', m("div", {
        className: classes,
        key: "typing"
      }, m("div", {
        className: "TypingUsers"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(typingIcon), count > 0 ? showUsers ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.users-are-typing', {
        users: namedUsers,
        count: count,
        others: Math.max(count - max, 0)
      }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.people-are-typing', {
        number: count
      }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.no-activity'))), 70);
    }
  });
  (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype).getTypingUsers = function () {
    var invalidateWhen = new Date().getTime() - 6000;
    var users = this.usersTyping();
    var timeout = null;
    for (var displayName in users) {
      var time = users[displayName];
      if (time < invalidateWhen) {
        delete users[displayName];
      } else if (!timeout || timeout < time) {
        timeout = time;
      }
    }
    this.usersTyping(users);
    if (timeout && this.typingTruncationListener) {
      clearTimeout(this.typingTruncationListener);
    }
    if (timeout) {
      this.typingTruncationListener = setTimeout(function () {
        m.redraw();
      }.bind(this), timeout - new Date().getTime());
    }
    return users;
  };
  (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype).userTyping = function (data) {
    var users = this.usersTyping();
    if (!data.discloseOnline) {
      data.displayName = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.anonymous-user');
    }
    users[data.displayName] = data.time;
    this.usersTyping(users);
    m.redraw();
  };
  (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype).actorIsTyping = function () {
    var _app$session$user$pre;
    var discloseOnline = (_app$session$user$pre = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.preferences()) == null ? void 0 : _app$session$user$pre.discloseOnline;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels.discussion.trigger('client-typing', {
      displayName: discloseOnline ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.displayName() : '[anonymous]',
      discloseOnline: discloseOnline,
      time: Date.now()
    });
  };
  (flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype).checkTyping = function () {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.composingReplyTo(this.discussion)) return;
    if (this.previousContent() !== flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.content()) {
      this.actorIsTyping();

      // Update previous, so we can match on the next tick.
      this.previousContent(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.content());
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', function (vnode) {
    this.previousContent = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default())('');
    this.usersTyping = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default())({});
    this.typingTruncationListener = null;
    this.typingListener = null;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function () {
    var _this = this;
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('websocket.disallow_connection')) return;
    if (this.discussion && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).editor && !this.typingListener) {
      this.typingListener = (0,lodash_es_throttle__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
        this.checkTyping();
      }.bind(this), 2000);
      this.typingListener = setInterval(this.typingListener, 1000);
    }
    if (this.discussion) {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).discussion = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket.subscribe('private-typing=' + m.route.param('id').match(/[0-9]+/));
      if (this.discussion.attribute('canViewWhoTypes')) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels.discussion.bind('client-typing', function (data) {
          _this.userTyping(data);
        });
      }
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'onremove', function () {
    if (this.typingListener) this.typingListener.cancel;
    if (this.typingTruncationListener) clearTimeout(this.typingTruncationListener);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'endItems', function (items) {
    if (this.discussion.attribute('canViewWhoTypes')) {
      var _app$session2;
      var typingUsers = Object.keys(this.getTypingUsers());
      var count = typingUsers.length;
      var max = 3;
      var classes = flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()(['TypingUsersContainer', count > 0 && 'TypingUsersContainer-active']);
      var typingIcon = count > 0 ? 'fas fa-ellipsis-h fa-beat' : 'fas fa-pause';
      var namedUsers = typingUsers.slice(0, max).join(', ');
      var showUsers = true; // default value

      if ((_app$session2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session)) != null && _app$session2.user) {
        showUsers = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.preferences()['blomstra-realtime.typing-indicator-full'];
      }
      items.add('usersTyping', m("div", {
        className: classes,
        key: "typing"
      }, m("div", {
        className: "TypingUsers"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(typingIcon), count > 0 ? showUsers ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.users-are-typing', {
        users: namedUsers,
        count: count,
        others: Math.max(count - max, 0)
      }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.people-are-typing', {
        number: count
      }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.no-activity'))), 70);
    }
  });
  (flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype).getTypingUsers = function () {
    var invalidateWhen = new Date().getTime() - 6000;
    var users = this.usersTyping();
    var timeout = null;
    for (var displayName in users) {
      var time = users[displayName];
      if (time < invalidateWhen) {
        delete users[displayName];
      } else if (!timeout || timeout < time) {
        timeout = time;
      }
    }
    this.usersTyping(users);
    if (timeout && this.typingTruncationListener) {
      clearTimeout(this.typingTruncationListener);
    }
    if (timeout) {
      this.typingTruncationListener = setTimeout(function () {
        m.redraw();
      }.bind(this), timeout - new Date().getTime());
    }
    return users;
  };
  (flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype).userTyping = function (data) {
    var users = this.usersTyping();
    if (!data.discloseOnline) {
      data.displayName = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.typing-indicator.anonymous-user');
    }
    users[data.displayName] = data.time;
    this.usersTyping(users);
    m.redraw();
  };
  (flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype).actorIsTyping = function () {
    var _app$session$user$pre2;
    var discloseOnline = (_app$session$user$pre2 = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.preferences()) == null ? void 0 : _app$session$user$pre2.discloseOnline;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels.discussion.trigger('client-typing', {
      displayName: discloseOnline ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.displayName() : '[anonymous]',
      discloseOnline: discloseOnline,
      time: Date.now()
    });
  };
  (flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype).checkTyping = function () {
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.composingReplyTo(this.discussion)) return;
    if (this.previousContent() !== flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.content()) {
      this.actorIsTyping();

      // Update previous, so we can match on the next tick.
      this.previousContent(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.content());
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'oninit', function (vnode) {
    this.previousContent = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default())('');
    this.usersTyping = new (flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default())({});
    this.typingTruncationListener = null;
    this.typingListener = null;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'view', function () {
    var _this2 = this;
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('websocket.disallow_connection')) return;
    if (this.discussion && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer).editor && !this.typingListener) {
      this.typingListener = (0,lodash_es_throttle__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
        this.checkTyping();
      }.bind(this), 2000);
      this.typingListener = setInterval(this.typingListener, 1000);
    }
    if (this.discussion) {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).discussion = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket.subscribe('private-typing=' + m.route.param('id').match(/[0-9]+/));
      if (this.discussion.attribute('canViewWhoTypes')) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels.discussion.bind('client-typing', function (data) {
          _this2.userTyping(data);
        });
      }
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'onremove', function () {
    if (this.typingListener) this.typingListener.cancel;
    if (this.typingTruncationListener) clearTimeout(this.typingTruncationListener);
  });
}

/***/ }),

/***/ "./src/forum/extend/DiscussionList.ts":
/*!********************************************!*\
  !*** ./src/forum/extend/DiscussionList.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DiscussionList)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiscussionList_NewActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscussionList/NewActivity */ "./src/forum/extend/DiscussionList/NewActivity.js");


function DiscussionList() {
  if (!!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().data)['blomstra-realtime.release-discussion-updates']) {
    (0,_DiscussionList_NewActivity__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}

/***/ }),

/***/ "./src/forum/extend/DiscussionList/NewActivity.js":
/*!********************************************************!*\
  !*** ./src/forum/extend/DiscussionList/NewActivity.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/models/Discussion */ "flarum/forum/models/Discussion");
/* harmony import */ var flarum_forum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/models/Post */ "flarum/forum/models/Post");
/* harmony import */ var flarum_forum_models_Post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_models_Post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/DiscussionList */ "flarum/forum/components/DiscussionList");
/* harmony import */ var flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WebsocketUpdates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebsocketUpdates */ "./src/forum/extend/DiscussionList/WebsocketUpdates.ts");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype).websocketEventPosted = function (data) {
    // Retrieve current page params (eg for searching).
    var params = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().discussions.getParams();
    var activeTag = params.tags ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getBy('tags', 'slug', params.tags) : null;
    if (!params.q && !params.sort && (activeTag || !params.filter)) {
      var _discussion$recipient, _discussion$recipient2, _discussion$tags, _app$discussions$getP, _app$discussions$getP2, _app$current$get;
      // The model entity this event relates to.
      var entity = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(data);

      // Identify the discussion we're dealing with.
      var discussion = entity instanceof (flarum_forum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default()) ? entity : null;
      if (!discussion && entity instanceof (flarum_forum_models_Post__WEBPACK_IMPORTED_MODULE_3___default())) {
        discussion = entity.discussion();
      }
      // console.log("pos1");
      // When we're on the Byobu private discussions page and this discussion is not private
      if (discussion && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current).data.routeName === 'byobuPrivate' && !(discussion.recipientUsers() && discussion.recipientGroups())) {
        return;
      }
      // console.log("pos2");
      if (discussion && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current).data.routeName === 'byobuPrivate' && ((_discussion$recipient = discussion.recipientUsers()) == null ? void 0 : _discussion$recipient.length) === 0 && ((_discussion$recipient2 = discussion.recipientGroups()) == null ? void 0 : _discussion$recipient2.length) === 0) {
        return;
      }
      // console.log("pos3");
      // When we're on the user profile private discussions page, we block updates.
      if (discussion && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current).data.routeName === 'byobuUserPrivate') return;
      // console.log("pos4");
      // When we're on the user profile, we block updates.
      if (discussion && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current).data.routeName === 'user.discussions') return;
      // console.log("pos5");
      // When we're viewing a specific tag but the discussion has no such tags, ignore it.
      if (discussion && activeTag && discussion.tags != null && discussion.tags()) {
        // Tag is not assigned to this discussion.
        var tagIds = discussion.tags().map(function (tag) {
          return tag.id();
        });
        // console.log(tagIds);
        // console.log(activeTag.id());
        if (tagIds.indexOf(activeTag.id()) === -1) return;
      }
      // console.log("pos6");
      if (discussion && discussion.tags != null && discussion.tags() && discussion.tags().find(function (tag) {
        // When we have a page open of a tag the user hides
        // we will still show the notification.
        if (activeTag && activeTag.id() === tag.id()) return false;

        // When we are on the index and any of the assigned tags are set to "Hidden from All Discussions"
        if (!activeTag && tag.isHidden()) return true;

        // Ignore discussions that have a tag that the user ignored with fof/follow-tags.
        return (tag.subscription == null ? void 0 : tag.subscription()) === 'hide';
      })) {
        return;
      }
      // console.log("pos7");
      // Identify whether the discussion is ignored by the user with flarum/subscriptions.
      if (discussion && (discussion.subscription == null ? void 0 : discussion.subscription()) === 'ignore') return;
      // console.log("pos8");
      // We identify whether the user is following any of the tags of the discussion.
      var subscribedTag = (_discussion$tags = discussion.tags()) == null ? void 0 : _discussion$tags.find(function (tag) {
        return (tag.subscription == null ? void 0 : tag.subscription()) === 'lurk' || (tag.subscription == null ? void 0 : tag.subscription()) === 'follow';
      });
      // console.log("pos9");
      // For subscriptions (and follow-tags)
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.get('routeName') === 'following') {
        var _params$filter;
        // Whenever the discussion has no tags the user is subscribed to,
        // or the discussion is not subscribed to; discard the event.
        if ((_params$filter = params.filter) != null && _params$filter['following-tag'] && subscribedTag.length === 0 || (discussion.subscription == null ? void 0 : discussion.subscription()) !== 'follow') {
          return;
        }
      }
      // console.log("pos10");
      // Not already pushed recently or pending an update.
      if (this.websocketUpdates.has(discussion)) return;
      // console.log("pos11");
      // Discussion shouldn't already be top of DiscussionList.
      if (((_app$discussions$getP = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().discussions.getPages()[0]) == null ? void 0 : (_app$discussions$getP2 = _app$discussions$getP.items[0]) == null ? void 0 : _app$discussions$getP2.id()) === discussion.id()) return;
      // console.log("pos12");
      var pushOnIndex = discussion &&
      // Not a discussion view page.
      !flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.get('discussion');
      var pushOnView = discussion && (
      // Current discussion or subscribed/following the discussion or any of its tags.
      discussion.id() === ((_app$current$get = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.get('discussion')) == null ? void 0 : _app$current$get.id()) || subscribedTag || (discussion.subscription == null ? void 0 : discussion.subscription()) === 'follow');
      if (pushOnIndex || pushOnView) {
        this.websocketUpdates.push(discussion);
        if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.matches((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default()))) {
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitleCount(this.websocketUpdates.length());
          m.redraw();
        }
      }
    }
  };
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'oninit', function () {
    this.websocketUpdates = new _WebsocketUpdates__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.releaseTimeout = this.websocketUpdates.getReleaseInterval();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'oncreate', function () {
    var _app$websocket_channe, _app$websocket_channe2, _app$websocket_channe3, _app$websocket_channe4;
    (_app$websocket_channe = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe.bind('Flarum\\Discussion\\Event\\Started', this.websocketEventPosted.bind(this));
    (_app$websocket_channe2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe2.bind('Flarum\\Post\\Event\\Posted', this.websocketEventPosted.bind(this));
    (_app$websocket_channe3 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe3.bind('Flarum\\Discussion\\Event\\Started', this.websocketEventPosted.bind(this));
    (_app$websocket_channe4 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe4.bind('Flarum\\Post\\Event\\Posted', this.websocketEventPosted.bind(this));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'onremove', function () {
    var _app$websocket_channe5, _app$websocket_channe6, _app$websocket_channe7, _app$websocket_channe8;
    (_app$websocket_channe5 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe5.unbind('Flarum\\Discussion\\Event\\Started');
    (_app$websocket_channe6 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels)["public"]) == null ? void 0 : _app$websocket_channe6.unbind('Flarum\\Post\\Event\\Posted');
    (_app$websocket_channe7 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe7.unbind('Flarum\\Discussion\\Event\\Started');
    (_app$websocket_channe8 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) == null ? void 0 : _app$websocket_channe8.unbind('Flarum\\Post\\Event\\Posted');
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'view', function (vdom) {
    var _this = this;
    if (!this.websocketUpdates.isEmpty()) {
      var buttonLabel = function buttonLabel(releaseTimeout) {
        return _this.websocketUpdates.autoRelease() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.push.discussion-list-new-activity-with-auto-release', {
          count: _this.websocketUpdates.length(),
          releaseTimeout: releaseTimeout
        }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('blomstra-realtime.forum.push.discussion-list-new-activity', {
          count: _this.websocketUpdates.length()
        });
      };
      if (this.websocketUpdates.length() && typeof vdom === 'object' && vdom && 'children' in vdom && vdom.children instanceof Array) {
        vdom.children.unshift(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
          className: 'Button Button--block DiscussionList-update',
          'aria-live': 'polite',
          'aria-atomic': 'true',
          onclick: this.releaseUpdates.bind(this)
        }, buttonLabel(this.releaseTimeout)));
        this.websocketUpdates.startTimer();
        this.websocketUpdates.onTimer(function (second) {
          if (second === 0) return _this.releaseUpdates();
          _this.$('.DiscussionList-update > .Button-label').text(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_8___default()(buttonLabel(second)));
        });
      }
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'releaseUpdates', function () {
    // Push new discussions.
    this.websocketUpdates.release(this.attrs.state);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'addDiscussion', function (returned, discussion) {
    this.websocketUpdates.remove(discussion);
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.matches((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default()))) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitleCount(this.websocketUpdates.length());
    }
    m.redraw();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'actionItems', function (items) {
    items.remove('refresh');
  });
}

/***/ }),

/***/ "./src/forum/extend/DiscussionList/WebsocketUpdates.ts":
/*!*************************************************************!*\
  !*** ./src/forum/extend/DiscussionList/WebsocketUpdates.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebsocketUpdates)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

var WebsocketUpdates = /*#__PURE__*/function () {
  function WebsocketUpdates() {
    this.discussions = {};
    this.releaseInterval = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('blomstra-realtime.release-discussion-updates-interval');
    this.timer = void 0;
    this.onTimerCallback = null;
    this.seconds = this.releaseInterval;
  }
  var _proto = WebsocketUpdates.prototype;
  _proto.length = function length() {
    return Object.keys(this.discussions).length;
  };
  _proto.push = function push(discussion) {
    this.discussions[discussion.id()] = discussion;
  };
  _proto.remove = function remove(discussion) {
    delete this.discussions[discussion.id()];
  };
  _proto.has = function has(discussion) {
    return !!this.discussions[discussion.id()];
  };
  _proto.isEmpty = function isEmpty() {
    return this.length() === 0;
  };
  _proto.reset = function reset() {
    this.discussions = {};
  };
  _proto.getReleaseInterval = function getReleaseInterval() {
    return this.releaseInterval;
  }

  /**
   * Releases new discussion updates to the discussion list.
   */;
  _proto.release = function release(state) {
    var _this = this;
    // Push all discussions to the UI list.
    Object.keys(this.discussions).forEach(function (id) {
      state.addDiscussion(_this.discussions[id]);
    });

    // Reset new discussions array.
    this.reset();

    // Reset page count.
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().setTitleCount(0);
  }

  /**
   * Starts the timer that will release new discussion updates to the discussion list.
   */;
  _proto.startTimer = function startTimer() {
    var _this2 = this;
    if (this.autoRelease()) {
      clearInterval(this.timer);
      this.seconds = this.getReleaseInterval();
      this.timer = window.setInterval(function () {
        if (_this2.seconds < 0 && _this2.timer) return clearInterval(_this2.timer);
        _this2.seconds--;
        _this2.onTimerCallback && _this2.onTimerCallback(_this2.seconds);
      }, 1000);
    }
  };
  _proto.onTimer = function onTimer(callback) {
    this.onTimerCallback = callback;
  };
  _proto.autoRelease = function autoRelease() {
    return this.releaseInterval > 0;
  };
  return WebsocketUpdates;
}();


/***/ }),

/***/ "./src/forum/extend/Post.js":
/*!**********************************!*\
  !*** ./src/forum/extend/Post.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_Flagged__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post/Flagged */ "./src/forum/extend/Post/Flagged.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.has('flarum-flags')) {
    (0,_Post_Flagged__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}

/***/ }),

/***/ "./src/forum/extend/Post/Flagged.js":
/*!******************************************!*\
  !*** ./src/forum/extend/Post/Flagged.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_flags_components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/flags/components/FlagsDropdown */ "flarum/flags/components/FlagsDropdown");
/* harmony import */ var flarum_flags_components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_flags_components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_flags_components_FlagsDropdown__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', function () {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels.user.bind('flagged', function (data) {
        (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(data);
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.pushAttributes({
          flagCount: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session.user.attribute('newFlagCount')
        });
        (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().flags).cache = null;
        m.redraw();
      });
    }
  });
}

/***/ }),

/***/ "./src/forum/extend/User.js":
/*!**********************************!*\
  !*** ./src/forum/extend/User.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/models/User */ "flarum/common/models/User");
/* harmony import */ var flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User_extendUserPreferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User/extendUserPreferences */ "./src/forum/extend/User/extendUserPreferences.tsx");
/* harmony import */ var _User_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User/Notification */ "./src/forum/extend/User/Notification.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (flarum_common_models_User__WEBPACK_IMPORTED_MODULE_1___default().prototype).canViewWhoTypes = flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('canViewWhoTypes');
  (0,_User_Notification__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_User_extendUserPreferences__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./src/forum/extend/User/Notification.js":
/*!***********************************************!*\
  !*** ./src/forum/extend/User/Notification.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/NotificationsDropdown */ "flarum/forum/components/NotificationsDropdown");
/* harmony import */ var flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oninit', function () {
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels).user) {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().websocket_channels.user.bind('notification', function (data) {
        (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.pushPayload(data);
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().notifications.clear();
        m.redraw();
      });
    }
  });
}

/***/ }),

/***/ "./src/forum/extend/User/RealtimeUserPreferences.tsx":
/*!***********************************************************!*\
  !*** ./src/forum/extend/User/RealtimeUserPreferences.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RealtimeUserPreferencesItems)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__);



function RealtimeUserPreferencesItems(user) {
  var _preferences;
  var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_1___default())();
  var typingIndicatorLoading = false;
  items.add('typing-indicator', [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default()), {
    state: (_preferences = user.preferences()) == null ? void 0 : _preferences['blomstra-realtime.typing-indicator-full'],
    onchange: function onchange(value) {
      typingIndicatorLoading = true;
      user.savePreferences({
        'blomstra-realtime.typing-indicator-full': value
      }).then(function () {
        typingIndicatorLoading = false;
        m.redraw();
      });
    },
    loading: typingIndicatorLoading
  }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('blomstra-realtime.forum.user.settings.typing-indicator-type.label')), m("p", {
    className: "helpText"
  }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('blomstra-realtime.forum.user.settings.typing-indicator-type.help'))], 80);
  return items;
}

/***/ }),

/***/ "./src/forum/extend/User/extendUserPreferences.tsx":
/*!*********************************************************!*\
  !*** ./src/forum/extend/User/extendUserPreferences.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extendUserPreferences)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RealtimeUserPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RealtimeUserPreferences */ "./src/forum/extend/User/RealtimeUserPreferences.tsx");





function extendUserPreferences() {
  if (!!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().data)['blomstra-realtime.typing-indicator']) {
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'settingsItems', function (items) {
      var user = this.user;
      if (!user || !user.canViewWhoTypes()) {
        return;
      }
      items.add('realtimeItems', m((flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Settings-realtime",
        label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('blomstra-realtime.forum.user.settings.heading')
      }, (0,_RealtimeUserPreferences__WEBPACK_IMPORTED_MODULE_4__["default"])(user).toArray()), 55);
    });
  }
}

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extend_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend/Application */ "./src/forum/extend/Application.js");
/* harmony import */ var _extend_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend/Discussion */ "./src/forum/extend/Discussion.ts");
/* harmony import */ var _extend_DiscussionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extend/DiscussionList */ "./src/forum/extend/DiscussionList.ts");
/* harmony import */ var _extend_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extend/Post */ "./src/forum/extend/Post.js");
/* harmony import */ var _extend_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extend/User */ "./src/forum/extend/User.js");






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('blomstra-realtime', function () {
  (0,_extend_Application__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_extend_Discussion__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_extend_DiscussionList__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_extend_Post__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_extend_User__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "flarum/common/Application":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/Application']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Application'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/FieldSet":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/FieldSet']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/FieldSet'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/User":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/User']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/User'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/flags/components/FlagsDropdown":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['flags/components/FlagsDropdown']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['flags/components/FlagsDropdown'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionList":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionList']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionList'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/NotificationsDropdown":
/*!*******************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/NotificationsDropdown']" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/NotificationsDropdown'];

/***/ }),

/***/ "flarum/forum/components/PostStream":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostStream']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostStream'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ }),

/***/ "flarum/forum/models/Discussion":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['forum/models/Discussion']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/models/Discussion'];

/***/ }),

/***/ "flarum/forum/models/Post":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['forum/models/Post']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/models/Post'];

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);

/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);

/***/ }),

/***/ "./node_modules/lodash-es/_baseTrim.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ "./node_modules/lodash-es/_trimmedEndIndex.js");


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '') : string;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTrim);

/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);

/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ }),

/***/ "./node_modules/lodash-es/_trimmedEndIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimmedEndIndex);

/***/ }),

/***/ "./node_modules/lodash-es/debounce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./now.js */ "./node_modules/lodash-es/now.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }
  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);

/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);

/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);

/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);

/***/ }),

/***/ "./node_modules/lodash-es/now.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);

/***/ }),

/***/ "./node_modules/lodash-es/throttle.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/throttle.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debounce.js */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);

/***/ }),

/***/ "./node_modules/lodash-es/toNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseTrim.js */ "./node_modules/lodash-es/_baseTrim.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toNumber);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map