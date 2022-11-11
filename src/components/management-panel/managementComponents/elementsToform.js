import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, TextField, Tooltip } from '@mui/material';
import { Delete, Edit, ExpandMoreRounded } from '@mui/icons-material';
import { useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 650,
    width: '50%',
    height: '60%',
    bgcolor: 'background.paper',
    borderRadius: '1em',
    boxShadow: 24,
    p: 3,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

export default function ModalElements(params) {
    const token = sessionStorage.getItem('token')
    const MySwal = withReactContent(Swal)
    const toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    const { openModal, closemodal, valor, valorCreacion } = params
    console.log(valorCreacion)
    const [element, setElement] = useState("")
    const [description, setDescription] = useState("")
    const [data, setData] = useState([])


    const handleUserInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'Description':
                setDescription(value)
                break;
            case 'element':
                setElement(value)
                break;
            default:
                break;
        }
    }
    const createElement = () => {
        let urlString;
        let bodyContent;
        switch (valor) {
            case 'languages':
                urlString = 'AddIdioma'
                bodyContent = JSON.stringify({
                    "NombreIdioma": element
                });
                break;
            case 'profession':
                urlString = 'AddProfesion'
                bodyContent = JSON.stringify({
                    "NombreProfesiones": element
                });
                break;
            case 'charge':
                urlString = 'AddCargo'
                bodyContent = JSON.stringify({
                    "NombreCargo": element
                });
                break;
            case 'area':
                urlString = 'AddArea'
                bodyContent = JSON.stringify({
                    "NombreArea": element
                });
                break;
            case 'direction':
                urlString = 'AddDepartamento'
                bodyContent = JSON.stringify({
                    "NombreDepartamento": element
                });
                break;
            case 'direction':
                urlString = 'AddPerfil'
                bodyContent = JSON.stringify({
                    "NombrePerfil": element
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
            url: process.env.REACT_APP_API_ENDPOINT + urlString,
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
    const editElement = (e, textCahnge) => {
        console.log(e, textCahnge)
        let urlString;
        let bodyContent;
        switch (valorCreacion) {
            case 'languages':
                urlString = 'AddIdioma'
                bodyContent = { 'NombreIdioma': textCahnge }
                break;
            case 'profession':
                urlString = 'UpdateCargo'
                break;
            case 'charge':
                urlString = 'UpdateCargo'
                break;
            case 'area':
                urlString = 'UpdateArea'
                break;
            case 'direction':
                urlString = 'AddDepartamento'
                break;
            case 'perfil':
                urlString = 'AddPerfil'
                break;
            default:

                break;
        }
        let headersList = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
        let reqOptions = {
            url: process.env.REACT_APP_API_ENDPOINT + urlString,
            method: "POST",
            headers: headersList,
            data: bodyContent
        }
        console.log(bodyContent)
        axios.request(reqOptions)
            .then(response => {
                console.log(response)
                if (response.data.message) {
                    toast.fire({
                        icon: 'warning',
                        title: '' + response.data.message,
                    })
                } else {
                    setElement(response.data.data)
                }
            }).catch(error => {
                if (error.response.status === 400 || 500) {
                    toast.fire({
                        icon: 'error',
                        title: '' + error.response.data.message,
                    })
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
            editable: true,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'Acciones',
            description: 'This column has a value getter and is not sortable.',
            headerName: 'Acciones',
            headerAlign: 'center',
            sortable: false,
            align: 'center',
            renderCell: (params) => {
                return [
                    <Tooltip title="Editar" arrow placement="bottom">
                        <IconButton onClick={() => editElement(valorCreacion, params.row.Descripcion)} style={{ cursor: 'pointer' }}>
                            <Edit />
                        </IconButton>
                    </Tooltip>
                    ,
                    <Tooltip title="Eliminar" arrow placement="bottom">
                        <IconButton style={{ cursor: 'pointer' }}>
                            <Delete />
                        </IconButton>
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
                <Box sx={{ width: '100%', height: '80%', display: 'flex' }}>
                    <div style={{overflow:'visible', display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'space-between',width:'50%', height:valorCreacion === 'charge'?'100%':'60%'}}>
                        <Typography color={'#000000b0'}>Crear Elemento</Typography>
                        <TextField sx={{width:'80%', overflow:'visible'}} id="outlined-multiline-flexible" label="Nuevo Elemento"
                            value={element} name={'element'}
                            onChange={(e) => handleUserInput(e)}
                        />
                        {valorCreacion === 'charge'?<TextField sx={{width:'80%', overflow:'visible'}}
                            id="outlined-textarea"
                            label="Descripción del Cargo"
                            placeholder="Placeholder"
                            multiline
                            name="Description"
                            value={description}
                            rows={4}
                            onChange={(e) => handleUserInput(e)}
                        />:' '}
                        <Button variant='contained' color='success' onClick={createElement}>Crear</Button>
                    </div>

                    <Box sx={{ height: '100%', width: '100%', display:'flex', flexDirection:'column',alignItems:'center'}}>
                    <Typography color={'#000000b0'}>Editar Elementos</Typography>
                        <DataGrid
                            rows={valor}
                            density={'compact'}
                            columns={columns}
                            getRowId={(row) => row.Id}
                            // rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                        />
                    </Box>

                    {/* <Accordion className="" expanded={ElementExpanded === 'panel1' && expanded===true} onChange={()=>handleChange('panel1')}>
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
                            <Box sx={{ height: '100%', width: '100%' }}>
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
                        </Accordion> */}
                </Box>
            </Box>
        </Modal>
    );
}
