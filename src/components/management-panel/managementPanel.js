import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import React from "react";
import HeaderComponent from "../components/headerComponent";
import './managementPanel.css'
class ManagementPanel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            expanded:false
        }
    }

    // handleChange = (panel) => {
    //     console.log(panel)
    //     this.setState({expanded:panel});
    // };

    handleChange = (panel) => (event, isExpanded) => {
        console.log(isExpanded)
        this.setState({expanded:panel});
        // setExpanded(isExpanded ? panel : false);
    };

    render(){
        return(
            <Container className="ContainerAdmin">
                <HeaderComponent className='header'/>
                <Box className="boxAdmin">
                    <Accordion expanded={this.state.expanded === 'panel1'} onChange={()=>this.handleChange('panel1')}>
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