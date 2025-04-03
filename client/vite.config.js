"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
            },
            '/auth': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false
            },
        },
    },
});
