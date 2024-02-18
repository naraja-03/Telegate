'use client'

import React, { ChangeEvent, FormEvent, memo, useState } from 'react'

interface FormData {
  email: string;
  password: string;
}
const Telegate: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // You can perform further actions here, such as sending the data to a server
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-8 py-8">
          <div className="flex justify-center">
            <img className="h-20 w-auto" src="https://www.gstatic.com/images/branding/product/2x/google_cloud_icon_48px.png" alt="Google logo" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-4">Log in to your account</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="input-field" placeholder=" " />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required value={formData.password} onChange={handleChange} className="input-field" placeholder=" " />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300 ease-in-out">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 px-8 py-4">
          <p className="text-center text-sm text-gray-600">Don't have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default memo(Telegate)
