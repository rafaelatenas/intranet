import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, ButtonGroup, Card, CardContent, Collapse, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Icon, IconButton, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Menu, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from '../../components/headerComponent'
import './documents.css'
import { CheckRounded, CloseRounded, ConstructionOutlined, DeleteRounded, DriveFolderUploadRounded, EditRounded, ExpandMoreRounded, FileDownloadDoneRounded, FileDownloadRounded, FolderRounded, InsertDriveFileRounded, MoreVertRounded, OpenInNewRounded, PostAddRounded, PreviewRounded, StarBorder, UploadFileRounded, VerticalSplitRounded, ViewHeadlineOutlined, ViewModuleRounded } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
/* SVG Documents */
import file from '../../../landing/icon/file.svg'
import filePDF from '../../../landing/icon/file-pdf.svg'
import fileExcel from '../../../landing/icon/file-excel.svg'
import filePowerPoint from '../../../landing/icon/file-powerpoint.svg'

function Documents(){

    const [openModalContent, setOpenModalContent] = useState(false);
    const [documents, setDocuments] = useState([{name:'', url:''}]);
    const [documentsT, setDocumentsT] = useState([])
    const [election, setElection] =useState('');
    const [disabled, setDisabled]=useState(true)
    const [url, setUrl] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false)
    const [distribution, setDistribution]=useState(false)
    const [delette, setDelette]=useState(false)
    const [anchorEl, setAnchorEl]=useState(null)
    const widthScreen = window.innerWidth

    const prueba = [
        {id:0, name:'Nombre de Archivo de Prueba Bastante Largo.pdf', child: null, secundaryText:'Ejemplo de texto descriptivo', url:'./abcf32x.pdf'},
        {id:1, name:'Nombre de Carpeta de Prueba Bastante Largo', child: [
                {id:0,name:'Nombre de Archivo de Prueba Bastante Largo.pdf', url:'./abcf32x.pdf'},
                {id:1,name:'Nombre de Archivo de Prueba Bastante Largo.pdf', url:'./abcf32x.pdf'},
            ], secundaryText:'Ejemplo de texto descriptivo', url:null},
        {id:2, name:'Nombre de Archivo de Prueba Bastante Largo.pdf', child: null, secundaryText:'Ejemplo de texto descriptivo' ,url:'./abcf32x.pdf'}
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
    
    const handleElection = (event) => {
        console.log(event.target.value)
        setElection(event.target.value);
        setDisabled(!disabled)
    }
    const handleDocuments = (e) =>{
        console.log(e)
        if (name==='') {
            setError(true)
        }
        switch (e.length > 1) {
            case true:
                setDocumentsT(Object.values(e))
                break;
            case false:
                setDocumentsT(e)
                setUrl(window.URL.createObjectURL(e[0]))
                break;
            default:
                break;
        }
    }
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const handlDirectDocument =(e)=>{
        console.log(e)
        setUrl(window.URL.createObjectURL(e))
    }
    const handleName = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };
    const handleDistribution=()=>{
        setDistribution(!distribution)
    }
    const handleRedirect = (panel) => (event, isExpanded) =>  {
        console.log(panel)
        setUrl(window.URL.createObjectURL(panel))
    };
    const hanDelete =(e)=>{
        setDelette(!delette)
    }
    const handleClick = (event,id) => {
        console.log(id)
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

    const BoxElements = 
    <Container className="ContainerElements">
        <h2>Panel de Gestión de Documentos</h2>
        <Box className="Elements">
            <Box className="BoxElements">
                <FormControl className="FormControlCreate">
                    <FormLabel style={{gridColumn:'1/3'}}>¿Desea subir un Documento o carpeta de Documentos?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={election} onChange={handleElection} style={{gridColumn:'1/2'}}
                    >
                        <FormControlLabel value="Carpeta de Documentos" control={<Radio/>} label="Carpeta de Documentos" />
                        <FormControlLabel value="Documento" control={<Radio/>} label="Documento" />
                    </RadioGroup>
                    <TextField style={{overflow:'visible'}} disabled={election==='Documento'?true:false} inputProps={{ maxLength: 24 }}label="Nombre de la Carpeta" name="name" value={name} onChange={handleName} variant="outlined"/>
                    <TextField style={{overflow:'visible'}} multiline disabled={election!==''?false:true} inputProps={{ maxLength: 250 }}label="Descripción  del Contenido" name="description" value={description} onChange={handleName} variant="outlined"/>
                </FormControl>

                <section className="boxButtons">
                    <Tooltip title={election!=='Documento'?'Cargar Archivos':'Cargar Archivo'}>
                        <Button variant="contained" component="label" disabled={election===''?true:false}>
                            {election!=='Documento'?<DriveFolderUploadRounded/>:<UploadFileRounded/>}
                            {election!=='Documento'?
                                <input type="file" hidden accept=".doc, .pdf, .ptt, .xml .docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple onChange={(e)=>handleDocuments(e.target.files)}/>:
                                <input type="file" hidden accept=".doc, .pdf, .ptt, .xml .docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e)=>handleDocuments(e.target.files)}/>
                            }
                        </Button>
                    </Tooltip>
                    <Tooltip title={election!=='Documento'?'Subir Archivos':'Subir Archivo'}>
                        <Button variant="contained" component="label" disabled={election!=='Documento'? documentsT.length>=1 && name!==''?false:true :documentsT.length>=1?false:true}>
                            <CheckRounded/>
                        </Button>
                    </Tooltip>
                </section>
            </Box>
        </Box>
    </Container>;
    /* Contenedor y Vista de Documentos */
    const GridDocuments = <Box className="boxDocuments GridDocuments">
        {prueba.map((value)=>(
            <div className="itemGrid">
                <Box className="item">
                    
                    <Tooltip title="Opciones">
                        <IconButton onClick={(e)=>handleClick(e, value.id)}><MoreVertRounded/></IconButton>
                    </Tooltip>
                    <Box className="documentEmbed">
                        <IconButton>
                            {value.child!=null?<FolderRounded style={{fontSize:'5em', color:'#000'}}/>:<InsertDriveFileRounded style={{fontSize:'5em', color:'#000'}}/>}
                        </IconButton>
                        <p>{value.secundaryText}</p>
                    </Box>
                </Box>
            </div>
        ))}
        <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                // top:pp,
                                // left:pp,
                              },
                              '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 10,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                        {/* {value.child!=null?'Descargar Archivo':'Descargar Todo'} */}
                        <MenuItem>Descargar</MenuItem>
                        <MenuItem>Abrir</MenuItem>
                        <MenuItem onClick={()=>hanDelete()}>Eliminar</MenuItem>
                    </Menu>
        {/* <div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div><div className="itemGrid">
            <Box className="item">
                <Tooltip title="Opciones">
                    <IconButton onClick={()=>handleOptions()}><MoreVertRounded/></IconButton>
                </Tooltip>
                <Box className="documentEmbed">

                </Box>
            </Box>
        </div> */}
    </Box>
    const [openItem, setOpenItem]=useState(false)
    const handleItem=(e)=>{
        setOpenItem(!openItem)
    }
    const InLineDocuments = <Box className="boxDocuments boxInLine">
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
        {/* <Box className="InLineDocuments">
             
            <div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div>
            <div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div><div className="itemDocument">
                <Button className="buttonFile"><img src={filePDF} alt='pdf' title=""/><p>Nombre de Archivo de Prueba Bastante Largo.pdf</p></Button>
                <section className="buttonsItems">
                    <Tooltip title='Descargar'>
                        <Button component={Link}
                            href="./abcf32x.pdf"
                            download="How-to-download-file.pdf"
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
            </div>
        </Box> */}
        {widthScreen<500?'':<Box className="PreviewDocuments"></Box>}
    </Box>

    return(
        <Container className="ContainerContentUser">
            <HeaderComponent/>
            <Container className="containerSources">
                <p className="TitleofContainer">Documentos</p>
                {widthScreen<500?'':<IconButton onClick={handleDistribution} sx={{position:'fixed', top:'15%', left:'95%'}}>
                    {distribution?<ViewModuleRounded fontSize="large"/>:<VerticalSplitRounded fontSize="large"/>}
                </IconButton>}
                {widthScreen<500?'':
                    <IconButton onClick={handleOpenElement} sx={{position:'fixed', top:'15%', left:'90%'}}>
                        <PostAddRounded fontSize="large"/>
                    </IconButton>
                }
                <Dialog
                open={delette}
                onClose={hanDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    ¿Está seguro de realizar esta acción?
                    <IconButton onClick={()=>hanDelete()}>
                        <CloseRounded/>
                    </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </Typography>
                        <Typography gutterBottom id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={hanDelete}>Eliminar</Button>
                    </DialogActions>
                </Dialog>
                <Modal
                    open={openModalContent}
                    onClose={handleCloseElement}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='ModalDocuments'
                >
                    {BoxElements}
                </Modal>
                <Box className="containerDocuments">
                    {distribution?GridDocuments:InLineDocuments}
                    {/* <Box className="boxDocuments">
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                        <div style={{width:'100%',height:'100%', background:'yellow', minHeight:250, minWidth:100}}></div>
                    </Box> */}
                </Box>
            </Container>
        </Container>
    )
}
export default Documents;

const styles = makeStyles(() => ({
    boxDocuments:{

    }
}))
