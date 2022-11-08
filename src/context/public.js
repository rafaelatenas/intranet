import React from 'react';
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
