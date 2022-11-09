import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/login';
import Home from './components/home/home';
import ManagementPanel from './components/management-panel/managementPanel';
import Downloadable from './components/User/downloadable';
import { AuthContextProvider } from './context/authContext';
import Public from './context/public';
import Private from './context/private';
import Profile from './components/User/userProfile';
import NotFound from './components/notFound';
import Documents from './components/User/resources/documents';
import Videos from './components/User/resources/videos';
import Courses from './components/User/resources/courses';
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Public/>}>
            <Route index element={<Login/>}/>
            {/* <Route exact path='/recoverypassword/:email/:
            ' element={<Login/>}/> */}
            <Route exact path="*" element={<NotFound/>}/>
          </Route>

          <Route path="/home" element={<Private/>}>
            <Route path="/home" element={<Home/>}/>
              <Route exact path="/home/profile" element={<Profile/>}/>
              <Route exact path="/home/resources" element={<Downloadable/>}/>
              <Route exact path="/home/resources/documents" element={<Documents/>}/>
              <Route exact path="/home/resources/videos" element={<Videos/>}/>
              <Route exact path="/home/resources/courses" element={<Courses/>}/>
              <Route exact path="/home/management/" element={<ManagementPanel/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
