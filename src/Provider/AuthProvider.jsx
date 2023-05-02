import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
     const auth = getAuth(app)
     // const user ={name:"Rohim"}
     const [user,setUser] = useState(null)

     const createUser =(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password)
     }
     const loginUser=(email,password)=>{
          return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut =()=>{
          return signOut(auth)
     }
      useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,(loggedUser)=>{
               console.log( "logged in user outside auth", loggedUser);
               setUser(loggedUser)
          })
          return()=>{
               unsubscribe()
          }
      },[])
     const authInfo ={
          user,
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