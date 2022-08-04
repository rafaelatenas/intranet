import { Box, Card, CardContent, Container, IconButton } from "@mui/material";
import React from "react";
import HeaderComponent from "./components/headerComponent";
import footerAtenas from '../../landing/images/footerAtenas.png'
import { NavLink } from "react-router-dom";
import './contentUser.css'

class ContentUsers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            recurso:''
        }
    }
    recursos = [{name:'Videos', key:1, imagen:''},{name:'Documentos', key:2, imagen:''},{name:'Cursos', key:3, imagen:''}]
    render(){
        return(
            <Container className="ContainerContentUser">
                <HeaderComponent/>
                <Container className="containerSources">
                    <p className="TitleofContainer">Descargables</p>
                    <Box className="boxSources">
                        <Card className="cardSource1">
                            <CardContent className="contentSource1">
                                <IconButton>
                                    <img src='' alt="" title=""/>
                                </IconButton>
                            </CardContent>
                        </Card>
                        {/* <Card className="cardSource2">
                            <CardContent className="contentSource2">
                                <IconButton>
                                    <img src='' alt="" title=""/>
                                </IconButton>
                            </CardContent>
                        </Card>
                        <Card className="cardSource3">
                            <CardContent className="contentSource3">
                                <IconButton>
                                    <img src='' alt="" title=""/>
                                </IconButton>
                            </CardContent>
                        </Card> */}
                    </Box>
                    <img className="imageFooter" src={footerAtenas} alt="" title=""/>
                </Container>
            </Container>
        )
    }
}
export default ContentUsers;