/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(102)
	__webpack_require__(109)
	var __weex_template__ = __webpack_require__(113)
	var __weex_style__ = __webpack_require__(114)
	var __weex_script__ = __webpack_require__(115)
	
	__weex_define__('@weex-component/6c1b1e1f33cf91c0b81ef90e0deac2b3', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/6c1b1e1f33cf91c0b81ef90e0deac2b3',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(17);
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(66);
	__webpack_require__(70);
	__webpack_require__(74);
	__webpack_require__(78);
	__webpack_require__(79);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)
	
	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)
	
	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(14)
	var __weex_style__ = __webpack_require__(15)
	var __weex_script__ = __webpack_require__(16)
	
	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(18)
	var __weex_style__ = __webpack_require__(19)
	var __weex_script__ = __webpack_require__(20)
	
	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(22)
	var __weex_style__ = __webpack_require__(23)
	var __weex_script__ = __webpack_require__(24)
	
	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(26)
	var __weex_style__ = __webpack_require__(27)
	var __weex_script__ = __webpack_require__(28)
	
	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _assign = __webpack_require__(29);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }
	
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);
	
	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	
	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(34).Object.assign;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(32);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(47)});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(33)
	  , core      = __webpack_require__(34)
	  , ctx       = __webpack_require__(35)
	  , hide      = __webpack_require__(37)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 33 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 34 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(36);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(38)
	  , createDesc = __webpack_require__(46);
	module.exports = __webpack_require__(42) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(39)
	  , IE8_DOM_DEFINE = __webpack_require__(41)
	  , toPrimitive    = __webpack_require__(45)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(42) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(42) && !__webpack_require__(43)(function(){
	  return Object.defineProperty(__webpack_require__(44)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(43)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40)
	  , document = __webpack_require__(33).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(40);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(48)
	  , gOPS     = __webpack_require__(63)
	  , pIE      = __webpack_require__(64)
	  , toObject = __webpack_require__(65)
	  , IObject  = __webpack_require__(52)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(43)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(62);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(50)
	  , toIObject    = __webpack_require__(51)
	  , arrayIndexOf = __webpack_require__(55)(false)
	  , IE_PROTO     = __webpack_require__(59)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(52)
	  , defined = __webpack_require__(54);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(53);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(51)
	  , toLength  = __webpack_require__(56)
	  , toIndex   = __webpack_require__(58);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(57)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(57)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(60)('keys')
	  , uid    = __webpack_require__(61);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(33)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 64 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(54);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(67)
	var __weex_style__ = __webpack_require__(68)
	var __weex_script__ = __webpack_require__(69)
	
	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(71)
	var __weex_style__ = __webpack_require__(72)
	var __weex_script__ = __webpack_require__(73)
	
	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	
	    backgroundColor: 'black',
	
	    height: 88,
	
	    title: "",
	
	    titleColor: 'black',
	
	    rightItemSrc: '',
	
	    rightItemTitle: '',
	
	    rightItemColor: 'black',
	
	    leftItemSrc: '',
	
	    leftItemTitle: '',
	
	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)
	var __weex_template__ = __webpack_require__(75)
	var __weex_style__ = __webpack_require__(76)
	var __weex_script__ = __webpack_require__(77)
	
	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79)
	var __weex_template__ = __webpack_require__(83)
	var __weex_style__ = __webpack_require__(84)
	var __weex_script__ = __webpack_require__(85)
	
	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(80)
	var __weex_style__ = __webpack_require__(81)
	var __weex_script__ = __webpack_require__(82)
	
	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);
	
	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);
	
	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 86 */
/***/ function(module, exports) {

	var stream
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    stream = __weex_require__('@weex-module/stream')
	});
	var navigate
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    navigate = __weex_require__('@weex-module/navigator')
	});
	
	var apiURL = {
	    baseurl: 'http://139.129.128.77:3000',
	   // baseurl: 'http://192.168.3.164:3000',
	    getRandom:'/food/weather',
	    getResult:'/food/suggest',
	    getInvite:'/food/treat',
	    getWeather:'http://route.showapi.com/9-5?showapi_appid=29691&showapi_sign=4b5c31bf9ba34d1a93f8651ad0bc3c1b&from=5',
	    getLogin:'/users/login',
	    getRegister:'/users/signup',
	    editUserInfo:'/users/editInfo',
	    getCuteData:'/food/heatList',
	    choiceLove:'/users/iLoveIt',
	};
	function postData(url,msg,callback) {
	    stream.fetch({
	        method: 'POST',
	        url: url,
	        headers:{'Content-Type':'application/json; charset=utf-8'},
	        body:JSON.stringify(msg)
	    }, function (retdata) {
	        callback(retdata);
	    });
	}
	function getData(url,callback) {
	    stream.fetch({
	        method: 'GET',
	        url: url,
	    }, function (retdata) {
	        callback(retdata);
	    });
	}
	exports.getRandom = function (msg,callback) {
	    postData(apiURL.baseurl + apiURL.getRandom,msg,callback);
	};
	exports.getResult = function (msg,callback) {
	    postData(apiURL.baseurl + apiURL.getResult,msg,callback);
	};
	exports.getInvite=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.getInvite,msg,callback)
	};
	exports.getWeather=function(msg,callback){
	    getData(apiURL.getWeather+'&lng='+msg.lng+'&lat='+msg.lat,callback);
	};
	exports.getLogin=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.getLogin,msg,callback);
	};
	exports.getRegister=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.getRegister,msg,callback);
	};
	exports.editUserInfo=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.editUserInfo,msg,callback);
	};
	exports.getCuteData=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
	};
	exports.getHungryData=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
	};
	exports.getFriendData=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
	};
	exports.getPartyData=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.getCuteData,msg,callback);
	};
	exports.choiceLove=function(msg,callback){
	    postData(apiURL.baseurl+apiURL.choiceLove,msg,callback);
	}
	
	exports.apiURL =apiURL;
	exports.navigator =function(baseurl,tourl,callback){
	    var params = {
	      'url': baseurl + tourl,
	      'animated': 'true'
	    };
	    navigate.push(params, callback);
	}
	exports.getBaseUrl = function (bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        var host = 'localhost:8080';
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }
	
	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if (typeof window === 'object') {
	            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	        } else {
	            nativeBase = 'http://' + host + '/dist/';
	        }
	    }
	    return nativeBase;
	};

/***/ },
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(103)
	var __weex_style__ = __webpack_require__(104)
	var __weex_script__ = __webpack_require__(105)
	
	__weex_define__('@weex-component/myheader', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "head"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "re"
	      ],
	      "events": {
	        "click": "back"
	      },
	      "attr": {
	        "src": function () {return this.resrc}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "src": function () {return this.titlesrc}
	      }
	    }
	  ]
	}

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {
	  "head": {
	    "flexDirection": "row",
	    "marginTop": 60
	  },
	  "re": {
	    "width": 100,
	    "height": 90,
	    "alignItems": "center",
	    "marginLeft": 20
	  },
	  "title": {
	    "width": 300,
	    "height": 80,
	    "alignItems": "center",
	    "marginLeft": 100
	  }
	}

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
		data: function () {return {
			resrc: "http://d3.freep.cn/3tb_161223150449strt581068.png",
			titlesrc: ''
		}},
		methods: {
			back: function back() {
				this._parent.$emit('back', {});
			}
		}
	};}
	/* generated by weex-loader */


/***/ },
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(110)
	var __weex_style__ = __webpack_require__(111)
	var __weex_script__ = __webpack_require__(112)
	
	__weex_define__('@weex-component/random-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.imgurl}
	      },
	      "classList": [
	        "image"
	      ]
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = {
	  "image": {
	    "width": 630,
	    "height": 340,
	    "borderRadius": 30,
	    "marginLeft": 30,
	    "marginTop": 25
	  },
	  "text": {
	    "fontSize": 40,
	    "fontFamily": "Microsoft Yahei",
	    "marginLeft": 30,
	    "marginTop": 25
	  }
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
			data: function () {return { imgurl: '', title: '' }}
	};}
	/* generated by weex-loader */


