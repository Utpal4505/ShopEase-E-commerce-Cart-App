import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();
  const showSearch = location.pathname === "/";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-[#11161d] text-black dark:text-white shadow-md">
        <nav className=" w-full border-b dark:bg-[#11161df2] backdrop-blur transition-all duration-100">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
              {/* // --------------- Nav Left side Navbar --------------- */}
              <div className="hidden md:flex items-center space-x-1 justify-start">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-[#202732] hover:bg-[#9fa0a185] hover:text-[#161616f1] dark:hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-[#202732] hover:bg-[#9fa0a185] hover:text-[#161616f1] dark:hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Categories
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-[#202732] hover:bg-[#9fa0a185] hover:text-[#161616f1] dark:hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-[#202732] hover:bg-[#9fa0a185] hover:text-[#161616f1] dark:hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  Contact
                </NavLink>
              </div>

              {/* // --------------- Nav Files center --------------- */}
              <div
                className={`${
                  showSearch ? "lg:flex" : "hidden"
                }  flex-1 max-w-md mx-8`}
              >
                <div className="relative w-full group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8] transition-colors group-focus-within:text-[#9767e4]"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-[#e4e3e3d5] dark:border-[#202732] dark:bg-[#11161d] px-3 py-2 text-base dark:ring-offset-[#11161d] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#f8fafc] placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 transition-all duration-200 focus:ring-2 focus:ring-[#9767e433]"
                    placeholder="Search products..."
                  />
                </div>
              </div>

              {/* // --------------- Nav Files Right --------------- */}
              <div className="flex items-center space-x-2">
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#11161d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 dark:hover:bg-[#253547] dark:hover:text-[#f8fafc] hover:bg-[#9fa0a185] hover:text-[#161616f1] h-9 rounded-md px-3 relative group"
                  type="button"
                  id="radix-:r0:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  onClick={() => setIsDark((prev) => !prev)}
                >
                  {isDark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-moon h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sun h-5 w-5 transition-transform duration-200 group-hover:scale-110"
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
                  )}
                </button>

                <NavLink
                  to="/wishlist"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-[#202732] hover:bg-[#9fa0a185] hover:text-[#161616f1] dark:hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart h-5 w-5 transition-colors"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  Wishlist
                </NavLink>

                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#9767e4] text-[#f8fafc] hover:bg-[#9767e4e6] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                      : `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9767e4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:hover:bg-[#202732] hover:bg-[#9fa0a185] hover:text-[#161616f1] dark:hover:text-[#f8fafc] h-10 px-4 py-2 transition-all duration-200 hover:scale-105`
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart h-5 w-5"
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                  Cart
                </NavLink>

                <div className="relative">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-[#11161d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B177D9] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-[#9fa0a185] hover:text-[#161616f1] dark:hover:bg-[#253547] dark:hover:text-[#f8fafc] h-9 rounded-md px-3 gap-1 group transition-all duration-200 hover:scale-105"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user h-5 w-5"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`lucide lucide-chevron-down h-3 w-3 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-1 w-40 rounded-lg text-[#1f2733] dark:text-[#fcfcfc] border-[#e1e7ef] bg-[#ffffff] dark:bg-[#11161d] border dark:border-[#202732] shadow-lg">
                      <div className="py-1">
                        <NavLink
                          to="/profile"
                          className="px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-[#202732] transition-colors duration-200 flex gap-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-user h-5 w-5"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          Profile
                        </NavLink>
                        <div
                          role="separator"
                          aria-orientation="horizontal"
                          className="-mx-0 my-1 h-[0.5px] bg-[#f3f5f7] dark:bg-gray-800"
                        ></div>
                        <button
                          className="flex gap-1 w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-[#202732] transition-colors duration-200"
                          onClick={() => {
                            setIsDropdownOpen(false);
                            // Add your sign out logic here
                            console.log("Sign out clicked");
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-log-out h-5 w-5"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
