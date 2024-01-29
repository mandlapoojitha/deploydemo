"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='w-full h-96 mb-7 flex flex-col justify-start items-center'>
      <div className="card w-1/3 min-h-4  mt-10 p-4 shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <Link href="/">
          <button type="submit" className="bg-black text-white p-2 rounded hover:opacity-80 active:opacity-90">
            Submit
          </button>
          </Link>
          
        </form>
      </div>
    </div>
  );
};

export default Page;