/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "style": {
	        "height": function () {return this.deviceHeight},
	        "width": 750
	      },
	      "attr": {
	        "src": "http://d2.freep.cn/3tb_170103104748yr8x581068.jpg"
	      }
	    },
	    {
	      "type": "div",
	      "style": {
	        "position": "absolute",
	        "top": 0,
	        "right": 0,
	        "bottom": 0,
	        "left": 0,
	        "backgroundColor": "rgba(255,200,255,0.1)"
	      },
	      "children": [
	        {
	          "type": "myheader",
	          "attr": {
	            "titlesrc": function () {return this.titlesrc}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item-border"
	          ],
	          "repeat": {
	            "expression": function () {return this.randomList},
	            "value": "item"
	          },
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "attr": {
	                "cid": function () {return this.item.content_id}
	              },
	              "events": {
	                "click": "onItemClick"
	              },
	              "children": [
	                {
	                  "type": "random-item",
	                  "attr": {
	                    "imgurl": function () {return this.item.imgurl},
	                    "title": function () {return this.item.title}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "shown": function () {return this.showMenu},
	          "id": "menuDiv",
	          "style": {
	            "height": function () {return (this.deviceHeight) + 'px'},
	            "width": 750,
	            "position": "absolute",
	            "top": 0,
	            "right": 0,
	            "backgroundColor": "rgba(0,0,0,0.6)"
	          },
	          "events": {
	            "click": "hideMenu"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "modal"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "width": 500,
	                    "height": 400,
	                    "marginLeft": 50,
	                    "marginTop": 50
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "modal-text"
	                      ],
	                      "attr": {
	                        "value": function () {return this.onShowItem.content}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = {
	  "item-border": {
	    "marginTop": 30,
	    "marginLeft": 20,
	    "width": 700,
	    "height": 470,
	    "backgroundColor": "rgba(255,255,255,0.6)"
	  },
	  "modal-text": {
	    "marginLeft": 5,
	    "fontFamily": "Microsoft Yahei",
	    "fontSize": 35,
	    "lineHeight": 45
	  },
	  "nav_bar": {
	    "flexDirection": "row",
	    "height": 180,
	    "backgroundColor": "#CDCDC1"
	  },
	  "nav_title": {
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "modal": {
	    "width": 600,
	    "height": 500,
	    "backgroundColor": "#EDEDED",
	    "position": "absolute",
	    "top": 300,
	    "left": 75,
	    "borderRadius": 30
	  }
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(4);
	var modal = __weex_require__('@weex-module/modal');
	var apis = __webpack_require__(86);
	var navigator = __weex_require__('@weex-module/navigator');
	var Storage = __weex_require__('@weex-module/storage');
	module.exports = {
	    data: function () {return {
	        titlesrc: 'http://d3.freep.cn/3tb_161222174156jm8m581068.png',
	
	        showMenu: false,
	        deviceHeight: 1300,
	        randomList: [{
	            'content_id': 0,
	            'imgurl': '',
	            'content': '',
	            'title': ''
	        }, {
	            'content_id': 1,
	            'imgurl': '',
	            'content': '',
	            'title': ''
	        }],
	        onShowItem: {}
	
	    }},
	    created: function created() {
	        var self = this;
	        console.log("this is random");
	        var bundleUrl = this.$getConfig().bundleUrl;
	        this.baseURL = apis.getBaseUrl(bundleUrl, true);
	
	        this.$getConfig(function (config) {
	            self.deviceHeight = 750 / config.env.deviceWidth * config.env.deviceHeight;
	        }.bind(this));
	
	        this.getRandomData();
	
	        this.$on('back', function () {
	            apis.navigator(self.baseURL, 'module/home.js', function () {});
	        });
	    },
	    methods: {
	        getRandomData: function getRandomData() {
	            var self = this;
	            self.imageList = [];
	            var msg = {};
	            msg.condition = '';
	            apis.getRandom(msg, function (retdata) {
	                var data = JSON.parse(retdata.data);
	                for (var i = 0; i < 2; i++) {
	                    self.randomList[i].title = data.foodList[i].name;
	                    self.randomList[i].content = data.foodList[i].describe;
	                    self.randomList[i].imgurl = apis.apiURL.baseurl + '/images/db/' + data.foodList[i].image[0];
	                    self.randomList[i].content_id = i;
	                }
	            });
	        },
	        onItemClick: function onItemClick(e) {
	            var self = this;
	            var itemid = e.target.attr.cid;
	            console.log(self.randomList[itemid].title);
	            self.onShowItem = self.randomList[itemid];
	            self.showMenu = true;
	        },
	        hideMenu: function hideMenu() {
	            var self = this;
	            self.showMenu = false;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDBiMzAwNDZlZDYzMGY2YzVkZjc/NjBmYyoqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvcmFuZG9tLndlP2MxNTAiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL2luZGV4LmpzPzAzMTQqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT85N2RmKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/MDViYyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlPzg0MDcqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT85NzAwKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT83YzI5KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT9jNWE4KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT8zMzg0KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT9kYTliKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/ODdjMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzgzODAqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT81MjEzKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/MDViZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/ZTliZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/OWI2YyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/ZGE0MCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/Y2Y5MCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzcxOTkqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZT82ZGRhKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MzcwMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlP2E2ZjkqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT9lMzEyKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/NzA4NSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlP2NmYjcqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT8xY2Q0KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly42LjIwLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZmQ1ZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanM/MWRmYyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanM/ZDIwMSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcz9lMTk1KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzP2FlYzQqKioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzk0NTQqKioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanM/ZGU0NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZTM0MyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanM/ZDU0NSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcz83ZTgxKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzP2UwMGYqKioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/OTEwZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzPzFmODkqKioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz80MGE5KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/N2IxOCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/Y2E3NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz9jZTUxKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcz8zMDc5KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz9jOGE2KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanM/Y2UwMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2QwNTMqKioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/OTgxMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanM/NDMzZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanM/YjU1ZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz8xYTAzKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcz9hNzM2KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanM/N2RjNioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz9iYTAwKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcz80NTFjKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanM/MWU5MSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MTBiNCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcz8yMTI5KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzPzM1M2EqKioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzE5MDUqKioqIiwid2VicGFjazovLy8uL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz80NWFjKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcz81MGY0KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzPzdkOGMqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2U/Yjk2ZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT9iNzYzKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzA1ZjMqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2U/NjllNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2E0ZWEqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZT9mYzgzKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/Y2QwNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2E1ODgqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/MmFhYioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT85ZjA1KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzU5MTUqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/MTA5ZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlP2JjMGEqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MDAxMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8wNmNjKioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlPzU0ZDAqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/Y2IzNioqKioiLCJ3ZWJwYWNrOi8vLy4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlP2JlMWQqKioqIiwid2VicGFjazovLy8uL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT9mNzU4KioqKiIsIndlYnBhY2s6Ly8vLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/OThlOSoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hcGkuanM/YzNiNSoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9teWhlYWRlci53ZT8xYTQ3KiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL215aGVhZGVyLndlP2YxMjgqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL215aGVhZGVyLndlPzY2ZjkqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL215aGVhZGVyLndlPzUzNDIqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL3JhbmRvbS1pdGVtLndlP2UwZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9yYW5kb20taXRlbS53ZT80NTEzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvcmFuZG9tLWl0ZW0ud2U/YzE0NSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL3JhbmRvbS1pdGVtLndlIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGUvcmFuZG9tLndlP2NjYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS9yYW5kb20ud2U/OGZlMyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlL3JhbmRvbS53ZSJdLCJuYW1lcyI6W10sIm1h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Q0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsNkJBQTRCO0FBQzVCO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ0NBOztVQUdBO2FBRUE7QUFIQTs7eUJBS0E7K0JBQ0E7QUFFQTtBQUpBO0FBTEE7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ0VBOzhCQUVBO0FBREE7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQix5QkFBeUI7QUFDeEQ7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQztBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsdUJBQXVCO0FBQzlEO0FBQ0EsWUFBVztBQUNYO0FBQ0EsbUNBQWtDO0FBQ2xDLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQyxnQkFBZTtBQUNmO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHdCQUF3QjtBQUNuRSwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsaUNBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0Esb0NBQW1DLGtDQUFrQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDNEJBLHFCQUNBO3FCQUNBO2dDQUNBO3lCQUNBO3VCQUNBOzs7bUJBSUE7O21CQUNBO3VCQUNBOzsyQkFFQTt1QkFDQTt3QkFDQTtzQkFDQTtBQUpBOzJCQU1BO3VCQUNBO3dCQUNBO3NCQUVBO0FBTEE7cUJBUUE7O0FBbEJBO2lDQW1CQTtvQkFDQTtxQkFDQTsyQ0FDQTttREFFQTs7MkNBQ0E7MkVBQ0E7Z0JBRUE7O2NBRUE7O3NDQUNBO3lFQUNBO0FBQ0E7QUFDQTs7aURBRUE7d0JBQ0E7OEJBQ0E7dUJBQ0E7NkJBQ0E7b0RBQ0E7K0NBQ0E7NkNBQ0E7aUVBQ0E7bUVBQ0E7OEdBQ0E7cURBQ0E7QUFFQTtBQUVBO0FBQ0E7OENBQ0E7d0JBQ0E7d0NBQ0E7aURBQ0E7K0NBQ0E7NkJBQ0E7QUFDQTt1Q0FDQTt3QkFDQTs2QkFDQTtBQUVBO0FBN0JBO0FBcENBIiwiZmlsZSI6Im1vZHVsZVxccmFuZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDBiMzAwNDZlZDYzMGY2YzVkZjciLCJyZXF1aXJlKFwiLi9teWhlYWRlci53ZVwiKVxucmVxdWlyZShcIi4vcmFuZG9tLWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vcmFuZG9tLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3JhbmRvbS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9yYW5kb20ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvNmMxYjFlMWYzM2NmOTFjMGI4MWVmOTBlMGRlYWMyYjMnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvNmMxYjFlMWYzM2NmOTFjMGI4MWVmOTBlMGRlYWMyYjMnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlL3JhbmRvbS53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsInJlcXVpcmUoJy4vc3JjL3d4Yy1idXR0b24ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1obi53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLWxpc3QtaXRlbS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLXBhbmVsLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGlwLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtY291bnRkb3duLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtbWFycXVlZS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdmJhci53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdnBhZ2Uud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJiYXIud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJpdGVtLndlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWJ1dHRvbi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtYnV0dG9uLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtYnV0dG9uLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1idXR0b24nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnYnRuJywgJ2J0bi0nICsgKHRoaXMudHlwZSksICdidG4tc3otJyArICh0aGlzLnNpemUpXX0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydidG4tdHh0JywgJ2J0bi10eHQtJyArICh0aGlzLnR5cGUpLCAnYnRuLXR4dC1zei0nICsgKHRoaXMuc2l6ZSldfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYnRuXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJ0bi1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcImJ0bi1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MiwxODQsOTIpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3NiwxNzQsNzYpXCJcbiAgfSxcbiAgXCJidG4taW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTEsMTkyLDIyMilcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDcwLDE4NCwyMTgpXCJcbiAgfSxcbiAgXCJidG4td2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjQwLDE3Myw3OClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIzOCwxNjIsNTQpXCJcbiAgfSxcbiAgXCJidG4tZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMTIsNjMsNTgpXCJcbiAgfSxcbiAgXCJidG4tbGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwiYnRuLXR4dC1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNTEsMTIyLDE4MylcIlxuICB9LFxuICBcImJ0bi1zei1sYXJnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiA0MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxNVxuICB9LFxuICBcImJ0bi1zei1taWRkbGVcIjoge1xuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMFxuICB9LFxuICBcImJ0bi1zei1zbWFsbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxNzAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEyLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxMixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDI1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDI1LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDdcbiAgfSxcbiAgXCJidG4tdHh0LXN6LWxhcmdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQ1XG4gIH0sXG4gIFwiYnRuLXR4dC1zei1taWRkbGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzVcbiAgfSxcbiAgXCJidG4tdHh0LXN6LXNtYWxsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJ0biBidG4te3t0eXBlfX0gYnRuLXN6LXt7c2l6ZX19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJidG4tdHh0IGJ0bi10eHQte3t0eXBlfX0gYnRuLXR4dC1zei17e3NpemV9fVwiPnt7dmFsdWV9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICBzaXplOiAnbGFyZ2UnLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XG5cbiAgICAvKndoaXRlLXNwYWNlOiBub3dyYXA7Ki9cbiAgICAvKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ki9cbiAgICAvKnRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uOyovXG4gICAgLypjdXJzb3I6IHBvaW50ZXI7Ki9cbiAgICAvKi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7Ki9cbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IG5vbmU7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1zb3VyY2U6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1zbGljZTogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXdpZHRoOiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2Utb3V0c2V0OiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2UtcmVwZWF0OiBpbml0aWFsOyovXG4gIH1cblxuICAuYnRuLXR4dCB7XG5cbiAgfVxuXG4gIC8qKlRZUEUqKi9cblxuICAuYnRuLWRlZmF1bHQge1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG5cbiAgLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcbiAgfVxuXG4gIC5idG4taW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcbiAgfVxuXG4gIC5idG4td2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcbiAgfVxuXG4gIC5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmJ0bi10eHQtZGVmYXVsdCB7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgfVxuXG4gIC5idG4tdHh0LXByaW1hcnkge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1zdWNjZXNzIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtaW5mbyB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LXdhcm5pbmcge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1kYW5nZXIge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1saW5rIHtcbiAgICBjb2xvcjogcmdiKDUxLCAxMjIsIDE4Myk7XG4gICAgLypmb250LXdlaWdodDogNDAwOyovXG4gIH1cblxuICAvKipTSVpFKiovXG5cbiAgLmJ0bi1zei1sYXJnZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgLypsaW5lLWhlaWdodDogMS4zMzMzMzsqL1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuYnRuLXN6LW1pZGRsZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjQyODU3OyovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5idG4tc3otc21hbGwge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgLypsaW5lLWhlaWdodDogMS41OyovXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgfVxuXG4gIC5idG4tdHh0LXN6LW1pZGRsZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC8qRElTQUJMRUQqL1xuXG4gIC5kaXNhYmxlZCB7XG5cbiAgfVxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT9iOWRkMDZjMiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWhuLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1obi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWhuLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1obicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2gnICsgKHRoaXMubGV2ZWwpXX0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndHh0LWgnICsgKHRoaXMubGV2ZWwpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImgxXCI6IHtcbiAgICBcImhlaWdodFwiOiAxMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMFxuICB9LFxuICBcImgyXCI6IHtcbiAgICBcImhlaWdodFwiOiAxMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMFxuICB9LFxuICBcImgzXCI6IHtcbiAgICBcImhlaWdodFwiOiAxMTAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMFxuICB9LFxuICBcInR4dC1oMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA3MFxuICB9LFxuICBcInR4dC1oMlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA1MlxuICB9LFxuICBcInR4dC1oM1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA0MlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJoe3tsZXZlbH19XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICA8dGV4dCBjbGFzcz1cInR4dC1oe3tsZXZlbH19XCI+e3t2YWx1ZX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7fVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaDEge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaDIge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaDMge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG5cbiAgLnR4dC1oMSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG5cbiAgLnR4dC1oMiB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICB9XG5cbiAgLnR4dC1oMyB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlP2VjMzI4ZTFhIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1saXN0LWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1saXN0LWl0ZW0ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWxpc3QtaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJpdGVtXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwidG91Y2hzdGFydFwiOiBcInRvdWNoc3RhcnRcIixcbiAgICBcInRvdWNoZW5kXCI6IFwidG91Y2hlbmRcIlxuICB9LFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmdDb2xvcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaXRlbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDI1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM1LFxuICAgIFwiaGVpZ2h0XCI6IDE2MCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIml0ZW1cIiBvbnRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgb250b3VjaGVuZD1cInRvdWNoZW5kXCJcbiAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6e3tiZ0NvbG9yfX07XCI+XG4gICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGJnQ29sb3I6ICcjZmZmZmZmJ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZJWE1FIGFuZHJvaWQgdG91Y2hcbiAgICAgICAgLy8gVE9ETyBhZGFwdGl2ZSBvcHBvc2l0ZSBiZ0NvbG9yXG4vLyAgICAgICAgdGhpcy5iZ0NvbG9yID0gJyNlNmU2ZTYnO1xuICAgICAgfSxcbiAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRklYTUUgYW5kcm9pZCB0b3VjaGVuZCBub3QgdHJpZ2dlcmVkXG4vLyAgICAgICAgdGhpcy5iZ0NvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLml0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyptYXJnaW4tYm90dG9tOiAxcHg7IEZVVFVSRSAqL1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlP2ExYzEyOTA2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtcGFuZWwud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXBhbmVsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtcGFuZWwud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXBhbmVsJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3BhbmVsJywgJ3BhbmVsLScgKyAodGhpcy50eXBlKV19LFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5ib3JkZXJ9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbC1oZWFkZXInLCAncGFuZWwtaGVhZGVyLScgKyAodGhpcy50eXBlKV19LFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwicGFkZGluZ1RvcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0hlYWR9LFxuICAgICAgICBcInBhZGRpbmdCb3R0b21cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkfSxcbiAgICAgICAgXCJwYWRkaW5nTGVmdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0hlYWQqMS41fSxcbiAgICAgICAgXCJwYWRkaW5nUmlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkKjEuNX1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3BhbmVsLWJvZHknLCAncGFuZWwtYm9keS0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInBhZGRpbmdUb3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdCb2R5fSxcbiAgICAgICAgXCJwYWRkaW5nQm90dG9tXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keX0sXG4gICAgICAgIFwicGFkZGluZ0xlZnRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdCb2R5KjEuNX0sXG4gICAgICAgIFwicGFkZGluZ1JpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keSoxLjV9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicGFuZWxcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDIwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAxXG4gIH0sXG4gIFwicGFuZWwtcHJpbWFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig0MCw5NiwxNDQpXCJcbiAgfSxcbiAgXCJwYW5lbC1zdWNjZXNzXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDc2LDE3NCw3NilcIlxuICB9LFxuICBcInBhbmVsLWluZm9cIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzAsMTg0LDIxOClcIlxuICB9LFxuICBcInBhbmVsLXdhcm5pbmdcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoMjM4LDE2Miw1NClcIlxuICB9LFxuICBcInBhbmVsLWRhbmdlclwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMTIsNjMsNTgpXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y1ZjVmNVwiLFxuICAgIFwiZm9udFNpemVcIjogNDAsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig0MCw5NiwxNDQpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MiwxODQsOTIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MSwxOTIsMjIyKVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjQwLDE3Myw3OClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjE3LDgzLDc5KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1ib2R5XCI6IHt9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC17e3R5cGV9fVwiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOnt7Ym9yZGVyfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInBhbmVsLWhlYWRlciBwYW5lbC1oZWFkZXIte3t0eXBlfX1cIlxuICAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nSGVhZH19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0hlYWR9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nSGVhZCoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0hlYWQqMS41fX1cIj5cbiAgICAgIHt7dGl0bGV9fVxuICAgIDwvdGV4dD5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBwYW5lbC1ib2R5LXt7dHlwZX19XCJcbiAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nQm9keX19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0JvZHl9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nQm9keSoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0JvZHkqMS41fX1cIj5cbiAgICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBwYWRkaW5nQm9keTogMjAsXG4gICAgICBwYWRkaW5nSGVhZDogMjAsXG4gICAgICBkYXRhQ2xhc3M6ICcnLCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xuICAgICAgYm9yZGVyOiAwXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cblxuICAucGFuZWwtZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtcHJpbWFyeSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG5cbiAgLnBhbmVsLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcblxuICB9XG5cbiAgLnBhbmVsLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XG5cbiAgfVxuXG4gIC5wYW5lbC13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xuXG4gIH1cblxuICAucGFuZWwtZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XG5cbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWJvZHkge1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XG4gIH1cblxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XG4gIH1cblxuICAucGFuZWwtYm9keS1kYW5nZXIge1xuICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/NWRjMTZmMWYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10aXAud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXRpcC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRpcC53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGlwJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWyd0aXAnLCAndGlwLScgKyAodGhpcy50eXBlKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGlwLXR4dCcsICd0aXAtdHh0LScgKyAodGhpcy50eXBlKV19LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidGlwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM2LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM2LFxuICAgIFwicGFkZGluZ1RvcFwiOiAzNixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMzYsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTBcbiAgfSxcbiAgXCJ0aXAtdHh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwidGlwLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RmZjBkOFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZDZlOWM2XCJcbiAgfSxcbiAgXCJ0aXAtdHh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjM2M3NjNkXCJcbiAgfSxcbiAgXCJ0aXAtaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZDllZGY3XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNiY2U4ZjFcIlxuICB9LFxuICBcInRpcC10eHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMTcwOGZcIlxuICB9LFxuICBcInRpcC13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmY2Y4ZTNcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZhZWJjY1wiXG4gIH0sXG4gIFwidGlwLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzhhNmQzYlwiXG4gIH0sXG4gIFwidGlwLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJkZWRlXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYmNjZDFcIlxuICB9LFxuICBcInRpcC10eHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2E5NDQ0MlwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZVxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0aXAgdGlwLXt7dHlwZX19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXAtdHh0IHRpcC10eHQte3t0eXBlfX1cIj57e3ZhbHVlfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAudGlwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzZweDtcbiAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAudGlwLXR4dHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAudGlwLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xuICB9XG5cbiAgLnRpcC10eHQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICMzYzc2M2Q7XG4gIH1cblxuICAudGlwLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xuICB9XG5cbiAgLnRpcC10eHQtaW5mbyB7XG4gICAgY29sb3I6ICMzMTcwOGY7XG4gIH1cblxuICAudGlwLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmFlYmNjO1xuICB9XG5cbiAgLnRpcC10eHQtd2FybmluZyB7XG4gICAgY29sb3I6ICM4YTZkM2I7XG4gIH1cblxuICAudGlwLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG4gIH1cblxuICAudGlwLXR4dC1kYW5nZXIge1xuICAgIGNvbG9yOiAjYTk0NDQyO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZT8zNTM2N2UxNCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtY291bnRkb3duLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtY291bnRkb3duLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1jb3VudGRvd24nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImFwcGVhclwiOiBcImFwcGVhcmVkXCIsXG4gICAgXCJkaXNhcHBlYXJcIjogXCJkaXNhcHBlYXJlZFwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgc3R5bGU9XCJvdmVyZmxvdzogaGlkZGVuOyBmbGV4LWRpcmVjdGlvbjogcm93O1wiIG9uYXBwZWFyPVwiYXBwZWFyZWRcIiBvbmRpc2FwcGVhcj1cImRpc2FwcGVhcmVkXCI+XG4gICAgICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi53cmFwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgbm93OiAwLFxuICAgICAgICByZW1haW46IDAsXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIGVsYXBzZTogMCxcbiAgICAgICAgICAgIEQ6ICcwJyxcbiAgICAgICAgICAgIEREOiAnMCcsXG4gICAgICAgICAgICBoOiAnMCcsXG4gICAgICAgICAgICBoaDogJzAwJyxcbiAgICAgICAgICAgIEg6ICcwJyxcbiAgICAgICAgICAgIEhIOiAnMCcsXG4gICAgICAgICAgICBtOiAnMCcsXG4gICAgICAgICAgICBtbTogJzAwJyxcbiAgICAgICAgICAgIE06ICcwJyxcbiAgICAgICAgICAgIE1NOiAnMCcsXG4gICAgICAgICAgICBzOiAnMCcsXG4gICAgICAgICAgICBzczogJzAwJyxcbiAgICAgICAgICAgIFM6ICcwJyxcbiAgICAgICAgICAgIFNTOiAnMCdcbiAgICAgICAgfSxcbiAgICAgICAgb3V0b2Z2aWV3OiBmYWxzZVxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5yZW1haW4gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuaXNXZWIgPSB0aGlzLiRnZXRDb25maWcoKS5lbnYucGxhdGZvcm0gPT09ICdXZWInO1xuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubmV4dFRpY2soKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbmV4dFRpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3V0b2Z2aWV3KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRUaWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZWxhcHNlID0gcGFyc2VJbnQoKERhdGUubm93KCkgLSB0aGlzLm5vdykgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGMoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0aWNrJywgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50aW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0VGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhbGFybScsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hcHAudXBkYXRlQWN0aW9ucygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzAnICsgc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjYWxjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZW1haW4gPSB0aGlzLnJlbWFpbiAtIHRoaXMudGltZS5lbGFwc2U7XG4gICAgICAgICAgICBpZiAocmVtYWluIDwgMCkge1xuICAgICAgICAgICAgICAgIHJlbWFpbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpbWUuRCA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyA4NjQwMCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLkREID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLkQpO1xuICAgICAgICAgICAgdGhpcy50aW1lLmggPSBTdHJpbmcocGFyc2VJbnQoKHJlbWFpbiAtIHBhcnNlSW50KHRoaXMudGltZS5EKSAqIDg2NDAwKSAvIDM2MDApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5oaCA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5oKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5IID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDM2MDApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5ISCA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5IKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5tID0gU3RyaW5nKHBhcnNlSW50KChyZW1haW4gLSBwYXJzZUludCh0aGlzLnRpbWUuSCkgKiAzNjAwKSAvIDYwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUubW0gPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUubSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuTSA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyA2MCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLk1NID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLk0pO1xuICAgICAgICAgICAgdGhpcy50aW1lLnMgPSBTdHJpbmcocmVtYWluIC0gcGFyc2VJbnQodGhpcy50aW1lLk0pICogNjApO1xuICAgICAgICAgICAgdGhpcy50aW1lLnNzID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLnMpO1xuICAgICAgICAgICAgdGhpcy50aW1lLlMgPSBTdHJpbmcocmVtYWluKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5TUyA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5TKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlbWFpbiwgdGhpcy5ELCB0aGlzLmgsIHRoaXMuaGgsIHRoaXMuSCwgdGhpcy5ISCwgdGhpcy5tLCB0aGlzLk1NLCB0aGlzLnMsIHRoaXMuc3MsIHRoaXMuUywgdGhpcy5TUyk7XG4gICAgICAgICAgICByZXR1cm4gcmVtYWluID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT85Y2VlYjc2OCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly42LjIwLjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMi40LjFAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjIuNC4xQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4yLjQuMUBjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW1hcnF1ZWUud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLW1hcnF1ZWUud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1tYXJxdWVlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1tYXJxdWVlJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiYXBwZWFyXCI6IFwiYXBwZWFyZWRcIixcbiAgICBcImRpc2FwcGVhclwiOiBcImRpc2FwcGVhcmVkXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImlkXCI6IFwiYW5pbVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFuaW1cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcFwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiYW5pbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVooMClcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiIG9uYXBwZWFyPVwiYXBwZWFyZWRcIiBvbmRpc2FwcGVhcj1cImRpc2FwcGVhcmVkXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJhbmltXCIgY2xhc3M9XCJhbmltXCI+XG4gICAgICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuLndyYXAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYW5pbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVooMCk7XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBzdGVwOiAwLFxuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgb3V0b2Z2aWV3OiBmYWxzZVxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgPiAwXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zdGVwID4gMFxuICAgICAgICAgICAgICAgICYmIHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRUaWNrKCk7ICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5leHRUaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLm91dG9mdmlldykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5uZXh0VGljay5iaW5kKHNlbGYpLCBzZWxmLmludGVydmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYXRpb24oc2VsZi5uZXh0VGljay5iaW5kKHNlbGYpKTtcbiAgICAgICAgICAgICAgICB9LCBzZWxmLmludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0aW9uOiBmdW5jdGlvbihjYikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IC1zZWxmLnN0ZXAgKiBzZWxmLmluZGV4O1xuICAgICAgICAgICAgdmFyICRhbmltYXRpb24gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvYW5pbWF0aW9uJyk7XG4gICAgICAgICAgICAkYW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kZWwoJ2FuaW0nKSwge1xuICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyBTdHJpbmcob2Zmc2V0KSArICdweCkgdHJhbnNsYXRlWigwKSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IHNlbGYuZHVyYXRpb25cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5kZXggPSAoc2VsZi5pbmRleCArIDEpICUgKHNlbGYuY291bnQpO1xuICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHNlbGYuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBzZWxmLmNvdW50XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT80NDM4YmE3ZCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbmF2YmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1uYXZiYXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJhdHRyXCI6IHtcbiAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICF0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtaW1hZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2VudGVyLXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImNlbnRlclwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwid2lkdGhcIjogNzUwXG4gIH0sXG4gIFwicmlnaHQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjgsXG4gICAgXCJyaWdodFwiOiAzMixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImZvbnRGYW1pbHlcIjogXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIFwibGVmdC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyOCxcbiAgICBcImxlZnRcIjogMzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCIsXG4gICAgXCJmb250U2l6ZVwiOiAzMixcbiAgICBcImZvbnRGYW1pbHlcIjogXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiXG4gIH0sXG4gIFwiY2VudGVyLXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI1LFxuICAgIFwibGVmdFwiOiAxNzIsXG4gICAgXCJyaWdodFwiOiAxNzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDM2LFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImxlZnQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwibGVmdFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDUwLFxuICAgIFwiaGVpZ2h0XCI6IDUwXG4gIH0sXG4gIFwicmlnaHQtaW1hZ2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDIwLFxuICAgIFwicmlnaHRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA1MCxcbiAgICBcImhlaWdodFwiOiA1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3JpZ2h0SXRlbUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBpZj17eyFyaWdodEl0ZW1TcmN9fSBvbmNsaWNrID0gXCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyaWdodC1pbWFnZVwiIG5hdmktaXRlbS1wb3NpdGlvbj1cInJpZ2h0XCIgc3JjPXt7cmlnaHRJdGVtU3JjfX0gaWY9e3tyaWdodEl0ZW1TcmN9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgaWY9e3shbGVmdEl0ZW1TcmN9fSBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImNlbnRlci10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3RpdGxlQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJjZW50ZXJcIj57e3RpdGxlfX08L3RleHQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICB3aWR0aDogNzUwO1xuICAgIH1cbiAgICAucmlnaHQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICByaWdodDogMzI7IFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmxlZnQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICBsZWZ0IDozMjsgXG4gICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7ICBcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmNlbnRlci10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyNTsgXG4gICAgICAgIGxlZnQ6IDE3MjsgXG4gICAgICAgIHJpZ2h0OiAxNzI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgIGZvbnQtc2l6ZTogMzY7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmxlZnQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgbGVmdDogMjg7IFxuICAgICAgICB3aWR0aDogNTA7IFxuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgIH1cbiAgICAucmlnaHQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgcmlnaHQ6IDI4OyBcbiAgICAgICAgd2lkdGg6IDUwOyBcbiAgICAgICAgaGVpZ2h0OiA1MDtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuXG4gICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG5cbiAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxuICAgICAgICAgIGhlaWdodDogODgsXG5cbiAgICAgICAgICAvL+WvvOiIquadoeagh+mimCBcbiAgICAgICAgICB0aXRsZTogXCJcIixcblxuICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXG4gICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXG4gICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcbiAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7moIfpophcbiAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXG4gICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5sZWZ0SXRlbS5jbGljaycsIHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZT81ZTQ0MTQ3ZCIsInJlcXVpcmUoXCIuL3d4Yy1uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW5hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLW5hdnBhZ2Uud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1uYXZwYWdlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1uYXZwYWdlJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwid3hjLW5hdmJhclwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJkYXRhUm9sZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YVJvbGV9LFxuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn0sXG4gICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfSxcbiAgICAgICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICBcImxlZnRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9LFxuICAgICAgICBcImxlZnRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9LFxuICAgICAgICBcInJpZ2h0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgICAgXCJyaWdodEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICBcInJpZ2h0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcIm1hcmdpblRvcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIjx0ZW1wbGF0ZT5cbiAgXHQ8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgIFx0ICA8d3hjLW5hdmJhciBkYXRhLXJvbGU9e3tkYXRhUm9sZX19IGhlaWdodD17e2hlaWdodH19IGJhY2tncm91bmQtY29sb3I9e3tiYWNrZ3JvdW5kQ29sb3J9fSB0aXRsZT17e3RpdGxlfX0gdGl0bGUtY29sb3I9e3t0aXRsZUNvbG9yfX0gbGVmdC1pdGVtLXNyYz17e2xlZnRJdGVtU3JjfX0gbGVmdC1pdGVtLXRpdGxlPXt7bGVmdEl0ZW1UaXRsZX19IGxlZnQtaXRlbS1jb2xvcj17e2xlZnRJdGVtQ29sb3J9fSByaWdodC1pdGVtLXNyYz17e3JpZ2h0SXRlbVNyY319IHJpZ2h0LWl0ZW0tdGl0bGU9e3tyaWdodEl0ZW1UaXRsZX19IHJpZ2h0LWl0ZW0tY29sb3I9e3tyaWdodEl0ZW1Db2xvcn19Pjwvd3hjLW5hdmJhcj5cbiAgICBcdCAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6e3toZWlnaHR9fVwiPlxuICAgIFx0XHQgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICAgIFx0ICA8L2Rpdj5cbiAgXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgXHQud3JhcHBlciB7XG4gIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBcdFx0dG9wOiAwOyBcbiAgXHRcdGxlZnQ6IDA7IFxuICBcdFx0cmlnaHQ6IDA7IFxuICBcdFx0Ym90dG9tOiAwOyBcbiAgXHRcdHdpZHRoOiA3NTA7XG4gIFx0fVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGRhdGFSb2xlOiAnbmF2YmFyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgaGVpZ2h0OiA4OCxcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB0aXRsZUNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgIHJpZ2h0SXRlbVNyYzogJycsXG4gICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxuICAgICAgICAgIHJpZ2h0SXRlbUNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgIGxlZnRJdGVtU3JjOiAnJyxcbiAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcbiAgICAgICAgICBsZWZ0SXRlbUNvbG9yOiAnYmxhY2snLFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT8zMThmZmM4ZCIsInJlcXVpcmUoXCIuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10YWJiYXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXRhYmJhci53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRhYmJhci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGFiYmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdGFiaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGFiaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDQgNSA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyNCAyNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiY2xpY2tcIjogXCJvbmNsaWNraXRlbVwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidG9wLWxpbmVcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiLWljb25cIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pY29ufVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYi10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfSxcbiAgXCJ0b3AtbGluZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJoZWlnaHRcIjogMlxuICB9LFxuICBcInRhYi1pY29uXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiA1LFxuICAgIFwid2lkdGhcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogNDBcbiAgfSxcbiAgXCJ0YWItdGV4dFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogNSxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogMjBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge3tiYWNrZ3JvdW5kQ29sb3J9fVwiICBvbmNsaWNrPVwib25jbGlja2l0ZW1cIj5cbiAgICAgICAgPGltYWdlIGNsYXNzPVwidG9wLWxpbmVcIiBzcmMgPSBcImh0dHA6Ly9ndG1zMDMuYWxpY2RuLmNvbS90cHMvaTMvVEIxbWRzaU1wWFhYWFhwWFhYWE53NEpJWFhYLTY0MC00LnBuZ1wiPjwvaW1hZ2U+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRhYi1pY29uXCIgc3JjID0ge3tpY29ufX0+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dFwiIHN0eWxlPVwiY29sb3I6IHt7dGl0bGVDb2xvcn19XCI+e3t0aXRsZX19PC90ZXh0PlxuICAgIDwvZGl2PiAgXG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDE7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuICAgIC50b3AtbGluZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIGhlaWdodDogMjtcbiAgICB9XG4gICAgLnRhYi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHdpZHRoOiA0MDsgXG4gICAgICAgIGhlaWdodDogNDBcbiAgICB9XG4gICAgLnRhYi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgdGl0bGVDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgb25jbGlja2l0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IHZtLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdm0uJGRpc3BhdGNoKCd0YWJJdGVtLm9uQ2xpY2snLCBwYXJhbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MzIxZDNjZmEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJlbWJlZFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInZpc2liaWxpdHlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpc2liaWxpdHl9XG4gICAgICB9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zcmN9LFxuICAgICAgICBcInR5cGVcIjogXCJ3ZWV4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYmJhclwiXG4gICAgICBdLFxuICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInd4Yy10YWJpdGVtXCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpbmRleFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5kZXh9LFxuICAgICAgICAgICAgXCJpY29uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pY29ufSxcbiAgICAgICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgICAgIFwidGl0bGVDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vLjAuMi4wQHdlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjQgMjUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwcGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDg4XG4gIH0sXG4gIFwidGFiYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImhlaWdodFwiOiA4OFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+Ly4wLjIuMEB3ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCA1IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDI0IDI1IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxlbWJlZCBjbGFzcz1cImNvbnRlbnRcIiBzdHlsZT1cInZpc2liaWxpdHk6e3t2aXNpYmlsaXR5fX1cIiByZXBlYXQ9e3t0YWJJdGVtc319IHNyYz17e3NyY319IHR5cGU9XCJ3ZWV4XCI+PC9lbWJlZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmJhclwiIGFwcGVuZCA9IFwidHJlZVwiPlxuICAgICAgICAgICAgPHd4Yy10YWJpdGVtIHJlcGVhdD17e3RhYkl0ZW1zfX0gaW5kZXg9e3tpbmRleH19IGljb249e3tpY29ufX0gdGl0bGU9e3t0aXRsZX19IHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19Pjwvd3hjLXRhYkl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC53cmFwcGVyIHsgXG4gICAgICAgIHdpZHRoOiA3NTA7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC5jb250ZW50IHsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbWFyZ2luLXRvcDogMDsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4ODtcbiAgICB9XG4gICAgLnRhYmJhciB7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyAgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRhYkl0ZW1zOiBbIF0sXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmMDAwMCcsXG4gICAgICAgICAgdW5zZWxlY3RlZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkKHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgICB0aGlzLiRvbigndGFiSXRlbS5vbkNsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBkZXRhaWw9IGUuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZGV0YWlsLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChkZXRhaWwuaW5kZXgpO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbmRleDogZGV0YWlsLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ3RhYkJhci5vbkNsaWNrJywgcGFyYW1zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0aGlzLnRhYkl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5zZWxlY3RlZEltYWdlO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gdGhpcy5zZWxlY3RlZENvbG9yO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnVuc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgIFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4yLjBAd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlPzVhNGEwYmNiIiwidmFyIHN0cmVhbVxyXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LXRlbXAvYXBpJywgZnVuY3Rpb24gKF9fd2VleF9yZXF1aXJlX18pIHtcclxuICAgIHN0cmVhbSA9IF9fd2VleF9yZXF1aXJlX18oJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKVxyXG59KTtcclxudmFyIG5hdmlnYXRlXHJcbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC9hcGknLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xyXG4gICAgbmF2aWdhdGUgPSBfX3dlZXhfcmVxdWlyZV9fKCdAd2VleC1tb2R1bGUvbmF2aWdhdG9yJylcclxufSk7XHJcblxyXG52YXIgYXBpVVJMID0ge1xyXG4gICAgYmFzZXVybDogJ2h0dHA6Ly8xMzkuMTI5LjEyOC43NzozMDAwJyxcclxuICAgLy8gYmFzZXVybDogJ2h0dHA6Ly8xOTIuMTY4LjMuMTY0OjMwMDAnLFxyXG4gICAgZ2V0UmFuZG9tOicvZm9vZC93ZWF0aGVyJyxcclxuICAgIGdldFJlc3VsdDonL2Zvb2Qvc3VnZ2VzdCcsXHJcbiAgICBnZXRJbnZpdGU6Jy9mb29kL3RyZWF0JyxcclxuICAgIGdldFdlYXRoZXI6J2h0dHA6Ly9yb3V0ZS5zaG93YXBpLmNvbS85LTU/c2hvd2FwaV9hcHBpZD0yOTY5MSZzaG93YXBpX3NpZ249NGI1YzMxYmY5YmEzNGQxYTkzZjg2NTFhZDBiYzNjMWImZnJvbT01JyxcclxuICAgIGdldExvZ2luOicvdXNlcnMvbG9naW4nLFxyXG4gICAgZ2V0UmVnaXN0ZXI6Jy91c2Vycy9zaWdudXAnLFxyXG4gICAgZWRpdFVzZXJJbmZvOicvdXNlcnMvZWRpdEluZm8nLFxyXG4gICAgZ2V0Q3V0ZURhdGE6Jy9mb29kL2hlYXRMaXN0JyxcclxuICAgIGNob2ljZUxvdmU6Jy91c2Vycy9pTG92ZUl0JyxcclxufTtcclxuZnVuY3Rpb24gcG9zdERhdGEodXJsLG1zZyxjYWxsYmFjaykge1xyXG4gICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICBoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCd9LFxyXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkobXNnKVxyXG4gICAgfSwgZnVuY3Rpb24gKHJldGRhdGEpIHtcclxuICAgICAgICBjYWxsYmFjayhyZXRkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldERhdGEodXJsLGNhbGxiYWNrKSB7XHJcbiAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICB9LCBmdW5jdGlvbiAocmV0ZGF0YSkge1xyXG4gICAgICAgIGNhbGxiYWNrKHJldGRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXRSYW5kb20gPSBmdW5jdGlvbiAobXNnLGNhbGxiYWNrKSB7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCArIGFwaVVSTC5nZXRSYW5kb20sbXNnLGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRSZXN1bHQgPSBmdW5jdGlvbiAobXNnLGNhbGxiYWNrKSB7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCArIGFwaVVSTC5nZXRSZXN1bHQsbXNnLGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRJbnZpdGU9ZnVuY3Rpb24obXNnLGNhbGxiYWNrKXtcclxuICAgIHBvc3REYXRhKGFwaVVSTC5iYXNldXJsK2FwaVVSTC5nZXRJbnZpdGUsbXNnLGNhbGxiYWNrKVxyXG59O1xyXG5leHBvcnRzLmdldFdlYXRoZXI9ZnVuY3Rpb24obXNnLGNhbGxiYWNrKXtcclxuICAgIGdldERhdGEoYXBpVVJMLmdldFdlYXRoZXIrJyZsbmc9Jyttc2cubG5nKycmbGF0PScrbXNnLmxhdCxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0TG9naW49ZnVuY3Rpb24obXNnLGNhbGxiYWNrKXtcclxuICAgIHBvc3REYXRhKGFwaVVSTC5iYXNldXJsK2FwaVVSTC5nZXRMb2dpbixtc2csY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFJlZ2lzdGVyPWZ1bmN0aW9uKG1zZyxjYWxsYmFjayl7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCthcGlVUkwuZ2V0UmVnaXN0ZXIsbXNnLGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5lZGl0VXNlckluZm89ZnVuY3Rpb24obXNnLGNhbGxiYWNrKXtcclxuICAgIHBvc3REYXRhKGFwaVVSTC5iYXNldXJsK2FwaVVSTC5lZGl0VXNlckluZm8sbXNnLGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRDdXRlRGF0YT1mdW5jdGlvbihtc2csY2FsbGJhY2spe1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwrYXBpVVJMLmdldEN1dGVEYXRhLG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0SHVuZ3J5RGF0YT1mdW5jdGlvbihtc2csY2FsbGJhY2spe1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwrYXBpVVJMLmdldEN1dGVEYXRhLG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0RnJpZW5kRGF0YT1mdW5jdGlvbihtc2csY2FsbGJhY2spe1xyXG4gICAgcG9zdERhdGEoYXBpVVJMLmJhc2V1cmwrYXBpVVJMLmdldEN1dGVEYXRhLG1zZyxjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0UGFydHlEYXRhPWZ1bmN0aW9uKG1zZyxjYWxsYmFjayl7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCthcGlVUkwuZ2V0Q3V0ZURhdGEsbXNnLGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5jaG9pY2VMb3ZlPWZ1bmN0aW9uKG1zZyxjYWxsYmFjayl7XHJcbiAgICBwb3N0RGF0YShhcGlVUkwuYmFzZXVybCthcGlVUkwuY2hvaWNlTG92ZSxtc2csY2FsbGJhY2spO1xyXG59XHJcblxyXG5leHBvcnRzLmFwaVVSTCA9YXBpVVJMO1xyXG5leHBvcnRzLm5hdmlnYXRvciA9ZnVuY3Rpb24oYmFzZXVybCx0b3VybCxjYWxsYmFjayl7XHJcbiAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAndXJsJzogYmFzZXVybCArIHRvdXJsLFxyXG4gICAgICAnYW5pbWF0ZWQnOiAndHJ1ZSdcclxuICAgIH07XHJcbiAgICBuYXZpZ2F0ZS5wdXNoKHBhcmFtcywgY2FsbGJhY2spO1xyXG59XHJcbmV4cG9ydHMuZ2V0QmFzZVVybCA9IGZ1bmN0aW9uIChidW5kbGVVcmwsIGlzbmF2KSB7XHJcbiAgICBidW5kbGVVcmwgPSBuZXcgU3RyaW5nKGJ1bmRsZVVybCk7XHJcbiAgICB2YXIgbmF0aXZlQmFzZTtcclxuICAgIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKSA+PSAwO1xyXG5cclxuICAgIHZhciBpc2lPU0Fzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vLycpID49IDAgJiYgYnVuZGxlVXJsLmluZGV4T2YoJ1dlZXhEZW1vLmFwcCcpID4gMDtcclxuICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvZGlzdC8nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGhvc3QgPSAnbG9jYWxob3N0OjgwODAnO1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gL1xcL1xcLyhbXlxcL10rPylcXC8vLmV4ZWMoYnVuZGxlVXJsKTtcclxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIGhvc3QgPSBtYXRjaGVzWzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mraTlpITpnIDms6jmhI/kuIDkuIssdGFiYmFyIOeUqOeahOebtOaOpeaYr2pzYnVuZGxlIOeahOi3r+W+hCzkvYbmmK9uYXZpZ2F0b3LmmK/nm7TmjqXot7PovazliLDmlrDpobXpnaLkuIrnmoQuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSBpc25hdiA/ICdodHRwOi8vJyArIGhvc3QgKyAnL2luZGV4Lmh0bWw/cGFnZT0uL2Rpc3QvJyA6ICcvZGlzdC8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy9kaXN0Lyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hdGl2ZUJhc2U7XHJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tbW9uL2FwaS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiA0IDUgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL215aGVhZGVyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL215aGVhZGVyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1FOlxcXFxhYWFub3dcXFxcd2VleGxlYXJuXFxcXGJ1bmRsZXR3b1xcXFxFV2hhdFxcXFxub2RlX21vZHVsZXNcXFxcLjAuMy40QHdlZXgtbG9hZGVyXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL215aGVhZGVyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L215aGVhZGVyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGUvbXloZWFkZXIud2Vcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNSA4IDkgMTAgMTEgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImhlYWRcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJlXCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJiYWNrXCJcbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVzcmN9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVzcmN9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvbW9kdWxlL215aGVhZGVyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNSA4IDkgMTAgMTEgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJoZWFkXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpblRvcFwiOiA2MFxuICB9LFxuICBcInJlXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImhlaWdodFwiOiA5MCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogMjBcbiAgfSxcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgXCJoZWlnaHRcIjogODAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDEwMFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvbW9kdWxlL215aGVhZGVyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNSA4IDkgMTAgMTEgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMiLCI8dGVtcGxhdGU+XHJcblx0ICA8ZGl2IGNsYXNzPVwiaGVhZFwiPlxyXG5cdCAgICA8aW1hZ2UgY2xhc3M9XCJyZVwiIG9uY2xpY2s9XCJiYWNrXCIgc3JjPVwie3tyZXNyY319XCI+PC9pbWFnZT5cclxuXHQgICAgPGltYWdlIGNsYXNzPVwidGl0bGVcIiBzcmM9XCJ7e3RpdGxlc3JjfX1cIj48L2ltYWdlPlxyXG4gICAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gXHQuaGVhZHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O21hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAucmV7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7aGVpZ2h0OjkwcHg7YWxpZ24taXRlbXM6IGNlbnRlcjttYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtoZWlnaHQ6ODBweDthbGlnbi1pdGVtczogY2VudGVyO21hcmdpbi1sZWZ0OjEwMHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0ID5cclxuXHRtb2R1bGUuZXhwb3J0cyA9e1xyXG5cdFx0ZGF0YTp7XHJcblx0XHRcdHJlc3JjOlwiaHR0cDovL2QzLmZyZWVwLmNuLzN0Yl8xNjEyMjMxNTA0NDlzdHJ0NTgxMDY4LnBuZ1wiLFxyXG5cdFx0XHR0aXRsZXNyYzonJ1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRiYWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LiRlbWl0KCdiYWNrJyx7fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0Pj5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlL215aGVhZGVyLndlP2I0MDhhNDYyIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9yYW5kb20taXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9yYW5kb20taXRlbS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjMuNEB3ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109RTpcXFxcYWFhbm93XFxcXHdlZXhsZWFyblxcXFxidW5kbGV0d29cXFxcRVdoYXRcXFxcbm9kZV9tb2R1bGVzXFxcXC4wLjMuNEB3ZWV4LWxvYWRlclxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUU6XFxcXGFhYW5vd1xcXFx3ZWV4bGVhcm5cXFxcYnVuZGxldHdvXFxcXEVXaGF0XFxcXG5vZGVfbW9kdWxlc1xcXFwuMC4zLjRAd2VleC1sb2FkZXJcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9yYW5kb20taXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9yYW5kb20taXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlL3JhbmRvbS1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmltZ3VybH1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW1hZ2VcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRleHRcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL21vZHVsZS9yYW5kb20taXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogNjMwLFxuICAgIFwiaGVpZ2h0XCI6IDM0MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAzMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMzAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMjVcbiAgfSxcbiAgXCJ0ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQwLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIk1pY3Jvc29mdCBZYWhlaVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAzMCxcbiAgICBcIm1hcmdpblRvcFwiOiAyNVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvbW9kdWxlL3JhbmRvbS1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYiLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxpbWFnZSBzcmM9XCJ7e2ltZ3VybH19XCIgY2xhc3M9XCJpbWFnZVwiPjwvaW1hZ2U+XHJcblx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIiB2YWx1ZT1cInt7dGl0bGV9fVwiPjwvdGV4dD5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG5cdC5pbWFnZXtcclxuXHRcdHdpZHRoOjYzMHB4O2hlaWdodDozNDBweDtib3JkZXItcmFkaXVzOiAzMDttYXJnaW4tbGVmdDozMHB4O1xyXG5cdCAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdH1cclxuXHQudGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDQwO2ZvbnQtZmFtaWx5OiBNaWNyb3NvZnQgWWFoZWk7bWFyZ2luLWxlZnQ6IDMwO21hcmdpbi10b3A6IDI1O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG5cdG1vZHVsZS5leHBvcnRzPXtcclxuXHRcdGRhdGE6e2ltZ3VybDogJycsdGl0bGU6ICcnfVxyXG5cdH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9yYW5kb20taXRlbS53ZT8xMGM4MmRhZiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGV2aWNlSGVpZ2h0fSxcbiAgICAgICAgXCJ3aWR0aFwiOiA3NTBcbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBcImh0dHA6Ly9kMi5mcmVlcC5jbi8zdGJfMTcwMTAzMTA0NzQ4eXI4eDU4MTA2OC5qcGdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgXCJib3R0b21cIjogMCxcbiAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgyNTUsMjAwLDI1NSwwLjEpXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm15aGVhZGVyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlc3JjfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbS1ib3JkZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJyZXBlYXRcIjoge1xuICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYW5kb21MaXN0fSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJpdGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImluZGV4XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaW5kZXh9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJjaWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLml0ZW0uY29udGVudF9pZH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJvbkl0ZW1DbGlja1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJhbmRvbS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImltZ3VybFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5pbWd1cmx9LFxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNob3dNZW51fSxcbiAgICAgICAgICBcImlkXCI6IFwibWVudURpdlwiLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5kZXZpY2VIZWlnaHQpICsgJ3B4J30sXG4gICAgICAgICAgICBcIndpZHRoXCI6IDc1MCxcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgXCJ0b3BcIjogMCxcbiAgICAgICAgICAgIFwicmlnaHRcIjogMCxcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjYpXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJoaWRlTWVudVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIm1vZGFsXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDUwLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblRvcFwiOiA1MFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kYWwtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMub25TaG93SXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+Ly4wLjMuNEB3ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL21vZHVsZS9yYW5kb20ud2Vcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJpdGVtLWJvcmRlclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMzAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDIwLFxuICAgIFwid2lkdGhcIjogNzAwLFxuICAgIFwiaGVpZ2h0XCI6IDQ3MCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC42KVwiXG4gIH0sXG4gIFwibW9kYWwtdGV4dFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDUsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiTWljcm9zb2Z0IFlhaGVpXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzNSxcbiAgICBcImxpbmVIZWlnaHRcIjogNDVcbiAgfSxcbiAgXCJuYXZfYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiAxODAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjQ0RDREMxXCJcbiAgfSxcbiAgXCJuYXZfdGl0bGVcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwibW9kYWxcIjoge1xuICAgIFwid2lkdGhcIjogNjAwLFxuICAgIFwiaGVpZ2h0XCI6IDUwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNFREVERURcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAzMDAsXG4gICAgXCJsZWZ0XCI6IDc1LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDMwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMy40QHdlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi8uMC4zLjRAd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9tb2R1bGUvcmFuZG9tLndlXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gPGltYWdlIHN0eWxlPVwiaGVpZ2h0Ont7ZGV2aWNlSGVpZ2h0fX07d2lkdGg6NzUwcHg7XCIgc3JjPVwiaHR0cDovL2QyLmZyZWVwLmNuLzN0Yl8xNzAxMDMxMDQ3NDh5cjh4NTgxMDY4LmpwZ1wiPjwvaW1hZ2U+XHJcbiA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjAwLDI1NSwwLjEpO1wiPlxyXG4gICAgPG15aGVhZGVyIHRpdGxlc3JjPVwie3t0aXRsZXNyY319IFwiPjwvbXloZWFkZXI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJpdGVtLWJvcmRlclwiIHJlcGVhdD1cInt7aXRlbSBpbiByYW5kb21MaXN0fX1cIiBpbmRleD1cInt7JGluZGV4fX1cIj5cclxuICAgIDxkaXYgY2lkPVwie3tpdGVtLmNvbnRlbnRfaWR9fVwiIG9uY2xpY2s9XCJvbkl0ZW1DbGlja1wiID5cclxuICAgICAgICA8cmFuZG9tLWl0ZW0gaW1ndXJsPVwie3tpdGVtLmltZ3VybH19XCIgdGl0bGU9XCJ7e2l0ZW0udGl0bGV9fVwiPjwvcmFuZG9tLWl0ZW0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGlmPVwic2hvd01lbnVcIiBpZD1cIm1lbnVEaXZcIiBcclxuICAgIHN0eWxlPVwiaGVpZ2h0Ont7ZGV2aWNlSGVpZ2h0fX1weDt3aWR0aDo3NTBweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjYpXCIgb25jbGljaz1cImhpZGVNZW51XCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDo1MDA7aGVpZ2h0OjQwMDttYXJnaW4tbGVmdDo1MDttYXJnaW4tdG9wOjUwO1wiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibW9kYWwtdGV4dFwiPnt7b25TaG93SXRlbS5jb250ZW50fX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbiAgICAuaXRlbS1ib3JkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIGhlaWdodDo0NzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuXHJcbiAgICB9XHJcbiAgICAubW9kYWwtdGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnQgWWFoZWk7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDU7XHJcbiAgICB9XHJcbiAgICAubmF2X2JhciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRENEQzE7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdl90aXRsZSB7XHJcblxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5tb2RhbHtcclxuICAgICAgICB3aWR0aDo2MDBweDtoZWlnaHQ6NTAwcHg7YmFja2dyb3VuZC1jb2xvcjojRURFREVEO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozMDBweDtsZWZ0Ojc1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czozMDtcclxuICAgIH1cclxuXHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgcmVxdWlyZSgnd2VleC1jb21wb25lbnRzJyk7XHJcbiAgICB2YXIgbW9kYWwgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kYWwnKTtcclxuICAgIHZhciBhcGlzID0gcmVxdWlyZSgnLi4vY29tbW9uL2FwaScpO1xyXG4gICAgdmFyIG5hdmlnYXRvciA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9uYXZpZ2F0b3InKTtcclxuICAgIHZhciBTdG9yYWdlID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL3N0b3JhZ2UnKTtcclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICB0aXRsZXNyYzonaHR0cDovL2QzLmZyZWVwLmNuLzN0Yl8xNjEyMjIxNzQxNTZqbThtNTgxMDY4LnBuZycsXHJcblxyXG4gICAgICAgICAgICBzaG93TWVudTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRldmljZUhlaWdodDogMTMwMCxcclxuICAgICAgICAgICAgcmFuZG9tTGlzdDpbe1xyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnRfaWQnOjAsXHJcbiAgICAgICAgICAgICAgICAnaW1ndXJsJzonJyxcclxuICAgICAgICAgICAgICAgICdjb250ZW50JzonJyxcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6JydcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICAnY29udGVudF9pZCc6MSxcclxuICAgICAgICAgICAgICAgICdpbWd1cmwnOicnLFxyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzonJ1xyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgb25TaG93SXRlbTp7fSxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHJhbmRvbVwiKVxyXG4gICAgICAgICAgICB2YXIgYnVuZGxlVXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VVUkwgPSBhcGlzLmdldEJhc2VVcmwoYnVuZGxlVXJsLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGdldENvbmZpZyhmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldmljZUhlaWdodCA9IDc1MCAvIGNvbmZpZy5lbnYuZGV2aWNlV2lkdGggKiBjb25maWcuZW52LmRldmljZUhlaWdodDtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy4kb24oJ2JhY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgYXBpcy5uYXZpZ2F0b3Ioc2VsZi5iYXNlVVJMLCdtb2R1bGUvaG9tZS5qcycsZnVuY3Rpb24oKXt9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0UmFuZG9tRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pbWFnZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBtc2c9e307XHJcbiAgICAgICAgICAgICAgICBtc2cuY29uZGl0aW9uPScnO1xyXG4gICAgICAgICAgICAgICBhcGlzLmdldFJhbmRvbShtc2csZnVuY3Rpb24gKHJldGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmV0ZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPDI7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yYW5kb21MaXN0W2ldLnRpdGxlID0gZGF0YS5mb29kTGlzdFtpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJhbmRvbUxpc3RbaV0uY29udGVudCA9IGRhdGEuZm9vZExpc3RbaV0uZGVzY3JpYmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmFuZG9tTGlzdFtpXS5pbWd1cmwgPSBhcGlzLmFwaVVSTC5iYXNldXJsKycvaW1hZ2VzL2RiLycgKyBkYXRhLmZvb2RMaXN0W2ldLmltYWdlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJhbmRvbUxpc3RbaV0uY29udGVudF9pZD1pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25JdGVtQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbWlkID0gZS50YXJnZXQuYXR0ci5jaWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnJhbmRvbUxpc3RbaXRlbWlkXS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uU2hvd0l0ZW09c2VsZi5yYW5kb21MaXN0W2l0ZW1pZF07XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dNZW51PXRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhpZGVNZW51OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZj10aGlzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93TWVudT1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZS9yYW5kb20ud2U/NmRmOTVjZDkiXSwic291cmNlUm9vdCI6IiJ9