import "./globals.css";
import { Margarine, Montserrat_Alternates, MuseoModerno } from "next/font/google";
// app/layout.js or pages/_app.js
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import LoaderWrapper from "./componets/LoaderWrapper";
config.autoAddCss = false


// Load fonts with desired weights
const margarine = Margarine({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-margarine",
});

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

const museo = MuseoModerno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-museo",
});

export const metadata = {
  title: "GreenKart",
  description: "Eco-friendly e-commerce platform",
  icons: {
    icon: "/vercel.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${margarine.variable} ${montserrat.variable} ${museo.variable}`}>
      <body className="overflow-x-hidden">
        <LoaderWrapper>{children}</LoaderWrapper>
        </body>
    </html>
  );
}
