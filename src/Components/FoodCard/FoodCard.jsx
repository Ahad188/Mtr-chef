import React from 'react';

const FoodCard = ({f1}) => {
     const {strMeal,strMealThumb} = f1
     return (
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{strMeal}</h2>
     
    <div className="card-actions">
      <button className="btn">Favorite</button>
    </div>
  </div>
</div>
     );
};

export default FoodCard;