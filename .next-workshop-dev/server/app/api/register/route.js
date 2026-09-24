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
exports.id = "app/api/register/route";
exports.ids = ["app/api/register/route"];
exports.modules = {

/***/ "(rsc)/./app/api/register/route.js":
/*!***********************************!*\
  !*** ./app/api/register/route.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_1__]);\npg__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n    connectionString: process.env.DATABASE_URL,\n    ssl: {\n        rejectUnauthorized: false\n    }\n});\nasync function POST(req) {\n    try {\n        const { name, phone, email, status, interest, ticketId } = await req.json();\n        const client = await pool.connect();\n        // Create table if not exists\n        await client.query(`\n      CREATE TABLE IF NOT EXISTS registrations (\n        id SERIAL PRIMARY KEY,\n        name VARCHAR(255) NOT NULL,\n        phone VARCHAR(50) NOT NULL,\n        email VARCHAR(255) NOT NULL,\n        status VARCHAR(100),\n        interest VARCHAR(255),\n        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n        ticket_downloaded BOOLEAN DEFAULT FALSE,\n        ticket_id VARCHAR(50)\n      )\n    `);\n        // Add columns if they don't exist (for existing tables)\n        try {\n            await client.query('ALTER TABLE registrations ADD COLUMN ticket_downloaded BOOLEAN DEFAULT FALSE');\n        } catch (e) {}\n        try {\n            await client.query('ALTER TABLE registrations ADD COLUMN ticket_id VARCHAR(50)');\n        } catch (e) {}\n        // Insert user\n        const result = await client.query('INSERT INTO registrations (name, phone, email, status, interest, ticket_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', [\n            name,\n            phone,\n            email,\n            status,\n            interest,\n            ticketId\n        ]);\n        client.release();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            id: result.rows[0].id\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Registration error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal Server Error'\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNqQjtBQUUxQixNQUFNRSxPQUFPLElBQUlELG9DQUFJQSxDQUFDO0lBQ3BCRSxrQkFBa0JDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtJQUMxQ0MsS0FBSztRQUNIQyxvQkFBb0I7SUFDdEI7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1OLElBQUlPLElBQUk7UUFFekUsTUFBTUMsU0FBUyxNQUFNaEIsS0FBS2lCLE9BQU87UUFFakMsNkJBQTZCO1FBQzdCLE1BQU1ELE9BQU9FLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7SUFZcEIsQ0FBQztRQUVELHdEQUF3RDtRQUN4RCxJQUFJO1lBQUUsTUFBTUYsT0FBT0UsS0FBSyxDQUFDO1FBQWlGLEVBQUUsT0FBT0MsR0FBRyxDQUFDO1FBQ3ZILElBQUk7WUFBRSxNQUFNSCxPQUFPRSxLQUFLLENBQUM7UUFBK0QsRUFBRSxPQUFPQyxHQUFHLENBQUM7UUFFckcsY0FBYztRQUNkLE1BQU1DLFNBQVMsTUFBTUosT0FBT0UsS0FBSyxDQUMvQiw0SEFDQTtZQUFDVDtZQUFNQztZQUFPQztZQUFPQztZQUFRQztZQUFVQztTQUFTO1FBR2xERSxPQUFPSyxPQUFPO1FBRWQsT0FBT3ZCLHFEQUFZQSxDQUFDaUIsSUFBSSxDQUFDO1lBQUVPLFNBQVM7WUFBTUMsSUFBSUgsT0FBT0ksSUFBSSxDQUFDLEVBQUUsQ0FBQ0QsRUFBRTtRQUFDLEdBQUc7WUFBRVgsUUFBUTtRQUFJO0lBQ25GLEVBQUUsT0FBT2EsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsdUJBQXVCQTtRQUNyQyxPQUFPM0IscURBQVlBLENBQUNpQixJQUFJLENBQUM7WUFBRVUsT0FBTztRQUF3QixHQUFHO1lBQUViLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1PSEFNTUVEIFRIQUxIQSBBXFxPbmVEcml2ZVxcRGVza3RvcFxcUHJvbW90aW9uYWwgUGFnZVxcYXBwXFxhcGlcXHJlZ2lzdGVyXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBQb29sIH0gZnJvbSAncGcnO1xuXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gIHNzbDoge1xuICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2VcbiAgfVxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbmFtZSwgcGhvbmUsIGVtYWlsLCBzdGF0dXMsIGludGVyZXN0LCB0aWNrZXRJZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHBvb2wuY29ubmVjdCgpO1xuICAgIFxuICAgIC8vIENyZWF0ZSB0YWJsZSBpZiBub3QgZXhpc3RzXG4gICAgYXdhaXQgY2xpZW50LnF1ZXJ5KGBcbiAgICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHJlZ2lzdHJhdGlvbnMgKFxuICAgICAgICBpZCBTRVJJQUwgUFJJTUFSWSBLRVksXG4gICAgICAgIG5hbWUgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICBwaG9uZSBWQVJDSEFSKDUwKSBOT1QgTlVMTCxcbiAgICAgICAgZW1haWwgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLFxuICAgICAgICBzdGF0dXMgVkFSQ0hBUigxMDApLFxuICAgICAgICBpbnRlcmVzdCBWQVJDSEFSKDI1NSksXG4gICAgICAgIGNyZWF0ZWRfYXQgVElNRVNUQU1QIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgICAgIHRpY2tldF9kb3dubG9hZGVkIEJPT0xFQU4gREVGQVVMVCBGQUxTRSxcbiAgICAgICAgdGlja2V0X2lkIFZBUkNIQVIoNTApXG4gICAgICApXG4gICAgYCk7XG4gICAgXG4gICAgLy8gQWRkIGNvbHVtbnMgaWYgdGhleSBkb24ndCBleGlzdCAoZm9yIGV4aXN0aW5nIHRhYmxlcylcbiAgICB0cnkgeyBhd2FpdCBjbGllbnQucXVlcnkoJ0FMVEVSIFRBQkxFIHJlZ2lzdHJhdGlvbnMgQUREIENPTFVNTiB0aWNrZXRfZG93bmxvYWRlZCBCT09MRUFOIERFRkFVTFQgRkFMU0UnKTsgfSBjYXRjaCAoZSkge31cbiAgICB0cnkgeyBhd2FpdCBjbGllbnQucXVlcnkoJ0FMVEVSIFRBQkxFIHJlZ2lzdHJhdGlvbnMgQUREIENPTFVNTiB0aWNrZXRfaWQgVkFSQ0hBUig1MCknKTsgfSBjYXRjaCAoZSkge31cblxuICAgIC8vIEluc2VydCB1c2VyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KFxuICAgICAgJ0lOU0VSVCBJTlRPIHJlZ2lzdHJhdGlvbnMgKG5hbWUsIHBob25lLCBlbWFpbCwgc3RhdHVzLCBpbnRlcmVzdCwgdGlja2V0X2lkKSBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYpIFJFVFVSTklORyBpZCcsXG4gICAgICBbbmFtZSwgcGhvbmUsIGVtYWlsLCBzdGF0dXMsIGludGVyZXN0LCB0aWNrZXRJZF1cbiAgICApO1xuXG4gICAgY2xpZW50LnJlbGVhc2UoKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGlkOiByZXN1bHQucm93c1swXS5pZCB9LCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1JlZ2lzdHJhdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQb29sIiwicG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwiUE9TVCIsInJlcSIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwic3RhdHVzIiwiaW50ZXJlc3QiLCJ0aWNrZXRJZCIsImpzb24iLCJjbGllbnQiLCJjb25uZWN0IiwicXVlcnkiLCJlIiwicmVzdWx0IiwicmVsZWFzZSIsInN1Y2Nlc3MiLCJpZCIsInJvd3MiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/register/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_MOHAMMED_THALHA_A_OneDrive_Desktop_Promotional_Page_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/register/route.js */ \"(rsc)/./app/api/register/route.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([C_Users_MOHAMMED_THALHA_A_OneDrive_Desktop_Promotional_Page_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__]);\nC_Users_MOHAMMED_THALHA_A_OneDrive_Desktop_Promotional_Page_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/register/route\",\n        pathname: \"/api/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/register/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\MOHAMMED THALHA A\\\\OneDrive\\\\Desktop\\\\Promotional Page\\\\app\\\\api\\\\register\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_MOHAMMED_THALHA_A_OneDrive_Desktop_Promotional_Page_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNT0hBTU1FRCUyMFRIQUxIQSUyMEElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNQcm9tb3Rpb25hbCUyMFBhZ2UlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q01PSEFNTUVEJTIwVEhBTEhBJTIwQSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1Byb21vdGlvbmFsJTIwUGFnZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDK0M7QUFDNUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGLHFDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE1PSEFNTUVEIFRIQUxIQSBBXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcUHJvbW90aW9uYWwgUGFnZVxcXFxhcHBcXFxcYXBpXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZWdpc3Rlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JlZ2lzdGVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXE1PSEFNTUVEIFRIQUxIQSBBXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcUHJvbW90aW9uYWwgUGFnZVxcXFxhcHBcXFxcYXBpXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = import("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();