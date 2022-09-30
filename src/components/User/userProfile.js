import { Avatar, Box, Button, Card, CardContent, Collapse, Container, Divider, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Tooltip, Typography } from "@mui/material";
import HeaderComponent from "../components/headerComponent";
import './userProfile.css'
import user from '../../landing/images/user.png'
import { useState } from "react";
import { DeleteRounded, DownloadRounded, ExpandMoreRounded, FileDownloadRounded, FolderRounded, InsertDriveFileRounded, OpenInNewRounded, StarBorder } from "@mui/icons-material";


export default function Profile(){
    const [opena, setopen]=useState(false)
    
    const handleDocuments =()=>{
        setopen(!opena)
    }
    const UserInformation = 
        <Card className="cardInformation">
            <CardContent className="contentInformation">
                <Typography variant="h6">Nombre:</Typography>
                <Typography variant="body2">Nombre del Usuario Bastante Largo</Typography>
                <Divider/>
                <Typography variant="h6">Cargo:</Typography>
                <Typography variant="body2">Cargo del Usuario</Typography>
                <Divider/>
                <Typography variant="h6">Fecha de Ingreso:</Typography>
                <Typography variant="body2">DD/MM/AAAA</Typography>
                <Divider/>
                <Typography variant="h6">Fecha de Ingreso:</Typography>
                <Typography variant="body2">DD/MM/AAAA</Typography>
                <Divider/>
                <Typography variant="h6">Descripción del Cargo:</Typography>
                <Typography variant="body2">Texto descriptivo correspondiente al cargo del Usuario</Typography>
                <Divider/>
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
                    
                    <img className="photoProfile scale-up-center" src={user} alt='user' title=""/>
                </Container>
            </Box>
        </Container>
    )
}