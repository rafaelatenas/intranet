import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { AddCircleRounded, Delete, Edit, ExpandMore, PersonAdd } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Modal, Tooltip } from '@mui/material';
import AtenasLogo from '../../../landing/images/comprimido/ats_logo.png'
import axios from "axios";
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CreateUser from './createUser';

export default function EditUser(props) {
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
  const { dates } = props
  const [user, setUser]=useState([])
  const [openModalEdits, setOpenModalEdits]=useState(false)
  const [openModalCreates, setOpenModalCreates]=useState(false)


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
        setUser(response.data.data[0])
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
  const OpenModalEdit=(e)=>{
    setOpenModalEdits(true)
    peticionUsuarioCI(e)
  }
  const closeModalEdit=()=>{
    setOpenModalEdits(false)
  }
  const OpenModalCreate=()=>{
    setOpenModalCreates(true)
  }
  const closeModalCreate=()=>{
    setOpenModalCreates(false)
  }
  console.log(user)
  return (
    <Box sx={{ height: '80%', gridGap: '5%', justifyContent: 'center', width: '100%', overflow: 'visible', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 20%))', gridTemplateRows: 'repeat(auto-fill, minmax(95px, 50%))' }}>
      <Card onClick={OpenModalCreate} sx={{ boxShadow: '1px -1px 8px 1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }}>
        <CardContent sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton sx={{ width: '160px', height: '160px', background: '#9f9a9a', '&:hover': { background: '#bbb8b885' } }}>
            <PersonAdd sx={{ fontSize: 60, color: '#fff' }} />
          </IconButton>
        </CardContent>
      </Card>
      {dates.map((dato) => (console.log(dato),
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
        <p>hplña</p>
      </Modal>
      <Modal
        open={openModalCreates}
        onClose={closeModalCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{position:'relative', left:'5%',top:'5%',width:'90%', height:'90%',display:'flex', alignItems:'center', justifyContent:'center', background: '#fff'}}>
          <CreateUser
            setOpenModalCreates={setOpenModalCreates}
          />
        </Box>
        
        
      </Modal>
      {/* <DataGrid
        rows={dates}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.Cedula}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      /> */}
    </Box>
  );
}
