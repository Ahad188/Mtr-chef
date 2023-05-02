import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
 

const Login = () => {
     const location = useLocation()
     const from = location?.state?.from?.pathname || '/'
     const {loginUser, googles,} = useContext(AuthContext)
     const navigate = useNavigate()
     const handelLogin=(event)=>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);
          loginUser(email,password)
          .then(result=>{
               const loguser = result.user
               console.log(loguser);
               navigate(from,{replace:true})
          })
          .catch(err=>{
               console.log(err);
          })
     }
  return (
    <div className="w-[600px] mt-10 mx-auto mb-80 border border-spacing-1 p-4">
     <h2 className="text-center text-3xl font-bold">Please Log-In</h2>
      <form onSubmit={handelLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="sing In" />
          
           
        </div>
        <p className="italic text-center text-xl mt-5">
          I have No Account ? Please
          <Link className="text-blue-400" to="/register">
            Register
          </Link>
        </p>
        
      </form>
      <div className="flex justify-evenly">
          <button className="btn btn-info" onClick={()=> googles()}> SingIn Google</button>
          <button className="btn btn-info">SingIn Github </button>
      </div>
    </div>
  );
};

export default Login;
