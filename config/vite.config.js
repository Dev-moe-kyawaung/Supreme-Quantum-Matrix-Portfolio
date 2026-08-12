import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    base: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                '404': resolve(__dirname, '404.html')
            }
        }
    },
    server: {
        port: 3000,
        host: true
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './'),
            '@js': resolve(__dirname, './js'),
            '@css': resolve(__dirname, './css'),
            '@assets': resolve(__dirname, './assets'),
            '@pages': resolve(__dirname, './pages')
        }
    },
    optimizeDeps: {
        include: ['three', 'gsap', 'd3']
    }
});
