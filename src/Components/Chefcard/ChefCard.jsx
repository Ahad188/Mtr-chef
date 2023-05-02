import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ card }) => {
     const { chefName,experience,id,likes,chefPicture}= card;
  console.log(card);
  return (
    <div className="card card-side bg-base-100 w-[650px] shadow-xl">
      <figure>
        <img className="p-3 w-96 rounded-md" src= {chefPicture} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
         <div>
          <h3>Experience:{experience}</h3>
          <h4>Likes: <span className="text-yellow-300">{likes}</span></h4>
         </div>
        <div className="justify-end">
          <button className="btn text-yellow-400" onClick={()=>console.log(id)} title="Details chef here"> 
          <Link to='/card'>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
