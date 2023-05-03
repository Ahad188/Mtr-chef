import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
     const {user,createUser} = useContext(AuthContext)
     // console.log(user);
     const handelRegister =(event)=>{
          event.preventDefault();
         
           const form = event.target;
           const name = form.name.value;
          //  const photo = from.photo.value;
           const email = form.email.value;
           const password = form.password.value;
        
          console.log(name,email,password);

          createUser(email,password)
          .then(result=>{
               const creatuser = result.user;
               console.log(creatuser);
               form.reset()
          })
          .catch(err=>{
               console.log(err);
          })

        
     }
  return (
    <div>
      <h1 className="text-3xl text-center mt-9"> Please Register!!</h1>
      <div className="w-[600px] mt-10 mx-auto">
      <form onSubmit={ handelRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" forhtml="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" forhtml="photo">
            Photo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photo"
            type="text"
            placeholder="Photo"
            required
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
            required
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
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="sing Up" />
          
           
        </div>
        <p className="italic text-center text-xl mt-5">
          I have No Account ? Please
          <Link className="text-blue-400" to="/login">
           Login-In
          </Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Register;
