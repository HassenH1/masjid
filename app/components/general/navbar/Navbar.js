"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "About us", href: "#about-us" },
    { name: "Services", href: "#services" },
  ];
  const toggleOpen = () => setOpen(false);

  return (
    <nav className="bg-white fixed w-full max-w-[1500px]">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="./logo.jpg"
                alt="Masjid Faatimah"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-12">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    // onClick={toggleOpen}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-950 hover:text-gray-500"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                ))}
                <span className="flex justify-center items-center">
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
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className="sm:hidden shadow-md"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleOpen}
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-blue-950 hover:text-gray-500"
              aria-current="page"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
