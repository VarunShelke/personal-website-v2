import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@fonts': path.resolve(__dirname, 'src/fonts'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@images': path.resolve(__dirname, 'src/images'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@data': path.resolve(__dirname, 'src/data'),
        },
    },
    build: {
        // Optimize build output
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separate vendor chunks for better caching
                    vendor: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                    styled: ['styled-components'],
                    animations: ['react-transition-group'],
                },
            },
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
    },
    server: {
        port: 3000,
        open: true,
    },
    // Enable CSS code splitting
    css: {
        devSourcemap: true,
    },
})
