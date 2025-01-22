import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDatacontext } from './context/usercontext.jsx';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const {user,setUser}=useContext(UserDatacontext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('email:', email);
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password
      });
      console.log('User logged in successfully:', response.data.user);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      // Save the token or user data as needed
      navigate('/'); // Navigate to the home page
    } catch (error) {
      // console.error('Error logging in user:', error.response.data);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-3"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-3"
              placeholder="Enter your password"
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm">
              {errorMessage}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Sign In
            </button>
            <Link to="/sign-out" className="text-sm text-indigo-500 hover:text-indigo-700">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
