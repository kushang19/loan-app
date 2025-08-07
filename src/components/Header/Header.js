import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              {/* <img
                className="h-10 w-auto"
                src="/logo.png" // place your logo in public/logo.png or update path
                alt="Logo"
              /> */}
              <b>L O G O</b>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/faqs"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              FAQs
            </Link>
            <Link
              to="/blog-articles"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Blog & Articles
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
          <Link to="/faqs" className="block text-gray-700 hover:text-blue-600">
            FAQs
          </Link>
          <Link
            to="/blog-articles"
            className="block text-gray-700 hover:text-blue-600"
          >
            Blog & Articles
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
