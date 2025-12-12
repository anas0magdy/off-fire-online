import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // لو انت شغال بـ Tailwind v4

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // تأكد إن ده موجود لو انت بتستخدم tailwind v4
  ],
  // ⚠️ هام جداً: استبدل 'repo-name' باسم المستودع بتاعك على جيت هب بين علامتين /
  // لو اسم المشروع off-fire-online يبقى تكتب: '/off-fire-online/'
  base: '/', 
})