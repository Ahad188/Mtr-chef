import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-9"> Please Register!!</h1>
      <div className="w-[600px] mt-10 mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" forhtml="name">
              UserName:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="UserName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" forhtml="photo">
              Photo Url:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photo"
              type="text"
              placeholder="photo link"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" forhtml="email">
              UserEmail:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2" forhtml="password">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <p className="italic text-center text-xl mt-5">
            I have Already Account? Please
            <Link className="text-blue-400" to="/login">
              SingIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
