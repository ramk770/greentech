"use client"
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar({ toggleSidebar }) {
  return (
  <nav className="fixed top-0 z-50 w-full bg-black border-b border-gray-200 dark:bg-black-800 dark:border-black-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
            <a href="/" className="flex items-center ml-2 md:ml-24">
              {/* <img
                src=""
                className="h-8 mr-3"
                alt="Logo"
              /> */}
              {/* <Image src={log} /> */}
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                GreenTech
              </span>
            </a>
          </div>
          {/* User profile */}
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              {/* <img
                className="w-8 h-8 rounded-full"
                src="/images/user.jpg"
                alt="user"
              /> */}
              <Link href='Login' className='text-white font-bold text-2xl'>Login</Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
