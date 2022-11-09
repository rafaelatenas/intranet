import React from 'react';

// import { Navigate, useOutlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export const HomeLayout = () => {
//   const { success } = useAuth();
//   const outlet = useOutlet();

//   if (success) {
//     return <Navigate to="/home" replace />;
//   }

//   return (

//       {outlet}
//   );
// };

import {Navigate, Outlet} from 'react-router-dom';
import {useAuthContext} from './authContext';

export default function Public(){
    const {isAuthenticated} = useAuthContext();
    const Home = <Navigate to='/home'/>
    if(isAuthenticated){
        return Home
    }
    return (<Outlet/>)
}
