import React, { useState } from "react";
import { Box, Button, Card, CardActionArea, Checkbox, Chip, FormControl, InputLabel, ListItemText, ListSubheader, MenuItem, OutlinedInput, Paper, Select, Step, StepContent, StepLabel, Stepper, TextField, Tooltip, Typography } from "@mui/material";
import './createUser.css'
import { AccountCircleRounded, AddAPhotoRounded, AddRounded } from "@mui/icons-material";
import ModalElements from "./elementsToform";
import { makeStyles } from "@mui/styles";
import axios from "axios";

export default function CreateUser (props) {
    const style = styles()
    const token = sessionStorage.getItem('token')
    let headersList = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json" 
    }
    /* Estados de Formulario */
    const [firstName, setFirstName]=useState("")
    const [secondName, setSecondName]=useState("")
    const [lastName, setLastName]=useState("")
    const [secondLastName, setSecondLastName]=useState("")
    const [CI, setCI]=useState("")
    const [Age, setAge]=useState("")
    const [birthDay, setBirthDay]=useState("")
    const [shirtSize, setShirtSize]=useState("")
    const [jacketSize, setJacketSize]=useState("")
    const [specialDay, setSpecialDay]=useState("")
    const [languages, setLanguages]=useState([])
    const [profession, setProfession]=useState("")
    const [otherprofessions, setOtherprofessions]=useState("")
    const [residence, setResidence]=useState("")
    const [cell, setCell]=useState("")
    const [email, setEmail]=useState("")
    const [officePhone, setOfficePhone]=useState("")
    const [extension, setExtension]=useState("")
    const [joining, setJoining]=useState("")
    const [charge, setCharge]=useState("")
    const [area, setArea]=useState("")
    const [direction, setDirection]=useState("")
    const [profitCode, setProfitCode]=useState("")
    const [supervisor, setSupervisor]=useState([])
    const [supervised, setSupervised]=useState([])
    const [image, setImage]=useState([])
    const [avatar, setAvatar]=useState([])
    
    const [languagesSelect, setLanguagesSelect]=useState([])
    const [professionSelect, setProfessionSelect]=useState([])
    const [chargeSelect, setChargeSelect]=useState([])
    const [areaSelect, setAreaSelect]=useState([])
    const [directionSelect, setDirectionSelect]=useState([])
    const [superVISelect, setSuperVISelect]=useState([])

    const [openModal, setOpenModal]=useState(false)
    const [openModalPhoto, setOpenModalPhoto]=useState(false)
    const [stepActive, setStepActive]=useState(0)
    const [valorCreacion, setValorCreacion]=useState("")

    const handleUserInput =(e)=>{
        const {name, value, files} = e.target;
        console.log(e.target);
        if (files != null) {
            switch (name) {
                case 'foto':
                    handleImages(files[0],name)
                    break;
                case 'avatar':
                    handleImages(files[0],name)
                    break;
                default:
                    break;
            }
        }
        console.log(name)
        switch (name) {
            case 'firstName':
                setFirstName(value)
                break;
            case 'secondName':
                setSecondName(value)
                break;
            case 'lastName':
                setLastName(value)
                break;
            case 'secondLastName':
                setSecondLastName(value)
                break;
            case 'CI':
                setCI(value)
                break;
            case 'Age':
                setAge(value)
                break;
            case 'birthDay':
                setBirthDay(value)
                break;
            case 'shirtSize':
                setShirtSize(value)
                break;
            case 'jacketSize':
                setJacketSize(value)
                break;
            case 'specialDay':
                setSpecialDay(value)
                break;
            case 'languages':
                setLanguages(value)
                break;
            case 'profession':
                console.log(value)
                setProfession(value)
                break;
            case 'otherprofessions':
                setOtherprofessions(value)
                break;
            case 'residence':
                setResidence(value)
                break;
            case 'cell':
                setCell(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'officePhone':
                setOfficePhone(value)
                break;
            case 'extension':
                setExtension(value)
                break;
            case 'joining':
                setJoining(value)
                break;
            case 'charge':
                setCharge(value)
                break;
            case 'area':
                setArea(value)
                break;
            case 'direction':
                setDirection(value)
                break;
            case 'profitCode':
                setProfitCode(value)
                break;
            case 'supervisor':
                setSupervisor(value)
                break;
            case 'supervised':
                setSupervised(value)
                break;
            default:
                break;
        }
    }
    const handleNew=(e)=>{
        setValorCreacion(e)
        setOpenModal(!openModal)
    }

    /* Controles Paso a Paso */
    const handleNext =()=>{
        setStepActive(stepActive+1)
    }
    const handleBack =()=>{
        setStepActive(stepActive-1)
    }
    const handleContinue=()=>{
        setStepActive(0)
    }
    /* Peticiones Select */
        /* Idiomas */
        const peticionIdiomas =async()=>{
            let reqOptions = {
                url: process.env.REACT_APP_API_ENDPOINT+"ListarIdioma",
                method: "GET",
                headers: headersList,
            }

            await axios.request(reqOptions)
            .then(response => {
                if (response.data.message) {
                //   toast.fire({
                //     icon: 'warning',
                //     title: '' + response.data.message,
                //   })
                } else {
                    setLanguagesSelect(response.data.data);
                }
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
        const peticionProfesiones =async()=>{
            let reqOptions = {
                url: process.env.REACT_APP_API_ENDPOINT+"ListarProfesiones",
                method: "GET",
                headers: headersList,
            }

            await axios.request(reqOptions)
            .then(response => {
                console.log(response.data.data)
                if (response.data.message) {
                //   toast.fire({
                //     icon: 'warning',
                //     title: '' + response.data.message,
                //   })
                } else {
                    setProfessionSelect(response.data.data);
                }
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
        const peticionCargo =async()=>{
            let reqOptions = {
                url: process.env.REACT_APP_API_ENDPOINT+"ListarCargo",
                method: "GET",
                headers: headersList,
            }

            await axios.request(reqOptions)
            .then(response => {
                console.log(response.data.data)
                if (response.data.message) {
                //   toast.fire({
                //     icon: 'warning',
                //     title: '' + response.data.message,
                //   })
                } else {
                    setChargeSelect(response.data.data);
                }
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
        const peticionArea =async()=>{
            let reqOptions = {
                url: process.env.REACT_APP_API_ENDPOINT+"ListarArea",
                method: "GET",
                headers: headersList,
            }

            await axios.request(reqOptions)
            .then(response => {
                console.log(response.data.data)
                if (response.data.message) {
                //   toast.fire({
                //     icon: 'warning',
                //     title: '' + response.data.message,
                //   })
                } else {
                    setAreaSelect(response.data.data);
                }
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
        const peticionDirection =async()=>{
            let reqOptions = {
                url: process.env.REACT_APP_API_ENDPOINT+"ListarDepartamento",
                method: "GET",
                headers: headersList,
            }

            await axios.request(reqOptions)
            .then(response => {
                console.log(response.data.data)
                if (response.data.message) {
                //   toast.fire({
                //     icon: 'warning',
                //     title: '' + response.data.message,
                //   })
                } else {
                    setDirectionSelect(response.data.data);
                }
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
        const peticionSuperVisorSupervisado =async()=>{
            let reqOptions = {
                url: process.env.REACT_APP_API_ENDPOINT+"ListarEmpleados",
                method: "GET",
                headers: headersList,
            }

            await axios.request(reqOptions)
            .then(response => {
                console.log(response.data.data)
                if (response.data.message) {
                //   toast.fire({
                //     icon: 'warning',
                //     title: '' + response.data.message,
                //   })
                } else {
                    setSuperVISelect(response.data.data);
                }
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

    /* Registro */
    const handleRegister=()=>{
        setOpenModalPhoto(!openModalPhoto);
        console.log(stepActive)
        switch (stepActive) {
            case 2:
                setStepActive(4)
                break;
            default:
                setStepActive(stepActive+1)
                break;
        }
        
        var datos ={
            Cedula:CI,
            Primer_Nombre:firstName,
            Segundo_Nombre:secondName,
            Primer_Apellido:lastName,
            Segundo_Apellido:secondLastName,
            Fecha_Nac:birthDay,
            Edad:Age,
            Id_Perfil:'console',
            Id_Profesion:'Id_Profesion',
            Otras_Profesiones:'Otras_Profesiones',
            Id_Idiomas:'Id_Idiomas',
            Talla_Camisa:'Talla_Camisa',
            Talla_Chaqueta:shirtSize,
            Dia_Especial:specialDay,
            Residencia:residence,
            Celular:cell,
            Tlf_Oficina:officePhone,
            Extension_Tlf:extension,
            Correo:email,
            Password:process.env.REACT_APP_API_PASSWORD,
            Ind_Clave:0,
            Fecha_Ingreso:joining,
            Id_Cargo:charge,
            Id_Departamento:direction,
            Id_Area:area,
            Supervisor:supervisor,
            Supervisados:supervised
        }
        axios.post('http://localhost:3008/Intranet/AddEmpleados',{
            datos
        }).then((result) => {
            console.log(result);
            console.log(result.data);


        }).catch((error) => {
            console.log(error.response.message);
            console.log(error.response.status);
            console.log(error.response.headers);        
        })
    }
    const handleImages =(element,name)=>{
        let urlString;
        const fd = new FormData();
        console.log(element)
        switch (name) {
            case 'foto':
                fd.append('foto', element);
		        fd.append('cedula', CI);
                urlString='AddFotoEmpleados'
                break;
            case 'avatar':
                urlString='AddAvatarEmpleados'
                fd.append('avatar', element);
		        fd.append('cedula', CI);
                break
            default:
                break;
        }
        let reqOptions = {
            url: process.env.REACT_APP_API_ENDPOINT+urlString,
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            },
            data: fd,
        }
        axios.request(reqOptions)
      .then((result) => {
          console.log(result);
          console.log(result.data); 
    
      }).catch((error) => {
              console.log(error.response.message);
              console.log(error.response.status);
              console.log(error.response.headers);        
      })
    }
    
    const handleUserInputDirection =(e)=>{
        const {value}=e.target
        setDirection(value)
    }
    return(
        <Box width={'100%'}>
            <Stepper width={'100%'} orientation="vertical" activeStep={stepActive} >
                <Step>
                    <StepLabel>Datos de Usuario</StepLabel>
                    <StepContent>
                        <Box className={style.boxStep} style={{height:'90%'}}>
                            <TextField className={style.textField} id="outlined-multiline" label="Primer Nombre"
                                value={firstName} name={'firstName'}
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline" label="Segundo Nombre"
                                value={secondName} name={'secondName'}
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline" label="Primer Apellido"
                                value={lastName} name={'lastName'}
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline" label="Segundo Apellido"
                                value={secondLastName} name={'secondLastName'}
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="CI"
                                value={CI} name={'CI'}
                                onChange={(e)=>handleUserInput(e)}
                                type='number'
                            />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Edad"
                                value={Age} name={'Age'}
                                onChange={(e)=>handleUserInput(e)}
                                type='number'
                            />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Fecha de Nacimiento"
                                value={birthDay} name={'birthDay'}
                                onChange={(e)=>handleUserInput(e)}
                                type='date' InputLabelProps={{ shrink: true }}
                            />
                            
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Talla de Camisa"
                                value={shirtSize} name={'shirtSize'}
                                onChange={(e)=>handleUserInput(e)}
                                />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Talla de Chaqueta"
                                value={jacketSize} name={'jacketSize'}
                                onChange={(e)=>handleUserInput(e)}
                                />
                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Día Especial</InputLabel>
                                <Select
                                label='Dia Especial'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={specialDay} name={'specialDay'}
                                    onChange={(e)=>handleUserInput(e)}

                                >
                                    <ListSubheader>
                                        <Button startIcon={<AddRounded/>} onClick={handleNew} style={{textTransform:'capitalize'}}>Agregar Día Especial</Button>
                                    </ListSubheader>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Idiomas</InputLabel>
                                <Select
                                    label='Idiomas'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={languages} name={'languages'}
                                    onChange={(e)=>handleUserInput(e)}
                                    onOpen={peticionIdiomas}
                                    multiple
                                    renderValue={(selected) => {
                                        if(selected.length>1 && selected.length < languagesSelect.length){
                                            return(<ListItemText sx={{'& span':{fontSize:'10px'}}} primary={`(${selected.length}) Idiomas Marcados`}/>)
                                        }else if(selected.length === languages.length){
                                            return(
                                                <ListItemText sx={{'& span':{fontSize:'10px'}}} primary={`Todos los Idiomas marcados (${selected.length})`}/>
                                            )
                                        }else if(selected.length<2){
                                            return(
                                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                    {selected.map((value) =>{
                                                        for (let h = 0; h < languages.length; h++) {
                                                            const element = languages[h];
                                                            if(element.Id === value){
                                                                return(<Chip sx={{'& span':{fontSize:'10px'}}} key={value} label={element.Descripcion}/>)
                                                            }
                                                        }
                                                    })}
                                                </Box>
                                            )
                                        }
                                    }}
                                >
                                    <ListSubheader>
                                        <Button startIcon={<AddRounded/>} name='languages' onClick={()=>handleNew('languages')} style={{textTransform:'capitalize'}}>Agregar Idioma</Button>
                                    </ListSubheader>
                                    {languagesSelect.map((item) => (
                                        <MenuItem key={item.Id} value={item.Id} className='items'>
                                            <Checkbox checked={languages.indexOf(item.Id) > -1} />
                                            <ListItemText sx={{fontSize:'10px'}} primary={item.Descripcion} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Profesión</InputLabel>
                                <Select
                                    label='Profesión'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={profession} name={'profession'}
                                    onChange={(e)=>handleUserInput(e)}
                                    onOpen={peticionProfesiones}
                                >
                                    <ListSubheader>
                                        <Button startIcon={<AddRounded/>} onClick={()=>handleNew('profession')} style={{textTransform:'capitalize'}}>Agregar Profesión</Button>
                                    </ListSubheader>
                                    {professionSelect.map((item) => (
                                        <MenuItem key={item.Id} value={item.Id} className='items'>
                                            {/* <Checkbox checked={profession.indexOf(item.Id) > -1} /> */}
                                            <ListItemText sx={{fontSize:'10px'}} primary={item.Descripcion} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                           

                            <TextField className={style.textField} id="outlined-multiline" label="Otras Profesiones"
                                value={otherprofessions} name={'otherprofessions'}
                                onChange={(e)=>handleUserInput(e)}
                            />
                            
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Button onClick={handleNext}>Siguiente</Button>
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Contacto y Residencia</StepLabel>
                    <StepContent className="content">
                        <Box className={style.boxStep}>
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Residencia"
                                value={residence} name={'residence'}
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Celular"
                                value={cell} name={'cell'}
                                type='tel' 
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Correo"
                                value={email} name={'email'}
                                type='email'
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Telefono de Oficina"
                                value={officePhone} name={'officePhone'}
                                style={{minWidth:210}} type='tel'
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Extensión"
                                value={extension} name={'extension'}
                                style={{minWidth:210}} type='number'
                                onChange={(e)=>handleUserInput(e)}
                            />
                        </Box>    
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Button color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Regresar</Button>
                            {stepActive === 2 ? 
                                <Button onClick={handleNext}>Enviar</Button>
                                :<Button onClick={handleNext}>Siguiente</Button>
                            }
                        </Box>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel>Datos Atenas</StepLabel>
                    <StepContent sx={{overflow:'visible', '& div':{overflow:'visible'}}}>
                        <Box className={style.boxStep}>
                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Fecha de Ingreso a la Empresa"
                                value={joining} name={'joining'}
                                InputLabelProps={{ shrink: true }} type='date'
                                onChange={(e)=>handleUserInput(e)}
                            />
                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
                                <Select
                                    label='Cargo'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={charge} name={'charge'}
                                    onChange={(e)=>handleUserInput(e)}
                                    onOpen={peticionCargo}
                                >
                                    <ListSubheader>
                                        <Button startIcon={<AddRounded/>} onClick={()=>handleNew('charge')} style={{textTransform:'capitalize'}}>Agregar Idioma</Button>
                                    </ListSubheader>
                                    {chargeSelect.map((item) => (
                                        <MenuItem key={item.Id} value={item.Id} className='items'>
                                            <ListItemText sx={{fontSize:'10px'}} primary={item.Descripcion} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Área</InputLabel>
                                <Select
                                    label='Área'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={area} name={'area'}
                                    onChange={(e)=>handleUserInput(e)}
                                    onOpen={peticionArea}
                                >
                                    <ListSubheader>
                                        <Button startIcon={<AddRounded/>} onClick={()=>handleNew('area')} style={{textTransform:'capitalize'}}>Agregar Idioma</Button>
                                    </ListSubheader>
                                    {areaSelect.map((item) => (
                                        <MenuItem key={item.Id} value={item.Id} className='items'>
                                            <ListItemText sx={{fontSize:'10px'}} primary={item.Descripcion} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Dirección</InputLabel>
                                <Select
                                    label='Dirección'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={direction} name={'direction'}
                                    onChange={(e)=>handleUserInputDirection(e)}
                                    onOpen={peticionDirection}
                                >
                                    <ListSubheader>
                                        <Button startIcon={<AddRounded/>} onClick={()=>handleNew('direction')} style={{textTransform:'capitalize'}}>Agregar nueva Dirección</Button>
                                    </ListSubheader>
                                    {directionSelect.map((item) => (
                                        <MenuItem key={item.Id} value={item.Id} className='items'>
                                            <ListItemText sx={{fontSize:'10px'}} primary={item.Descripcion} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField className={style.textField} id="outlined-multiline-flexible" label="Código de Profit"
                                value={profitCode} name={'profitCode'}
                                type='text' onChange={(e)=>handleUserInput(e)}
                            />
                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
                                <Select
                                    label='Supervisor'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={supervisor} name={'supervisor'}
                                    onChange={(e)=>handleUserInput(e)}
                                    onOpen={peticionSuperVisorSupervisado}
                                    multiple
                                    input={<OutlinedInput label='Supervisor'/>}
                                    renderValue={(selected) => {
                                        if(selected.length>1 && selected.length < superVISelect.length){
                                            return(<ListItemText sx={{'& span':{fontSize:'10px'}}} primary={`(${selected.length}) Idiomas Marcados`}/>)
                                        }else if(selected.length === supervisor.length){
                                            return(
                                                <ListItemText sx={{'& span':{fontSize:'10px'}}} primary={`Todos los Idiomas marcados (${selected.length})`}/>
                                            )
                                        }else if(selected.length<2){
                                            return(
                                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                    {selected.map((value) =>{
                                                        for (let h = 0; h < supervisor.length; h++) {
                                                            const element = supervisor[h];
                                                            if(element.Id === value){
                                                                return(<Chip sx={{'& span':{fontSize:'10px'}}} key={value} label={element.Descripcion}/>)
                                                            }
                                                        }
                                                    })}
                                                </Box>
                                            )
                                        }
                                    }}
                                >
                                    {superVISelect.map((item) => (
                                        <MenuItem key={item.Cedula} value={item.Cedula} className='items'>
                                            <Checkbox checked={supervisor.indexOf(item.Cedula) > -1} />
                                            <ListItemText sx={{fontSize:'10px'}} primary={item.Primer_Nombre+" "+item.Primer_Apellido} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl className={style.textField}>
                                <InputLabel id="demo-simple-select-label">Supervisado</InputLabel>
                                <Select
                                    multiple
                                    label='Supervisado'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={supervised} name={'supervised'}
                                    onChange={(e)=>handleUserInput(e)}
                                    onOpen={peticionSuperVisorSupervisado}
                                    renderValue={(selected) => {
                                        if(selected.length>1 && selected.length < superVISelect.length){
                                            return(<ListItemText sx={{'& span':{fontSize:'10px'}}} primary={`(${selected.length}) Idiomas Marcados`}/>)
                                        }else if(selected.length === supervised.length){
                                            return(
                                                <ListItemText sx={{'& span':{fontSize:'10px'}}} primary={`Todos los Idiomas marcados (${selected.length})`}/>
                                            )
                                        }else if(selected.length<2){
                                            return(
                                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                    {selected.map((value) =>{
                                                        for (let h = 0; h < supervised.length; h++) {
                                                            const element = supervised[h];
                                                            if(element.Id === value){
                                                                return(<Chip sx={{'& span':{fontSize:'10px'}}} key={value} label={element.Descripcion}/>)
                                                            }
                                                        }
                                                    })}
                                                </Box>
                                            )
                                        }
                                    }}
                                >
                                    <ListSubheader>
                                        <Button startIcon={<AddRounded/>} onClick={()=>handleNew('supervised')} style={{textTransform:'capitalize'}}>Agregar Idioma</Button>
                                    </ListSubheader>
                                    {superVISelect.map((item) => (
                                        <MenuItem key={item.Cedula} value={item.Cedula} className='items'>
                                            <Checkbox checked={supervised.indexOf(item.Cedula) > -1} />
                                            <ListItemText sx={{fontSize:'10px'}} primary={item.Primer_Nombre+" "+item.Primer_Apellido} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Button color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Regresar</Button>
                            <Tooltip title='Marque aquí si desea continuar con las imagenes del usuario.'>
                                <Button onClick={handleNext}>Siguiente</Button>
                            </Tooltip>
                            <Tooltip title='Si no posee las fotos del usuario, marque aquí.'>
                                <Button onClick={handleRegister}>Enviar</Button>
                            </Tooltip>
                        </Box>
                    </StepContent>
                </Step>
                <Step sx={{minHeight:210}}>
                    <StepLabel>Imagenes de Usuario</StepLabel>
                    <StepContent sx={{overflow:'visible', '& div':{overflow:'visible'}}}>
                        <Box className={style.boxStep} sx={{height:'70%', gridTemplateRows: 'repeat(auto-fit, minmax(60px, 100%))'}}>
                            <Card sx={{width:130, height:115, boxShadow:'0px 2px 1px -1px rgb(0 0 0 / 50%), 0px 1px 1px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)'}}>
                                <CardActionArea type="button" sx={{width:'100%', height:'100%'}}>
                                    <Typography sx={{textAlign:'center'}}>Cargar Imagen</Typography>
                                    <Button aria-label="upload picture" component="label" startIcon={<AddAPhotoRounded sx={{fontSize:'50px !important'}} />} style={{width:'100%', height:'80%', display:'flex', justifyContent:'center'}}>
                                        <input hidden accept="image/png" type="file" 
                                            value={image} name={'foto'}
                                            onChange={(e)=>handleUserInput(e)} 
                                        />
                                    </Button>
                                </CardActionArea>
                            </Card>
                            <Card sx={{width:130, height:115, boxShadow:'0px 2px 1px -1px rgb(0 0 0 / 50%), 0px 1px 1px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)'}}>
                                <CardActionArea type="button" sx={{width:'100%', height:'100%'}}>
                                    <Typography sx={{textAlign:'center'}}>Cargar Avatar</Typography>
                                    <Button aria-label="upload picture" component="label" startIcon={<AccountCircleRounded sx={{fontSize:'50px !important'}} />} style={{width:'100%', height:'80%', display:'flex', justifyContent:'center'}}>
                                        <input hidden accept="image/png" type="file" 
                                            value={avatar} name={'avatar'}
                                            onChange={(e)=>handleUserInput(e)} 
                                        />
                                    </Button>
                                </CardActionArea>
                            </Card>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Button color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Regresar</Button>
                            <Button onClick={handleRegister}>Enviar</Button>
                        </Box>
                    </StepContent>
                </Step>
            </Stepper>
                {stepActive === 4?(
                    <Paper square elevation={0}>
                        <Typography>Se ha realizado el registro con Exito</Typography>
                        <Button onClick={handleContinue} sx={{ mt: 1, mr: 1 }}>
                            {'Registrar un Nuevo Usuario'}
                        </Button>
                    </Paper>
                ):''}
            <ModalElements
                valor={valorCreacion}
                openModal={openModal}
                closemodal={()=>handleNew()}
            />
        </Box>
    )
}
const styles = makeStyles({
    boxStep:{
        height: '75%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 25%))',
        gridTemplateRows:'repeat(auto-fit, minmax(60px, 25%))',
        justifyItems:'center',
        overflow:'visible'
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
        width: '80%',
        maxHeight:60
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