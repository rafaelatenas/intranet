import React, { useEffect } from 'react';
import { Avatar, Box, Button, Card, CardContent, Collapse, Container, Divider, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Tooltip, Typography } from "@mui/material";
import HeaderComponent from "../components/headerComponent";
import './userProfile.css'
import { useState } from "react";
import { DeleteRounded, DownloadRounded, ExpandMoreRounded, FileDownloadRounded, FolderRounded, InsertDriveFileRounded, OpenInNewRounded, StarBorder } from "@mui/icons-material";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import AtenasLogo from '../../landing/images/comprimido/ats_logo.png'


export default function Profile(){
    const cedula=sessionStorage.getItem('cedula')
    const token=sessionStorage.getItem('token')
    const MySwal = withReactContent(Swal)
    const toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    });

    const [opena, setopen]=useState(false)
    
    const handleDocuments =()=>{
        setopen(!opena)
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        const PeticionUsuario = async () => {
        try {
            await axios.get(process.env.REACT_APP_API_ENDPOINT + `ListarEmpleadosCedula/${cedula}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            })
            .then(response => {
            if (response.data.message) {
                toast.fire({
                icon: 'warning',
                title: '' + response.data.message,
                })
            } else {
                setData(response.data.data[0]);
            }
            })
        } catch(error){
            if (error.response.status === 400 || 500) {
            toast.fire({
                icon: 'error',
                title: '' + error.response.data.message,
            })
            }
            console.log(error.response.data.message);
            console.log(error.response.status);
            console.log(error.response.headers);
        }

        }
        PeticionUsuario();
    }, []);
    const UserInformation = 
        <Card className="cardInformation">
            <CardContent className="contentInformation">
                <Typography variant="h6">Nombre:</Typography>
                <Typography variant="body2">{data.Primer_Nombre+' '+data.Segundo_Nombre+' '+data.Primer_Apellido+' '+data.Segundo_Apellido}</Typography>
                <Divider/>
                <Typography variant="h6">Cargo:</Typography>
                <Typography variant="body2">{data.Cargo}</Typography>
                <Divider/>
                <Typography variant="h6">Descripción del Cargo:</Typography>
                <Typography variant="body2">Texto descriptivo correspondiente al cargo del Usuario</Typography>
                <Divider/>
                <Divider/>
                <Typography variant="h6">Fecha de Ingreso:</Typography>
                <Typography variant="body2">{data.Date}</Typography>
                <Divider/>
                <Typography variant="h6">Dirección:</Typography>
                <Typography variant="body2">{data.Departamento}</Typography>
                <Divider/>
                <Typography variant="h6">Supervisor:</Typography>
                <Typography variant="body2">{data.EstatuSupervisado}</Typography>
                <Divider/>
                <Typography variant="h6">Supervisados:</Typography>
                <Typography variant="body2">{data.Supervisados}</Typography>
            </CardContent>
        </Card>;

    const [openItem, setOpenItem]=useState(false)
    const [delette, setDelette]=useState(false)

    const handleItem=(e)=>{
        setOpenItem(!openItem)
    }
    const hanDelete =(e)=>{
        setDelette(!delette)
    }
    const prueba = [
        {id:0, name:'Nombre de Archivo de Prueba Bastante Largo.pdf', child: null, secundaryText:'Ejemplo de texto descriptivo', url:'./abcf32x.pdf'},
        {id:1, name:'Nombre de Carpeta de Prueba Bastante Largo', child: [
                {id:0,name:'Nombre de Archivo de Prueba Bastante Largo.pdf', url:'./abcf32x.pdf'},
                {id:1,name:'Nombre de Archivo de Prueba Bastante Largo.pdf', url:'./abcf32x.pdf'},
            ], secundaryText:'Ejemplo de texto descriptivo', url:null},
        {id:2, name:'Nombre de Archivo de Prueba Bastante Largo.pdf', child: null, secundaryText:'Ejemplo de texto descriptivo' ,url:'./abcf32x.pdf'}
    ]
    const Documents = <Box>
       <List dense={true} className="InLineDocuments">
            {prueba.map((value)=>(
                <ListItem key={value.id}
                    secondaryAction={
                        value.child!=null?
                        <section className="buttonsItems">
                            <Tooltip title='Eliminar'>
                                <Button
                                    onClick={()=>hanDelete()}
                                >
                                    <DeleteRounded/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Expandir Carpeta'>
                                <Button
                                    onClick={()=>handleItem()}
                                >
                                    <ExpandMoreRounded/>
                                </Button>
                            </Tooltip>
                        </section>:
                        <section className="buttonsItems">
                            <Tooltip title='Descargar'>
                                <Button component={Link}
                                    href={value.url}
                                    download={value.name}
                                >
                                    <FileDownloadRounded/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Abrir en Otra Pestaña'>
                                <Button
                                    component={Link}
                                    href="//abcf32x.pdf"
                                    target={'_blank'}
                                >
                                    <OpenInNewRounded/>
                                </Button>
                            </Tooltip>
                            <Tooltip title='Eliminar'>
                                <Button
                                    onClick={()=>hanDelete()}
                                >
                                    <DeleteRounded/>
                                </Button>
                            </Tooltip>
                        </section>
                    }
                >
                <ListItemAvatar>
                    <Avatar>
                        {value.child!=null?<FolderRounded/>:<InsertDriveFileRounded/>}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={value.name}
                    secondary={value.secundaryText}
                />
                {value.child!=null?
                    <Collapse in={openItem} timeout="auto" >
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItem>
                                    <StarBorder/>
                                </ListItem>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                        </List>
                    </Collapse>:''
                }
                </ListItem>
              ))}
        </List>
    </Box>;
    return(
        <Container className="containerProfile">
            <HeaderComponent />
            <Box className="boxPofile">
                <p className="spaceProfile" style={{color:'#616161'}}>Mi espacio <strong style={{color:'#0c5091'}}> Atenas</strong></p>
                <Container className="containerContentProfile">
                    <Box className="containerInformation">
                        {UserInformation}
                        <Button onClick={handleDocuments} 
                            variant="outlined" 
                            endIcon={<DownloadRounded/>}
                            style={{width:'20%',borderRadius:'0.5em',maxWidth:170}}
                        >Descargables</Button>
                        {opena?Documents:''}

                    </Box>
                    {data.Imagen?<img className="photoProfile scale-up-center" src={process.env.REACT_APP_API_URL_IMG+`/foto/${data.Cedula}/${data.Imagen}`} alt={data.Primer_Nombre+''+data.Primer_Apellido} title="" />:<img src={AtenasLogo} alt="Nombre de Usuario" title=""/>}

                    <img className="photoProfile scale-up-center" src={process.env.REACT_APP_API_URL_IMG+`/foto/${data.Cedula}/${data.Imagen}`} alt='user' title=""/>
                </Container>
            </Box>
        </Container>
    )
}