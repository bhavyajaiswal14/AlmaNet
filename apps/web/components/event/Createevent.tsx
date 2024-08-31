"use client";  // Ensure this is included for Client Components

import React from 'react';

const EventForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Create Event</h2>
        
        {/* Event Mode Dropdown */}
        <div className="mb-6">
          <label htmlFor="eventMode" className="block text-sm font-semibold text-gray-600">
            Event Mode
          </label>
          <select
            id="eventMode"
            className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>

        {/* Event Name */}
        <div className="mb-6">
          <label htmlFor="eventName" className="block text-sm font-semibold text-gray-600">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter event name"
          />
        </div>

        {/* Event Link */}
        <div className="mb-6">
          <label htmlFor="eventLink" className="block text-sm font-semibold text-gray-600">
            Event Link
          </label>
          <input
            type="text"
            id="eventLink"
            className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter event link"
          />
        </div>

        {/* Date and Time */}
        <div className="flex mb-6 space-x-4">
          <div className="flex-1">
            <label htmlFor="date" className="block text-sm font-semibold text-gray-600">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="time" className="block text-sm font-semibold text-gray-600">
              Time
            </label>
            <input
              type="time"
              id="time"
              className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="mt-2 block w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter event description"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:from-green-500 hover:to-green-600 transition-colors">
          Create
        </button>
      </div>
    </div>
  );
};

export default EventForm;
