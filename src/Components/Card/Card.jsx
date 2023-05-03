import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
 
 
import FoodCard from "../FoodCard/FoodCard";
const Card = () => {
  const { id } = useParams();
     const food = useLoaderData()
     // console.log(food);
  const [chef, setChef] = useState([]);
  //  console.log(typeof id,id);
  useEffect(() => {
    fetch("https://chef-server-ahad188.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        const datA = data?.find((sc) => parseInt(sc.id) === parseInt(id));
        setChef(datA);
      });
  }, []); 
 
     const p = chef.specialRecipes
     // FaRegGem

     
 
  return (
    <div className="container mx-auto mb-36">
  

      <div className="card lg:card-side bg-base-100 shadow-xl cursor-pointer">
        <figure>
          <img className="p-2" src={chef.chefPicture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl text-yellow-400">{chef.chefName}</h2>
           <div className="py-2">
               <h1 className="text-3xl ">Experience: {chef.experience} Years</h1>
               <h1 className="text-3xl mt-4"> <span className="text-yellow-300">{chef.likes}</span> people like in his food.</h1>
                <p className="text-xl mt-6">He almost {chef.numberOfRecipes} food beak in his life.He Indian first food and American fast food make it.   At ex ullam commodi officia odio magni incidunt corrupti. Consectetur, quod reiciendis minima ratione   </p>

               <h1 className="text-4xl mt-4 mb-2">Most Popular Food </h1>
               {
                    p?.map((p1,index)=> <li key={index}>{p1}</li>)
               }
           </div>
          <div className="card-actions justify-end">
            <Link to='/' className="btn btn-yellow-300">Go Home</Link>
          </div>
        </div>
         
      </div>
      <div className="md:grid grid-cols-3 mt-5">
     {
          food.map((f1,index)=><FoodCard
          key={index}
          f1={f1}
          ></FoodCard>)
     }
      </div>
    </div>
  );
};

export default Card;
