import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
const path = require('path');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    // Add an Alias  for the folder /resources/
    resolve: {
        alias: {
            '~recources': '/resourcess',
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
});
