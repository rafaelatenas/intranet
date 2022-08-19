import { Box, Card, CardContent, Container } from "@mui/material";
import HeaderComponent from "../components/headerComponent";
import './userProfile.css'
import user from '../../landing/images/user.png'
export default function Profile(){
  
    return(
        <Container className="containerProfile">
            <HeaderComponent/>
            <Box className="boxPofile">
                <p className="spaceProfile" style={{color:'#616161'}}>Mi espacio <strong style={{color:'#0c5091'}}>ATENAS</strong></p>
                <Container className="containerContentProfile">
                    
                    <img className="photoProfile" src={user} alt='user' title=""/>
                </Container>
            </Box>
        </Container>
    )
}