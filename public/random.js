/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/elements.js":
/*!****************************!*\
  !*** ./src/js/elements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftCircle": () => (/* binding */ leftCircle),
/* harmony export */   "rezCircle": () => (/* binding */ rezCircle),
/* harmony export */   "rezDiv": () => (/* binding */ rezDiv),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "section": () => (/* binding */ section)
/* harmony export */ });
var leftCircle = document.querySelector('.left');
var rezCircle = document.querySelector('.rez2');
var rezDiv = document.querySelector('.rez');
var reset = document.querySelector('.reset');
var start = document.querySelector('.start');
var section = document.querySelector('section');

/***/ }),

/***/ "./src/js/funkcijos.js":
/*!*****************************!*\
  !*** ./src/js/funkcijos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rand": () => (/* binding */ rand),
/* harmony export */   "go": () => (/* binding */ go),
/* harmony export */   "makeBall": () => (/* binding */ makeBall),
/* harmony export */   "countTimer": () => (/* binding */ countTimer)
/* harmony export */ });
//random fukcija
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
; //go funkcija, paleidzia kamuoliukus

function go(i) {
  //galima taip rasyti const go = () =
  var intViewportHeight = window.innerHeight - 100;
  var intViewportWidth = window.innerWidth - 100;
  var circle = document.querySelectorAll('.circle');
  circle[i].style.left = rand(0, intViewportWidth) + 'px';
  circle[i].style.top = rand(0, intViewportHeight) + 'px';
}
;
var makeBall = function makeBall() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var div = document.createElement('div');
  var divText = document.createTextNode(text);
  div.classList.add('circle');
  document.body.appendChild(div);
  div.appendChild(divText);

  if (text == 8) {
    div.style.fontSize = '40px';
    div.style.fontWeight = 'bold';
  }

  ;
};
var id, sec;
var countTimer = function countTimer(mode) {
  var timerEl = document.querySelector('.timmer');

  switch (mode) {
    case 'reset':
      timerEl.innerText = '0';
      sec = 0;
      clearInterval(id);

    case 'start':
      id = setInterval(function () {
        sec++;
        timerEl.innerText = sec;
      }, 1000);
  }
};

/***/ }),

/***/ "./src/js/random.js":
/*!**************************!*\
  !*** ./src/js/random.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _funkcijos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funkcijos */ "./src/js/funkcijos.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/js/elements.js");


var left, rez2, rez;

for (var i = 0; i < (0,_funkcijos__WEBPACK_IMPORTED_MODULE_0__.rand)(20, 100); i++) {
  (0,_funkcijos__WEBPACK_IMPORTED_MODULE_0__.makeBall)(i + 1);
}

(0,_funkcijos__WEBPACK_IMPORTED_MODULE_0__.countTimer)('reset');
var circle = document.querySelectorAll('.circle'); //intervalas kuris keicia judejimo trajektorijos laika

_elements__WEBPACK_IMPORTED_MODULE_1__.start.addEventListener('click', function () {
  console.log('labas');
  setInterval(function () {
    var _loop = function _loop(_i) {
      setTimeout(function () {
        (0,_funkcijos__WEBPACK_IMPORTED_MODULE_0__.go)(_i);
      }, (0,_funkcijos__WEBPACK_IMPORTED_MODULE_0__.rand)(0, 2000));
    };

    for (var _i = 0; _i < circle.length; _i++) {
      _loop(_i);
    }
  }, 2000);
  setInterval(function () {
    for (var _i2 = 0; _i2 < circle.length; _i2++) {
      (0,_funkcijos__WEBPACK_IMPORTED_MODULE_0__.go)(_i2); //spalvoti kamuoliukai

      circle[_i2].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }, 2000);
});
left = 0;
_elements__WEBPACK_IMPORTED_MODULE_1__.leftCircle.innerText = circle.length;
rez2 = 0;
_elements__WEBPACK_IMPORTED_MODULE_1__.rezCircle.innerText = rez2; //paspaudimu ant apskritimo nustatymai - paspausdi dingsta, pridedamas skaicius
//su forEach ciklu

circle.forEach(function (apskritimas) {
  apskritimas.addEventListener('click', function (e) {
    apskritimas.style.display = 'none';
    e.stopImmediatePropagation();
    _elements__WEBPACK_IMPORTED_MODULE_1__.rezCircle.innerText = ++rez2;
    _elements__WEBPACK_IMPORTED_MODULE_1__.leftCircle.innerText = circle.length - rez2;
  });
}); //su for ciklu
// for (let i = 0; i < circle.length; i++) {
//     circle[i].addEventListener('click', (e) => {
//         circle[i].style.display = 'none';
//         e.stopImmediatePropagation();
//         rezCircle.innerText = ++rez2;
//         leftCircle.innerText = circle.length - rez2;
//     })
// }
//pasauidmu skaiciacvimas ant body dalies (nepataikyti)

rez = 0;
_elements__WEBPACK_IMPORTED_MODULE_1__.rezDiv.innerText = rez; //nunulina div esancia informacija

document.querySelector('body').addEventListener('click', function () {
  return _elements__WEBPACK_IMPORTED_MODULE_1__.rezDiv.innerText = ++rez;
}); //RESET  MYGTUKAS

_elements__WEBPACK_IMPORTED_MODULE_1__.reset.addEventListener('click', function (e) {
  e.stopImmediatePropagation(); //sustabdo spaudimo skaiciiavima ant reset mygtuko

  rez = 0;
  _elements__WEBPACK_IMPORTED_MODULE_1__.rezDiv.innerText = rez;
  rez2 = 0;
  _elements__WEBPACK_IMPORTED_MODULE_1__.rezCircle.innerText = rez2; //su forEach ciklas

  _elements__WEBPACK_IMPORTED_MODULE_1__.leftCircle.innerText = circle.length;
  circle.forEach(function (resetCircle) {
    resetCircle.style.display = null;
  }); //su for ciklas
  // for (let i = 0; i < circle.length; i++) {
  //     circle[i].style.display = null;
  // }
  //grazina apskritima po paspausdimo reset mygtuko

  (0,_funkcijos__WEBPACK_IMPORTED_MODULE_0__.countTimer)('reset');
}); //uzdedam ant SECTION kad nereaguotu  i paspaudimus

_elements__WEBPACK_IMPORTED_MODULE_1__.section.addEventListener('click', function (e) {
  e.stopImmediatePropagation();
});

/***/ }),

/***/ "./src/css/random.scss":
/*!*****************************!*\
  !*** ./src/css/random.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/random": 0,
/******/ 			"public/random": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjavascript"] = self["webpackChunkjavascript"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/random"], () => (__webpack_require__("./src/js/random.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/random"], () => (__webpack_require__("./src/css/random.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;