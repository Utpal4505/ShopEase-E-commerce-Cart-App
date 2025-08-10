import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="sticky top-0 z-50 w-full border-b bg-[#11161df2] backdrop-blur transition-all duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* // --------------- Logo & Home Route --------------- */}
              <NavLink to="/" className="flex items-center space-x-2 group">
                <div className="logo">
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
                    className="lucide lucide-package h-8 w-8 text-[#9767e4] transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                    <path d="M12 22V12"></path>
                    <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                    <path d="m7.5 4.27 9 5.15"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#9767e4] via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  ShopEase
                </span>
              </NavLink>
              {/* // --------------- Routings Left side Navbar --------------- */}
              <div className="hidden md:flex items-center space-x-1 justify-start">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-[#202732] hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-[#202732] hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Categories
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-[#202732] hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-[#202732] hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Contact
                </NavLink>
              </div>

              {/* // --------------- Routings Files center --------------- */}
              <div className="hidden lg:flex flex-1 max-w-md mx-8">
                <div className="relative w-full group">
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
                    class="lucide lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8] transition-colors group-focus-within:text-[#9767e4]"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-[#202732] bg-[#11161d] px-3 py-2 text-base ring-offset-[#11161d] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#f8fafc] placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 transition-all duration-200 focus:ring-2 focus:ring-[#9767e433]"
                    placeholder="Search products..."
                  />
                </div>
              </div>

              {/* // --------------- Routings Files Right --------------- */}
              <div className="flex items-center space-x-2">
                <button
                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#11161d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-[#253547] hover:text-[#f8fafc] h-9 rounded-md px-3 relative group"
                  type="button"
                  id="radix-:r0:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
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
                    class="lucide lucide-sun h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </button>

                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-[#202732] hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Wishlist
                </NavLink>

                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-[#202732] hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Cart
                </NavLink>

                <button
                  class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-[#253547] hover:text-[#f8fafc] h-9 rounded-md px-3 gap-1 group transition-all duration-200 hover:scale-105"
                  type="button"
                  id="radix-:r2:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
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
                    class="lucide lucide-user h-5 w-5"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
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
                    class="lucide lucide-chevron-down h-3 w-3 transition-transform group-data-[state=open]:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
