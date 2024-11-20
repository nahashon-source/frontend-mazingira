import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, TreePine } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Debug: Log the current route to ensure path matching works
  console.log('Current path:', location.pathname);

  // Hide Navbar only on Login and Signup pages
  if (['/login', '/signup'].includes(location.pathname)) {
    return null;
  }

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn'); // Remove user session
    navigate('/login'); // Redirect to login page
  };
  return (
    <nav className="bg-green-50 fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <TreePine className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-2xl font-bold text-green-800">Mazingira</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link to="/organizations" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">
                Organizations
              </Link>
              <Link to="/stories" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">
                Stories
              </Link>
              <Link to="/about" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md font-medium">
                About
              </Link>
              <button
                onClick={handleSignOut}
                className="px-3 py-2 rounded-md font-medium bg-green-600 text-white hover:bg-green-700"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-800 hover:bg-green-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-50">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block text-green-800 hover:text-green-600 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/organizations" className="block text-green-800 hover:text-green-600 px-3 py-2 rounded-md">
              Organizations
            </Link>
            <Link to="/stories" className="block text-green-800 hover:text-green-600 px-3 py-2 rounded-md">
              Stories
            </Link>
            <Link to="/about" className="block text-green-800 hover:text-green-600 px-3 py-2 rounded-md">
              About
            </Link>
            <button
              onClick={handleSignOut}
              className="w-full text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
