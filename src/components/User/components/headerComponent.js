import { Box, IconButton, ListItemIcon, Menu, MenuItem, MenuList } from "@mui/material";
import React from "react";
import logoAtenas from '../../../landing/images/Logo_Atenas_EliseBlanca.png'
import { NavLink } from "react-router-dom";
import './headerComponents.css'
import {MenuRounded, AccountCircleRounded, DashboardRounded, FileDownloadDoneRounded, Logout} from '@mui/icons-material';

class HeaderComponent extends React.Component{

    constructor(props){
        console.log(props)
        super(props);
        this.state={
            anchorEl:null,
            select:'',
            algo:props
        }
    }

    handleOpenMenu=(event)=>{
        console.log(this.state.algo)
        this.setState({anchorEl:event.currentTarget})
    }
    handleCloseMenu=(selected)=>{
        this.setState({anchorEl:null, select:selected})
        console.log(selected)
        console.log(this.state.select)
    }
    opciones=[
        {name:'Mi Perfil', key:1, Icon:<AccountCircleRounded/> ,url:''},
        {name:'Inicio', key:2, Icon:<DashboardRounded/>,url:'/home'},
        {name:'Descargables', key:3, Icon:<FileDownloadDoneRounded/>,url:'/home/courses'},
        {name:'Salir', key:4, Icon:<Logout/>,url:'/'}
    ]
    render(){
        return(
            <Box className="boxHeaderComponent">
                <IconButton style={{width:'auto', height:'100%', marginLeft:'1%'}}>
                    <NavLink to={'/home'} style={{width:'auto', height:'100%', display:'flex', alignItems:'center'}}>
                        <img className="logoHeaderComponent" src={logoAtenas} alt="Logo Atenas Grupo Consultor. Elise Blanca" title=""></img>   
                    </NavLink>
                </IconButton>
                <IconButton className="buttonMenu"
                    id="basic-button"
                    aria-controls={Boolean(this.state.anchorEl) ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={Boolean(this.state.anchorEl) ? 'true' : undefined}
                    onClick={(e)=>this.handleOpenMenu(e)}
                >
                    <MenuRounded style={{fill:'#616161'}}/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleCloseMenu}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuList>
                        {this.opciones.map((opcion)=>(
                        <NavLink to={opcion.url} style={{textDecoration:'none'}}>
                            <MenuItem key={opcion.key} onClick={()=>this.handleCloseMenu(opcion.key)} style={this.state.select === opcion.key?{background:'#033d7247',color:'#616161', fontWeight:'bold'}:{background:'',color:'#616161', fontWeight:'bold'}}>
                                <ListItemIcon>
                                    {opcion.Icon}
                                </ListItemIcon>
                                {opcion.name}
                            </MenuItem>
                        </NavLink>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
        )
    }

}

export default HeaderComponent;