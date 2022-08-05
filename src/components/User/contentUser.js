import { Box, Card, CardContent, Container, IconButton } from "@mui/material";
import React from "react";
import HeaderComponent from "./components/headerComponent";
import footerAtenas from '../../landing/images/footerAtenas.png'
import { NavLink } from "react-router-dom";
import './contentUser.css'
import videos from '../../landing/images/video.png'
import documentos from '../../landing/images/book.png'
import cursos from '../../landing/images/cursos.png'

class ContentUsers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            recurso:'',
            screenWidht: window.innerWidth
        }
    }
    recursos = [
        {name:'Documentos', key:1, imagen:documentos},
        {name:'Videos', key:2, imagen:videos},
        {name:'Cursos', key:3, imagen:cursos}
    ]
    render(){
        return(
            <Container className="ContainerContentUser">
                <HeaderComponent/>
                <Container className="containerSources">
                    <p className="TitleofContainer">Descargables</p>
                    <Box className="boxSources">
                        {this.recursos.map((recurso)=>(
                            <Card className="cardSource1" key={recurso.key}>
                                <CardContent className="contentSource1">
                                    <IconButton className="buttonContent">
                                        <p>{recurso.name}</p>
                                        <img src={recurso.imagen} alt={`Logo Atenas de ${recurso.name }`} title=""/>
                                    </IconButton>
                                </CardContent>
                            </Card>
                        ))}
                        
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