"use strict";
(() => {
var exports = {};
exports.id = 191;
exports.ids = [191];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 6229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/tagData/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(9994);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(2126);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(4984);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./app/api/tagData/route.ts


async function GET() {
    // 遍历文件夹获取tag值，路径在public下,build之后是在.next文件夹下的
    const files = await external_fs_.promises.readdir("./source");
    return next_response/* default */.Z.json({
        app: files
    });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FtagData%2Froute&name=app%2Fapi%2FtagData%2Froute&pagePath=private-next-app-dir%2Fapi%2FtagData%2Froute.ts&appDir=D%3A%5Cworkplace%5Cblog-website%5CYingCholocate.github.io%5Capp&appPaths=%2Fapi%2FtagData%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/tagData/route","pathname":"/api/tagData","filename":"route","bundlePath":"app/api/tagData/route"},"resolvedPagePath":"D:\\workplace\\blog-website\\YingCholocate.github.io\\app\\api\\tagData\\route.ts","nextConfigOutput":"export"}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/tagData/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [200,99], () => (__webpack_exec__(6229)));
module.exports = __webpack_exports__;

})();