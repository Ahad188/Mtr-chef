import React from "react";

const ChefCard = ({ card }) => {
     const { chefName,experience,id,likes,chefPicture}= card;
  console.log(card);
  return (
    <div className="card card-side bg-base-100 w-[650px] shadow-xl">
      <figure>
        <img src= {chefPicture} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
         <div>
          <h3>Experience:{experience}</h3>
          <h4>Likes:{likes}</h4>
         </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>console.log(id)}> Details</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
