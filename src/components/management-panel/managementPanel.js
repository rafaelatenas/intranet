import { ExpandMoreRounded, PersonAddAlt1Rounded, PersonAddRounded, RecentActorsRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Paper, Step, StepContent, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from "../components/headerComponent";
import CreateUser from "./managementComponents/createUser";
import './managementPanel.css'


class ManagementPanel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            expanded:false,
            ElementExpanded:'',
            stepActive:0,
        }
    }

    handleChange = (panel, isExpanded) => {
        this.setState({ElementExpanded:panel,
            expanded:!this.state.expanded });
    };
    
    render(){console.log(this.state.stepActive)
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