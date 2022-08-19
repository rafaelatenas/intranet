import React, { useState } from "react"
import axios from "axios"
import { TextField, FormControl, InputLabel, OutlinedInput, IconButton, Button, Container, Box, InputAdornment, FormHelperText, Modal } from "@mui/material"
import { VisibilityOff, Visibility, EmailOutlined } from "@mui/icons-material"
import atsLogo from '../../landing/images/Logo_Atenas.png'
import './login.css'
import ReCAPTCHA from "react-google-recaptcha"
import { NavLink } from "react-router-dom"
import atenasLogo from '../../landing/images/ATSLOGO.png'

export default function Login (){
  const recaptchaRef = React.createRef()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [formErrors, setFormErrors] = useState({Email: '', Password: '', EmailRecovery:''})
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [formValidValid, setFormValid] = useState(false)
  const [validToken, setValidToken] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const withdScreen = window.innerWidth
  const [open,setOpen] = useState(false)
  const [checked, setChecked] = React.useState(false);
  const [emailRecovery,setEmailRecovery] = useState('')
  const [emailValidRecovery, setEmailValidRecovery] = useState(false)


  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let EmailValid = emailValid;
    let PasswordValid = passwordValid;
    let EmailValidRecovery = emailValidRecovery;
    
    switch(fieldName) {
      case 'Email':
        EmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.Email = EmailValid ? '' : 'Correo invalido';
        setFormErrors({Email: fieldValidationErrors.Email})
        break;
      case 'Password':
        PasswordValid = value.length >= 6;
        fieldValidationErrors.Password = PasswordValid ? '': 'Clave demasiado corta';
        setFormErrors({Password: fieldValidationErrors.Password})
        break;
      case 'EmailRecovery':
        EmailValidRecovery = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.EmailRecovery = EmailValidRecovery ? '' : 'Correo invalido';
        setFormErrors({EmailRecovery: fieldValidationErrors.EmailRecovery})
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors)
    setEmailValid(emailValid)
    setPasswordValid(passwordValid)
    setEmailValidRecovery(EmailValidRecovery)
    console.log(formErrors)
  }
  const handleUserEmail = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateField(name, value)
    setEmail(value)
  } 
  const handleUserPassword = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateField(name, value)
    setPassword(value)
  } 
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword) 
  };
  const enviarDatos=(e)=>{ 
    e.preventDefault();
    var responseKey = recaptchaRef.current.getValue();
    var datosEnviar={
      email:email,
      password:password,
      captcha:responseKey
    } 
    axios.post(process.env.REACT_APP_API_ENDPOINT+"login",datosEnviar).then(result => {
      var nombre=result.data.NombresUsuarios;
      var apellidos=result.data.ApellidosUsuarios;  
      sessionStorage.setItem('token', result.data.token);
      sessionStorage.setItem('user', result.data.Login);
      sessionStorage.setItem('Id_Cliente', result.data.ID_Cliente);
      sessionStorage.setItem('success', result.data.success);

      // if (result.data.success === true) {
      //   login();
      // }
    }).catch(err => {
        if(err.response) {
          console.log(err.response)
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);        
        
        }       
    })
  }
    /* Validación Google */
  const handleChangeRecovery = value => {
    if (value !== null) {
      isHuman()
    }
  }
  const handleChangeLogin = value => {
    if (value !== null) {
      isHuman()
    }
  }
  const isHuman=async()=>{
    var responseKey = {captcha: recaptchaRef.current.getValue()};
    axios.post(process.env.REACT_APP_API_ENDPOINT+"ValidationCaptcha",responseKey)
    .then(result => {
    switch (result.data.success) {
      case true:
        setValidToken(true)
        break;
      case false:
        setValidToken(false)
        break;
      default:
        break;
    }
    }).catch(err => {
      console.log(err)
    })
  }
  const openModalPassword = ()=>{
    setOpen(!open)
  }
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  const handleUserEmailRecovery = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateField(name, value)
    setEmailRecovery(value)
  } 
  const PasswordRecovery=()=>{
    console.log(0)
  }
    return(
      <section className="login">
        <Box className="card-login">
          <FormControl className="Form">
            <img className="logoAtenasLogin" src={atsLogo} alt="Logo de Atenas Grupo Consultor" title=""></img>
            <TextField error={formErrors.Email === ''? false: true} helperText={formErrors.Email} className='email' 
              variant="outlined" label="Ateniese" type='text' name='Email' value={email} onChange={(e)=>handleUserEmail(e)}/>
            <TextField error={formErrors.Password === ''? false: true}
              helperText={formErrors.Password} className={formErrors.Password === ''? 'password': 'password error'} type={showPassword?  'text' : 'password'} 
              variant="outlined" label="Clave" name='Password' value={password} onChange={(e)=>handleUserPassword(e)}
            InputProps={{
              endAdornment:(
                <IconButton style={{width:'10%',height:'100%'}} aria-label="toggle password visibility" onClick={handleClickShowPassword}  edge="end">
                  {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
                )
            }}
            />
            <Button className="button" variant="outlined" href='/keen-treacle-2297b4.netlify.app/home'>Confirmar</Button>
            <Button onClick={()=>openModalPassword()}>¿Olvido su Clave?</Button>
          </FormControl>
          <Modal
            className='ModalRecovery'
            open={open}
            onClose={()=>openModalPassword()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container className='containerRecovery'>
              <Box className='boxRecovery'>
                <img className='logoLogin' src={atenasLogo} alt="Logo Atenas" title=''/>
                <TextField error={formErrors.EmailRecovery === ''? false: true} 
                  helperText={formErrors.EmailRecovery} className={formErrors.EmailRecovery === ''? 'email': 'email error'} 
                  variant="outlined" label="Correo" type='text' name='EmailRecovery' value={emailRecovery} onChange={(e)=>handleUserEmailRecovery(e)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment style={{width:'auto'}} position="start">
                        <EmailOutlined style={{width:'auto'}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                <ReCAPTCHA 
                className="recaptcha"
                onChange={handleChangeRecovery}
                sitekey={process.env.REACT_APP_PUBLIC_KEY}
                badge='bottomleft'
                ref={recaptchaRef}
                />
                {/* <FormGroup>
                  <FormLabel>¿Está seguro de realizar esta acción?</FormLabel>
                  <FormControlLabel control={CheckboxModal} label="Si, deseo realizar esta acción." />
                </FormGroup> */}
                <Button variant="contained" disabled={!validToken} onClick={()=>PasswordRecovery()}>Confirmar</Button>
            </Box>
            </Container>
            
          </Modal>
            <ReCAPTCHA 
              className="recaptcha"
              onChange={handleChangeLogin}
              sitekey={process.env.REACT_APP_PUBLIC_KEY}
              badge='bottomleft'
              ref={recaptchaRef}
            />
        </Box>
      </section>
    )
}