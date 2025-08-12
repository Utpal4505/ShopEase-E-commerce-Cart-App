import React from "react";

function Contact() {
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
            className="lucide lucide-message-circle h-12 w-12 text-[#7c3bed]"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#7c3bed] via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
        </div>
        <p className="text-xl text-[#65758b] dark:text-[#94a3b8] max-w-3xl mx-auto">
          Have questions, suggestions, or need help? We'd love to hear from you.
          Our friendly team is here to assist you with anything you need.
        </p>
      </section>
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg dark:bg-[#11161d] dark:text-[#f8fafc] bg-[white] text-[#1f2733] text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  className="lucide lucide-mail h-6 w-6 text-blue-500"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">Email Us</h3>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <p className="font-semibold dark:text-[#f8fafc] text-[#1f2733]">
                support@shopease.com
              </p>
              <p className="text-sm dark:text-[#f8fafc] text-[#65758b]">
                Send us an email anytime
              </p>
            </div>
          </div>
          <div className="rounded-lg dark:bg-[#11161d] dark:text-[#f8fafc] bg-[white] text-[#1f2733] text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  className="lucide lucide-phone h-6 w-6 text-green-500"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">Call Us</h3>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <p className="font-semibold dark:text-[#f8fafc] text-[#1f2733]">
                +1 (555) 123-4567
              </p>
              <p className="text-sm dark:text-[#f8fafc] text-[#65758b]">
                Mon-Fri 9AM-6PM EST
              </p>
            </div>
          </div>
          <div className="rounded-lg dark:bg-[#11161d] dark:text-[#f8fafc] bg-[white] text-[#1f2733] text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  className="lucide lucide-map-pin h-6 w-6 text-red-500"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">Visit Us</h3>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <p className="font-semibold dark:text-[#f8fafc] text-[#1f2733]">
                123 Commerce St, NY 10001
              </p>
              <p className="text-sm dark:text-[#f8fafc] text-[#65758b]">
                Our headquarters
              </p>
            </div>
          </div>
          <div className="rounded-lg dark:bg-[#11161d] dark:text-[#f8fafc] bg-[white] text-[#1f2733] text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  className="lucide lucide-clock h-6 w-6 text-purple-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="font-semibold tracking-tight text-lg">
                Business Hours
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <p className="font-semibold dark:text-[#f8fafc] text-[#1f2733]">
                Mon-Fri: 9AM-6PM
              </p>
              <p className="text-sm dark:text-[#f8fafc] text-[#65758b]">
                Saturday: 10AM-4PM
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="rounded-lg dark:bg-[#11161d] dark:text-[#f8fafc] bg-[white] text-[#1f2733] border-0 shadow-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold tracking-tight text-2xl flex items-center gap-2">
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
                className="lucide lucide-send h-6 w-6 text-[#7c3bed]"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              Send us a Message
            </h3>
            <p className="text-[#65758b] dark:text-[#94a3b8]">
              Fill out the form below and we'll respond as soon as possible.
            </p>
          </div>
          <div className="p-6 pt-0">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <input
                    className="flex h-10 mt-2 w-full rounded-md border dark:ring-offset-[#11161d] dark:bg-[#11161d] dark:border-[#202732] border-[#e1e7ef] bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#1f2733] placeholder:text-[#65758b] dark:placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    className="flex h-10 mt-2 w-full rounded-md border dark:ring-offset-[#11161d] dark:bg-[#11161d] dark:border-[#202732] border-[#e1e7ef] bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#1f2733] placeholder:text-[#65758b] dark:placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="subject"
                >
                  Subject *
                </label>
                <input
                  className="flex h-10 mt-2 w-full rounded-md border dark:ring-offset-[#11161d] dark:bg-[#11161d] dark:border-[#202732] border-[#e1e7ef] bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#1f2733] placeholder:text-[#65758b] dark:placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  className="flex mt-2 min-h-[80px] w-full dark:ring-offset-[#11161d] dark:bg-[#11161d] dark:border-[#202732] dark:placeholder:text-[#94a3b8] rounded-md border border-[#e1e7ef] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-[#65758b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#7c3bed] text-white hover:bg-[#7c3bed]/90 h-11 rounded-md px-8 w-full gap-2"
                type="submit"
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
                  className="lucide lucide-send h-5 w-5"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="space-y-8">
          <div className="rounded-lg dark:bg-[#11161d] dark:text-[#f8fafc] bg-[white] text-[#1f2733] border-0 shadow-lg">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-xl">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  How long does shipping take?
                </h4>
                <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">
                  Standard shipping typically takes 3-5 business days. Express
                  shipping options are available.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  What's your return policy?
                </h4>
                <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">
                  We offer a 30-day return policy for most items in original
                  condition.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Do you ship internationally?
                </h4>
                <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">
                  Yes! We ship to most countries worldwide. Shipping costs vary
                  by location.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg dark:bg-[#11161d] dark:text-[#f8fafc] bg-[white] text-[#1f2733] border-0 shadow-lg">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-xl">
                Our Location
              </h3>
            </div>
            <div className="p-6 pt-0">
              <div className="aspect-video dark:bg-[#202732] bg-[#f3f5f7] rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
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
                    className="lucide lucide-map-pin h-12 w-12 text-[#7c3bed] mx-auto"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-sm dark:text-[#94a3b8] text-[#65758b]">
                    Interactive map coming soon
                  </p>
                  <p className="text-xs dark:text-[#94a3b8] text-[#65758b]">
                    123 Commerce St, New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 text-center dark:bg-[#2027324d] bg-[#f3f5f74d] rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
        <p className="text-[#65758b] dark:text-[#94a3b8] mb-6">
          Check out our help center for instant answers to common questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm dark:ring-offset-[#11161d] dark:bg-[#11161d] dark:border-[#202732] dark:hover:bg-[#202732] dark:hover:text-[#f8fafc] font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-gray-100 border border-[#e1e7ef] bg-white  h-11 rounded-md px-8">
            Visit Help Center
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium  ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3bed] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#7c3bed] text-white hover:bg-[#7c3bedb5] h-11 rounded-md px-8 gap-2">
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
              className="lucide lucide-message-circle h-5 w-5"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
            Live Chat
          </button>
        </div>
      </section>
    </main>
  );
}

export default Contact;
