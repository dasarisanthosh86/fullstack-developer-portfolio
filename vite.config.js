import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fullstack-developer-portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
});
