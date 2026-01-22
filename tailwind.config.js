/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          "primary-light": "rgb(var(--text-primary-light) / <alpha-value>)",
          "primary-dark": "rgb(var(--text-primary-dark) / <alpha-value>)",
          "secondary-light": "rgb(var(--text-secondary-light) / <alpha-value>)",
          "secondary-dark": "rgb(var(--text-secondary-dark) / <alpha-value>)",
          "muted-light": "rgb(var(--text-muted-light) / <alpha-value>)",
          "muted-dark": "rgb(var(--text-muted-dark) / <alpha-value>)",
        },
        bg: {
          light: "rgb(var(--bg-light) / <alpha-value>)",
          dark: "rgb(var(--bg-dark) / <alpha-value>)",
        },
        surface: {
          light: "rgb(var(--surface-light) / <alpha-value>)",
          dark: "rgb(var(--surface-dark) / <alpha-value>)",
        },
        elevated: {
          light: "rgb(var(--elevated-light) / <alpha-value>)",
          dark: "rgb(var(--elevated-dark) / <alpha-value>)",
        },
        border: {
          "subtle-light": "rgb(var(--border-light) / <alpha-value>)",
          "subtle-dark": "rgb(var(--border-dark) / <alpha-value>)",
        },
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      borderRadius: {
        shell: "var(--radius-shell)",
        card: "var(--radius-card)",
        button: "var(--radius-button)",
      },
      boxShadow: {
        "card-light": "var(--shadow-card-light)",
        "card-dark": "var(--shadow-card-dark)",
      },
    },
  },
  plugins: [],
}
