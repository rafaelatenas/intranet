import React from "react"
import { Box, Chip, FormControl, InputLabel, ListItemText, Select, Step, StepContent, StepLabel, Stepper, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

export default function EditUser(params) {
    const style = styles()
    const { data } = params;
    const [consolaSeleccionada,setConsolaSeleccionada]=useState({
        firstName:"",
        secondName:"",
        lastName:"",
        secondLastName:"",
        CI:"",
        Age:"",
        birthDay:"",
        shirtSize:"",
        jacketSize:"",
        specialDay:"",
        languages:[],
        profession:"",
        otherprofessions:"",
        residence:"",
        cell:"",
        email:"",
        officePhone:"",
        extension:"",
        joining:"",
        charge:"",
        area:"",
        direction:"",
        profitCode:"",
        supervisor:[],
        supervised:[],
        perfil:"",
        image:[],
        avatar:[],
    })
    
    const handleChange=e=>{
        const {name, value}=e.target;
        setConsolaSeleccionada(prevState=>({
          ...prevState,
          [name]: value
        }))
    }
    return (
        <Box style={{ width: '90%', height: '90%', background: '#fff', padding: 20 }}>
            <Box style={{ width: '100%', height: '100%', background: '#fff' }}>
                <Stepper width={'100%'} sx={{ overflow: 'visible', '& div': { overflow: 'visible' } }} orientation="vertical" activeStep={stepActive} >
                    <Step>
                        <StepLabel>Datos de Usuario</StepLabel>
                        <StepContent>
                            <Box className={style.boxStep} style={{ height: '90%' }}>
                                <TextField className={style.textField} id="outlined-multiline" label="Primer Nombre"
                                    value={data.Primer_Nombre && consolaSeleccionada.firstName} name={'firstName'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline" label="Segundo Nombre"
                                    value={secondName} name={'secondName'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline" label="Primer Apellido"
                                    value={lastName} name={'lastName'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline" label="Segundo Apellido"
                                    value={secondLastName} name={'secondLastName'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="CI"
                                    value={CI} name={'CI'}
                                    onChange={(e) => handleUserInput(e)}
                                    type='number'
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Edad"
                                    value={Age} name={'Age'}
                                    onChange={(e) => handleUserInput(e)}
                                    type='number'
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Fecha de Nacimiento"
                                    value={birthDay} name={'birthDay'}
                                    onChange={(e) => handleUserInput(e)}
                                    type='date' InputLabelProps={{ shrink: true }}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Talla de Camisa"
                                    value={shirtSize} name={'shirtSize'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Talla de Chaqueta"
                                    value={jacketSize} name={'jacketSize'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Día Especial"
                                    value={specialDay} name={'specialDay'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <FormControl className={style.textField}>
                                    <InputLabel id="demo-simple-select-label">Idiomas</InputLabel>
                                    <Select
                                        label='Idiomas'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={languages} name={'languages'}
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionIdiomas}
                                        multiple
                                        renderValue={(selected) => {
                                            if (selected.length > 1 && selected.length < languagesSelect.length) {
                                                return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                                            } else if (selected.length === languages.length) {
                                                return (
                                                    <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                                                )
                                            } else if (selected.length < 2) {
                                                return (
                                                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                        {selected.map((value) => {
                                                            for (let h = 0; h < languages.length; h++) {
                                                                const element = languages[h];
                                                                if (element.Id === value) {
                                                                    return (<Chip sx={{ '& span': { fontSize: '10px' } }} key={value} label={element.Descripcion} />)
                                                                }
                                                            }
                                                        })}
                                                    </Box>
                                                )
                                            }
                                        }}
                                    >
                                        <ListSubheader>
                                            <Button startIcon={<AddRounded />} name='languages' onClick={() => handleNew('languages')} style={{ textTransform: 'capitalize' }}>Agregar Idioma</Button>
                                        </ListSubheader>
                                        {languagesSelect.map((item) => (
                                            <MenuItem key={item.Id} value={item.Id} className='items'>
                                                <Checkbox checked={languages.indexOf(item.Id) > -1} />
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
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
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionProfesiones}
                                    >
                                        <ListSubheader>
                                            <Button startIcon={<AddRounded />} onClick={() => handleNew('profession')} style={{ textTransform: 'capitalize' }}>Agregar Profesión</Button>
                                        </ListSubheader>
                                        {professionSelect.map((item) => (
                                            <MenuItem key={item.Id} value={item.Id} className='items'>
                                                {/* <Checkbox checked={profession.indexOf(item.Id) > -1} /> */}
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <TextField className={style.textField} id="outlined-multiline" label="Otras Profesiones"
                                    value={otherprofessions} name={'otherprofessions'}
                                    onChange={(e) => handleUserInput(e)}
                                />

                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Button variant="contained" onClick={handleNext}>Siguiente</Button>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Contacto y Residencia</StepLabel>
                        <StepContent className="content">
                            <Box className={style.boxStep}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Residencia"
                                    value={residence} name={'residence'}
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Celular"
                                    value={cell} name={'cell'}
                                    type='tel'
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Correo"
                                    value={email} name={'email'}
                                    type='email'
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Telefono de Oficina"
                                    value={officePhone} name={'officePhone'}
                                    style={{ minWidth: 210 }} type='tel'
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Extensión"
                                    value={extension} name={'extension'}
                                    style={{ minWidth: 210 }} type='number'
                                    onChange={(e) => handleUserInput(e)}
                                />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
                                <Button variant="contained" color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Regresar</Button>
                                {stepActive === 2 ?
                                    <Button variant="contained" onClick={handleNext}>Enviar</Button>
                                    : <Button variant="contained" onClick={handleNext}>Siguiente</Button>
                                }
                            </Box>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Datos Atenas</StepLabel>
                        <StepContent sx={{ overflow: 'visible', '& div': { overflow: 'visible' } }}>
                            <Box className={style.boxStep}>
                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Fecha de Ingreso a la Empresa"
                                    value={joining} name={'joining'}
                                    InputLabelProps={{ shrink: true }} type='date'
                                    onChange={(e) => handleUserInput(e)}
                                />
                                <FormControl className={style.textField}>
                                    <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
                                    <Select
                                        label='Cargo'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={charge} name={'charge'}
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionCargo}
                                    >
                                        <ListSubheader>
                                            <Button startIcon={<AddRounded />} onClick={() => handleNew('charge')} style={{ textTransform: 'capitalize' }}>Agregar Cargo</Button>
                                        </ListSubheader>
                                        {chargeSelect.map((item) => (
                                            <MenuItem key={item.Id} value={item.Id} className='items'>
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
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
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionArea}
                                    >
                                        <ListSubheader>
                                            <Button startIcon={<AddRounded />} onClick={() => handleNew('area')} style={{ textTransform: 'capitalize' }}>Agregar Idioma</Button>
                                        </ListSubheader>
                                        {areaSelect.map((item) => (
                                            <MenuItem key={item.Id} value={item.Id} className='items'>
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
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
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionDirection}
                                    >
                                        <ListSubheader>
                                            <Button startIcon={<AddRounded />} onClick={() => handleNew('direction')} style={{ textTransform: 'capitalize' }}>Agregar nueva Dirección</Button>
                                        </ListSubheader>
                                        {directionSelect.map((item) => (console.log(item),
                                            <MenuItem key={item.Id} value={item.Id} className='items'>
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <TextField className={style.textField} id="outlined-multiline-flexible" label="Código de Profit"
                                    value={profitCode} name={'profitCode'}
                                    type='text' onChange={(e) => handleUserInput(e)}
                                />
                                <FormControl className={style.textField}>
                                    <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
                                    <Select
                                        label='Supervisor'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={supervisor} name={'supervisor'}
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionSuperVisorSupervisado}
                                        multiple
                                        input={<OutlinedInput label='Supervisor' />}
                                        renderValue={(selected) => {
                                            if (selected.length > 1 && selected.length < superVISelect.length) {
                                                return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                                            } else if (selected.length === supervisor.length) {
                                                return (
                                                    <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                                                )
                                            } else if (selected.length < 2) {
                                                return (
                                                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                        {selected.map((value) => {
                                                            for (let h = 0; h < supervisor.length; h++) {
                                                                const element = supervisor[h];
                                                                if (element.Id === value) {
                                                                    return (<Chip sx={{ '& span': { fontSize: '10px' } }} key={value} label={element.Descripcion} />)
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
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Primer_Nombre + " " + item.Primer_Apellido} />
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
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionSuperVisorSupervisado}
                                        renderValue={(selected) => {
                                            if (selected.length > 1 && selected.length < superVISelect.length) {
                                                return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                                            } else if (selected.length === supervised.length) {
                                                return (
                                                    <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                                                )
                                            } else if (selected.length < 2) {
                                                return (
                                                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                        {selected.map((value) => {
                                                            for (let h = 0; h < supervised.length; h++) {
                                                                const element = supervised[h];
                                                                if (element.Id === value) {
                                                                    return (<Chip sx={{ '& span': { fontSize: '10px' } }} key={value} label={element.Descripcion} />)
                                                                }
                                                            }
                                                        })}
                                                    </Box>
                                                )
                                            }
                                        }}
                                    >
                                        <ListSubheader>
                                            <Button startIcon={<AddRounded />} onClick={() => handleNew('supervised')} style={{ textTransform: 'capitalize' }}>Agregar Idioma</Button>
                                        </ListSubheader>
                                        {superVISelect.map((item) => (
                                            <MenuItem key={item.Cedula} value={item.Cedula} className='items'>
                                                <Checkbox checked={supervised.indexOf(item.Cedula) > -1} />
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Primer_Nombre + " " + item.Primer_Apellido} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={style.textField}>
                                    <InputLabel id="demo-simple-select-label">Perfil de Usuario</InputLabel>
                                    <Select
                                        label='Perfil de Usuario'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={perfil} name={'perfil'}
                                        onChange={(e) => handleUserInput(e)}
                                        onOpen={peticionPerfil}
                                        renderValue={(selected) => {
                                            console.log(selected)
                                            if (selected.length > 1 && selected.length < perfilSelect.length) {
                                                return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                                            } else if (selected.length === perfil.length) {
                                                return (
                                                    <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                                                )
                                            } else if (selected.length < 2) {
                                                return (
                                                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                                        {selected.map((value) => {
                                                            for (let h = 0; h < perfil.length; h++) {
                                                                const element = perfil[h];
                                                                if (element.Id === value) {
                                                                    return (<Chip sx={{ '& span': { fontSize: '10px' } }} key={value} label={element.Descripcion} />)
                                                                }
                                                            }
                                                        })}
                                                    </Box>
                                                )
                                            }
                                        }}
                                    >
                                        <ListSubheader>
                                            <Button startIcon={<AddRounded />} onClick={() => handleNew('perfil')} style={{ textTransform: 'capitalize' }}>Agregar Perfil</Button>
                                        </ListSubheader>
                                        {perfilSelect.map((item) => (console.log(item.Id, perfil),
                                            <MenuItem key={item.Id} value={item.Id} className='items'>
                                                {/* <Checkbox checked={perfil.indexOf(item.Id) > -1} /> */}
                                                <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>

                                <Button variant="contained" color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Regresar</Button>
                                <Tooltip title='Marque aquí si desea continuar con las imagenes del usuario.'>
                                    <Button variant="contained" onClick={handleNext}>Siguiente</Button>
                                </Tooltip>
                                <Tooltip title='Si no posee las fotos del usuario, marque aquí.'>
                                    <Button variant="contained" color="success" onClick={handleRegister}>Enviar</Button>
                                </Tooltip>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step sx={{ minHeight: 210 }}>
                        <StepLabel>Imagenes de Usuario</StepLabel>
                        <StepContent sx={{ overflow: 'visible', '& div': { overflow: 'visible' } }}>
                            <Box className={style.boxStep} sx={{ height: '70%', gridTemplateRows: 'repeat(auto-fit, minmax(60px, 100%))' }}>
                                <Card sx={{ width: 130, height: 115, boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 50%), 0px 1px 1px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)' }}>
                                    <CardActionArea type="button" sx={{ width: '100%', height: '100%' }}>
                                        <Typography sx={{ textAlign: 'center' }}>Cargar Imagen</Typography>
                                        <Button aria-label="upload picture" component="label" startIcon={<AddAPhotoRounded sx={{ fontSize: '50px !important' }} />} style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center' }}>
                                            <input hidden accept="image/png" type="file"
                                                value={image} name={'foto'}
                                                onChange={(e) => handleUserInput(e)}
                                            />
                                        </Button>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ width: 130, height: 115, boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 50%), 0px 1px 1px 0px rgb(0 0 0 / 60%), 0px 1px 3px 0px rgb(0 0 0 / 50%)' }}>
                                    <CardActionArea type="button" sx={{ width: '100%', height: '100%' }}>
                                        <Typography sx={{ textAlign: 'center' }}>Cargar Avatar</Typography>
                                        <Button aria-label="upload picture" component="label" startIcon={<AccountCircleRounded sx={{ fontSize: '50px !important' }} />} style={{ width: '100%', height: '80%', display: 'flex', justifyContent: 'center' }}>
                                            <input hidden accept="image/png" type="file"
                                                value={avatar} name={'avatar'}
                                                onChange={(e) => handleUserInput(e)}
                                            />
                                        </Button>
                                    </CardActionArea>
                                </Card>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
                                <Button variant="contained" color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Regresar</Button>
                                <Button variant="contained" color="success" onClick={handleRegister}>Enviar</Button>
                            </Box>
                        </StepContent>
                    </Step>
                </Stepper>

                {stepActive === 4 ? (
                    <Paper square elevation={0}>
                        <Typography>Se ha realizado el registro con Exito</Typography>
                        <Button onClick={handleContinue} sx={{ mt: 1, mr: 1 }}>
                            {'Registrar un Nuevo Usuario'}
                        </Button>
                    </Paper>
                ) : ''}
                <ModalElements
                    valor={element}
                    valorCreacion={valorCreacion}
                    openModal={openModal}
                    closemodal={() => handleNew()}
                />
            </Box>
        </Box>
    )
}
const styles = makeStyles({
    boxStep: {
        height: '75%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 25%))',
        gridTemplateRows: 'repeat(auto-fit, minmax(60px, 25%))',
        justifyItems: 'center',
        overflow: 'visible'
    },
    boxField: {
        overflow: 'visible !important',
        display: 'inline-flex',
        width: '100%',
        justifyContent: 'space-around',
        minWidth: 700,
        margin: '1% 0',
    },
    textField: {
        overflow: 'visible !important',
        width: '80%',
        maxHeight: 60
    },
    modalPhoto: {
        width: '40% !important',
        height: '50%',
        position: 'absolute',
        left: '30%',
        top: '25%',
        background: '#fff',
        borderRadius: '1em',
    }
})