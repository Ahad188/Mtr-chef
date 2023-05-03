import React, { useEffect, useState } from 'react';
import ChefCard from '../Chefcard/ChefCard';
import { Link } from 'react-router-dom';
import Allchef from '../Allchef/Allchef';

const Popular = () => {
     const [data,setData] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/data')
          .then(res=>res.json())
          .then(data=>setData(data))
     },[])
     // console.log(data);
     return (
          <section className='mt-10 container px-14 border mx-auto'>
               <h2 className='text-center text-yellow-300 text-5xl mb-14 mt-5'> Mtr.Indian chef</h2>
               <div className='md:grid md:grid-cols-2 gap-5 mx-auto'>
               {
                    data.slice(0,6).map(card=><ChefCard
                    key={card.id}
                    card={card}
                    ></ChefCard>)
               }
               </div>
               <div className='mx-auto w-96 p-2 text-center mt-3  '>
               <Link className='btn mx-auto text-center  bg-yellow-600 text-white hover:bg-yellow-400' to='/all-chef'>See all chef</Link>
               </div>
          </section>
     );
};

export default Popular;