import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

  

export default function EditUser(props) {
  
  const {dates}=props
const columns = [
    {
      field: 'Cedula',
      headerName: 'Cédula',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Primer_Nombre',
      headerName: 'Primer Nombre',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Segundo_Nombre',
      headerName: 'Segundo Nombre',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Primer_Apellido',
      headerName: 'Primer Apellido',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Segundo_Apellido',
      headerName: 'Segundo Apellido',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Edad',
      headerName: 'Edad',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Date',
      headerName: 'Fecha de Nacimiento',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Profesion',
      headerName: 'Profesión',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    
    {
      field: 'Cargo',
      headerName: 'Cargo',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Area',
      headerName: 'Area',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Departamento',
      headerName: 'Dirección',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Idioma',
      headerName: 'Idiomas',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    {
      field: 'Perfil',
      description: 'This column has a value getter and is not sortable.',
      headerName: 'Perfil del Usuario',
      width: 150,
      editable: false,
      headerAlign:'center',
      align: 'center',
    },
    { field: 'Acciones',
    description: 'This column has a value getter and is not sortable.',
    headerName: 'Acciones',
    headerAlign:'center',
    sortable: false,
    align:'center',
    renderCell: (params) => {
      return[
      <Tooltip title="Editar" arrow placement="bottom">
        <Edit style={{cursor:'pointer'}}/> 
      </Tooltip>
      ,
      <Tooltip title="Eliminar" arrow placement="bottom">
        <Delete style={{cursor:'pointer'}} />
      </Tooltip>
      
      ]
    },
  },

    
    // {
    //   field: 'lastName',
    //   headerName: 'Last name',
    //   width: 150,
    //   editable: false,
    //   headerAlign:'center',
    //   align: 'center',
    // },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 110,
    //   editable: false,
    //   headerAlign:'center',
    //   align: 'center',
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   headerAlign:'center',
    //   align: 'center',
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dates}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.Cedula}
        // rowsPerPageOptions={[5]}
        // disableSelectionOnClick
      />
    </Box>
  );
}
