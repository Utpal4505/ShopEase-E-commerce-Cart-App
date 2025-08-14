import React, { useEffect, useRef, useState } from "react";

function Home() {
  // ------------ Usestates ------------
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  
  const categories = [
    "All Categories",
    "Electronics",
    "Jewelry",
    "Men's clothing",
    "Women's clothing",
  ];
  const dropdownRef = useRef();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white dark:bg-[#11161d] text-black dark:text-white min-h-screen">
      <main className="container mx-auto px-[77px] py-8">
        <div class="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c3bed1a] via-purple-500/10 to-pink-500/10 p-8 md:p-12">
          <div class="relative z-10 text-center">
            <div class="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#7c3bed1a] rounded-full">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-[#7c3bed]">
                New arrivals weekly
              </span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#7c3bed] via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Discover Amazing Products
            </h1>
            <p class="text-lg text-[#65758b] max-w-2xl mx-auto mb-8">
              Find everything you need in our curated collection of premium
              products. From electronics to fashion, we've got you covered.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div class="flex items-center gap-4 text-sm text-[#65758b]">
                <div class="flex items-center gap-1">
                  <span>🚚</span>
                  <span>Free shipping over $50</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>⭐</span>
                  <span>4.9/5 customer rating</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>🔒</span>
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7c3bed33] to-purple-500/20 rounded-full blur-3xl opacity-60 -translate-y-32 translate-x-32"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 translate-y-24 -translate-x-24"></div>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-bold text-[#1f2733] mb-6 text-center">
            Shop by Category
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button class="group p-4 rounded-xl border bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="text-2xl mb-2">📱</div>
              <div class="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                electronics
              </div>
            </button>
            <button class="group p-4 rounded-xl border bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="text-2xl mb-2">💎</div>
              <div class="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                jewelery
              </div>
            </button>
            <button class="group p-4 rounded-xl border bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="text-2xl mb-2">👔</div>
              <div class="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                men's clothing
              </div>
            </button>
            <button class="group p-4 rounded-xl border bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-pink-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div class="text-2xl mb-2">👗</div>
              <div class="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                women's clothing
              </div>
            </button>
          </div>
        </div>

        <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div class="flex flex-wrap items-center gap-4">
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-2">
                {/* Filter Icon */}
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
                  className="lucide lucide-filter h-4 w-4 text-[#65758b]"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  role="combobox"
                  aria-expanded={open}
                  className="flex h-10 items-center justify-between rounded-md border border-[#e1e7ef] bg-background px-3 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-[#7c3bed] focus:ring-offset-2"
                >
                  <span>
                    {activeIndex !== null
                      ? categories[activeIndex]
                      : "All Categories"}
                  </span>
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
                    className={`lucide lucide-chevron-down h-4 w-4 opacity-50 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>

              {/* Dropdown */}
              {open && (
                <ul
                  role="listbox"
                  className="absolute text-base border border-[#e1e7ef] mt-2 w-[200px] ml-5 rounded-lg bg-white shadow-lg"
                >
                  {categories.map((cat, index) => (
                    <li
                      key={cat}
                      role="option"
                      className={`relative cursor-pointer text-sm rounded-lg px-4 py-2 hover:bg-[#edededa8] ${
                        activeIndex === index
                          ? "text-green-600 font-medium"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveIndex(index);
                        setOpen(false);
                      }}
                    >
                      {cat}
                      {activeIndex === index && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                          ✔
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Filter */}

            <div class="flex items-center gap-2">
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
                class="lucide lucide-arrow-up-narrow-wide h-4 w-4 text-[#65758b]"
              >
                <path d="m3 8 4-4 4 4"></path>
                <path d="M7 4v16"></path>
                <path d="M11 12h4"></path>
                <path d="M11 16h7"></path>
                <path d="M11 20h10"></path>
              </svg>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r8:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                class="flex h-10 items-center justify-between rounded-md border border-[#e1e7ef] bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-[#65758b] focus:outline-none focus:ring-2 focus:ring-[#7c3bed] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-48"
              >
                <span>A-Z</span>
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
                  class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center gap-2"></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
