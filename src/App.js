import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/login/login';
import Home from './components/home/home';
import ManagementPanel from './components/management-panel/managementPanel';
import ContentUsers from './components/User/contentUser';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="home" element={<Home/>}/>
        <Route exact path="/home/courses" element={<ContentUsers/>}/>
        <Route exact path="/management" element={<ManagementPanel/>}/>
        {/* RRHH */}
        {/* <Route exact path="/management" element={<ManagementPanel/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
