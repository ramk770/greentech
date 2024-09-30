"use client";
import Image from "next/image";
import logo from "./LOGO.jpg"; // Adjust the path to your logo image
import Link from "next/link";
import { useState, useEffect } from "react";

// Custom hook to determine if the screen is laptop size or larger
function useIsLaptopView() {
  const [isLaptopView, setIsLaptopView] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsLaptopView(window.innerWidth >= 768); // Set your breakpoint here (768px for tablet/laptop screens)
    };

    // Initial check
    handleResize();

    // Event listener to update on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLaptopView;
}

export default function Login() {
  const isLaptopView = useIsLaptopView(); // Using custom hook to detect screen size

  return (
    <div className="sm:ml-64">
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left side: Image */}
        {isLaptopView && (
          <div className="flex-1 h-64 md:h-auto relative">
            {/* Image displayed only on laptop/desktop view */}
            <Image
              src={logo}
              alt="Logo"
              width={800}
              height={600}
              className="object-cover object-center w-full h-full"
              priority
            />
          </div>
        )}

        {/* Right side: Login Form with gradient background */}
        <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-green-100 to-green-800 p-6">
          <div className="p-8 md:p-20 rounded-lg shadow-inner backdrop-blur-md animate-fade-in backdrop-blur-6xl bg-white/10">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form>
              {/* Username */}
              <div className="mb-4 relative">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                  placeholder="Enter your username"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-7 3a1 1 0 11-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Email */}
              <div className="mb-4 relative">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                  placeholder="Enter your email"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-7 3a1 1 0 11-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Password */}
              <div className="mb-6 relative">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                  placeholder="Enter your password"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-7 3a1 1 0 11-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-orange-400 text-white rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Login
                </button>
              </div>

              {/* Register Link */}
              <div className="mt-4 text-center">
                <Link
                  href="/Register"
                  className="text-black text-xl p-4 opacity-100 hover:opacity-75 transition-opacity duration-200 font-bold"
                >
                  or New User
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
