import { useState } from 'react';
import log from "./log.png";
import Image from 'next/image';
export default function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedback: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add form validation and send form data here
    console.log('Form Data:', formData);
  };

  return (
    <div className="sm:ml-64 ">
        <div className='m-10'>

        
      <div className="flex flex-col sm:flex-row w-full h-auto py-10">
        {/* Left side image (hidden on mobile) */}
        <div className="w-full sm:w-1/2 hidden sm:block ">
          <Image
            src={log}
            alt="Contact Us"
            className="w-2/3 items-center justify-center m-12"
          />
        </div>

        {/* Right side contact form */}
        <div className="w-full sm:w-1/2 bg-green-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg text-gray-400">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Feedback */}
            <div className="flex flex-col">
              <label htmlFor="feedback" className="text-lg text-gray-400">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your feedback"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center bg-gradient-to-r from-green-100 to-green-800 h-20">
        <div className="p-5">
          <h1 className="text-white text-xl font-bold">
            Created By <span className="text-green-300">Ramanarayanan_k</span> | 2024 All Rights Reserved
          </h1>
        </div>
      </div>
    </div>
  );
}
