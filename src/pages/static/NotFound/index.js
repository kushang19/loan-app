// src/pages/static/NotFound.js
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="mb-6 text-2xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
  );
}
