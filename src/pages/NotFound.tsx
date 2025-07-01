import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="text-center space-y-6 max-w-lg mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
        <p className="text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          <Home size={20} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
