import { Box, Container, IconButton } from "@mui/material"
import React from "react"
import './home.css'
import Ateniense from "./homeComponents/ateniense"
import ButtonsInteracction from "./homeComponents/interactionsHome"
import HeaderComponent from "../components/headerComponent"
import axios from "axios"
import { ThirtyFpsSelectOutlined } from "@mui/icons-material"

class Home extends React.Component{

    constructor(props){
        super(props);
        this.handleActiveClick = this.handleActiveClick.bind(this);
        this.state={
            activo:'',
            dates:[]
        }
    }
    handleActiveClick(data) {
        this.setState({activo:data})
    }
    

    // abortController = new AbortController();
    // // url con limite https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=IGQVJXSWtTMURJZAU9BYWRubnFrbUZAhdjdsb2s3SzEyUk9TMHdWc0NXbGg5S3J6Q2p3bGNHVzcyUV9ydHM1eEhjMTdLU0JzUWdIMGZA5NnBKZAnJOVDdHVENsVmUtLVRHdkw0U0hMei1PaWxqdmU3MG9GRgZDZD
    //     async componentDidMount(){
    //         try {
    //             axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJXSWtTMURJZAU9BYWRubnFrbUZAhdjdsb2s3SzEyUk9TMHdWc0NXbGg5S3J6Q2p3bGNHVzcyUV9ydHM1eEhjMTdLU0JzUWdIMGZA5NnBKZAnJOVDdHVENsVmUtLVRHdkw0U0hMei1PaWxqdmU3MG9GRgZDZD')
    //             .then(result => { 
    //                 this.setState({dates:[result.data.data]})
    //             })
    //         } catch (error) {    
    //             console.log(error)        
    //         }
    //     }


    render(){
        return(
            <Container className="containerHome">
                <HeaderComponent
                    data={this.state.activo}
                />

                <Box className="boxContainer">
                    <Container className="atenienseContainer">
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
