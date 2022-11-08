import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from './authContext';

export default function Private(){
    const {isAuthenticated} = useAuthContext();
    if(!isAuthenticated){
       return <Navigate to='/'/>
    }
    return (<Outlet/>)
}