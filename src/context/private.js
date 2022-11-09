import React from 'react';
// import { Link, Navigate, useOutlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export const ProtectedLayout = () => {
//   const { success } = useAuth();
//   const outlet = useOutlet();

//   if (!success) {
//     return <Navigate to="/" />;
//   }
//   return (
//       {outlet}
//   );
// };
import {Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from './authContext';

export default function Private(){
    const {isAuthenticated} = useAuthContext();
    if(!isAuthenticated){
       return <Navigate to='/'/>
    }
    return (<Outlet/>)
}