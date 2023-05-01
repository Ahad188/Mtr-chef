import React from 'react';

const Header = () => {
     return (
               <header className='md:flex md:justify-between items-center md:mx-14 bg-gray-400 p-5'>
                     <h3 className='text-2xl'>Mtr. <span className='text-yellow-400'>chef</span></h3>
                    <nav className='md:flex'>
                         <li className='list-none mr-5 text-2xl'><a href="/">Home</a></li>
                         <li className='list-none mr-5 text-2xl'><a href="/">About</a></li>
                         <li className='list-none mr-5 text-2xl'><a href="/">Login</a></li>
                    </nav>
               </header>
     );
};

export default Header;