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
                                value={this.state.secondLastName} name={'secondName'}
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