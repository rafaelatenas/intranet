import { Box, Container, IconButton } from "@mui/material"
import React from "react"
import './home.css'
import Ateniense from "./homeComponents/ateniense"
import ButtonsInteracction from "./homeComponents/interactionsHome"
import HeaderComponent from "../components/headerComponent"

class Home extends React.Component{

    constructor(props){
        super(props);
        this.handleActiveClick = this.handleActiveClick.bind(this);
        this.state={
            activo:'',
            
        }
    }
    handleActiveClick(data) {
        this.setState({activo:data})
    }

    render(){console.log(this.state.activo)
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
async function getStaticProps(context) {
    const client = new Instagram({ username: 'INSTAGRAM_USERNAME', password: 'INSTAGRAM_PASSWORD' });
    await client.login();
    const response = await client.getPhotosByUsername({
        username: 'INSTAGRAM_USERNAME',
    });
    return {
        props: {
            posts: response.user.edge_owner_to_timeline_media.edges,
        }, // will be passed to the page component as props
    };
}