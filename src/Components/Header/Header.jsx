import React, { useContext, useState } from 'react';
import logo from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import {FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
 
const Header = () => {
     const {user, logOut} = useContext(AuthContext)
     // console.log(user);
     const [open,setOpen] =useState(false)
     const handelLogout=()=>{
          logOut()
          .then()
          .catch(err=>console.log(err))
     }
     return (
               <header className='flex justify-between items-center mt-2 md:mx-14 px-4 py-4 xs:w-full bg-gray-400 md:p-5 xs:p-2'>
                     <Link to='/'><img src={logo} className='h-14 w-14 rounded-full' alt="" /></Link>
                    <nav className={`md:flex absolute md:static duration-700 ${open ? 'top-16 bg-gray-400 text-center ms-96 p-5':'-top-48'}`}>
                         <li className='list-none mr-5 text-2xl'>
                              <ActiveLink href="/home">Home</ActiveLink>
                         </li>
                         <li className='list-none mr-5 text-2xl'>
                              <ActiveLink to="/blog"> Blog</ActiveLink>
                         </li>
                         <li className='list-none mr-5 text-2xl'>
                             {user ?<button onClick={handelLogout} className='btn btn-secondary'>Logout</button> : <ActiveLink to="/login">Login</ActiveLink>}
                         </li>

                         <div>
                    {user &&
                         <h4>{user.displayName}</h4>
                         }
                   </div>
                    </nav>
                     
                    <div onClick={()=>setOpen(!open)} className='md:hidden'>
                         <span>{open === true ? <FaTimes className='h-6 w-6'/>:<FaBars className='h-6 w-6'/>}</span>
                   </div>
                   
               </header>
     );
};

export default Header;