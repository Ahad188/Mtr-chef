import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import Allchef from "../Components/Allchef/Allchef";
import Card from "../Components/Card/Card";

const router = createBrowserRouter([
     {
          path:'/',
          element: <App></App>,
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
                    path:'/card',
                    element:<Card></Card>
               }
          ]
     },
      
])

export default router;