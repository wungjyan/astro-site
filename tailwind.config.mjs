function getCssVar(variableName) {
  return `var(${variableName})`;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: getCssVar("--color-text-base"),
          accent: getCssVar("--color-accent"),
          inverted: getCssVar("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: getCssVar("--color-fill"),
          accent: getCssVar("--color-accent"),
          inverted: getCssVar("--color-text-base"),
          card: getCssVar("--color-card"),
        },
      },
      outlineColor: {
        skin: {
          fill: getCssVar("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: getCssVar("--color-border"),
          fill: getCssVar("--color-text-base"),
          accent: getCssVar("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: getCssVar("--color-text-base"),
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
