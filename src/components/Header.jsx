// import React, { useContext, useState } from 'react';
// import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { UserDatacontext } from '../pages/context/usercontext';


// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const { user } = useContext(UserDatacontext);
//   console.log("in header",user);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//     <header className='bg-slate-200 shadow-md fixed top-0 w-full z-20'>
//       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//         <Link to='/'>
//           <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
//             <span className='text-slate-500'>3DPRINT</span>
//             <span className='text-slate-700'>MARKETPLACE</span>
//           </h1>
//         </Link>
//         <div className='sm:hidden'>
//           {isMenuOpen ? (
//             <FaTimes className='text-slate-700 text-2xl' onClick={toggleMenu} />
//           ) : (
//             <FaBars className='text-slate-700 text-2xl' onClick={toggleMenu} />
//           )}
//         </div>
//         <nav className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <ul className='flex flex-col sm:flex-row gap-4 items-center'>
//             <Link to='/'>
//               <li className='text-slate-700 hover:underline'>Home</li>
//             </Link>
//             <Link to='/about'>
//               <li className='text-slate-700 hover:underline'>About</li>
//             </Link>
//             {user ? (
//               <div className='flex items-center gap-2'>
//                 <img 
//                   src={user.photo} 
//                   alt="Profile" 
//                   className='w-8 h-8 rounded-full object-cover'
//                 />
//                 <span className='text-slate-700'>{user.name}</span>
//               </div>
//             ) : (
//               <Link to='/sign-in'>
//                 <li className='text-slate-700 hover:underline'>Sign in</li>
//               </Link>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//     <div className="pt-20"></div>
//     </>
//   );
// };

// export default Header;

import React, { useContext, useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserDatacontext } from '../pages/context/usercontext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { user, setUser } = useContext(UserDatacontext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  return (
    <>
      <header className='bg-slate-200 shadow-md fixed top-0 w-full z-20'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className='text-slate-500'>3DPRINT</span>
              <span className='text-slate-700'>MARKETPLACE</span>
            </h1>
          </Link>
          <div className='sm:hidden'>
            {isMenuOpen ? (
              <FaTimes className='text-slate-700 text-2xl' onClick={toggleMenu} />
            ) : (
              <FaBars className='text-slate-700 text-2xl' onClick={toggleMenu} />
            )}
          </div>
          <nav className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col sm:flex-row gap-4 items-center'>
              <Link to='/'>
                <li className='text-slate-700 hover:underline'>Home</li>
              </Link>
              <Link to='/about'>
                <li className='text-slate-700 hover:underline'>About</li>
              </Link>
              {user ? (
                <div className='flex items-center gap-2'>
                  <img 
                    src={user.photo} 
                    alt="Profile" 
                    className='w-8 h-8 rounded-full object-cover'
                  />
                  <span className='text-slate-700'>{user.name}</span>
                  <button 
                    onClick={handleLogout} 
                    className='text-slate-700 hover:underline ml-4'
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to='/sign-in'>
                  <li className='text-slate-700 hover:underline'>Sign in</li>
                </Link>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <div className="pt-20"></div>
    </>
  );
};

export default Header;