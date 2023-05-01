import React from "react";
import banner from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <section className="p-10  md:flex md:justify-between md:items-center">
      <div className="p-10 ml-10 mt-4">
        <h1 className="text-6xl font-bold mb-10 leading-sung">
        The Masters <br /> of the   <br /> 
          <span className="text-yellow-600 font-bold">Kitchen </span>
        </h1>
        <p className="text-base">
        A chef is a highly skilled culinary professional who is responsible for preparing delicious and visually appealing meals. Chefs work in a variety of settings, including restaurants, hotels, cruise ships, and private households. They are responsible for creating menus, selecting ingredients, and overseeing the preparation and presentation of dishes.
        </p>
          <button className="mt-10 border p-2 bg-yellow-600 text-white hover:bg-yellow-400">
            Get Started
          </button>
      </div>
      <div className="p-10">
        <img src={banner}  alt="" />
      </div>
    </section>
  );
};

export default Banner;