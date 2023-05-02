import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();

  const [chef, setChef] = useState([]);
  //  console.log(typeof id,id);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => {
        const datA = data?.find((sc) => parseInt(sc.id) === parseInt(id));
        setChef(datA);
      });
  }, []); 
//   const p = chef.specialRecipes
     const p = chef.specialRecipes
//   console.log(p);
  return (
    <div className="container mx-auto mb-36">
      {/* <h1 className="text-5xl text-center">this is a single card </h1> */}

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
               {/* <li className="cursor-pointer text-xl">{p[0]}</li>
               <li className="text-xl">{p[1]}</li>
               <li className="text-xl">{p[2]}</li> */}
               {
                    p?.map(p1=> <li key={p1.index}>{p1}</li>)
               }
              

           </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
