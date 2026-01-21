/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: {
          primary: "var(--btn-primary)",
          secondary: "var(--btn-secondary)",
          accent: "var(--btn-accent)",
          success: "var(--btn-success)",
          warning: "var(--btn-warning)",
          error: "var(--btn-error)",
          info: "var(--btn-info)",
        },
        white: "var(--white)",
        black: "var(--black)",
        charcoal: "var(--soft-charcoal)",
      },

      borderRadius: {
        md: "var(--radius-md)",
        pill: "var(--radius-pill)",
      },

      spacing: {
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
      },
    },
  },
  plugins: [],
};
