import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          1: "#000000",
          2: "#262626",
          3: "#4D4D4D",
          4: "#737373",
          5: "#999",
          6: "#BFBFBF",
          7: "#DEDEDE",
          8: "#FFF",
        },

        mint: {
          1: "#172121",
          2: "#2E4C4D",
          3: "#3F736E",
          4: "#4D9988",
          5: "#56BF9A",
          6: "#59DEA1",
          7: "#59FF9D",
        },

        green: {
          1: "#1B4D3E",
          2: "#227353",
          3: "#26995E",
          4: "#26BF5E",
          5: "#21DE50",
          6: "#26FF43",
        },

        leaf: {
          1: "#254D1B",
          2: "#518A68",
          3: "#60AC75",
          4: "#6AC87A",
          5: "#7AE67F",
        },

        neon: {
          1: "#3D7322",
          2: "#5A9926",
          3: "#7DBF26",
          4: "#A1DE21",
          5: "#D0FF26",
        },

        lightgreen: {
          1: "#678A51",
          2: "#82AC60",
          3: "#A1C86A",
          4: "#C6E67A",
        },

        blue: {
          1: "#171921",
          2: "#372E4D",
          3: "#483F73",
          4: "#504D99",
          5: "#565FBF",
          6: "#5976DE",
          7: "#5991FF",
        },

        cyan: {
          1: "#2E394D",
          2: "#3F5673",
          3: "#4D7999",
          4: "#56A2BF",
          5: "#59C8DE",
          6: "#59F7FF",
        },

        pink: {
          1: "#4D2E4B",
          2: "#733F6A",
          3: "#994D83",
          4: "#BF5693",
          5: "#DE5995",
          6: "#F69",
        },

        red: {
          1: "#260E10",
          2: "#4D182A",
          3: "#731E31",
          4: "#99202C",
          5: "#BF140A",
          6: "#DE2800",
          7: "#FF5100",
        },

        brown: {
          1: "#4D2A1F",
          2: "#734634",
          3: "#99664D",
          4: "#BF8A69",
          5: "#DEAA85",
          6: "#FFCEA6",
        },

        yellow: {
          1: "#733922",
          2: "#995526",
          3: "#BF7113",
          4: "#DE9B0B",
          5: "#FFD000",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
