import React, { useEffect, useState } from 'react';
import ChefCard from '../Chefcard/ChefCard';

const Popular = () => {
     const [data,setData] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/data')
          .then(res=>res.json())
          .then(data=>setData(data))
     },[])
     console.log(data);
     return (
          <section className='mt-10 container px-14 border mx-auto'>
               <h2 className='text-center text-yellow-300 text-3xl'>Welcome to Our chef</h2>
               <div className='md:grid md:grid-cols-2 gap-5 mx-auto'>
               {
                    data.map(card=><ChefCard
                    key={card.id}
                    card={card}
                    ></ChefCard>)
               }
               </div>
          </section>
     );
};

export default Popular;