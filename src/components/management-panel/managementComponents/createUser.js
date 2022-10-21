import React, { useState } from "react";
import { Box, Button, Container, IconButton, MenuItem, Modal, Paper, Step, StepContent, StepLabel, Stepper, TextField, Tooltip, Typography } from "@mui/material";
import './createUser.css'
import { AccountCircleRounded, AddAPhotoRounded, AddRounded, PhotoCameraRounded } from "@mui/icons-material";
import ModalElements from "./elementsToform";
import { makeStyles } from "@mui/styles";

export default function CreateUser (props) {
    const style = styles()
    const [console, setConsole]=useState({
        firstName:"",
        secondName:"",
        lastName:"",
        secondLastName:"",
        CI:"",
        birthDay:"",
        specialDay:"",
        shirtSize:"",
        avatar:[],
        image:[],
        residence:"",
        cell:"",
        email:"",
        charge:"",
        area:"",
        direction:"",
        joining:"",
        profession:"",
        officePhone:"",
        extension:"",
        supervisor:"",
        supervised:"",
        special: [
            {
              value: '0',
              name: 'Día de la Madre',
            },
            {
              value: '1',
              name: 'Día del Padre',
            },
            
        ],
        sizes:[
            {
                value: '0',
                name: 'XS',
            },
            {
                value: '1',
                name: 'S',
            },
            {
                value: '2',
                name: 'M',
            },
            {
                value: '3',
                name: 'L',
            },
            {
                value: '4',
                name: 'XL',
            },
            {
                value: '5',
                name: 'XXL',
            },
        ],
    })
    const [openModal, setOpenModal]=useState(false)
    const [openModalPhoto, setOpenModalPhoto]=useState(false)
    const [stepActive, setStepActive]=useState(0)
    const handleUserInput =(e)=>{
        const {name, value, files} = e.target;
        if (files != null) {
            setConsole({[name]:files[0]})
        }
            setConsole({[name]:value})
    }
    const handleNew=(e)=>{
        console.log(e)
        setOpenModal(!openModal)
    }
    const handleChangeselect = (event) => {
        setConsole({specialDay:event.target.value})
        // setState({specialDay:event.target.value});
    };
    const handleNext =()=>{
        setStepActive(stepActive+1)
    }
    const handleBack =()=>{
        setStepActive(stepActive-1)
    }
    const handleContinue=()=>{
        setStepActive(0)
    }
    const handleRegister=()=>{
        setOpenModalPhoto(!openModalPhoto)
        setStepActive(stepActive+1)
    }
    const handleModalPhotos=()=>{
        setOpenModalPhoto(!openModalPhoto)
    }
    return(
        <Box width={'100%'}>
            <Stepper width={'100%'} orientation="vertical" activeStep={stepActive} >
                <Step>
                    <StepLabel>Datos de Usuario</StepLabel>
                    <StepContent>
                        <Box className={style.boxStep} style={{height:'85%'}}>
                            <Box className={style.boxField}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Primer Nombre"
                                    value={console.firstName} name={'firstName'}
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Segundo Nombre"
                                    value={console.secondName} name={'secondName'}
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Primer Apellido"
                                    value={console.lastName} name={'lastName'}
                                    onChange={(e)=>handleUserInput(e)}
                                />
                            </Box>
                            <Box className={style.boxField}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Segundo Apellido"
                                    value={console.secondLastName} name={'secondLastName'}
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="CI"
                                    value={console.CI} name={'CI'}
                                    onChange={(e)=>handleUserInput(e)}
                                    type='number'
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Fecha de Nacimiento"
                                    value={console.birthDay} name={'birthDay'}
                                    onChange={(e)=>handleUserInput(e)}
                                    type='date'
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Box>
                            <Box className={style.boxField}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Profesión"
                                    value={console.profession} name={'profession'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                >   
                                    <Button startIcon={<AddRounded/>} onClick={(e)=>handleNew(e)}style={{textTransform:'capitalize'}}>Agregar Profesión</Button>
                                    {console.sizes.map((size)=>(
                                        <MenuItem key={size.value} value={size.name}>
                                            {size.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Talla de Camisa o Chaqueta"
                                    value={console.shirtSize} name={'shirtSize'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                    >   
                                        <Button startIcon={<AddRounded/>} onClick={handleNew}style={{textTransform:'capitalize'}}>Agregar Talla</Button>
                                        {console.sizes.map((size)=>(
                                            <MenuItem key={size.value} value={size.name}>
                                                {size.name}
                                            </MenuItem>
                                        ))}
                                </TextField>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Día Especial"
                                    value={console.specialDay} name={'specialDay'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                >
                                    <Button startIcon={<AddRounded/>} onClick={handleNew}style={{textTransform:'capitalize'}}>Agregar Día Especial</Button>
                                    {console.special.map((day)=>(
                                        <MenuItem key={day.value} value={day.name}>
                                            {day.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
                            <Button onClick={handleNext}>Siguiente</Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Contacto y Residencia</StepLabel>
                    <StepContent className="content">
                        <Box className={style.boxStep}>
                            <Box className={style.boxField}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Residencia"
                                    value={console.residence} name={'residence'}
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Celular"
                                    value={console.cell} name={'cell'}
                                    type='tel' 
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Correo"
                                    value={console.email} name={'email'}
                                    type='email'
                                    onChange={(e)=>handleUserInput(e)}
                                />
                            </Box>
                            <Box className={style.boxField} style={{maxWidth:770, minWidth:465}}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Telefono de Oficina"
                                    value={console.officePhone} name={'officePhone'}
                                    style={{minWidth:210}} type='tel'
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Extensión"
                                    value={console.extension} name={'extension'}
                                    style={{minWidth:210}} type='number'
                                    onChange={(e)=>handleUserInput(e)}
                                />
                            </Box>
                        </Box>    
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Button color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Back</Button>
                            {stepActive === 2 ? 
                                <Button onClick={handleNext}>Enviar</Button>
                                :<Button onClick={handleNext}>Siguiente</Button>
                            }
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Datos Atenas</StepLabel>
                    <StepContent>
                        <Box className={style.boxStep}>
                            <Box className={style.boxField}>
                                <TextField className="textField" id="outlined-multiline-flexible" label="Fecha de Ingreso a la Empresa"
                                    value={console.joining} name={'joining'}
                                    InputLabelProps={{ shrink: true }} type='date'
                                    onChange={(e)=>handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Cargo"
                                    value={console.charge} name={'charge'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                >   
                                    <Button startIcon={<AddRounded/>} onClick={handleNew}style={{textTransform:'capitalize'}}>Agregar Profesión</Button>
                                    {console.sizes.map((size)=>(
                                        <MenuItem key={size.value} value={size.name}>
                                            {size.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Área"
                                    value={console.area} name={'area'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                >   
                                    <Button startIcon={<AddRounded/>} onClick={handleNew}style={{textTransform:'capitalize'}}>Agregar Profesión</Button>
                                    {console.sizes.map((size)=>(
                                        <MenuItem key={size.value} value={size.name}>
                                            {size.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                            <Box className={style.boxField}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Dirección"
                                    value={console.direction} name={'direction'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                >   
                                    <Button startIcon={<AddRounded/>} onClick={handleNew}style={{textTransform:'capitalize'}}>Agregar Profesión</Button>
                                    {console.sizes.map((size)=>(
                                        <MenuItem key={size.value} value={size.name}>
                                            {size.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Supervisor"
                                    value={console.supervisor} name={'supervisor'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                >   
                                    <Button startIcon={<AddRounded/>} onClick={handleNew}style={{textTransform:'capitalize'}}>Agregar Profesión</Button>
                                    {console.sizes.map((size)=>(
                                        <MenuItem key={size.value} value={size.name}>
                                            {size.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Supervisado(s)"
                                    value={console.supervised} name={'supervised'}
                                    onChange={(e)=>handleUserInput(e)}
                                    select
                                >   
                                    <Button startIcon={<AddRounded/>} onClick={handleNew}style={{textTransform:'capitalize'}}>Agregar Profesión</Button>
                                    {console.sizes.map((size)=>(
                                        <MenuItem key={size.value} value={size.name}>
                                            {size.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Button color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Back</Button>
                            {stepActive === 2 ? 
                                <Button onClick={handleRegister}>Enviar</Button>
                                :<Button onClick={handleNext}>Siguiente</Button>
                            }
                        </Box>
                    </StepContent>
                </Step>
            </Stepper>
                {stepActive === 3?(
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Se ha realizado el registro con Exito</Typography>
                        <Button onClick={handleContinue} sx={{ mt: 1, mr: 1 }}>
                            {'Registrar un Nuevo Usuario'}
                        </Button>
                    </Paper>
                ):''}
            <ModalElements 
                openModal={openModal}
                closemodal={()=>handleNew()}
            />
            <Modal
                open={openModalPhoto}
                closemodal={()=>handleModalPhotos()}
            >
                <Container className={style.modalPhoto}>
                    <Box className={style.boxField} style={{maxWidth:770, minWidth:465, height:'100%', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
                        <Typography variant="h4" color='#000'>Agregar Fotos de Usuario</Typography>
                        <Typography variant="p" color='#000000b0'>{`Si no posee fotografias de ${console.firstName+' '+console.lastName} puede agregarlas más tarde`}</Typography>
                        <Box sx={{width:'100%', display:'flex', justifyContent:'space-around'}}>
                            <Tooltip title={'Foto de Usuario'}>
                                <Button aria-label="upload picture" component="label" startIcon={<AddAPhotoRounded/>} style={{minWidth:130, width:'10%', border:'solid 1px rgb(196,196,196)'}}>
                                    <input hidden accept="image/png" type="file" 
                                        value={console.image} name={'image'}
                                        onChange={(e)=>handleUserInput(e)} 
                                    />
                                </Button>
                            </Tooltip>
                            <Tooltip title={'Avatar de Usuario'}>
                                <Button aria-label="upload picture" component="label" startIcon={<AccountCircleRounded/>} style={{minWidth:130, width:'10%', border:'solid 1px rgb(196,196,196)'}}>
                                    <input hidden accept="image/png" type="file" 
                                        value={console.avatar} name={'avatar'}
                                        onChange={(e)=>handleUserInput(e)}
                                    />
                                </Button>
                            </Tooltip>
                        </Box>
                            
                        <Button variant="contained" onClick={()=>setOpenModalPhoto(!openModalPhoto)}>Cancelar</Button>
                    </Box>
                </Container>
                
            </Modal>
        </Box>
    )
}
const styles = makeStyles({
    boxStep:{
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    boxField:{
        overflow: 'visible !important',
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'space-around',
        minWidth: 700,
        margin: '1% 0',
    },
    textField:{
        overflow: 'visible !important',
        width: '30%',
        maxWidth:230
    },
    modalPhoto:{
        width: '40% !important',
        height: '50%',
        position: 'absolute',
        left: '30%',
        top: '25%',
        background: '#fff',
        borderRadius: '1em',
    }
})