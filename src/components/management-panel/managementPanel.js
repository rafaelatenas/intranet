import { Accordion, AccordionDetails, AccordionSummary, Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from "../components/headerComponent";
import './managementPanel.css'


class ManagementPanel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            secondName:'',
            lastName:'',
            secondLastName:'',
            CI:'',
            birth:'',
            charge:'',
            area:'',
            direction:'',
            cell:'',
            email:'',
            joining:'',
            specialDay:'',
            profession:'',
            shirtSize:'',
            officePhone:'',
            extension:'',
            supervisor:'',
            supervised:'',
            expanded:false
        }
    }

    handleChange = (panel, isExpanded) => {
        this.setState({expanded:panel});
    };
    handleUserInput =(e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value})
    }

    render(){ console.log(this.state.firstName)
        return(
            <Container className="ContainerAdmin">
                <HeaderComponent className='header'/>
                <Box className="boxAdmin">
                    <Accordion expanded={this.state.expanded === 'panel1'} onChange={()=>this.handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Crear Usuario</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TextField id="outlined-multiline-flexible" label="Primer Nombre"
                                value={this.state.firstName} name={'firstName'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Segundo Nombre"
                                value={this.state.secondName} name={'secondName'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Primer Apellido"
                                value={this.state.lastName} name={'lastName'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Segundo Apellido"
                                value={this.state.secondLastName} name={'secondLastName'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Cargo"
                                value={this.state.charge} name={'charge'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Área"
                                value={this.state.area} name={'area'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Dirección"
                                value={this.state.direction} name={'direction'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Celular"
                                value={this.state.cell} name={'cell'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Correo"
                                value={this.state.email} name={'email'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Fecha de Ingreso a la Empresa"
                                value={this.state.joining} name={'joining'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Día Especial"
                                value={this.state.specialDay} name={'specialDay'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Profesión"
                                value={this.state.profession} name={'profession'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Talla de Camisa o Chaqueta"
                                value={this.state.shirtSize} name={'shirtSize'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Telefono de Oficina"
                                value={this.state.officePhone} name={'officePhone'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="Extensión"
                                value={this.state.extension} name={'extension'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="supervisor"
                                value={this.state.supervisor} name={'supervisor'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                            <TextField id="outlined-multiline-flexible" label="supervisado"
                                value={this.state.supervised} name={'supervised'}
                                onChange={(e)=>this.handleUserInput(e)}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={this.state.expanded === 'panel2'} onChange={()=>this.handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Collapsible Group Item #1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        )
    }
}

export default ManagementPanel