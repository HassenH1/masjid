import React from "react";

function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="flex gap-2 items-center text-sm text-gray-500 sm:text-center">
          <img src="./logo.jpg" className="w-6" />
          Masjid Faatimah © 2025. All Rights Reserved.
        </span>
        <div className="flex gap-5">
          <span className="items-center text-sm text-white sm:text-center">
            <a
              href="tel:4806210096"
              className="text-blue-500 hover:text-blue-700"
            >
              (480) 621-0096
            </a>
          </span>
          <a
            href="https://www.facebook.com/MasjidFaatimahAzZahra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
