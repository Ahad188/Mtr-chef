import React from 'react';
import logo from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
     return (
               <header className='md:flex md:justify-between items-center md:mx-14 bg-gray-400 p-5'>
                     <img src={logo} className='h-14 w-14 rounded-full' alt="" />
                    <nav className='md:flex'>
                         <li className='list-none mr-5 text-2xl'><a href="/">Home</a></li>
                         <li className='list-none mr-5 text-2xl'><a href="/">About</a></li>
                         <li className='list-none mr-5 text-2xl'><Link to="/login">Login</Link></li>
                    </nav>
               </header>
     );
};

export default Header;