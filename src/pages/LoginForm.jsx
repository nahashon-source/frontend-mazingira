import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email);

    if (!user) {
      setError('Email not found. Please sign up.');
    } else if (user.password !== password) {
      setError('Incorrect password. Please try again.');
    } else {
      // Set the user as logged in in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/'); // Redirect to the home page on successful login
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (error) setError(''); // Clear error when user starts typing
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZXN0fGVufDB8fDB8fHww')",
      }}
    >
      {/* Form Container with Maximum Transparency */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-10 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-800">Sign In</h2>
        {error && (
          <div className="text-sm text-red-600 text-center" role="alert">
            {error}
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-800"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-green-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              required
              className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-green-700 rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-sm text-center text-green-700">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="font-medium text-green-600 hover:text-green-500"
          >
            Create one
          </button>
        </div>
      </div>
    </div>
  );
}
