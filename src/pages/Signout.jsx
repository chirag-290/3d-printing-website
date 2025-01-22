// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const SignUp = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your sign-up logic here
// //     console.log(formData);
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-md">
// //         <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //               placeholder="Enter your name"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //               Email Address
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //               placeholder="Enter your email address"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               id="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //               placeholder="Enter your password"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
// //               Confirm Password
// //             </label>
// //             <input
// //               type="password"
// //               id="confirmPassword"
// //               name="confirmPassword"
// //               value={formData.confirmPassword}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //               placeholder="Confirm your password"
// //             />
// //           </div>
// //           <div className="flex items-center justify-between">
// //             <button
// //               type="submit"
// //               className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
// //             >
// //               Sign Up
// //             </button>
// //             <Link to="/sign-in" className="text-sm text-indigo-500 hover:text-indigo-700">
// //               Already have an account? Sign in
// //             </Link>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUp;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [popupMessage, setPopupMessage] = useState('');
//   const [showPopup, setShowPopup] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       console.error('Passwords do not match');
//       return;
//     }
  

//     try {
//       const response = await axios.post('http://localhost:8000/auth/register', {
//         name,
//         email,
//         password,
//         confirmPassword
//       });
//       if (response.status === 201) {
//         setPopupMessage('User registered successfully!');
//         setShowPopup(true);
//         setTimeout(() => {
//           setShowPopup(false);
//           navigate('/sign-in');
//         }, 3000); 
//       }
//       console.log('User registered successfully:', response.data);
//     } catch (error) {
//       setPopupMessage('Error registering user');
//       setShowPopup(true);
//       setTimeout(() => {
//         setShowPopup(false);
//       }, 3000); 
//     }

//     setName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your name"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your email address"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Confirm your password"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//             >
//               Sign Up
//             </button>
//             <Link to="/sign-in" className="text-sm text-indigo-500 hover:text-indigo-700">
//               Already have an account? Sign in
//             </Link>
//           </div>
//         </form>
//         {showPopup && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-4 rounded shadow-md">
//               <p>{popupMessage}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('photo', photo);

    try {
      const response = await axios.post('http://localhost:8000/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setPopupMessage('User registered successfully!');
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate('/sign-in');
        }, 3000);
      }
      console.log('User registered successfully:', response.data);
    } catch (error) {
      setPopupMessage('Error registering user');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoto(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Sign Up
            </button>
            <Link to="/sign-in" className="text-sm text-indigo-500 hover:text-indigo-700">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-md">
              <p>{popupMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;