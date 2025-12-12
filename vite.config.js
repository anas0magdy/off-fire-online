import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ⚠️ هام جداً: استبدل 'YOUR_REPO_NAME' باسم المستودع بتاعك بالظبط على جيت هب
  // لو اسم المستودع off-fire-online يبقى تكتب: '/off-fire-online/'
  base: '/off-fire-online/', 
})