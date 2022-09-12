import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardContent, Container, FormControl, FormControlLabel, FormLabel, IconButton, Modal, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from '../../components/headerComponent'
import footerAtenas from '../../../landing/images/footerAtenas.png'
// import './documents.css'
import videos from '../../../landing/images/video.png'
import documentos from '../../../landing/images/book.png'
import cursos from '../../../landing/images/cursos.png'
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "styled-components";
import { autoPlay } from 'react-swipeable-views-utils';
import { ConstructionOutlined, EditRounded, ExpandMoreRounded, FolderRounded, PostAddRounded, UploadFileRounded } from "@mui/icons-material";

function Documents(){

    const [openModalContent, setOpenModalContent] = useState(false);
    const [documents, setDocuments] = useState([{name:'', url:''}]);
    const [documentsT, setDocumentsT] = useState()
    const [election, setElection] =useState(false);
    const [disabled, setDisabled]=useState(true)
    const [url, setUrl] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false)
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
    
    const handleElection = (event) => {
        setElection(event.target.value);
        setDisabled(!disabled)
    }
    const handleDocuments = (e) =>{
        if (name==='') {
            setError(true)
        }
        switch (e.length === 1) {
            case true:
                setDocuments({name:e[0].name ,url:window.URL.createObjectURL(e[0])})
                setUrl(window.URL.createObjectURL(e[0]))
                break;
            case false:
                setDocumentsT(Object.values(e))
                break;
            default:
                break;
        }
    }

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      console.log(isExpanded)
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleRedirect = (panel) => (event, isExpanded) =>  {
        console.log(panel)
        setUrl(window.URL.createObjectURL(panel))
    };

    const BoxElements = 
    <Container className="ContainerElements">
        <h2>Panel de Gestión de Documentos</h2>
        <Box className="Elements">
            <Box className="BoxElements">
                <Accordion className="create" expanded={expanded === 'create'} onChange={handleChange('create')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: 'auto', flexShrink: 0 }}>
                            <UploadFileRounded/>Crear Archivo o Carpeta de Archivos
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="AccordionDetailsCreate">
                        <FormControl className="FormControlCreate">
                            <FormLabel>¿Desea crear una carpeta de Archivos?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={election}
                                onChange={handleElection}
                                style={{gridColumn:'1/2'}}
                            >
                                <FormControlLabel value="SI" control={<Radio/>} label="SI" />
                                <FormControlLabel value="NO" control={<Radio/>} label="NO" />
                            </RadioGroup>
                            <TextField style={{overflow:'visible'}} disabled={election==='NO'||election===''?true:false} label="Nombre" name="name" value={name} onChange={handleName} variant="outlined"/>
                        </FormControl>
                        <Button variant="contained" component="label" disabled={election!=='' && name!==''?false:true}>
                            {election!=='NO'?'Subir Archivos':'Subir Archivo'}
                            {election!=='NO'?
                                <input type="file" hidden multiple onChange={(e)=>handleDocuments(e.target.files)}/>:
                                <input type="file" hidden onChange={(e)=>handleDocuments(e.target.files)}/>
                            }
                        </Button>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="edit" expanded={expanded === 'edit'} onChange={handleChange('edit')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: 'auto', flexShrink: 0 }}>
                            <EditRounded/>Editar Archivos
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <FormLabel>¿Desea crear una carpeta de Archivos?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={election}
                                onChange={handleElection}
                            >
                                <FormControlLabel value="SI" control={<Radio/>} label="SI" />
                                <FormControlLabel value="NO" control={<Radio/>} label="NO" />
                            </RadioGroup>
                            <Button
                                variant="contained"
                                component="label"
                                disabled={election!==''?false:true}
                                >
                                {election!=='NO'?'Subir Archivos':'Subir Archivo'}
                                {election!=='NO'?
                                    <input type="file" hidden multiple onChange={(e)=>handleDocuments(e.target)}/>:
                                    <input type="file" hidden onChange={(e)=>handleDocuments(e.target.files)}/>
                                }
                            </Button>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box className="PreviewElements">
                <h3>Visualizador de Elements</h3>
                {election==='SI'?
                <Accordion className="edit" expanded={expanded === 'preview'} onChange={handleChange('preview')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRounded />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                            <Typography  sx={{ width: 'auto', flexShrink: 0 }}>
                                <FolderRounded/>{name}
                            </Typography>
                        
                    </AccordionSummary>
                    <AccordionDetails>
                    {Object.values(documentsT).map((doc)=>( console.log(doc),
                            <Typography onClick={()=>handleRedirect(doc)} sx={{ width: 'auto', flexShrink: 0 }}>
                                <FolderRounded/>{doc.name}
                            </Typography>
                        ))}
                        
                        
                    </AccordionDetails>
                {election==='SI'?<embed src={url} width="640" height="480" title="Title of my video"/>:<embed src={url} width="640" height="480" title="Title of my video"/>}
                </Accordion>:''}
            </Box>
        </Box>
    </Container>;


    // const [activeStep, setActiveStep] = React.useState(0);
    // const handleStepChange = (step) => {
    // setActiveStep(step);
    // };
    // const SwipeableViewsMobile = 
    //     <SwipeableViews
    //         index={activeStep+1} onChangeIndex={handleStepChange}
    //         enableMouseEvents className="carousel"
    //     >
    //         {recursos.map((recurso)=>(
    //             <Card key={recurso.key} className='cardSource1'>
    //                 <CardContent className="contentSource1">
    //                     <IconButton className="buttonContent" onClick={()=>handleOpenElement(recurso.key)}>
    //                         <p>{recurso.name}</p>
    //                         <img src={recurso.imagen} alt={`Logo Atenas de ${recurso.name}`} title=""/>
    //                     </IconButton>
    //                 </CardContent>
    //             </Card>
    //         ))}
    //     </SwipeableViews>
    // const CardsViewsDesktop = 
    //     <Box className="boxSources">
    //         {recursos.map((recurso)=>(
    //             <Card key={recurso.key} className='cardSource1'>
    //                 <CardContent className="contentSource1">
    //                     <IconButton className="buttonContent" href={`/home/resources/${recurso.url}`}>
    //                         <p>{recurso.name}</p>
    //                         <img src={recurso.imagen} alt={`Logo Atenas de ${recurso.name}`} title=""/>
    //                     </IconButton>
    //                 </CardContent>
    //             </Card>
    //         ))}
    //     </Box>
    return(
        <Container className="ContainerContentUser">
            <HeaderComponent/>
            <Container className="containerSources">
                <p className="TitleofContainer">Documentos</p>
                <IconButton onClick={handleOpenElement}>
                    <PostAddRounded/>
                </IconButton>
                <img className="imageFooter" src={footerAtenas} alt="Pie de Pagina Atenas" title=""/>
                <Modal
                    open={openModalContent}
                    onClose={handleCloseElement}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='ModalDocuments'
                >
                    {BoxElements}
                </Modal>
                
            </Container>
        </Container>
    )
}
export default Documents;
