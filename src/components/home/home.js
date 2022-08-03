import { Box, Container } from "@mui/material"
import React from "react"
import './home.css'
import logoAtenas from '../../landing/images/Logo_Atenas_EliseBlanca.png'
import Ateniense from "./homeComponents/ateniense"
import ButtonsInteracction from "./homeComponents/interactionsHome"
class Home extends React.Component{
    render(){
        return(
            <Container className="containerHome">
                <Box className="boxHeader">
                   <img className="logoHeader" src={logoAtenas} alt="Logo Atenas Grupo Consultor. Elise Blanca" title=""></img> 
                </Box>
                <Box className="boxContainer">
                    <Container className="atenienseContainer">
                        <Ateniense/>
                    </Container>
                    <Container className="buttonsContainer">
                        <ButtonsInteracction/>
                    </Container>
                </Box>
            </Container>
        )
    }
}
export default Home;