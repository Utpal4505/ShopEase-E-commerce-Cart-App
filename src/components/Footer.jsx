import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#2027324d] border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail h-6 w-6 text-[#9767e4]"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <h3 className="text-2xl font-bold">Stay in the Loop</h3>
              </div>
              <p className="text-[#94a3b8] mb-6">
                Get the latest updates on new products, exclusive deals, and
                special offers delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  className="flex h-10 w-full rounded-md border border-[#202732] bg-[#11161d] px-3 py-2 text-base ring-offset-[#11161d] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#f8fafc] placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                  placeholder="Enter your email"
                  required=""
                  value=""
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#A276D7] h-10 px-4 py-2 gap-2"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-send h-4 w-4"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-[#94a3b8] mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-[#202732] h-[1px] w-full mb-12"
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-1">
              <a className="flex items-center space-x-2 mb-4" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-package h-8 w-8 text-[#9767e4]"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
                <span className="text-xl font-bold bg-gradient-to-r from-[#9767e4] to-purple-600 bg-clip-text text-transparent">
                  ShopEase
                </span>
              </a>
              <p className="text-sm text-[#94a3b8] mb-4">
                Making online shopping easy, enjoyable, and accessible to
                everyone.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#11161d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 rounded-md h-9 w-9 p-0 hover:bg-[#a663d920] hover:text-[#9767e4]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#11161d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 rounded-md h-9 w-9 p-0 hover:bg-[#a663d920] hover:text-[#9767e4]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-twitter h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#11161d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 rounded-md h-9 w-9 p-0 hover:bg-[#a663d920] hover:text-[#9767e4]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#11161d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 rounded-md h-9 w-9 p-0 hover:bg-[#a663d920] hover:text-[#9767e4]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/"
                  >
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/categories"
                  >
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/?sort=newest"
                  >
                    New Arrivals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/?sort=popular"
                  >
                    Best Sellers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/?sale=true"
                  >
                    Sale Items
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/about"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/"
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/"
                  >
                    Press
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    to="/"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Help Center
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Shipping Info
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Returns
                  </NavLink>
                </li>
                <li>
                  <a
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Size Guide
                  </a>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Track Order
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Terms of Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Cookie Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    Accessibility
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
