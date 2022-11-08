import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Accordion, AccordionDetails, AccordionSummary, TextField, Tooltip } from '@mui/material';
import { Delete, Edit, ExpandMoreRounded } from '@mui/icons-material';
import { useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

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

export default function ModalElements(params) {
    const token = sessionStorage.getItem('token')
    const {openModal, closemodal,valor} = params
    console.log(valor)
    const [expanded, setExpanded]=useState(false)
    const [ElementExpanded, setElementExpanded]=useState("")
    const [stepActive, setStepActive]=useState(0)
    const [element, setElement]=useState("")
    const [data, setData]=useState([])


    const handleChange = (panel) => {
        setExpanded(!expanded)
        setElementExpanded(panel)
        if (panel === 'panel2') {
            editElement()
        }
    };
    const handleUserInput =(e)=>{
        const {name, value} = e.target;
        setElement(value)
    }
    const createElement = ()=>{
        let  urlString;
        let bodyContent;
        switch (valor) {
            case 'languages':
                urlString='AddIdioma'
                bodyContent = JSON.stringify({
                    "NombreIdioma":element
                });
                break;
            case 'profession':
                urlString='AddProfesion'
                bodyContent = JSON.stringify({
                    "NombreProfesiones":element
                });
                break;
            case 'charge':
                urlString='AddCargo'
                bodyContent = JSON.stringify({
                    "NombreCargo":element
                });
                break;
            case 'area':
                urlString='AddArea'
                bodyContent = JSON.stringify({
                    "NombreArea":element
                });
                break;
            case 'direction':
                urlString='AddDepartamento'
                bodyContent = JSON.stringify({
                    "NombreDepartamento":element
                });
                break;
            default:
                break;
        }
        let headersList = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
        }
        let reqOptions = {
            url: process.env.REACT_APP_API_ENDPOINT+urlString,
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
           
        axios.request(reqOptions)
        .then(response => {
            console.log(response)
          }).catch(error => {
            if (error.response.status === 400 || 500) {
            //   toast.fire({
            //     icon: 'error',
            //     title: '' + error.response.data.message,
            //   })
            }
            console.log(error.response.data.message);
            console.log(error.response.status);
            console.log(error.response.headers);
          })

    }
    const editElement = ()=>{
        let  urlString;
        console.log(valor)
        switch (valor) {
            case 'languages':
                urlString='ListarIdioma'
                break;
            case 'profession':
                urlString='ListarProfesiones'
                break;
            case 'charge':
                urlString='ListarCargo'
            break;
            case 'area':
                urlString='ListarArea'
                break;
            case 'direction':
                urlString='ListarDepartamento'
                break;
            default:

                break;
        }
        let headersList = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
        }
        let reqOptions = {
            url: process.env.REACT_APP_API_ENDPOINT+urlString,
            method: "GET",
            headers: headersList,
        }
           
        axios.request(reqOptions)
        .then(response => {
            setData(response.data.data)
            console.log(response)
          }).catch(error => {
            if (error.response.status === 400 || 500) {
            //   toast.fire({
            //     icon: 'error',
            //     title: '' + error.response.data.message,
            //   })
            }
            console.log(error.response.data.message);
            console.log(error.response.status);
            console.log(error.response.headers);
          })

    }
    const columns = [
        {
          field: 'Descripcion',
          headerName: 'Descripción',
          width: 150,
          editable: false,
          headerAlign:'center',
          align: 'center',
        },
        { field: 'Acciones',
        description: 'This column has a value getter and is not sortable.',
        headerName: 'Acciones',
        headerAlign:'center',
        sortable: false,
        align:'center',
        renderCell: (params) => {
          return[
          <Tooltip title="Editar" arrow placement="bottom">
            <Edit style={{cursor:'pointer'}}/> 
          </Tooltip>
          ,
          <Tooltip title="Eliminar" arrow placement="bottom">
            <Delete style={{cursor:'pointer'}} />
          </Tooltip>
          
          ]
        },
      },
      ]
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
                        <Accordion className="" expanded={ElementExpanded === 'panel1' && expanded===true} onChange={()=>handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Crear Nuevo Elemento</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField id="outlined-multiline-flexible" label="Nuevo Elemento"
                                    value={element} name={'element'}
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <Button onClick={createElement}>Crear</Button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="" expanded={ElementExpanded === 'panel2' && expanded===true} onChange={()=>handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                                <Typography>Listar Elementos</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Box sx={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={data}
                                    density={'dense'}
                                    columns={columns}
                                    getRowId={(row) => row.Id}
                                    // rowsPerPageOptions={[5]}
                                    // disableSelectionOnClick
                                />
                            </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Modal>
        );
    }
