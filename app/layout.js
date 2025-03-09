import Footer from "./components/general/footer/Footer";
import Navbar from "./components/general/navbar/Navbar";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
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
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        {children}
        <section className="py-2 sticky md:hidden bottom-0 w-full flex flex-col items-center justify-center bg-white gap-4 shadow-2xl px-7">
          <p className="text-xs">
            Abu Huraira reported: The Messenger of Allah, said, “Charity does
            not decrease wealth”
          </p>
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="RZH3PLNAANE3C"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </section>
        <Footer />
      </body>
    </html>
  );
}
