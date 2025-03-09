import Footer from "./components/general/footer/Footer";
import Navbar from "./components/general/navbar/Navbar";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const playFairDisplay = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Masjid Faatimah",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playFairDisplay.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
