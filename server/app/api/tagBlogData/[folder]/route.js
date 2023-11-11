"use strict";
(() => {
var exports = {};
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4508:
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

// NAMESPACE OBJECT: ./app/api/tagBlogData/[folder]/route.ts
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
;// CONCATENATED MODULE: ./app/api/tagBlogData/[folder]/route.ts


async function GET(req, { params }) {
    // 遍历文件夹获取tag值，路径在public下,build之后是在.next文件夹下的
    const files = await external_fs_.promises.readdir(`./source/${params.folder}`);
    return next_response/* default */.Z.json({
        app: files
    });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.12_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FtagBlogData%2F%5Bfolder%5D%2Froute&name=app%2Fapi%2FtagBlogData%2F%5Bfolder%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2FtagBlogData%2F%5Bfolder%5D%2Froute.ts&appDir=D%3A%5Cworkplace%5Cblog-website%5CYingCholocate.github.io%5Capp&appPaths=%2Fapi%2FtagBlogData%2F%5Bfolder%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/tagBlogData/[folder]/route","pathname":"/api/tagBlogData/[folder]","filename":"route","bundlePath":"app/api/tagBlogData/[folder]/route"},"resolvedPagePath":"D:\\workplace\\blog-website\\YingCholocate.github.io\\app\\api\\tagBlogData\\[folder]\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/tagBlogData/[folder]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [200,99], () => (__webpack_exec__(4508)));
module.exports = __webpack_exports__;

})();