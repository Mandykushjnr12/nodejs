/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      
    extend: {
      screens: {
        'sm': '640px',   // Small screens (sm)
        'md': '768px',   // Medium screens (md)
        'lg': '1024px',  // Large screens (lg)
        'xl': '1280px',  // Extra large screens (xl)
        '2xl': '1536px', // 2X Extra large screens (2xl)
  
        // Custom breakpoints
        'tablet': '640px',   // Tablet screens
        'laptop': '1024px',  // Laptop screens
        'desktop': '1280px', // Desktop screens
      },
    },
    fontFamily: {
      "grapey": ["Grape Nuts", "cursive"]
    }
  },
  plugins: [],
}

