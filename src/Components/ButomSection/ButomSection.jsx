import React from "react";
// import './ButomSection.css'
const ButomSection = () => {
  return (
    <section className="container w-[800px] mx-auto mt-8 mb-10 bg-slate-400">
      <div className="container">
        <div className="container w-[350px] mx-auto">
          <h3 className="text-3xl py-3 text-yellow-600">Let's talk about everything</h3>
          <p className="text-2xl text-center"> Send me a email.</p>
          <div className="text-center mt-3 mb-10">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-3">
              <input
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                value="sing In"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButomSection;
