import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
     const auth = getAuth(app)
     // const user ={name:"Rohim"}
     const [user,setUser] = useState(null)
     const [loading,setLoading]= useState(true)

     const createUser =(email,password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
     }
     const loginUser=(email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut =()=>{
          setLoading(true)
          return signOut(auth)
     }
      useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(loggedUser)=>{
               console.log( "logged in user outside auth", loggedUser);
               setUser(loggedUser)
               setLoading(false)
          })
          return()=>{
               unsubscribe()
          }
      },[])
     const authInfo ={
          user,
          loading,
          createUser,
          loginUser,
          logOut
     }
     return (
          <AuthContext.Provider value={authInfo} >
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;