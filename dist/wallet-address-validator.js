(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jssha/dist/sha.js
  var require_sha = __commonJS({
    "node_modules/jssha/dist/sha.js"(exports, module) {
      !function(n, r) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (n = "undefined" != typeof globalThis ? globalThis : n || self).jsSHA = r();
      }(exports, function() {
        "use strict";
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "ARRAYBUFFER not supported by this environment", t = "UINT8ARRAY not supported by this environment";
        function e(n2, r2, t2, e2) {
          var i2, o2, u2, f2 = r2 || [0], s2 = (t2 = t2 || 0) >>> 3, w2 = -1 === e2 ? 3 : 0;
          for (i2 = 0; i2 < n2.length; i2 += 1) o2 = (u2 = i2 + s2) >>> 2, f2.length <= o2 && f2.push(0), f2[o2] |= n2[i2] << 8 * (w2 + e2 * (u2 % 4));
          return { value: f2, binLen: 8 * n2.length + t2 };
        }
        function i(i2, o2, u2) {
          switch (o2) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
              break;
            default:
              throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE");
          }
          switch (i2) {
            case "HEX":
              return function(n2, r2, t2) {
                return function(n3, r3, t3, e2) {
                  var i3, o3, u3, f2;
                  if (0 != n3.length % 2) throw new Error("String of HEX type must be in byte increments");
                  var s2 = r3 || [0], w2 = (t3 = t3 || 0) >>> 3, a2 = -1 === e2 ? 3 : 0;
                  for (i3 = 0; i3 < n3.length; i3 += 2) {
                    if (o3 = parseInt(n3.substr(i3, 2), 16), isNaN(o3)) throw new Error("String of HEX type contains invalid characters");
                    for (u3 = (f2 = (i3 >>> 1) + w2) >>> 2; s2.length <= u3; ) s2.push(0);
                    s2[u3] |= o3 << 8 * (a2 + e2 * (f2 % 4));
                  }
                  return { value: s2, binLen: 4 * n3.length + t3 };
                }(n2, r2, t2, u2);
              };
            case "TEXT":
              return function(n2, r2, t2) {
                return function(n3, r3, t3, e2, i3) {
                  var o3, u3, f2, s2, w2, a2, h2, c2, v2 = 0, A2 = t3 || [0], E2 = (e2 = e2 || 0) >>> 3;
                  if ("UTF8" === r3) for (h2 = -1 === i3 ? 3 : 0, f2 = 0; f2 < n3.length; f2 += 1) for (u3 = [], 128 > (o3 = n3.charCodeAt(f2)) ? u3.push(o3) : 2048 > o3 ? (u3.push(192 | o3 >>> 6), u3.push(128 | 63 & o3)) : 55296 > o3 || 57344 <= o3 ? u3.push(224 | o3 >>> 12, 128 | o3 >>> 6 & 63, 128 | 63 & o3) : (f2 += 1, o3 = 65536 + ((1023 & o3) << 10 | 1023 & n3.charCodeAt(f2)), u3.push(240 | o3 >>> 18, 128 | o3 >>> 12 & 63, 128 | o3 >>> 6 & 63, 128 | 63 & o3)), s2 = 0; s2 < u3.length; s2 += 1) {
                    for (w2 = (a2 = v2 + E2) >>> 2; A2.length <= w2; ) A2.push(0);
                    A2[w2] |= u3[s2] << 8 * (h2 + i3 * (a2 % 4)), v2 += 1;
                  }
                  else for (h2 = -1 === i3 ? 2 : 0, c2 = "UTF16LE" === r3 && 1 !== i3 || "UTF16LE" !== r3 && 1 === i3, f2 = 0; f2 < n3.length; f2 += 1) {
                    for (o3 = n3.charCodeAt(f2), true === c2 && (o3 = (s2 = 255 & o3) << 8 | o3 >>> 8), w2 = (a2 = v2 + E2) >>> 2; A2.length <= w2; ) A2.push(0);
                    A2[w2] |= o3 << 8 * (h2 + i3 * (a2 % 4)), v2 += 2;
                  }
                  return { value: A2, binLen: 8 * v2 + e2 };
                }(n2, o2, r2, t2, u2);
              };
            case "B64":
              return function(r2, t2, e2) {
                return function(r3, t3, e3, i3) {
                  var o3, u3, f2, s2, w2, a2, h2 = 0, c2 = t3 || [0], v2 = (e3 = e3 || 0) >>> 3, A2 = -1 === i3 ? 3 : 0, E2 = r3.indexOf("=");
                  if (-1 === r3.search(/^[a-zA-Z0-9=+/]+$/)) throw new Error("Invalid character in base-64 string");
                  if (r3 = r3.replace(/=/g, ""), -1 !== E2 && E2 < r3.length) throw new Error("Invalid '=' found in base-64 string");
                  for (o3 = 0; o3 < r3.length; o3 += 4) {
                    for (s2 = r3.substr(o3, 4), f2 = 0, u3 = 0; u3 < s2.length; u3 += 1) f2 |= n.indexOf(s2.charAt(u3)) << 18 - 6 * u3;
                    for (u3 = 0; u3 < s2.length - 1; u3 += 1) {
                      for (w2 = (a2 = h2 + v2) >>> 2; c2.length <= w2; ) c2.push(0);
                      c2[w2] |= (f2 >>> 16 - 8 * u3 & 255) << 8 * (A2 + i3 * (a2 % 4)), h2 += 1;
                    }
                  }
                  return { value: c2, binLen: 8 * h2 + e3 };
                }(r2, t2, e2, u2);
              };
            case "BYTES":
              return function(n2, r2, t2) {
                return function(n3, r3, t3, e2) {
                  var i3, o3, u3, f2, s2 = r3 || [0], w2 = (t3 = t3 || 0) >>> 3, a2 = -1 === e2 ? 3 : 0;
                  for (o3 = 0; o3 < n3.length; o3 += 1) i3 = n3.charCodeAt(o3), u3 = (f2 = o3 + w2) >>> 2, s2.length <= u3 && s2.push(0), s2[u3] |= i3 << 8 * (a2 + e2 * (f2 % 4));
                  return { value: s2, binLen: 8 * n3.length + t3 };
                }(n2, r2, t2, u2);
              };
            case "ARRAYBUFFER":
              try {
                new ArrayBuffer(0);
              } catch (n2) {
                throw new Error(r);
              }
              return function(n2, r2, t2) {
                return function(n3, r3, t3, i3) {
                  return e(new Uint8Array(n3), r3, t3, i3);
                }(n2, r2, t2, u2);
              };
            case "UINT8ARRAY":
              try {
                new Uint8Array(0);
              } catch (n2) {
                throw new Error(t);
              }
              return function(n2, r2, t2) {
                return e(n2, r2, t2, u2);
              };
            default:
              throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
          }
        }
        function o(e2, i2, o2, u2) {
          switch (e2) {
            case "HEX":
              return function(n2) {
                return function(n3, r2, t2, e3) {
                  var i3, o3, u3 = "0123456789abcdef", f2 = "", s2 = r2 / 8, w2 = -1 === t2 ? 3 : 0;
                  for (i3 = 0; i3 < s2; i3 += 1) o3 = n3[i3 >>> 2] >>> 8 * (w2 + t2 * (i3 % 4)), f2 += u3.charAt(o3 >>> 4 & 15) + u3.charAt(15 & o3);
                  return e3.outputUpper ? f2.toUpperCase() : f2;
                }(n2, i2, o2, u2);
              };
            case "B64":
              return function(r2) {
                return function(r3, t2, e3, i3) {
                  var o3, u3, f2, s2, w2, a2 = "", h2 = t2 / 8, c2 = -1 === e3 ? 3 : 0;
                  for (o3 = 0; o3 < h2; o3 += 3) for (s2 = o3 + 1 < h2 ? r3[o3 + 1 >>> 2] : 0, w2 = o3 + 2 < h2 ? r3[o3 + 2 >>> 2] : 0, f2 = (r3[o3 >>> 2] >>> 8 * (c2 + e3 * (o3 % 4)) & 255) << 16 | (s2 >>> 8 * (c2 + e3 * ((o3 + 1) % 4)) & 255) << 8 | w2 >>> 8 * (c2 + e3 * ((o3 + 2) % 4)) & 255, u3 = 0; u3 < 4; u3 += 1) a2 += 8 * o3 + 6 * u3 <= t2 ? n.charAt(f2 >>> 6 * (3 - u3) & 63) : i3.b64Pad;
                  return a2;
                }(r2, i2, o2, u2);
              };
            case "BYTES":
              return function(n2) {
                return function(n3, r2, t2) {
                  var e3, i3, o3 = "", u3 = r2 / 8, f2 = -1 === t2 ? 3 : 0;
                  for (e3 = 0; e3 < u3; e3 += 1) i3 = n3[e3 >>> 2] >>> 8 * (f2 + t2 * (e3 % 4)) & 255, o3 += String.fromCharCode(i3);
                  return o3;
                }(n2, i2, o2);
              };
            case "ARRAYBUFFER":
              try {
                new ArrayBuffer(0);
              } catch (n2) {
                throw new Error(r);
              }
              return function(n2) {
                return function(n3, r2, t2) {
                  var e3, i3 = r2 / 8, o3 = new ArrayBuffer(i3), u3 = new Uint8Array(o3), f2 = -1 === t2 ? 3 : 0;
                  for (e3 = 0; e3 < i3; e3 += 1) u3[e3] = n3[e3 >>> 2] >>> 8 * (f2 + t2 * (e3 % 4)) & 255;
                  return o3;
                }(n2, i2, o2);
              };
            case "UINT8ARRAY":
              try {
                new Uint8Array(0);
              } catch (n2) {
                throw new Error(t);
              }
              return function(n2) {
                return function(n3, r2, t2) {
                  var e3, i3 = r2 / 8, o3 = -1 === t2 ? 3 : 0, u3 = new Uint8Array(i3);
                  for (e3 = 0; e3 < i3; e3 += 1) u3[e3] = n3[e3 >>> 2] >>> 8 * (o3 + t2 * (e3 % 4)) & 255;
                  return u3;
                }(n2, i2, o2);
              };
            default:
              throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
          }
        }
        var u = 4294967296, f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], s = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428], w = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], a = "Chosen SHA variant is not supported", h = "Cannot set numRounds with MAC";
        function c(n2, r2) {
          var t2, e2, i2 = n2.binLen >>> 3, o2 = r2.binLen >>> 3, u2 = i2 << 3, f2 = 4 - i2 << 3;
          if (i2 % 4 != 0) {
            for (t2 = 0; t2 < o2; t2 += 4) e2 = i2 + t2 >>> 2, n2.value[e2] |= r2.value[t2 >>> 2] << u2, n2.value.push(0), n2.value[e2 + 1] |= r2.value[t2 >>> 2] >>> f2;
            return (n2.value.length << 2) - 4 >= o2 + i2 && n2.value.pop(), { value: n2.value, binLen: n2.binLen + r2.binLen };
          }
          return { value: n2.value.concat(r2.value), binLen: n2.binLen + r2.binLen };
        }
        function v(n2) {
          var r2 = { outputUpper: false, b64Pad: "=", outputLen: -1 }, t2 = n2 || {}, e2 = "Output length must be a multiple of 8";
          if (r2.outputUpper = t2.outputUpper || false, t2.b64Pad && (r2.b64Pad = t2.b64Pad), t2.outputLen) {
            if (t2.outputLen % 8 != 0) throw new Error(e2);
            r2.outputLen = t2.outputLen;
          } else if (t2.shakeLen) {
            if (t2.shakeLen % 8 != 0) throw new Error(e2);
            r2.outputLen = t2.shakeLen;
          }
          if ("boolean" != typeof r2.outputUpper) throw new Error("Invalid outputUpper formatting option");
          if ("string" != typeof r2.b64Pad) throw new Error("Invalid b64Pad formatting option");
          return r2;
        }
        function A(n2, r2, t2, e2) {
          var o2 = n2 + " must include a value and format";
          if (!r2) {
            if (!e2) throw new Error(o2);
            return e2;
          }
          if (void 0 === r2.value || !r2.format) throw new Error(o2);
          return i(r2.format, r2.encoding || "UTF8", t2)(r2.value);
        }
        var E = function() {
          function n2(n3, r2, t2) {
            var e2 = t2 || {};
            if (this.t = r2, this.i = e2.encoding || "UTF8", this.numRounds = e2.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds) throw new Error("numRounds must a integer >= 1");
            this.o = n3, this.u = [], this.h = 0, this.v = false, this.A = 0, this.l = false, this.S = [], this.H = [];
          }
          return n2.prototype.update = function(n3) {
            var r2, t2 = 0, e2 = this.p >>> 5, i2 = this.m(n3, this.u, this.h), o2 = i2.binLen, u2 = i2.value, f2 = o2 >>> 5;
            for (r2 = 0; r2 < f2; r2 += e2) t2 + this.p <= o2 && (this.U = this.R(u2.slice(r2, r2 + e2), this.U), t2 += this.p);
            return this.A += t2, this.u = u2.slice(t2 >>> 5), this.h = o2 % this.p, this.v = true, this;
          }, n2.prototype.getHash = function(n3, r2) {
            var t2, e2, i2 = this.T, u2 = v(r2);
            if (this.C) {
              if (-1 === u2.outputLen) throw new Error("Output length must be specified in options");
              i2 = u2.outputLen;
            }
            var f2 = o(n3, i2, this.F, u2);
            if (this.l && this.K) return f2(this.K(u2));
            for (e2 = this.g(this.u.slice(), this.h, this.A, this.L(this.U), i2), t2 = 1; t2 < this.numRounds; t2 += 1) this.C && i2 % 32 != 0 && (e2[e2.length - 1] &= 16777215 >>> 24 - i2 % 32), e2 = this.g(e2, i2, 0, this.B(this.o), i2);
            return f2(e2);
          }, n2.prototype.setHMACKey = function(n3, r2, t2) {
            if (!this.k) throw new Error("Variant does not support HMAC");
            if (this.v) throw new Error("Cannot set MAC key after calling update");
            var e2 = i(r2, (t2 || {}).encoding || "UTF8", this.F);
            this.Y(e2(n3));
          }, n2.prototype.Y = function(n3) {
            var r2, t2 = this.p >>> 3, e2 = t2 / 4 - 1;
            if (1 !== this.numRounds) throw new Error(h);
            if (this.l) throw new Error("MAC key already set");
            for (t2 < n3.binLen / 8 && (n3.value = this.g(n3.value, n3.binLen, 0, this.B(this.o), this.T)); n3.value.length <= e2; ) n3.value.push(0);
            for (r2 = 0; r2 <= e2; r2 += 1) this.S[r2] = 909522486 ^ n3.value[r2], this.H[r2] = 1549556828 ^ n3.value[r2];
            this.U = this.R(this.S, this.U), this.A = this.p, this.l = true;
          }, n2.prototype.getHMAC = function(n3, r2) {
            var t2 = v(r2);
            return o(n3, this.T, this.F, t2)(this.N());
          }, n2.prototype.N = function() {
            var n3;
            if (!this.l) throw new Error("Cannot call getHMAC without first setting MAC key");
            var r2 = this.g(this.u.slice(), this.h, this.A, this.L(this.U), this.T);
            return n3 = this.R(this.H, this.B(this.o)), n3 = this.g(r2, this.T, this.p, n3, this.T);
          }, n2;
        }(), l = function(n2, r2) {
          return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r3) {
            n3.__proto__ = r3;
          } || function(n3, r3) {
            for (var t2 in r3) Object.prototype.hasOwnProperty.call(r3, t2) && (n3[t2] = r3[t2]);
          }, l(n2, r2);
        };
        function b(n2, r2) {
          if ("function" != typeof r2 && null !== r2) throw new TypeError("Class extends value " + String(r2) + " is not a constructor or null");
          function t2() {
            this.constructor = n2;
          }
          l(n2, r2), n2.prototype = null === r2 ? Object.create(r2) : (t2.prototype = r2.prototype, new t2());
        }
        function S(n2, r2) {
          return n2 << r2 | n2 >>> 32 - r2;
        }
        function H(n2, r2) {
          return n2 >>> r2 | n2 << 32 - r2;
        }
        function d(n2, r2) {
          return n2 >>> r2;
        }
        function p(n2, r2, t2) {
          return n2 ^ r2 ^ t2;
        }
        function y(n2, r2, t2) {
          return n2 & r2 ^ ~n2 & t2;
        }
        function m(n2, r2, t2) {
          return n2 & r2 ^ n2 & t2 ^ r2 & t2;
        }
        function U(n2) {
          return H(n2, 2) ^ H(n2, 13) ^ H(n2, 22);
        }
        function R(n2, r2) {
          var t2 = (65535 & n2) + (65535 & r2);
          return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16)) << 16 | 65535 & t2;
        }
        function T(n2, r2, t2, e2) {
          var i2 = (65535 & n2) + (65535 & r2) + (65535 & t2) + (65535 & e2);
          return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16) + (e2 >>> 16) + (i2 >>> 16)) << 16 | 65535 & i2;
        }
        function C(n2, r2, t2, e2, i2) {
          var o2 = (65535 & n2) + (65535 & r2) + (65535 & t2) + (65535 & e2) + (65535 & i2);
          return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16) + (e2 >>> 16) + (i2 >>> 16) + (o2 >>> 16)) << 16 | 65535 & o2;
        }
        function F(n2) {
          return H(n2, 7) ^ H(n2, 18) ^ d(n2, 3);
        }
        function K(n2) {
          return H(n2, 6) ^ H(n2, 11) ^ H(n2, 25);
        }
        function g(n2) {
          return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        }
        function L(n2, r2) {
          var t2, e2, i2, o2, u2, f2, s2, w2 = [];
          for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], s2 = 0; s2 < 80; s2 += 1) w2[s2] = s2 < 16 ? n2[s2] : S(w2[s2 - 3] ^ w2[s2 - 8] ^ w2[s2 - 14] ^ w2[s2 - 16], 1), f2 = s2 < 20 ? C(S(t2, 5), y(e2, i2, o2), u2, 1518500249, w2[s2]) : s2 < 40 ? C(S(t2, 5), p(e2, i2, o2), u2, 1859775393, w2[s2]) : s2 < 60 ? C(S(t2, 5), m(e2, i2, o2), u2, 2400959708, w2[s2]) : C(S(t2, 5), p(e2, i2, o2), u2, 3395469782, w2[s2]), u2 = o2, o2 = i2, i2 = S(e2, 30), e2 = t2, t2 = f2;
          return r2[0] = R(t2, r2[0]), r2[1] = R(e2, r2[1]), r2[2] = R(i2, r2[2]), r2[3] = R(o2, r2[3]), r2[4] = R(u2, r2[4]), r2;
        }
        function B(n2, r2, t2, e2) {
          for (var i2, o2 = 15 + (r2 + 65 >>> 9 << 4), f2 = r2 + t2; n2.length <= o2; ) n2.push(0);
          for (n2[r2 >>> 5] |= 128 << 24 - r2 % 32, n2[o2] = 4294967295 & f2, n2[o2 - 1] = f2 / u | 0, i2 = 0; i2 < n2.length; i2 += 16) e2 = L(n2.slice(i2, i2 + 16), e2);
          return e2;
        }
        "function" == typeof SuppressedError && SuppressedError;
        var k = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this;
            if ("SHA-1" !== r3) throw new Error(a);
            var u2 = e2 || {};
            return (o2 = n2.call(this, r3, t2, e2) || this).k = true, o2.K = o2.N, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = L, o2.L = function(n3) {
              return n3.slice();
            }, o2.B = g, o2.g = B, o2.U = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], o2.p = 512, o2.T = 160, o2.C = false, u2.hmacKey && o2.Y(A("hmacKey", u2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2;
        }(E);
        function Y(n2) {
          return "SHA-224" == n2 ? s.slice() : w.slice();
        }
        function N(n2, r2) {
          var t2, e2, i2, o2, u2, s2, w2, a2, h2, c2, v2, A2, E2 = [];
          for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], s2 = r2[5], w2 = r2[6], a2 = r2[7], v2 = 0; v2 < 64; v2 += 1) E2[v2] = v2 < 16 ? n2[v2] : T(H(A2 = E2[v2 - 2], 17) ^ H(A2, 19) ^ d(A2, 10), E2[v2 - 7], F(E2[v2 - 15]), E2[v2 - 16]), h2 = C(a2, K(u2), y(u2, s2, w2), f[v2], E2[v2]), c2 = R(U(t2), m(t2, e2, i2)), a2 = w2, w2 = s2, s2 = u2, u2 = R(o2, h2), o2 = i2, i2 = e2, e2 = t2, t2 = R(h2, c2);
          return r2[0] = R(t2, r2[0]), r2[1] = R(e2, r2[1]), r2[2] = R(i2, r2[2]), r2[3] = R(o2, r2[3]), r2[4] = R(u2, r2[4]), r2[5] = R(s2, r2[5]), r2[6] = R(w2, r2[6]), r2[7] = R(a2, r2[7]), r2;
        }
        var I = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this;
            if ("SHA-224" !== r3 && "SHA-256" !== r3) throw new Error(a);
            var f2 = e2 || {};
            return (o2 = n2.call(this, r3, t2, e2) || this).K = o2.N, o2.k = true, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = N, o2.L = function(n3) {
              return n3.slice();
            }, o2.B = Y, o2.g = function(n3, t3, e3, i2) {
              return function(n4, r4, t4, e4, i3) {
                for (var o3, f3 = 15 + (r4 + 65 >>> 9 << 4), s2 = r4 + t4; n4.length <= f3; ) n4.push(0);
                for (n4[r4 >>> 5] |= 128 << 24 - r4 % 32, n4[f3] = 4294967295 & s2, n4[f3 - 1] = s2 / u | 0, o3 = 0; o3 < n4.length; o3 += 16) e4 = N(n4.slice(o3, o3 + 16), e4);
                return "SHA-224" === i3 ? [e4[0], e4[1], e4[2], e4[3], e4[4], e4[5], e4[6]] : e4;
              }(n3, t3, e3, i2, r3);
            }, o2.U = Y(r3), o2.p = 512, o2.T = "SHA-224" === r3 ? 224 : 256, o2.C = false, f2.hmacKey && o2.Y(A("hmacKey", f2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2;
        }(E), M = function(n2, r2) {
          this.I = n2, this.M = r2;
        };
        function X(n2, r2) {
          var t2;
          return r2 > 32 ? (t2 = 64 - r2, new M(n2.M << r2 | n2.I >>> t2, n2.I << r2 | n2.M >>> t2)) : 0 !== r2 ? (t2 = 32 - r2, new M(n2.I << r2 | n2.M >>> t2, n2.M << r2 | n2.I >>> t2)) : n2;
        }
        function z(n2, r2) {
          var t2;
          return r2 < 32 ? (t2 = 32 - r2, new M(n2.I >>> r2 | n2.M << t2, n2.M >>> r2 | n2.I << t2)) : (t2 = 64 - r2, new M(n2.M >>> r2 | n2.I << t2, n2.I >>> r2 | n2.M << t2));
        }
        function O(n2, r2) {
          return new M(n2.I >>> r2, n2.M >>> r2 | n2.I << 32 - r2);
        }
        function j(n2, r2, t2) {
          return new M(n2.I & r2.I ^ ~n2.I & t2.I, n2.M & r2.M ^ ~n2.M & t2.M);
        }
        function _(n2, r2, t2) {
          return new M(n2.I & r2.I ^ n2.I & t2.I ^ r2.I & t2.I, n2.M & r2.M ^ n2.M & t2.M ^ r2.M & t2.M);
        }
        function x(n2) {
          var r2 = z(n2, 28), t2 = z(n2, 34), e2 = z(n2, 39);
          return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
        }
        function P(n2, r2) {
          var t2, e2;
          t2 = (65535 & n2.M) + (65535 & r2.M);
          var i2 = (65535 & (e2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2 >>> 16))) << 16 | 65535 & t2;
          return t2 = (65535 & n2.I) + (65535 & r2.I) + (e2 >>> 16), e2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2 >>> 16), new M((65535 & e2) << 16 | 65535 & t2, i2);
        }
        function V(n2, r2, t2, e2) {
          var i2, o2;
          i2 = (65535 & n2.M) + (65535 & r2.M) + (65535 & t2.M) + (65535 & e2.M);
          var u2 = (65535 & (o2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2.M >>> 16) + (e2.M >>> 16) + (i2 >>> 16))) << 16 | 65535 & i2;
          return i2 = (65535 & n2.I) + (65535 & r2.I) + (65535 & t2.I) + (65535 & e2.I) + (o2 >>> 16), o2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2.I >>> 16) + (e2.I >>> 16) + (i2 >>> 16), new M((65535 & o2) << 16 | 65535 & i2, u2);
        }
        function Z(n2, r2, t2, e2, i2) {
          var o2, u2;
          o2 = (65535 & n2.M) + (65535 & r2.M) + (65535 & t2.M) + (65535 & e2.M) + (65535 & i2.M);
          var f2 = (65535 & (u2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2.M >>> 16) + (e2.M >>> 16) + (i2.M >>> 16) + (o2 >>> 16))) << 16 | 65535 & o2;
          return o2 = (65535 & n2.I) + (65535 & r2.I) + (65535 & t2.I) + (65535 & e2.I) + (65535 & i2.I) + (u2 >>> 16), u2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2.I >>> 16) + (e2.I >>> 16) + (i2.I >>> 16) + (o2 >>> 16), new M((65535 & u2) << 16 | 65535 & o2, f2);
        }
        function q(n2, r2) {
          return new M(n2.I ^ r2.I, n2.M ^ r2.M);
        }
        function D(n2) {
          var r2 = z(n2, 1), t2 = z(n2, 8), e2 = O(n2, 7);
          return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
        }
        function G(n2) {
          var r2 = z(n2, 14), t2 = z(n2, 18), e2 = z(n2, 41);
          return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
        }
        var J = [new M(f[0], 3609767458), new M(f[1], 602891725), new M(f[2], 3964484399), new M(f[3], 2173295548), new M(f[4], 4081628472), new M(f[5], 3053834265), new M(f[6], 2937671579), new M(f[7], 3664609560), new M(f[8], 2734883394), new M(f[9], 1164996542), new M(f[10], 1323610764), new M(f[11], 3590304994), new M(f[12], 4068182383), new M(f[13], 991336113), new M(f[14], 633803317), new M(f[15], 3479774868), new M(f[16], 2666613458), new M(f[17], 944711139), new M(f[18], 2341262773), new M(f[19], 2007800933), new M(f[20], 1495990901), new M(f[21], 1856431235), new M(f[22], 3175218132), new M(f[23], 2198950837), new M(f[24], 3999719339), new M(f[25], 766784016), new M(f[26], 2566594879), new M(f[27], 3203337956), new M(f[28], 1034457026), new M(f[29], 2466948901), new M(f[30], 3758326383), new M(f[31], 168717936), new M(f[32], 1188179964), new M(f[33], 1546045734), new M(f[34], 1522805485), new M(f[35], 2643833823), new M(f[36], 2343527390), new M(f[37], 1014477480), new M(f[38], 1206759142), new M(f[39], 344077627), new M(f[40], 1290863460), new M(f[41], 3158454273), new M(f[42], 3505952657), new M(f[43], 106217008), new M(f[44], 3606008344), new M(f[45], 1432725776), new M(f[46], 1467031594), new M(f[47], 851169720), new M(f[48], 3100823752), new M(f[49], 1363258195), new M(f[50], 3750685593), new M(f[51], 3785050280), new M(f[52], 3318307427), new M(f[53], 3812723403), new M(f[54], 2003034995), new M(f[55], 3602036899), new M(f[56], 1575990012), new M(f[57], 1125592928), new M(f[58], 2716904306), new M(f[59], 442776044), new M(f[60], 593698344), new M(f[61], 3733110249), new M(f[62], 2999351573), new M(f[63], 3815920427), new M(3391569614, 3928383900), new M(3515267271, 566280711), new M(3940187606, 3454069534), new M(4118630271, 4000239992), new M(116418474, 1914138554), new M(174292421, 2731055270), new M(289380356, 3203993006), new M(460393269, 320620315), new M(685471733, 587496836), new M(852142971, 1086792851), new M(1017036298, 365543100), new M(1126000580, 2618297676), new M(1288033470, 3409855158), new M(1501505948, 4234509866), new M(1607167915, 987167468), new M(1816402316, 1246189591)];
        function Q(n2) {
          return "SHA-384" === n2 ? [new M(3418070365, s[0]), new M(1654270250, s[1]), new M(2438529370, s[2]), new M(355462360, s[3]), new M(1731405415, s[4]), new M(41048885895, s[5]), new M(3675008525, s[6]), new M(1203062813, s[7])] : [new M(w[0], 4089235720), new M(w[1], 2227873595), new M(w[2], 4271175723), new M(w[3], 1595750129), new M(w[4], 2917565137), new M(w[5], 725511199), new M(w[6], 4215389547), new M(w[7], 327033209)];
        }
        function W(n2, r2) {
          var t2, e2, i2, o2, u2, f2, s2, w2, a2, h2, c2, v2, A2, E2, l2, b2, S2 = [];
          for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], f2 = r2[5], s2 = r2[6], w2 = r2[7], c2 = 0; c2 < 80; c2 += 1) c2 < 16 ? (v2 = 2 * c2, S2[c2] = new M(n2[v2], n2[v2 + 1])) : S2[c2] = V((A2 = S2[c2 - 2], E2 = void 0, l2 = void 0, b2 = void 0, E2 = z(A2, 19), l2 = z(A2, 61), b2 = O(A2, 6), new M(E2.I ^ l2.I ^ b2.I, E2.M ^ l2.M ^ b2.M)), S2[c2 - 7], D(S2[c2 - 15]), S2[c2 - 16]), a2 = Z(w2, G(u2), j(u2, f2, s2), J[c2], S2[c2]), h2 = P(x(t2), _(t2, e2, i2)), w2 = s2, s2 = f2, f2 = u2, u2 = P(o2, a2), o2 = i2, i2 = e2, e2 = t2, t2 = P(a2, h2);
          return r2[0] = P(t2, r2[0]), r2[1] = P(e2, r2[1]), r2[2] = P(i2, r2[2]), r2[3] = P(o2, r2[3]), r2[4] = P(u2, r2[4]), r2[5] = P(f2, r2[5]), r2[6] = P(s2, r2[6]), r2[7] = P(w2, r2[7]), r2;
        }
        var $ = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this;
            if ("SHA-384" !== r3 && "SHA-512" !== r3) throw new Error(a);
            var f2 = e2 || {};
            return (o2 = n2.call(this, r3, t2, e2) || this).K = o2.N, o2.k = true, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = W, o2.L = function(n3) {
              return n3.slice();
            }, o2.B = Q, o2.g = function(n3, t3, e3, i2) {
              return function(n4, r4, t4, e4, i3) {
                for (var o3, f3 = 31 + (r4 + 129 >>> 10 << 5), s2 = r4 + t4; n4.length <= f3; ) n4.push(0);
                for (n4[r4 >>> 5] |= 128 << 24 - r4 % 32, n4[f3] = 4294967295 & s2, n4[f3 - 1] = s2 / u | 0, o3 = 0; o3 < n4.length; o3 += 32) e4 = W(n4.slice(o3, o3 + 32), e4);
                return "SHA-384" === i3 ? [e4[0].I, e4[0].M, e4[1].I, e4[1].M, e4[2].I, e4[2].M, e4[3].I, e4[3].M, e4[4].I, e4[4].M, e4[5].I, e4[5].M] : [e4[0].I, e4[0].M, e4[1].I, e4[1].M, e4[2].I, e4[2].M, e4[3].I, e4[3].M, e4[4].I, e4[4].M, e4[5].I, e4[5].M, e4[6].I, e4[6].M, e4[7].I, e4[7].M];
              }(n3, t3, e3, i2, r3);
            }, o2.U = Q(r3), o2.p = 1024, o2.T = "SHA-384" === r3 ? 384 : 512, o2.C = false, f2.hmacKey && o2.Y(A("hmacKey", f2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2;
        }(E), nn = [new M(0, 1), new M(0, 32898), new M(2147483648, 32906), new M(2147483648, 2147516416), new M(0, 32907), new M(0, 2147483649), new M(2147483648, 2147516545), new M(2147483648, 32777), new M(0, 138), new M(0, 136), new M(0, 2147516425), new M(0, 2147483658), new M(0, 2147516555), new M(2147483648, 139), new M(2147483648, 32905), new M(2147483648, 32771), new M(2147483648, 32770), new M(2147483648, 128), new M(0, 32778), new M(2147483648, 2147483658), new M(2147483648, 2147516545), new M(2147483648, 32896), new M(0, 2147483649), new M(2147483648, 2147516424)], rn = [[0, 36, 3, 41, 18], [1, 44, 10, 45, 2], [62, 6, 43, 15, 61], [28, 55, 25, 21, 56], [27, 20, 39, 8, 14]];
        function tn(n2) {
          var r2, t2 = [];
          for (r2 = 0; r2 < 5; r2 += 1) t2[r2] = [new M(0, 0), new M(0, 0), new M(0, 0), new M(0, 0), new M(0, 0)];
          return t2;
        }
        function en(n2) {
          var r2, t2 = [];
          for (r2 = 0; r2 < 5; r2 += 1) t2[r2] = n2[r2].slice();
          return t2;
        }
        function on(n2, r2) {
          var t2, e2, i2, o2, u2, f2, s2, w2, a2, h2 = [], c2 = [];
          if (null !== n2) for (e2 = 0; e2 < n2.length; e2 += 2) r2[(e2 >>> 1) % 5][(e2 >>> 1) / 5 | 0] = q(r2[(e2 >>> 1) % 5][(e2 >>> 1) / 5 | 0], new M(n2[e2 + 1], n2[e2]));
          for (t2 = 0; t2 < 24; t2 += 1) {
            for (o2 = tn(), e2 = 0; e2 < 5; e2 += 1) h2[e2] = (u2 = r2[e2][0], f2 = r2[e2][1], s2 = r2[e2][2], w2 = r2[e2][3], a2 = r2[e2][4], new M(u2.I ^ f2.I ^ s2.I ^ w2.I ^ a2.I, u2.M ^ f2.M ^ s2.M ^ w2.M ^ a2.M));
            for (e2 = 0; e2 < 5; e2 += 1) c2[e2] = q(h2[(e2 + 4) % 5], X(h2[(e2 + 1) % 5], 1));
            for (e2 = 0; e2 < 5; e2 += 1) for (i2 = 0; i2 < 5; i2 += 1) r2[e2][i2] = q(r2[e2][i2], c2[e2]);
            for (e2 = 0; e2 < 5; e2 += 1) for (i2 = 0; i2 < 5; i2 += 1) o2[i2][(2 * e2 + 3 * i2) % 5] = X(r2[e2][i2], rn[e2][i2]);
            for (e2 = 0; e2 < 5; e2 += 1) for (i2 = 0; i2 < 5; i2 += 1) r2[e2][i2] = q(o2[e2][i2], new M(~o2[(e2 + 1) % 5][i2].I & o2[(e2 + 2) % 5][i2].I, ~o2[(e2 + 1) % 5][i2].M & o2[(e2 + 2) % 5][i2].M));
            r2[0][0] = q(r2[0][0], nn[t2]);
          }
          return r2;
        }
        function un(n2) {
          var r2, t2, e2 = 0, i2 = [0, 0], o2 = [4294967295 & n2, n2 / u & 2097151];
          for (r2 = 6; r2 >= 0; r2--) 0 === (t2 = o2[r2 >> 2] >>> 8 * r2 & 255) && 0 === e2 || (i2[e2 + 1 >> 2] |= t2 << 8 * (e2 + 1), e2 += 1);
          return e2 = 0 !== e2 ? e2 : 1, i2[0] |= e2, { value: e2 + 1 > 4 ? i2 : [i2[0]], binLen: 8 + 8 * e2 };
        }
        function fn(n2) {
          return c(un(n2.binLen), n2);
        }
        function sn(n2, r2) {
          var t2, e2 = un(r2), i2 = r2 >>> 2, o2 = (i2 - (e2 = c(e2, n2)).value.length % i2) % i2;
          for (t2 = 0; t2 < o2; t2++) e2.value.push(0);
          return e2.value;
        }
        var wn = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this, u2 = 6, f2 = 0, s2 = e2 || {};
            if (1 !== (o2 = n2.call(this, r3, t2, e2) || this).numRounds) {
              if (s2.kmacKey || s2.hmacKey) throw new Error(h);
              if ("CSHAKE128" === o2.o || "CSHAKE256" === o2.o) throw new Error("Cannot set numRounds for CSHAKE variants");
            }
            switch (o2.F = 1, o2.m = i(o2.t, o2.i, o2.F), o2.R = on, o2.L = en, o2.B = tn, o2.U = tn(), o2.C = false, r3) {
              case "SHA3-224":
                o2.p = f2 = 1152, o2.T = 224, o2.k = true, o2.K = o2.N;
                break;
              case "SHA3-256":
                o2.p = f2 = 1088, o2.T = 256, o2.k = true, o2.K = o2.N;
                break;
              case "SHA3-384":
                o2.p = f2 = 832, o2.T = 384, o2.k = true, o2.K = o2.N;
                break;
              case "SHA3-512":
                o2.p = f2 = 576, o2.T = 512, o2.k = true, o2.K = o2.N;
                break;
              case "SHAKE128":
                u2 = 31, o2.p = f2 = 1344, o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              case "SHAKE256":
                u2 = 31, o2.p = f2 = 1088, o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              case "KMAC128":
                u2 = 4, o2.p = f2 = 1344, o2.X(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = o2.O;
                break;
              case "KMAC256":
                u2 = 4, o2.p = f2 = 1088, o2.X(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = o2.O;
                break;
              case "CSHAKE128":
                o2.p = f2 = 1344, u2 = o2.j(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              case "CSHAKE256":
                o2.p = f2 = 1088, u2 = o2.j(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              default:
                throw new Error(a);
            }
            return o2.g = function(n3, r4, t3, e3, i2) {
              return function(n4, r5, t4, e4, i3, o3, u3) {
                var f3, s3, w2 = 0, a2 = [], h2 = i3 >>> 5, c2 = r5 >>> 5;
                for (f3 = 0; f3 < c2 && r5 >= i3; f3 += h2) e4 = on(n4.slice(f3, f3 + h2), e4), r5 -= i3;
                for (n4 = n4.slice(f3), r5 %= i3; n4.length < h2; ) n4.push(0);
                for (n4[(f3 = r5 >>> 3) >> 2] ^= o3 << f3 % 4 * 8, n4[h2 - 1] ^= 2147483648, e4 = on(n4, e4); 32 * a2.length < u3 && (s3 = e4[w2 % 5][w2 / 5 | 0], a2.push(s3.M), !(32 * a2.length >= u3)); ) a2.push(s3.I), 0 == 64 * (w2 += 1) % i3 && (on(null, e4), w2 = 0);
                return a2;
              }(n3, r4, 0, e3, f2, u2, i2);
            }, s2.hmacKey && o2.Y(A("hmacKey", s2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2.prototype.j = function(n3, r3) {
            var t2 = function(n4) {
              var r4 = n4 || {};
              return { funcName: A("funcName", r4.funcName, 1, { value: [], binLen: 0 }), customization: A("Customization", r4.customization, 1, { value: [], binLen: 0 }) };
            }(n3 || {});
            r3 && (t2.funcName = r3);
            var e2 = c(fn(t2.funcName), fn(t2.customization));
            if (0 !== t2.customization.binLen || 0 !== t2.funcName.binLen) {
              for (var i2 = sn(e2, this.p >>> 3), o2 = 0; o2 < i2.length; o2 += this.p >>> 5) this.U = this.R(i2.slice(o2, o2 + (this.p >>> 5)), this.U), this.A += this.p;
              return 4;
            }
            return 31;
          }, r2.prototype.X = function(n3) {
            var r3 = function(n4) {
              var r4 = n4 || {};
              return { kmacKey: A("kmacKey", r4.kmacKey, 1), funcName: { value: [1128353099], binLen: 32 }, customization: A("Customization", r4.customization, 1, { value: [], binLen: 0 }) };
            }(n3 || {});
            this.j(n3, r3.funcName);
            for (var t2 = sn(fn(r3.kmacKey), this.p >>> 3), e2 = 0; e2 < t2.length; e2 += this.p >>> 5) this.U = this.R(t2.slice(e2, e2 + (this.p >>> 5)), this.U), this.A += this.p;
            this.l = true;
          }, r2.prototype.O = function(n3) {
            var r3 = c({ value: this.u.slice(), binLen: this.h }, function(n4) {
              var r4, t2, e2 = 0, i2 = [0, 0], o2 = [4294967295 & n4, n4 / u & 2097151];
              for (r4 = 6; r4 >= 0; r4--) 0 == (t2 = o2[r4 >> 2] >>> 8 * r4 & 255) && 0 === e2 || (i2[e2 >> 2] |= t2 << 8 * e2, e2 += 1);
              return i2[(e2 = 0 !== e2 ? e2 : 1) >> 2] |= e2 << 8 * e2, { value: e2 + 1 > 4 ? i2 : [i2[0]], binLen: 8 + 8 * e2 };
            }(n3.outputLen));
            return this.g(r3.value, r3.binLen, this.A, this.L(this.U), n3.outputLen);
          }, r2;
        }(E);
        return function() {
          function n2(n3, r2, t2) {
            if ("SHA-1" == n3) this._ = new k(n3, r2, t2);
            else if ("SHA-224" == n3 || "SHA-256" == n3) this._ = new I(n3, r2, t2);
            else if ("SHA-384" == n3 || "SHA-512" == n3) this._ = new $(n3, r2, t2);
            else {
              if ("SHA3-224" != n3 && "SHA3-256" != n3 && "SHA3-384" != n3 && "SHA3-512" != n3 && "SHAKE128" != n3 && "SHAKE256" != n3 && "CSHAKE128" != n3 && "CSHAKE256" != n3 && "KMAC128" != n3 && "KMAC256" != n3) throw new Error(a);
              this._ = new wn(n3, r2, t2);
            }
          }
          return n2.prototype.update = function(n3) {
            return this._.update(n3), this;
          }, n2.prototype.getHash = function(n3, r2) {
            return this._.getHash(n3, r2);
          }, n2.prototype.setHMACKey = function(n3, r2, t2) {
            this._.setHMACKey(n3, r2, t2);
          }, n2.prototype.getHMAC = function(n3, r2) {
            return this._.getHMAC(n3, r2);
          }, n2;
        }();
      });
    }
  });

  // node_modules/js-sha512/src/sha512.js
  var require_sha512 = __commonJS({
    "node_modules/js-sha512/src/sha512.js"(exports, module) {
      (function() {
        "use strict";
        var INPUT_ERROR = "input is invalid type";
        var FINALIZE_ERROR = "finalize already called";
        var WINDOW = typeof window === "object";
        var root = WINDOW ? window : {};
        if (root.JS_SHA512_NO_WINDOW) {
          WINDOW = false;
        }
        var WEB_WORKER = !WINDOW && typeof self === "object";
        var NODE_JS = !root.JS_SHA512_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
        if (NODE_JS) {
          root = global;
        } else if (WEB_WORKER) {
          root = self;
        }
        var COMMON_JS = !root.JS_SHA512_NO_COMMON_JS && typeof module === "object" && module.exports;
        var AMD = typeof define === "function" && define.amd;
        var ARRAY_BUFFER = !root.JS_SHA512_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
        var HEX_CHARS = "0123456789abcdef".split("");
        var EXTRA = [-2147483648, 8388608, 32768, 128];
        var SHIFT = [24, 16, 8, 0];
        var K = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
        var blocks = [];
        var isArray = Array.isArray;
        if (root.JS_SHA512_NO_NODE_JS || !isArray) {
          isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          };
        }
        var isView = ArrayBuffer.isView;
        if (ARRAY_BUFFER && (root.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW || !isView)) {
          isView = function(obj) {
            return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
          };
        }
        var formatMessage = function(message) {
          var type = typeof message;
          if (type === "string") {
            return [message, true];
          }
          if (type !== "object" || message === null) {
            throw new Error(INPUT_ERROR);
          }
          if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            return [new Uint8Array(message), false];
          }
          if (!isArray(message) && !isView(message)) {
            throw new Error(INPUT_ERROR);
          }
          return [message, false];
        };
        var createOutputMethod = function(outputType, bits) {
          return function(message) {
            return new Sha512(bits, true).update(message)[outputType]();
          };
        };
        var createMethod = function(bits) {
          var method = createOutputMethod("hex", bits);
          method.create = function() {
            return new Sha512(bits);
          };
          method.update = function(message) {
            return method.create().update(message);
          };
          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, bits);
          }
          return method;
        };
        var createHmacOutputMethod = function(outputType, bits) {
          return function(key, message) {
            return new HmacSha512(key, bits, true).update(message)[outputType]();
          };
        };
        var createHmacMethod = function(bits) {
          var method = createHmacOutputMethod("hex", bits);
          method.create = function(key) {
            return new HmacSha512(key, bits);
          };
          method.update = function(key, message) {
            return method.create(key).update(message);
          };
          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, bits);
          }
          return method;
        };
        function Sha512(bits, sharedMemory) {
          if (sharedMemory) {
            blocks[0] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = blocks[16] = blocks[17] = blocks[18] = blocks[19] = blocks[20] = blocks[21] = blocks[22] = blocks[23] = blocks[24] = blocks[25] = blocks[26] = blocks[27] = blocks[28] = blocks[29] = blocks[30] = blocks[31] = blocks[32] = 0;
            this.blocks = blocks;
          } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
          if (bits == 384) {
            this.h0h = 3418070365;
            this.h0l = 3238371032;
            this.h1h = 1654270250;
            this.h1l = 914150663;
            this.h2h = 2438529370;
            this.h2l = 812702999;
            this.h3h = 355462360;
            this.h3l = 4144912697;
            this.h4h = 1731405415;
            this.h4l = 4290775857;
            this.h5h = 2394180231;
            this.h5l = 1750603025;
            this.h6h = 3675008525;
            this.h6l = 1694076839;
            this.h7h = 1203062813;
            this.h7l = 3204075428;
          } else if (bits == 256) {
            this.h0h = 573645204;
            this.h0l = 4230739756;
            this.h1h = 2673172387;
            this.h1l = 3360449730;
            this.h2h = 596883563;
            this.h2l = 1867755857;
            this.h3h = 2520282905;
            this.h3l = 1497426621;
            this.h4h = 2519219938;
            this.h4l = 2827943907;
            this.h5h = 3193839141;
            this.h5l = 1401305490;
            this.h6h = 721525244;
            this.h6l = 746961066;
            this.h7h = 246885852;
            this.h7l = 2177182882;
          } else if (bits == 224) {
            this.h0h = 2352822216;
            this.h0l = 424955298;
            this.h1h = 1944164710;
            this.h1l = 2312950998;
            this.h2h = 502970286;
            this.h2l = 855612546;
            this.h3h = 1738396948;
            this.h3l = 1479516111;
            this.h4h = 258812777;
            this.h4l = 2077511080;
            this.h5h = 2011393907;
            this.h5l = 79989058;
            this.h6h = 1067287976;
            this.h6l = 1780299464;
            this.h7h = 286451373;
            this.h7l = 2446758561;
          } else {
            this.h0h = 1779033703;
            this.h0l = 4089235720;
            this.h1h = 3144134277;
            this.h1l = 2227873595;
            this.h2h = 1013904242;
            this.h2l = 4271175723;
            this.h3h = 2773480762;
            this.h3l = 1595750129;
            this.h4h = 1359893119;
            this.h4l = 2917565137;
            this.h5h = 2600822924;
            this.h5l = 725511199;
            this.h6h = 528734635;
            this.h6l = 4215389547;
            this.h7h = 1541459225;
            this.h7l = 327033209;
          }
          this.bits = bits;
          this.block = this.start = this.bytes = this.hBytes = 0;
          this.finalized = this.hashed = false;
        }
        Sha512.prototype.update = function(message) {
          if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
          }
          var result = formatMessage(message);
          message = result[0];
          var isString = result[1];
          var code, index = 0, i, length = message.length, blocks2 = this.blocks;
          while (index < length) {
            if (this.hashed) {
              this.hashed = false;
              blocks2[0] = this.block;
              this.block = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = blocks2[16] = blocks2[17] = blocks2[18] = blocks2[19] = blocks2[20] = blocks2[21] = blocks2[22] = blocks2[23] = blocks2[24] = blocks2[25] = blocks2[26] = blocks2[27] = blocks2[28] = blocks2[29] = blocks2[30] = blocks2[31] = blocks2[32] = 0;
            }
            if (isString) {
              for (i = this.start; index < length && i < 128; ++index) {
                code = message.charCodeAt(index);
                if (code < 128) {
                  blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
                } else if (code < 2048) {
                  blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else if (code < 55296 || code >= 57344) {
                  blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                  blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                }
              }
            } else {
              for (i = this.start; index < length && i < 128; ++index) {
                blocks2[i >>> 2] |= message[index] << SHIFT[i++ & 3];
              }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 128) {
              this.block = blocks2[32];
              this.start = i - 128;
              this.hash();
              this.hashed = true;
            } else {
              this.start = i;
            }
          }
          if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
          }
          return this;
        };
        Sha512.prototype.finalize = function() {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          var blocks2 = this.blocks, i = this.lastByteIndex;
          blocks2[32] = this.block;
          blocks2[i >>> 2] |= EXTRA[i & 3];
          this.block = blocks2[32];
          if (i >= 112) {
            if (!this.hashed) {
              this.hash();
            }
            blocks2[0] = this.block;
            blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = blocks2[16] = blocks2[17] = blocks2[18] = blocks2[19] = blocks2[20] = blocks2[21] = blocks2[22] = blocks2[23] = blocks2[24] = blocks2[25] = blocks2[26] = blocks2[27] = blocks2[28] = blocks2[29] = blocks2[30] = blocks2[31] = blocks2[32] = 0;
          }
          blocks2[30] = this.hBytes << 3 | this.bytes >>> 29;
          blocks2[31] = this.bytes << 3;
          this.hash();
        };
        Sha512.prototype.hash = function() {
          var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, blocks2 = this.blocks, j, s0h, s0l, s1h, s1l, c1, c2, c3, c4, abh, abl, dah, dal, cdh, cdl, bch, bcl, majh, majl, t1h, t1l, t2h, t2l, chh, chl;
          for (j = 32; j < 160; j += 2) {
            t1h = blocks2[j - 30];
            t1l = blocks2[j - 29];
            s0h = (t1h >>> 1 | t1l << 31) ^ (t1h >>> 8 | t1l << 24) ^ t1h >>> 7;
            s0l = (t1l >>> 1 | t1h << 31) ^ (t1l >>> 8 | t1h << 24) ^ (t1l >>> 7 | t1h << 25);
            t1h = blocks2[j - 4];
            t1l = blocks2[j - 3];
            s1h = (t1h >>> 19 | t1l << 13) ^ (t1l >>> 29 | t1h << 3) ^ t1h >>> 6;
            s1l = (t1l >>> 19 | t1h << 13) ^ (t1h >>> 29 | t1l << 3) ^ (t1l >>> 6 | t1h << 26);
            t1h = blocks2[j - 32];
            t1l = blocks2[j - 31];
            t2h = blocks2[j - 14];
            t2l = blocks2[j - 13];
            c1 = (t2l & 65535) + (t1l & 65535) + (s0l & 65535) + (s1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (s0h & 65535) + (s1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);
            blocks2[j] = c4 << 16 | c3 & 65535;
            blocks2[j + 1] = c2 << 16 | c1 & 65535;
          }
          var ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
          bch = bh & ch;
          bcl = bl & cl;
          for (j = 0; j < 160; j += 8) {
            s0h = (ah >>> 28 | al << 4) ^ (al >>> 2 | ah << 30) ^ (al >>> 7 | ah << 25);
            s0l = (al >>> 28 | ah << 4) ^ (ah >>> 2 | al << 30) ^ (ah >>> 7 | al << 25);
            s1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (el >>> 9 | eh << 23);
            s1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (eh >>> 9 | el << 23);
            abh = ah & bh;
            abl = al & bl;
            majh = abh ^ ah & ch ^ bch;
            majl = abl ^ al & cl ^ bcl;
            chh = eh & fh ^ ~eh & gh;
            chl = el & fl ^ ~el & gl;
            t1h = blocks2[j];
            t1l = blocks2[j + 1];
            t2h = K[j];
            t2l = K[j + 1];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (hl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (hh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (dl & 65535) + (t1l & 65535);
            c2 = (dl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (dh & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            hh = c4 << 16 | c3 & 65535;
            hl = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            dh = c4 << 16 | c3 & 65535;
            dl = c2 << 16 | c1 & 65535;
            s0h = (dh >>> 28 | dl << 4) ^ (dl >>> 2 | dh << 30) ^ (dl >>> 7 | dh << 25);
            s0l = (dl >>> 28 | dh << 4) ^ (dh >>> 2 | dl << 30) ^ (dh >>> 7 | dl << 25);
            s1h = (hh >>> 14 | hl << 18) ^ (hh >>> 18 | hl << 14) ^ (hl >>> 9 | hh << 23);
            s1l = (hl >>> 14 | hh << 18) ^ (hl >>> 18 | hh << 14) ^ (hh >>> 9 | hl << 23);
            dah = dh & ah;
            dal = dl & al;
            majh = dah ^ dh & bh ^ abh;
            majl = dal ^ dl & bl ^ abl;
            chh = hh & eh ^ ~hh & fh;
            chl = hl & el ^ ~hl & fl;
            t1h = blocks2[j + 2];
            t1l = blocks2[j + 3];
            t2h = K[j + 2];
            t2l = K[j + 3];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (gl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (gh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (cl & 65535) + (t1l & 65535);
            c2 = (cl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (ch & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            gh = c4 << 16 | c3 & 65535;
            gl = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ch = c4 << 16 | c3 & 65535;
            cl = c2 << 16 | c1 & 65535;
            s0h = (ch >>> 28 | cl << 4) ^ (cl >>> 2 | ch << 30) ^ (cl >>> 7 | ch << 25);
            s0l = (cl >>> 28 | ch << 4) ^ (ch >>> 2 | cl << 30) ^ (ch >>> 7 | cl << 25);
            s1h = (gh >>> 14 | gl << 18) ^ (gh >>> 18 | gl << 14) ^ (gl >>> 9 | gh << 23);
            s1l = (gl >>> 14 | gh << 18) ^ (gl >>> 18 | gh << 14) ^ (gh >>> 9 | gl << 23);
            cdh = ch & dh;
            cdl = cl & dl;
            majh = cdh ^ ch & ah ^ dah;
            majl = cdl ^ cl & al ^ dal;
            chh = gh & hh ^ ~gh & eh;
            chl = gl & hl ^ ~gl & el;
            t1h = blocks2[j + 4];
            t1l = blocks2[j + 5];
            t2h = K[j + 4];
            t2l = K[j + 5];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (fl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (fh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (bl & 65535) + (t1l & 65535);
            c2 = (bl >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (bh & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            fh = c4 << 16 | c3 & 65535;
            fl = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            bh = c4 << 16 | c3 & 65535;
            bl = c2 << 16 | c1 & 65535;
            s0h = (bh >>> 28 | bl << 4) ^ (bl >>> 2 | bh << 30) ^ (bl >>> 7 | bh << 25);
            s0l = (bl >>> 28 | bh << 4) ^ (bh >>> 2 | bl << 30) ^ (bh >>> 7 | bl << 25);
            s1h = (fh >>> 14 | fl << 18) ^ (fh >>> 18 | fl << 14) ^ (fl >>> 9 | fh << 23);
            s1l = (fl >>> 14 | fh << 18) ^ (fl >>> 18 | fh << 14) ^ (fh >>> 9 | fl << 23);
            bch = bh & ch;
            bcl = bl & cl;
            majh = bch ^ bh & dh ^ cdh;
            majl = bcl ^ bl & dl ^ cdl;
            chh = fh & gh ^ ~fh & hh;
            chl = fl & gl ^ ~fl & hl;
            t1h = blocks2[j + 6];
            t1l = blocks2[j + 7];
            t2h = K[j + 6];
            t2l = K[j + 7];
            c1 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (el & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (eh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c1 & 65535;
            c1 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c1 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c1 & 65535;
            c1 = (al & 65535) + (t1l & 65535);
            c2 = (al >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (ah & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            eh = c4 << 16 | c3 & 65535;
            el = c2 << 16 | c1 & 65535;
            c1 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c1 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ah = c4 << 16 | c3 & 65535;
            al = c2 << 16 | c1 & 65535;
          }
          c1 = (h0l & 65535) + (al & 65535);
          c2 = (h0l >>> 16) + (al >>> 16) + (c1 >>> 16);
          c3 = (h0h & 65535) + (ah & 65535) + (c2 >>> 16);
          c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);
          this.h0h = c4 << 16 | c3 & 65535;
          this.h0l = c2 << 16 | c1 & 65535;
          c1 = (h1l & 65535) + (bl & 65535);
          c2 = (h1l >>> 16) + (bl >>> 16) + (c1 >>> 16);
          c3 = (h1h & 65535) + (bh & 65535) + (c2 >>> 16);
          c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);
          this.h1h = c4 << 16 | c3 & 65535;
          this.h1l = c2 << 16 | c1 & 65535;
          c1 = (h2l & 65535) + (cl & 65535);
          c2 = (h2l >>> 16) + (cl >>> 16) + (c1 >>> 16);
          c3 = (h2h & 65535) + (ch & 65535) + (c2 >>> 16);
          c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);
          this.h2h = c4 << 16 | c3 & 65535;
          this.h2l = c2 << 16 | c1 & 65535;
          c1 = (h3l & 65535) + (dl & 65535);
          c2 = (h3l >>> 16) + (dl >>> 16) + (c1 >>> 16);
          c3 = (h3h & 65535) + (dh & 65535) + (c2 >>> 16);
          c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);
          this.h3h = c4 << 16 | c3 & 65535;
          this.h3l = c2 << 16 | c1 & 65535;
          c1 = (h4l & 65535) + (el & 65535);
          c2 = (h4l >>> 16) + (el >>> 16) + (c1 >>> 16);
          c3 = (h4h & 65535) + (eh & 65535) + (c2 >>> 16);
          c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);
          this.h4h = c4 << 16 | c3 & 65535;
          this.h4l = c2 << 16 | c1 & 65535;
          c1 = (h5l & 65535) + (fl & 65535);
          c2 = (h5l >>> 16) + (fl >>> 16) + (c1 >>> 16);
          c3 = (h5h & 65535) + (fh & 65535) + (c2 >>> 16);
          c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);
          this.h5h = c4 << 16 | c3 & 65535;
          this.h5l = c2 << 16 | c1 & 65535;
          c1 = (h6l & 65535) + (gl & 65535);
          c2 = (h6l >>> 16) + (gl >>> 16) + (c1 >>> 16);
          c3 = (h6h & 65535) + (gh & 65535) + (c2 >>> 16);
          c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);
          this.h6h = c4 << 16 | c3 & 65535;
          this.h6l = c2 << 16 | c1 & 65535;
          c1 = (h7l & 65535) + (hl & 65535);
          c2 = (h7l >>> 16) + (hl >>> 16) + (c1 >>> 16);
          c3 = (h7h & 65535) + (hh & 65535) + (c2 >>> 16);
          c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);
          this.h7h = c4 << 16 | c3 & 65535;
          this.h7l = c2 << 16 | c1 & 65535;
        };
        Sha512.prototype.hex = function() {
          this.finalize();
          var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, bits = this.bits;
          var hex = HEX_CHARS[h0h >>> 28 & 15] + HEX_CHARS[h0h >>> 24 & 15] + HEX_CHARS[h0h >>> 20 & 15] + HEX_CHARS[h0h >>> 16 & 15] + HEX_CHARS[h0h >>> 12 & 15] + HEX_CHARS[h0h >>> 8 & 15] + HEX_CHARS[h0h >>> 4 & 15] + HEX_CHARS[h0h & 15] + HEX_CHARS[h0l >>> 28 & 15] + HEX_CHARS[h0l >>> 24 & 15] + HEX_CHARS[h0l >>> 20 & 15] + HEX_CHARS[h0l >>> 16 & 15] + HEX_CHARS[h0l >>> 12 & 15] + HEX_CHARS[h0l >>> 8 & 15] + HEX_CHARS[h0l >>> 4 & 15] + HEX_CHARS[h0l & 15] + HEX_CHARS[h1h >>> 28 & 15] + HEX_CHARS[h1h >>> 24 & 15] + HEX_CHARS[h1h >>> 20 & 15] + HEX_CHARS[h1h >>> 16 & 15] + HEX_CHARS[h1h >>> 12 & 15] + HEX_CHARS[h1h >>> 8 & 15] + HEX_CHARS[h1h >>> 4 & 15] + HEX_CHARS[h1h & 15] + HEX_CHARS[h1l >>> 28 & 15] + HEX_CHARS[h1l >>> 24 & 15] + HEX_CHARS[h1l >>> 20 & 15] + HEX_CHARS[h1l >>> 16 & 15] + HEX_CHARS[h1l >>> 12 & 15] + HEX_CHARS[h1l >>> 8 & 15] + HEX_CHARS[h1l >>> 4 & 15] + HEX_CHARS[h1l & 15] + HEX_CHARS[h2h >>> 28 & 15] + HEX_CHARS[h2h >>> 24 & 15] + HEX_CHARS[h2h >>> 20 & 15] + HEX_CHARS[h2h >>> 16 & 15] + HEX_CHARS[h2h >>> 12 & 15] + HEX_CHARS[h2h >>> 8 & 15] + HEX_CHARS[h2h >>> 4 & 15] + HEX_CHARS[h2h & 15] + HEX_CHARS[h2l >>> 28 & 15] + HEX_CHARS[h2l >>> 24 & 15] + HEX_CHARS[h2l >>> 20 & 15] + HEX_CHARS[h2l >>> 16 & 15] + HEX_CHARS[h2l >>> 12 & 15] + HEX_CHARS[h2l >>> 8 & 15] + HEX_CHARS[h2l >>> 4 & 15] + HEX_CHARS[h2l & 15] + HEX_CHARS[h3h >>> 28 & 15] + HEX_CHARS[h3h >>> 24 & 15] + HEX_CHARS[h3h >>> 20 & 15] + HEX_CHARS[h3h >>> 16 & 15] + HEX_CHARS[h3h >>> 12 & 15] + HEX_CHARS[h3h >>> 8 & 15] + HEX_CHARS[h3h >>> 4 & 15] + HEX_CHARS[h3h & 15];
          if (bits >= 256) {
            hex += HEX_CHARS[h3l >>> 28 & 15] + HEX_CHARS[h3l >>> 24 & 15] + HEX_CHARS[h3l >>> 20 & 15] + HEX_CHARS[h3l >>> 16 & 15] + HEX_CHARS[h3l >>> 12 & 15] + HEX_CHARS[h3l >>> 8 & 15] + HEX_CHARS[h3l >>> 4 & 15] + HEX_CHARS[h3l & 15];
          }
          if (bits >= 384) {
            hex += HEX_CHARS[h4h >>> 28 & 15] + HEX_CHARS[h4h >>> 24 & 15] + HEX_CHARS[h4h >>> 20 & 15] + HEX_CHARS[h4h >>> 16 & 15] + HEX_CHARS[h4h >>> 12 & 15] + HEX_CHARS[h4h >>> 8 & 15] + HEX_CHARS[h4h >>> 4 & 15] + HEX_CHARS[h4h & 15] + HEX_CHARS[h4l >>> 28 & 15] + HEX_CHARS[h4l >>> 24 & 15] + HEX_CHARS[h4l >>> 20 & 15] + HEX_CHARS[h4l >>> 16 & 15] + HEX_CHARS[h4l >>> 12 & 15] + HEX_CHARS[h4l >>> 8 & 15] + HEX_CHARS[h4l >>> 4 & 15] + HEX_CHARS[h4l & 15] + HEX_CHARS[h5h >>> 28 & 15] + HEX_CHARS[h5h >>> 24 & 15] + HEX_CHARS[h5h >>> 20 & 15] + HEX_CHARS[h5h >>> 16 & 15] + HEX_CHARS[h5h >>> 12 & 15] + HEX_CHARS[h5h >>> 8 & 15] + HEX_CHARS[h5h >>> 4 & 15] + HEX_CHARS[h5h & 15] + HEX_CHARS[h5l >>> 28 & 15] + HEX_CHARS[h5l >>> 24 & 15] + HEX_CHARS[h5l >>> 20 & 15] + HEX_CHARS[h5l >>> 16 & 15] + HEX_CHARS[h5l >>> 12 & 15] + HEX_CHARS[h5l >>> 8 & 15] + HEX_CHARS[h5l >>> 4 & 15] + HEX_CHARS[h5l & 15];
          }
          if (bits == 512) {
            hex += HEX_CHARS[h6h >>> 28 & 15] + HEX_CHARS[h6h >>> 24 & 15] + HEX_CHARS[h6h >>> 20 & 15] + HEX_CHARS[h6h >>> 16 & 15] + HEX_CHARS[h6h >>> 12 & 15] + HEX_CHARS[h6h >>> 8 & 15] + HEX_CHARS[h6h >>> 4 & 15] + HEX_CHARS[h6h & 15] + HEX_CHARS[h6l >>> 28 & 15] + HEX_CHARS[h6l >>> 24 & 15] + HEX_CHARS[h6l >>> 20 & 15] + HEX_CHARS[h6l >>> 16 & 15] + HEX_CHARS[h6l >>> 12 & 15] + HEX_CHARS[h6l >>> 8 & 15] + HEX_CHARS[h6l >>> 4 & 15] + HEX_CHARS[h6l & 15] + HEX_CHARS[h7h >>> 28 & 15] + HEX_CHARS[h7h >>> 24 & 15] + HEX_CHARS[h7h >>> 20 & 15] + HEX_CHARS[h7h >>> 16 & 15] + HEX_CHARS[h7h >>> 12 & 15] + HEX_CHARS[h7h >>> 8 & 15] + HEX_CHARS[h7h >>> 4 & 15] + HEX_CHARS[h7h & 15] + HEX_CHARS[h7l >>> 28 & 15] + HEX_CHARS[h7l >>> 24 & 15] + HEX_CHARS[h7l >>> 20 & 15] + HEX_CHARS[h7l >>> 16 & 15] + HEX_CHARS[h7l >>> 12 & 15] + HEX_CHARS[h7l >>> 8 & 15] + HEX_CHARS[h7l >>> 4 & 15] + HEX_CHARS[h7l & 15];
          }
          return hex;
        };
        Sha512.prototype.toString = Sha512.prototype.hex;
        Sha512.prototype.digest = function() {
          this.finalize();
          var h0h = this.h0h, h0l = this.h0l, h1h = this.h1h, h1l = this.h1l, h2h = this.h2h, h2l = this.h2l, h3h = this.h3h, h3l = this.h3l, h4h = this.h4h, h4l = this.h4l, h5h = this.h5h, h5l = this.h5l, h6h = this.h6h, h6l = this.h6l, h7h = this.h7h, h7l = this.h7l, bits = this.bits;
          var arr = [
            h0h >>> 24 & 255,
            h0h >>> 16 & 255,
            h0h >>> 8 & 255,
            h0h & 255,
            h0l >>> 24 & 255,
            h0l >>> 16 & 255,
            h0l >>> 8 & 255,
            h0l & 255,
            h1h >>> 24 & 255,
            h1h >>> 16 & 255,
            h1h >>> 8 & 255,
            h1h & 255,
            h1l >>> 24 & 255,
            h1l >>> 16 & 255,
            h1l >>> 8 & 255,
            h1l & 255,
            h2h >>> 24 & 255,
            h2h >>> 16 & 255,
            h2h >>> 8 & 255,
            h2h & 255,
            h2l >>> 24 & 255,
            h2l >>> 16 & 255,
            h2l >>> 8 & 255,
            h2l & 255,
            h3h >>> 24 & 255,
            h3h >>> 16 & 255,
            h3h >>> 8 & 255,
            h3h & 255
          ];
          if (bits >= 256) {
            arr.push(h3l >>> 24 & 255, h3l >>> 16 & 255, h3l >>> 8 & 255, h3l & 255);
          }
          if (bits >= 384) {
            arr.push(
              h4h >>> 24 & 255,
              h4h >>> 16 & 255,
              h4h >>> 8 & 255,
              h4h & 255,
              h4l >>> 24 & 255,
              h4l >>> 16 & 255,
              h4l >>> 8 & 255,
              h4l & 255,
              h5h >>> 24 & 255,
              h5h >>> 16 & 255,
              h5h >>> 8 & 255,
              h5h & 255,
              h5l >>> 24 & 255,
              h5l >>> 16 & 255,
              h5l >>> 8 & 255,
              h5l & 255
            );
          }
          if (bits == 512) {
            arr.push(
              h6h >>> 24 & 255,
              h6h >>> 16 & 255,
              h6h >>> 8 & 255,
              h6h & 255,
              h6l >>> 24 & 255,
              h6l >>> 16 & 255,
              h6l >>> 8 & 255,
              h6l & 255,
              h7h >>> 24 & 255,
              h7h >>> 16 & 255,
              h7h >>> 8 & 255,
              h7h & 255,
              h7l >>> 24 & 255,
              h7l >>> 16 & 255,
              h7l >>> 8 & 255,
              h7l & 255
            );
          }
          return arr;
        };
        Sha512.prototype.array = Sha512.prototype.digest;
        Sha512.prototype.arrayBuffer = function() {
          this.finalize();
          var bits = this.bits;
          var buffer = new ArrayBuffer(bits / 8);
          var dataView = new DataView(buffer);
          dataView.setUint32(0, this.h0h);
          dataView.setUint32(4, this.h0l);
          dataView.setUint32(8, this.h1h);
          dataView.setUint32(12, this.h1l);
          dataView.setUint32(16, this.h2h);
          dataView.setUint32(20, this.h2l);
          dataView.setUint32(24, this.h3h);
          if (bits >= 256) {
            dataView.setUint32(28, this.h3l);
          }
          if (bits >= 384) {
            dataView.setUint32(32, this.h4h);
            dataView.setUint32(36, this.h4l);
            dataView.setUint32(40, this.h5h);
            dataView.setUint32(44, this.h5l);
          }
          if (bits == 512) {
            dataView.setUint32(48, this.h6h);
            dataView.setUint32(52, this.h6l);
            dataView.setUint32(56, this.h7h);
            dataView.setUint32(60, this.h7l);
          }
          return buffer;
        };
        Sha512.prototype.clone = function() {
          var hash = new Sha512(this.bits, false);
          this.copyTo(hash);
          return hash;
        };
        Sha512.prototype.copyTo = function(hash) {
          var i = 0, attrs = [
            "h0h",
            "h0l",
            "h1h",
            "h1l",
            "h2h",
            "h2l",
            "h3h",
            "h3l",
            "h4h",
            "h4l",
            "h5h",
            "h5l",
            "h6h",
            "h6l",
            "h7h",
            "h7l",
            "start",
            "bytes",
            "hBytes",
            "finalized",
            "hashed",
            "lastByteIndex"
          ];
          for (i = 0; i < attrs.length; ++i) {
            hash[attrs[i]] = this[attrs[i]];
          }
          for (i = 0; i < this.blocks.length; ++i) {
            hash.blocks[i] = this.blocks[i];
          }
        };
        function HmacSha512(key, bits, sharedMemory) {
          var i, result = formatMessage(key);
          key = result[0];
          if (result[1]) {
            var bytes = [], length = key.length, index = 0, code;
            for (var i = 0; i < length; ++i) {
              code = key.charCodeAt(i);
              if (code < 128) {
                bytes[index++] = code;
              } else if (code < 2048) {
                bytes[index++] = 192 | code >>> 6;
                bytes[index++] = 128 | code & 63;
              } else if (code < 55296 || code >= 57344) {
                bytes[index++] = 224 | code >>> 12;
                bytes[index++] = 128 | code >>> 6 & 63;
                bytes[index++] = 128 | code & 63;
              } else {
                code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
                bytes[index++] = 240 | code >>> 18;
                bytes[index++] = 128 | code >>> 12 & 63;
                bytes[index++] = 128 | code >>> 6 & 63;
                bytes[index++] = 128 | code & 63;
              }
            }
            key = bytes;
          }
          if (key.length > 128) {
            key = new Sha512(bits, true).update(key).array();
          }
          var oKeyPad = [], iKeyPad = [];
          for (var i = 0; i < 128; ++i) {
            var b = key[i] || 0;
            oKeyPad[i] = 92 ^ b;
            iKeyPad[i] = 54 ^ b;
          }
          Sha512.call(this, bits, sharedMemory);
          this.update(iKeyPad);
          this.oKeyPad = oKeyPad;
          this.inner = true;
          this.sharedMemory = sharedMemory;
        }
        HmacSha512.prototype = new Sha512();
        HmacSha512.prototype.finalize = function() {
          Sha512.prototype.finalize.call(this);
          if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha512.call(this, this.bits, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha512.prototype.finalize.call(this);
          }
        };
        HmacSha512.prototype.clone = function() {
          var hash = new HmacSha512([], this.bits, false);
          this.copyTo(hash);
          hash.inner = this.inner;
          for (var i = 0; i < this.oKeyPad.length; ++i) {
            hash.oKeyPad[i] = this.oKeyPad[i];
          }
          return hash;
        };
        var exports2 = createMethod(512);
        exports2.sha512 = exports2;
        exports2.sha384 = createMethod(384);
        exports2.sha512_256 = createMethod(256);
        exports2.sha512_224 = createMethod(224);
        exports2.sha512.hmac = createHmacMethod(512);
        exports2.sha384.hmac = createHmacMethod(384);
        exports2.sha512_256.hmac = createHmacMethod(256);
        exports2.sha512_224.hmac = createHmacMethod(224);
        if (COMMON_JS) {
          module.exports = exports2;
        } else {
          root.sha512 = exports2.sha512;
          root.sha384 = exports2.sha384;
          root.sha512_256 = exports2.sha512_256;
          root.sha512_224 = exports2.sha512_224;
          if (AMD) {
            define(function() {
              return exports2;
            });
          }
        }
      })();
    }
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer3;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer3.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer3.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer2(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function Buffer3(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer3.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer3.from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b) return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer3.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer3, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer2(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer2(size).fill(fill, encoding) : createBuffer2(size).fill(fill);
        }
        return createBuffer2(size);
      }
      Buffer3.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer2(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer3.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer3.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer2(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer2(length);
        for (let i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new Uint8Array(array);
        } else if (length === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer3.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer2(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer2(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer3.alloc(+length);
      }
      Buffer3.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer3.prototype;
      };
      Buffer3.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array)) a = Buffer3.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer3.from(b, b.offset, b.byteLength);
        if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b) return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer3.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer3.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer3.alloc(0);
        }
        let i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        const buffer = Buffer3.allocUnsafe(length);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer3.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer3.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
          );
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding) encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer3.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer3.prototype.swap16 = function swap162() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer3.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer3.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer3.prototype.toString = function toString() {
        const length = this.length;
        if (length === 0) return "";
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
      Buffer3.prototype.equals = function equals(b) {
        if (!Buffer3.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return Buffer3.compare(this, b) === 0;
      };
      Buffer3.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max) str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
      }
      Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer3.from(target, target.offset, target.byteLength);
        }
        if (!Buffer3.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0) return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;
          else return -1;
        }
        if (typeof val === "string") {
          val = Buffer3.from(val, encoding);
        }
        if (Buffer3.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i;
        for (i = 0; i < length; ++i) {
          const parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer3.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0) encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding) encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer3.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer3.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start) end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer3.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128)) return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      });
      Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
        if (value < 0) value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0) value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer3.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val) val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name) {
          if (name) {
            return `${name} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name, actual) {
          return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        let i;
        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet2 = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet2[i] + alphabet2[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // src/crypto/blake256.js
  var require_blake256 = __commonJS({
    "src/crypto/blake256.js"(exports, module) {
      "use strict";
      if (!global.Buffer) {
        global.Buffer = require_buffer().Buffer;
      }
      Blake2562.sigma = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
        [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
        [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
        [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
        [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9],
        [12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11],
        [13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10],
        [6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5],
        [10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3],
        [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4],
        [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8],
        [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13],
        [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]
      ];
      Blake2562.u256 = [
        608135816,
        2242054355,
        320440878,
        57701188,
        2752067618,
        698298832,
        137296536,
        3964562569,
        1160258022,
        953160567,
        3193202383,
        887688300,
        3232508343,
        3380367581,
        1065670069,
        3041331479
      ];
      Blake2562.padding = Buffer.from([
        128,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
      Blake2562.prototype._length_carry = function(arr) {
        for (var j = 0; j < arr.length; ++j) {
          if (arr[j] < 4294967296) break;
          arr[j] -= 4294967296;
          arr[j + 1] += 1;
        }
      };
      Blake2562.prototype.update = function(data, encoding) {
        data = Buffer.from(data, encoding);
        var block = this._block;
        var offset = 0;
        while (this._blockOffset + data.length - offset >= block.length) {
          for (var i = this._blockOffset; i < block.length; ) block[i++] = data[offset++];
          this._length[0] += block.length * 8;
          this._length_carry(this._length);
          this._compress();
          this._blockOffset = 0;
        }
        while (offset < data.length) block[this._blockOffset++] = data[offset++];
        return this;
      };
      var zo = Buffer.from([1]);
      var oo = Buffer.from([129]);
      function rot(x, n) {
        return (x << 32 - n | x >>> n) >>> 0;
      }
      function g(v, m, i, a, b, c, d, e) {
        var sigma = Blake2562.sigma;
        var u256 = Blake2562.u256;
        v[a] = v[a] + ((m[sigma[i][e]] ^ u256[sigma[i][e + 1]]) >>> 0) + v[b] >>> 0;
        v[d] = rot(v[d] ^ v[a], 16);
        v[c] = v[c] + v[d] >>> 0;
        v[b] = rot(v[b] ^ v[c], 12);
        v[a] = v[a] + ((m[sigma[i][e + 1]] ^ u256[sigma[i][e]]) >>> 0) + v[b] >>> 0;
        v[d] = rot(v[d] ^ v[a], 8);
        v[c] = v[c] + v[d] >>> 0;
        v[b] = rot(v[b] ^ v[c], 7);
      }
      function Blake2562() {
        this._h = [
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ];
        this._s = [0, 0, 0, 0];
        this._block = Buffer.allocUnsafe(64);
        this._blockOffset = 0;
        this._length = [0, 0];
        this._nullt = false;
        this._zo = zo;
        this._oo = oo;
      }
      Blake2562.prototype._compress = function() {
        var u256 = Blake2562.u256;
        var v = new Array(16);
        var m = new Array(16);
        var i;
        for (i = 0; i < 16; ++i) m[i] = this._block.readUInt32BE(i * 4);
        for (i = 0; i < 8; ++i) v[i] = this._h[i] >>> 0;
        for (i = 8; i < 12; ++i) v[i] = (this._s[i - 8] ^ u256[i - 8]) >>> 0;
        for (i = 12; i < 16; ++i) v[i] = u256[i - 8];
        if (!this._nullt) {
          v[12] = (v[12] ^ this._length[0]) >>> 0;
          v[13] = (v[13] ^ this._length[0]) >>> 0;
          v[14] = (v[14] ^ this._length[1]) >>> 0;
          v[15] = (v[15] ^ this._length[1]) >>> 0;
        }
        for (i = 0; i < 14; ++i) {
          g(v, m, i, 0, 4, 8, 12, 0);
          g(v, m, i, 1, 5, 9, 13, 2);
          g(v, m, i, 2, 6, 10, 14, 4);
          g(v, m, i, 3, 7, 11, 15, 6);
          g(v, m, i, 0, 5, 10, 15, 8);
          g(v, m, i, 1, 6, 11, 12, 10);
          g(v, m, i, 2, 7, 8, 13, 12);
          g(v, m, i, 3, 4, 9, 14, 14);
        }
        for (i = 0; i < 16; ++i) this._h[i % 8] = (this._h[i % 8] ^ v[i]) >>> 0;
        for (i = 0; i < 8; ++i) this._h[i] = (this._h[i] ^ this._s[i % 4]) >>> 0;
      };
      Blake2562.prototype._padding = function() {
        var lo = this._length[0] + this._blockOffset * 8;
        var hi = this._length[1];
        if (lo >= 4294967296) {
          lo -= 4294967296;
          hi += 1;
        }
        var msglen = Buffer.allocUnsafe(8);
        msglen.writeUInt32BE(hi, 0);
        msglen.writeUInt32BE(lo, 4);
        if (this._blockOffset === 55) {
          this._length[0] -= 8;
          this.update(this._oo);
        } else {
          if (this._blockOffset < 55) {
            if (this._blockOffset === 0) this._nullt = true;
            this._length[0] -= (55 - this._blockOffset) * 8;
            this.update(Blake2562.padding.slice(0, 55 - this._blockOffset));
          } else {
            this._length[0] -= (64 - this._blockOffset) * 8;
            this.update(Blake2562.padding.slice(0, 64 - this._blockOffset));
            this._length[0] -= 55 * 8;
            this.update(Blake2562.padding.slice(1, 1 + 55));
            this._nullt = true;
          }
          this.update(this._zo);
          this._length[0] -= 8;
        }
        this._length[0] -= 64;
        this.update(msglen);
      };
      Blake2562.prototype.digest = function(encoding) {
        this._padding();
        var buffer = Buffer.allocUnsafe(32);
        for (var i = 0; i < 8; ++i) buffer.writeUInt32BE(this._h[i], i * 4);
        return buffer.toString(encoding);
      };
      module.exports = Blake2562;
    }
  });

  // src/crypto/sha3.js
  var require_sha3 = __commonJS({
    "src/crypto/sha3.js"(exports, module) {
      "use strict";
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA3_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
      var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
      var KECCAK_PADDING = [1, 256, 65536, 16777216];
      var PADDING = [6, 1536, 393216, 100663296];
      var SHIFT = [0, 8, 16, 24];
      var RC = [
        1,
        0,
        32898,
        0,
        32906,
        2147483648,
        2147516416,
        2147483648,
        32907,
        0,
        2147483649,
        0,
        2147516545,
        2147483648,
        32777,
        2147483648,
        138,
        0,
        136,
        0,
        2147516425,
        0,
        2147483658,
        0,
        2147516555,
        0,
        139,
        2147483648,
        32905,
        2147483648,
        32771,
        2147483648,
        32770,
        2147483648,
        128,
        2147483648,
        32778,
        0,
        2147483658,
        2147483648,
        2147516545,
        2147483648,
        32896,
        2147483648,
        2147483649,
        0,
        2147516424,
        2147483648
      ];
      var BITS = [224, 256, 384, 512];
      var SHAKE_BITS = [128, 256];
      var OUTPUT_TYPES = ["hex", "buffer", "arrayBuffer", "array", "digest"];
      var CSHAKE_BYTEPAD = {
        "128": 168,
        "256": 136
      };
      if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(bits2, padding, outputType) {
        return function(message) {
          return new Keccak(bits2, padding, bits2).update(message)[outputType]();
        };
      };
      var createShakeOutputMethod = function(bits2, padding, outputType) {
        return function(message, outputBits) {
          return new Keccak(bits2, padding, outputBits).update(message)[outputType]();
        };
      };
      var createCshakeOutputMethod = function(bits2, padding, outputType) {
        return function(message, outputBits, n, s) {
          return methods["cshake" + bits2].update(message, outputBits, n, s)[outputType]();
        };
      };
      var createKmacOutputMethod = function(bits2, padding, outputType) {
        return function(key, message, outputBits, s) {
          return methods["kmac" + bits2].update(key, message, outputBits, s)[outputType]();
        };
      };
      var createOutputMethods = function(method, createMethod2, bits2, padding) {
        for (var i2 = 0; i2 < OUTPUT_TYPES.length; ++i2) {
          var type = OUTPUT_TYPES[i2];
          method[type] = createMethod2(bits2, padding, type);
        }
        return method;
      };
      var createMethod = function(bits2, padding) {
        var method = createOutputMethod(bits2, padding, "hex");
        method.create = function() {
          return new Keccak(bits2, padding, bits2);
        };
        method.update = function(message) {
          return method.create().update(message);
        };
        return createOutputMethods(method, createOutputMethod, bits2, padding);
      };
      var createShakeMethod = function(bits2, padding) {
        var method = createShakeOutputMethod(bits2, padding, "hex");
        method.create = function(outputBits) {
          return new Keccak(bits2, padding, outputBits);
        };
        method.update = function(message, outputBits) {
          return method.create(outputBits).update(message);
        };
        return createOutputMethods(method, createShakeOutputMethod, bits2, padding);
      };
      var createCshakeMethod = function(bits2, padding) {
        var w = CSHAKE_BYTEPAD[bits2];
        var method = createCshakeOutputMethod(bits2, padding, "hex");
        method.create = function(outputBits, n, s) {
          if (!n && !s) {
            return methods["shake" + bits2].create(outputBits);
          } else {
            return new Keccak(bits2, padding, outputBits).bytepad([n, s], w);
          }
        };
        method.update = function(message, outputBits, n, s) {
          return method.create(outputBits, n, s).update(message);
        };
        return createOutputMethods(method, createCshakeOutputMethod, bits2, padding);
      };
      var createKmacMethod = function(bits2, padding) {
        var w = CSHAKE_BYTEPAD[bits2];
        var method = createKmacOutputMethod(bits2, padding, "hex");
        method.create = function(key, outputBits, s) {
          return new Kmac(bits2, padding, outputBits).bytepad(["KMAC", s], w).bytepad([key], w);
        };
        method.update = function(key, message, outputBits, s) {
          return method.create(key, outputBits, s).update(message);
        };
        return createOutputMethods(method, createKmacOutputMethod, bits2, padding);
      };
      var algorithms = [
        { name: "keccak", padding: KECCAK_PADDING, bits: BITS, createMethod },
        { name: "sha3", padding: PADDING, bits: BITS, createMethod },
        { name: "shake", padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
        { name: "cshake", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
        { name: "kmac", padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
      ];
      var methods = {};
      var methodNames = [];
      for (i = 0; i < algorithms.length; ++i) {
        algorithm = algorithms[i];
        bits = algorithm.bits;
        for (j = 0; j < bits.length; ++j) {
          methodName = algorithm.name + "_" + bits[j];
          methodNames.push(methodName);
          methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
          if (algorithm.name !== "sha3") {
            newMethodName = algorithm.name + bits[j];
            methodNames.push(newMethodName);
            methods[newMethodName] = methods[methodName];
          }
        }
      }
      var algorithm;
      var bits;
      var methodName;
      var newMethodName;
      var j;
      var i;
      function Keccak(bits2, padding, outputBits) {
        this.blocks = [];
        this.s = [];
        this.padding = padding;
        this.outputBits = outputBits;
        this.reset = true;
        this.finalized = false;
        this.block = 0;
        this.start = 0;
        this.blockCount = 1600 - (bits2 << 1) >> 5;
        this.byteCount = this.blockCount << 2;
        this.outputBlocks = outputBits >> 5;
        this.extraBytes = (outputBits & 31) >> 3;
        for (var i2 = 0; i2 < 50; ++i2) {
          this.s[i2] = 0;
        }
      }
      Keccak.prototype.update = function(message) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw ERROR;
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw ERROR;
              }
            }
          } else {
            throw ERROR;
          }
          notString = true;
        }
        var blocks = this.blocks, byteCount = this.byteCount, length = message.length, blockCount = this.blockCount, index = 0, s = this.s, i2, code;
        while (index < length) {
          if (this.reset) {
            this.reset = false;
            blocks[0] = this.block;
            for (i2 = 1; i2 < blockCount + 1; ++i2) {
              blocks[i2] = 0;
            }
          }
          if (notString) {
            for (i2 = this.start; index < length && i2 < byteCount; ++index) {
              blocks[i2 >> 2] |= message[index] << SHIFT[i2++ & 3];
            }
          } else {
            for (i2 = this.start; index < length && i2 < byteCount; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) {
                blocks[i2 >> 2] |= code << SHIFT[i2++ & 3];
              } else if (code < 2048) {
                blocks[i2 >> 2] |= (192 | code >> 6) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks[i2 >> 2] |= (224 | code >> 12) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                blocks[i2 >> 2] |= (240 | code >> 18) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code >> 12 & 63) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code >> 6 & 63) << SHIFT[i2++ & 3];
                blocks[i2 >> 2] |= (128 | code & 63) << SHIFT[i2++ & 3];
              }
            }
          }
          this.lastByteIndex = i2;
          if (i2 >= byteCount) {
            this.start = i2 - byteCount;
            this.block = blocks[blockCount];
            for (i2 = 0; i2 < blockCount; ++i2) {
              s[i2] ^= blocks[i2];
            }
            f(s);
            this.reset = true;
          } else {
            this.start = i2;
          }
        }
        return this;
      };
      Keccak.prototype.encode = function(x, right) {
        var o = x & 255, n = 1;
        var bytes = [o];
        x = x >> 8;
        o = x & 255;
        while (o > 0) {
          bytes.unshift(o);
          x = x >> 8;
          o = x & 255;
          ++n;
        }
        if (right) {
          bytes.push(n);
        } else {
          bytes.unshift(n);
        }
        this.update(bytes);
        return bytes.length;
      };
      Keccak.prototype.encodeString = function(str) {
        var notString, type = typeof str;
        if (type !== "string") {
          if (type === "object") {
            if (str === null) {
              throw ERROR;
            } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
              str = new Uint8Array(str);
            } else if (!Array.isArray(str)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
                throw ERROR;
              }
            }
          } else {
            throw ERROR;
          }
          notString = true;
        }
        var bytes = 0, length = str.length;
        if (notString) {
          bytes = length;
        } else {
          for (var i2 = 0; i2 < str.length; ++i2) {
            var code = str.charCodeAt(i2);
            if (code < 128) {
              bytes += 1;
            } else if (code < 2048) {
              bytes += 2;
            } else if (code < 55296 || code >= 57344) {
              bytes += 3;
            } else {
              code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++i2) & 1023);
              bytes += 4;
            }
          }
        }
        bytes += this.encode(bytes * 8);
        this.update(str);
        return bytes;
      };
      Keccak.prototype.bytepad = function(strs, w) {
        var bytes = this.encode(w);
        for (var i2 = 0; i2 < strs.length; ++i2) {
          bytes += this.encodeString(strs[i2]);
        }
        var paddingBytes = w - bytes % w;
        var zeros = [];
        zeros.length = paddingBytes;
        this.update(zeros);
        return this;
      };
      Keccak.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks = this.blocks, i2 = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
        blocks[i2 >> 2] |= this.padding[i2 & 3];
        if (this.lastByteIndex === this.byteCount) {
          blocks[0] = blocks[blockCount];
          for (i2 = 1; i2 < blockCount + 1; ++i2) {
            blocks[i2] = 0;
          }
        }
        blocks[blockCount - 1] |= 2147483648;
        for (i2 = 0; i2 < blockCount; ++i2) {
          s[i2] ^= blocks[i2];
        }
        f(s);
      };
      Keccak.prototype.toString = Keccak.prototype.hex = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
        var hex = "", block;
        while (j2 < outputBlocks) {
          for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
            block = s[i2];
            hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15] + HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15] + HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15] + HEX_CHARS[block >> 28 & 15] + HEX_CHARS[block >> 24 & 15];
          }
          if (j2 % blockCount === 0) {
            f(s);
            i2 = 0;
          }
        }
        if (extraBytes) {
          block = s[i2];
          hex += HEX_CHARS[block >> 4 & 15] + HEX_CHARS[block & 15];
          if (extraBytes > 1) {
            hex += HEX_CHARS[block >> 12 & 15] + HEX_CHARS[block >> 8 & 15];
          }
          if (extraBytes > 2) {
            hex += HEX_CHARS[block >> 20 & 15] + HEX_CHARS[block >> 16 & 15];
          }
        }
        return hex;
      };
      Keccak.prototype.arrayBuffer = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
        var bytes = this.outputBits >> 3;
        var buffer;
        if (extraBytes) {
          buffer = new ArrayBuffer(outputBlocks + 1 << 2);
        } else {
          buffer = new ArrayBuffer(bytes);
        }
        var array = new Uint32Array(buffer);
        while (j2 < outputBlocks) {
          for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
            array[j2] = s[i2];
          }
          if (j2 % blockCount === 0) {
            f(s);
          }
        }
        if (extraBytes) {
          array[i2] = s[i2];
          buffer = buffer.slice(0, bytes);
        }
        return buffer;
      };
      Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;
      Keccak.prototype.digest = Keccak.prototype.array = function() {
        this.finalize();
        var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks, extraBytes = this.extraBytes, i2 = 0, j2 = 0;
        var array = [], offset, block;
        while (j2 < outputBlocks) {
          for (i2 = 0; i2 < blockCount && j2 < outputBlocks; ++i2, ++j2) {
            offset = j2 << 2;
            block = s[i2];
            array[offset] = block & 255;
            array[offset + 1] = block >> 8 & 255;
            array[offset + 2] = block >> 16 & 255;
            array[offset + 3] = block >> 24 & 255;
          }
          if (j2 % blockCount === 0) {
            f(s);
          }
        }
        if (extraBytes) {
          offset = j2 << 2;
          block = s[i2];
          array[offset] = block & 255;
          if (extraBytes > 1) {
            array[offset + 1] = block >> 8 & 255;
          }
          if (extraBytes > 2) {
            array[offset + 2] = block >> 16 & 255;
          }
        }
        return array;
      };
      function Kmac(bits2, padding, outputBits) {
        Keccak.call(this, bits2, padding, outputBits);
      }
      Kmac.prototype = new Keccak();
      Kmac.prototype.finalize = function() {
        this.encode(this.outputBits, true);
        return Keccak.prototype.finalize.call(this);
      };
      var f = function(s) {
        var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
        for (n = 0; n < 48; n += 2) {
          c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
          c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
          c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
          c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
          c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
          c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
          c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
          c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
          c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
          c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
          h = c8 ^ (c2 << 1 | c3 >>> 31);
          l = c9 ^ (c3 << 1 | c2 >>> 31);
          s[0] ^= h;
          s[1] ^= l;
          s[10] ^= h;
          s[11] ^= l;
          s[20] ^= h;
          s[21] ^= l;
          s[30] ^= h;
          s[31] ^= l;
          s[40] ^= h;
          s[41] ^= l;
          h = c0 ^ (c4 << 1 | c5 >>> 31);
          l = c1 ^ (c5 << 1 | c4 >>> 31);
          s[2] ^= h;
          s[3] ^= l;
          s[12] ^= h;
          s[13] ^= l;
          s[22] ^= h;
          s[23] ^= l;
          s[32] ^= h;
          s[33] ^= l;
          s[42] ^= h;
          s[43] ^= l;
          h = c2 ^ (c6 << 1 | c7 >>> 31);
          l = c3 ^ (c7 << 1 | c6 >>> 31);
          s[4] ^= h;
          s[5] ^= l;
          s[14] ^= h;
          s[15] ^= l;
          s[24] ^= h;
          s[25] ^= l;
          s[34] ^= h;
          s[35] ^= l;
          s[44] ^= h;
          s[45] ^= l;
          h = c4 ^ (c8 << 1 | c9 >>> 31);
          l = c5 ^ (c9 << 1 | c8 >>> 31);
          s[6] ^= h;
          s[7] ^= l;
          s[16] ^= h;
          s[17] ^= l;
          s[26] ^= h;
          s[27] ^= l;
          s[36] ^= h;
          s[37] ^= l;
          s[46] ^= h;
          s[47] ^= l;
          h = c6 ^ (c0 << 1 | c1 >>> 31);
          l = c7 ^ (c1 << 1 | c0 >>> 31);
          s[8] ^= h;
          s[9] ^= l;
          s[18] ^= h;
          s[19] ^= l;
          s[28] ^= h;
          s[29] ^= l;
          s[38] ^= h;
          s[39] ^= l;
          s[48] ^= h;
          s[49] ^= l;
          b0 = s[0];
          b1 = s[1];
          b32 = s[11] << 4 | s[10] >>> 28;
          b33 = s[10] << 4 | s[11] >>> 28;
          b14 = s[20] << 3 | s[21] >>> 29;
          b15 = s[21] << 3 | s[20] >>> 29;
          b46 = s[31] << 9 | s[30] >>> 23;
          b47 = s[30] << 9 | s[31] >>> 23;
          b28 = s[40] << 18 | s[41] >>> 14;
          b29 = s[41] << 18 | s[40] >>> 14;
          b20 = s[2] << 1 | s[3] >>> 31;
          b21 = s[3] << 1 | s[2] >>> 31;
          b2 = s[13] << 12 | s[12] >>> 20;
          b3 = s[12] << 12 | s[13] >>> 20;
          b34 = s[22] << 10 | s[23] >>> 22;
          b35 = s[23] << 10 | s[22] >>> 22;
          b16 = s[33] << 13 | s[32] >>> 19;
          b17 = s[32] << 13 | s[33] >>> 19;
          b48 = s[42] << 2 | s[43] >>> 30;
          b49 = s[43] << 2 | s[42] >>> 30;
          b40 = s[5] << 30 | s[4] >>> 2;
          b41 = s[4] << 30 | s[5] >>> 2;
          b22 = s[14] << 6 | s[15] >>> 26;
          b23 = s[15] << 6 | s[14] >>> 26;
          b4 = s[25] << 11 | s[24] >>> 21;
          b5 = s[24] << 11 | s[25] >>> 21;
          b36 = s[34] << 15 | s[35] >>> 17;
          b37 = s[35] << 15 | s[34] >>> 17;
          b18 = s[45] << 29 | s[44] >>> 3;
          b19 = s[44] << 29 | s[45] >>> 3;
          b10 = s[6] << 28 | s[7] >>> 4;
          b11 = s[7] << 28 | s[6] >>> 4;
          b42 = s[17] << 23 | s[16] >>> 9;
          b43 = s[16] << 23 | s[17] >>> 9;
          b24 = s[26] << 25 | s[27] >>> 7;
          b25 = s[27] << 25 | s[26] >>> 7;
          b6 = s[36] << 21 | s[37] >>> 11;
          b7 = s[37] << 21 | s[36] >>> 11;
          b38 = s[47] << 24 | s[46] >>> 8;
          b39 = s[46] << 24 | s[47] >>> 8;
          b30 = s[8] << 27 | s[9] >>> 5;
          b31 = s[9] << 27 | s[8] >>> 5;
          b12 = s[18] << 20 | s[19] >>> 12;
          b13 = s[19] << 20 | s[18] >>> 12;
          b44 = s[29] << 7 | s[28] >>> 25;
          b45 = s[28] << 7 | s[29] >>> 25;
          b26 = s[38] << 8 | s[39] >>> 24;
          b27 = s[39] << 8 | s[38] >>> 24;
          b8 = s[48] << 14 | s[49] >>> 18;
          b9 = s[49] << 14 | s[48] >>> 18;
          s[0] = b0 ^ ~b2 & b4;
          s[1] = b1 ^ ~b3 & b5;
          s[10] = b10 ^ ~b12 & b14;
          s[11] = b11 ^ ~b13 & b15;
          s[20] = b20 ^ ~b22 & b24;
          s[21] = b21 ^ ~b23 & b25;
          s[30] = b30 ^ ~b32 & b34;
          s[31] = b31 ^ ~b33 & b35;
          s[40] = b40 ^ ~b42 & b44;
          s[41] = b41 ^ ~b43 & b45;
          s[2] = b2 ^ ~b4 & b6;
          s[3] = b3 ^ ~b5 & b7;
          s[12] = b12 ^ ~b14 & b16;
          s[13] = b13 ^ ~b15 & b17;
          s[22] = b22 ^ ~b24 & b26;
          s[23] = b23 ^ ~b25 & b27;
          s[32] = b32 ^ ~b34 & b36;
          s[33] = b33 ^ ~b35 & b37;
          s[42] = b42 ^ ~b44 & b46;
          s[43] = b43 ^ ~b45 & b47;
          s[4] = b4 ^ ~b6 & b8;
          s[5] = b5 ^ ~b7 & b9;
          s[14] = b14 ^ ~b16 & b18;
          s[15] = b15 ^ ~b17 & b19;
          s[24] = b24 ^ ~b26 & b28;
          s[25] = b25 ^ ~b27 & b29;
          s[34] = b34 ^ ~b36 & b38;
          s[35] = b35 ^ ~b37 & b39;
          s[44] = b44 ^ ~b46 & b48;
          s[45] = b45 ^ ~b47 & b49;
          s[6] = b6 ^ ~b8 & b0;
          s[7] = b7 ^ ~b9 & b1;
          s[16] = b16 ^ ~b18 & b10;
          s[17] = b17 ^ ~b19 & b11;
          s[26] = b26 ^ ~b28 & b20;
          s[27] = b27 ^ ~b29 & b21;
          s[36] = b36 ^ ~b38 & b30;
          s[37] = b37 ^ ~b39 & b31;
          s[46] = b46 ^ ~b48 & b40;
          s[47] = b47 ^ ~b49 & b41;
          s[8] = b8 ^ ~b0 & b2;
          s[9] = b9 ^ ~b1 & b3;
          s[18] = b18 ^ ~b10 & b12;
          s[19] = b19 ^ ~b11 & b13;
          s[28] = b28 ^ ~b20 & b22;
          s[29] = b29 ^ ~b21 & b23;
          s[38] = b38 ^ ~b30 & b32;
          s[39] = b39 ^ ~b31 & b33;
          s[48] = b48 ^ ~b40 & b42;
          s[49] = b49 ^ ~b41 & b43;
          s[0] ^= RC[n];
          s[1] ^= RC[n + 1];
        }
      };
      module.exports = methods;
    }
  });

  // src/crypto/blake2b.js
  var require_blake2b = __commonJS({
    "src/crypto/blake2b.js"(exports, module) {
      "use strict";
      function ADD64AA(v2, a, b) {
        var o0 = v2[a] + v2[b];
        var o1 = v2[a + 1] + v2[b + 1];
        if (o0 >= 4294967296) {
          o1++;
        }
        v2[a] = o0;
        v2[a + 1] = o1;
      }
      function ADD64AC(v2, a, b0, b1) {
        var o0 = v2[a] + b0;
        if (b0 < 0) {
          o0 += 4294967296;
        }
        var o1 = v2[a + 1] + b1;
        if (o0 >= 4294967296) {
          o1++;
        }
        v2[a] = o0;
        v2[a + 1] = o1;
      }
      function B2B_GET32(arr, i) {
        return arr[i] ^ arr[i + 1] << 8 ^ arr[i + 2] << 16 ^ arr[i + 3] << 24;
      }
      function B2B_G(a, b, c, d, ix, iy) {
        var x0 = m[ix];
        var x1 = m[ix + 1];
        var y0 = m[iy];
        var y1 = m[iy + 1];
        ADD64AA(v, a, b);
        ADD64AC(v, a, x0, x1);
        var xor0 = v[d] ^ v[a];
        var xor1 = v[d + 1] ^ v[a + 1];
        v[d] = xor1;
        v[d + 1] = xor0;
        ADD64AA(v, c, d);
        xor0 = v[b] ^ v[c];
        xor1 = v[b + 1] ^ v[c + 1];
        v[b] = xor0 >>> 24 ^ xor1 << 8;
        v[b + 1] = xor1 >>> 24 ^ xor0 << 8;
        ADD64AA(v, a, b);
        ADD64AC(v, a, y0, y1);
        xor0 = v[d] ^ v[a];
        xor1 = v[d + 1] ^ v[a + 1];
        v[d] = xor0 >>> 16 ^ xor1 << 16;
        v[d + 1] = xor1 >>> 16 ^ xor0 << 16;
        ADD64AA(v, c, d);
        xor0 = v[b] ^ v[c];
        xor1 = v[b + 1] ^ v[c + 1];
        v[b] = xor1 >>> 31 ^ xor0 << 1;
        v[b + 1] = xor0 >>> 31 ^ xor1 << 1;
      }
      var BLAKE2B_IV32 = new Uint32Array([
        4089235720,
        1779033703,
        2227873595,
        3144134277,
        4271175723,
        1013904242,
        1595750129,
        2773480762,
        2917565137,
        1359893119,
        725511199,
        2600822924,
        4215389547,
        528734635,
        327033209,
        1541459225
      ]);
      var SIGMA8 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3,
        11,
        8,
        12,
        0,
        5,
        2,
        15,
        13,
        10,
        14,
        3,
        6,
        7,
        1,
        9,
        4,
        7,
        9,
        3,
        1,
        13,
        12,
        11,
        14,
        2,
        6,
        5,
        10,
        4,
        0,
        15,
        8,
        9,
        0,
        5,
        7,
        2,
        4,
        10,
        15,
        14,
        1,
        11,
        12,
        6,
        8,
        3,
        13,
        2,
        12,
        6,
        10,
        0,
        11,
        8,
        3,
        4,
        13,
        7,
        5,
        15,
        14,
        1,
        9,
        12,
        5,
        1,
        15,
        14,
        13,
        4,
        10,
        0,
        7,
        6,
        3,
        9,
        2,
        8,
        11,
        13,
        11,
        7,
        14,
        12,
        1,
        3,
        9,
        5,
        0,
        15,
        4,
        8,
        6,
        2,
        10,
        6,
        15,
        14,
        9,
        11,
        3,
        0,
        8,
        12,
        2,
        13,
        7,
        1,
        4,
        10,
        5,
        10,
        2,
        8,
        4,
        7,
        6,
        1,
        5,
        15,
        11,
        9,
        14,
        3,
        12,
        13,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3
      ];
      var SIGMA82 = new Uint8Array(SIGMA8.map(function(x) {
        return x * 2;
      }));
      var v = new Uint32Array(32);
      var m = new Uint32Array(32);
      function blake2bCompress(ctx, last) {
        var i = 0;
        for (i = 0; i < 16; i++) {
          v[i] = ctx.h[i];
          v[i + 16] = BLAKE2B_IV32[i];
        }
        v[24] = v[24] ^ ctx.t;
        v[25] = v[25] ^ ctx.t / 4294967296;
        if (last) {
          v[28] = ~v[28];
          v[29] = ~v[29];
        }
        for (i = 0; i < 32; i++) {
          m[i] = B2B_GET32(ctx.b, 4 * i);
        }
        for (i = 0; i < 12; i++) {
          B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
          B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
          B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
          B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
          B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
          B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
          B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
          B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
        }
        for (i = 0; i < 16; i++) {
          ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
        }
      }
      var parameter_block = new Uint8Array([
        0,
        0,
        0,
        0,
        //  0: outlen, keylen, fanout, depth
        0,
        0,
        0,
        0,
        //  4: leaf length, sequential mode
        0,
        0,
        0,
        0,
        //  8: node offset
        0,
        0,
        0,
        0,
        // 12: node offset
        0,
        0,
        0,
        0,
        // 16: node depth, inner length, rfu
        0,
        0,
        0,
        0,
        // 20: rfu
        0,
        0,
        0,
        0,
        // 24: rfu
        0,
        0,
        0,
        0,
        // 28: rfu
        0,
        0,
        0,
        0,
        // 32: salt
        0,
        0,
        0,
        0,
        // 36: salt
        0,
        0,
        0,
        0,
        // 40: salt
        0,
        0,
        0,
        0,
        // 44: salt
        0,
        0,
        0,
        0,
        // 48: personal
        0,
        0,
        0,
        0,
        // 52: personal
        0,
        0,
        0,
        0,
        // 56: personal
        0,
        0,
        0,
        0
        // 60: personal
      ]);
      function Blake2b(outlen, key, salt, personal) {
        parameter_block.fill(0);
        this.b = new Uint8Array(128);
        this.h = new Uint32Array(16);
        this.t = 0;
        this.c = 0;
        this.outlen = outlen;
        parameter_block[0] = outlen;
        if (key) parameter_block[1] = key.length;
        parameter_block[2] = 1;
        parameter_block[3] = 1;
        if (salt) parameter_block.set(salt, 32);
        if (personal) parameter_block.set(personal, 48);
        for (var i = 0; i < 16; i++) {
          this.h[i] = BLAKE2B_IV32[i] ^ B2B_GET32(parameter_block, i * 4);
        }
        if (key) {
          blake2bUpdate(this, key);
          this.c = 128;
        }
      }
      Blake2b.prototype.update = function(input) {
        blake2bUpdate(this, input);
        return this;
      };
      Blake2b.prototype.digest = function(out) {
        var buf = !out || out === "binary" || out === "hex" ? new Uint8Array(this.outlen) : out;
        blake2bFinal(this, buf);
        if (out === "hex") return hexSlice(buf);
        return buf;
      };
      Blake2b.prototype.final = Blake2b.prototype.digest;
      function blake2bUpdate(ctx, input) {
        for (var i = 0; i < input.length; i++) {
          if (ctx.c === 128) {
            ctx.t += ctx.c;
            blake2bCompress(ctx, false);
            ctx.c = 0;
          }
          ctx.b[ctx.c++] = input[i];
        }
      }
      function blake2bFinal(ctx, out) {
        ctx.t += ctx.c;
        while (ctx.c < 128) {
          ctx.b[ctx.c++] = 0;
        }
        blake2bCompress(ctx, true);
        for (var i = 0; i < ctx.outlen; i++) {
          out[i] = ctx.h[i >> 2] >> 8 * (i & 3);
        }
        return out;
      }
      function hexSlice(buf) {
        var str = "";
        for (var i = 0; i < buf.length; i++) str += toHex(buf[i]);
        return str;
      }
      function toHex(n) {
        if (n < 16) return "0" + n.toString(16);
        return n.toString(16);
      }
      module.exports = Blake2b;
    }
  });

  // src/crypto/bech32.js
  var require_bech32 = __commonJS({
    "src/crypto/bech32.js"(exports, module) {
      var CHARSET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
      var GENERATOR = [996825010, 642813549, 513874426, 1027748829, 705979059];
      var encodings = {
        BECH32: "bech32",
        BECH32M: "bech32m"
      };
      module.exports = {
        decode,
        encode,
        encodings,
        verifyChecksum: verifyChecksum4
      };
      function getEncodingConst(enc) {
        if (enc == encodings.BECH32) {
          return 1;
        } else if (enc == encodings.BECH32M) {
          return 734539939;
        } else {
          return null;
        }
      }
      function polymod(values) {
        var chk = 1;
        for (var p = 0; p < values.length; ++p) {
          var top = chk >> 25;
          chk = (chk & 33554431) << 5 ^ values[p];
          for (var i = 0; i < 5; ++i) {
            if (top >> i & 1) {
              chk ^= GENERATOR[i];
            }
          }
        }
        return chk;
      }
      function hrpExpand(hrp) {
        var ret = [];
        var p;
        for (p = 0; p < hrp.length; ++p) {
          ret.push(hrp.charCodeAt(p) >> 5);
        }
        ret.push(0);
        for (p = 0; p < hrp.length; ++p) {
          ret.push(hrp.charCodeAt(p) & 31);
        }
        return ret;
      }
      function verifyChecksum4(hrp, data, enc) {
        return polymod(hrpExpand(hrp).concat(data)) === getEncodingConst(enc);
      }
      function createChecksum(hrp, data, enc) {
        var values = hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
        var mod = polymod(values) ^ getEncodingConst(enc);
        var ret = [];
        for (var p = 0; p < 6; ++p) {
          ret.push(mod >> 5 * (5 - p) & 31);
        }
        return ret;
      }
      function encode(hrp, data, enc) {
        var combined = data.concat(createChecksum(hrp, data, enc));
        var ret = hrp + "1";
        for (var p = 0; p < combined.length; ++p) {
          ret += CHARSET.charAt(combined[p]);
        }
        return ret;
      }
      function decode(bechString, enc) {
        var p;
        var has_lower = false;
        var has_upper = false;
        for (p = 0; p < bechString.length; ++p) {
          if (bechString.charCodeAt(p) < 33 || bechString.charCodeAt(p) > 126) {
            return null;
          }
          if (bechString.charCodeAt(p) >= 97 && bechString.charCodeAt(p) <= 122) {
            has_lower = true;
          }
          if (bechString.charCodeAt(p) >= 65 && bechString.charCodeAt(p) <= 90) {
            has_upper = true;
          }
        }
        if (has_lower && has_upper) {
          return null;
        }
        bechString = bechString.toLowerCase();
        var pos = bechString.lastIndexOf("1");
        if (pos < 1 || pos + 7 > bechString.length || bechString.length > 110) {
          return null;
        }
        var hrp = bechString.substring(0, pos);
        var data = [];
        for (p = pos + 1; p < bechString.length; ++p) {
          var d = CHARSET.indexOf(bechString.charAt(p));
          if (d === -1) {
            return null;
          }
          data.push(d);
        }
        if (!verifyChecksum4(hrp, data, enc)) {
          return null;
        }
        return { hrp, data: data.slice(0, data.length - 6) };
      }
    }
  });

  // src/crypto/segwit_addr.js
  var require_segwit_addr = __commonJS({
    "src/crypto/segwit_addr.js"(exports, module) {
      var bech323 = require_bech32();
      function convertbits(data, frombits, tobits, pad) {
        var acc = 0;
        var bits = 0;
        var ret = [];
        var maxv = (1 << tobits) - 1;
        for (var p = 0; p < data.length; ++p) {
          var value = data[p];
          if (value < 0 || value >> frombits !== 0) {
            return null;
          }
          acc = acc << frombits | value;
          bits += frombits;
          while (bits >= tobits) {
            bits -= tobits;
            ret.push(acc >> bits & maxv);
          }
        }
        if (pad) {
          if (bits > 0) {
            ret.push(acc << tobits - bits & maxv);
          }
        } else if (bits >= frombits || acc << tobits - bits & maxv) {
          return null;
        }
        return ret;
      }
      function decode(hrp, addr) {
        var bech32m = false;
        var dec = bech323.decode(addr, bech323.encodings.BECH32);
        if (dec === null) {
          dec = bech323.decode(addr, bech323.encodings.BECH32M);
          bech32m = true;
        }
        if (dec === null || dec.hrp !== hrp || dec.data.length < 1 || dec.data[0] > 16) {
          return null;
        }
        var res = convertbits(dec.data.slice(1), 5, 8, false);
        if (res === null || res.length < 2 || res.length > 40) {
          return null;
        }
        if (dec.data[0] === 0 && res.length !== 20 && res.length !== 32) {
          return null;
        }
        if (dec.data[0] === 0 && bech32m) {
          return null;
        }
        if (dec.data[0] !== 0 && !bech32m) {
          return null;
        }
        return { version: dec.data[0], program: res };
      }
      function encode(hrp, version, program) {
        var enc = bech323.encodings.BECH32;
        if (version > 0) {
          enc = bech323.encodings.BECH32M;
        }
        var ret = bech323.encode(hrp, [version].concat(convertbits(program, 8, 5, true)), enc);
        if (decode(hrp, ret, enc) === null) {
          return null;
        }
        return ret;
      }
      function isValidAddress(address, networkType, opts = {}) {
        if (!opts.bech32Hrp || opts.bech32Hrp.length === 0) {
          return false;
        }
        var correctBech32Hrps;
        if (networkType === "mainnet" || networkType === "testnet") {
          correctBech32Hrps = opts.bech32Hrp[networkType];
        } else if (opts.bech32Hrp) {
          correctBech32Hrps = opts.bech32Hrp.mainnet.concat(opts.bech32Hrp.testnet);
        } else {
          return false;
        }
        for (var chrp of correctBech32Hrps) {
          var ret = decode(chrp, address);
          if (ret) {
            return encode(chrp, ret.version, ret.program) === address.toLowerCase();
          }
        }
        return false;
      }
      module.exports = {
        encode,
        decode,
        isValidAddress
      };
    }
  });

  // node_modules/cbor-js/cbor.js
  var require_cbor = __commonJS({
    "node_modules/cbor-js/cbor.js"(exports, module) {
      (function(global2, undefined2) {
        "use strict";
        var POW_2_24 = Math.pow(2, -24), POW_2_32 = Math.pow(2, 32), POW_2_53 = Math.pow(2, 53);
        function encode(value) {
          var data = new ArrayBuffer(256);
          var dataView = new DataView(data);
          var lastLength;
          var offset = 0;
          function ensureSpace(length) {
            var newByteLength = data.byteLength;
            var requiredLength = offset + length;
            while (newByteLength < requiredLength)
              newByteLength *= 2;
            if (newByteLength !== data.byteLength) {
              var oldDataView = dataView;
              data = new ArrayBuffer(newByteLength);
              dataView = new DataView(data);
              var uint32count = offset + 3 >> 2;
              for (var i2 = 0; i2 < uint32count; ++i2)
                dataView.setUint32(i2 * 4, oldDataView.getUint32(i2 * 4));
            }
            lastLength = length;
            return dataView;
          }
          function write() {
            offset += lastLength;
          }
          function writeFloat64(value2) {
            write(ensureSpace(8).setFloat64(offset, value2));
          }
          function writeUint8(value2) {
            write(ensureSpace(1).setUint8(offset, value2));
          }
          function writeUint8Array(value2) {
            var dataView2 = ensureSpace(value2.length);
            for (var i2 = 0; i2 < value2.length; ++i2)
              dataView2.setUint8(offset + i2, value2[i2]);
            write();
          }
          function writeUint16(value2) {
            write(ensureSpace(2).setUint16(offset, value2));
          }
          function writeUint32(value2) {
            write(ensureSpace(4).setUint32(offset, value2));
          }
          function writeUint64(value2) {
            var low = value2 % POW_2_32;
            var high = (value2 - low) / POW_2_32;
            var dataView2 = ensureSpace(8);
            dataView2.setUint32(offset, high);
            dataView2.setUint32(offset + 4, low);
            write();
          }
          function writeTypeAndLength(type, length) {
            if (length < 24) {
              writeUint8(type << 5 | length);
            } else if (length < 256) {
              writeUint8(type << 5 | 24);
              writeUint8(length);
            } else if (length < 65536) {
              writeUint8(type << 5 | 25);
              writeUint16(length);
            } else if (length < 4294967296) {
              writeUint8(type << 5 | 26);
              writeUint32(length);
            } else {
              writeUint8(type << 5 | 27);
              writeUint64(length);
            }
          }
          function encodeItem(value2) {
            var i2;
            if (value2 === false)
              return writeUint8(244);
            if (value2 === true)
              return writeUint8(245);
            if (value2 === null)
              return writeUint8(246);
            if (value2 === undefined2)
              return writeUint8(247);
            switch (typeof value2) {
              case "number":
                if (Math.floor(value2) === value2) {
                  if (0 <= value2 && value2 <= POW_2_53)
                    return writeTypeAndLength(0, value2);
                  if (-POW_2_53 <= value2 && value2 < 0)
                    return writeTypeAndLength(1, -(value2 + 1));
                }
                writeUint8(251);
                return writeFloat64(value2);
              case "string":
                var utf8data = [];
                for (i2 = 0; i2 < value2.length; ++i2) {
                  var charCode = value2.charCodeAt(i2);
                  if (charCode < 128) {
                    utf8data.push(charCode);
                  } else if (charCode < 2048) {
                    utf8data.push(192 | charCode >> 6);
                    utf8data.push(128 | charCode & 63);
                  } else if (charCode < 55296) {
                    utf8data.push(224 | charCode >> 12);
                    utf8data.push(128 | charCode >> 6 & 63);
                    utf8data.push(128 | charCode & 63);
                  } else {
                    charCode = (charCode & 1023) << 10;
                    charCode |= value2.charCodeAt(++i2) & 1023;
                    charCode += 65536;
                    utf8data.push(240 | charCode >> 18);
                    utf8data.push(128 | charCode >> 12 & 63);
                    utf8data.push(128 | charCode >> 6 & 63);
                    utf8data.push(128 | charCode & 63);
                  }
                }
                writeTypeAndLength(3, utf8data.length);
                return writeUint8Array(utf8data);
              default:
                var length;
                if (Array.isArray(value2)) {
                  length = value2.length;
                  writeTypeAndLength(4, length);
                  for (i2 = 0; i2 < length; ++i2)
                    encodeItem(value2[i2]);
                } else if (value2 instanceof Uint8Array) {
                  writeTypeAndLength(2, value2.length);
                  writeUint8Array(value2);
                } else {
                  var keys = Object.keys(value2);
                  length = keys.length;
                  writeTypeAndLength(5, length);
                  for (i2 = 0; i2 < length; ++i2) {
                    var key = keys[i2];
                    encodeItem(key);
                    encodeItem(value2[key]);
                  }
                }
            }
          }
          encodeItem(value);
          if ("slice" in data)
            return data.slice(0, offset);
          var ret = new ArrayBuffer(offset);
          var retView = new DataView(ret);
          for (var i = 0; i < offset; ++i)
            retView.setUint8(i, dataView.getUint8(i));
          return ret;
        }
        function decode(data, tagger, simpleValue) {
          var dataView = new DataView(data);
          var offset = 0;
          if (typeof tagger !== "function")
            tagger = function(value) {
              return value;
            };
          if (typeof simpleValue !== "function")
            simpleValue = function() {
              return undefined2;
            };
          function read(value, length) {
            offset += length;
            return value;
          }
          function readArrayBuffer(length) {
            return read(new Uint8Array(data, offset, length), length);
          }
          function readFloat16() {
            var tempArrayBuffer = new ArrayBuffer(4);
            var tempDataView = new DataView(tempArrayBuffer);
            var value = readUint16();
            var sign = value & 32768;
            var exponent = value & 31744;
            var fraction = value & 1023;
            if (exponent === 31744)
              exponent = 255 << 10;
            else if (exponent !== 0)
              exponent += 127 - 15 << 10;
            else if (fraction !== 0)
              return fraction * POW_2_24;
            tempDataView.setUint32(0, sign << 16 | exponent << 13 | fraction << 13);
            return tempDataView.getFloat32(0);
          }
          function readFloat32() {
            return read(dataView.getFloat32(offset), 4);
          }
          function readFloat64() {
            return read(dataView.getFloat64(offset), 8);
          }
          function readUint8() {
            return read(dataView.getUint8(offset), 1);
          }
          function readUint16() {
            return read(dataView.getUint16(offset), 2);
          }
          function readUint32() {
            return read(dataView.getUint32(offset), 4);
          }
          function readUint64() {
            return readUint32() * POW_2_32 + readUint32();
          }
          function readBreak() {
            if (dataView.getUint8(offset) !== 255)
              return false;
            offset += 1;
            return true;
          }
          function readLength(additionalInformation) {
            if (additionalInformation < 24)
              return additionalInformation;
            if (additionalInformation === 24)
              return readUint8();
            if (additionalInformation === 25)
              return readUint16();
            if (additionalInformation === 26)
              return readUint32();
            if (additionalInformation === 27)
              return readUint64();
            if (additionalInformation === 31)
              return -1;
            throw "Invalid length encoding";
          }
          function readIndefiniteStringLength(majorType) {
            var initialByte = readUint8();
            if (initialByte === 255)
              return -1;
            var length = readLength(initialByte & 31);
            if (length < 0 || initialByte >> 5 !== majorType)
              throw "Invalid indefinite length element";
            return length;
          }
          function appendUtf16data(utf16data, length) {
            for (var i = 0; i < length; ++i) {
              var value = readUint8();
              if (value & 128) {
                if (value < 224) {
                  value = (value & 31) << 6 | readUint8() & 63;
                  length -= 1;
                } else if (value < 240) {
                  value = (value & 15) << 12 | (readUint8() & 63) << 6 | readUint8() & 63;
                  length -= 2;
                } else {
                  value = (value & 15) << 18 | (readUint8() & 63) << 12 | (readUint8() & 63) << 6 | readUint8() & 63;
                  length -= 3;
                }
              }
              if (value < 65536) {
                utf16data.push(value);
              } else {
                value -= 65536;
                utf16data.push(55296 | value >> 10);
                utf16data.push(56320 | value & 1023);
              }
            }
          }
          function decodeItem() {
            var initialByte = readUint8();
            var majorType = initialByte >> 5;
            var additionalInformation = initialByte & 31;
            var i;
            var length;
            if (majorType === 7) {
              switch (additionalInformation) {
                case 25:
                  return readFloat16();
                case 26:
                  return readFloat32();
                case 27:
                  return readFloat64();
              }
            }
            length = readLength(additionalInformation);
            if (length < 0 && (majorType < 2 || 6 < majorType))
              throw "Invalid length";
            switch (majorType) {
              case 0:
                return length;
              case 1:
                return -1 - length;
              case 2:
                if (length < 0) {
                  var elements = [];
                  var fullArrayLength = 0;
                  while ((length = readIndefiniteStringLength(majorType)) >= 0) {
                    fullArrayLength += length;
                    elements.push(readArrayBuffer(length));
                  }
                  var fullArray = new Uint8Array(fullArrayLength);
                  var fullArrayOffset = 0;
                  for (i = 0; i < elements.length; ++i) {
                    fullArray.set(elements[i], fullArrayOffset);
                    fullArrayOffset += elements[i].length;
                  }
                  return fullArray;
                }
                return readArrayBuffer(length);
              case 3:
                var utf16data = [];
                if (length < 0) {
                  while ((length = readIndefiniteStringLength(majorType)) >= 0)
                    appendUtf16data(utf16data, length);
                } else
                  appendUtf16data(utf16data, length);
                return String.fromCharCode.apply(null, utf16data);
              case 4:
                var retArray;
                if (length < 0) {
                  retArray = [];
                  while (!readBreak())
                    retArray.push(decodeItem());
                } else {
                  retArray = new Array(length);
                  for (i = 0; i < length; ++i)
                    retArray[i] = decodeItem();
                }
                return retArray;
              case 5:
                var retObject = {};
                for (i = 0; i < length || length < 0 && !readBreak(); ++i) {
                  var key = decodeItem();
                  retObject[key] = decodeItem();
                }
                return retObject;
              case 6:
                return tagger(decodeItem(), length);
              case 7:
                switch (length) {
                  case 20:
                    return false;
                  case 21:
                    return true;
                  case 22:
                    return null;
                  case 23:
                    return undefined2;
                  default:
                    return simpleValue(length);
                }
            }
          }
          var ret = decodeItem();
          if (offset !== data.byteLength)
            throw "Remaining bytes";
          return ret;
        }
        var obj = { encode, decode };
        if (typeof define === "function" && define.amd)
          define("cbor/cbor", obj);
        else if (typeof module !== "undefined" && module.exports)
          module.exports = obj;
        else if (!global2.CBOR)
          global2.CBOR = obj;
      })(exports);
    }
  });

  // src/crypto/biginteger.js
  var require_biginteger = __commonJS({
    "src/crypto/biginteger.js"(exports) {
      (function(exports2) {
        "use strict";
        var CONSTRUCT = {};
        function BigInteger(n, s, token) {
          if (token !== CONSTRUCT) {
            if (n instanceof BigInteger) {
              return n;
            } else if (typeof n === "undefined") {
              return ZERO;
            }
            return BigInteger.parse(n);
          }
          n = n || [];
          while (n.length && !n[n.length - 1]) {
            --n.length;
          }
          this._d = n;
          this._s = n.length ? s || 1 : 0;
        }
        BigInteger._construct = function(n, s) {
          return new BigInteger(n, s, CONSTRUCT);
        };
        var BigInteger_base = 1e7;
        var BigInteger_base_log10 = 7;
        BigInteger.base = BigInteger_base;
        BigInteger.base_log10 = BigInteger_base_log10;
        var ZERO = new BigInteger([], 0, CONSTRUCT);
        BigInteger.ZERO = ZERO;
        var ONE = new BigInteger([1], 1, CONSTRUCT);
        BigInteger.ONE = ONE;
        var M_ONE = new BigInteger(ONE._d, -1, CONSTRUCT);
        BigInteger.M_ONE = M_ONE;
        BigInteger._0 = ZERO;
        BigInteger._1 = ONE;
        BigInteger.small = [
          ZERO,
          ONE,
          /* Assuming BigInteger_base > 36 */
          new BigInteger([2], 1, CONSTRUCT),
          new BigInteger([3], 1, CONSTRUCT),
          new BigInteger([4], 1, CONSTRUCT),
          new BigInteger([5], 1, CONSTRUCT),
          new BigInteger([6], 1, CONSTRUCT),
          new BigInteger([7], 1, CONSTRUCT),
          new BigInteger([8], 1, CONSTRUCT),
          new BigInteger([9], 1, CONSTRUCT),
          new BigInteger([10], 1, CONSTRUCT),
          new BigInteger([11], 1, CONSTRUCT),
          new BigInteger([12], 1, CONSTRUCT),
          new BigInteger([13], 1, CONSTRUCT),
          new BigInteger([14], 1, CONSTRUCT),
          new BigInteger([15], 1, CONSTRUCT),
          new BigInteger([16], 1, CONSTRUCT),
          new BigInteger([17], 1, CONSTRUCT),
          new BigInteger([18], 1, CONSTRUCT),
          new BigInteger([19], 1, CONSTRUCT),
          new BigInteger([20], 1, CONSTRUCT),
          new BigInteger([21], 1, CONSTRUCT),
          new BigInteger([22], 1, CONSTRUCT),
          new BigInteger([23], 1, CONSTRUCT),
          new BigInteger([24], 1, CONSTRUCT),
          new BigInteger([25], 1, CONSTRUCT),
          new BigInteger([26], 1, CONSTRUCT),
          new BigInteger([27], 1, CONSTRUCT),
          new BigInteger([28], 1, CONSTRUCT),
          new BigInteger([29], 1, CONSTRUCT),
          new BigInteger([30], 1, CONSTRUCT),
          new BigInteger([31], 1, CONSTRUCT),
          new BigInteger([32], 1, CONSTRUCT),
          new BigInteger([33], 1, CONSTRUCT),
          new BigInteger([34], 1, CONSTRUCT),
          new BigInteger([35], 1, CONSTRUCT),
          new BigInteger([36], 1, CONSTRUCT)
        ];
        BigInteger.digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        BigInteger.prototype.toString = function(base) {
          base = +base || 10;
          if (base < 2 || base > 36) {
            throw new Error("illegal radix " + base + ".");
          }
          if (this._s === 0) {
            return "0";
          }
          if (base === 10) {
            var str = this._s < 0 ? "-" : "";
            str += this._d[this._d.length - 1].toString();
            for (var i = this._d.length - 2; i >= 0; i--) {
              var group = this._d[i].toString();
              while (group.length < BigInteger_base_log10) group = "0" + group;
              str += group;
            }
            return str;
          } else {
            var numerals = BigInteger.digits;
            base = BigInteger.small[base];
            var sign = this._s;
            var n = this.abs();
            var digits = [];
            var digit;
            while (n._s !== 0) {
              var divmod = n.divRem(base);
              n = divmod[0];
              digit = divmod[1];
              digits.push(numerals[digit.valueOf()]);
            }
            return (sign < 0 ? "-" : "") + digits.reverse().join("");
          }
        };
        BigInteger.radixRegex = [
          /^$/,
          /^$/,
          /^[01]*$/,
          /^[012]*$/,
          /^[0-3]*$/,
          /^[0-4]*$/,
          /^[0-5]*$/,
          /^[0-6]*$/,
          /^[0-7]*$/,
          /^[0-8]*$/,
          /^[0-9]*$/,
          /^[0-9aA]*$/,
          /^[0-9abAB]*$/,
          /^[0-9abcABC]*$/,
          /^[0-9a-dA-D]*$/,
          /^[0-9a-eA-E]*$/,
          /^[0-9a-fA-F]*$/,
          /^[0-9a-gA-G]*$/,
          /^[0-9a-hA-H]*$/,
          /^[0-9a-iA-I]*$/,
          /^[0-9a-jA-J]*$/,
          /^[0-9a-kA-K]*$/,
          /^[0-9a-lA-L]*$/,
          /^[0-9a-mA-M]*$/,
          /^[0-9a-nA-N]*$/,
          /^[0-9a-oA-O]*$/,
          /^[0-9a-pA-P]*$/,
          /^[0-9a-qA-Q]*$/,
          /^[0-9a-rA-R]*$/,
          /^[0-9a-sA-S]*$/,
          /^[0-9a-tA-T]*$/,
          /^[0-9a-uA-U]*$/,
          /^[0-9a-vA-V]*$/,
          /^[0-9a-wA-W]*$/,
          /^[0-9a-xA-X]*$/,
          /^[0-9a-yA-Y]*$/,
          /^[0-9a-zA-Z]*$/
        ];
        BigInteger.parse = function(s, base) {
          function expandExponential(str) {
            str = str.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/, "e");
            return str.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/, function(x, s2, n, f, c) {
              c = +c;
              var l = c < 0;
              var i2 = n.length + c;
              x = (l ? n : f).length;
              c = (c = Math.abs(c)) >= x ? c - x + l : 0;
              var z = new Array(c + 1).join("0");
              var r = n + f;
              return (s2 || "") + (l ? r = z + r : r += z).substr(0, i2 += l ? z.length : 0) + (i2 < r.length ? "." + r.substr(i2) : "");
            });
          }
          s = s.toString();
          if (typeof base === "undefined" || +base === 10) {
            s = expandExponential(s);
          }
          var prefixRE;
          if (typeof base === "undefined") {
            prefixRE = "0[xcb]";
          } else if (base == 16) {
            prefixRE = "0x";
          } else if (base == 8) {
            prefixRE = "0c";
          } else if (base == 2) {
            prefixRE = "0b";
          } else {
            prefixRE = "";
          }
          var parts = new RegExp("^([+\\-]?)(" + prefixRE + ")?([0-9a-z]*)(?:\\.\\d*)?$", "i").exec(s);
          if (parts) {
            var sign = parts[1] || "+";
            var baseSection = parts[2] || "";
            var digits = parts[3] || "";
            if (typeof base === "undefined") {
              if (baseSection === "0x" || baseSection === "0X") {
                base = 16;
              } else if (baseSection === "0c" || baseSection === "0C") {
                base = 8;
              } else if (baseSection === "0b" || baseSection === "0B") {
                base = 2;
              } else {
                base = 10;
              }
            } else if (base < 2 || base > 36) {
              throw new Error("Illegal radix " + base + ".");
            }
            base = +base;
            if (!BigInteger.radixRegex[base].test(digits)) {
              throw new Error("Bad digit for radix " + base);
            }
            digits = digits.replace(/^0+/, "").split("");
            if (digits.length === 0) {
              return ZERO;
            }
            sign = sign === "-" ? -1 : 1;
            if (base == 10) {
              var d = [];
              while (digits.length >= BigInteger_base_log10) {
                d.push(parseInt(digits.splice(digits.length - BigInteger.base_log10, BigInteger.base_log10).join(""), 10));
              }
              d.push(parseInt(digits.join(""), 10));
              return new BigInteger(d, sign, CONSTRUCT);
            }
            var d = ZERO;
            base = BigInteger.small[base];
            var small = BigInteger.small;
            for (var i = 0; i < digits.length; i++) {
              d = d.multiply(base).add(small[parseInt(digits[i], 36)]);
            }
            return new BigInteger(d._d, sign, CONSTRUCT);
          } else {
            throw new Error("Invalid BigInteger format: " + s);
          }
        };
        BigInteger.prototype.add = function(n) {
          if (this._s === 0) {
            return BigInteger(n);
          }
          n = BigInteger(n);
          if (n._s === 0) {
            return this;
          }
          if (this._s !== n._s) {
            n = n.negate();
            return this.subtract(n);
          }
          var a = this._d;
          var b = n._d;
          var al = a.length;
          var bl = b.length;
          var sum = new Array(Math.max(al, bl) + 1);
          var size = Math.min(al, bl);
          var carry = 0;
          var digit;
          for (var i = 0; i < size; i++) {
            digit = a[i] + b[i] + carry;
            sum[i] = digit % BigInteger_base;
            carry = digit / BigInteger_base | 0;
          }
          if (bl > al) {
            a = b;
            al = bl;
          }
          for (i = size; carry && i < al; i++) {
            digit = a[i] + carry;
            sum[i] = digit % BigInteger_base;
            carry = digit / BigInteger_base | 0;
          }
          if (carry) {
            sum[i] = carry;
          }
          for (; i < al; i++) {
            sum[i] = a[i];
          }
          return new BigInteger(sum, this._s, CONSTRUCT);
        };
        BigInteger.prototype.negate = function() {
          return new BigInteger(this._d, -this._s | 0, CONSTRUCT);
        };
        BigInteger.prototype.abs = function() {
          return this._s < 0 ? this.negate() : this;
        };
        BigInteger.prototype.subtract = function(n) {
          if (this._s === 0) {
            return BigInteger(n).negate();
          }
          n = BigInteger(n);
          if (n._s === 0) {
            return this;
          }
          if (this._s !== n._s) {
            n = n.negate();
            return this.add(n);
          }
          var m = this;
          if (this._s < 0) {
            m = new BigInteger(n._d, 1, CONSTRUCT);
            n = new BigInteger(this._d, 1, CONSTRUCT);
          }
          var sign = m.compareAbs(n);
          if (sign === 0) {
            return ZERO;
          } else if (sign < 0) {
            var t = n;
            n = m;
            m = t;
          }
          var a = m._d;
          var b = n._d;
          var al = a.length;
          var bl = b.length;
          var diff = new Array(al);
          var borrow = 0;
          var i;
          var digit;
          for (i = 0; i < bl; i++) {
            digit = a[i] - borrow - b[i];
            if (digit < 0) {
              digit += BigInteger_base;
              borrow = 1;
            } else {
              borrow = 0;
            }
            diff[i] = digit;
          }
          for (i = bl; i < al; i++) {
            digit = a[i] - borrow;
            if (digit < 0) {
              digit += BigInteger_base;
            } else {
              diff[i++] = digit;
              break;
            }
            diff[i] = digit;
          }
          for (; i < al; i++) {
            diff[i] = a[i];
          }
          return new BigInteger(diff, sign, CONSTRUCT);
        };
        (function() {
          function addOne(n, sign) {
            var a = n._d;
            var sum = a.slice();
            var carry = true;
            var i = 0;
            while (true) {
              var digit = (a[i] || 0) + 1;
              sum[i] = digit % BigInteger_base;
              if (digit <= BigInteger_base - 1) {
                break;
              }
              ++i;
            }
            return new BigInteger(sum, sign, CONSTRUCT);
          }
          function subtractOne(n, sign) {
            var a = n._d;
            var sum = a.slice();
            var borrow = true;
            var i = 0;
            while (true) {
              var digit = (a[i] || 0) - 1;
              if (digit < 0) {
                sum[i] = digit + BigInteger_base;
              } else {
                sum[i] = digit;
                break;
              }
              ++i;
            }
            return new BigInteger(sum, sign, CONSTRUCT);
          }
          BigInteger.prototype.next = function() {
            switch (this._s) {
              case 0:
                return ONE;
              case -1:
                return subtractOne(this, -1);
              default:
                return addOne(this, 1);
            }
          };
          BigInteger.prototype.prev = function() {
            switch (this._s) {
              case 0:
                return M_ONE;
              case -1:
                return addOne(this, -1);
              default:
                return subtractOne(this, 1);
            }
          };
        })();
        BigInteger.prototype.compareAbs = function(n) {
          if (this === n) {
            return 0;
          }
          if (!(n instanceof BigInteger)) {
            if (!isFinite(n)) {
              return isNaN(n) ? n : -1;
            }
            n = BigInteger(n);
          }
          if (this._s === 0) {
            return n._s !== 0 ? -1 : 0;
          }
          if (n._s === 0) {
            return 1;
          }
          var l = this._d.length;
          var nl = n._d.length;
          if (l < nl) {
            return -1;
          } else if (l > nl) {
            return 1;
          }
          var a = this._d;
          var b = n._d;
          for (var i = l - 1; i >= 0; i--) {
            if (a[i] !== b[i]) {
              return a[i] < b[i] ? -1 : 1;
            }
          }
          return 0;
        };
        BigInteger.prototype.compare = function(n) {
          if (this === n) {
            return 0;
          }
          n = BigInteger(n);
          if (this._s === 0) {
            return -n._s;
          }
          if (this._s === n._s) {
            var cmp = this.compareAbs(n);
            return cmp * this._s;
          } else {
            return this._s;
          }
        };
        BigInteger.prototype.isUnit = function() {
          return this === ONE || this === M_ONE || this._d.length === 1 && this._d[0] === 1;
        };
        BigInteger.prototype.multiply = function(n) {
          if (this._s === 0) {
            return ZERO;
          }
          n = BigInteger(n);
          if (n._s === 0) {
            return ZERO;
          }
          if (this.isUnit()) {
            if (this._s < 0) {
              return n.negate();
            }
            return n;
          }
          if (n.isUnit()) {
            if (n._s < 0) {
              return this.negate();
            }
            return this;
          }
          if (this === n) {
            return this.square();
          }
          var r = this._d.length >= n._d.length;
          var a = (r ? this : n)._d;
          var b = (r ? n : this)._d;
          var al = a.length;
          var bl = b.length;
          var pl = al + bl;
          var partial = new Array(pl);
          var i;
          for (i = 0; i < pl; i++) {
            partial[i] = 0;
          }
          for (i = 0; i < bl; i++) {
            var carry = 0;
            var bi = b[i];
            var jlimit = al + i;
            var digit;
            for (var j = i; j < jlimit; j++) {
              digit = partial[j] + bi * a[j - i] + carry;
              carry = digit / BigInteger_base | 0;
              partial[j] = digit % BigInteger_base | 0;
            }
            if (carry) {
              digit = partial[j] + carry;
              carry = digit / BigInteger_base | 0;
              partial[j] = digit % BigInteger_base;
            }
          }
          return new BigInteger(partial, this._s * n._s, CONSTRUCT);
        };
        BigInteger.prototype.multiplySingleDigit = function(n) {
          if (n === 0 || this._s === 0) {
            return ZERO;
          }
          if (n === 1) {
            return this;
          }
          var digit;
          if (this._d.length === 1) {
            digit = this._d[0] * n;
            if (digit >= BigInteger_base) {
              return new BigInteger([
                digit % BigInteger_base | 0,
                digit / BigInteger_base | 0
              ], 1, CONSTRUCT);
            }
            return new BigInteger([digit], 1, CONSTRUCT);
          }
          if (n === 2) {
            return this.add(this);
          }
          if (this.isUnit()) {
            return new BigInteger([n], 1, CONSTRUCT);
          }
          var a = this._d;
          var al = a.length;
          var pl = al + 1;
          var partial = new Array(pl);
          for (var i = 0; i < pl; i++) {
            partial[i] = 0;
          }
          var carry = 0;
          for (var j = 0; j < al; j++) {
            digit = n * a[j] + carry;
            carry = digit / BigInteger_base | 0;
            partial[j] = digit % BigInteger_base | 0;
          }
          if (carry) {
            partial[j] = carry;
          }
          return new BigInteger(partial, 1, CONSTRUCT);
        };
        BigInteger.prototype.square = function() {
          if (this._s === 0) {
            return ZERO;
          }
          if (this.isUnit()) {
            return ONE;
          }
          var digits = this._d;
          var length = digits.length;
          var imult1 = new Array(length + length + 1);
          var product, carry, k;
          var i;
          for (i = 0; i < length; i++) {
            k = i * 2;
            product = digits[i] * digits[i];
            carry = product / BigInteger_base | 0;
            imult1[k] = product % BigInteger_base;
            imult1[k + 1] = carry;
          }
          for (i = 0; i < length; i++) {
            carry = 0;
            k = i * 2 + 1;
            for (var j = i + 1; j < length; j++, k++) {
              product = digits[j] * digits[i] * 2 + imult1[k] + carry;
              carry = product / BigInteger_base | 0;
              imult1[k] = product % BigInteger_base;
            }
            k = length + i;
            var digit = carry + imult1[k];
            carry = digit / BigInteger_base | 0;
            imult1[k] = digit % BigInteger_base;
            imult1[k + 1] += carry;
          }
          return new BigInteger(imult1, 1, CONSTRUCT);
        };
        BigInteger.prototype.quotient = function(n) {
          return this.divRem(n)[0];
        };
        BigInteger.prototype.divide = BigInteger.prototype.quotient;
        BigInteger.prototype.remainder = function(n) {
          return this.divRem(n)[1];
        };
        BigInteger.prototype.divRem = function(n) {
          n = BigInteger(n);
          if (n._s === 0) {
            throw new Error("Divide by zero");
          }
          if (this._s === 0) {
            return [ZERO, ZERO];
          }
          if (n._d.length === 1) {
            return this.divRemSmall(n._s * n._d[0]);
          }
          switch (this.compareAbs(n)) {
            case 0:
              return [this._s === n._s ? ONE : M_ONE, ZERO];
            case -1:
              return [ZERO, this];
          }
          var sign = this._s * n._s;
          var a = n.abs();
          var b_digits = this._d;
          var b_index = b_digits.length;
          var digits = n._d.length;
          var quot = [];
          var guess;
          var part = new BigInteger([], 0, CONSTRUCT);
          while (b_index) {
            part._d.unshift(b_digits[--b_index]);
            part = new BigInteger(part._d, 1, CONSTRUCT);
            if (part.compareAbs(n) < 0) {
              quot.push(0);
              continue;
            }
            if (part._s === 0) {
              guess = 0;
            } else {
              var xlen = part._d.length, ylen = a._d.length;
              var highx = part._d[xlen - 1] * BigInteger_base + part._d[xlen - 2];
              var highy = a._d[ylen - 1] * BigInteger_base + a._d[ylen - 2];
              if (part._d.length > a._d.length) {
                highx = (highx + 1) * BigInteger_base;
              }
              guess = Math.ceil(highx / highy);
            }
            do {
              var check = a.multiplySingleDigit(guess);
              if (check.compareAbs(part) <= 0) {
                break;
              }
              guess--;
            } while (guess);
            quot.push(guess);
            if (!guess) {
              continue;
            }
            var diff = part.subtract(check);
            part._d = diff._d.slice();
          }
          return [
            new BigInteger(quot.reverse(), sign, CONSTRUCT),
            new BigInteger(part._d, this._s, CONSTRUCT)
          ];
        };
        BigInteger.prototype.divRemSmall = function(n) {
          var r;
          n = +n;
          if (n === 0) {
            throw new Error("Divide by zero");
          }
          var n_s = n < 0 ? -1 : 1;
          var sign = this._s * n_s;
          n = Math.abs(n);
          if (n < 1 || n >= BigInteger_base) {
            throw new Error("Argument out of range");
          }
          if (this._s === 0) {
            return [ZERO, ZERO];
          }
          if (n === 1 || n === -1) {
            return [sign === 1 ? this.abs() : new BigInteger(this._d, sign, CONSTRUCT), ZERO];
          }
          if (this._d.length === 1) {
            var q = new BigInteger([this._d[0] / n | 0], 1, CONSTRUCT);
            r = new BigInteger([this._d[0] % n | 0], 1, CONSTRUCT);
            if (sign < 0) {
              q = q.negate();
            }
            if (this._s < 0) {
              r = r.negate();
            }
            return [q, r];
          }
          var digits = this._d.slice();
          var quot = new Array(digits.length);
          var part = 0;
          var diff = 0;
          var i = 0;
          var guess;
          while (digits.length) {
            part = part * BigInteger_base + digits[digits.length - 1];
            if (part < n) {
              quot[i++] = 0;
              digits.pop();
              diff = BigInteger_base * diff + part;
              continue;
            }
            if (part === 0) {
              guess = 0;
            } else {
              guess = part / n | 0;
            }
            var check = n * guess;
            diff = part - check;
            quot[i++] = guess;
            if (!guess) {
              digits.pop();
              continue;
            }
            digits.pop();
            part = diff;
          }
          r = new BigInteger([diff], 1, CONSTRUCT);
          if (this._s < 0) {
            r = r.negate();
          }
          return [new BigInteger(quot.reverse(), sign, CONSTRUCT), r];
        };
        BigInteger.prototype.isEven = function() {
          var digits = this._d;
          return this._s === 0 || digits.length === 0 || digits[0] % 2 === 0;
        };
        BigInteger.prototype.isOdd = function() {
          return !this.isEven();
        };
        BigInteger.prototype.sign = function() {
          return this._s;
        };
        BigInteger.prototype.isPositive = function() {
          return this._s > 0;
        };
        BigInteger.prototype.isNegative = function() {
          return this._s < 0;
        };
        BigInteger.prototype.isZero = function() {
          return this._s === 0;
        };
        BigInteger.prototype.exp10 = function(n) {
          n = +n;
          if (n === 0) {
            return this;
          }
          if (Math.abs(n) > Number(MAX_EXP)) {
            throw new Error("exponent too large in BigInteger.exp10");
          }
          if (this._s === 0) {
            return ZERO;
          }
          if (n > 0) {
            var k = new BigInteger(this._d.slice(), this._s, CONSTRUCT);
            for (; n >= BigInteger_base_log10; n -= BigInteger_base_log10) {
              k._d.unshift(0);
            }
            if (n == 0)
              return k;
            k._s = 1;
            k = k.multiplySingleDigit(Math.pow(10, n));
            return this._s < 0 ? k.negate() : k;
          } else if (-n >= this._d.length * BigInteger_base_log10) {
            return ZERO;
          } else {
            var k = new BigInteger(this._d.slice(), this._s, CONSTRUCT);
            for (n = -n; n >= BigInteger_base_log10; n -= BigInteger_base_log10) {
              k._d.shift();
            }
            return n == 0 ? k : k.divRemSmall(Math.pow(10, n))[0];
          }
        };
        BigInteger.prototype.pow = function(n) {
          if (this.isUnit()) {
            if (this._s > 0) {
              return this;
            } else {
              return BigInteger(n).isOdd() ? this : this.negate();
            }
          }
          n = BigInteger(n);
          if (n._s === 0) {
            return ONE;
          } else if (n._s < 0) {
            if (this._s === 0) {
              throw new Error("Divide by zero");
            } else {
              return ZERO;
            }
          }
          if (this._s === 0) {
            return ZERO;
          }
          if (n.isUnit()) {
            return this;
          }
          if (n.compareAbs(MAX_EXP) > 0) {
            throw new Error("exponent too large in BigInteger.pow");
          }
          var x = this;
          var aux = ONE;
          var two = BigInteger.small[2];
          while (n.isPositive()) {
            if (n.isOdd()) {
              aux = aux.multiply(x);
              if (n.isUnit()) {
                return aux;
              }
            }
            x = x.square();
            n = n.quotient(two);
          }
          return aux;
        };
        BigInteger.prototype.modPow = function(exponent, modulus) {
          var result = ONE;
          var base = this;
          while (exponent.isPositive()) {
            if (exponent.isOdd()) {
              result = result.multiply(base).remainder(modulus);
            }
            exponent = exponent.quotient(BigInteger.small[2]);
            if (exponent.isPositive()) {
              base = base.square().remainder(modulus);
            }
          }
          return result;
        };
        BigInteger.prototype.log = function() {
          switch (this._s) {
            case 0:
              return -Infinity;
            case -1:
              return NaN;
            default:
          }
          var l = this._d.length;
          if (l * BigInteger_base_log10 < 30) {
            return Math.log(this.valueOf());
          }
          var N = Math.ceil(30 / BigInteger_base_log10);
          var firstNdigits = this._d.slice(l - N);
          return Math.log(new BigInteger(firstNdigits, 1, CONSTRUCT).valueOf()) + (l - N) * Math.log(BigInteger_base);
        };
        BigInteger.prototype.valueOf = function() {
          return parseInt(this.toString(), 10);
        };
        BigInteger.prototype.toJSValue = function() {
          return parseInt(this.toString(), 10);
        };
        BigInteger.prototype.lowVal = function() {
          return this._d[0] || 0;
        };
        var MAX_EXP = BigInteger(2147483647);
        BigInteger.MAX_EXP = MAX_EXP;
        (function() {
          function makeUnary(fn) {
            return function(a) {
              return fn.call(BigInteger(a));
            };
          }
          function makeBinary(fn) {
            return function(a, b) {
              return fn.call(BigInteger(a), BigInteger(b));
            };
          }
          function makeTrinary(fn) {
            return function(a, b, c) {
              return fn.call(BigInteger(a), BigInteger(b), BigInteger(c));
            };
          }
          (function() {
            var i, fn;
            var unary = "toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(",");
            var binary = "compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(",");
            var trinary = ["modPow"];
            for (i = 0; i < unary.length; i++) {
              fn = unary[i];
              BigInteger[fn] = makeUnary(BigInteger.prototype[fn]);
            }
            for (i = 0; i < binary.length; i++) {
              fn = binary[i];
              BigInteger[fn] = makeBinary(BigInteger.prototype[fn]);
            }
            for (i = 0; i < trinary.length; i++) {
              fn = trinary[i];
              BigInteger[fn] = makeTrinary(BigInteger.prototype[fn]);
            }
            BigInteger.exp10 = function(x, n) {
              return BigInteger(x).exp10(n);
            };
          })();
        })();
        exports2.JSBigInt = BigInteger;
      })(typeof exports !== "undefined" ? exports : exports);
    }
  });

  // src/crypto/cnBase58.js
  var require_cnBase58 = __commonJS({
    "src/crypto/cnBase58.js"(exports, module) {
      var JSBigInt = require_biginteger()["JSBigInt"];
      var cnBase582 = function() {
        var b58 = {};
        var alphabet_str = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
        var alphabet2 = [];
        for (var i = 0; i < alphabet_str.length; i++) {
          alphabet2.push(alphabet_str.charCodeAt(i));
        }
        var encoded_block_sizes = [0, 2, 3, 5, 6, 7, 9, 10, 11];
        var alphabet_size = alphabet2.length;
        var full_block_size = 8;
        var full_encoded_block_size = 11;
        var UINT64_MAX = new JSBigInt(2).pow(64);
        function hextobin2(hex) {
          if (hex.length % 2 !== 0) throw "Hex string has invalid length!";
          var res = new Uint8Array(hex.length / 2);
          for (var i2 = 0; i2 < hex.length / 2; ++i2) {
            res[i2] = parseInt(hex.slice(i2 * 2, i2 * 2 + 2), 16);
          }
          return res;
        }
        function bintohex(bin) {
          var out = [];
          for (var i2 = 0; i2 < bin.length; ++i2) {
            out.push(("0" + bin[i2].toString(16)).slice(-2));
          }
          return out.join("");
        }
        function strtobin(str) {
          var res = new Uint8Array(str.length);
          for (var i2 = 0; i2 < str.length; i2++) {
            res[i2] = str.charCodeAt(i2);
          }
          return res;
        }
        function bintostr(bin) {
          var out = [];
          for (var i2 = 0; i2 < bin.length; i2++) {
            out.push(String.fromCharCode(bin[i2]));
          }
          return out.join("");
        }
        function uint8_be_to_64(data) {
          if (data.length < 1 || data.length > 8) {
            throw "Invalid input length";
          }
          var res = JSBigInt.ZERO;
          var twopow8 = new JSBigInt(2).pow(8);
          var i2 = 0;
          switch (9 - data.length) {
            case 1:
              res = res.add(data[i2++]);
            case 2:
              res = res.multiply(twopow8).add(data[i2++]);
            case 3:
              res = res.multiply(twopow8).add(data[i2++]);
            case 4:
              res = res.multiply(twopow8).add(data[i2++]);
            case 5:
              res = res.multiply(twopow8).add(data[i2++]);
            case 6:
              res = res.multiply(twopow8).add(data[i2++]);
            case 7:
              res = res.multiply(twopow8).add(data[i2++]);
            case 8:
              res = res.multiply(twopow8).add(data[i2++]);
              break;
            default:
              throw "Impossible condition";
          }
          return res;
        }
        function uint64_to_8be(num, size) {
          var res = new Uint8Array(size);
          if (size < 1 || size > 8) {
            throw "Invalid input length";
          }
          var twopow8 = new JSBigInt(2).pow(8);
          for (var i2 = size - 1; i2 >= 0; i2--) {
            res[i2] = num.remainder(twopow8).toJSValue();
            num = num.divide(twopow8);
          }
          return res;
        }
        b58.encode_block = function(data, buf, index) {
          if (data.length < 1 || data.length > full_encoded_block_size) {
            throw "Invalid block length: " + data.length;
          }
          var num = uint8_be_to_64(data);
          var i2 = encoded_block_sizes[data.length] - 1;
          while (num.compare(0) === 1) {
            var div = num.divRem(alphabet_size);
            var remainder = div[1];
            num = div[0];
            buf[index + i2] = alphabet2[remainder.toJSValue()];
            i2--;
          }
          return buf;
        };
        b58.encode = function(hex) {
          var data = hextobin2(hex);
          if (data.length === 0) {
            return "";
          }
          var full_block_count = Math.floor(data.length / full_block_size);
          var last_block_size = data.length % full_block_size;
          var res_size = full_block_count * full_encoded_block_size + encoded_block_sizes[last_block_size];
          var res = new Uint8Array(res_size);
          var i2;
          for (i2 = 0; i2 < res_size; ++i2) {
            res[i2] = alphabet2[0];
          }
          for (i2 = 0; i2 < full_block_count; i2++) {
            res = b58.encode_block(data.subarray(i2 * full_block_size, i2 * full_block_size + full_block_size), res, i2 * full_encoded_block_size);
          }
          if (last_block_size > 0) {
            res = b58.encode_block(data.subarray(full_block_count * full_block_size, full_block_count * full_block_size + last_block_size), res, full_block_count * full_encoded_block_size);
          }
          return bintostr(res);
        };
        b58.decode_block = function(data, buf, index) {
          if (data.length < 1 || data.length > full_encoded_block_size) {
            throw "Invalid block length: " + data.length;
          }
          var res_size = encoded_block_sizes.indexOf(data.length);
          if (res_size <= 0) {
            throw "Invalid block size";
          }
          var res_num = new JSBigInt(0);
          var order = new JSBigInt(1);
          for (var i2 = data.length - 1; i2 >= 0; i2--) {
            var digit = alphabet2.indexOf(data[i2]);
            if (digit < 0) {
              throw "Invalid symbol";
            }
            var product = order.multiply(digit).add(res_num);
            if (product.compare(UINT64_MAX) === 1) {
              throw "Overflow";
            }
            res_num = product;
            order = order.multiply(alphabet_size);
          }
          if (res_size < full_block_size && new JSBigInt(2).pow(8 * res_size).compare(res_num) <= 0) {
            throw "Overflow 2";
          }
          buf.set(uint64_to_8be(res_num, res_size), index);
          return buf;
        };
        b58.decode = function(enc) {
          enc = strtobin(enc);
          if (enc.length === 0) {
            return "";
          }
          var full_block_count = Math.floor(enc.length / full_encoded_block_size);
          var last_block_size = enc.length % full_encoded_block_size;
          var last_block_decoded_size = encoded_block_sizes.indexOf(last_block_size);
          if (last_block_decoded_size < 0) {
            throw "Invalid encoded length";
          }
          var data_size = full_block_count * full_block_size + last_block_decoded_size;
          var data = new Uint8Array(data_size);
          for (var i2 = 0; i2 < full_block_count; i2++) {
            data = b58.decode_block(enc.subarray(i2 * full_encoded_block_size, i2 * full_encoded_block_size + full_encoded_block_size), data, i2 * full_block_size);
          }
          if (last_block_size > 0) {
            data = b58.decode_block(enc.subarray(full_block_count * full_encoded_block_size, full_block_count * full_encoded_block_size + last_block_size), data, full_block_count * full_block_size);
          }
          return bintohex(data);
        };
        return b58;
      }();
      module.exports = cnBase582;
    }
  });

  // node_modules/base-x/src/index.js
  var require_src = __commonJS({
    "node_modules/base-x/src/index.js"(exports, module) {
      "use strict";
      function base(ALPHABET3) {
        if (ALPHABET3.length >= 255) {
          throw new TypeError("Alphabet too long");
        }
        var BASE_MAP = new Uint8Array(256);
        for (var j = 0; j < BASE_MAP.length; j++) {
          BASE_MAP[j] = 255;
        }
        for (var i = 0; i < ALPHABET3.length; i++) {
          var x = ALPHABET3.charAt(i);
          var xc = x.charCodeAt(0);
          if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + " is ambiguous");
          }
          BASE_MAP[xc] = i;
        }
        var BASE2 = ALPHABET3.length;
        var LEADER = ALPHABET3.charAt(0);
        var FACTOR = Math.log(BASE2) / Math.log(256);
        var iFACTOR = Math.log(256) / Math.log(BASE2);
        function encode(source) {
          if (source instanceof Uint8Array) {
          } else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
          } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
          }
          if (!(source instanceof Uint8Array)) {
            throw new TypeError("Expected Uint8Array");
          }
          if (source.length === 0) {
            return "";
          }
          var zeroes = 0;
          var length = 0;
          var pbegin = 0;
          var pend = source.length;
          while (pbegin !== pend && source[pbegin] === 0) {
            pbegin++;
            zeroes++;
          }
          var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
          var b58 = new Uint8Array(size);
          while (pbegin !== pend) {
            var carry = source[pbegin];
            var i2 = 0;
            for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
              carry += 256 * b58[it1] >>> 0;
              b58[it1] = carry % BASE2 >>> 0;
              carry = carry / BASE2 >>> 0;
            }
            if (carry !== 0) {
              throw new Error("Non-zero carry");
            }
            length = i2;
            pbegin++;
          }
          var it2 = size - length;
          while (it2 !== size && b58[it2] === 0) {
            it2++;
          }
          var str = LEADER.repeat(zeroes);
          for (; it2 < size; ++it2) {
            str += ALPHABET3.charAt(b58[it2]);
          }
          return str;
        }
        function decodeUnsafe(source) {
          if (typeof source !== "string") {
            throw new TypeError("Expected String");
          }
          if (source.length === 0) {
            return new Uint8Array();
          }
          var psz = 0;
          var zeroes = 0;
          var length = 0;
          while (source[psz] === LEADER) {
            zeroes++;
            psz++;
          }
          var size = (source.length - psz) * FACTOR + 1 >>> 0;
          var b256 = new Uint8Array(size);
          while (source[psz]) {
            var carry = BASE_MAP[source.charCodeAt(psz)];
            if (carry === 255) {
              return;
            }
            var i2 = 0;
            for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
              carry += BASE2 * b256[it3] >>> 0;
              b256[it3] = carry % 256 >>> 0;
              carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
              throw new Error("Non-zero carry");
            }
            length = i2;
            psz++;
          }
          var it4 = size - length;
          while (it4 !== size && b256[it4] === 0) {
            it4++;
          }
          var vch = new Uint8Array(zeroes + (size - it4));
          var j2 = zeroes;
          while (it4 !== size) {
            vch[j2++] = b256[it4++];
          }
          return vch;
        }
        function decode(string) {
          var buffer = decodeUnsafe(string);
          if (buffer) {
            return buffer;
          }
          throw new Error("Non-base" + BASE2 + " character");
        }
        return {
          encode,
          decodeUnsafe,
          decode
        };
      }
      module.exports = base;
    }
  });

  // node_modules/lodash.isequal/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.isequal/index.js"(exports, module) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var asyncTag = "[object AsyncFunction]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var nullTag = "[object Null]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var proxyTag = "[object Proxy]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var undefinedTag = "[object Undefined]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer3 = moduleExports ? root.Buffer : void 0;
      var Symbol2 = root.Symbol;
      var Uint8Array2 = root.Uint8Array;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var splice = arrayProto.splice;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var nativeIsBuffer = Buffer3 ? Buffer3.isBuffer : void 0;
      var nativeKeys = overArg(Object.keys, Object);
      var DataView2 = getNative(root, "DataView");
      var Map = getNative(root, "Map");
      var Promise2 = getNative(root, "Promise");
      var Set = getNative(root, "Set");
      var WeakMap = getNative(root, "WeakMap");
      var nativeCreate = getNative(Object, "create");
      var dataViewCtorString = toSource(DataView2);
      var mapCtorString = toSource(Map);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set);
      var weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var stacked = stack.get(array);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var stacked = stack.get(object);
        if (stacked && stack.get(other)) {
          return stacked == other;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
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
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getTag = baseGetTag;
      if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArguments = baseIsArguments(/* @__PURE__ */ function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      function isEqual2(value, other) {
        return baseIsEqual(value, other);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      module.exports = isEqual2;
    }
  });

  // src/crypto/base32.ts
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  var b32encode = function(s) {
    const parts = [];
    let quanta = Math.floor(s.length / 5);
    const leftover = s.length % 5;
    if (leftover != 0) {
      for (let i = 0; i < 5 - leftover; i++) {
        s += "\0";
      }
      quanta += 1;
    }
    for (let i = 0; i < quanta; i++) {
      parts.push(alphabet.charAt(s.charCodeAt(i * 5) >> 3));
      parts.push(alphabet.charAt((s.charCodeAt(i * 5) & 7) << 2 | s.charCodeAt(i * 5 + 1) >> 6));
      parts.push(alphabet.charAt((s.charCodeAt(i * 5 + 1) & 63) >> 1));
      parts.push(alphabet.charAt((s.charCodeAt(i * 5 + 1) & 1) << 4 | s.charCodeAt(i * 5 + 2) >> 4));
      parts.push(alphabet.charAt((s.charCodeAt(i * 5 + 2) & 15) << 1 | s.charCodeAt(i * 5 + 3) >> 7));
      parts.push(alphabet.charAt((s.charCodeAt(i * 5 + 3) & 127) >> 2));
      parts.push(alphabet.charAt((s.charCodeAt(i * 5 + 3) & 3) << 3 | s.charCodeAt(i * 5 + 4) >> 5));
      parts.push(alphabet.charAt(s.charCodeAt(i * 5 + 4) & 31));
    }
    let replace = 0;
    if (leftover == 1) replace = 6;
    else if (leftover == 2) replace = 4;
    else if (leftover == 3) replace = 3;
    else if (leftover == 4) replace = 1;
    for (let i = 0; i < replace; i++) parts.pop();
    for (let i = 0; i < replace; i++) parts.push("=");
    return parts.join("");
  };
  var b32decode = function(s) {
    const r = new ArrayBuffer(s.length * 5 / 8);
    const b = new Uint8Array(r);
    for (let j = 0; j < s.length / 8; j++) {
      const v = [0, 0, 0, 0, 0, 0, 0, 0];
      for (let i2 = 0; i2 < 8; ++i2) {
        v[i2] = alphabet.indexOf(s[j * 8 + i2]);
      }
      const i = 0;
      b[j * 5 + 0] = v[i + 0] << 3 | v[i + 1] >> 2;
      b[j * 5 + 1] = (v[i + 1] & 3) << 6 | v[i + 2] << 1 | v[i + 3] >> 4;
      b[j * 5 + 2] = (v[i + 3] & 15) << 4 | v[i + 4] >> 1;
      b[j * 5 + 3] = (v[i + 4] & 1) << 7 | v[i + 5] << 2 | v[i + 6] >> 3;
      b[j * 5 + 4] = (v[i + 6] & 7) << 5 | v[i + 7];
    }
    return b;
  };
  var base32_default = {
    b32decode,
    b32encode
  };

  // src/crypto/base58.ts
  var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var ALPHABET_MAP = {};
  for (let i = 0; i < ALPHABET.length; ++i) {
    ALPHABET_MAP[ALPHABET.charAt(i)] = i;
  }
  var BASE = ALPHABET.length;
  var base58_default = {
    decode: function(string) {
      if (string.length === 0) return [];
      var i, j, bytes = [0];
      for (i = 0; i < string.length; ++i) {
        var c = string[i];
        if (!(c in ALPHABET_MAP)) throw new Error("Non-base58 character");
        for (j = 0; j < bytes.length; ++j) bytes[j] *= BASE;
        bytes[0] += ALPHABET_MAP[c];
        var carry = 0;
        for (j = 0; j < bytes.length; ++j) {
          bytes[j] += carry;
          carry = bytes[j] >> 8;
          bytes[j] &= 255;
        }
        while (carry) {
          bytes.push(carry & 255);
          carry >>= 8;
        }
      }
      for (i = 0; string[i] === "1" && i < string.length - 1; ++i) {
        bytes.push(0);
      }
      return bytes.reverse();
    }
  };

  // src/crypto/utils.ts
  var jsSHA = require_sha();
  var sha512256 = require_sha512().sha512_256;
  var Blake256 = require_blake256();
  var keccak256 = require_sha3()["keccak256"];
  var Blake2B = require_blake2b();
  function numberToHex(number, length) {
    var hex = number.toString(16);
    if (hex.length % 2 === 1) {
      hex = "0" + hex;
    }
    return hex.padStart(length, "0");
  }
  function isHexChar(c) {
    if (c >= "A" && c <= "F" || c >= "a" && c <= "f" || c >= "0" && c <= "9") {
      return 1;
    }
    return 0;
  }
  function hexChar2byte(c) {
    var d = 0;
    if (c >= "A" && c <= "F") {
      d = c.charCodeAt(0) - "A".charCodeAt(0) + 10;
    } else if (c >= "a" && c <= "f") {
      d = c.charCodeAt(0) - "a".charCodeAt(0) + 10;
    } else if (c >= "0" && c <= "9") {
      d = c.charCodeAt(0) - "0".charCodeAt(0);
    }
    return d;
  }
  function byte2hexStr(byte) {
    var hexByteMap = "0123456789ABCDEF";
    var str = "";
    str += hexByteMap.charAt(byte >> 4);
    str += hexByteMap.charAt(byte & 15);
    return str;
  }
  function byteArray2hexStr(byteArray) {
    let str = "";
    for (var i = 0; i < byteArray.length - 1; i++) {
      str += byte2hexStr(byteArray[i]);
    }
    str += byte2hexStr(byteArray[i]);
    return str;
  }
  function hexStr2byteArray(str) {
    const byteArray = Array();
    let d = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    for (i = 0; i < str.length; i++) {
      const c = str.charAt(i);
      if (isHexChar(c)) {
        d <<= 4;
        d += hexChar2byte(c);
        j++;
        if (0 === j % 2) {
          byteArray[k++] = d;
          d = 0;
        }
      }
    }
    return byteArray;
  }
  var utils_default = {
    numberToHex,
    toHex: function(arrayOfBytes) {
      let hex = "";
      for (let i = 0; i < arrayOfBytes.length; i++) {
        hex += numberToHex(arrayOfBytes[i]);
      }
      return hex;
    },
    sha256: function(payload, format = "HEX") {
      const sha = new jsSHA("SHA-256", format);
      sha.update(payload);
      return sha.getHash(format);
    },
    sha256x2: function(buffer, format = "HEX") {
      return this.sha256(this.sha256(buffer, format), format);
    },
    sha256Checksum: function(payload) {
      return this.sha256(this.sha256(payload)).substr(0, 8);
    },
    sha512_256: function(payload, format = "HEX") {
      const hash = sha512256.create();
      hash.update(Buffer.from(payload, format));
      return hash.hex().toUpperCase();
    },
    blake256: function(hexString) {
      return new Blake256().update(hexString, "hex").digest("hex");
    },
    blake256Checksum: function(payload) {
      return this.blake256(this.blake256(payload)).substr(0, 8);
    },
    blake2b: function(hexString, outlen) {
      return new Blake2B(outlen).update(Buffer.from(hexString, "hex")).digest("hex");
    },
    keccak256: function(hexString) {
      return keccak256(hexString);
    },
    keccak256Checksum: function(payload) {
      return keccak256(payload).toString().substr(0, 8);
    },
    blake2b256: function(hexString) {
      return new Blake2B(32).update(Buffer.from(hexString, "hex"), 32).digest("hex");
    },
    base58: base58_default.decode,
    byteArray2hexStr,
    hexStr2byteArray,
    base32: base32_default
  };

  // src/helpers.ts
  function getAddress(address) {
    return typeof address === "string" ? address : address.address;
  }

  // src/validators/algorand_validator.ts
  var ALGORAND_CHECKSUM_BYTE_LENGTH = 4;
  var ALGORAND_ADDRESS_LENGTH = 58;
  function verifyChecksum(address) {
    if (address.length !== ALGORAND_ADDRESS_LENGTH) {
      return false;
    } else {
      const decoded = utils_default.base32.b32decode(address);
      const addr = decoded.slice(0, decoded.length - ALGORAND_CHECKSUM_BYTE_LENGTH);
      const checksum = utils_default.byteArray2hexStr(decoded.slice(-4));
      const code = utils_default.sha512_256(utils_default.byteArray2hexStr(addr)).substr(-ALGORAND_CHECKSUM_BYTE_LENGTH * 2);
      return code === checksum;
    }
  }
  var algorand_validator_default = {
    isValidAddress: function(address) {
      return verifyChecksum(getAddress(address));
    }
  };

  // src/validators/bch_validator.ts
  var import_bech32 = __toESM(require_bech32());

  // src/validators/bitcoin_validator.ts
  var import_segwit_addr = __toESM(require_segwit_addr());
  function getDecoded(address) {
    try {
      return base58_default.decode(address);
    } catch (e) {
      return null;
    }
  }
  function getChecksum(hashFunction, payload) {
    switch (hashFunction) {
      case "blake256keccak256":
        var blake = utils_default.blake2b256(payload);
        return utils_default.keccak256Checksum(Buffer.from(blake, "hex"));
      case "blake256":
        return utils_default.blake256Checksum(payload);
      case "keccak256":
        return utils_default.keccak256Checksum(payload);
      case "sha256":
      default:
        return utils_default.sha256Checksum(payload);
    }
  }
  function getAddressType(address, opts) {
    const expectedLength = opts.expectedLength || 25;
    const hashFunction = opts.hashFunction || "sha256";
    const decoded = getDecoded(address);
    if (decoded) {
      const length = decoded.length;
      if (length !== expectedLength) {
        return null;
      }
      if (opts.regex) {
        if (!opts.regex.test(address)) {
          return false;
        }
      }
      const checksum = utils_default.toHex(decoded.slice(length - 4, length)), body = utils_default.toHex(decoded.slice(0, length - 4)), goodChecksum = getChecksum(hashFunction, body);
      return checksum === goodChecksum ? utils_default.toHex(decoded.slice(0, expectedLength - 24)) : null;
    }
    return null;
  }
  function isValidP2PKHandP2SHAddress(address, opts, networkType = "mainnet" /* MainNet */) {
    let correctAddressTypes;
    const addressType = getAddressType(address, opts);
    if (addressType) {
      if (networkType === "mainnet" /* MainNet */ || networkType === "testnet" /* TestNet */) {
        correctAddressTypes = opts.addressTypes[networkType];
      } else if (opts.addressTypes) {
        correctAddressTypes = opts.addressTypes.mainnet.concat(opts.addressTypes.testnet);
      } else {
        return false;
      }
      return correctAddressTypes.indexOf(addressType) >= 0;
    }
    return false;
  }
  var DefaultBTCValidatorOpts = {
    addressTypes: { mainnet: ["00", "05"], testnet: ["6f", "c4", "3c", "26"] },
    bech32Hrp: { mainnet: ["bc"], testnet: ["tb"] }
  };
  var bitcoin_validator_default = (networkType = "mainnet" /* MainNet */, opts) => ({
    isValidAddress(address) {
      const addr = getAddress(address);
      const _opts = { ...DefaultBTCValidatorOpts, ...opts };
      return isValidP2PKHandP2SHAddress(addr, _opts, networkType) || import_segwit_addr.default.isValidAddress(addr, networkType, _opts);
    }
  });

  // src/validators/bch_validator.ts
  function validateAddress(address, networkType, opts) {
    const regexp4 = new RegExp(opts.regexp);
    let raw_address;
    const res = address.split(":");
    if (res.length === 1) {
      raw_address = address;
    } else {
      if (res[0] !== "bitcoincash") {
        return false;
      }
      raw_address = res[1];
    }
    if (!regexp4.test(raw_address)) {
      return false;
    }
    if (raw_address.toLowerCase() != raw_address && raw_address.toUpperCase() != raw_address) {
      return false;
    }
    const decoded = utils_default.base32.b32decode(raw_address);
    const prefix2 = networkType === "mainnet" /* MainNet */ ? "bitcoincash" : "bchtest";
    try {
      if (import_bech32.default.verifyChecksum(prefix2, decoded, import_bech32.default.encodings.BECH32)) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }
  var DefaultBCHValidatorOpts = {
    addressTypes: { mainnet: ["00", "05"], testnet: ["6f", "c4", "3c", "26"] },
    bech32Hrp: { mainnet: ["bc"], testnet: ["tb"] },
    regexp: /^[qQpP][0-9a-zA-Z]{41}$/
  };
  var bch_validator_default = (networkType = "mainnet" /* MainNet */, opts) => ({
    isValidAddress: function(address) {
      const addr = getAddress(address);
      const _opts = { ...DefaultBCHValidatorOpts, ...opts };
      return validateAddress(addr, networkType, _opts) || bitcoin_validator_default(networkType, _opts).isValidAddress(address);
    }
  });

  // src/validators/cardano_validator.ts
  var import_cbor_js = __toESM(require_cbor());

  // node_modules/crc/mjs/calculators/crc1.js
  var crc1 = (current, previous = 0) => {
    let crc = ~~previous;
    let accum = 0;
    for (let index = 0; index < current.length; index++) {
      accum += current[index];
    }
    crc += accum % 256;
    return crc % 256;
  };
  var crc1_default = crc1;

  // node_modules/crc/mjs/create_buffer.js
  var import_buffer = __toESM(require_buffer(), 1);
  var createBuffer = (value, encoding) => import_buffer.Buffer.from(value, encoding);
  var create_buffer_default = createBuffer;

  // node_modules/crc/mjs/define_crc.js
  function defineCrc(model, calculator) {
    const result = (value, previous) => calculator(create_buffer_default(value), previous) >>> 0;
    result.signed = (value, previous) => calculator(create_buffer_default(value), previous);
    result.unsigned = result;
    result.model = model;
    return result;
  }

  // node_modules/crc/mjs/crc1.js
  var crc1_default2 = defineCrc("crc1", crc1_default);

  // node_modules/crc/mjs/calculators/crc8.js
  var TABLE = [
    0,
    7,
    14,
    9,
    28,
    27,
    18,
    21,
    56,
    63,
    54,
    49,
    36,
    35,
    42,
    45,
    112,
    119,
    126,
    121,
    108,
    107,
    98,
    101,
    72,
    79,
    70,
    65,
    84,
    83,
    90,
    93,
    224,
    231,
    238,
    233,
    252,
    251,
    242,
    245,
    216,
    223,
    214,
    209,
    196,
    195,
    202,
    205,
    144,
    151,
    158,
    153,
    140,
    139,
    130,
    133,
    168,
    175,
    166,
    161,
    180,
    179,
    186,
    189,
    199,
    192,
    201,
    206,
    219,
    220,
    213,
    210,
    255,
    248,
    241,
    246,
    227,
    228,
    237,
    234,
    183,
    176,
    185,
    190,
    171,
    172,
    165,
    162,
    143,
    136,
    129,
    134,
    147,
    148,
    157,
    154,
    39,
    32,
    41,
    46,
    59,
    60,
    53,
    50,
    31,
    24,
    17,
    22,
    3,
    4,
    13,
    10,
    87,
    80,
    89,
    94,
    75,
    76,
    69,
    66,
    111,
    104,
    97,
    102,
    115,
    116,
    125,
    122,
    137,
    142,
    135,
    128,
    149,
    146,
    155,
    156,
    177,
    182,
    191,
    184,
    173,
    170,
    163,
    164,
    249,
    254,
    247,
    240,
    229,
    226,
    235,
    236,
    193,
    198,
    207,
    200,
    221,
    218,
    211,
    212,
    105,
    110,
    103,
    96,
    117,
    114,
    123,
    124,
    81,
    86,
    95,
    88,
    77,
    74,
    67,
    68,
    25,
    30,
    23,
    16,
    5,
    2,
    11,
    12,
    33,
    38,
    47,
    40,
    61,
    58,
    51,
    52,
    78,
    73,
    64,
    71,
    82,
    85,
    92,
    91,
    118,
    113,
    120,
    127,
    106,
    109,
    100,
    99,
    62,
    57,
    48,
    55,
    34,
    37,
    44,
    43,
    6,
    1,
    8,
    15,
    26,
    29,
    20,
    19,
    174,
    169,
    160,
    167,
    178,
    181,
    188,
    187,
    150,
    145,
    152,
    159,
    138,
    141,
    132,
    131,
    222,
    217,
    208,
    215,
    194,
    197,
    204,
    203,
    230,
    225,
    232,
    239,
    250,
    253,
    244,
    243
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE = new Int32Array(TABLE);
  }
  var crc8 = (current, previous = 0) => {
    let crc = ~~previous;
    for (let index = 0; index < current.length; index++) {
      crc = TABLE[(crc ^ current[index]) & 255] & 255;
    }
    return crc;
  };
  var crc8_default = crc8;

  // node_modules/crc/mjs/crc8.js
  var crc8_default2 = defineCrc("crc-8", crc8_default);

  // node_modules/crc/mjs/calculators/crc81wire.js
  var TABLE2 = [
    0,
    94,
    188,
    226,
    97,
    63,
    221,
    131,
    194,
    156,
    126,
    32,
    163,
    253,
    31,
    65,
    157,
    195,
    33,
    127,
    252,
    162,
    64,
    30,
    95,
    1,
    227,
    189,
    62,
    96,
    130,
    220,
    35,
    125,
    159,
    193,
    66,
    28,
    254,
    160,
    225,
    191,
    93,
    3,
    128,
    222,
    60,
    98,
    190,
    224,
    2,
    92,
    223,
    129,
    99,
    61,
    124,
    34,
    192,
    158,
    29,
    67,
    161,
    255,
    70,
    24,
    250,
    164,
    39,
    121,
    155,
    197,
    132,
    218,
    56,
    102,
    229,
    187,
    89,
    7,
    219,
    133,
    103,
    57,
    186,
    228,
    6,
    88,
    25,
    71,
    165,
    251,
    120,
    38,
    196,
    154,
    101,
    59,
    217,
    135,
    4,
    90,
    184,
    230,
    167,
    249,
    27,
    69,
    198,
    152,
    122,
    36,
    248,
    166,
    68,
    26,
    153,
    199,
    37,
    123,
    58,
    100,
    134,
    216,
    91,
    5,
    231,
    185,
    140,
    210,
    48,
    110,
    237,
    179,
    81,
    15,
    78,
    16,
    242,
    172,
    47,
    113,
    147,
    205,
    17,
    79,
    173,
    243,
    112,
    46,
    204,
    146,
    211,
    141,
    111,
    49,
    178,
    236,
    14,
    80,
    175,
    241,
    19,
    77,
    206,
    144,
    114,
    44,
    109,
    51,
    209,
    143,
    12,
    82,
    176,
    238,
    50,
    108,
    142,
    208,
    83,
    13,
    239,
    177,
    240,
    174,
    76,
    18,
    145,
    207,
    45,
    115,
    202,
    148,
    118,
    40,
    171,
    245,
    23,
    73,
    8,
    86,
    180,
    234,
    105,
    55,
    213,
    139,
    87,
    9,
    235,
    181,
    54,
    104,
    138,
    212,
    149,
    203,
    41,
    119,
    244,
    170,
    72,
    22,
    233,
    183,
    85,
    11,
    136,
    214,
    52,
    106,
    43,
    117,
    151,
    201,
    74,
    20,
    246,
    168,
    116,
    42,
    200,
    150,
    21,
    75,
    169,
    247,
    182,
    232,
    10,
    84,
    215,
    137,
    107,
    53
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE2 = new Int32Array(TABLE2);
  }
  var crc81wire = (current, previous = 0) => {
    let crc = ~~previous;
    for (let index = 0; index < current.length; index++) {
      crc = TABLE2[(crc ^ current[index]) & 255] & 255;
    }
    return crc;
  };
  var crc81wire_default = crc81wire;

  // node_modules/crc/mjs/crc81wire.js
  var crc81wire_default2 = defineCrc("dallas-1-wire", crc81wire_default);

  // node_modules/crc/mjs/calculators/crc8dvbs2.js
  var TABLE3 = [
    0,
    213,
    127,
    170,
    254,
    43,
    129,
    84,
    41,
    252,
    86,
    131,
    215,
    2,
    168,
    125,
    82,
    135,
    45,
    248,
    172,
    121,
    211,
    6,
    123,
    174,
    4,
    209,
    133,
    80,
    250,
    47,
    164,
    113,
    219,
    14,
    90,
    143,
    37,
    240,
    141,
    88,
    242,
    39,
    115,
    166,
    12,
    217,
    246,
    35,
    137,
    92,
    8,
    221,
    119,
    162,
    223,
    10,
    160,
    117,
    33,
    244,
    94,
    139,
    157,
    72,
    226,
    55,
    99,
    182,
    28,
    201,
    180,
    97,
    203,
    30,
    74,
    159,
    53,
    224,
    207,
    26,
    176,
    101,
    49,
    228,
    78,
    155,
    230,
    51,
    153,
    76,
    24,
    205,
    103,
    178,
    57,
    236,
    70,
    147,
    199,
    18,
    184,
    109,
    16,
    197,
    111,
    186,
    238,
    59,
    145,
    68,
    107,
    190,
    20,
    193,
    149,
    64,
    234,
    63,
    66,
    151,
    61,
    232,
    188,
    105,
    195,
    22,
    239,
    58,
    144,
    69,
    17,
    196,
    110,
    187,
    198,
    19,
    185,
    108,
    56,
    237,
    71,
    146,
    189,
    104,
    194,
    23,
    67,
    150,
    60,
    233,
    148,
    65,
    235,
    62,
    106,
    191,
    21,
    192,
    75,
    158,
    52,
    225,
    181,
    96,
    202,
    31,
    98,
    183,
    29,
    200,
    156,
    73,
    227,
    54,
    25,
    204,
    102,
    179,
    231,
    50,
    152,
    77,
    48,
    229,
    79,
    154,
    206,
    27,
    177,
    100,
    114,
    167,
    13,
    216,
    140,
    89,
    243,
    38,
    91,
    142,
    36,
    241,
    165,
    112,
    218,
    15,
    32,
    245,
    95,
    138,
    222,
    11,
    161,
    116,
    9,
    220,
    118,
    163,
    247,
    34,
    136,
    93,
    214,
    3,
    169,
    124,
    40,
    253,
    87,
    130,
    255,
    42,
    128,
    85,
    1,
    212,
    126,
    171,
    132,
    81,
    251,
    46,
    122,
    175,
    5,
    208,
    173,
    120,
    210,
    7,
    83,
    134,
    44,
    249
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE3 = new Int32Array(TABLE3);
  }
  var crc8dvbs2 = (current, previous = 0) => {
    let crc = ~~previous;
    for (let index = 0; index < current.length; index++) {
      crc = TABLE3[(crc ^ current[index]) & 255] & 255;
    }
    return crc;
  };
  var crc8dvbs2_default = crc8dvbs2;

  // node_modules/crc/mjs/crc8dvbs2.js
  var crc8dvbs2_default2 = defineCrc("crc-8-dvbs2", crc8dvbs2_default);

  // node_modules/crc/mjs/calculators/crc16.js
  var TABLE4 = [
    0,
    49345,
    49537,
    320,
    49921,
    960,
    640,
    49729,
    50689,
    1728,
    1920,
    51009,
    1280,
    50625,
    50305,
    1088,
    52225,
    3264,
    3456,
    52545,
    3840,
    53185,
    52865,
    3648,
    2560,
    51905,
    52097,
    2880,
    51457,
    2496,
    2176,
    51265,
    55297,
    6336,
    6528,
    55617,
    6912,
    56257,
    55937,
    6720,
    7680,
    57025,
    57217,
    8e3,
    56577,
    7616,
    7296,
    56385,
    5120,
    54465,
    54657,
    5440,
    55041,
    6080,
    5760,
    54849,
    53761,
    4800,
    4992,
    54081,
    4352,
    53697,
    53377,
    4160,
    61441,
    12480,
    12672,
    61761,
    13056,
    62401,
    62081,
    12864,
    13824,
    63169,
    63361,
    14144,
    62721,
    13760,
    13440,
    62529,
    15360,
    64705,
    64897,
    15680,
    65281,
    16320,
    16e3,
    65089,
    64001,
    15040,
    15232,
    64321,
    14592,
    63937,
    63617,
    14400,
    10240,
    59585,
    59777,
    10560,
    60161,
    11200,
    10880,
    59969,
    60929,
    11968,
    12160,
    61249,
    11520,
    60865,
    60545,
    11328,
    58369,
    9408,
    9600,
    58689,
    9984,
    59329,
    59009,
    9792,
    8704,
    58049,
    58241,
    9024,
    57601,
    8640,
    8320,
    57409,
    40961,
    24768,
    24960,
    41281,
    25344,
    41921,
    41601,
    25152,
    26112,
    42689,
    42881,
    26432,
    42241,
    26048,
    25728,
    42049,
    27648,
    44225,
    44417,
    27968,
    44801,
    28608,
    28288,
    44609,
    43521,
    27328,
    27520,
    43841,
    26880,
    43457,
    43137,
    26688,
    30720,
    47297,
    47489,
    31040,
    47873,
    31680,
    31360,
    47681,
    48641,
    32448,
    32640,
    48961,
    32e3,
    48577,
    48257,
    31808,
    46081,
    29888,
    30080,
    46401,
    30464,
    47041,
    46721,
    30272,
    29184,
    45761,
    45953,
    29504,
    45313,
    29120,
    28800,
    45121,
    20480,
    37057,
    37249,
    20800,
    37633,
    21440,
    21120,
    37441,
    38401,
    22208,
    22400,
    38721,
    21760,
    38337,
    38017,
    21568,
    39937,
    23744,
    23936,
    40257,
    24320,
    40897,
    40577,
    24128,
    23040,
    39617,
    39809,
    23360,
    39169,
    22976,
    22656,
    38977,
    34817,
    18624,
    18816,
    35137,
    19200,
    35777,
    35457,
    19008,
    19968,
    36545,
    36737,
    20288,
    36097,
    19904,
    19584,
    35905,
    17408,
    33985,
    34177,
    17728,
    34561,
    18368,
    18048,
    34369,
    33281,
    17088,
    17280,
    33601,
    16640,
    33217,
    32897,
    16448
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE4 = new Int32Array(TABLE4);
  }
  var crc16 = (current, previous = 0) => {
    let crc = ~~previous;
    for (let index = 0; index < current.length; index++) {
      crc = (TABLE4[(crc ^ current[index]) & 255] ^ crc >> 8) & 65535;
    }
    return crc;
  };
  var crc16_default = crc16;

  // node_modules/crc/mjs/crc16.js
  var crc16_default2 = defineCrc("crc-16", crc16_default);

  // node_modules/crc/mjs/calculators/crc16ccitt.js
  var TABLE5 = [
    0,
    4129,
    8258,
    12387,
    16516,
    20645,
    24774,
    28903,
    33032,
    37161,
    41290,
    45419,
    49548,
    53677,
    57806,
    61935,
    4657,
    528,
    12915,
    8786,
    21173,
    17044,
    29431,
    25302,
    37689,
    33560,
    45947,
    41818,
    54205,
    50076,
    62463,
    58334,
    9314,
    13379,
    1056,
    5121,
    25830,
    29895,
    17572,
    21637,
    42346,
    46411,
    34088,
    38153,
    58862,
    62927,
    50604,
    54669,
    13907,
    9842,
    5649,
    1584,
    30423,
    26358,
    22165,
    18100,
    46939,
    42874,
    38681,
    34616,
    63455,
    59390,
    55197,
    51132,
    18628,
    22757,
    26758,
    30887,
    2112,
    6241,
    10242,
    14371,
    51660,
    55789,
    59790,
    63919,
    35144,
    39273,
    43274,
    47403,
    23285,
    19156,
    31415,
    27286,
    6769,
    2640,
    14899,
    10770,
    56317,
    52188,
    64447,
    60318,
    39801,
    35672,
    47931,
    43802,
    27814,
    31879,
    19684,
    23749,
    11298,
    15363,
    3168,
    7233,
    60846,
    64911,
    52716,
    56781,
    44330,
    48395,
    36200,
    40265,
    32407,
    28342,
    24277,
    20212,
    15891,
    11826,
    7761,
    3696,
    65439,
    61374,
    57309,
    53244,
    48923,
    44858,
    40793,
    36728,
    37256,
    33193,
    45514,
    41451,
    53516,
    49453,
    61774,
    57711,
    4224,
    161,
    12482,
    8419,
    20484,
    16421,
    28742,
    24679,
    33721,
    37784,
    41979,
    46042,
    49981,
    54044,
    58239,
    62302,
    689,
    4752,
    8947,
    13010,
    16949,
    21012,
    25207,
    29270,
    46570,
    42443,
    38312,
    34185,
    62830,
    58703,
    54572,
    50445,
    13538,
    9411,
    5280,
    1153,
    29798,
    25671,
    21540,
    17413,
    42971,
    47098,
    34713,
    38840,
    59231,
    63358,
    50973,
    55100,
    9939,
    14066,
    1681,
    5808,
    26199,
    30326,
    17941,
    22068,
    55628,
    51565,
    63758,
    59695,
    39368,
    35305,
    47498,
    43435,
    22596,
    18533,
    30726,
    26663,
    6336,
    2273,
    14466,
    10403,
    52093,
    56156,
    60223,
    64286,
    35833,
    39896,
    43963,
    48026,
    19061,
    23124,
    27191,
    31254,
    2801,
    6864,
    10931,
    14994,
    64814,
    60687,
    56684,
    52557,
    48554,
    44427,
    40424,
    36297,
    31782,
    27655,
    23652,
    19525,
    15522,
    11395,
    7392,
    3265,
    61215,
    65342,
    53085,
    57212,
    44955,
    49082,
    36825,
    40952,
    28183,
    32310,
    20053,
    24180,
    11923,
    16050,
    3793,
    7920
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE5 = new Int32Array(TABLE5);
  }
  var crc16ccitt = (current, previous) => {
    let crc = typeof previous !== "undefined" ? ~~previous : 65535;
    for (let index = 0; index < current.length; index++) {
      crc = (TABLE5[(crc >> 8 ^ current[index]) & 255] ^ crc << 8) & 65535;
    }
    return crc;
  };
  var crc16ccitt_default = crc16ccitt;

  // node_modules/crc/mjs/crc16ccitt.js
  var crc16ccitt_default2 = defineCrc("ccitt", crc16ccitt_default);

  // node_modules/crc/mjs/calculators/crc16modbus.js
  var TABLE6 = [
    0,
    49345,
    49537,
    320,
    49921,
    960,
    640,
    49729,
    50689,
    1728,
    1920,
    51009,
    1280,
    50625,
    50305,
    1088,
    52225,
    3264,
    3456,
    52545,
    3840,
    53185,
    52865,
    3648,
    2560,
    51905,
    52097,
    2880,
    51457,
    2496,
    2176,
    51265,
    55297,
    6336,
    6528,
    55617,
    6912,
    56257,
    55937,
    6720,
    7680,
    57025,
    57217,
    8e3,
    56577,
    7616,
    7296,
    56385,
    5120,
    54465,
    54657,
    5440,
    55041,
    6080,
    5760,
    54849,
    53761,
    4800,
    4992,
    54081,
    4352,
    53697,
    53377,
    4160,
    61441,
    12480,
    12672,
    61761,
    13056,
    62401,
    62081,
    12864,
    13824,
    63169,
    63361,
    14144,
    62721,
    13760,
    13440,
    62529,
    15360,
    64705,
    64897,
    15680,
    65281,
    16320,
    16e3,
    65089,
    64001,
    15040,
    15232,
    64321,
    14592,
    63937,
    63617,
    14400,
    10240,
    59585,
    59777,
    10560,
    60161,
    11200,
    10880,
    59969,
    60929,
    11968,
    12160,
    61249,
    11520,
    60865,
    60545,
    11328,
    58369,
    9408,
    9600,
    58689,
    9984,
    59329,
    59009,
    9792,
    8704,
    58049,
    58241,
    9024,
    57601,
    8640,
    8320,
    57409,
    40961,
    24768,
    24960,
    41281,
    25344,
    41921,
    41601,
    25152,
    26112,
    42689,
    42881,
    26432,
    42241,
    26048,
    25728,
    42049,
    27648,
    44225,
    44417,
    27968,
    44801,
    28608,
    28288,
    44609,
    43521,
    27328,
    27520,
    43841,
    26880,
    43457,
    43137,
    26688,
    30720,
    47297,
    47489,
    31040,
    47873,
    31680,
    31360,
    47681,
    48641,
    32448,
    32640,
    48961,
    32e3,
    48577,
    48257,
    31808,
    46081,
    29888,
    30080,
    46401,
    30464,
    47041,
    46721,
    30272,
    29184,
    45761,
    45953,
    29504,
    45313,
    29120,
    28800,
    45121,
    20480,
    37057,
    37249,
    20800,
    37633,
    21440,
    21120,
    37441,
    38401,
    22208,
    22400,
    38721,
    21760,
    38337,
    38017,
    21568,
    39937,
    23744,
    23936,
    40257,
    24320,
    40897,
    40577,
    24128,
    23040,
    39617,
    39809,
    23360,
    39169,
    22976,
    22656,
    38977,
    34817,
    18624,
    18816,
    35137,
    19200,
    35777,
    35457,
    19008,
    19968,
    36545,
    36737,
    20288,
    36097,
    19904,
    19584,
    35905,
    17408,
    33985,
    34177,
    17728,
    34561,
    18368,
    18048,
    34369,
    33281,
    17088,
    17280,
    33601,
    16640,
    33217,
    32897,
    16448
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE6 = new Int32Array(TABLE6);
  }
  var crc16modbus = (current, previous) => {
    let crc = typeof previous !== "undefined" ? ~~previous : 65535;
    for (let index = 0; index < current.length; index++) {
      crc = (TABLE6[(crc ^ current[index]) & 255] ^ crc >> 8) & 65535;
    }
    return crc;
  };
  var crc16modbus_default = crc16modbus;

  // node_modules/crc/mjs/crc16modbus.js
  var crc16modbus_default2 = defineCrc("crc-16-modbus", crc16modbus_default);

  // node_modules/crc/mjs/calculators/crc16xmodem.js
  var crc16xmodem = (current, previous) => {
    let crc = typeof previous !== "undefined" ? ~~previous : 0;
    for (let index = 0; index < current.length; index++) {
      let code = crc >>> 8 & 255;
      code ^= current[index] & 255;
      code ^= code >>> 4;
      crc = crc << 8 & 65535;
      crc ^= code;
      code = code << 5 & 65535;
      crc ^= code;
      code = code << 7 & 65535;
      crc ^= code;
    }
    return crc;
  };
  var crc16xmodem_default = crc16xmodem;

  // node_modules/crc/mjs/crc16xmodem.js
  var crc16xmodem_default2 = defineCrc("xmodem", crc16xmodem_default);

  // node_modules/crc/mjs/calculators/crc16kermit.js
  var TABLE7 = [
    0,
    4489,
    8978,
    12955,
    17956,
    22445,
    25910,
    29887,
    35912,
    40385,
    44890,
    48851,
    51820,
    56293,
    59774,
    63735,
    4225,
    264,
    13203,
    8730,
    22181,
    18220,
    30135,
    25662,
    40137,
    36160,
    49115,
    44626,
    56045,
    52068,
    63999,
    59510,
    8450,
    12427,
    528,
    5017,
    26406,
    30383,
    17460,
    21949,
    44362,
    48323,
    36440,
    40913,
    60270,
    64231,
    51324,
    55797,
    12675,
    8202,
    4753,
    792,
    30631,
    26158,
    21685,
    17724,
    48587,
    44098,
    40665,
    36688,
    64495,
    60006,
    55549,
    51572,
    16900,
    21389,
    24854,
    28831,
    1056,
    5545,
    10034,
    14011,
    52812,
    57285,
    60766,
    64727,
    34920,
    39393,
    43898,
    47859,
    21125,
    17164,
    29079,
    24606,
    5281,
    1320,
    14259,
    9786,
    57037,
    53060,
    64991,
    60502,
    39145,
    35168,
    48123,
    43634,
    25350,
    29327,
    16404,
    20893,
    9506,
    13483,
    1584,
    6073,
    61262,
    65223,
    52316,
    56789,
    43370,
    47331,
    35448,
    39921,
    29575,
    25102,
    20629,
    16668,
    13731,
    9258,
    5809,
    1848,
    65487,
    60998,
    56541,
    52564,
    47595,
    43106,
    39673,
    35696,
    33800,
    38273,
    42778,
    46739,
    49708,
    54181,
    57662,
    61623,
    2112,
    6601,
    11090,
    15067,
    20068,
    24557,
    28022,
    31999,
    38025,
    34048,
    47003,
    42514,
    53933,
    49956,
    61887,
    57398,
    6337,
    2376,
    15315,
    10842,
    24293,
    20332,
    32247,
    27774,
    42250,
    46211,
    34328,
    38801,
    58158,
    62119,
    49212,
    53685,
    10562,
    14539,
    2640,
    7129,
    28518,
    32495,
    19572,
    24061,
    46475,
    41986,
    38553,
    34576,
    62383,
    57894,
    53437,
    49460,
    14787,
    10314,
    6865,
    2904,
    32743,
    28270,
    23797,
    19836,
    50700,
    55173,
    58654,
    62615,
    32808,
    37281,
    41786,
    45747,
    19012,
    23501,
    26966,
    30943,
    3168,
    7657,
    12146,
    16123,
    54925,
    50948,
    62879,
    58390,
    37033,
    33056,
    46011,
    41522,
    23237,
    19276,
    31191,
    26718,
    7393,
    3432,
    16371,
    11898,
    59150,
    63111,
    50204,
    54677,
    41258,
    45219,
    33336,
    37809,
    27462,
    31439,
    18516,
    23005,
    11618,
    15595,
    3696,
    8185,
    63375,
    58886,
    54429,
    50452,
    45483,
    40994,
    37561,
    33584,
    31687,
    27214,
    22741,
    18780,
    15843,
    11370,
    7921,
    3960
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE7 = new Int32Array(TABLE7);
  }
  var crc16kermit = (current, previous) => {
    let crc = typeof previous !== "undefined" ? ~~previous : 0;
    for (let index = 0; index < current.length; index++) {
      crc = (TABLE7[(crc ^ current[index]) & 255] ^ crc >> 8) & 65535;
    }
    return crc;
  };
  var crc16kermit_default = crc16kermit;

  // node_modules/crc/mjs/crc16kermit.js
  var crc16kermit_default2 = defineCrc("kermit", crc16kermit_default);

  // node_modules/crc/mjs/calculators/crc24.js
  var TABLE8 = [
    0,
    8801531,
    9098509,
    825846,
    9692897,
    1419802,
    1651692,
    10452759,
    10584377,
    2608578,
    2839604,
    11344079,
    3303384,
    11807523,
    12104405,
    4128302,
    12930697,
    4391538,
    5217156,
    13227903,
    5679208,
    13690003,
    14450021,
    5910942,
    6606768,
    14844747,
    15604413,
    6837830,
    16197969,
    7431594,
    8256604,
    16494759,
    840169,
    9084178,
    8783076,
    18463,
    10434312,
    1670131,
    1434117,
    9678590,
    11358416,
    2825259,
    2590173,
    10602790,
    4109873,
    12122826,
    11821884,
    3289031,
    13213536,
    5231515,
    4409965,
    12912278,
    5929345,
    14431610,
    13675660,
    5693559,
    6823513,
    15618722,
    14863188,
    6588335,
    16513208,
    8238147,
    7417269,
    16212302,
    1680338,
    10481449,
    9664223,
    1391140,
    9061683,
    788936,
    36926,
    8838341,
    12067563,
    4091408,
    3340262,
    11844381,
    2868234,
    11372785,
    10555655,
    2579964,
    14478683,
    5939616,
    5650518,
    13661357,
    5180346,
    13190977,
    12967607,
    4428364,
    8219746,
    16457881,
    16234863,
    7468436,
    15633027,
    6866552,
    6578062,
    14816117,
    1405499,
    9649856,
    10463030,
    1698765,
    8819930,
    55329,
    803287,
    9047340,
    11858690,
    3325945,
    4072975,
    12086004,
    2561507,
    10574104,
    11387118,
    2853909,
    13647026,
    5664841,
    5958079,
    14460228,
    4446803,
    12949160,
    13176670,
    5194661,
    7454091,
    16249200,
    16476294,
    8201341,
    14834538,
    6559633,
    6852199,
    15647388,
    3360676,
    11864927,
    12161705,
    4185682,
    10527045,
    2551230,
    2782280,
    11286707,
    9619101,
    1346150,
    1577872,
    10379115,
    73852,
    8875143,
    9172337,
    899466,
    16124205,
    7357910,
    8182816,
    16421083,
    6680524,
    14918455,
    15678145,
    6911546,
    5736468,
    13747439,
    14507289,
    5968354,
    12873461,
    4334094,
    5159928,
    13170435,
    4167245,
    12180150,
    11879232,
    3346363,
    11301036,
    2767959,
    2532769,
    10545498,
    10360692,
    1596303,
    1360505,
    9604738,
    913813,
    9157998,
    8856728,
    92259,
    16439492,
    8164415,
    7343561,
    16138546,
    6897189,
    15692510,
    14936872,
    6662099,
    5986813,
    14488838,
    13733104,
    5750795,
    13156124,
    5174247,
    4352529,
    12855018,
    2810998,
    11315341,
    10498427,
    2522496,
    12124823,
    4148844,
    3397530,
    11901793,
    9135439,
    862644,
    110658,
    8912057,
    1606574,
    10407765,
    9590435,
    1317464,
    15706879,
    6940164,
    6651890,
    14889737,
    8145950,
    16384229,
    16161043,
    7394792,
    5123014,
    13133629,
    12910283,
    4370992,
    14535975,
    5997020,
    5707818,
    13718737,
    2504095,
    10516836,
    11329682,
    2796649,
    11916158,
    3383173,
    4130419,
    12143240,
    8893606,
    129117,
    876971,
    9121104,
    1331783,
    9576124,
    10389322,
    1625009,
    14908182,
    6633453,
    6925851,
    15721184,
    7380471,
    16175372,
    16402682,
    8127489,
    4389423,
    12891860,
    13119266,
    5137369,
    13704398,
    5722165,
    6015427,
    14517560
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE8 = new Int32Array(TABLE8);
  }
  var crc24 = (current, previous) => {
    let crc = typeof previous !== "undefined" ? ~~previous : 11994318;
    for (let index = 0; index < current.length; index++) {
      crc = (TABLE8[(crc >> 16 ^ current[index]) & 255] ^ crc << 8) & 16777215;
    }
    return crc;
  };
  var crc24_default = crc24;

  // node_modules/crc/mjs/crc24.js
  var crc24_default2 = defineCrc("crc-24", crc24_default);

  // node_modules/crc/mjs/calculators/crc32.js
  var TABLE9 = [
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918e3,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE9 = new Int32Array(TABLE9);
  }
  var crc32 = (current, previous) => {
    let crc = previous === 0 ? 0 : ~~previous ^ -1;
    for (let index = 0; index < current.length; index++) {
      crc = TABLE9[(crc ^ current[index]) & 255] ^ crc >>> 8;
    }
    return crc ^ -1;
  };
  var crc32_default = crc32;

  // node_modules/crc/mjs/crc32.js
  var crc32_default2 = defineCrc("crc-32", crc32_default);

  // node_modules/crc/mjs/calculators/crc32mpeg2.js
  var TABLE10 = [
    0,
    79764919,
    159529838,
    222504665,
    319059676,
    398814059,
    445009330,
    507990021,
    638119352,
    583659535,
    797628118,
    726387553,
    890018660,
    835552979,
    1015980042,
    944750013,
    1276238704,
    1221641927,
    1167319070,
    1095957929,
    1595256236,
    1540665371,
    1452775106,
    1381403509,
    1780037320,
    1859660671,
    1671105958,
    1733955601,
    2031960084,
    2111593891,
    1889500026,
    1952343757,
    2552477408,
    2632100695,
    2443283854,
    2506133561,
    2334638140,
    2414271883,
    2191915858,
    2254759653,
    3190512472,
    3135915759,
    3081330742,
    3009969537,
    2905550212,
    2850959411,
    2762807018,
    2691435357,
    3560074640,
    3505614887,
    3719321342,
    3648080713,
    3342211916,
    3287746299,
    3467911202,
    3396681109,
    4063920168,
    4143685023,
    4223187782,
    4286162673,
    3779000052,
    3858754371,
    3904687514,
    3967668269,
    881225847,
    809987520,
    1023691545,
    969234094,
    662832811,
    591600412,
    771767749,
    717299826,
    311336399,
    374308984,
    453813921,
    533576470,
    25881363,
    88864420,
    134795389,
    214552010,
    2023205639,
    2086057648,
    1897238633,
    1976864222,
    1804852699,
    1867694188,
    1645340341,
    1724971778,
    1587496639,
    1516133128,
    1461550545,
    1406951526,
    1302016099,
    1230646740,
    1142491917,
    1087903418,
    2896545431,
    2825181984,
    2770861561,
    2716262478,
    3215044683,
    3143675388,
    3055782693,
    3001194130,
    2326604591,
    2389456536,
    2200899649,
    2280525302,
    2578013683,
    2640855108,
    2418763421,
    2498394922,
    3769900519,
    3832873040,
    3912640137,
    3992402750,
    4088425275,
    4151408268,
    4197601365,
    4277358050,
    3334271071,
    3263032808,
    3476998961,
    3422541446,
    3585640067,
    3514407732,
    3694837229,
    3640369242,
    1762451694,
    1842216281,
    1619975040,
    1682949687,
    2047383090,
    2127137669,
    1938468188,
    2001449195,
    1325665622,
    1271206113,
    1183200824,
    1111960463,
    1543535498,
    1489069629,
    1434599652,
    1363369299,
    622672798,
    568075817,
    748617968,
    677256519,
    907627842,
    853037301,
    1067152940,
    995781531,
    51762726,
    131386257,
    177728840,
    240578815,
    269590778,
    349224269,
    429104020,
    491947555,
    4046411278,
    4126034873,
    4172115296,
    4234965207,
    3794477266,
    3874110821,
    3953728444,
    4016571915,
    3609705398,
    3555108353,
    3735388376,
    3664026991,
    3290680682,
    3236090077,
    3449943556,
    3378572211,
    3174993278,
    3120533705,
    3032266256,
    2961025959,
    2923101090,
    2868635157,
    2813903052,
    2742672763,
    2604032198,
    2683796849,
    2461293480,
    2524268063,
    2284983834,
    2364738477,
    2175806836,
    2238787779,
    1569362073,
    1498123566,
    1409854455,
    1355396672,
    1317987909,
    1246755826,
    1192025387,
    1137557660,
    2072149281,
    2135122070,
    1912620623,
    1992383480,
    1753615357,
    1816598090,
    1627664531,
    1707420964,
    295390185,
    358241886,
    404320391,
    483945776,
    43990325,
    106832002,
    186451547,
    266083308,
    932423249,
    861060070,
    1041341759,
    986742920,
    613929101,
    542559546,
    756411363,
    701822548,
    3316196985,
    3244833742,
    3425377559,
    3370778784,
    3601682597,
    3530312978,
    3744426955,
    3689838204,
    3819031489,
    3881883254,
    3928223919,
    4007849240,
    4037393693,
    4100235434,
    4180117107,
    4259748804,
    2310601993,
    2373574846,
    2151335527,
    2231098320,
    2596047829,
    2659030626,
    2470359227,
    2550115596,
    2947551409,
    2876312838,
    2788305887,
    2733848168,
    3165939309,
    3094707162,
    3040238851,
    2985771188
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE10 = new Int32Array(TABLE10);
  }
  var crc32mpeg2 = (current, previous) => {
    let crc = typeof previous !== "undefined" ? ~~previous : 4294967295;
    for (let index = 0; index < current.length; index++) {
      crc = TABLE10[(crc >> 24 ^ current[index]) & 255] ^ crc << 8;
    }
    return crc;
  };
  var crc32mpeg2_default = crc32mpeg2;

  // node_modules/crc/mjs/crc32mpeg2.js
  var crc32mpeg2_default2 = defineCrc("crc-32-mpeg", crc32mpeg2_default);

  // node_modules/crc/mjs/calculators/crcjam.js
  var TABLE11 = [
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918e3,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
  ];
  if (typeof Int32Array !== "undefined") {
    TABLE11 = new Int32Array(TABLE11);
  }
  var crcjam = (current, previous = -1) => {
    let crc = previous === 0 ? 0 : ~~previous;
    for (let index = 0; index < current.length; index++) {
      crc = TABLE11[(crc ^ current[index]) & 255] ^ crc >>> 8;
    }
    return crc;
  };
  var crcjam_default = crcjam;

  // node_modules/crc/mjs/crcjam.js
  var crcjam_default2 = defineCrc("jam", crcjam_default);

  // node_modules/crc/mjs/index.js
  var mjs_default = {
    crc1: crc1_default2,
    crc8: crc8_default2,
    crc81wire: crc81wire_default2,
    crc8dvbs2: crc8dvbs2_default2,
    crc16: crc16_default2,
    crc16ccitt: crc16ccitt_default2,
    crc16modbus: crc16modbus_default2,
    crc16xmodem: crc16xmodem_default2,
    crc16kermit: crc16kermit_default2,
    crc24: crc24_default2,
    crc32: crc32_default2,
    crc32mpeg2: crc32mpeg2_default2,
    crcjam: crcjam_default2
  };

  // src/validators/bip173_validator.ts
  var import_bech322 = __toESM(require_bech32());
  var bip173_validator_default = {
    isValidAddress: function(address, networkType, opts = {}) {
      const decoded = import_bech322.default.decode(address, import_bech322.default.encodings.BECH32);
      if (!decoded) {
        return false;
      }
      const bech32Hrp = decoded.hrp;
      let correctBech32Hrps;
      if (networkType === "mainnet" || networkType === "testnet") {
        correctBech32Hrps = opts.bech32Hrp[networkType];
      } else if (opts.bech32Hrp) {
        correctBech32Hrps = opts.bech32Hrp.prod.concat(opts.bech32Hrp.testnet);
      } else {
        return false;
      }
      if (correctBech32Hrps.indexOf(bech32Hrp) === -1) {
        return false;
      }
      return true;
    }
  };

  // src/validators/cardano_validator.ts
  function getDecoded2(address) {
    try {
      const decoded = base58_default.decode(address);
      return import_cbor_js.default.decode(new Uint8Array(decoded).buffer);
    } catch (e) {
      return null;
    }
  }
  function isValidAddressV1(address) {
    const decoded = getDecoded2(address);
    if (!decoded || !Array.isArray(decoded) && decoded.length != 2) {
      return false;
    }
    const tagged = decoded[0];
    const validCrc = decoded[1];
    if (typeof validCrc != "number") {
      return false;
    }
    const crc = mjs_default.crc32(tagged);
    return crc == validCrc;
  }
  function isValidAddressShelley(address, networkType, opts) {
    return bip173_validator_default.isValidAddress(address, networkType, opts);
  }
  var cardano_validator_default = (networkType, opts) => ({
    isValidAddress(address) {
      const addr = getAddress(address);
      return isValidAddressV1(getAddress(addr)) || isValidAddressShelley(addr, networkType, opts);
    }
  });

  // src/validators/eos_validator.ts
  function isValidEOSAddress(address) {
    const regex = /^[a-z0-9.]+$/g;
    return address.search(regex) !== -1 && address.length === 12;
  }
  var eos_validator_default = {
    isValidAddress: function(address) {
      return isValidEOSAddress(getAddress(address));
    }
  };

  // src/validators/ethereum_validator.ts
  var ethereum_validator_default = {
    isValidAddress: function(address) {
      const addr = getAddress(address);
      if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) {
        return false;
      }
      if (/^0x[0-9a-f]{40}$/.test(addr) || /^0x?[0-9A-F]{40}$/.test(addr)) {
        return true;
      }
      return this.verifyChecksum(addr);
    },
    verifyChecksum: function(address) {
      address = address.replace("0x", "");
      const addressHash = utils_default.keccak256(address.toLowerCase());
      for (let i = 0; i < 40; i++) {
        if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
          return false;
        }
      }
      return true;
    }
  };

  // src/validators/monero_validator.ts
  var import_cnBase58 = __toESM(require_cnBase58());
  var addressRegTest = new RegExp(
    "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$"
  );
  var integratedAddressRegTest = new RegExp(
    "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$"
  );
  var types = {
    addressTypes: { mainnet: ["18", "42"], testnet: ["53", "63"], stagenet: ["24"] },
    iAddressTypes: { mainnet: ["19"], testnet: ["54"], stagenet: ["25"] }
  };
  function validateNetwork(decoded, networkType, addressType) {
    const addressTypes = addressType === "integrated" ? types.iAddressTypes[networkType] : types.addressTypes[networkType];
    const at = parseInt(decoded.substr(0, 2), 16).toString();
    switch (networkType) {
      case "mainnet":
        return addressTypes.indexOf(at) >= 0;
      case "testnet":
        return addressTypes.indexOf(at) >= 0;
      default:
        return false;
    }
  }
  function hextobin(hex) {
    if (hex.length % 2 !== 0) return null;
    const res = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length / 2; ++i) {
      res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    }
    return res;
  }
  var monero_validator_default = (networkType) => ({
    isValidAddress(address) {
      const addr = getAddress(address);
      let addressType = "standard";
      if (!addressRegTest.test(addr)) {
        if (integratedAddressRegTest.test(addr)) {
          addressType = "integrated";
        } else {
          return false;
        }
      }
      const decodedAddrStr = import_cnBase58.default.decode(addr);
      if (!decodedAddrStr) return false;
      if (!validateNetwork(decodedAddrStr, networkType, addressType)) return false;
      const addrChecksum = decodedAddrStr.slice(-8);
      const hashChecksum = utils_default.keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)));
      return addrChecksum === hashChecksum;
    }
  });

  // src/validators/nem_validator.ts
  var nem_validator_default = {
    isValidAddress(address) {
      const addr = getAddress(address).toString().toUpperCase().replace(/-/g, "");
      if (!address || addr.length !== 40) {
        return false;
      }
      const decoded = utils_default.toHex(utils_default.base32.b32decode(addr));
      const stepThreeChecksum = utils_default.keccak256Checksum(Buffer.from(decoded.slice(0, 42), "hex"));
      return stepThreeChecksum === decoded.slice(42);
    }
  };

  // src/validators/nano_validator.ts
  var import_base_x = __toESM(require_src());
  var ALLOWED_CHARS = "13456789abcdefghijkmnopqrstuwxyz";
  var codec = (0, import_base_x.default)(ALLOWED_CHARS);
  var regexp = new RegExp("^(xrb|nano)_([" + ALLOWED_CHARS + "]{60})$");
  var nano_validator_default = {
    isValidAddress(address) {
      const addr = getAddress(address);
      if (regexp.test(addr)) {
        return this.verifyChecksum(addr);
      }
      return false;
    },
    verifyChecksum: function(address) {
      const bytes = codec.decode(regexp.exec(address)[2]).slice(-37);
      const computedChecksum = utils_default.blake2b(utils_default.toHex(bytes.slice(0, -5)), 5);
      const checksum = utils_default.toHex(bytes.slice(-5).reverse());
      return computedChecksum === checksum;
    }
  };

  // src/validators/polkadot_validator.ts
  var addressFormats = [
    { addressLength: 3, accountIndexLength: 1, checkSumLength: 1 },
    { addressLength: 4, accountIndexLength: 2, checkSumLength: 1 },
    { addressLength: 5, accountIndexLength: 2, checkSumLength: 2 },
    { addressLength: 6, accountIndexLength: 4, checkSumLength: 1 },
    { addressLength: 7, accountIndexLength: 4, checkSumLength: 2 },
    { addressLength: 8, accountIndexLength: 4, checkSumLength: 3 },
    { addressLength: 9, accountIndexLength: 4, checkSumLength: 4 },
    { addressLength: 10, accountIndexLength: 8, checkSumLength: 1 },
    { addressLength: 11, accountIndexLength: 8, checkSumLength: 2 },
    { addressLength: 12, accountIndexLength: 8, checkSumLength: 3 },
    { addressLength: 13, accountIndexLength: 8, checkSumLength: 4 },
    { addressLength: 14, accountIndexLength: 8, checkSumLength: 5 },
    { addressLength: 15, accountIndexLength: 8, checkSumLength: 6 },
    { addressLength: 16, accountIndexLength: 8, checkSumLength: 7 },
    { addressLength: 17, accountIndexLength: 8, checkSumLength: 8 },
    { addressLength: 34, accountIndexLength: 32, checkSumLength: 2 }
  ];
  function verifyChecksum2(address) {
    try {
      const preImage = "53533538505245";
      const decoded = utils_default.base58(address);
      const addressType = utils_default.byteArray2hexStr(decoded.slice(0, 1));
      const addressAndChecksum = decoded.slice(1);
      const addressFormat = addressFormats.find((af) => af.addressLength === addressAndChecksum.length);
      if (!addressFormat) {
        throw new Error("Invalid address length");
      }
      const decodedAddress = utils_default.byteArray2hexStr(addressAndChecksum.slice(0, addressFormat.accountIndexLength));
      const checksum = utils_default.byteArray2hexStr(addressAndChecksum.slice(-addressFormat.checkSumLength));
      const calculatedHash = utils_default.blake2b(preImage + addressType + decodedAddress, 64).substr(0, addressFormat.checkSumLength * 2).toUpperCase();
      return calculatedHash == checksum;
    } catch (err) {
      return false;
    }
  }
  var polkadot_validator_default = {
    isValidAddress(address) {
      return verifyChecksum2(getAddress(address));
    }
  };

  // src/validators/ripple_validator.ts
  var import_base_x2 = __toESM(require_src());
  var ALLOWED_CHARS2 = "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz";
  var codec2 = (0, import_base_x2.default)(ALLOWED_CHARS2);
  var regexp2 = new RegExp("^r[" + ALLOWED_CHARS2 + "]{27,35}$");
  var ripple_validator_default = {
    /**
     * ripple address validation
     */
    isValidAddress: function(address) {
      const addr = getAddress(address);
      const destinationTag = address.destinationTag;
      const validAddress = regexp2.test(addr) && this.verifyChecksum(addr);
      return validAddress && this.verifyMemo(destinationTag);
    },
    verifyMemo(destinationTag) {
      return !destinationTag || /[0-9]+/.test(destinationTag);
    },
    verifyChecksum: function(address) {
      const bytes = codec2.decode(address);
      const computedChecksum = utils_default.sha256Checksum(utils_default.toHex(bytes.slice(0, -4)));
      const checksum = utils_default.toHex(bytes.slice(-4));
      return computedChecksum === checksum;
    }
  };

  // src/validators/sia_validator.ts
  var import_lodash = __toESM(require_lodash());
  function verifyChecksum3(address) {
    const checksumBytes = address.slice(0, 32 * 2);
    const check = address.slice(32 * 2, 38 * 2);
    const blakeHash = utils_default.blake2b(checksumBytes, 32).slice(0, 6 * 2);
    return !!(0, import_lodash.default)(blakeHash, check);
  }
  var sia_validator_default = {
    isValidAddress: function(address) {
      const addr = getAddress(address);
      if (addr.length !== 76) {
        return false;
      }
      return verifyChecksum3(addr);
    }
  };

  // src/validators/base58_validator.ts
  var base58_validator_default = {
    isValidAddress: function(address, opts) {
      try {
        if (!address || address.length == 0) {
          return false;
        }
        if (opts.minLength && address.length < opts.minLength) {
          return false;
        }
        if (opts.maxLength && address.length > opts.maxLength) {
          return false;
        }
        try {
          const decoded = base58_default.decode(address);
          if (!decoded || !decoded.length) {
            return false;
          }
        } catch (e) {
          return false;
        }
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  // src/validators/solana_validator.ts
  var solana_validator_default = {
    isValidAddress: function(address) {
      return base58_validator_default.isValidAddress(getAddress(address), {
        maxLength: 44,
        minLength: 43
      });
    }
  };

  // src/validators/tezos_validator.ts
  var prefix = new Uint8Array([6, 161, 159]);
  function decodeRaw(buffer) {
    let payload = buffer.slice(0, -4);
    let checksum = buffer.slice(-4);
    let newChecksum = utils_default.hexStr2byteArray(
      utils_default.sha256x2(utils_default.byteArray2hexStr(payload))
    );
    if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3])
      return;
    return payload;
  }
  var tezos_validator_default = {
    isValidAddress(address) {
      try {
        let buffer = base58_default.decode(getAddress(address));
        let payload = decodeRaw(buffer);
        if (!payload)
          return false;
        payload.slice(prefix.length);
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  // src/validators/tron_validator.ts
  function decodeBase58Address(base58String) {
    if (typeof base58String !== "string") {
      return false;
    }
    if (base58String.length !== 34) {
      return false;
    }
    let address;
    try {
      address = utils_default.base58(base58String);
    } catch (e) {
      return false;
    }
    const len = address.length;
    const offset = len - 4;
    const checkSum = address.slice(offset);
    address = address.slice(0, offset);
    const hash0 = utils_default.sha256(utils_default.byteArray2hexStr(address));
    const hash1 = utils_default.hexStr2byteArray(utils_default.sha256(hash0));
    const checkSum1 = hash1.slice(0, 4);
    if (checkSum[0] === checkSum1[0] && checkSum[1] === checkSum1[1] && checkSum[2] === checkSum1[2] && checkSum[3] === checkSum1[3]) {
      return address;
    }
    return false;
  }
  var DefaultTronValidatorOpts = {
    addressTypes: ["65"]
  };
  var tron_validator_default = (opts) => ({
    isValidAddress: function(address) {
      const _opts = { ...DefaultTronValidatorOpts, ...opts };
      const addr = decodeBase58Address(getAddress(address));
      if (!addr) {
        return false;
      }
      if (addr.length !== 21) {
        return false;
      }
      return _opts.addressTypes.includes(addr[0].toString());
    }
  });

  // src/validators/xlm_validator.ts
  var import_base_x3 = __toESM(require_src());
  var ALPHABET2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  var base32 = (0, import_base_x3.default)(ALPHABET2);
  var regexp3 = new RegExp("^[" + ALPHABET2 + "]{56}$");
  var ed25519PublicKeyVersionByte = 6 << 3;
  function swap16(number) {
    const lower = number & 255;
    const upper = number >> 8 & 255;
    return lower << 8 | upper;
  }
  var xlm_validator_default = {
    isValidAddress(address) {
      const addr = getAddress(address);
      if (regexp3.test(addr)) {
        return this.verifyChecksum(addr);
      }
      return false;
    },
    verifyChecksum: function(address) {
      var bytes = base32.decode(address);
      if (bytes[0] !== ed25519PublicKeyVersionByte) {
        return false;
      }
      const computedChecksum = utils_default.numberToHex(swap16(mjs_default.crc16xmodem(bytes.slice(0, -2))), 4);
      const checksum = utils_default.toHex(bytes.slice(-2));
      return computedChecksum === checksum;
    }
  };

  // src/chain-validators.ts
  var chainValidators = {
    algorand: { validator: algorand_validator_default },
    bitcoin: {
      alternatives: ["btc", "omni"],
      validator: {
        mainnet: bitcoin_validator_default("mainnet" /* MainNet */),
        testnet: bitcoin_validator_default("testnet" /* TestNet */)
      }
    },
    "bitcoincash": {
      alternatives: ["bch", "bitcoin-cash", "bitcoin cash"],
      validator: {
        mainnet: bch_validator_default("mainnet" /* MainNet */),
        testnet: bch_validator_default("testnet" /* TestNet */)
      }
    },
    cardano: {
      alternatives: ["ada"],
      validator: {
        mainnet: cardano_validator_default("mainnet" /* MainNet */, {
          bech32Hrp: { mainnet: ["addr"], testnet: ["addr"] }
        }),
        testnet: cardano_validator_default("testnet" /* TestNet */, {
          bech32Hrp: { mainnet: ["addr"], testnet: ["addr"] }
        })
      }
    },
    doge: {
      alternatives: ["dogecoin"],
      validator: {
        mainnet: bitcoin_validator_default("mainnet" /* MainNet */, {
          addressTypes: { mainnet: ["1e", "16"], testnet: ["71", "c4"] }
        }),
        testnet: bitcoin_validator_default("mainnet" /* MainNet */, {
          addressTypes: { mainnet: ["1e", "16"], testnet: ["71", "c4"] }
        })
      }
    },
    eos: { validator: eos_validator_default },
    ethereum: {
      alternatives: ["eth", "erc20", "flare", "avalanche", "avalanche-c", "bsc", "bnb", "binance"],
      validator: ethereum_validator_default
    },
    litecoin: {
      alternatives: ["ltc"],
      validator: {
        mainnet: bitcoin_validator_default("mainnet" /* MainNet */, {
          addressTypes: { mainnet: ["30", "05", "32"], testnet: ["6f", "c4", "3a"] },
          bech32Hrp: { mainnet: ["ltc"], testnet: ["tltc"] }
        }),
        testnet: bitcoin_validator_default("testnet" /* TestNet */, {
          addressTypes: { mainnet: ["30", "05", "32"], testnet: ["6f", "c4", "3a"] },
          bech32Hrp: { mainnet: ["ltc"], testnet: ["tltc"] }
        })
      }
    },
    monero: {
      validator: {
        mainnet: monero_validator_default("mainnet" /* MainNet */),
        testnet: monero_validator_default("testnet" /* TestNet */)
      }
    },
    nem: { validator: nem_validator_default },
    nano: { validator: nano_validator_default },
    polkadot: { validator: polkadot_validator_default },
    ripple: {
      alternatives: ["xrp"],
      validator: ripple_validator_default
    },
    sia: { validator: sia_validator_default },
    solana: {
      alternatives: ["spl"],
      validator: solana_validator_default
    },
    tron: {
      alternatives: ["trc20"],
      validator: tron_validator_default()
    },
    tezos: { validator: tezos_validator_default },
    xlm: {
      alternatives: ["stellar"],
      validator: xlm_validator_default
    }
  };
  function getValidatorForChain(chain) {
    const chainName = chain.chain || chain;
    const networkType = chain.networkType || "mainnet" /* MainNet */;
    const key = Object.keys(chainValidators).find(
      (key2) => key2.toUpperCase() === chainName.toUpperCase() || chainValidators[key2]?.alternatives?.map((alternative) => alternative.toUpperCase())?.includes(chainName.toUpperCase())
    );
    return chainValidators[key]?.validator[networkType] || chainValidators[key]?.validator;
  }

  // src/wallet_address_validator.ts
  if (!global.Buffer) {
    global.Buffer = require_buffer().Buffer;
  }
  function validate(address, chain) {
    const validator = getValidatorForChain(chain);
    if (validator) {
      return validator.isValidAddress(address);
    }
    throw new Error(`Missing validator for chain: ${chain}`);
  }
})();
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2017
 * @license MIT
 */
/*! Bundled license information:

js-sha512/src/sha512.js:
  (*
   * [js-sha512]{@link https://github.com/emn178/js-sha512}
   *
   * @version 0.9.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2024
   * @license MIT
   *)

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
