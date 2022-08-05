import { Box, Container, IconButton } from "@mui/material"
import React from "react"
import './home.css'
import logoAtenas from '../../landing/images/Logo_Atenas_EliseBlanca.png'
import Ateniense from "./homeComponents/ateniense"
import ButtonsInteracction from "./homeComponents/interactionsHome"
import { NavLink } from "react-router-dom";
import { Logout } from "@mui/icons-material"
import HeaderComponent from "../User/components/headerComponent"

class Home extends React.Component{

    constructor(props){
        super(props);
        this.handleActiveClick = this.handleActiveClick.bind(this);
        this.state={
            activo:'',
            
        }
    }
    handleActiveClick(data) {
        this.setState({activo:data})
    }

    render(){console.log(this.state.activo)
        return(
            <Container className="containerHome">
                <HeaderComponent
                    data={this.state.activo}
                />
                {/* <Box className="boxHeader">
                    <IconButton style={{width:'auto', height:'100%', marginLeft:'1%'}}>
                        <NavLink to={'/home'} style={{width:'auto', height:'100%', display:'flex', alignItems:'center'}}>
                            <img className="logoHeader" src={logoAtenas} alt="Logo Atenas Grupo Consultor. Elise Blanca" title=""></img>   
                        </NavLink>
                    </IconButton>
                    <IconButton style={{width:'auto', height: 'auto', marginRight:'1%'}}>
                        <NavLink to={'/'} className='logOut'>
                            <Logout/>
                        </NavLink>
                    </IconButton>
                </Box> */}
                <Box className="boxContainer">
                    <Container className="atenienseContainer">
                        <Ateniense/>
                    </Container>
                    <Container className="buttonsContainer">
                        <ButtonsInteracction
                            evento={this.handleActiveClick}
                        />
                    </Container>
                </Box>
            </Container>
        )
    }
}
export default Home;