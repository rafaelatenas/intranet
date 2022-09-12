import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, TextField } from '@mui/material';
import { CloseRounded, ExpandMoreRounded } from '@mui/icons-material';
import './ateniense.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 920,
    maxHeight:800,
    width:'80%',
    height:'100%',
    bgcolor: 'background.paper',
    borderRadius:'1em',
    boxShadow: 24,
    p: 3,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'column'
};

export default class ModalAteniense extends React.Component {
    constructor(props){
        super(props);
        this.state={
            element:[],
            expanded:false,
            ElementExpanded:'',
            stepActive:0,
            url:'',
            openPhoto:false
        }
    }
    
    handleChange = (panel) => {
        this.setState({ElementExpanded:panel,expanded:!this.state.expanded });
    };
    handleDocuments=(e)=>{
        this.setState({element:e})
        this.setState({url:window.URL.createObjectURL(e)})
    }
    handleShowPhoto =()=>{
        this.setState({openPhoto:!this.state.openPhoto})
    }
    render(){console.log(this.state.element.name)
        const {openModal, closemodal}=this.props
        return (
            <Modal
                open={openModal}
                onClose={closemodal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Panel Administrativo del Ateniense
                    </Typography>
                    <Box sx={{width:'100%', height:'80%'}}>
                        <Accordion className="" expanded={this.state.ElementExpanded === 'panel1' && this.state.expanded===true} onChange={()=>this.handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Subir Nueva Noticia</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Button variant="contained" component="label">
                                    Subir Imagen
                                    <input type="file" hidden onChange={(e)=>this.handleDocuments(e.target.files[0])}/>
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="" expanded={this.state.ElementExpanded === 'panel2' && this.state.expanded===true} onChange={()=>this.handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Listar Noticias</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="" expanded={this.state.ElementExpanded === 'panel3' && this.state.expanded===true} onChange={()=>this.handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel3d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Vista Previas de Noticias</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Button onClick={()=>this.handleShowPhoto()} className='buttonNews'>
                                    <img src={this.state.url} alt='' title=''/>
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                <Modal
                    open={this.state.openPhoto}
                    onClose={this.handleShowPhoto}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box onClick={this.handleShowPhoto} sx={style} style={{width:'55%', flexDirection:'row-reverse', alignItems:'flex-start'}}>
                        <IconButton>
                            <CloseRounded/>
                        </IconButton>
                        <img src={this.state.url} alt='' title=''/>
                    </Box>
                </Modal>
                </Box>
                
            </Modal>
        );
    }
}