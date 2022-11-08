import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, TextField, Tooltip } from '@mui/material';
import { CheckRounded, CloseRounded, ExpandMoreRounded, PreviewRounded } from '@mui/icons-material';
import './ateniense.css'
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 920,
    maxHeight:800,
    width:'60%',
    height:'90%',
    bgcolor: 'background.paper',
    borderRadius:'1em',
    boxShadow: 24,
    p: 3,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'column'
};

export default function ModalAteniense(props){

    const [photo, setPhoto]=useState([]);
    const [namephoto, setNamephoto]=useState('');
    const [expanded, setExpanded]=useState(false);
    const [elementExpanded, setElementExpanded]=useState('')
    const [stepActive, setStepActive]=useState(0)
    const [openPhoto, setOpenPhoto]=useState(false)
    const [url, setUrl]=useState()

    const handleChange = (panel) => {
        setElementExpanded(panel)
        setExpanded(!expanded)
    };
    const handleInputs=(e)=>{
        const {name, value, files}= e.target
        if (name !== 'photo') {
            setPhoto(value)
        }
        // setState({[name]:files[0]})
        setUrl(window.URL.createObjectURL(files[0]))
    }
    const handleShowPhoto =()=>{
        setOpenPhoto(!openPhoto)
    }
    const sendNews =()=>{
        console.log(1)
    }
    const {openModal, closemodal}=props
        return (
            <Modal
                open={openModal}
                onClose={closemodal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Panel Administrativo <strong style={{color:"#0c508f"}}>El Ateniense</strong>
                    </Typography>
                    <Box sx={{width:'100%', height:'80%'}}>
                        <Accordion className="" expanded={elementExpanded === 'panel1' && expanded===true} onChange={()=>handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Subir Nueva Noticia</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{display:'inline-flex',justifyContent: 'space-around',width:'100%', overflow:'visible'}}>
                                    <Button variant="contained" component="label">
                                        Nueva Noticia
                                        <input type="file" accept='image/png, image/jpeg' name='photo' hidden onChange={(e)=>handleInputs(e)}/>
                                    </Button>
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Nombre"
                                        value={namephoto} name={'namephoto'} onChange={(e)=>handleInputs(e)}
                                    />
                                    <section className='areaButtons'>
                                        <Button onClick={()=>handleShowPhoto()} disabled={photo.length===0?true:false}>
                                            <Tooltip title='Previsualizar Noticia'>
                                                <PreviewRounded/>
                                            </Tooltip>    
                                        </Button>
                                        <Button onClick={()=>sendNews()} disabled={photo.length===0?true:false}>
                                            <Tooltip title='Enviar Noticia'>
                                                <CheckRounded/>
                                            </Tooltip>
                                        </Button>
                                    </section>
                                    
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="" expanded={elementExpanded === 'panel2' && expanded===true} onChange={()=>handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Listar Noticias</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                <Modal
                    open={openPhoto}
                    onClose={handleShowPhoto}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box onClick={handleShowPhoto} sx={style} style={{width:'55%',height:'95%', flexDirection:'row-reverse', alignItems:'center'}}>
                        <IconButton sx={{position:'absolute', top:'5%', left:'90%'}}>
                            <CloseRounded/>
                        </IconButton>
                        <img src={url} alt='' title=''/>
                    </Box>
                </Modal>
                </Box>
                
            </Modal>
        );
    }
