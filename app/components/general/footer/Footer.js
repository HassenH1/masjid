import React from "react";

function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="flex gap-2 items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <img src="./logo.jpg" className="w-6" />
          Masjid Faatimah © 2025. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
