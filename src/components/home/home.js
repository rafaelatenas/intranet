import { Box, Button, Container, IconButton } from "@mui/material"
import React from "react"
import './home.css'
import Ateniense from "./homeComponents/ateniense"
import ButtonsInteracction from "./homeComponents/interactionsHome"
import HeaderComponent from "../components/headerComponent"
import axios from "axios"
import { AddAPhoto, AddPhotoAlternateRounded, ThirtyFpsSelectOutlined } from "@mui/icons-material"
import ModalElements from "../management-panel/managementComponents/elementsToform"
import ModalAteniense from "./homeComponents/modalAteniense"

class Home extends React.Component{

    constructor(props){
        super(props);
        this.handleActiveClick = this.handleActiveClick.bind(this);
        this.state={
            activo:'',
            openModal:false,
            dates:[]
        }
    }
    handleActiveClick(data) {
        this.setState({activo:data})
    }
    handleNew=(e)=>{
        console.log(e)
        this.setState({openModal:!this.state.openModal})
    }
    render(){
        return(
            <Container className="containerHome">
                <HeaderComponent
                    data={this.state.activo}
                />

                <Box className="boxContainer">
                    <Container className="atenienseContainer" sx={{display:'flex',flexDirection:'column',alignItems: 'flex-end'}}>
                        <Button onClick={this.handleNew}>
                            <AddPhotoAlternateRounded/>
                        </Button>
                        <ModalAteniense
                            openModal={this.state.openModal}
                            closemodal={()=>this.handleNew()}
                        />
                        <Ateniense/>
                    </Container>
                    <Container className="buttonsContainer">
                            <ButtonsInteracction
                                evento={this.handleActiveClick}
                            />
                    </Container>
                </Box>
            </Container>
        )
    }
}
export default Home;
