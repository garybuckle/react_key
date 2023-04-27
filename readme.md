Created using [Vite](https://vitejs.dev/guide/).

Installing TailWindCS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

in tailwind.config.js

content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
