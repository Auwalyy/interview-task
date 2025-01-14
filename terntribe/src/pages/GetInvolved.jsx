import React from 'react';

const GetInvolved = () => (
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
    <h1 className="text-2xl font-bold mb-4">Get Involved</h1>
    <form className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Name:</span>
        <input type="text" name="name" className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
      </label>
      <label className="block">
        <span className="text-gray-700">Email:</span>
        <input type="email" name="email" className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" />
      </label>
      <label className="block">
        <span className="text-gray-700">Select a Cause:</span>
        <select name="cause" className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
          <option>Education</option>
          <option>Clean Water</option>
          <option>Health Access</option>
          <option>Environmental Protection</option>
        </select>
      </label>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded shadow-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  </div>
);

export default GetInvolved;
