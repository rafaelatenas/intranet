import {Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, IconButton, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Menu, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from '../../components/headerComponent'
import { CheckRounded, DeleteRounded, DriveFolderUploadRounded, ExpandMoreRounded, FileDownloadRounded, FolderRounded, InsertDriveFileRounded, MoreVertRounded, OpenInNewRounded, PostAddRounded, UploadFileRounded, VerticalSplitRounded, ViewModuleRounded } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

function Documents(){

    const styles=StyleComponent()

    const [openModalContent, setOpenModalContent] = useState(false);
    const [documentsT, setDocumentsT] = useState([])
    const [election, setElection] =useState('');
    const [disabled, setDisabled]=useState(true)
    const [url, setUrl] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const [distribution, setDistribution]=useState(false)
    const [delette, setDelette]=useState(false)
    const [anchorEl, setAnchorEl]=useState(null)
    const [Data, setDATA]=useState()
    const [abrir, setAbrir]=useState(false)


    const prueba = [
        {id:0, name:'Nombre de Archivo.pdf', child: null, secundaryText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', url:'./abcf32x.pdf'},
        {id:1, name:'Nombre de Carpeta', child: [
                {id:0,name:'Nombre de Archivo.pdf', url:'./abcf32x.pdf'},
                {id:1,name:'Nombre de Archivo.pdf', url:'./abcf32x.pdf'},
            ], secundaryText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', url:null},
        {id:2, name:'Nombre de Archivo.pdf', child: null, secundaryText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,url:'./abcf32x.pdf'}
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
    const [expand, setExpand]=useState(false)
    const [id, setId]=useState()
    const handleExpand =(item)=>{
        setId(item)
        setExpand(!expand)
    }
    const hande=()=>{
        setAbrir(!abrir)
        if(abrir!==false){
            setDATA("https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf")
        }
    }
    const BoxElements = 
    <Container className={styles.ContainerElements}>
        <h2>Panel de Gestión de Documentos</h2>
        <Box className={styles.Elements}>
            <Box className={styles.BoxElements}>
                <FormControl className={styles.FormControlCreate}>
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

                <section className={styles.boxButtons}>
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
    const GridDocuments = <Box className={`${styles.boxDocuments} ${styles.GridDocuments}`}>
        {(prueba.concat(prueba)).map((value)=>(console.log(value.child),
            value.child!==null?
                <Box className={styles.item}>
                    <Card className={styles.item} sx={{minHeight:275}} key={value.id}>
                        <CardHeader
                            sx={{p:0}}
                            action={
                                <Tooltip title="Opciones">
                                    <IconButton onClick={(e)=>handleClick(e, value.id)}><MoreVertRounded/></IconButton>
                                </Tooltip>
                            }
                        />
                        <CardContent className={styles.ContentItem}>
                            <IconButton sx={{p:0}} >
                                    {value.child!=null?<FolderRounded style={{fontSize:'5em', color:'#000'}}/>:<InsertDriveFileRounded style={{fontSize:'5em', color:'#000'}}/>}
                            </IconButton>
                            <p style={{margin:0, fontSize:10}}>{value.name}</p>
                            <p style={{margin:0, fontSize:10}}>{value.secundaryText}</p>
                        </CardContent>
                        <CardActions sx={{p:0}}>
                            <IconButton onClick={(()=>handleExpand(value.id))}>
                                <ExpandMoreRounded/>
                            </IconButton>
                        </CardActions>
                    </Card>
                    <Collapse in={expand && value.id=== id} timeout="auto" unmountOnExit>
                        <CardContent>
                            <List dense={true} className={styles.InLineDocuments}>
                                <ListItemButton  onClick={()=>hande()}>
                                    <ListItemText
                                        primary={value.child.name}
                                    />
                                </ListItemButton>
                            </List>
                        </CardContent>
                    </Collapse>
                </Box>
            :
            <Card className={styles.item1}  key={value.id}>
            <CardHeader
                sx={{p:0}}
                action={
                    <Tooltip title="Opciones">
                        <IconButton onClick={(e)=>handleClick(e, value.id)}><MoreVertRounded/></IconButton>
                    </Tooltip>
                }
            />
            <CardContent className={styles.ContentItem}>
                <IconButton sx={{p:0}} >
                        {value.child!=null?<FolderRounded style={{fontSize:'5em', color:'#000'}}/>:<InsertDriveFileRounded style={{fontSize:'5em', color:'#000'}}/>}
                </IconButton>
                <p style={{margin:0, fontSize:10}}>{value.name}</p>
                <p style={{margin:0, fontSize:10}}>{value.secundaryText}</p>
            </CardContent>
            </Card>
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
            <MenuItem>Descargar</MenuItem>
            <MenuItem>Abrir</MenuItem>
            <MenuItem onClick={()=>hanDelete()}>Eliminar</MenuItem>
        </Menu>
        <Modal
            open={abrir}
            onClose={hande}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.ModalDocuments}
        >
            <Container sx={{width:'60%', height:'100%', boxSizing:'unset'}}>
                <Box className={styles.PreviewDocuments}>
                    <embed src={Data} type="application/pdf" width="100%" height="100%" />
                </Box>
            </Container>
        </Modal>
    </Box>
    const [openItem, setOpenItem]=useState(false)
    const handleItem=()=>{
        setOpenItem(!openItem)
    }
    
    const InLineDocuments = <Box className={`${styles.boxDocuments} ${styles.boxInLine}`}>
        <List dense={true} className={styles.InLineDocuments}>
            {prueba.map((value)=>(
                <ListItem key={value.id}
                    style={{display:'flex', flexDirection:'column'}}
                >
                    <Box style={{width:'100%', display:'inline-flex'}}>
                    {
                        value.child!=null?
                        <ListItemButton onClick={()=>handleItem()}>
                            <ListItemAvatar>
                                <Avatar>
                                    {value.child!=null?<FolderRounded/>:<InsertDriveFileRounded/>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={value.name}
                            />
                        </ListItemButton>
                    :
                        <ListItemButton  onClick={()=>setDATA("https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf")}>
                            <ListItemAvatar>
                                <Avatar>
                                    {value.child!=null?<FolderRounded/>:<InsertDriveFileRounded/>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={value.name}
                            />
                        </ListItemButton>
                    }
                        {
                        value.child!=null?
                        <section className={styles.buttonsItems}>
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
                                    <ExpandMoreRounded style={openItem?{transform:'rotate(180deg)'}:{transform:'rotate(0deg)'}}/>
                                </Button>
                            </Tooltip>
                        </section>:
                        <section className={styles.buttonsItems}>
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
                    </Box>
                    <Box className={styles.BoxItemsFile}>
                        {value.child!=null?
                            <Collapse in={openItem} timeout="auto" >
                                <List dense={true} component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem
                                            secondaryAction={
                                                <section className={styles.buttonsItems}>
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
                                                    <InsertDriveFileRounded/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Elemento" />
                                        </ListItem>
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem
                                            secondaryAction={
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
                                                    <InsertDriveFileRounded/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Elemento" />
                                        </ListItem>
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem
                                            secondaryAction={
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
                                                    <InsertDriveFileRounded/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Elemento" />
                                        </ListItem>
                                        
                                    </ListItemButton>
                                </List>
                            </Collapse>:''
                        }
                    </Box>
                </ListItem>
              ))}
        </List>
        
        <Box className={styles.PreviewDocuments}>
            <embed src={Data} type="application/pdf" width="100%" height="100%" />
        </Box>
    </Box>

    return(
        <Container className={styles.ContainerContentUser}>
            <HeaderComponent/>
            <Container className={styles.containerSources}>
                <div className={styles.containerOfTitle}>
                    <p className={styles.TitleofContainer}>Documentos</p>
                </div>
                
                <IconButton className={styles.distribution} onClick={handleDistribution} >
                    {distribution?<ViewModuleRounded fontSize="large"/>:<VerticalSplitRounded fontSize="large"/>}
                </IconButton>
                <IconButton className={styles.PostAdd} onClick={handleOpenElement}>
                    <PostAddRounded fontSize="large"/>
                </IconButton>
                <Box className={styles.containerDocuments}>
                    {distribution?GridDocuments:InLineDocuments}
                </Box>

                {/* Modales Descriptivos de Acciones de Administrador */}
                <Dialog
                    open={delette}
                    onClose={hanDelete}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        ¿Está seguro de realizar esta acción?
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
                        <Button onClick={hanDelete}>Cancelar</Button>
                        <Button onClick={hanDelete}>Eliminar</Button>
                    </DialogActions>
                </Dialog>
                <Modal
                    open={openModalContent}
                    onClose={handleCloseElement}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className={styles.ModalDocuments}
                >
                    {BoxElements}
                </Modal>
                
            </Container>
        </Container>
    )
}
export default Documents;

const StyleComponent=makeStyles(()=>({
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
    
    /*Contenedor de documentos e Items Generales de Documentos*/
    containerDocuments:{
        width: '100%',
        height: '100%',
        gridColumn: '1/4',
        gridRow: '2/4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxDocuments:{
        width: '95%',
        height: '100%',
    },
    boxInLine:{
        display: 'flex',
        alignitems: 'stretch',
    },
    InLineDocuments:{
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    },
    BoxItemsFile:{
        width:'100%',
    },
    buttonsItems:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 190,
        justifyContent: 'space-around',
    },
    ContainerElements:{
        position: 'absolute',
        background: '#fff',
        padding: '0 !important',
        display: 'flex !important',
        alignItems: 'center',
        zIndex: 1300,
    },
    distribution:{
        position:'fixed !important',
        top:'15%',
        left:'95%'
    },
    PostAdd:{
        position:'fixed !important',
        top:'15%',
        left:'90%',
    },
    '@media screen and (orientation:portrait)':{
        TitleofContainer:{
            border: '1px solid #61616161',
            width: 'auto',
            padding: '2.5%',
            height: 'auto',
            margin: '1%.5%',
            borderRadius: '0.5em',
            color: '#616161',
        },
        PreviewDocuments:{
            display:'none !important'
        },
        PostAdd:{
            display:'none !important'
        },
        distribution:{
            display:'none !important'
        }
    },
    '@media screen and (orientation:landscape) and (min-width:1024px)':{
        containerSources:{
            padding: '0 !important',
            display: 'grid !important',
            gridTemplateColumns: '15% 50% 35%',
            gridTemplateRows: '10% 70% 20%',
            alignItems: 'center',
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
            width: '70%',
            minWidth: 125,
            margin: '0 !important',
            textAlign: 'center',
            position:'relative',
            left:'15%'
        },
        /* Herramientas del Adminsitrador */
        ModalDocuments:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        ContainerElements:{
            maxWidth: '600px !important',
            height: '65% !important',
            maxHeight: 400,
            justifyContent: 'space-evenly',
            borderRadius: '2.5em',
            flexDirection: 'column',
        },
        Elements:{
            width: '95%',
            height: '85%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        BoxElements:{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
        },
        boxButtons:{
            width: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            maxWidth: 400,
        },
        PreviewElements:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        create:{
            width: '95%',
            margin: '1% 0',
        },
        edit:{
            width: '95%',
            margin: '1% 0',
        },
        AccordionDetailsCreate:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        FormControlCreate:{
            display: 'grid !important',
            gridTemplateColumns: '50% 50%',
            gridTemplateRows: '1fr 40% 40%',
            width: '90%',
            height: '75%',
            justifyItems: 'center',
            alignItems: 'center',
        },
        /*Estilos de presentación de Archivos*/
        GridDocuments:{
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 24%))',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        item:{
            width: '95%',
            height: 'auto',
            minWidth: 250,
            overflow:'visible !important'
        },
        item1:{
            width: '95%',
            height: '50%',
            minWidth: 250,
            minHeight:275,
            overflow:'visible !important'
        },
        ContentItem:{
            padding:'0 16px !important',
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: 'auto'
        },
        PreviewDocuments:{
            width: '100%',
            height: '100%',
        }
    }
}))