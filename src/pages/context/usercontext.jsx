// import React, { createContext, useState } from "react";



// export const UserDatacontext=createContext();
// const Usercontext = ({children}) =>{

//     const [user,setUser]=useState({
//         email:'',
//         password:''
//     })
//     return (
        
//         <div>
//             <UserDatacontext.Provider value={{user,setUser}}>
//             {children}
//             </UserDatacontext.Provider>
//         </div>
//     )
// }
// export default Usercontext;

import React, { createContext, useState, useEffect } from "react";

export const UserDatacontext = createContext();

const Usercontext = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : { email: '', password: '' };
  });

  useEffect(() => {
    if (user && user.email) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <UserDatacontext.Provider value={{ user, setUser }}>
      {children}
    </UserDatacontext.Provider>
  );
};

export default Usercontext;