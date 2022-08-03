import { Button, Card, CardContent, Container } from "@mui/material";
import React from "react";
import './interactionsHome.css'

class ButtonsInteracction extends React.Component{
    render(){
        return(
            <Container className="containerButtons">
                <Card className="cardContainerButtons1">
                    <CardContent className="cardContentButtons1">
                        <div className="descriptionButton">
                            <p className="nameButton">Nombre y Apellido</p>
                            <p className="chargeButton">Cargo que ocupa</p>
                        </div>
                        <img src="" alt="" title="" className="personButton"/>
                        <Button className="spaceAtenas"> <p>Mi espacio <strong>ATENAS</strong></p></Button>
                    </CardContent>
                </Card>
                <Card className="cardContainerButtons2">
                    <CardContent className="cardContentButtons2">
                        <p>hola</p>
                    </CardContent>
                </Card>
                <Card className="cardContainerButtons2">
                    <CardContent className="cardContentButtons2">
                        <p>hola</p>
                    </CardContent>
                </Card>
            </Container>
        )
    }
}
export default ButtonsInteracction;
