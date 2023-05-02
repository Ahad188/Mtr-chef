import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
     return (
          <div>
               <Header></Header>
               <div className='min-h-[calc(100vh - 350px)]'>

               <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;