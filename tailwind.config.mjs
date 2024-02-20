/** @type {import('tailwindcss').Config} */

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");

const rem = (px) => `${round(px / 16)}rem`;

export const darkMode = ["class"];
export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "1rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["Noto Sans JP Variable", "sans-serif"],
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    typography: {
      DEFAULT: {
        css: {
          h1: {
            "margin-top": rem(64),
            "margin-bottom": rem(24),
            "letter-spacing": "0.04em",
            "line-height": 1.5,
            "font-size": rem(32),
            "font-weight": "normal",
            "@media(min-width: 768px)": {
              "line-height": 1.4,
              "font-size": rem(36),
              "font-weight": "500",
            },
          },
          h2: {
            "margin-top": rem(64),
            "margin-bottom": rem(24),
            "letter-spacing": "0.04em",
            "line-height": 1.5,
            "font-size": rem(28),
            "font-weight": "normal",
            "@media(min-width: 768px)": {
              "font-size": rem(32),
              "font-weight": "500",
            },
          },
          h3: {
            "margin-top": rem(40),
            "margin-bottom": rem(24),
            "letter-spacing": "0.04em",
            "line-height": 1.5,
            "font-size": rem(24),
            "font-weight": "normal",
            "@media(min-width: 768px)": {
              "font-size": rem(28),
              "font-weight": "500",
            },
          },
          h4: {
            "margin-top": rem(40),
            "margin-bottom": rem(16),
            "letter-spacing": "0.04em",
            "line-height": 1.5,
            "font-size": rem(20),
            "font-weight": "normal",
            "@media(min-width: 768px)": {
              "font-size": rem(24),
              "font-weight": "500",
            },
          },
          h5: {
            "margin-top": rem(40),
            "margin-bottom": rem(16),
            "letter-spacing": "0.04em",
            "line-height": 1.7,
            "font-size": rem(16),
            "font-weight": "normal",
            "@media(min-width: 768px)": {
              "line-height": 1.5,
              "font-size": rem(20),
              "font-weight": "500",
            },
          },
          p: {
            "margin-top": rem(16),
            "margin-bottom": rem(16),
            "letter-spacing": "0.04em",
            "line-height": 1.7,
          },
          ul: {
            "margin-top": rem(16),
            "margin-bottom": rem(16),
            "letter-spacing": "0.04em",
            "line-height": 1.7,
          },
          ol: {
            "margin-top": rem(16),
            "margin-bottom": rem(16),
            "letter-spacing": "0.04em",
            "line-height": 1.7,
          },
          figure: {
            "margin-top": rem(16),
            "margin-bottom": rem(16),
          },
        },
      },
    },
  },
};
export const plugins = [
  require("tailwindcss-animate"),
  require("@tailwindcss/typography"),
];
