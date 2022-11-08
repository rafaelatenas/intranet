import { ExpandMoreRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import React from "react";
import HeaderComponent from "../components/headerComponent";
import CreateUser from "./managementComponents/createUser";
import EditUser from "./managementComponents/editUser";
import './managementPanel.css'
import axios from "axios";

class ManagementPanel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            expanded:false,
            ElementExpanded:'',
            stepActive:0,
            listEmpleados:[]
        }
    }
    peticionEmpleados=()=>{
        const token = sessionStorage.getItem('token')
        let headersList = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
           }
        let reqOptions = {
            url: process.env.REACT_APP_API_ENDPOINT+"ListarEmpleados",
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
                this.setState({listEmpleados:response.data.data})
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
        this.setState({ElementExpanded:panel,expanded:!this.state.expanded });
        if (panel === 'panel2') {
            this.peticionEmpleados()
        }
    };
    
    render(){
        console.log(this.state.listEmpleados)
        return(
            <Container className="ContainerAdmin">
                <HeaderComponent className='header'/>
                <Box className="boxAdmin">
                    <Accordion className="Accordion" expanded={this.state.ElementExpanded === 'panel1' && this.state.expanded===true} onChange={()=>this.handleChange('panel1')}>
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
                            <EditUser
                                dates={this.state.listEmpleados}
                                            />
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        )
    }
}

export default ManagementPanel