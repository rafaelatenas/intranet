import { Box, Card, CardContent, Container, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from '../components/headerComponent'
import footerAtenas from '../../landing/images/footerAtenas.png'
import './contentUser.css'
import videos from '../../landing/images/video.png'
import documentos from '../../landing/images/book.png'
import cursos from '../../landing/images/cursos.png'
import {CloseRounded} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

function ContentUsers(){
    const card = document.querySelectorAll('.cardSource1')
    const styles = useStyles;
    const [openModalContent, setOpenModalContent] = useState(false);
    const screenWidht = window.innerWidth;
    const recursos = [
        {name:'Documentos', key:1, imagen:documentos},
        {name:'Videos', key:2, imagen:videos},
        {name:'Cursos', key:3, imagen:cursos}
    ]
    const contenido = [
        {key:1, name:'Imagine dragons-Enemy', imagen:'8DEEOdz1v0c'},
        {key:2, name:'Bea Miler-Play ground', imagen:'cLJa3JgyWzI'},
        {key:3, name:'Curtis Harding ft.Jazmine Sullivan-Our love', imagen:'cLJa3JgyWzI'},
        {key:4, name:'Bones UK-Dirty little animals', imagen:'wi59j7swVmY'},
        {key:5, name:'League of legend-Get Jinxed', imagen:'wi59j7swVmY'},
        {key:6, name:'Denzel Curry, Gizzle, Bren Joy-Dynasties&Dystopia', imagen:'wi59j7swVmY'},
        {key:7, name:'Woodkid-Guns for hire', imagen:'wi59j7swVmY'},
        {key:8, name:'Miyavi&PVRIS-Snakes', imagen:'wi59j7swVmY'},
        {key:9, name:'Ramsey-Good bye', imagen:'wi59j7swVmY'}
    ]
    const handleElements = (e)=>{
        console.log(e)
    }
    const handleOpenElement = (e)=>{
        setOpenModalContent(true)
        handleElements(e)
    }
    const handleCloseElement = (e)=>{
        setOpenModalContent(false)
    }
    const updateGallery =()=>{
        [...card].forEach(el => {
            console.log(el)
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
        })
    }
    const slide =(e)=>{
        console.log(e)
        if (e.type ==="touchstart") {
            [...card].unshift([...card].pop())
        }
        updateGallery()
    }
    const BoxElements = 
    <Container onClick={handleCloseElement} className="ContainerElements">
        <Box className="BoxElements">
            {contenido.map((content)=>(
                <Card key={content.key} id={`card${content.key}`} className="CardContent">
                    <CardContent className="CardItem">
                        <IconButton onClick={()=>console.log(content.name)}>
                            <img src={`http://img.youtube.com/vi/${content.imagen}/0.jpg`}/>
                        {/* <iframe width="50%" height="50%" src={`https://www.youtube.com/embed/${content.imagen}`} title="running away | dreamcore playlist •°" frameborder="0" allow="accelerometer; autoplay:1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
                            <p>{content.name}</p>
                        </IconButton>
                        
                    </CardContent>
                </Card>   
            ))}
        </Box>
    </Container>;

    return(
        <Container className="ContainerContentUser">
            <HeaderComponent/>
            <Container className="containerSources">
                <p className="TitleofContainer">Descargables</p>
                <Box className="boxSources" >
                    {recursos.map((recurso)=>(
                        <Card className={`cardSource1`} key={recurso.key} onTouchStart={(e)=>slide(e)}>
                            <CardContent className="contentSource1">
                                <IconButton className="buttonContent" onClick={()=>handleOpenElement(recurso.key)}>
                                    <p>{recurso.name}</p>
                                    <img src={recurso.imagen} alt={`Logo Atenas de ${recurso.name}`} title=""/>
                                </IconButton>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                <img className="imageFooter" src={footerAtenas} alt="" title=""/>
                {openModalContent?BoxElements:''}
            </Container>
        </Container>
    )
}
export default ContentUsers;

const useStyles = makeStyles({
    slides: {
        
    }
})