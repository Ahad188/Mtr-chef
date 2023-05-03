import React from "react";
import men3 from "../../assets/m3.jpg";

const WorldChef = () => {
     
  return (
    <div>
      <h2 className="text-center text-5xl text-yellow-400 mb-10">Most Popular chef World</h2>
      <div className="md:flex justify-between items-center md:px-24">
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
          <figure>
            <img src={men3} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center text-4xl text-rose-400">Annel Serma</h2>
            <p className="text-xl">Head chef london </p>
          </div>
        </div>
        {/*  */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
          <figure>
            <img src={men3} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center text-4xl text-rose-400">Annel Serma</h2>
            <p className="text-xl">Head chef london </p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
          <figure>
            <img src={men3} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center text-4xl text-rose-400">Annel Serma</h2>
            <p className="text-xl">Head chef london </p>
          </div>
        </div>
        {/*  */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
          <figure>
            <img src={men3} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center text-4xl text-rose-400">Annel Serma</h2>
            <p className="text-xl">Head chef london </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldChef;
