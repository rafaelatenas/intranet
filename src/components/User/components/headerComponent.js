import { Box, IconButton } from "@mui/material";
import React from "react";
import logoAtenas from '../../../landing/images/Logo_Atenas_EliseBlanca.png'
import { NavLink } from "react-router-dom";
import './headerComponents.css'


class HeaderComponent extends React.Component{

    render(){
        return(
            <Box className="boxHeaderComponent">
                <IconButton style={{width:'auto', height:'100%', marginLeft:'1%'}}>
                    <NavLink to={'/home'} style={{width:'auto', height:'100%', display:'flex', alignItems:'center'}}>
                        <img className="logoHeaderComponent" src={logoAtenas} alt="Logo Atenas Grupo Consultor. Elise Blanca" title=""></img>   
                    </NavLink>
                </IconButton>
            </Box>
        )
    }

}

export default HeaderComponent;