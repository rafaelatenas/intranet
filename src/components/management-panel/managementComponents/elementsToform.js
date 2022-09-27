import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Accordion, AccordionDetails, AccordionSummary, TextField } from '@mui/material';
import { ExpandMoreRounded } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 650,
  width:'40%',
  height:'60%',
  bgcolor: 'background.paper',
  borderRadius:'1em',
  boxShadow: 24,
  p: 3,
  display:'flex',
  alignItems:'center',
  flexDirection:'column'
};

export default class ModalElements extends React.Component {
    constructor(props){
        super(props);
        this.state={
            expanded:false,
            ElementExpanded:'',
            stepActive:0,
            element:''
        }
    }
    handleChange = (panel) => {
        this.setState({ElementExpanded:panel,expanded:!this.state.expanded });
    };
    handleUserInput =(e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value})
    }
    render(){
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
                        Gestor de Elementos Condicionales
                    </Typography>
                    <Box sx={{width:'100%', height:'80%'}}>
                        <Accordion className="" expanded={this.state.ElementExpanded === 'panel1' && this.state.expanded===true} onChange={()=>this.handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Crear Nuevo Elemento</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField id="outlined-multiline-flexible" label="Nuevo Elemento"
                                    value={this.state.firstName} name={'element'}
                                    onChange={(e)=>this.handleUserInput(e)}
                                />
                                <Button>Crear</Button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="" expanded={this.state.ElementExpanded === 'panel2' && this.state.expanded===true} onChange={()=>this.handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Listar Elementos</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Modal>
        );
    }
}