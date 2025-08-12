import React from "react";

function About() {
  return (
    <main className="container mx-auto px-[77px] py-8">
      <section className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
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
            className="lucide lucide-package h-12 w-12 text-[#7c3bed]"
          >
            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
            <path d="M12 22V12"></path>
            <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
            <path d="m7.5 4.27 9 5.15"></path>
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7c3bed] via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About ShopEase
          </h1>
        </div>
        <p className="text-xl dark:text-[#94a3b8] text-[#65758b] max-w-3xl mx-auto leading-relaxed">
          We're on a mission to make online shopping easy, enjoyable, and
          accessible to everyone. Since our founding, we've been committed to
          providing quality products, exceptional service, and an outstanding
          shopping experience.
        </p>
      </section>
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg bg-white text-[#1f2733] text-center dark:bg-[#11161d] p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-[#7c3bed]">
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
                  className="lucide lucide-users h-5 w-5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="text-3xl font-bold dark:text-[#9767e4] text-[#7c3bed]">50K+</div>
            </div>
            <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">Happy Customers</p>
          </div>
         <div className="rounded-lg bg-white text-[#1f2733] text-center dark:bg-[#11161d] p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-[#7c3bed]">
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
                  className="lucide lucide-package h-5 w-5"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
              </div>
              <div className="text-3xl font-bold dark:text-[#9767e4] text-[#7c3bed]">100K+</div>
            </div>
            <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">Products Sold</p>
          </div>
         <div className="rounded-lg bg-white text-[#1f2733] text-center dark:bg-[#11161d] p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-[#7c3bed]">
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
                  className="lucide lucide-star h-5 w-5"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <div className="text-3xl font-bold dark:text-[#9767e4] text-[#7c3bed]">4.9</div>
            </div>
            <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">Customer Rating</p>
          </div>
         <div className="rounded-lg bg-white text-[#1f2733] text-center dark:bg-[#11161d] p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-[#7c3bed]">
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
                  className="lucide lucide-award h-5 w-5"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div className="text-3xl font-bold dark:text-[#9767e4] text-[#7c3bed]">5+</div>
            </div>
            <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">Years Experience</p>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ShopEase?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-lg bg-white text-[#1f2733] dark:bg-[#11161d] dark:text-[#f8fafc] text-center h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex justify-center mb-4">
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
                  className="lucide lucide-package h-8 w-8 text-blue-500"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">
                Quality Products
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#65758b] dark:text-[#94a3b8] text-sm">
                Carefully curated selection of premium products from trusted
                brands worldwide.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white text-[#1f2733] dark:bg-[#11161d] dark:text-[#f8fafc] text-center h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex justify-center mb-4">
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
                  className="lucide lucide-shield h-8 w-8 text-green-500"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">
                Secure Shopping
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#65758b] dark:text-[#94a3b8] text-sm">
                Your data and payments are protected with industry-leading
                security measures.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white text-[#1f2733] dark:bg-[#11161d] dark:text-[#f8fafc] text-center h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex justify-center mb-4">
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
                  className="lucide lucide-truck h-8 w-8 text-purple-500"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">
                Fast Delivery
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#65758b] dark:text-[#94a3b8] text-sm">
                Quick and reliable shipping to get your products to you as soon
                as possible.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white text-[#1f2733] dark:bg-[#11161d] dark:text-[#f8fafc] text-center h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6 pb-4">
              <div className="flex justify-center mb-4">
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
                  className="lucide lucide-heart h-8 w-8 text-red-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">
                Customer First
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#65758b] dark:text-[#94a3b8] text-sm">
                Exceptional customer service and support whenever you need
                assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 dark:text-[#94a3b8] text-[#65758b]">
              <p>
                ShopEase was born from a simple idea: online shopping should be
                effortless and enjoyable. Founded in 2019, we started as a small
                team with big dreams of revolutionizing the e-commerce
                experience.
              </p>
              <p>
                Today, we've grown to serve thousands of customers worldwide,
                but our core values remain the same. We believe in quality,
                authenticity, and putting our customers first in everything we
                do.
              </p>
              <p>
                From electronics to fashion, jewelry to home goods, we carefully
                curate every product in our catalog to ensure you're getting the
                best value and quality possible.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#7c3bed]/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
              <div className="text-8xl">🛍️</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#7c3bed] text-[white] p-4 rounded-full">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:ring-offset-2 border-transparent hover:bg-[#7c3bed]/80 bg-white text-[#7c3bed]">
                Est. 2019
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg bg-white text-[#1f2733] dark:bg-[#11161d] dark:text-[#f8fafc] text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-6xl mb-4">👩‍💼</div>
              <h3 className="font-semibold tracking-tight text-xl">
                Sarah Johnson
              </h3>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:ring-offset-2 border-transparent bg-[#f3f5f7] dark:bg-[#202732] dark:text-[#f8fafc] text-[#1f2733] hover:bg-[#f3f5f7]/80 w-fit mx-auto">
                Founder &amp; CEO
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#65758b] dark:text-[#94a3b8] text-sm">
                Passionate about bringing quality products to customers
                worldwide.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white text-[#1f2733] dark:bg-[#11161d] dark:text-[#f8fafc] text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-6xl mb-4">👨‍💻</div>
              <h3 className="font-semibold tracking-tight text-xl">Mike Chen</h3>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:ring-offset-2 border-transparent bg-[#f3f5f7] dark:bg-[#202732] dark:text-[#f8fafc] text-[#1f2733] hover:bg-[#f3f5f7]/80 w-fit mx-auto">
                Head of Technology
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#65758b] dark:text-[#94a3b8] text-sm">
                Leading our tech innovations to enhance your shopping
                experience.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white text-[#1f2733] dark:bg-[#11161d] dark:text-[#f8fafc] text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-6xl mb-4">👩‍🎓</div>
              <h3 className="font-semibold tracking-tight text-xl">Emma Davis</h3>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:ring-offset-2 border-transparent bg-[#f3f5f7] dark:bg-[#202732] dark:text-[#f8fafc] text-[#1f2733] hover:bg-[#f3f5f7]/80 w-fit mx-auto">
                Customer Success
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-[#65758b] dark:text-[#94a3b8] text-sm">
                Ensuring every customer has an amazing experience with ShopEase.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center bg-[#f3f5f74d] dark:bg-[#2027324d] rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-[#65758b] dark:text-[#94a3b8] max-w-3xl mx-auto mb-8">
          To democratize access to quality products and create a shopping
          experience that delights customers while supporting businesses and
          communities worldwide.
        </p>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#7c3bed] dark:bg-[#9767e4] dark:hover:bg-[#9767e4d3] text-white hover:bg-[#7c3bed]/90 h-11 rounded-md px-8 gap-2">
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
            className="lucide lucide-heart h-5 w-5"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
          Join Our Community
        </button>
      </section>
    </main>
  );
}

export default About;
