import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/login';
import Home from './components/home/home';
import ManagementPanel from './components/management-panel/managementPanel';
import ContentUsers from './components/User/contentUser';
import { AuthContextProvider } from './context/authContext';
import Public from './context/public';
import Private from './context/public';
import Profile from './components/User/userProfile';
function App() {
  return (
    // <AuthContextProvider>
    //   <BrowserRouter>
    //     <Routes>
    //         {/*Rutas Públicas*/}
    //       <Route path="/intranet/" element={<Public/>}>
    //         <Route index element={<Login/>}/>
    //         <Route exact path='/intranet/recoverypassword/:email/:token' element={<Login/>}/>
    //         <Route exact path="*" element={<Login/>}/>
    //       </Route>
    //         {/*Rutas Privadas*/}
    //       <Route path="/intranet/" element={<Private/>}>
    //         <Route exact path="/intranet/home" element={<Home/>}/>
    //         <Route exact path="/intranet/home/courses" element={<ContentUsers/>}/>
    //         <Route exact path="/intranet/management" element={<ManagementPanel/>}/>
    //       </Route>
          
    //       {/* RRHH */}
    //       {/* <Route exact path="/management" element={<ManagementPanel/>}/> */}
    //     </Routes>
    // </BrowserRouter>
    // </AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="home" element={<Home/>}/>
        <Route exact path="home/profile" element={<Profile/>}/>
        <Route exact path="/home/courses" element={<ContentUsers/>}/>
        <Route exact path="/management" element={<ManagementPanel/>}/>
        {/* RRHH */}
        {/* <Route exact path="/management" element={<ManagementPanel/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
