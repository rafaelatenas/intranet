import React from "react";
import { Box, Button, MenuItem, Paper, Step, StepContent, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import './createUser.css'

class CreateUser extends React.Component{

    constructor(props){
        super(props);
        this.state={
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
            stepActive:0,
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
            ]
        }
    }

    handleUserInput =(e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value})
    }
    handleChangeselect = (event) => {
        this.setState({specialDay:event.target.value});
    };
    handleNext =()=>{
        this.setState({stepActive:this.state.stepActive+1})
    }
    handleBack =()=>{
        this.setState({stepActive:this.state.stepActive-1})
    }
    handleContinue=()=>{
        this.setState({stepActive:0})
    }
    handleRegister=()=>{
        this.setState({stepActive:this.state.stepActive+1})
    }
    render(){
        return(
            <Box width={'100%'}>
                <Stepper width={'100%'} orientation="vertical" activeStep={this.state.stepActive}>
                    <Step>
                        <StepLabel>Datos de Usuario</StepLabel>
                        <StepContent>
                            <Box className="boxStep" style={{height:'85%'}}>
                                <Box className="boxField">
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Primer Nombre"
                                        value={this.state.firstName} name={'firstName'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Segundo Nombre"
                                        value={this.state.secondName} name={'secondName'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Primer Apellido"
                                        value={this.state.lastName} name={'lastName'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                </Box>
                                <Box className="boxField">
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Segundo Apellido"
                                        value={this.state.secondLastName} name={'secondLastName'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="CI"
                                        value={this.state.CI} name={'CI'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                        type='number'
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Fecha de Nacimiento"
                                        value={this.state.birthDay} name={'birthDay'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                        type='date'
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Box>
                                <Box className="boxField">
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Profesión"
                                        value={this.state.profession} name={'profession'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Talla de Camisa o Chaqueta"
                                        value={this.state.shirtSize} name={'shirtSize'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                        select
                                    >
                                        {this.state.sizes.map((size)=>(
                                            <MenuItem key={size.value} value={size.name}>
                                                {size.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Día Especial"
                                        value={this.state.specialDay} name={'specialDay'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                        select
                                    >
                                        {this.state.special.map((day)=>(
                                            <MenuItem key={day.value} value={day.name}>
                                                {day.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Box>
                                <Box className="boxField" style={{maxWidth:770, minWidth:465}}>
                                    <TextField className='textField' id="outlined-multiline-flexible" label='Imagen'
                                        value={this.state.image} name={'image'}
                                        inputProps={{accept:'image/png'}}
                                        onChange={(e)=>this.handleUserInput(e)} 
                                        InputLabelProps={{ shrink: true }}
                                        type='file' style={{minWidth:210}} 
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label='Avatar'
                                        value={this.state.avatar} name={'avatar'}
                                        inputProps={{accept:'image/png'}}
                                        onChange={(e)=>this.handleUserInput(e)} 
                                        InputLabelProps={{ shrink: true }}
                                        type='file' style={{minWidth:210}}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                <Button onClick={this.handleNext}>Siguiente</Button>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Contacto y Residencia</StepLabel>
                        <StepContent className="content">
                            <Box className="boxStep">
                                <Box className="boxField">
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Residencia"
                                        value={this.state.residence} name={'residence'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Celular"
                                        value={this.state.cell} name={'cell'}
                                        type='tel' 
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Correo"
                                        value={this.state.email} name={'email'}
                                        type='email'
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                </Box>
                                <Box className="boxField" style={{maxWidth:770, minWidth:465}}>
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Telefono de Oficina"
                                        value={this.state.officePhone} name={'officePhone'}
                                        style={{minWidth:210}} type='tel'
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className='textField' id="outlined-multiline-flexible" label="Extensión"
                                        value={this.state.extension} name={'extension'}
                                        style={{minWidth:210}} type='number'
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                </Box>
                            </Box>    
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                <Button color="inherit" disabled={this.state.stepActive === 0} onClick={this.handleBack} sx={{ mr: 1 }} >Back</Button>
                                {this.state.stepActive === 2 ? 
                                    <Button onClick={this.handleNext}>Enviar</Button>
                                    :<Button onClick={this.handleNext}>Siguiente</Button>
                                }
                            </Box>
                            
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Datos Atenas</StepLabel>
                        <StepContent>
                            <Box className="boxStep">
                                <Box className="boxField">
                                    <TextField className="textField" id="outlined-multiline-flexible" label="Cargo"
                                        value={this.state.charge} name={'charge'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className="textField" id="outlined-multiline-flexible" label="Área"
                                        value={this.state.area} name={'area'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className="textField" id="outlined-multiline-flexible" label="Dirección"
                                        value={this.state.direction} name={'direction'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                </Box>
                                <Box className="boxField">
                                    <TextField className="textField" id="outlined-multiline-flexible" label="supervisor"
                                        value={this.state.supervisor} name={'supervisor'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className="textField" id="outlined-multiline-flexible" label="Fecha de Ingreso a la Empresa"
                                        value={this.state.joining} name={'joining'}
                                        InputLabelProps={{ shrink: true }} type='date'
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                    <TextField className="textField" id="outlined-multiline-flexible" label="supervisado"
                                        value={this.state.supervised} name={'supervised'}
                                        onChange={(e)=>this.handleUserInput(e)}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                <Button color="inherit" disabled={this.state.stepActive === 0} onClick={this.handleBack} sx={{ mr: 1 }} >Back</Button>
                                {this.state.stepActive === 2 ? 
                                    <Button onClick={this.handleRegister}>Enviar</Button>
                                    :<Button onClick={this.handleNext}>Siguiente</Button>
                                }
                            </Box>
                        </StepContent>
                    </Step>
                </Stepper>
                {this.state.stepActive === 3?(
                    <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Se ha realizado el registro con Exito</Typography>
                    <Button onClick={this.handleContinue} sx={{ mt: 1, mr: 1 }}>
                        Registrar un Nuevo Usuario
                    </Button>
                    </Paper>
                ):''}
            </Box>
        )
    }
}
export default CreateUser;