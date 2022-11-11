import { ExpandMoreRounded, Search } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, FormControlLabel, IconButton, InputBase, MenuItem, Paper, Slide, TextField, Typography } from "@mui/material";
import React from "react";
import HeaderComponent from "../components/headerComponent";
import CreateUser from "./managementComponents/createUser";
import CardUser from "./managementComponents/CardUser";
import './managementPanel.css'
import axios from "axios";

class ManagementPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            ElementExpanded: '',
            stepActive: 0,
            listEmpleados: [],
            listEmpleadosCopia: [],
            search: "",
            currency: [],
            currencyPreV: [],
            checked: false
        }
    }

    handleChangeCheck = () => {
        this.setState({checked:!this.state.checked});
    };
    peticionEmpleados = () => {
        const token = sessionStorage.getItem('token')
        let headersList = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
        let reqOptions = {
            url: process.env.REACT_APP_API_ENDPOINT + "ListarEmpleados",
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions)
            .then(response => {
                console.log(response.data.data)
                if (response.data.message) {
                    //   toast.fire({
                    //     icon: 'warning',
                    //     title: '' + response.data.message,
                    //   })
                } else {
                    this.setState({ listEmpleados: response.data.data, listEmpleadosCopia: response.data.data })
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
    handleChange = (panel) => {
        this.setState({ ElementExpanded: panel, expanded: !this.state.expanded });
    };
    componentDidMount() {
        const token = sessionStorage.getItem('token')
        let headersList = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
        let reqOptions = {
            url: process.env.REACT_APP_API_ENDPOINT + "ListarEmpleados",
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions)
            .then(response => {
                console.log(response.data.data)
                if (response.data.message) {
                    //   toast.fire({
                    //     icon: 'warning',
                    //     title: '' + response.data.message,
                    //   })
                } else {
                    this.setState({ listEmpleados: response.data.data, listEmpleadosCopia: response.data.data })
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
    handleChangeCurrency = (e) => {
        const { name, value } = e.target
        // this.setState({currency:value})
        this.setState(prevState => {
            return { currency: value, currencyPreV: prevState.currency };
        });
    }

    filter = (text) => {
        let { value } = text.target
        const data = this.state.listEmpleadosCopia
        let valor
        switch (this.state.currency) {
            case 0:
                valor = 0
                break;
            case 1:
                valor = 1
                break;
            case 2:
                valor = 2
                break;
            case 3:
                valor = 3
                break;
            case 4:
                valor = 4
                break;
            default:
                break;
        }
        const newData = data.filter(function (item) {

            const itemDataPrimerNombre = item.Primer_Nombre.toUpperCase()
            const itemDataSegundoNombre = item.Segundo_Nombre.toUpperCase()
            const itemDataPrimerApellido = item.Primer_Apellido.toUpperCase()
            const itemDataSegundoApellido = item.Segundo_Apellido.toUpperCase()
            const itemDataFecha = item.Date.toUpperCase()
            const itemDataCedula = item.Cedula
            const itemDataEdad = item.Edad
            let itemData
            let texData = value.toUpperCase()
            switch (valor) {
                case 0:
                    itemData = itemDataPrimerNombre + " " + itemDataSegundoNombre + " " + itemDataPrimerApellido + " " + itemDataSegundoApellido
                    break;
                case 1:
                    itemData = String(itemDataCedula)
                    break;
                case 2:
                    itemData = String(itemDataEdad)
                    break;
                case 3:
                    itemData = itemDataFecha
                    break;
                default:
                    itemData = itemDataPrimerNombre + " " + itemDataSegundoNombre + " " + itemDataPrimerApellido + " " + itemDataSegundoApellido
                    break;
            }
            return itemData.indexOf(texData) > -1
        })
        this.setState({
            listEmpleados: newData,
            search: value
        })
    }

    render() {
        console.log(this.state.checked)
        const currencies = [
            { value: 0, label: 'Nombre' },
            { value: 1, label: 'Cedula' },
            { value: 2, label: 'Edad' },
            { value: 3, label: 'Fecha de Nacimiento' },
        ];
        return (
            <Container className="ContainerAdmin">
                <HeaderComponent className='header' />
                <Box className="boxAdmin">
                    <FormControlLabel
                        control={
                            <IconButton onClick={this.handleChangeCheck} sx={{ background: "#1976d2", position: "absolute", right: '2%', top: '2%' }}>
                                <Search sx={{ color: '#fff' }} />
                            </IconButton>
                        }
                    />
                    <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
                        <Paper
                            elevation={4}
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 450 }}
                        >
                            <TextField
                                id="outlined-select-currency"
                                select
                                value={this.state.currency}
                                onChange={this.handleChangeCurrency}
                                variant="filled"
                                label="Filtros"
                                size="small"
                                sx={{width:'20%'}}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <InputBase
                                disabled={this.state.currency.length === 0}
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Busqueda de Empleados"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={(e) => this.filter(e)}
                                value={this.state.search}
                                size="small"
                            />
                            <Search />
                        </Paper>
                    </Slide>
                    <CardUser dates={this.state.listEmpleados} />
                    {/* <Accordion className="Accordion" expanded={this.state.ElementExpanded === 'panel1' && this.state.expanded===true} onChange={()=>this.handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                            <Typography>Registrar Usuario</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CreateUser/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="Accordion" expanded={this.state.ElementExpanded === 'panel2' && this.state.expanded===true} onChange={()=>this.handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreRounded/>}>
                            <Typography>Listar Usuarios</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                        </AccordionDetails>
                    </Accordion> */}
                </Box>
            </Container>
        )
    }
}

export default ManagementPanel