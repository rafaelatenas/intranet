import { Box, Button, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import logoAtenas from '../../landing/images/Logo_Atenas_EliseBlanca.png'
import { NavLink } from "react-router-dom";
import './headerComponents.css'
import {MenuRounded, AccountCircleRounded, DashboardRounded, FileDownloadDoneRounded, Logout, ExitToApp} from '@mui/icons-material';
import { useAuthContext } from "../../context/authContext"

function HeaderComponent(){
    const {logout}=useAuthContext()
    const widthScreen = window.innerWidth
    const [anchorEl, setAnchorEl]=useState(null)
    const [select, setSelect]=useState(2)

    const handleOpenMenu=(selected)=>{
        setAnchorEl(!anchorEl)
        setSelect(selected)
        console.log(select)
    }
    const handleCloseMenu=()=>{
        setAnchorEl(!anchorEl)
    }
    const actions = [
        { key:1,icon: <NavLink className='LinkIcons' to={`/home/profile`} ><AccountCircleRounded className='IconsSpeedDial' /></NavLink>, name: 'Configuraciones', admin: 0 },
        { key:2,icon: <NavLink className='LinkIcons' to={`/home`} ><DashboardRounded className='IconsSpeedDial' /></NavLink>, name: 'Configuraciones', admin: 0 },
        { key:3,icon: <NavLink className='LinkIcons' to={`/home/resources`} ><FileDownloadDoneRounded className='IconsSpeedDial' /></NavLink>, name: 'Configuraciones', admin: 0 },
        { key:4,icon: <NavLink className='LinkIcons' to={`/home/management`} ><FileDownloadDoneRounded className='IconsSpeedDial' /></NavLink>, name: 'Configuraciones', admin: 0 },
        { key:5,icon: <ExitToApp className='IconsSpeedDial' onClick={() => logout()} />, name: 'Salir', admin: 0 },
    ];
    const opciones=[
        {name:'Mi Perfil', key:1, Icon:<AccountCircleRounded/> ,url:'/home/profile'},
        {name:'Inicio', key:2, Icon:<DashboardRounded/>,url:'/home'},
        {name:'Descargables', key:3, Icon:<FileDownloadDoneRounded/>,url:'/home/resources'},
        {name:'Panel Administrativo', key:3, Icon:<FileDownloadDoneRounded/>,url:'/home/management'},
    ]
        return(
            <Box className="boxHeaderComponent">
                <IconButton style={{width:'auto', height:'100%', marginLeft:'1%'}}>
                    <NavLink to={'/home'} style={{width:'auto', height:'100%', display:'flex', alignItems:'center'}}>
                        <img className="logoHeaderComponent" src={logoAtenas} alt="Logo Atenas Grupo Consultor. Elise Blanca" title=""></img>   
                    </NavLink>
                </IconButton>
                <IconButton className="buttonMenu" id="basic-button"
                    aria-controls={Boolean(anchorEl) ? 'basic-menu' : undefined} aria-haspopup="true"
                    aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                    onClick={handleOpenMenu}
                >
                    <MenuRounded style={{fill:'#616161'}}/>
                </IconButton>
                
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top:50*1.5 , left: widthScreen }}
                    MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                    }}
                >
                    {opciones.map((opcion)=>(
                        <NavLink to={opcion.url} style={{textDecoration:'none'}} key={opcion.key}>
                            <MenuItem
                                selected={opcion.key === select}
                                onClick={()=>handleOpenMenu(opcion.key)}>
                                <ListItemIcon>
                                    {opcion.Icon}
                                </ListItemIcon>
                                {opcion.name}
                            </MenuItem>
                        </NavLink>
                        ))}
                </Menu>
                {/* <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleOpenMenu}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top:50*1.5 , left: `${widthScreen}` }}
                >
                        {opciones.map((opcion)=>(
                        <NavLink to={opcion.url} style={{textDecoration:'none'}} key={opcion.key}>
                            <MenuItem key={opcion.key} onClick={()=>handleCloseMenu(opcion.key)} style={select === opcion.key?{background:'#033d7247',color:'#616161', fontWeight:'bold'}:{background:'',color:'#616161', fontWeight:'bold'}}>
                                <ListItemIcon>
                                    {opcion.Icon}
                                </ListItemIcon>
                                {opcion.name}
                            </MenuItem>
                        </NavLink>
                        ))}
                </Menu> */}
            </Box>
        )
    }


export default HeaderComponent;