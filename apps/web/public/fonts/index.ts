import { Fredoka, Jaro } from "next/font/google";

export const fredoka_moto = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const jaro = Jaro({
  subsets: ["latin"],
});
