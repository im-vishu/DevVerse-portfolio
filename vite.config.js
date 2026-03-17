import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Changed to -swc

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  }
});