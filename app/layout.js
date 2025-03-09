import Footer from "./components/general/footer/Footer";
import Navbar from "./components/general/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Masjid Faatimah",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
