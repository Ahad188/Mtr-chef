import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodCard = ({f1}) => {
     const {strMeal,strMealThumb} = f1;
     const [dis, setDis] = useState(false)
     const favorite =()=>{
          toast('this is my Favorite food')
          setDis(true)
     }
     return (
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{strMeal}</h2>
     
    <div className="card-actions">
      <button disabled={dis} onClick={()=>{
          favorite()
     
      }}  className="btn">Favorite</button>
    </div>
    <ToastContainer></ToastContainer>
  </div>
</div>
     );
};

export default FoodCard;