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
exports.id = "app/api/payment-success/route";
exports.ids = ["app/api/payment-success/route"];
exports.modules = {

/***/ "(rsc)/./app/api/payment-success/route.js":
/*!******************************************!*\
  !*** ./app/api/payment-success/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/dist/esm/nodemailer.js\");\n\n\nasync function POST(req) {\n    try {\n        const { payment_id, order_id, user, ticketId } = await req.json();\n        // 1. Configure Nodemailer (Requires SMTP_USER and SMTP_PASS in .env.local)\n        // If not provided, it will gracefully exit without crashing the app.\n        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {\n            console.warn(\"Email skipped: SMTP_USER and SMTP_PASS are not configured in .env.local\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: true,\n                emailSent: false,\n                message: \"Payment verified but email not configured\"\n            });\n        }\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTransport({\n            host: 'smtp.hostinger.com',\n            port: 465,\n            secure: true,\n            auth: {\n                user: process.env.SMTP_USER,\n                pass: process.env.SMTP_PASS\n            }\n        });\n        // 2. Generate QR Code URL using a free public API (safe for emails)\n        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(ticketId + '|' + user.name + '|' + user.email)}`;\n        // 3. Create the HTML Email Template\n        const htmlTemplate = `\n      <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\">\n        \n        <!-- Header -->\n        <div style=\"background-color: #006fff; padding: 30px; text-align: center;\">\n          <h1 style=\"color: white; margin: 0; font-size: 28px;\">Digital Ghuru</h1>\n          <p style=\"color: #fedc32; margin: 5px 0 0 0; font-size: 16px; font-weight: bold;\">AI Career Transformation Academy</p>\n        </div>\n\n        <!-- Body -->\n        <div style=\"padding: 40px 30px; background-color: #ffffff;\">\n          <h2 style=\"color: #0f172a; margin-top: 0;\">Thank you, ${user.name}!</h2>\n          <p style=\"color: #475569; font-size: 16px; line-height: 1.6;\">\n            Your payment for the Digital Marketing AI Tools Workshop was successful. \n            We are thrilled to have you join us!\n          </p>\n          \n          <div style=\"background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 30px 0; border: 1px dashed #cbd5e1;\">\n            <p style=\"margin: 0 0 10px 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: bold;\">Your Ticket ID</p>\n            <p style=\"margin: 0; color: #ff5c00; font-size: 32px; font-weight: 900; letter-spacing: 2px;\">#${ticketId}</p>\n          </div>\n\n          <!-- QR Code Section -->\n          <div style=\"text-align: center; margin-top: 40px;\">\n            <p style=\"color: #0f172a; font-weight: bold; margin-bottom: 15px;\">Scan at Entry:</p>\n            <img src=\"${qrCodeUrl}\" alt=\"Your Ticket QR Code\" style=\"width: 200px; height: 200px; border-radius: 8px; border: 10px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.1);\" />\n          </div>\n        </div>\n\n        <!-- Footer -->\n        <div style=\"background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b;\">\n          <p style=\"margin: 0;\">Payment ID: ${payment_id}</p>\n          <p style=\"margin: 5px 0 0 0;\">If you have any questions, please contact us at support@digitalghuru.in</p>\n        </div>\n      </div>\n    `;\n        // 4. Send the email\n        await transporter.sendMail({\n            from: `\"Digital Ghuru\" <${process.env.SMTP_USER}>`,\n            to: user.email,\n            subject: \"🎟️ Your Workshop Ticket - Digital Ghuru\",\n            html: htmlTemplate\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            emailSent: true\n        });\n    } catch (error) {\n        console.error('Payment success webhook error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to process email'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BheW1lbnQtc3VjY2Vzcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDUDtBQUU3QixlQUFlRSxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1KLElBQUlLLElBQUk7UUFFL0QsMkVBQTJFO1FBQzNFLHFFQUFxRTtRQUNyRSxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxJQUFJLENBQUNGLFFBQVFDLEdBQUcsQ0FBQ0UsU0FBUyxFQUFFO1lBQ3BEQyxRQUFRQyxJQUFJLENBQUM7WUFDYixPQUFPZCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFTyxTQUFTO2dCQUFNQyxXQUFXO2dCQUFPQyxTQUFTO1lBQTRDO1FBQ25IO1FBRUEsTUFBTUMsY0FBY2pCLGtFQUEwQixDQUFDO1lBQzdDbUIsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsTUFBTTtnQkFDSmpCLE1BQU1HLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztnQkFDM0JhLE1BQU1mLFFBQVFDLEdBQUcsQ0FBQ0UsU0FBUztZQUM3QjtRQUNGO1FBRUEsb0VBQW9FO1FBQ3BFLE1BQU1hLFlBQVksQ0FBQyw4REFBOEQsRUFBRUMsbUJBQW1CbkIsV0FBVyxNQUFNRCxLQUFLcUIsSUFBSSxHQUFHLE1BQU1yQixLQUFLc0IsS0FBSyxHQUFHO1FBRXRKLG9DQUFvQztRQUNwQyxNQUFNQyxlQUFlLENBQUM7Ozs7Ozs7Ozs7O2dFQVdzQyxFQUFFdkIsS0FBS3FCLElBQUksQ0FBQzs7Ozs7Ozs7MkdBUStCLEVBQUVwQixTQUFTOzs7Ozs7c0JBTWhHLEVBQUVrQixVQUFVOzs7Ozs7NENBTVUsRUFBRXJCLFdBQVc7Ozs7SUFJckQsQ0FBQztRQUVELG9CQUFvQjtRQUNwQixNQUFNYyxZQUFZWSxRQUFRLENBQUM7WUFDekJDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRXRCLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsRHFCLElBQUkxQixLQUFLc0IsS0FBSztZQUNkSyxTQUFTO1lBQ1RDLE1BQU1MO1FBQ1I7UUFFQSxPQUFPN0IscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFTyxTQUFTO1lBQU1DLFdBQVc7UUFBSztJQUU1RCxFQUFFLE9BQU9tQixPQUFPO1FBQ2R0QixRQUFRc0IsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDaEQsT0FBT25DLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRTJCLE9BQU87UUFBMEIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0U7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNT0hBTU1FRCBUSEFMSEEgQVxcT25lRHJpdmVcXERlc2t0b3BcXFByb21vdGlvbmFsIFBhZ2VcXGFwcFxcYXBpXFxwYXltZW50LXN1Y2Nlc3NcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHBheW1lbnRfaWQsIG9yZGVyX2lkLCB1c2VyLCB0aWNrZXRJZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIC8vIDEuIENvbmZpZ3VyZSBOb2RlbWFpbGVyIChSZXF1aXJlcyBTTVRQX1VTRVIgYW5kIFNNVFBfUEFTUyBpbiAuZW52LmxvY2FsKVxuICAgIC8vIElmIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBncmFjZWZ1bGx5IGV4aXQgd2l0aG91dCBjcmFzaGluZyB0aGUgYXBwLlxuICAgIGlmICghcHJvY2Vzcy5lbnYuU01UUF9VU0VSIHx8ICFwcm9jZXNzLmVudi5TTVRQX1BBU1MpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkVtYWlsIHNraXBwZWQ6IFNNVFBfVVNFUiBhbmQgU01UUF9QQVNTIGFyZSBub3QgY29uZmlndXJlZCBpbiAuZW52LmxvY2FsXCIpO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZW1haWxTZW50OiBmYWxzZSwgbWVzc2FnZTogXCJQYXltZW50IHZlcmlmaWVkIGJ1dCBlbWFpbCBub3QgY29uZmlndXJlZFwiIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgaG9zdDogJ3NtdHAuaG9zdGluZ2VyLmNvbScsXG4gICAgICBwb3J0OiA0NjUsXG4gICAgICBzZWN1cmU6IHRydWUsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlNNVFBfVVNFUixcbiAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuU01UUF9QQVNTLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIDIuIEdlbmVyYXRlIFFSIENvZGUgVVJMIHVzaW5nIGEgZnJlZSBwdWJsaWMgQVBJIChzYWZlIGZvciBlbWFpbHMpXG4gICAgY29uc3QgcXJDb2RlVXJsID0gYGh0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0yNTB4MjUwJmRhdGE9JHtlbmNvZGVVUklDb21wb25lbnQodGlja2V0SWQgKyAnfCcgKyB1c2VyLm5hbWUgKyAnfCcgKyB1c2VyLmVtYWlsKX1gO1xuXG4gICAgLy8gMy4gQ3JlYXRlIHRoZSBIVE1MIEVtYWlsIFRlbXBsYXRlXG4gICAgY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87IGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7IGJvcmRlci1yYWRpdXM6IDEycHg7IG92ZXJmbG93OiBoaWRkZW47IGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMDUpO1wiPlxuICAgICAgICBcbiAgICAgICAgPCEtLSBIZWFkZXIgLS0+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ZmZmOyBwYWRkaW5nOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XCI+XG4gICAgICAgICAgPGgxIHN0eWxlPVwiY29sb3I6IHdoaXRlOyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMjhweDtcIj5EaWdpdGFsIEdodXJ1PC9oMT5cbiAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjZmVkYzMyOyBtYXJnaW46IDVweCAwIDAgMDsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogYm9sZDtcIj5BSSBDYXJlZXIgVHJhbnNmb3JtYXRpb24gQWNhZGVteTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBCb2R5IC0tPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogNDBweCAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1wiPlxuICAgICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMGYxNzJhOyBtYXJnaW4tdG9wOiAwO1wiPlRoYW5rIHlvdSwgJHt1c2VyLm5hbWV9ITwvaDI+XG4gICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzQ3NTU2OTsgZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogMS42O1wiPlxuICAgICAgICAgICAgWW91ciBwYXltZW50IGZvciB0aGUgRGlnaXRhbCBNYXJrZXRpbmcgQUkgVG9vbHMgV29ya3Nob3Agd2FzIHN1Y2Nlc3NmdWwuIFxuICAgICAgICAgICAgV2UgYXJlIHRocmlsbGVkIHRvIGhhdmUgeW91IGpvaW4gdXMhXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IG1hcmdpbjogMzBweCAwOyBib3JkZXI6IDFweCBkYXNoZWQgI2NiZDVlMTtcIj5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwIDAgMTBweCAwOyBjb2xvcjogIzY0NzQ4YjsgZm9udC1zaXplOiAxNHB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBmb250LXdlaWdodDogYm9sZDtcIj5Zb3VyIFRpY2tldCBJRDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOiAwOyBjb2xvcjogI2ZmNWMwMDsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogOTAwOyBsZXR0ZXItc3BhY2luZzogMnB4O1wiPiMke3RpY2tldElkfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gUVIgQ29kZSBTZWN0aW9uIC0tPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDQwcHg7XCI+XG4gICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjMGYxNzJhOyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLWJvdHRvbTogMTVweDtcIj5TY2FuIGF0IEVudHJ5OjwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtxckNvZGVVcmx9XCIgYWx0PVwiWW91ciBUaWNrZXQgUVIgQ29kZVwiIHN0eWxlPVwid2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIwMHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTsgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBGb290ZXIgLS0+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5OyBwYWRkaW5nOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM2NDc0OGI7XCI+XG4gICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDA7XCI+UGF5bWVudCBJRDogJHtwYXltZW50X2lkfTwvcD5cbiAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogNXB4IDAgMCAwO1wiPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSBjb250YWN0IHVzIGF0IHN1cHBvcnRAZGlnaXRhbGdodXJ1LmluPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAvLyA0LiBTZW5kIHRoZSBlbWFpbFxuICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgIGZyb206IGBcIkRpZ2l0YWwgR2h1cnVcIiA8JHtwcm9jZXNzLmVudi5TTVRQX1VTRVJ9PmAsXG4gICAgICB0bzogdXNlci5lbWFpbCxcbiAgICAgIHN1YmplY3Q6IFwi8J+On++4jyBZb3VyIFdvcmtzaG9wIFRpY2tldCAtIERpZ2l0YWwgR2h1cnVcIixcbiAgICAgIGh0bWw6IGh0bWxUZW1wbGF0ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGVtYWlsU2VudDogdHJ1ZSB9KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BheW1lbnQgc3VjY2VzcyB3ZWJob29rIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBwcm9jZXNzIGVtYWlsJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibm9kZW1haWxlciIsIlBPU1QiLCJyZXEiLCJwYXltZW50X2lkIiwib3JkZXJfaWQiLCJ1c2VyIiwidGlja2V0SWQiLCJqc29uIiwicHJvY2VzcyIsImVudiIsIlNNVFBfVVNFUiIsIlNNVFBfUEFTUyIsImNvbnNvbGUiLCJ3YXJuIiwic3VjY2VzcyIsImVtYWlsU2VudCIsIm1lc3NhZ2UiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInBhc3MiLCJxckNvZGVVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJuYW1lIiwiZW1haWwiLCJodG1sVGVtcGxhdGUiLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJodG1sIiwiZXJyb3IiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/payment-success/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpayment-success%2Froute&page=%2Fapi%2Fpayment-success%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpayment-success%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpayment-success%2Froute&page=%2Fapi%2Fpayment-success%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpayment-success%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_MOHAMMED_THALHA_A_OneDrive_Desktop_Promotional_Page_app_api_payment_success_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/payment-success/route.js */ \"(rsc)/./app/api/payment-success/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/payment-success/route\",\n        pathname: \"/api/payment-success\",\n        filename: \"route\",\n        bundlePath: \"app/api/payment-success/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\MOHAMMED THALHA A\\\\OneDrive\\\\Desktop\\\\Promotional Page\\\\app\\\\api\\\\payment-success\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_MOHAMMED_THALHA_A_OneDrive_Desktop_Promotional_Page_app_api_payment_success_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwYXltZW50LXN1Y2Nlc3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBheW1lbnQtc3VjY2VzcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBheW1lbnQtc3VjY2VzcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNT0hBTU1FRCUyMFRIQUxIQSUyMEElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNQcm9tb3Rpb25hbCUyMFBhZ2UlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q01PSEFNTUVEJTIwVEhBTEhBJTIwQSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q1Byb21vdGlvbmFsJTIwUGFnZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDc0Q7QUFDbkk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXE1PSEFNTUVEIFRIQUxIQSBBXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcUHJvbW90aW9uYWwgUGFnZVxcXFxhcHBcXFxcYXBpXFxcXHBheW1lbnQtc3VjY2Vzc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcGF5bWVudC1zdWNjZXNzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGF5bWVudC1zdWNjZXNzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wYXltZW50LXN1Y2Nlc3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxNT0hBTU1FRCBUSEFMSEEgQVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFByb21vdGlvbmFsIFBhZ2VcXFxcYXBwXFxcXGFwaVxcXFxwYXltZW50LXN1Y2Nlc3NcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpayment-success%2Froute&page=%2Fapi%2Fpayment-success%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpayment-success%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "node:child_process":
/*!*************************************!*\
  !*** external "node:child_process" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:child_process");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:dns":
/*!***************************!*\
  !*** external "node:dns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:dns");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ "node:net":
/*!***************************!*\
  !*** external "node:net" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:net");

/***/ }),

/***/ "node:os":
/*!**************************!*\
  !*** external "node:os" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:tls":
/*!***************************!*\
  !*** external "node:tls" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:tls");

/***/ }),

/***/ "node:url":
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ "node:zlib":
/*!****************************!*\
  !*** external "node:zlib" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpayment-success%2Froute&page=%2Fapi%2Fpayment-success%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpayment-success%2Froute.js&appDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMOHAMMED%20THALHA%20A%5COneDrive%5CDesktop%5CPromotional%20Page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();