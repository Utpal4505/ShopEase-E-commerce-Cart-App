import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/ProductSlice";

// Star Highlighting logics
function StarRating({ rating }) {
  const rounded = Math.floor(rating); // e.g., 2.6 → 3

  return (
    <div style={{ display: "flex", gap: "1px" }}>
      {[...Array(5)].map((_, i) => (
        <div key={i}>
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
            className={`${
              i < rounded ? " fill-yellow-400 text-yellow-400" : "text-gray-300"
            } lucide lucide-star h-3 w-3`}
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
        </div>
      ))}
    </div>
  );
}

function Home() {
  // ------------ Usestates ------------
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter2open, setFilter2Open] = useState(false);
  const [filter2active, setFilter2active] = useState(null);

  const categories = [
    "All Categories",
    "Electronics",
    "Jewelry",
    "Men's clothing",
    "Women's clothing",
  ];

  const A_Z = [
    "A-Z",
    "Price: Low to High",
    "Price: High to Low",
    "Highest Rated",
  ];

  const dropdownRef = useRef();
  const dropdownRef2 = useRef();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

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

  // Filter 2

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef2.current && !dropdownRef2.current.contains(e.target)) {
        setFilter2Open(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Tag based bg logics
  const categoryStyles = {
    electronics: {
      bg: "bg-[#3b82f61a]",
      text: "text-blue-600",
      border: "border-[#bfdbfe]",
    },
    "men's clothing": {
      bg: "bg-[#22c55e1a]",
      text: "text-green-600",
      border: "border-[#bbf7d0]",
    },
    "women's clothing": {
      bg: "bg-[#ec48991a]",
      text: "text-pink-600",
      border: "border-[#fbcfe8]",
    },
    jewelery: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-200",
    },
  };

  const defaultCategoryStyle = "bg-gray-500/10 border-gray-200 text-gray-600";

  return (
    <div className="bg-white dark:bg-[#11161d] text-black dark:text-white min-h-screen">
      <main className="container mx-auto px-[77px] py-8">
        <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c3bed1a] via-purple-500/10 to-pink-500/10 p-8 md:p-12">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#7c3bed1a] rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#7c3bed]">
                New arrivals weekly
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#7c3bed] via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-lg text-[#65758b] max-w-2xl mx-auto mb-8">
              Find everything you need in our curated collection of premium
              products. From electronics to fashion, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-4 text-sm text-[#65758b]">
                <div className="flex items-center gap-1">
                  <span>🚚</span>
                  <span>Free shipping over $50</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>4.9/5 customer rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🔒</span>
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7c3bed33] to-purple-500/20 rounded-full blur-3xl opacity-60 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 translate-y-24 -translate-x-24"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1f2733] mb-6 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="group p-4 rounded-xl border bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                electronics
              </div>
            </button>
            <button className="group p-4 rounded-xl border bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-2xl mb-2">💎</div>
              <div className="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                jewelery
              </div>
            </button>
            <button className="group p-4 rounded-xl border bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-2xl mb-2">👔</div>
              <div className="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                men's clothing
              </div>
            </button>
            <button className="group p-4 rounded-xl border bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-pink-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="text-2xl mb-2">👗</div>
              <div className="text-sm font-medium capitalize group-hover:text-[#7c3bed] transition-colors">
                women's clothing
              </div>
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4">
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

            <div className="relative" ref={dropdownRef2}>
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-arrow-up-narrow-wide h-4 w-4 text-[#65758b]"
                >
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                  <path d="M11 12h4"></path>
                  <path d="M11 16h7"></path>
                  <path d="M11 20h10"></path>
                </svg>
                <button
                  type="button"
                  onClick={() => setFilter2Open((prev) => !prev)}
                  role="combobox"
                  aria-controls="radix-:r8:"
                  aria-expanded={filter2open}
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 items-center justify-between rounded-md border border-[#e1e7ef] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-[#65758b] focus:outline-none focus:ring-2 focus:ring-[#7c3bed] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-48"
                >
                  <span>
                    {filter2active !== null ? A_Z[filter2active] : "A-Z"}
                  </span>{" "}
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
                    aria-hidden="true"
                    className={`lucide lucide-chevron-down h-4 w-4 opacity-50 transition-transform ${
                      filter2open ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>

              {filter2open && (
                <ul
                  role="listbox"
                  className="absolute text-base border border-[#e1e7ef] mt-2 w-[200px] ml-5 rounded-lg bg-white shadow-lg"
                >
                  {A_Z.map((cat, index) => (
                    <li
                      key={cat}
                      role="option"
                      className={`relative cursor-pointer text-sm rounded-lg px-4 py-2 hover:bg-[#edededa8] ${
                        filter2active === index
                          ? "text-green-600 font-medium"
                          : ""
                      }`}
                      onClick={() => {
                        setFilter2active(index);
                        setFilter2Open(false);
                      }}
                    >
                      {cat}
                      {filter2active === index && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                          ✔
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2"></div>
        </div>
        <div className="mb-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                🎉
              </div>
              <div>
                <p className="font-semibold text-green-700 dark:text-green-400">
                  Special Offer!
                </p>
                <p className="text-sm text-green-600 dark:text-green-500">
                  Free shipping on orders over $50 • 30-day returns
                </p>
              </div>
            </div>
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c3bed] focus:ring-offset-2 border-transparent hover:bg-[#7c3bed9a] bg-green-500 text-white animate-pulse">
              Limited Time
            </div>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-sm text-[#65758b]">Showing 20 of 20 products</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#65758b]">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Live inventory</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1f2733] mb-2">
            All Products
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-[#65758b]">
              Discover our carefully curated selection
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-animation">
          {products.map((prod) => (
            <div key={prod.id}>
              <Link to={`/product/${prod.id}`}>
                <div className="rounded-lg bg-white text-[#1f2733] group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:shadow-[#7c3bed20] border-0 shadow-md">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <img
                      src={prod.image}
                      alt={prod.description}
                      className="h-full w-full object-contain p-4 transition-all duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c3bed] focus:ring-offset-2 absolute right-2 top-2 backdrop-blur-sm
                      ${
                        categoryStyles[prod.category]?.bg ||
                        defaultCategoryStyle
                      }
                      ${
                        categoryStyles[prod.category]?.text ||
                        defaultCategoryStyle
                      }
                      ${
                        categoryStyles[prod.category]?.border ||
                        defaultCategoryStyle
                      }
                   `}
                    >
                      {prod.category}
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap mt-2 text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-[#264147] rounded-md absolute left-2 top-2 h-8 w-8 p-0 backdrop-blur-sm transition-all duration-300 -translate-y-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800">
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
                        className="lucide lucide-heart h-4 w-4 transition-all duration-200 text-gray-600 hover:text-red-500"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm mt-2 font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-[#264147] rounded-md absolute left-2 top-12 h-8 w-8 p-0 backdrop-blur-sm transition-all duration-300 delay-75 -translate-y-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r4p:"
                      data-state="closed"
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
                        className="lucide lucide-eye h-4 w-4 text-gray-600"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-[#1f2733] group-hover:text-[#7c3bed] transition-colors duration-200">
                      {prod.description}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex"></div>
                        <StarRating rating={prod.rating.rate} />
                        <span className="text-xs text-[#65758b] ml-1">
                          ({prod.rating.count})
                        </span>
                      </div>
                      <span className="text-xs text-[#65758b]">
                        {prod.rating.rate}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 pt-0">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold bg-gradient-to-r from-[#7c3bed] to-purple-600 bg-clip-text text-transparent">
                        $599.00
                      </span>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#7c3bed] text-white hover:bg-[#7c3bedc9] h-9 rounded-md px-3 relative transition-all duration-200 hover:scale-105">
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
                        className="lucide lucide-shopping-cart h-4 w-4"
                      >
                        <circle cx="8" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
