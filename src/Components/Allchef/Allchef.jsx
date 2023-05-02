import React, { useEffect, useState } from 'react';
 
import ChefCard from '../Chefcard/ChefCard';

const Allchef = () => {
     const [data,setData] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/data')
          .then(res=>res.json())
          .then(data=>setData(data))
     },[])
     return (
          <section className='container mx-auto mb-10 mt-10'>
               <div  className='md:grid md:grid-cols-2 gap-5 mx-auto'>
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

export default Allchef;