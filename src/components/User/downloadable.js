import { Box, Card, CardContent, Container, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from '../components/headerComponent'
import footerAtenas from '../../landing/images/footerAtenas.png'
import './downloadable.css'
import videos from '../../landing/images/video.png'
import documentos from '../../landing/images/book.png'
import cursos from '../../landing/images/cursos.png'
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@mui/styles";

function Downloadable(){
    const styles = StyleComponent()
    const [openModalContent, setOpenModalContent] = useState(false);
    const screenWidht = window.innerWidth;
    const recursos = [
        {name:'Documentos', key:1, url:'documents', imagen:documentos},
        {name:'Videos', key:2, url:'videos', imagen:videos},
        {name:'Cursos', key:3, url:'courses', imagen:cursos}
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


    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
    setActiveStep(step);
    };
    const SwipeableViewsMobile = 
        <SwipeableViews
            index={activeStep+1} onChangeIndex={handleStepChange}
            className={styles.carousel}
        >
            {recursos.map((recurso)=>(
                <Card key={recurso.key} className={styles.cardSource1}>
                    <CardContent className={styles.contentSource1}>
                        <IconButton className={styles.buttonContent} onClick={()=>handleOpenElement(recurso.key)}>
                            <p>{recurso.name}</p>
                            <img src={recurso.imagen} alt={`Logo Atenas de ${recurso.name}`} title=""/>
                        </IconButton>
                    </CardContent>
                </Card>
            ))}
        </SwipeableViews>
    const CardsViewsDesktop = 
        <Box className={styles.boxSources}>
            {recursos.map((recurso)=>(
                <Card key={recurso.key} className={`${styles.cardSource}`}>
                    <CardContent className={`${styles.contentSource}`}>
                        <IconButton className={`${styles.buttonContent}`} href={`/home/resources/${recurso.url}`}>
                            <p>{recurso.name}</p>
                            <img src={recurso.imagen} alt={`Logo Atenas de ${recurso.name}`} title=""/>
                        </IconButton>
                    </CardContent>
                </Card>
            ))}
        </Box>
    return(
        <Container className={styles.ContainerContentUser}>
            <HeaderComponent/>
            <Container className={styles.containerSources}>
                <div className={styles.containerOfTitle}>
                    <p className={styles.TitleofContainer}>Descargables</p>
                </div>
                {screenWidht>700?CardsViewsDesktop:SwipeableViewsMobile}
                <img className={styles.imageFooter} src={footerAtenas} alt="Pie de Pagina Atenas" title=""/>
                {openModalContent?BoxElements:''}
            </Container>
        </Container>
    )
}
export default Downloadable;

const StyleComponent = makeStyles(()=>({
    ContainerContentUser:{
        width: '100%',
        height: '100%',
        display: 'grid !important',
        gridTemplateColumns: '100%',
        gridTemplateRows: '15% 85%',
        maxWidth: 'none !important',
        padding: '0 !important',
        margin: '0 !important',
    },
    containerSources:{
        width: '100%',
        height: '100%',
        gridColumn: '1/2',
        gridRow: '2/3',
        maxWidth: 'none !important',
        padding: '5% 0 0 !important',
        margin: '0 !important',
        display: 'flex !important',
        alignItems: 'center',
        flexDirection: 'column',
    },
    '@media screen and (orientation:portrait)':{
        cardSource:{
            width: 'auto',
            height: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 0,
            borderRadius: '0!important',
            boxShadow: 'none !important',
            minHeight: 230,
        },
        contentSource:{
            width: '50%',
            height: '60% !important',
            padding: '0 !important',
            margin: '0 !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #61616157',
            borderRadius: '1.2em',
            minHeight: 250,
        },
        buttonContent:{
            width: '80%',
            height: '100%',
            flexDirection: 'column',
            justifyContent:' space-around !important',
            borderRadius: '0 !important',
            transition: 'none !important',
            background: 'transparent !important',
        },
        buttonContent:{
            ' & span' :{
                overflow: 'visible',
                borderRadius: '1.2em !important',
            }
        },
        buttonContent: {
            "& p":{
                margin: 0,
                width: '100%',
                height: 'auto',
                fontWeight: 'bold',
            }
        },
        buttonContent:{
            "& img":{
                width: '80%',
                height: '50%',
                minWidth: 135,
                minHeight: 120,
                maxWidth: 170,
                maxHeight: 190,
            }
        },
        ContainerElements:{
            top: '15%',
            width: '100%',
            height: '85%',
            maxWidth: 'none !important',
            justifyItems: 'center',
        },
        BoxElements:{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflowY: 'scroll',
        },
        CardContent:{
            width: '30%',
            height: '40%',
        },
        CardItem:{
            width: '100%',
            height: '100%',
            padding: '0 !important',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        carousel:{
            height: '70%'
        },
        carousel:{
            '& .react-swipeable-view-container':{
                overflow: 'visible',
                height: '100%',
                alignItems: 'center',
            }
        },
        carousel:{
            '& .react-swipeable-view-container div':{
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center',
            }
        }
    },
    '@media screen and (orientation:landscape)':{
        containerSources:{
            padding: '0 !important',
            display: 'grid !important',
            gridTemplateColumns: '25% 45% 30%',
            gridTemplateRows: '10% 70% 20%',
            alignItems: 'end',
            justifyItems: 'center',
        },
        containerOfTitle:{
            width: '100%',
            height: '100%',
            gridColumn: '1/2',
            gridRow: '1/2',
            display: 'flex',
            alignItems: 'center',
            overflow:'visible',
        },
        TitleofContainer:{
            border: '1px solid #61616161',
            padding: '2.5%',
            borderRadius: '0.5em',
            color: '#616161',
            width: '45%',
            minWidth: 130,
            margin: '0 !important',
            textAlign: 'center',
            position:'relative',
            left:'7.5%'
        },
        boxSources:{
            display: 'inline-flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            gridColumn: '1/4',
            gridRow: '2/3',
        },
        cardSource:{
            width: '20%',
            minWidth: 150,
            maxWidth: 250,
            height: '65%',
            border: '1px solid #61616157',
            borderRadius: '1.2em !important',
            
        },
        contentSource:{
            width: '100%',
            height: '100%',
            padding: '0 !important',
            borderRadius: '1.2em !important',
            '& button:hover':{
                borderRadius: '1.2em !important',
            }
        },

        buttonContent :{
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            '&:hover':{
                borderRadius: '1.2em !important',
                transform:'scale(1.1)'
            },
            '& p' :{
                fontSize: '0.9em',
                margin: '0% !important',
            },
            '& img':{
                width: '70%',
                height: 'auto',
                minWidth: 125,
                minHeight: 125,
            },
            
        },
        imageFooter:{
            gridColumn: '3/4',
            gridRow: '3/4',
            width: '100%',
            height: 'auto',  
        },
        
    }
}))
