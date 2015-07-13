/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/7/13.
	 */
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	///<reference path="../typings/tsd.d.ts"/>
	var React = __webpack_require__(1);
	var Pixi = __webpack_require__(2);
	var core = __webpack_require__(3);
	/**
	 * Created by tommyZZM on 2015/7/11.
	 */
	var game;
	(function (game) {
	    var AppInterface = (function (_super) {
	        __extends(AppInterface, _super);
	        function AppInterface() {
	            _super.apply(this, arguments);
	        }
	        AppInterface.prototype.render = function () {
	            return (React.createElement("h1", null, "Hello, world!"));
	        };
	        return AppInterface;
	    })(React.Component);
	    game.AppInterface = AppInterface;
	})(game || (game = {}));
	/**
	 * Created by tommyZZM on 2015/7/7.
	 */
	var game;
	(function (game) {
	    var EventDispatcher = core.EventDispatcher;
	    Pixi;
	    var Main = (function (_super) {
	        __extends(Main, _super);
	        function Main() {
	            _super.call(this);
	            //console.log(AppInterface);
	            React.render((React.createElement(game.AppInterface, null)), document.getElementById('example'));
	        }
	        return Main;
	    })(EventDispatcher);
	    game.Main = Main;
	    new Main();
	})(game || (game = {}));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window.PIXI;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by tommyZZM on 2015/7/11.
	 */
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by tommyZZM on 2015/7/10.
	 */
	module.exports = core;
	//export  = alsc; 
	/**
	 * Created by tommyZZM on 2015/7/9.
	 */
	var core;
	(function (core) {
	    var EventDispatcher = (function () {
	        function EventDispatcher() {
	            this.eventsMap = {};
	        }
	        EventDispatcher.prototype.emit = function (event) {
	            var param = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                param[_i - 1] = arguments[_i];
	            }
	            var eventmap = this.eventsMap[event];
	            if (Array.isArray(eventmap)) {
	                notifyArray(eventmap, param);
	            }
	        };
	        EventDispatcher.prototype.addListener = function (event, callback, thisObject, priority) {
	            registNotify(this.eventsMap, event, callback, thisObject, null, priority);
	        };
	        EventDispatcher.prototype.removeListener = function (event, callback, thisObject) {
	            unregistNotify(this.eventsMap, event, callback, thisObject);
	        };
	        EventDispatcher.prototype.removeAllListener = function (event) {
	            this.eventsMap[event] = [];
	        };
	        EventDispatcher.prototype.on = function (event, callback) {
	            var eventmap = this.eventsMap[event];
	            if (Array.isArray(eventmap)) {
	                notifyArray(eventmap);
	            }
	        };
	        EventDispatcher.prototype.once = function (event, callback) {
	            var eventmap = this.eventsMap[event];
	            if (Array.isArray(eventmap)) {
	                notifyArray(eventmap);
	            }
	            this.removeAllListener(event);
	        };
	        return EventDispatcher;
	    })();
	    core.EventDispatcher = EventDispatcher;
	    function registNotify(notifymap, name, callback, thisObject, param, priority) {
	        if (!notifymap[name])
	            notifymap[name] = [];
	        var map = notifymap[name];
	        var length = map.length;
	        var insertIndex = -1;
	        if (priority === undefined)
	            priority = 0;
	        for (var i = 0; i < length; i++) {
	            var bin = map[i];
	            if (bin && bin.callback === callback && bin.thisObject === thisObject) {
	                return false; //防止重复插入
	            }
	            if (bin && insertIndex == -1 && bin.priority < priority) {
	                insertIndex = i;
	            }
	        }
	        var bin = { callback: callback, thisObject: thisObject, param: param ? param : [], priority: priority };
	        if (insertIndex != -1) {
	            map.splice(insertIndex, 0, bin);
	        }
	        else {
	            map.push(bin);
	        }
	        notifymap[name] = map;
	    }
	    function unregistNotify(notifymap, name, callback, thisObject) {
	        if (!notifymap[name])
	            return;
	        var map = notifymap[name];
	        if (map) {
	            for (var i in map) {
	                var bin = map[i];
	                if (bin && bin.callback === callback && bin.thisObject === thisObject) {
	                    map.splice(i, 1);
	                }
	            }
	            notifymap[name] = map;
	        }
	    }
	    function notify(notifymap, name, param) {
	        var map = notifymap[name];
	        if (map) {
	            notifyArray(map, param);
	            return true;
	        }
	        else {
	            return false;
	        }
	    }
	    function notifyArray(arr, param) {
	        var length = arr.length;
	        for (var i = 0; i < length; i++) {
	            var bin = arr[i];
	            if (bin && bin.callback) {
	                if (!param)
	                    param = [];
	                if (bin.param)
	                    param = bin.param.concat(param);
	                bin.callback.apply(bin.thisObject, param);
	            }
	        }
	    }
	})(core || (core = {}));


/***/ }
/******/ ]);