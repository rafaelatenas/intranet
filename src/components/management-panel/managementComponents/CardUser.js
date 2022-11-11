import * as React from 'react';
import { PersonAdd } from '@mui/icons-material';
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Checkbox, IconButton, MenuItem, Tooltip,CardActionArea,Modal, Paper, Typography, OutlinedInput } from '@mui/material';
import { AccountCircleRounded, AddAPhotoRounded } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import { Box, Chip, FormControl, InputLabel, ListItemText, Select, Step, StepContent, StepLabel, Stepper, TextField } from "@mui/material";
import AtenasLogo from '../../../landing/images/comprimido/ats_logo.png'
import axios from "axios";
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CreateUser from './createUser';

export default function CardUser(props) {
  const style = styles()

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
  const token = sessionStorage.getItem('token')
    let headersList = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
  const { dates } = props
  const [user, setUser] = useState([])
  const [openModalEdits, setOpenModalEdits] = useState(false)
  const [openModalCreates, setOpenModalCreates] = useState(false)
  const [stepActive, setStepActive] = useState(0)
  const [consolaSeleccionada,setConsolaSeleccionada]=useState({
    Primer_Nombre:"",
    Segundo_Nombre:"",
    Primer_Apellido:"",
    Segundo_Apellido:"",
    Cedula:"",
    Edad:"",
    Date:"",
    // shirtSize:"",*
    // jacketSize:"",*
    // specialDay:"",*
    Idioma:[],
    Profesion:"",
    // otherprofessions:"",*
    // residence:"",*
    // cell:"",*
    // email:"",*
    // officePhone:"",*
    // extension:"",*
    // joining:"",*
    Cargo:"",
    Area:"",
    Departamento:"",
    profitCode:"",
    EstatuSupervisado:[],
    // supervised:[],*
    Perfil:"",
    Image:[],
    Avatar:[],
})

const handleUserInput=(e)=>{
    const {name, value}=e.target;
    setConsolaSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }))
}


const handleNext = () => {
  setStepActive(stepActive + 1)
}
const handleBack = () => {
  setStepActive(stepActive - 1)
}
const handleContinue = () => {
  setStepActive(0)
}

const [languagesSelect, setLanguagesSelect] = useState([])
const [professionSelect, setProfessionSelect] = useState([])
const [chargeSelect, setChargeSelect] = useState([])
const [areaSelect, setAreaSelect] = useState([])
const [directionSelect, setDirectionSelect] = useState([])
const [superVISelect, setSuperVISelect] = useState([])
const [perfilSelect, setPerfilSelect] = useState([])

