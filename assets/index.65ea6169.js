var s={exports:{}};(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;function f(e){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=r.width?String(r.width):e.defaultWidth,u=e.formats[t]||e.formats[e.defaultWidth];return u}}i.exports=n.default})(s,s.exports);var P={exports:{}};(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;function f(e){return function(r,t){var u=t!=null&&t.context?String(t.context):"standalone",a;if(u==="formatting"&&e.formattingValues){var l=e.defaultFormattingWidth||e.defaultWidth,d=t!=null&&t.width?String(t.width):l;a=e.formattingValues[d]||e.formattingValues[l]}else{var v=e.defaultWidth,c=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[c]||e.values[v]}var h=e.argumentCallback?e.argumentCallback(r):r;return a[h]}}i.exports=n.default})(P,P.exports);var F={exports:{}};(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;function f(t){return function(u){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.width,d=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],v=u.match(d);if(!v)return null;var c=v[0],h=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth],b=Array.isArray(h)?r(h,function(m){return m.test(c)}):e(h,function(m){return m.test(c)}),o;o=t.valueCallback?t.valueCallback(b):b,o=a.valueCallback?a.valueCallback(o):o;var C=u.slice(c.length);return{value:o,rest:C}}}function e(t,u){for(var a in t)if(t.hasOwnProperty(a)&&u(t[a]))return a}function r(t,u){for(var a=0;a<t.length;a++)if(u(t[a]))return a}i.exports=n.default})(F,F.exports);var w={exports:{}};(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=f;function f(e){return function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r.match(e.matchPattern);if(!u)return null;var a=u[0],l=r.match(e.parsePattern);if(!l)return null;var d=e.valueCallback?e.valueCallback(l[0]):l[0];d=t.valueCallback?t.valueCallback(d):d;var v=r.slice(a.length);return{value:d,rest:v}}}i.exports=n.default})(w,w.exports);export{P as a,s as b,F as c,w as d};
