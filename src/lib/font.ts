import { Poppins, Josefin_Slab} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-sans',
});

export const josefin_slab = Josefin_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-serif',
});