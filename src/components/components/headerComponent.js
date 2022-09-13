import { Box, IconButton, ListItemIcon, Menu, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import logoAtenas from '../../landing/images/Logo_Atenas_EliseBlanca.png'
import { NavLink } from "react-router-dom";
import './headerComponents.css'
import {MenuRounded, AccountCircleRounded, DashboardRounded, FileDownloadDoneRounded, Logout} from '@mui/icons-material';
import { height } from "@mui/system";

function HeaderComponent(){

    const widthScreen = window.innerWidth
    const HeightScreen = window.innerHeight
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
    const opciones=[
        {name:'Mi Perfil', key:1, Icon:<AccountCircleRounded/> ,url:'/home/profile'},
        {name:'Inicio', key:2, Icon:<DashboardRounded/>,url:'/home'},
        {name:'Descargables', key:3, Icon:<FileDownloadDoneRounded/>,url:'/home/resources'},
        {name:'Panel Administrativo', key:3, Icon:<FileDownloadDoneRounded/>,url:'/home/management'},
        {name:'Salir', key:4, Icon:<Logout/>,url:'/'}
    ]
        return(
            <Box className="boxHeaderComponent">
                   <IconButton style={{width:'auto', height:'100%', marginLeft:'1%'}}>
                    <NavLink to={'/home'} style={{width:'auto', height:'100%', display:'flex', alignItems:'center'}}>
                        <img className="logoHeaderComponent" src={logoAtenas} alt="Logo Atenas Grupo Consultor. Elise Blanca" title=""></img>   
                    </NavLink>
                </IconButton>
                <IconButton className="buttonMenu"
                    id="basic-button"
                    aria-controls={Boolean(anchorEl) ? 'basic-menu' : undefined}
                    aria-haspopup="true"
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