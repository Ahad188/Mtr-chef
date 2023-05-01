import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
     return (
          <NavLink to={to}
           className={({isActive}) =>
             isActive ? 'underline text-white mr-4 ' : " mr-5"
          }
           >
               {children}
           </NavLink>
     );
};

export default ActiveLink;