const peticionIdiomas = async () => {
  let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + "ListarIdioma",
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
const peticionProfesiones = async () => {
  let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + "ListarProfesiones",
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
const peticionCargo = async () => {
  let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + "ListarCargo",
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
const peticionArea = async () => {
  let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + "ListarArea",
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
const peticionDirection = async () => {
  let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + "ListarDepartamento",
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
const peticionSuperVisorSupervisado = async () => {
  let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + "ListarEmpleados",
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
const peticionPerfil = async () => {
  let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + "ListarPerfil",
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
              setPerfilSelect(response.data.data);
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



  const peticionUsuarioCI = (cedula) => {
    let headersList = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
    let reqOptions = {
      url: process.env.REACT_APP_API_ENDPOINT + `ListarEmpleadosCedula/${cedula}`,
      method: "GET",
      headers: headersList,
    }

    axios.request(reqOptions)
      .then(response => {
        setConsolaSeleccionada(response.data.data[0])
        if (response.data.message) {
          toast.fire({
            icon: 'warning',
            title: '' + response.data.message,
          })
        } else {
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
  const OpenModalEdit = (e) => {
    setOpenModalEdits(true)
    peticionUsuarioCI(e)
  }
  const closeModalEdit = () => {
    setOpenModalEdits(false)
  }
  const OpenModalCreate = () => {
    setOpenModalCreates(true)
  }
  const closeModalCreate = () => {
    setOpenModalCreates(false)
  }
console.log(consolaSeleccionada, user.Primer_Nombre)

  return (
    <Box sx={{ height: '80%', gridGap: '5%', justifyContent: 'center', width: '100%', overflow: 'visible', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 20%))', gridTemplateRows: 'repeat(auto-fill, minmax(95px, 50%))' }}>
      <Card onClick={OpenModalCreate} sx={{ boxShadow: '1px -1px 8px 1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }}>
        <CardContent sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton sx={{ width: '160px', height: '160px', background: '#9f9a9a', '&:hover': { background: '#bbb8b885' } }}>
            <PersonAdd sx={{ fontSize: 60, color: '#fff' }} />
          </IconButton>
        </CardContent>
      </Card>
      {dates.map((dato) => (
        <Card key={dato.Cedula} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => OpenModalEdit(dato.Cedula)}>
          <CardHeader sx={{ padding: '8px' }}
            avatar={
              <Avatar aria-label="recipe" >
                <img style={{ width: 24, height: 24 }} src={dato.Avatar ? process.env.REACT_APP_API_URL_IMG + `/avatar/${dato.Cedula}/${dato.Avatar}` : AtenasLogo} alt={dato.Primer_Nombre + ' ' + dato.Primer_Apellido} title='' />
              </Avatar>
            }
            title={`Nombre: ${dato.Primer_Nombre + ' ' + dato.Primer_Apellido}`}
            subheader={`Cargo: ${dato.Cargo} Departamento: ${dato.Departamento}`}
          />
          <CardMedia
            component="img"
            image={dato.Imagen ? process.env.REACT_APP_API_URL_IMG + `/foto/${dato.Cedula}/${dato.Imagen}` : AtenasLogo}
            alt={dato.Primer_Nombre + '' + dato.Primer_Apellido}
            sx={{ width: 'auto', height: '100%' }}
          />
        </Card>
      ))}
      <Modal
        open={openModalEdits}
        onClose={closeModalEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ position: 'relative', left: '5%', top: '5%', width: '90%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
          <Box style={{ width: '90%', height: '90%', background: '#fff', padding: 20 }}>
            <Box style={{ width: '100%', height: '100%', background: '#fff' }}>
              <Stepper width={'100%'} sx={{ overflow: 'visible', '& div': { overflow: 'visible' } }} orientation="vertical" activeStep={stepActive} >
                <Step>
                  <StepLabel>Datos de Usuario</StepLabel>
                  <StepContent>
                    <Box className={style.boxStep} style={{ height: '90%' }}>
                      <TextField className={style.textField} id="outlined-multiline" label="Primer Nombre"
                        value={consolaSeleccionada && consolaSeleccionada.Primer_Nombre} name={'Primer_Nombre'}
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline" label="Segundo Nombre"
                        value={consolaSeleccionada && consolaSeleccionada.Segundo_Nombre} name={'Segundo_Nombre'}
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline" label="Primer Apellido"
                        value={consolaSeleccionada && consolaSeleccionada.Primer_Apellido} name={'Primer_Apellido'}
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline" label="Segundo Apellido"
                        value={consolaSeleccionada && consolaSeleccionada.Segundo_Apellido} name={'Segundo_Apellido'}
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Cedula"
                        value={consolaSeleccionada && consolaSeleccionada.Cedula} name={'Cedula'}
                        onChange={(e) => handleUserInput(e)}
                        type='number'
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Edad"
                        value={consolaSeleccionada && consolaSeleccionada.Edad} name={'Edad'}
                        onChange={(e) => handleUserInput(e)}
                        type='number'
                      />
                      {/* <TextField className={style.textField} id="outlined-multiline-flexible" label="Fecha de Nacimiento"
                        value={user.Primer_Nombre && consolaSeleccionada.birthDay} name={'birthDay'}
                        onChange={(e) => handleUserInput(e)}
                        type='date' InputLabelProps={{ shrink: true }}
                      /> 
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Talla de Camisa"
                        value={user.Primer_Nombre && consolaSeleccionada.shirtSize} name={'shirtSize'}
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Talla de Chaqueta"
                        value={user.Primer_Nombre && consolaSeleccionada.jacketSize} name={'jacketSize'}
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Día Especial"
                        value={user.Primer_Nombre && consolaSeleccionada.specialDay} name={'specialDay'}
                        onChange={(e) => handleUserInput(e)}
                      />*/}
                      <FormControl className={style.textField}>
                        <InputLabel id="demo-simple-select-label">Idiomas</InputLabel>
                        <Select
                          label='Idiomas'
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={consolaSeleccionada.Idioma} name={'Idioma'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionIdiomas}
                          multiple
                          // renderValue={(selected) => {
                          //   if (selected.length > 1 && selected.length < languagesSelect.length) {
                          //     return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                          //   } else if (selected.length === consolaSeleccionada.Idioma.length) {
                          //     return (
                          //       <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                          //     )
                          //   } else if (selected.length < 2) {
                          //     return (
                          //       <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                          //         {selected.map((value) => {
                          //           for (let h = 0; h < consolaSeleccionada.Idioma.length; h++) {
                          //             const element = consolaSeleccionada.Idioma[h];
                          //             if (element.Id === value) {
                          //               return (<Chip sx={{ '& span': { fontSize: '10px' } }} key={value} label={element.Descripcion} />)
                          //             }
                          //           }
                          //         })}
                          //       </Box>
                          //     )
                          //   }
                          // }}
                        >
                          {languagesSelect.map((item) => (
                            <MenuItem key={item.Id} value={item.Id} className='items'>
                              <Checkbox checked={consolaSeleccionada.Idioma.indexOf(item.Id) > -1} />
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
                          value={consolaSeleccionada && consolaSeleccionada.Profesion} name={'Profesion'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionProfesiones}
                        >
                          {professionSelect.map((item) => (
                            <MenuItem key={item.Id} value={item.Id} className='items'>
                              {/* <Checkbox checked={profession.indexOf(item.Id) > -1} /> */}
                              <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {/* <TextField className={style.textField} id="outlined-multiline" label="Otras Profesiones"
                        value={consolaSeleccionada.otherprofessions} name={'otherprofessions'}
                        onChange={(e) => handleUserInput(e)}
                      /> */}

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
                      {/* <TextField className={style.textField} id="outlined-multiline-flexible" label="Residencia"
                        value={user.Primer_Nombre && consolaSeleccionada.residence} name={'residence'}
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Celular"
                        value={user.Primer_Nombre && consolaSeleccionada.cell} name={'cell'}
                        type='tel'
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Correo"
                        value={user.Primer_Nombre && consolaSeleccionada.email} name={'email'}
                        type='email'
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Telefono de Oficina"
                        value={user.Primer_Nombre && consolaSeleccionada.officePhone} name={'officePhone'}
                        style={{ minWidth: 210 }} type='tel'
                        onChange={(e) => handleUserInput(e)}
                      />
                      <TextField className={style.textField} id="outlined-multiline-flexible" label="Extensión"
                        value={user.Primer_Nombre && consolaSeleccionada.extension} name={'extension'}
                        style={{ minWidth: 210 }} type='number'
                        onChange={(e) => handleUserInput(e)}
                      /> */}
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
                      {/* <TextField className={style.textField} id="outlined-multiline-flexible" label="Fecha de Ingreso a la Empresa"
                        value={user.joining && consolaSeleccionada.joining} name={'joining'}
                        InputLabelProps={{ shrink: true }} type='date'
                        onChange={(e) => handleUserInput(e)}
                      /> */}
                      <FormControl className={style.textField}>
                        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
                        <Select
                          label='Cargo'
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={consolaSeleccionada && consolaSeleccionada.Cargo} name={'Cargo'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionCargo}
                        >
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
                          value={consolaSeleccionada && consolaSeleccionada.Area} name={'Area'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionArea}
                        >
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
                          value={consolaSeleccionada && consolaSeleccionada.Departamento} name={'Departamento'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionDirection}
                        >
                          {directionSelect.map((item) => (console.log(item),
                            <MenuItem key={item.Id} value={item.Id} className='items'>
                              <ListItemText sx={{ fontSize: '10px' }} primary={item.Descripcion} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      {/* <TextField className={style.textField} id="outlined-multiline-flexible" label="Código de Profit"
                        value={user.Primer_Nombre && consolaSeleccionada.profitCode} name={'profitCode'}
                        type='text' onChange={(e) => handleUserInput(e)}
                      /> */}
                      <FormControl className={style.textField}>
                        <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
                        <Select
                          label='Supervisor'
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={consolaSeleccionada && consolaSeleccionada.EstatuSupervisado} name={'EstatuSupervisado'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionSuperVisorSupervisado}
                          multiple
                          input={<OutlinedInput label='Supervisor' />}
                          renderValue={(selected) => {
                            if (selected.length > 1 && selected.length < superVISelect.length) {
                              return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                            } else if (selected.length === consolaSeleccionada.EstatuSupervisado.length) {
                              return (
                                <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                              )
                            } else if (selected.length < 2) {
                              return (
                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                  {selected.map((value) => {
                                    for (let h = 0; h < consolaSeleccionada.EstatuSupervisado.length; h++) {
                                      const element = consolaSeleccionada.EstatuSupervisado[h];
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
                              <Checkbox checked={consolaSeleccionada.EstatuSupervisado.indexOf(item.Cedula) > -1} />
                              <ListItemText sx={{ fontSize: '10px' }} primary={item.Primer_Nombre + " " + item.Primer_Apellido} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      {/* <FormControl className={style.textField}>
                        <InputLabel id="demo-simple-select-label">Supervisado</InputLabel>
                        <Select
                          multiple
                          label='Supervisado'
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={user.Primer_Nombre && consolaSeleccionada.supervised} name={'supervised'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionSuperVisorSupervisado}
                          renderValue={(selected) => {
                            if (selected.length > 1 && selected.length < superVISelect.length) {
                              return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                            } else if (selected.length === consolaSeleccionada.supervised.length) {
                              return (
                                <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                              )
                            } else if (selected.length < 2) {
                              return (
                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                  {selected.map((value) => {
                                    for (let h = 0; h < consolaSeleccionada.supervised.length; h++) {
                                      const element = consolaSeleccionada.supervised[h];
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
                              <Checkbox checked={consolaSeleccionada.supervised.indexOf(item.Cedula) > -1} />
                              <ListItemText sx={{ fontSize: '10px' }} primary={item.Primer_Nombre + " " + item.Primer_Apellido} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                      <FormControl className={style.textField}>
                        <InputLabel id="demo-simple-select-label">Perfil de Usuario</InputLabel>
                        <Select
                          label='Perfil de Usuario'
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={consolaSeleccionada && consolaSeleccionada.Perfil} name={'Perfil'}
                          onChange={(e) => handleUserInput(e)}
                          onOpen={peticionPerfil}
                          renderValue={(selected) => {
                            console.log(selected)
                            if (selected.length > 1 && selected.length < perfilSelect.length) {
                              return (<ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`(${selected.length}) Idiomas Marcados`} />)
                            } else if (selected.length === consolaSeleccionada.Perfil.length) {
                              return (
                                <ListItemText sx={{ '& span': { fontSize: '10px' } }} primary={`Todos los Idiomas marcados (${selected.length})`} />
                              )
                            } else if (selected.length < 2) {
                              return (
                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0.5 }}>
                                  {selected.map((value) => {
                                    for (let h = 0; h < consolaSeleccionada.Perfil.length; h++) {
                                      const element = consolaSeleccionada.Perfil[h];
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
                          {perfilSelect.map((item) => (
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
                      {/* <Tooltip title='Marque aquí si desea continuar con las imagenes del usuario.'> */}
                        <Button variant="contained" onClick={handleNext}>Siguiente</Button>
                      {/* </Tooltip> */}
                      {/* <Tooltip title='Si no posee las fotos del usuario, marque aquí.'> */}
                        <p>hola</p>                        {/* <Button variant="contained" color="success" onClick={handleRegister}>Enviar</Button> */}
                      {/* </Tooltip> */}
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
                              value={user.Primer_Nombre && consolaSeleccionada.image} name={'foto'}
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
                              value={user.Primer_Nombre && consolaSeleccionada.avatar} name={'avatar'}
                              onChange={(e) => handleUserInput(e)}
                            />
                          </Button>
                        </CardActionArea>
                      </Card>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
                      <Button variant="contained" color="inherit" disabled={stepActive === 0} onClick={handleBack} sx={{ mr: 1 }} >Regresar</Button>
                      {/* <Button variant="contained" color="success" onClick={handleRegister}>Enviar</Button> */}
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
            </Box>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openModalCreates}
        onClose={closeModalCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ position: 'relative', left: '5%', top: '5%', width: '90%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
          <CreateUser
            setOpenModalCreates={setOpenModalCreates}
          />
        </Box>
      </Modal>
    </Box>
  );
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
