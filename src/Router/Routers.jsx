import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import Allchef from "../Components/Allchef/Allchef";
import Card from "../Components/Card/Card";
 
import Proctet from "../Proctet/Proctet";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
     {
          path:'/',
          element: <App></App>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                    path:'/blog',
                    element:<Blog></Blog>
               },
               {
                    path:'/login',
                    element:<Login></Login>
               },
               {
                    path:'/register',
                    element:<Register></Register>
               },
               {
                    path:'/all-chef',
                    element:<Allchef></Allchef>,
               }
               ,{
                    path:'/card/:id',
                    element:<Proctet><Card></Card></Proctet>,
                    loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
                    
               }
          ]
     },
      
])

export default router;