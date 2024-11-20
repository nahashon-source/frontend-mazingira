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
