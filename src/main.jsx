import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Router/Routers.jsx'
import AuthProvider from './Provider/AuthProvider'

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
  </React.StrictMode>,
)
