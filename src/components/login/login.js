import React from "react"
import axios from "axios"
import { TextField, FormControl, InputLabel, OutlinedInput, IconButton, Button, Container, Box, InputAdornment, FormHelperText } from "@mui/material"
import { VisibilityOff, Visibility } from "@mui/icons-material"
import atsLogo from '../../landing/images/Logo_Atenas.png'
import './login.css'
import ReCAPTCHA from "react-google-recaptcha"
import { NavLink } from "react-router-dom"

const recaptchaRef = React.createRef();

class Login extends React.Component{

  constructor(props){
     super(props);
      this.state={
        Email:'',
        Password:'',
        formErrors:{Email:'',Password:''},
        emailValid:false,
        passwordValid:false,
        formValid:false,
        ValidToken:false,
        showPassword:false
      }
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    
    switch(fieldName) {
      case 'Email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.Email = emailValid ? '' : 'Correo invalido';
        this.setState({formErrors: {Email: fieldValidationErrors.Email}})
        break;
      case 'Password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.Password = passwordValid ? '': 'Clave demasiado corta';
        this.setState({formErrors: {Password: fieldValidationErrors.Password}})
        break;
      default:
        break;
    }
    this.setState(
      {formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      }, 
      this.validateForm);

  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},() => { this.validateField(name, value) });
  } 
  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword}) 
  };
  // handleMouseDownPassword = () => {
  //   this.setState({showPassword: this.state.showPassword})
  // }
  enviarDatos=(e)=>{ 
    e.preventDefault();
    const {Email,Password}=this.state;
   // var responseKey = recaptchaRef.current.getValue();
    var datosEnviar={
      email:Email,
      password:Password,
     // captcha:responseKey
    } 
    axios.post(process.env.REACT_APP_API_ENDPOINT+"login",datosEnviar).then(result => {
      var nombre=result.data.NombresUsuarios;
      var apellidos=result.data.ApellidosUsuarios;  
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('Login', result.data.Login);
      localStorage.setItem('nombres', result.data.NombresUsuarios);
      localStorage.setItem('apellidos', result.data.ApellidosUsuarios);
      sessionStorage.setItem('Id_Cliente', result.data.ID_Cliente);
      var cliente = result.data.Cliente;
        if (cliente === 'ATENAS') {
          window.location.href = '/home'
        } else {
          console.log('no')
        }  
    }).catch(err => {
      console.log(err)
      if(err.response) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        console.log(err.response.headers);        
      }       
    })
  }
    /* Validación Google */
  // handleChange = value => {
  //   if (value !== null) {
  //     this.isHuman()
  //   }
  // }
  // isHuman=async()=>{
  //   var responseKey = {captcha: recaptchaRef.current.getValue()};
  //   axios.post(process.env.REACT_APP_API_ENDPOINT+"ValidationCaptcha",responseKey)
  //   .then(result => {
  //     console.log(result)
  //     switch (result.data.success) {
  //       case true:
  //         this.setState({ValidToken:true})
  //         break;
  //       case false:
  //         this.setState({ValidToken:false})
  //         break;
  //       default:
  //         break;
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  render(){
    return(
      <section className="login">
        <Box className="card-login">
          <FormControl className="Form">
            <img className="logoAtenasLogin" src={atsLogo} alt="Logo de Atenas Grupo Consultor" title=""></img>
            <TextField error={this.state.formErrors.Email === ''? false: true} helperText={this.state.formErrors.Email} className='email' 
              variant="outlined" label="Ateniese" type='text' name='Email' value={this.state.Email} onChange={this.handleUserInput}/>
            <FormControl error={this.state.formErrors.Password === ''? false: true} className='password'>
              <InputLabel  style={{ zIndex:'30', color:'#000'} } htmlFor="outlined-adornment-password">Contraseña</InputLabel>
              <OutlinedInput id="outlined-adornment-password" type={this.state.showPassword?  'text' : 'password'} name='Password' value={this.state.Password} onChange={this.handleUserInput}
                endAdornment={
                <IconButton style={{width:'10%',height:'100%'}} aria-label="toggle password visibility" onClick={this.handleClickShowPassword}  edge="end">
                  {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
                }
              />
              <FormHelperText>{this.state.formErrors.Password}</FormHelperText>
            </FormControl>
              
            <Button className="button" variant="outlined" disabled={!this.state.ValidToken} onClick={this.enviarDatos}>Confirmar</Button>
            <NavLink to={'home'}><p>¿Olvidó su Clave?</p></NavLink>
          </FormControl>
            {/* <ReCAPTCHA 
              className="recaptcha"
              onChange={this.handleChange}
              sitekey={process.env.REACT_APP_PUBLIC_KEY}
              badge='bottomleft'
              ref={recaptchaRef}
            /> */}
        </Box>
      </section>
    )
  }
}
export default Login