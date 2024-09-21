import Image from "next/image";
import logo from "./LOGO.jpg"; // Adjust the path to your logo image
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Image */}
      <div className="relative flex-1">
        <Image
          src={logo}
          alt="Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Right side: Login Form with gradient background */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-r from-green-100 to-green-800 p-6 ">
        <div className=" p-20 rounded-lg shadow-inner backdrop-blur-md animate-fade-in backdrop-blur-6xl bg-white/10">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form>
            {/* Username */}
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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

            {/* Roll No */}
           

            {/* Password */}
            <div className="mb-6 relative">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
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
              <Link href="/Register" className="text-black text-xl p-4 opacity-100 hover:opacity-75 transition-opacity duration-200 font-bold">
                or New User
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
