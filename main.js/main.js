/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionList)\n/* harmony export */ });\nfunction initAccordionList() {\n  const termos = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n\n  function ativarDescricao() {\n    this.nextElementSibling.classList.toggle('ativo'); // selecionando o elemento de baixo\n    this.classList.toggle('ativo');\n  }\n\n  if (termos.length) {\n    termos[0].classList.add('ativo');\n    termos[0].nextElementSibling.classList.add('ativo');\n\n    termos.forEach((termo) => {\n      termo.addEventListener('click', ativarDescricao);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const valores = +numero.innerText;\n      const total = Math.floor(valores / 100);\n      let start = 0;\n\n      const temporizador = setInterval(() => {\n        start += total;\n        numero.innerText = start;\n        if (start > valores) {\n          numero.innerText = valores;\n          clearInterval(temporizador);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observador;\n  function handleObserver(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observador.disconnect();\n      animaNumeros();\n    }\n  }\n  observador = new MutationObserver(handleObserver);\n\n  const observerTarget = document.querySelector('.numeros');\n\n  observador.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/anima-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anima-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaScroll)\n/* harmony export */ });\nfunction initAnimaScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n\n  function animateSection() {\n    const halfPage = window.innerHeight * 0.7;\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top - halfPage;\n      if (sectionTop < 0) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n\n  if (sections.length) {\n    sections[0].classList.add('ativo');\n    window.addEventListener('scroll', animateSection);\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/anima-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n  const link = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('ativo');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, () => {\n      this.classList.remove('ativo');\n    });\n  }\n\n  link.forEach((links) => {\n    ['touchstart', 'click'].forEach((eventos) => {\n      links.addEventListener(eventos, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() { }\n\nfunction createAnimal(animais) {\n  const div = document.createElement('div');\n  div.classList.add('numero-animal');\n  div.innerHTML = `<h3>${animais.especie}</h3> <span data-numero>${animais.quantidade}</span>`;\n  return div;\n}\n\nasync function fetchAnimais(url) {\n  try {\n    const animaisResponse = await fetch(url);\n    const animaisJSON = await animaisResponse.json();\n    const animalGrid = document.querySelector('.numeros-grid');\n    animaisJSON.forEach((animais) => {\n      const animalContent = createAnimal(animais);\n      animalGrid.appendChild(animalContent);\n    });\n    (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  } catch (erro) {\n    console.log(erro);\n  }\n}\n\nfetchAnimais('../../animais.json');\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() { }\n\nfetch('https://blockchain.info/ticker')\n  .then((resp) => resp.json())\n  .then((bitcoin) => {\n    const span = document.querySelector('.btc-preco');\n    span.innerText = (5000 / bitcoin.BRL.sell).toFixed(4);\n  })\n  .catch((erro) => {\n    console.log(Error(erro));\n  });\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funciomanto = document.querySelector('[data-semana]');\n\n  const diasSemana = funciomanto.dataset.semana.split(',').map(Number);\n  const horariosSemana = funciomanto.dataset.horario.split(',').map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horasAgora = dataAgora.getHours();\n\n  const diaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horaAberto = horasAgora >= horariosSemana[0] && horasAgora < horariosSemana[1];\n\n  if (diaAberto && horaAberto) {\n    funciomanto.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() { }\n\nconst button = document.querySelector('[data-menu=\"button\"]');\nconst list = document.querySelector('#menu');\n\nfunction openMenu() {\n  list.classList.add('ativo');\n  button.classList.add('ativo');\n  (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(list, () => {\n    list.classList.remove('ativo');\n    button.classList.remove('ativo');\n  });\n}\n\nbutton.addEventListener('click', openMenu);\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const buttonOpen = document.querySelector('[data-modal=\"abrir\"]');\n  const buttonClose = document.querySelector('[data-modal=\"fechar\"]');\n  const modalContainer = document.querySelector('[data-modal=\"container\"]');\n\n  function openModal(event) {\n    event.preventDefault();\n    modalContainer.classList.add('ativo');\n  }\n\n  function closeModal(event) {\n    event.preventDefault();\n    modalContainer.classList.remove('ativo');\n  }\n\n  function outsideClickModal(event) {\n    if (event.target === this) {\n      closeModal(event);\n    }\n  }\n\n  if (buttonOpen && buttonClose && modalContainer) {\n    buttonOpen.addEventListener('click', openModal);\n    buttonClose.addEventListener('click', closeModal);\n    modalContainer.addEventListener('click', outsideClickModal);\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, callback) {\n  const html = document.documentElement;\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute('data-outside', '');\n      html.removeEventListener('click', handleOutsideClick);\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute('data-outside')) {\n    setTimeout(() => {\n      html.addEventListener('click', handleOutsideClick);\n    });\n    element.setAttribute('data-outside', '');\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  const links = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n  function onScrollSuave(event) {\n    event.preventDefault();\n    const href = event.target.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'center',\n    });\n  }\n\n  if (links.length) {\n    const linkSelecionado = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n    linkSelecionado.forEach((link) => {\n      link.addEventListener('click', onScrollSuave);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const imagens = document.querySelectorAll('[data-tab=\"imagens\"] img');\n  const descricoes = document.querySelectorAll('[data-tab=\"descricao\"] section');\n\n  function ativarDescricao(index) {\n    descricoes.forEach((descricao) => {\n      descricao.classList.remove('ativo');\n    });\n    descricoes[index].classList.add('ativo');\n  }\n\n  if (imagens.length && descricoes.length) {\n    descricoes[0].classList.add('ativo');\n\n    imagens.forEach((imagem, index) => {\n      imagem.addEventListener('click', () => {\n        ativarDescricao(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltip = document.querySelectorAll('[data-tooltip]');\n\n  const onMouseMove = {\n    tooltipBox: '',\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    tooltipBox: '',\n    element: '',\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function createTooltip(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.innerText = text;\n    tooltipBox.classList.add('tooltip');\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseoverTooltip() {\n    const tooltipBox = createTooltip(this);\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltip.forEach((item) => {\n    item.addEventListener('mouseover', onMouseoverTooltip);\n  });\n}\n\n\n//# sourceURL=webpack://projeto-animais/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/anima-scroll.js */ \"./js/modules/anima-scroll.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_outsideclick_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/outsideclick.js */ \"./js/modules/outsideclick.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_anima_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_outsideclick_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n\n//# sourceURL=webpack://projeto-animais/./js/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;