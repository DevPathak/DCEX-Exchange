"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("node:url");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cdcex%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cdcex%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cdcex%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cdcex%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Projects_dcex_frontend_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"E:\\\\Projects\\\\dcex\\\\frontend\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Projects_dcex_frontend_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJvamVjdHMlNUNkY2V4JTVDZnJvbnRlbmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNQcm9qZWN0cyU1Q2RjZXglNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8/ZTcyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxQcm9qZWN0c1xcXFxkY2V4XFxcXGZyb250ZW5kXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXFByb2plY3RzXFxcXGRjZXhcXFxcZnJvbnRlbmRcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cdcex%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cdcex%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_app_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authConfig);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpQztBQUdXO0FBRTVDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxxREFBVUE7QUFFUSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCJAL2FwcC9kYlwiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCB7IEtleXBhaXIgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XHJcbmltcG9ydCB7IGF1dGhDb25maWcgfSBmcm9tIFwiQC9hcHAvbGliL2F1dGhcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoQ29uZmlnKTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aENvbmZpZyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/db/index.ts":
/*!*************************!*\
  !*** ./app/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLHdCQUF3QjtJQUM3QixPQUFPLElBQUlELHdEQUFZQTtBQUN4QjtBQUlBLE1BQU1FLGtCQUFrQkM7QUFJeEIsTUFBTUMsU0FBU0YsZ0JBQWdCRSxNQUFNLElBQUlIO0FBRXpDLGlFQUFlRyxNQUFNQSxFQUFDO0FBRXRCLElBQUlDLElBQXFDLEVBQUVILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vYXBwL2RiL2luZGV4LnRzPzU1MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcmlzbWFDbGllbnQoKTtcclxufTtcclxuXHJcbnR5cGUgUHJpc21hQ2xpZW50U2luZ2xldG9uID0gUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPjtcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcblx0cHJpc21hOiBQcmlzbWFDbGllbnRTaW5nbGV0b24gfCB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/db/index.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db */ \"(rsc)/./app/db/index.ts\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(rsc)/./node_modules/@solana/web3.js/lib/index.esm.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID ?? \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? \"\"\n        })\n    ],\n    callbacks: {\n        session: ({ session, token })=>{\n            const newSession = session;\n            if (newSession.user && token.uid) {\n                newSession.user.uid = token.uid ?? \"}\";\n            }\n            return newSession;\n        },\n        async jwt ({ token, account, profile }) {\n            const user = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                where: {\n                    sub: account?.providerAccountId ?? \"\"\n                }\n            });\n            if (user) {\n                token.uid = user.id;\n            }\n            return token;\n        },\n        async signIn ({ user, account, profile, email, credentials }) {\n            console.log({\n                user,\n                account,\n                profile,\n                email,\n                credentials\n            });\n            if (account?.provider === \"google\") {\n                const email = user.email;\n                if (!email) {\n                    return false;\n                }\n                const userDB = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                    where: {\n                        username: email\n                    }\n                });\n                if (userDB) {\n                    return true;\n                }\n                const keypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Keypair.generate();\n                const publicKey = keypair.publicKey.toBase58();\n                const privateKey = keypair.secretKey;\n                console.log(publicKey);\n                console.log(privateKey);\n                await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                    data: {\n                        username: email,\n                        name: user.name,\n                        profilePicture: user.image,\n                        provider: \"Google\",\n                        sub: account.providerAccountId,\n                        solWallet: {\n                            create: {\n                                publicKey: publicKey,\n                                privateKey: privateKey.toString()\n                            }\n                        },\n                        InrWallet: {\n                            create: {\n                                balance: 0\n                            }\n                        }\n                    }\n                });\n                return true;\n            }\n            return false;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMyQjtBQUNlO0FBQ2M7QUFXakQsTUFBTUcsYUFBYTtJQUN6QkMsV0FBVztRQUNWRixzRUFBY0EsQ0FBQztZQUNkRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQixJQUFJO1lBQzFDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQixJQUFJO1FBQ25EO0tBQ0E7SUFDREMsV0FBVztRQUNWQyxTQUFTLENBQUMsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQU87WUFDaEMsTUFBTUMsYUFBc0JGO1lBQzVCLElBQUlFLFdBQVdDLElBQUksSUFBSUYsTUFBTUcsR0FBRyxFQUFFO2dCQUNqQ0YsV0FBV0MsSUFBSSxDQUFDQyxHQUFHLEdBQUdILE1BQU1HLEdBQUcsSUFBSTtZQUNwQztZQUNBLE9BQU9GO1FBQ1I7UUFFQSxNQUFNRyxLQUFJLEVBQUVKLEtBQUssRUFBRUssT0FBTyxFQUFFQyxPQUFPLEVBQU87WUFDekMsTUFBTUosT0FBTyxNQUFNZiwyQ0FBTUEsQ0FBQ2UsSUFBSSxDQUFDSyxTQUFTLENBQUM7Z0JBQ3hDQyxPQUFPO29CQUNOQyxLQUFLSixTQUFTSyxxQkFBcUI7Z0JBQ3BDO1lBQ0Q7WUFDQSxJQUFJUixNQUFNO2dCQUNURixNQUFNRyxHQUFHLEdBQUdELEtBQUtTLEVBQUU7WUFDcEI7WUFDQSxPQUFPWDtRQUNSO1FBRUEsTUFBTVksUUFBTyxFQUFFVixJQUFJLEVBQUVHLE9BQU8sRUFBRUMsT0FBTyxFQUFFTyxLQUFLLEVBQUVDLFdBQVcsRUFBTztZQUMvREMsUUFBUUMsR0FBRyxDQUFDO2dCQUFFZDtnQkFBTUc7Z0JBQVNDO2dCQUFTTztnQkFBT0M7WUFBWTtZQUN6RCxJQUFJVCxTQUFTWSxhQUFhLFVBQVU7Z0JBQ25DLE1BQU1KLFFBQVFYLEtBQUtXLEtBQUs7Z0JBQ3hCLElBQUksQ0FBQ0EsT0FBTztvQkFDWCxPQUFPO2dCQUNSO2dCQUNBLE1BQU1LLFNBQVMsTUFBTS9CLDJDQUFNQSxDQUFDZSxJQUFJLENBQUNLLFNBQVMsQ0FBQztvQkFDMUNDLE9BQU87d0JBQ05XLFVBQVVOO29CQUNYO2dCQUNEO2dCQUNBLElBQUlLLFFBQVE7b0JBQ1gsT0FBTztnQkFDUjtnQkFFQSxNQUFNRSxVQUFVaEMsb0RBQU9BLENBQUNpQyxRQUFRO2dCQUNoQyxNQUFNQyxZQUFZRixRQUFRRSxTQUFTLENBQUNDLFFBQVE7Z0JBQzVDLE1BQU1DLGFBQWFKLFFBQVFLLFNBQVM7Z0JBQ3BDVixRQUFRQyxHQUFHLENBQUNNO2dCQUNaUCxRQUFRQyxHQUFHLENBQUNRO2dCQUNaLE1BQU1yQywyQ0FBTUEsQ0FBQ2UsSUFBSSxDQUFDd0IsTUFBTSxDQUFDO29CQUN4QkMsTUFBTTt3QkFDTFIsVUFBVU47d0JBQ1ZlLE1BQU0xQixLQUFLMEIsSUFBSTt3QkFDZkMsZ0JBQWdCM0IsS0FBSzRCLEtBQUs7d0JBQzFCYixVQUFVO3dCQUNWUixLQUFLSixRQUFRSyxpQkFBaUI7d0JBQzlCcUIsV0FBVzs0QkFDVkwsUUFBUTtnQ0FDUEosV0FBV0E7Z0NBQ1hFLFlBQVlBLFdBQVdRLFFBQVE7NEJBQ2hDO3dCQUNEO3dCQUNBQyxXQUFXOzRCQUNWUCxRQUFRO2dDQUNQUSxTQUFTOzRCQUNWO3dCQUNEO29CQUNEO2dCQUNEO2dCQUNBLE9BQU87WUFDUjtZQUNBLE9BQU87UUFDUjtJQUNEO0FBQ0QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vYXBwL2xpYi9hdXRoLnRzPzZiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vZGJcIjtcclxuaW1wb3J0IHsgS2V5cGFpciB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzZXNzaW9uIGV4dGVuZHMgU2Vzc2lvbiB7XHJcblx0dXNlcjoge1xyXG5cdFx0ZW1haWw6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGltYWdlOiBzdHJpbmc7XHJcblx0XHR1aWQ6IHN0cmluZztcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aENvbmZpZyA9IHtcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdEdvb2dsZVByb3ZpZGVyKHtcclxuXHRcdFx0Y2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgPz8gXCJcIixcclxuXHRcdFx0Y2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCA/PyBcIlwiLFxyXG5cdFx0fSksXHJcblx0XSxcclxuXHRjYWxsYmFja3M6IHtcclxuXHRcdHNlc3Npb246ICh7IHNlc3Npb24sIHRva2VuIH06IGFueSkgPT4ge1xyXG5cdFx0XHRjb25zdCBuZXdTZXNzaW9uOiBzZXNzaW9uID0gc2Vzc2lvbiBhcyBzZXNzaW9uO1xyXG5cdFx0XHRpZiAobmV3U2Vzc2lvbi51c2VyICYmIHRva2VuLnVpZCkge1xyXG5cdFx0XHRcdG5ld1Nlc3Npb24udXNlci51aWQgPSB0b2tlbi51aWQgPz8gXCJ9XCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG5ld1Nlc3Npb24hO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCwgcHJvZmlsZSB9OiBhbnkpIHtcclxuXHRcdFx0Y29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XHJcblx0XHRcdFx0d2hlcmU6IHtcclxuXHRcdFx0XHRcdHN1YjogYWNjb3VudD8ucHJvdmlkZXJBY2NvdW50SWQgPz8gXCJcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0XHR0b2tlbi51aWQgPSB1c2VyLmlkO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0b2tlbjtcclxuXHRcdH0sXHJcblxyXG5cdFx0YXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzIH06IGFueSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyh7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGVtYWlsLCBjcmVkZW50aWFscyB9KTtcclxuXHRcdFx0aWYgKGFjY291bnQ/LnByb3ZpZGVyID09PSBcImdvb2dsZVwiKSB7XHJcblx0XHRcdFx0Y29uc3QgZW1haWwgPSB1c2VyLmVtYWlsO1xyXG5cdFx0XHRcdGlmICghZW1haWwpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgdXNlckRCID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcclxuXHRcdFx0XHRcdHdoZXJlOiB7XHJcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiBlbWFpbCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKHVzZXJEQikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zdCBrZXlwYWlyID0gS2V5cGFpci5nZW5lcmF0ZSgpO1xyXG5cdFx0XHRcdGNvbnN0IHB1YmxpY0tleSA9IGtleXBhaXIucHVibGljS2V5LnRvQmFzZTU4KCk7XHJcblx0XHRcdFx0Y29uc3QgcHJpdmF0ZUtleSA9IGtleXBhaXIuc2VjcmV0S2V5O1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHB1YmxpY0tleSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocHJpdmF0ZUtleSk7XHJcblx0XHRcdFx0YXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dXNlcm5hbWU6IGVtYWlsLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiB1c2VyLm5hbWUsXHJcblx0XHRcdFx0XHRcdHByb2ZpbGVQaWN0dXJlOiB1c2VyLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRwcm92aWRlcjogXCJHb29nbGVcIixcclxuXHRcdFx0XHRcdFx0c3ViOiBhY2NvdW50LnByb3ZpZGVyQWNjb3VudElkLFxyXG5cdFx0XHRcdFx0XHRzb2xXYWxsZXQ6IHtcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHB1YmxpY0tleTogcHVibGljS2V5LFxyXG5cdFx0XHRcdFx0XHRcdFx0cHJpdmF0ZUtleTogcHJpdmF0ZUtleS50b1N0cmluZygpLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdElucldhbGxldDoge1xyXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFsYW5jZTogMCxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG5cdH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJLZXlwYWlyIiwiR29vZ2xlUHJvdmlkZXIiLCJhdXRoQ29uZmlnIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwibmV3U2Vzc2lvbiIsInVzZXIiLCJ1aWQiLCJqd3QiLCJhY2NvdW50IiwicHJvZmlsZSIsImZpbmRGaXJzdCIsIndoZXJlIiwic3ViIiwicHJvdmlkZXJBY2NvdW50SWQiLCJpZCIsInNpZ25JbiIsImVtYWlsIiwiY3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJ1c2VyREIiLCJ1c2VybmFtZSIsImtleXBhaXIiLCJnZW5lcmF0ZSIsInB1YmxpY0tleSIsInRvQmFzZTU4IiwicHJpdmF0ZUtleSIsInNlY3JldEtleSIsImNyZWF0ZSIsImRhdGEiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJpbWFnZSIsInNvbFdhbGxldCIsInRvU3RyaW5nIiwiSW5yV2FsbGV0IiwiYmFsYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@solana","vendor-chunks/tr46","vendor-chunks/@noble","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/rpc-websockets","vendor-chunks/openid-client","vendor-chunks/bn.js","vendor-chunks/node-fetch","vendor-chunks/@babel","vendor-chunks/whatwg-url","vendor-chunks/oauth","vendor-chunks/superstruct","vendor-chunks/text-encoding-utf-8","vendor-chunks/borsh","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/eventemitter3","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/jayson","vendor-chunks/node-gyp-build","vendor-chunks/bindings","vendor-chunks/cookie","vendor-chunks/webidl-conversions","vendor-chunks/base-x","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/bigint-buffer","vendor-chunks/utf-8-validate","vendor-chunks/file-uri-to-path","vendor-chunks/safe-buffer","vendor-chunks/bufferutil","vendor-chunks/bs58"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5CProjects%5Cdcex%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5Cdcex%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();